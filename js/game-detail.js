(function () {
  const gameId = document.body.dataset.gameId;

  if (!gameId || typeof games === "undefined" || typeof gameDetails === "undefined") {
    return;
  }

  const game = games.find((item) => item.id === gameId);
  const details = gameDetails[gameId];
  const titleKoEl = document.querySelector(".detail-title-ko");

  if (!game || !details || !titleKoEl) {
    return;
  }

  const [releaseYear, playTime, difficulty, multiplayer, platforms, korean, ratings] = details;

  function scoreBucket(score) {
    if (score === null) return "is-muted";
    if (score >= 85) return "is-good";
    if (score >= 70) return "is-mid";
    return "is-low";
  }

  function steamBucket(text) {
    if (text.includes("압도적으로 긍정적") || text.includes("매우 긍정적")) return "is-good";
    if (text.includes("대체로 긍정적")) return "is-mid";
    if (text.includes("없음") || text.includes("확인 필요")) return "is-muted";
    return "is-mid";
  }

  const metacriticMatch = ratings.match(/Metacritic\s+(\d+)/i);
  const metacriticScore = metacriticMatch ? Number(metacriticMatch[1]) : null;
  const steamMatch = ratings.match(/Steam\s+(.+)$/i);
  const steamText = steamMatch ? steamMatch[1].trim() : "확인 필요";
  const starsText = "★".repeat(difficulty) + "☆".repeat(5 - difficulty);
  const koreanIsSupported = korean === "지원";

  const badgeRow = document.createElement("div");
  badgeRow.className = "rating-badge-row";
  badgeRow.innerHTML = `
    <span class="rating-badge ${scoreBucket(metacriticScore)}">
      <span class="rating-badge-label">Metacritic</span>
      <span class="rating-badge-value">${metacriticScore !== null ? metacriticScore : "확인 필요"}</span>
    </span>
    <span class="rating-badge ${steamBucket(steamText)}">
      <span class="rating-badge-label">Steam</span>
      <span class="rating-badge-value">${steamText}</span>
    </span>
    <span class="rating-badge">
      <span class="rating-badge-label">난이도</span>
      <span class="rating-badge-value stars" aria-label="난이도 5점 만점에 ${difficulty}점">${starsText}</span>
    </span>
  `;

  const statStrip = document.createElement("div");
  statStrip.className = "stat-strip";
  statStrip.innerHTML = `
    <div class="stat-card">
      <div class="stat-card-top"><span class="stat-card-label">출시년도</span><span class="stat-card-icon" aria-hidden="true">📅</span></div>
      <div class="stat-card-value">${releaseYear}</div>
    </div>
    <div class="stat-card">
      <div class="stat-card-top"><span class="stat-card-label">예상 플레이 시간</span><span class="stat-card-icon" aria-hidden="true">⏱</span></div>
      <div class="stat-card-value stat-card-value-sm">${playTime}</div>
    </div>
    <div class="stat-card">
      <div class="stat-card-top"><span class="stat-card-label">멀티플레이</span><span class="stat-card-icon" aria-hidden="true">👥</span></div>
      <div class="stat-card-value stat-card-value-sm">${multiplayer}</div>
    </div>
    <div class="stat-card">
      <div class="stat-card-top"><span class="stat-card-label">플랫폼</span><span class="stat-card-icon" aria-hidden="true">🎮</span></div>
      <div class="stat-card-value stat-card-value-sm">${platforms}</div>
    </div>
    <div class="stat-card">
      <div class="stat-card-top"><span class="stat-card-label">한국어 지원</span><span class="stat-card-icon" aria-hidden="true">🇰🇷</span></div>
      <div class="stat-card-value stat-card-value-sm ${koreanIsSupported ? "is-good" : "is-muted"}">${korean}</div>
    </div>
  `;

  titleKoEl.insertAdjacentElement("afterend", statStrip);
  titleKoEl.insertAdjacentElement("afterend", badgeRow);
})();
