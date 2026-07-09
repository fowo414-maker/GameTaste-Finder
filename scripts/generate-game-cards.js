// One-off generator: produces the static #gameList markup for index.html.
// Run with: node scripts/generate-game-cards.js
// Mirrors the exact template previously built at runtime by js/app.js's
// renderGames()/renderHoverDetails() + js/game-cover.js's buildGameCoverHtml(),
// so the static output is visually identical to what JS used to render.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const gamesJsPath = path.join(__dirname, "..", "js", "games.js");
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

const duplicateGenreTags = {
  "Action RPG": ["액션"],
  "Action Adventure": ["액션"],
  "Automation": ["자동화"],
  "Card Strategy": ["전략"],
  "Co-op Shooter": ["협동", "슈터"],
  "Action": ["액션"],
  "Fighting": ["격투"],
  "Open World": ["오픈월드"],
  "Platformer": ["플랫포머"],
  "Puzzle": ["퍼즐"],
  "Roguelike": ["로그라이크"],
  "Run and Gun": ["액션"],
  "Shooter": ["슈터"],
  "Sports": ["스포츠"],
  "Strategy": ["전략"],
  "Strategy RPG": ["전략"],
  "Survival": ["생존"],
  "Survival Horror": ["생존"]
};

const genreLabels = {
  "Action": "액션",
  "Action Adventure": "액션 어드벤처",
  "Action RPG": "액션 RPG",
  "Adventure": "어드벤처",
  "Automation": "자동화",
  "Card Strategy": "카드 전략",
  "Co-op Adventure": "협동 어드벤처",
  "Co-op Shooter": "협동 슈터",
  "Fighting": "격투",
  "JRPG": "JRPG",
  "Metroidvania": "메트로배니아",
  "Open World": "오픈월드",
  "Platformer": "플랫폼",
  "Puzzle": "퍼즐",
  "RPG": "RPG",
  "Roguelike": "로그라이크",
  "Run and Gun": "런앤건",
  "Sandbox": "샌드박스",
  "Shooter": "슈터",
  "Simulation": "시뮬레이션",
  "Social Deduction": "소셜 추리",
  "Sports": "스포츠",
  "Strategy": "전략",
  "Strategy RPG": "전략 RPG",
  "Survival": "생존",
  "Survival Horror": "생존 호러"
};

function getGenreLabel(genre) {
  return genreLabels[genre] || genre;
}

function getComparableTags(game) {
  const duplicateTags = duplicateGenreTags[game.genre] || [];
  return game.tags.filter((tag) => !duplicateTags.includes(tag));
}

function renderGameTitle(game) {
  const koreanTitle = game.titleKo ? `<span class="game-title-ko">${game.titleKo}</span>` : "";
  return `<span class="game-title-en">${game.title}</span>${koreanTitle}`;
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
  // gameCoverFocus entries can be a plain string ("52%", X-axis only, for
  // backward compatibility) or { x, y } to also crop the vertical position.
  const focusRaw = gameCoverFocus[game.id];
  const focusX = (typeof focusRaw === "string" ? focusRaw : focusRaw && focusRaw.x) || "50%";
  const focusY = (focusRaw && typeof focusRaw === "object" && focusRaw.y) || "50%";
  const color = getGameCoverColor(game);
  const initials = getGameInitials(game);
  const src = (rawgEntry && rawgEntry.image)
    || (localFile ? `images/covers/${localFile}` : null)
    || directUrl
    || null;
  const altText = game.titleKo ? `${game.title} (${game.titleKo}) 커버 이미지` : `${game.title} 커버 이미지`;

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
  const details = gameDetails[game.id] || ["확인 필요", "확인 필요", 3, "확인 필요", "확인 필요", "확인 필요", "Metacritic 확인 필요 / Steam 확인 필요"];
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
      <p><strong>📅 출시년도</strong>${details.releaseYear}</p>
      <p><strong>⏱️ 예상 플레이 시간</strong>${details.playTime}</p>
      <p><strong>⭐ 난이도</strong>${renderStars(details.difficulty)}</p>
      <p><strong>👥 멀티플레이</strong>${details.multiplayer}</p>
      <p><strong>🎮 플랫폼</strong>${details.platforms}</p>
      <p><strong>🇰🇷 한국어 지원</strong>${details.korean}</p>
      <p><strong>🏆 Metacritic / Steam</strong>${details.ratings}</p>
    `;
}

function getDetailPageUrl(game) {
  return `games/${game.id}.html`;
}

const INITIAL_VISIBLE = 20;

function renderCard(game, index) {
  const tags = getComparableTags(game).map((tag) => `<span class="pill">${tag}</span>`).join("");
  const detailPageUrl = getDetailPageUrl(game);
  const detailButton = `<a class="game-detail-link" href="${detailPageUrl}"><span>게임 정보 보기</span></a>`;
  const hiddenAttr = index >= INITIAL_VISIBLE ? " hidden" : "";

  return `          <article class="game-card" data-card-id="${game.id}" role="checkbox" aria-checked="false" tabindex="0"${hiddenAttr}>
            ${renderRecommendedRibbon(game).trim()}
            ${buildGameCoverHtml(game).trim()}
            <div>
              <h3 class="game-title">${renderGameTitle(game)}</h3>
              <div class="meta">
                <span class="pill">${getGenreLabel(game.genre)}</span>
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
          <p id="gameListEmpty" class="empty-message full-width" hidden>조건에 맞는 게임을 찾지 못했습니다. 검색어나 필터를 조정해보세요.</p>
        </div>`;

const outPath = path.join(__dirname, "generated-game-list.html");
fs.writeFileSync(outPath, output);
console.log(`Generated ${games.length} cards -> ${outPath}`);
