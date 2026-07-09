// Reusable generator: injects/updates a schema.org VideoGame JSON-LD block
// in every games/*.html detail page's <head>, sourced from js/games.js data
// plus the page's own existing <meta name="description"> and canonical URL.
// Idempotent - safe to re-run any time games.js data changes (e.g. after
// scripts/fetch-rawg-images.js populates rawgData with real RAWG images).
// Run with: node scripts/add-videogame-schema.js

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const gamesJsSource = fs.readFileSync(path.join(root, "js", "games.js"), "utf8");

const exportNames = ["games", "gameDetails", "gameCoverUrls", "gameCoverLocalFiles", "gameCoverFocus", "rawgData"];
const exportLine = `\n;(function(){ var __exports = {}; ${exportNames.map((n) => `__exports.${n} = ${n};`).join(" ")} return __exports; })()`;

const sandbox = {};
vm.createContext(sandbox);
const data = vm.runInContext(gamesJsSource + exportLine, sandbox);
const { games, gameDetails, gameCoverUrls, gameCoverLocalFiles, gameCoverFocus, rawgData } = data;

function getCoverImageUrl(game) {
  const rawgEntry = rawgData[game.id];
  const localFile = gameCoverLocalFiles[game.id];
  const directUrl = gameCoverUrls[game.id];

  if (rawgEntry && rawgEntry.image) return rawgEntry.image;
  if (localFile) return `https://gametastefinder.com/images/covers/${localFile}`;
  if (directUrl) return directUrl;
  return null;
}

function decodeEntities(str) {
  return str
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

let updated = 0;
let inserted = 0;

const existingBlockPattern = /[ \t]*<script type="application\/ld\+json">\s*\{\s*"@context": "https:\/\/schema\.org",\s*"@type": "VideoGame",[\s\S]*?<\/script>\n?/;

games.forEach((game) => {
  const filePath = path.join(root, "games", `${game.id}.html`);

  if (!fs.existsSync(filePath)) {
    console.warn("missing file for", game.id);
    return;
  }

  let html = fs.readFileSync(filePath, "utf8");
  const hadExistingBlock = existingBlockPattern.test(html);

  const descMatch = html.match(/<meta name="description" content="([^"]*)">/);
  const description = descMatch ? decodeEntities(descMatch[1]) : game.description;

  const details = gameDetails[game.id];
  const releaseYear = details ? details[0] : null;
  const platformsText = details ? details[4] : null;
  const gamePlatform = platformsText ? platformsText.split(",").map((p) => p.trim()) : undefined;

  const image = getCoverImageUrl(game);
  const url = `https://gametastefinder.com/games/${game.id}.html`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.title,
    "alternateName": game.titleKo || undefined,
    "url": url,
    "image": image || undefined,
    "description": description,
    "genre": game.genre,
    "datePublished": /^\d{4}$/.test(releaseYear) ? releaseYear : undefined,
    "gamePlatform": gamePlatform
  };

  Object.keys(schema).forEach((key) => {
    if (schema[key] === undefined) delete schema[key];
  });

  const scriptBlock = `  <script type="application/ld+json">\n  ${JSON.stringify(schema, null, 2).split("\n").join("\n  ")}\n  </script>\n`;

  if (hadExistingBlock) {
    html = html.replace(existingBlockPattern, scriptBlock);
    updated++;
  } else {
    if (!html.includes("</head>")) {
      console.warn("no </head> found for", game.id);
      return;
    }

    html = html.replace("</head>", `${scriptBlock}</head>`);
    inserted++;
  }

  fs.writeFileSync(filePath, html);
});

console.log(`Inserted ${inserted} new schema blocks, updated ${updated} existing ones.`);
