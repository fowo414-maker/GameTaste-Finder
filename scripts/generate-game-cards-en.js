// English counterpart of scripts/generate-game-cards.js.
// Produces the static #gameList markup for en/index.html from en/js/games.js.
// Run with: node scripts/generate-game-cards-en.js (after build-en-games.js)
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { phraseDict } = require("./i18n-data.js");

const gamesJsPath = path.join(__dirname, "..", "en", "js", "games.js");
const gamesJsSource = fs.readFileSync(gamesJsPath, "utf8");

const exportNames = [
  "games",
  "gameDetails",
  "gameCoverUrls",
  "gameCoverLocalFiles",
  "gameCoverFocus",
  "formatGamePrice",
  "isRecommendedGame",
  "rawgData"
];
const exportLine = `\n;(function(){ var __exports = {}; ${exportNames.map((n) => `__exports.${n} = ${n};`).join(" ")} return __exports; })()`;

const sandbox = {};
vm.createContext(sandbox);
const sandboxExports = vm.runInContext(gamesJsSource + exportLine, sandbox);

const {
  games,
  gameDetails,
  gameCoverUrls,
  gameCoverLocalFiles,
  gameCoverFocus,
  formatGamePrice,
  isRecommendedGame,
  rawgData
} = sandboxExports;

const genreCoverColors = {
  "Action RPG": "#D94A5C", "RPG": "#6C63FF", "JRPG": "#6C63FF", "Strategy": "#F4B740",
  "Strategy RPG": "#F4B740", "Card Strategy": "#F4B740", "Simulation": "#38B36B",
  "Automation": "#38B36B", "Roguelike": "#8E6BFF", "Sandbox": "#4DA3FF", "Open World": "#4DA3FF",
  "Metroidvania": "#2FA9A6", "Platformer": "#FF8A5C", "Puzzle": "#8E6BFF", "Adventure": "#38B36B",
  "Action Adventure": "#D94A5C", "Action": "#D94A5C", "Survival": "#38B36B",
  "Survival Horror": "#5B6472", "Co-op Shooter": "#4DA3FF", "Social Deduction": "#F4B740",
  "Run and Gun": "#D94A5C"
};

// Same genre -> redundant-tag mapping as the Korean generator, translated
// through the shared phrase dictionary so it matches the English tags.
const duplicateGenreTagsKo = {
  "Action RPG": ["액션"], "Action Adventure": ["액션"], "Automation": ["자동화"],
  "Card Strategy": ["전략"], "Co-op Shooter": ["협동", "슈터"], "Action": ["액션"],
  "Fighting": ["격투"], "Open World": ["오픈월드"], "Platformer": ["플랫포머"], "Puzzle": ["퍼즐"],
  "Roguelike": ["로그라이크"], "Run and Gun": ["액션"], "Shooter": ["슈터"], "Sports": ["스포츠"],
  "Strategy": ["전략"], "Strategy RPG": ["전략"], "Survival": ["생존"], "Survival Horror": ["생존"]
};
const duplicateGenreTags = Object.fromEntries(
  Object.entries(duplicateGenreTagsKo).map(([genre, words]) => [genre, words.map((w) => phraseDict[w] || w)])
);

function getComparableTags(game) {
  const duplicateTags = duplicateGenreTags[game.genre] || [];
  return game.tags.filter((tag) => !duplicateTags.includes(tag));
}

function renderGameTitle(game) {
  return `<span class="game-title-en">${game.title}</span>`;
}

function getGameCoverColor(game) {
  return genreCoverColors[game.genre] || "#6C63FF";
}

