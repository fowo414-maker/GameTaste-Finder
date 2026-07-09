// Reusable generator: adds/updates og:image and twitter:card meta tags on
// every games/*.html page, using that game's own cover image (RAWG image
// when scripts/fetch-rawg-images.js has populated it, otherwise the same
// Steam/local/direct source used elsewhere).
// Idempotent - safe to re-run any time games.js data changes.
// Run with: node scripts/add-og-image.js

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

function getCoverImageUrl(game) {
  const rawgEntry = rawgData[game.id];
  const localFile = gameCoverLocalFiles[game.id];
  const directUrl = gameCoverUrls[game.id];

  if (rawgEntry && rawgEntry.image) return rawgEntry.image;
  if (localFile) return `https://gametastefinder.com/images/covers/${localFile}`;
  if (directUrl) return directUrl;
  return null;
}

let updated = 0;
let inserted = 0;

const existingBlockPattern = /[ \t]*<meta property="og:image" content="[^"]*">\n[ \t]*<meta name="twitter:card" content="summary_large_image">\n[ \t]*<meta name="twitter:title" content="[^"]*">\n[ \t]*<meta name="twitter:description" content="[^"]*">\n[ \t]*<meta name="twitter:image" content="[^"]*">\n?/;

games.forEach((game) => {
  const filePath = path.join(root, "games", `${game.id}.html`);

  if (!fs.existsSync(filePath)) {
    console.warn("missing file for", game.id);
    return;
  }

  let html = fs.readFileSync(filePath, "utf8");
  const hadExistingBlock = existingBlockPattern.test(html);

  const titleMatch = html.match(/<meta property="og:title" content="([^"]*)">/);
  const descMatch = html.match(/<meta property="og:description" content="([^"]*)">/);
  const urlMatch = html.match(/<meta property="og:url" content="([^"]*)">\s*$/m);

  if (!titleMatch || !descMatch || !urlMatch) {
    console.warn("missing og tags for", game.id);
    return;
  }

  const image = getCoverImageUrl(game);

  if (!image) {
    console.warn("no cover image resolvable for", game.id);
    return;
  }

  const insertion = `  <meta property="og:image" content="${image}">\n  <meta name="twitter:card" content="summary_large_image">\n  <meta name="twitter:title" content="${titleMatch[1]}">\n  <meta name="twitter:description" content="${descMatch[1]}">\n  <meta name="twitter:image" content="${image}">\n`;

  if (hadExistingBlock) {
    html = html.replace(existingBlockPattern, insertion);
    updated++;
  } else {
    const ogUrlLine = urlMatch[0];
    html = html.replace(ogUrlLine, `${ogUrlLine}\n${insertion.replace(/\n$/, "")}`);
    inserted++;
  }

  fs.writeFileSync(filePath, html);
});

console.log(`Inserted ${inserted} new og:image blocks, updated ${updated} existing ones.`);
