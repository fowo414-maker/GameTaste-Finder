// Populates js/games.js's `rawgData` object from the RAWG Video Games
// Database API (https://rawg.io/apidocs).
//
// Usage:
//   RAWG_API_KEY=your_key_here node scripts/fetch-rawg-images.js
//
// Get a free key at https://rawg.io/apidocs (sign up, no cost tier available
// as of writing). This script makes one request per game in js/games.js
// (164 requests total), tries a direct slug lookup first and falls back to
// a search query if that 404s, then writes the results back into the
// `const rawgData = {...}` block in js/games.js.
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

const root = path.join(__dirname, "..");
const gamesJsPath = path.join(root, "js", "games.js");
const gamesJsSource = fs.readFileSync(gamesJsPath, "utf8");

const sandbox = {};
vm.createContext(sandbox);
const { games } = vm.runInContext(gamesJsSource + "\n;(function(){return {games};})()", sandbox);

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

function toRawgEntry(game, rawgGame) {
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
  // Our internal ids are already kebab-case titles, which often match RAWG's
  // own slugs directly - try that first since it's a single precise request.
  const direct = await rawgFetch(`https://api.rawg.io/api/games/${encodeURIComponent(game.id)}?key=${API_KEY}`);
  if (direct && direct.id) return direct;

  const searchUrl = `https://api.rawg.io/api/games?search=${encodeURIComponent(game.title)}&page_size=5&key=${API_KEY}`;
  const searchResult = await rawgFetch(searchUrl);
  const candidates = searchResult && Array.isArray(searchResult.results) ? searchResult.results : [];

  if (candidates.length === 0) return null;

  const exactNameMatch = candidates.find(
    (c) => c.name.toLowerCase().trim() === game.title.toLowerCase().trim()
  );

  return exactNameMatch || candidates[0];
}

async function main() {
  const rawgData = {};
  const unmatched = [];

  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    process.stdout.write(`[${i + 1}/${games.length}] ${game.id} ... `);

    try {
      const match = await findRawgMatch(game);

      if (!match) {
        console.log("NO MATCH");
        unmatched.push(game.id);
      } else {
        rawgData[game.id] = toRawgEntry(game, match);
        console.log(`OK (rawg id ${match.id}, slug "${match.slug}")`);
      }
    } catch (err) {
      console.log("ERROR:", err.message);
      unmatched.push(game.id);
    }

    await sleep(REQUEST_DELAY_MS);
  }

  const rawgDataLiteral = JSON.stringify(rawgData, null, 2);
  const updatedSource = gamesJsSource.replace(
    /const rawgData = \{\};/,
    `const rawgData = ${rawgDataLiteral};`
  );

  if (updatedSource === gamesJsSource) {
    console.error("\nCould not find `const rawgData = {};` placeholder in js/games.js - aborting write.");
    process.exit(1);
  }

  fs.writeFileSync(gamesJsPath, updatedSource);

  console.log(`\nDone. Matched ${Object.keys(rawgData).length}/${games.length} games.`);

  if (unmatched.length > 0) {
    console.log("Needs manual review (no confident RAWG match):");
    unmatched.forEach((id) => console.log(" -", id));
  }

  console.log("\nNext steps:");
  console.log("  1. Review the games listed above manually on rawg.io and fill in js/games.js's rawgData by hand if needed.");
  console.log("  2. Re-run scripts/generate-game-cards.js, scripts/add-videogame-schema.js and scripts/add-og-image.js");
  console.log("     so the static HTML picks up the new RAWG images.");
}

main();