function getGameInitials(game) {
  const words = game.title.replace(/[^A-Za-z0-9\s]/g, "").trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function buildGameCoverHtml(game) {
  const rawgEntry = rawgData[game.id];
  const localFile = gameCoverLocalFiles[game.id];
  const directUrl = gameCoverUrls[game.id];
  const focusRaw = gameCoverFocus[game.id];
  const focusX = (typeof focusRaw === "string" ? focusRaw : focusRaw && focusRaw.x) || "50%";
  const focusY = (focusRaw && typeof focusRaw === "object" && focusRaw.y) || "50%";
  const color = getGameCoverColor(game);
  const initials = getGameInitials(game);
  const src = (rawgEntry && rawgEntry.image)
    || (localFile ? `../images/covers/${localFile}` : null)
    || directUrl
    || null;
  const altText = `${game.title} cover image`;

  if (src) {
    return `
      <div class="game-cover" style="--cover-color:${color};--cover-focus-x:${focusX};--cover-focus-y:${focusY}">
        <img src="${src}" alt="${altText}" loading="lazy" decoding="async" onerror="this.parentElement.classList.add('is-broken')">
        <span class="game-cover-fallback">${initials}</span>
      </div>
    `;
  }

  return `
    <div class="game-cover game-cover-placeholder" style="--cover-color:${color}">
      <span>${initials}</span>
    </div>
  `;
}

function renderRecommendedRibbon(game) {
  if (!isRecommendedGame(game)) return "";
  return `
    <div class="recommended-ribbon-wrap" aria-hidden="true">
      <span class="recommended-ribbon">
        <svg viewBox="0 0 24 24" width="11" height="11" fill="#ffffff"><path d="M12 21s-6.7-4.35-9.33-8.2C1.1 10.7 1.4 7.9 3.4 6.2c1.85-1.55 4.55-1.3 6.1.4L12 9.1l2.5-2.5c1.55-1.7 4.25-1.95 6.1-.4 2 1.7 2.3 4.5.73 6.6C18.7 16.65 12 21 12 21z"></path></svg>
      </span>
    </div>
  `;
}

function getGameDetails(game) {
  const details = gameDetails[game.id] || ["TBD", "TBD", 3, "TBD", "TBD", "TBD", "Metacritic TBD / Steam TBD"];
  return {
    releaseYear: details[0],
    playTime: details[1],
    difficulty: details[2],
    multiplayer: details[3],
    platforms: details[4],
    korean: details[5],
    ratings: details[6]
  };
}

function renderStars(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function renderHoverDetails(game) {
  const details = getGameDetails(game);
  return `
      <p><strong>📅 Release year</strong>${details.releaseYear}</p>
      <p><strong>⏱️ Estimated playtime</strong>${details.playTime}</p>
      <p><strong>⭐ Difficulty</strong>${renderStars(details.difficulty)}</p>
      <p><strong>👥 Multiplayer</strong>${details.multiplayer}</p>
      <p><strong>🎮 Platforms</strong>${details.platforms}</p>
      <p><strong>🇰🇷 Korean language support</strong>${details.korean}</p>
      <p><strong>🏆 Metacritic / Steam</strong>${details.ratings}</p>
    `;
}

function getDetailPageUrl(game) {
  return `/games/${game.id}.html`;
}

const INITIAL_VISIBLE = 20;

function renderCard(game, index) {
  const tags = getComparableTags(game).map((tag) => `<span class="pill">${tag}</span>`).join("");
  const detailPageUrl = getDetailPageUrl(game);
  const detailButton = `<a class="game-detail-link" href="${detailPageUrl}"><span>View game info</span></a>`;
  const hiddenAttr = index >= INITIAL_VISIBLE ? " hidden" : "";

  return `          <article class="game-card" data-card-id="${game.id}" role="checkbox" aria-checked="false" tabindex="0"${hiddenAttr}>
            ${renderRecommendedRibbon(game).trim()}
            ${buildGameCoverHtml(game).trim()}
            <div>
              <h3 class="game-title">${renderGameTitle(game)}</h3>
              <div class="meta">
                <span class="pill">${game.genre}</span>
                ${tags}
              </div>
            </div>
            <p class="game-price">${formatGamePrice(game)}</p>
            <p class="description">${game.description}</p>
            ${detailButton}
            <div class="game-hover-panel" aria-hidden="true">
              ${renderHoverDetails(game).trim()}
            </div>
          </article>`;
}

const cardsHtml = games.map((game, index) => renderCard(game, index)).join("\n");

const output = `        <div id="gameList" class="card-grid" aria-live="polite">
${cardsHtml}
          <p id="gameListEmpty" class="empty-message full-width" hidden>No games match your filters. Try adjusting your search or filters.</p>
        </div>`;

const outPath = path.join(__dirname, "generated-game-list-en.html");
fs.writeFileSync(outPath, output);
console.log(`Generated ${games.length} cards -> ${outPath}`);
