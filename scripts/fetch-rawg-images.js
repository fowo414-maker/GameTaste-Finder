// Populates js/games.js's `rawgData` object from the RAWG Video Games
// Database API (https://rawg.io/apidocs).
//
// Usage:
//   RAWG_API_KEY=your_key_here node scripts/fetch-rawg-images.js
//
// Re-fetch only specific games (merges into existing rawgData, leaves the
// rest untouched):
//   RAWG_API_KEY=your_key_here GAME_IDS=hades,sekiro node scripts/fetch-rawg-images.js
//
// Get a free key at https://rawg.io/apidocs (sign up, no cost tier available
// as of writing).
//
// Matching strategy (v2 - fixes a bug where a direct slug hit was accepted
// blindly even when it was a completely different, unrelated game that
// happened to hold the same short slug, e.g. our "hades"/"sekiro" ids
// matched obscure unrelated RAWG entries with 0 ratings and wrong genres):
//   1. Try a direct slug lookup (GET /api/games/{our-id}).
//   2. Only accept that hit if its name plausibly matches our title.
//   3. Otherwise fall back to a search query and accept the first candidate
//      whose name plausibly matches.
//   4. If nothing matches confidently, still record the best guess but tag
//      it "low confidence" and print it separately at the end instead of
//      silently trusting it - a rawgRating of 0/null and empty genres on a
//      well-known title is a strong tell that the match is wrong.
//
// This is a build-time/maintenance script only - it is never run in the
// visitor's browser and the API key is never shipped to the client.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const API_KEY = process.env.RAWG_API_KEY;

if (!API_KEY) {
  console.error("Missing RAWG_API_KEY. Get a free key at https://rawg.io/apidocs and run:");
  console.error("  RAWG_API_KEY=your_key_here node scripts/fetch-rawg-images.js");
  process.exit(1);
}

const onlyIds = process.env.GAME_IDS
  ? new Set(process.env.GAME_IDS.split(",").map((id) => id.trim()).filter(Boolean))
  : null;

const root = path.join(__dirname, "..");
const gamesJsPath = path.join(root, "js", "games.js");
const gamesJsSource = fs.readFileSync(gamesJsPath, "utf8");

const sandbox = {};
vm.createContext(sandbox);
const { games, rawgData: existingRawgData } = vm.runInContext(
  gamesJsSource + "\n;(function(){return {games, rawgData};})()",
  sandbox
);

const REQUEST_DELAY_MS = 350; // be polite to RAWG's free-tier rate limit
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function rawgFetch(url) {
  const res = await fetch(url, { headers: { "User-Agent": "GameTasteFinder/1.0 (build-time image sync)" } });

  if (res.status === 404) return null;

  if (!res.ok) {
    throw new Error(`RAWG request failed (${res.status}): ${url}`);
  }

  return res.json();
}

