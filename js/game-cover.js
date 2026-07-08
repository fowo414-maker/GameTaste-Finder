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
  const localFile = typeof gameCoverLocalFiles !== "undefined" ? gameCoverLocalFiles[game.id] : null;
  const directUrl = typeof gameCoverUrls !== "undefined" ? gameCoverUrls[game.id] : null;
  const appId = typeof gameCoverAppIds !== "undefined" ? gameCoverAppIds[game.id] : null;
  const focusX = (typeof gameCoverFocus !== "undefined" ? gameCoverFocus[game.id] : null) || "50%";
  const color = getGameCoverColor(game);
  const initials = getGameInitials(game);
  const classAttr = `game-cover${extraClass ? ` ${extraClass}` : ""}`;
  const src = localFile ? `${getCoverBasePath()}${localFile}` : directUrl || (appId ? `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/library_600x900.jpg` : null);

  if (src) {
    return `
      <div class="${classAttr}" style="--cover-color:${color};--cover-focus-x:${focusX}">
        <img src="${src}" alt="" loading="lazy" decoding="async" onerror="this.parentElement.classList.add('is-broken')">
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
