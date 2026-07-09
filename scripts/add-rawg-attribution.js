// Adds a RAWG attribution line (visible text + active hyperlink to
// https://rawg.io) to the shared site footer across every HTML page.
// Applied uniformly to all pages (not just the ones currently showing a
// RAWG image) since the footer markup is identical everywhere and this is
// by far the lowest-maintenance way to guarantee every current and future
// RAWG-using page stays compliant with no per-page bookkeeping required.
// Idempotent - safe to re-run.
// Run with: node scripts/add-rawg-attribution.js

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

const staticPages = ["index.html", "about.html", "contact.html", "privacy.html", "copyright.html"];
const gamePages = fs.readdirSync(path.join(root, "games"))
  .filter((f) => f.endsWith(".html"))
  .map((f) => path.join("games", f));

const allPages = [...staticPages, ...gamePages];

const anchorText = "게임 이미지, 로고 및 상표는 각 권리자에게 귀속됩니다.";
const attributionLine = '<p>게임 데이터 및 이미지 일부는 <a href="https://rawg.io" target="_blank" rel="noopener noreferrer">RAWG</a>에서 제공합니다.</p>';

let updated = 0;
let alreadyPresent = 0;
let missingAnchor = 0;

allPages.forEach((relPath) => {
  const filePath = path.join(root, relPath);
  let html = fs.readFileSync(filePath, "utf8");

  if (html.includes('href="https://rawg.io"')) {
    alreadyPresent++;
    return;
  }

  const anchorIdx = html.indexOf(anchorText);
  if (anchorIdx === -1) {
    console.warn("footer anchor line not found in", relPath);
    missingAnchor++;
    return;
  }

  const lineEnd = html.indexOf("</p>", anchorIdx);
  if (lineEnd === -1) {
    console.warn("could not find end of anchor line in", relPath);
    missingAnchor++;
    return;
  }

  const insertAt = lineEnd + "</p>".length;
  html = html.slice(0, insertAt) + "\n        " + attributionLine + html.slice(insertAt);

  fs.writeFileSync(filePath, html);
  updated++;
});

console.log(`Added attribution to ${updated} pages, ${alreadyPresent} already had it, ${missingAnchor} missing the anchor line.`);