function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/[:\-–—'".!?™®]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Loose but conservative similarity check: exact match, one name containing
// the other (handles subtitle differences like "Sekiro" vs "Sekiro Shadows
// Die Twice"), or majority word overlap. Tuned to reject unrelated games
// with short/generic titles rather than to be lenient.
function namesLookSimilar(a, b) {
  const na = normalizeName(a);
  const nb = normalizeName(b);

  if (!na || !nb) return false;
  if (na === nb) return true;
  if (na.includes(nb) || nb.includes(na)) return true;

  const wordsA = new Set(na.split(" ").filter((w) => w.length > 2));
  const wordsB = new Set(nb.split(" ").filter((w) => w.length > 2));

  if (wordsA.size === 0 || wordsB.size === 0) return false;

  let overlap = 0;
  wordsA.forEach((w) => {
    if (wordsB.has(w)) overlap++;
  });

  return overlap / Math.min(wordsA.size, wordsB.size) >= 0.6;
}

// A well-known title with rating 0 / no ratings / no genres on RAWG almost
// always means the matched entry is an obscure, unrelated game - real
// popular titles always carry substantial RAWG review data.
function looksSuspicious(rawgGame) {
  const noRating = !rawgGame.rating || rawgGame.rating === 0;
  const noRatingsCount = !rawgGame.ratings_count || rawgGame.ratings_count === 0;
  const noGenres = !Array.isArray(rawgGame.genres) || rawgGame.genres.length === 0;
  return noRating && noRatingsCount && noGenres;
}

function toRawgEntry(rawgGame) {
  return {
    rawgId: rawgGame.id,
    rawgSlug: rawgGame.slug,
    image: rawgGame.background_image || null,
    rawgRating: typeof rawgGame.rating === "number" ? rawgGame.rating : null,
    rawgGenres: Array.isArray(rawgGame.genres) ? rawgGame.genres.map((g) => g.name) : [],
    released: rawgGame.released || null
  };
}

async function findRawgMatch(game) {
  const direct = await rawgFetch(`https://api.rawg.io/api/games/${encodeURIComponent(game.id)}?key=${API_KEY}`);
  const directLooksRight = direct && direct.id && namesLookSimilar(direct.name, game.title);

  if (directLooksRight && !looksSuspicious(direct)) {
    return { rawgGame: direct, confidence: "high" };
  }

  const searchUrl = `https://api.rawg.io/api/games?search=${encodeURIComponent(game.title)}&page_size=10&key=${API_KEY}`;
  const searchResult = await rawgFetch(searchUrl);
  const candidates = searchResult && Array.isArray(searchResult.results) ? searchResult.results : [];

  const goodMatch = candidates.find((c) => namesLookSimilar(c.name, game.title) && !looksSuspicious(c));
  if (goodMatch) {
    return { rawgGame: goodMatch, confidence: "high" };
  }

  // Nothing passed both the name check and the sanity check. Prefer a
  // name-similar-but-suspicious candidate over a name-dissimilar one, but
  // flag it clearly either way instead of silently trusting it.
  const nameOnlyMatch = candidates.find((c) => namesLookSimilar(c.name, game.title));
  if (nameOnlyMatch) {
    return { rawgGame: nameOnlyMatch, confidence: "low-suspicious-rating" };
  }

  if (directLooksRight) {
    return { rawgGame: direct, confidence: "low-suspicious-rating" };
  }

  if (direct && direct.id) {
    return { rawgGame: direct, confidence: "low-name-mismatch" };
  }

  if (candidates.length > 0) {
    return { rawgGame: candidates[0], confidence: "low-name-mismatch" };
  }

  return null;
}

async function main() {
  const rawgData = { ...existingRawgData };
  const targetGames = onlyIds ? games.filter((g) => onlyIds.has(g.id)) : games;

  if (onlyIds && targetGames.length === 0) {
    console.error("GAME_IDS was set but matched no games in js/games.js:", [...onlyIds].join(", "));
    process.exit(1);
  }

  const unmatched = [];
  const lowConfidence = [];

  for (let i = 0; i < targetGames.length; i++) {
    const game = targetGames[i];
    process.stdout.write(`[${i + 1}/${targetGames.length}] ${game.id} ... `);

    try {
      const result = await findRawgMatch(game);

      if (!result) {
        console.log("NO MATCH");
        unmatched.push(game.id);
      } else {
        rawgData[game.id] = toRawgEntry(result.rawgGame);

        if (result.confidence === "high") {
          console.log(`OK (rawg id ${result.rawgGame.id}, "${result.rawgGame.name}")`);
        } else {
          console.log(`LOW CONFIDENCE (rawg id ${result.rawgGame.id}, "${result.rawgGame.name}", ${result.confidence})`);
          lowConfidence.push({ id: game.id, title: game.title, rawgName: result.rawgGame.name, reason: result.confidence });
        }
      }
    } catch (err) {
      console.log("ERROR:", err.message);
      unmatched.push(game.id);
    }

    await sleep(REQUEST_DELAY_MS);
  }

  const rawgDataLiteral = JSON.stringify(rawgData, null, 2);
  const rawgDataBlockPattern = /const rawgData = \{[\s\S]*?\n\};/;

  if (!rawgDataBlockPattern.test(gamesJsSource)) {
    console.error("\nCould not find `const rawgData = {...};` block in js/games.js - aborting write.");
    process.exit(1);
  }

  const updatedSource = gamesJsSource.replace(rawgDataBlockPattern, `const rawgData = ${rawgDataLiteral};`);
  fs.writeFileSync(gamesJsPath, updatedSource);

  const highConfidenceCount = Object.keys(rawgData).length - lowConfidence.length;
  console.log(`\nDone. ${highConfidenceCount} confident matches, ${lowConfidence.length} low-confidence, ${unmatched.length} unmatched (out of ${targetGames.length} processed).`);

  if (lowConfidence.length > 0) {
    console.log("\nLOW CONFIDENCE - verify these manually on rawg.io before trusting the image:");
    lowConfidence.forEach((g) => console.log(` - ${g.id} ("${g.title}") -> matched RAWG name "${g.rawgName}" [${g.reason}]`));
  }

  if (unmatched.length > 0) {
    console.log("\nNO MATCH AT ALL:");
    unmatched.forEach((id) => console.log(" -", id));
  }

  console.log("\nNext steps:");
  console.log("  1. Manually fix any LOW CONFIDENCE / NO MATCH entries above (check rawg.io, edit js/games.js's rawgData by hand if needed).");
  console.log("  2. Re-run scripts/generate-game-cards.js, scripts/add-videogame-schema.js, scripts/add-og-image.js");
  console.log("     and scripts/update-popular-games-images.js so the static HTML picks up the changes.");
}

main();
