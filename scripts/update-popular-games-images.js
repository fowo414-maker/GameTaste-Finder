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

html = html.replace(itemPattern, (block, gameId) => {
  const game = gamesById.get(gameId);

  if (!game) {
    console.warn("no games.js entry for popular-game-item:", gameId);
    return block;
  }

  const image = getCoverImageUrl(game);

  if (!image) {
    console.warn("no cover image resolvable for:", gameId);
    return block;
  }

  const altText = game.titleKo ? `${game.title} (${game.titleKo}) 커버 이미지` : `${game.title} 커버 이미지`;

  let newBlock = block.replace(/(<img src=")[^"]*(")/, `$1${image}$2`);
  newBlock = newBlock.replace(/(<img src="[^"]*" alt=")[^"]*(")/, `$1${altText}$2`);

  if (newBlock !== block) updated++;

  return newBlock;
});

fs.writeFileSync(indexPath, html);
console.log(`Updated ${updated} popular-game-item cards.`);
