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

  if (words.length === 0) {
    return "?";
  }

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return (words[0][0] + words[1][0]).toUpperCase();
}

function getCoverBasePath() {
  return window.location.pathname.includes("/games/") ? "../images/covers/" : "images/covers/";
}

function buildGameCoverHtml(game, extraClass) {
  // RAWG data (populated by scripts/fetch-rawg-images.js into js/games.js's
  // rawgData object) is the primary cover image source, with a direct URL
  // or local file as secondary fallbacks. If none of those resolve, this
  // renders the genre-colored initials placeholder below instead of an
  // image - it no longer falls back to Steam.
  const rawgEntry = typeof rawgData !== "undefined" ? rawgData[game.id] : null;
  const localFile = typeof gameCoverLocalFiles !== "undefined" ? gameCoverLocalFiles[game.id] : null;
  const directUrl = typeof gameCoverUrls !== "undefined" ? gameCoverUrls[game.id] : null;
  const focusX = (typeof gameCoverFocus !== "undefined" ? gameCoverFocus[game.id] : null) || "50%";
  const color = getGameCoverColor(game);
  const initials = getGameInitials(game);
  const classAttr = `game-cover${extraClass ? ` ${extraClass}` : ""}`;
  const src = (rawgEntry && rawgEntry.image)
    || (localFile ? `${getCoverBasePath()}${localFile}` : null)
    || directUrl
    || null;
  const altText = game.titleKo ? `${game.title} (${game.titleKo}) 커버 이미지` : `${game.title} 커버 이미지`;

  if (src) {
    return `
      <div class="${classAttr}" style="--cover-color:${color};--cover-focus-x:${focusX}">
        <img src="${src}" alt="${altText}" loading="lazy" decoding="async" onerror="this.parentElement.classList.add('is-broken')">
        <span class="game-cover-fallback">${initials}</span>
      </div>
    `;
  }

  return `
    <div class="${classAttr} game-cover-placeholder" style="--cover-color:${color}">
      <span>${initials}</span>
    </div>
  `;
}

function renderRecommendedRibbon(game) {
  if (typeof isRecommendedGame !== "function" || !isRecommendedGame(game)) {
    return "";
  }

  return `
    <div class="recommended-ribbon-wrap" aria-hidden="true">
      <span class="recommended-ribbon">
        <svg viewBox="0 0 24 24" width="11" height="11" fill="#ffffff"><path d="M12 21s-6.7-4.35-9.33-8.2C1.1 10.7 1.4 7.9 3.4 6.2c1.85-1.55 4.55-1.3 6.1.4L12 9.1l2.5-2.5c1.55-1.7 4.25-1.95 6.1-.4 2 1.7 2.3 4.5.73 6.6C18.7 16.65 12 21 12 21z"></path></svg>
      </span>
    </div>
  `;
}
