// Updates the hand-authored "인기 게임 바로가기" cards in index.html:
// prefers RAWG images (once scripts/fetch-rawg-images.js has populated
// js/games.js's rawgData) and improves alt text. Leaves each card's
// hand-tuned --cover-focus-x/-y crop values untouched.
// Idempotent - safe to re-run any time games.js data changes.
// Run with: node scripts/update-popular-games-images.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const gamesJsSource = fs.readFileSync(path.join(root, "js", "games.js"), "utf8");

const exportNames = ["games", "gameCoverUrls", "gameCoverLocalFiles", "rawgData"];
const exportLine = `\n;(function(){ var __exports = {}; ${exportNames.map((n) => `__exports.${n} = ${n};`).join(" ")} return __exports; })()`;

const sandbox = {};
vm.createContext(sandbox);
const data = vm.runInContext(gamesJsSource + exportLine, sandbox);
const { games, gameCoverUrls, gameCoverLocalFiles, rawgData } = data;

const gamesById = new Map(games.map((g) => [g.id, g]));

const genreCoverColors = {
  "Action RPG": "#D94A5C",
  "RPG": "#6C63FF",
  "JRPG": "#6C63FF",
  "Strategy": "#F4B740",
  "Strategy RPG": "#F4B740",
  "Card Strategy": "#F4B740",
  "Simulation": "#38B36B",
  "Automation": "#38B36B",
  "Roguelike": "#8E6BFF",
  "Sandbox": "#4DA3FF",
  "Open World": "#4DA3FF",
  "Metroidvania": "#2FA9A6",
  "Platformer": "#FF8A5C",
  "Puzzle": "#8E6BFF",
  "Adventure": "#38B36B",
  "Action Adventure": "#D94A5C",
  "Action": "#D94A5C",
  "Survival": "#38B36B",
  "Survival Horror": "#5B6472",
  "Co-op Shooter": "#4DA3FF",
  "Social Deduction": "#F4B740",
  "Run and Gun": "#D94A5C"
};

function getGameCoverColor(game) {
  return genreCoverColors[game.genre] || "#6C63FF";
}

function getGameInitials(game) {
  const words = game.title.replace(/[^A-Za-z0-9\s]/g, "").trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function getCoverImageUrl(game) {
  const rawgEntry = rawgData[game.id];
  const localFile = gameCoverLocalFiles[game.id];
  const directUrl = gameCoverUrls[game.id];

  if (rawgEntry && rawgEntry.image) return rawgEntry.image;
  if (localFile) return `images/covers/${localFile}`;
  if (directUrl) return directUrl;
  return null;
}

const indexPath = path.join(root, "index.html");
let html = fs.readFileSync(indexPath, "utf8");

const itemPattern = /<li class="popular-game-item">\s*<a class="popular-game-link" href="games\/([a-z0-9-]+)\.html">[\s\S]*?<\/li>/g;

let updated = 0;
let placeholdered = 0;
let upgraded = 0;
const noImage = [];

// Matches either an existing image cover span or an existing initials
// placeholder span - the two hand-authored forms this markup ever takes.
const coverSpanPattern = /<span class="popular-game-cover"[^>]*>[\s\S]*?<\/span>/;
// The placeholder markup nests a fallback-initials span inside the cover
// span, so a single non-greedy `[\s\S]*?<\/span>` would stop at the inner
// </span> and leave the outer one dangling - match both closing tags.
const placeholderSpanPattern = /<span class="popular-game-cover is-placeholder"[^>]*>[\s\S]*?<\/span>\s*<\/span>/;

html = html.replace(itemPattern, (block, gameId) => {
  const game = gamesById.get(gameId);

  if (!game) {
    console.warn("no games.js entry for popular-game-item:", gameId);
    return block;
  }

  const image = getCoverImageUrl(game);
  const isPlaceholder = placeholderSpanPattern.test(block);

  if (!image) {
    noImage.push(gameId);

    if (isPlaceholder) return block; // already a placeholder, nothing to change

    // No resolvable image (e.g. RAWG match was cleared as incorrect) -
    // show the genre-colored initials placeholder instead of leaving a
    // stale/wrong image in place.
    const color = getGameCoverColor(game);
    const initials = getGameInitials(game);
    const placeholder = `<span class="popular-game-cover is-placeholder" style="--cover-color:${color}"><span class="popular-game-cover-fallback">${initials}</span></span>`;
    const newBlock = block.replace(coverSpanPattern, placeholder);

    if (newBlock !== block) placeholdered++;

    return newBlock;
  }

  const altText = game.titleKo ? `${game.title} (${game.titleKo}) 커버 이미지` : `${game.title} 커버 이미지`;

  if (isPlaceholder) {
    // Upgrading a placeholder to a real image - it has no hand-tuned crop
    // yet, so default to a centered focus point.
    const imageCover = `<span class="popular-game-cover" style="--cover-focus-x:50%; --cover-focus-y:50%"><img src="${image}" alt="${altText}" loading="lazy" decoding="async"></span>`;
    const newBlock = block.replace(placeholderSpanPattern, imageCover);

    if (newBlock !== block) upgraded++;

    return newBlock;
  }

  let newBlock = block.replace(/(<img src=")[^"]*(")/, `$1${image}$2`);
  newBlock = newBlock.replace(/(<img src="[^"]*" alt=")[^"]*(")/, `$1${altText}$2`);

  if (newBlock !== block) updated++;

  return newBlock;
});

fs.writeFileSync(indexPath, html);
console.log(`Updated ${updated} popular-game-item cards, ${upgraded} upgraded from placeholder to image, ${placeholdered} switched to initials placeholder.`);

if (noImage.length > 0) {
  console.log("No resolvable image for:");
  noImage.forEach((id) => console.log(" -", id));
}
