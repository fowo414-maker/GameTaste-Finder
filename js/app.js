(function () {
  document.documentElement.classList.add("hero-ready");

  const gameList = document.getElementById("gameList");
  const result = document.getElementById("result");
  const recommendButton = document.getElementById("recommendButton");
  const gameSearch = document.getElementById("gameSearch");
  const genreFilter = document.getElementById("genreFilter");
  const gameSort = document.getElementById("gameSort");
  const showMoreGames = document.getElementById("showMoreGames");

  if (!gameList || !result || !recommendButton || !gameSearch || !genreFilter || !gameSort || !showMoreGames || !Array.isArray(games)) {
    return;
  }

  const siteHeader = document.querySelector(".site-header");
  const initialGameLimit = 20;
  const selectedIds = new Set();
  let isExpanded = false;
  let lastScrollY = window.scrollY;
  const updateIntroState = () => {
    document.body.classList.toggle("is-intro-collapsed", window.scrollY > 40);
  };
  const duplicateGenreTags = {
    "Action RPG": ["액션"],
    "Action Adventure": ["액션"],
    "Automation": ["자동화"],
    "Card Strategy": ["전략"],
    "Co-op Shooter": ["협동", "슈터"],
    "Action": ["액션"],
    "Open World": ["오픈월드"],
    "Platformer": ["플랫포머"],
    "Puzzle": ["퍼즐"],
    "Roguelike": ["로그라이크"],
    "Run and Gun": ["액션"],
    "Strategy": ["전략"],
    "Strategy RPG": ["전략"],
    "Survival": ["생존"],
    "Survival Horror": ["생존"]
  };
  const steamAppIds = {
    "vampire-survivors": "1794680",
    "balatro": "2379780",
    "valheim": "892970",
    "palworld": "1623730",
    "lethal-company": "1966720",
    "helldivers-2": "553850",
    "deep-rock-galactic": "548430",
    "risk-of-rain-2": "632360",
    "no-mans-sky": "275850",
    "satisfactory": "526870",
    "hi-fi-rush": "1817230",
    "sea-of-stars": "1244090",
    "tunic": "553420",
    "undertale": "391540",
    "dredge": "1562430",
    "inscryption": "1092790",
    "cult-of-the-lamb": "1313140",
    "lies-of-p": "1627720",
    "armored-core-vi": "1888160",
    "remnant-2": "1282100",
    "phasmophobia": "739630",
    "project-zomboid": "108600",
    "binding-of-isaac-rebirth": "250900",
    "euro-truck-simulator-2": "227300",
    "among-us": "945360",
    "papers-please": "239030",
    "hotline-miami": "219150",
    "ftl": "212680",
    "stanley-parable-ultra-deluxe": "1703340",
    "a-short-hike": "1055540",
    "spiritfarer": "972660",
    "inside": "304430",
    "limbo": "48000",
    "fez": "224760",
    "spelunky-2": "418530",
    "shovel-knight-treasure-trove": "250760",
    "katana-zero": "460950",
    "hyper-light-drifter": "257850",
    "enter-the-gungeon": "311690",
    "darkest-dungeon": "262060",
    "firewatch": "383870",
    "gris": "683320",
    "edith-finch": "501300",
    "baba-is-you": "736260",
    "untitled-goose-game": "837470",
    "loop-hero": "1282730",
    "rain-world": "312520",
    "night-in-the-woods": "481510",
    "oxenfree": "388880",
    "crypt-of-the-necrodancer": "247080",
    "superhot": "322500",
    "brotato": "1942280",
    "unpacking": "1135690",
    "dorfromantik": "1455840",
    "mini-motorways": "1127500"
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
    "JRPG": "JRPG",
    "Metroidvania": "메트로배니아",
    "Open World": "오픈월드",
    "Platformer": "플랫폼",
    "Puzzle": "퍼즐",
    "RPG": "RPG",
    "Roguelike": "로그라이크",
    "Run and Gun": "런앤건",
    "Sandbox": "샌드박스",
    "Simulation": "시뮬레이션",
    "Social Deduction": "소셜 추리",
    "Strategy": "전략",
    "Strategy RPG": "전략 RPG",
    "Survival": "생존",
    "Survival Horror": "생존 호러"
  };

  function getGenreLabel(genre) {
    return genreLabels[genre] || genre;
  }

  function getGameTitleText(game) {
    return game.titleKo ? `${game.title} (${game.titleKo})` : game.title;
  }

  function renderGameTitle(game) {
    const koreanTitle = game.titleKo ? `<span class="game-title-ko">${game.titleKo}</span>` : "";

    return `<span class="game-title-en">${game.title}</span>${koreanTitle}`;
  }

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

  function renderGameCover(game) {
    const appId = gameCoverAppIds[game.id];
    const color = getGameCoverColor(game);
    const initials = getGameInitials(game);

    if (appId) {
      const src = `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/library_600x900.jpg`;

      return `
        <div class="game-cover" style="--cover-color:${color}">
          <img src="${src}" alt="" loading="lazy" decoding="async" onerror="this.parentElement.classList.add('is-broken')">
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

  function getComparableTags(game) {
    const duplicateTags = duplicateGenreTags[game.genre] || [];

    return game.tags.filter((tag) => !duplicateTags.includes(tag));
  }

  function renderStars(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
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

  function getGameUrl(game) {
    const appId = steamAppIds[game.id];

    if (appId) {
      return `https://store.steampowered.com/app/${appId}/`;
    }

    return `https://store.steampowered.com/search/?term=${encodeURIComponent(game.title)}`;
  }

  function getDetailPageUrl(game) {
    return `games/${game.id}.html`;
  }

  function formatRatings(ratings) {
    return ratings
      .replace("Steam 압도적으로 긍정적", "Steam 압도적으로 긍정적(97%)")
      .replace("Steam 매우 긍정적", "Steam 매우 긍정적(88%)")
      .replace("Steam 대체로 긍정적", "Steam 대체로 긍정적(75%)");
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
      <p><strong>🏆 Metacritic / Steam</strong>${formatRatings(details.ratings)}</p>
    `;
  }

  function getFilteredGames(query) {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    if (!normalizedQuery) {
      return games;
    }

    return games.filter((game) => {
      const englishTitle = game.title.toLocaleLowerCase();
      const koreanTitle = (game.titleKo || "").toLocaleLowerCase();

      return englishTitle.includes(normalizedQuery) || koreanTitle.includes(normalizedQuery);
    });
  }

  function getPlayTimeValue(game, unknownValue = 999) {
    const playTime = getGameDetails(game).playTime;
    const match = playTime.match(/\d+/);

    return match ? Number(match[0]) : unknownValue;
  }

  function getMetacriticValue(game) {
    const ratings = getGameDetails(game).ratings;
    const match = ratings.match(/Metacritic\s+(\d+)/i);

    return match ? Number(match[1]) : null;
  }

  function getSteamRatingValue(game) {
    const ratings = getGameDetails(game).ratings;
    const steamText = ratings.match(/Steam\s+(.+)$/i)?.[1]?.trim() || "";

    const steamRatingScores = [
      ["압도적으로 긍정적", 97],
      ["압도적 긍정적", 97],
      ["대체로 긍정적", 75],
      ["매우 긍정적", 88],
      ["복합적", 50],
      ["부정적", 20],
      ["압도적으로 부정적", 8]
    ];

    for (const [label, score] of steamRatingScores) {
      if (steamText.includes(label)) {
        return score;
      }
    }

    return null;
  }

  function compareNumericValues(a, b, getter, descending = false) {
    const valueA = getter(a);
    const valueB = getter(b);

    if (valueA === null && valueB === null) {
      return a.title.localeCompare(b.title);
    }

    if (valueA === null) {
      return 1;
    }

    if (valueB === null) {
      return -1;
    }

    return descending ? valueB - valueA || a.title.localeCompare(b.title) : valueA - valueB || a.title.localeCompare(b.title);
  }

  function getActiveFilters() {
    return Array.from(document.querySelectorAll('input[name="gameFilter"]:checked'))
      .map((input) => input.value);
  }

  function matchesFilters(game, activeFilters) {
    if (activeFilters.length === 0) {
      return true;
    }

    const details = getGameDetails(game);
    const multiplayerText = details.multiplayer;
    const playTimeValue = getPlayTimeValue(game, null);
    const multiplayerPattern = /온라인|협동|로컬|다인원|대전/;

    return activeFilters.every((filter) => {
      if (filter === "korean") {
        return details.korean === "지원";
      }

      if (filter === "multiplayer") {
        return multiplayerPattern.test(multiplayerText);
      }

      if (filter === "singleplayer") {
        return multiplayerText.includes("싱글플레이");
      }

      if (filter === "hard") {
        return details.difficulty >= 4;
      }

      if (filter === "short") {
        return playTimeValue !== null && playTimeValue <= 20;
      }

      if (filter === "long") {
        return playTimeValue !== null && playTimeValue >= 50;
      }

      return true;
    });
  }

  function matchesGenreFilter(game) {
    if (!genreFilter.value) {
      return true;
    }

    return game.genre === genreFilter.value;
  }

  function renderGenreOptions() {
    const genres = [...new Set(games.map((game) => game.genre))].sort((a, b) => a.localeCompare(b, "en"));

    genreFilter.innerHTML = '<option value="">전체 장르</option>' + genres
      .map((genre) => `<option value="${genre}">${getGenreLabel(genre)}</option>`)
      .join("");
  }

  function sortGames(gameItems) {
    const sortedGames = [...gameItems];

    if (gameSort.value === "ko-title") {
      return sortedGames.sort((a, b) => (a.titleKo || a.title).localeCompare(b.titleKo || b.title, "ko"));
    }

    if (gameSort.value === "en-title") {
      return sortedGames.sort((a, b) => a.title.localeCompare(b.title, "en"));
    }

    if (gameSort.value === "difficulty-asc") {
      return sortedGames.sort((a, b) => getGameDetails(a).difficulty - getGameDetails(b).difficulty || a.title.localeCompare(b.title));
    }

    if (gameSort.value === "difficulty-desc") {
      return sortedGames.sort((a, b) => getGameDetails(b).difficulty - getGameDetails(a).difficulty || a.title.localeCompare(b.title));
    }

    if (gameSort.value === "time-asc") {
      return sortedGames.sort((a, b) => getPlayTimeValue(a) - getPlayTimeValue(b) || a.title.localeCompare(b.title));
    }

    if (gameSort.value === "time-desc") {
      return sortedGames.sort((a, b) => getPlayTimeValue(b, -1) - getPlayTimeValue(a, -1) || a.title.localeCompare(b.title));
    }

    if (gameSort.value === "metacritic-desc") {
      return sortedGames.sort((a, b) => compareNumericValues(a, b, getMetacriticValue, true));
    }

    if (gameSort.value === "metacritic-asc") {
      return sortedGames.sort((a, b) => compareNumericValues(a, b, getMetacriticValue, false));
    }

    if (gameSort.value === "steam-desc") {
      return sortedGames.sort((a, b) => compareNumericValues(a, b, getSteamRatingValue, true));
    }

    if (gameSort.value === "steam-asc") {
      return sortedGames.sort((a, b) => compareNumericValues(a, b, getSteamRatingValue, false));
    }

    return sortedGames;
  }

  function renderGames(gameItems = games) {
    if (gameItems.length === 0) {
      gameList.innerHTML = '<p class="empty-message full-width">조건에 맞는 게임을 찾지 못했습니다. 검색어나 필터를 조정해보세요.</p>';
      return;
    }

    gameList.innerHTML = gameItems.map((game) => {
      const tags = getComparableTags(game).map((tag) => `<span class="pill">${tag}</span>`).join("");
      const isSelected = selectedIds.has(game.id);
      const detailPageUrl = getDetailPageUrl(game);
      const detailButton = detailPageUrl ? `<a class="game-detail-link" href="${detailPageUrl}">게임 정보 보기</a>` : "";

      return `
        <article class="game-card${isSelected ? " selected" : ""}" data-card-id="${game.id}" role="checkbox" aria-checked="${isSelected}" tabindex="0">
          ${renderGameCover(game)}
          <div>
            <h3 class="game-title">${renderGameTitle(game)}</h3>
            <div class="meta">
              <span class="pill">${getGenreLabel(game.genre)}</span>
              ${tags}
            </div>
          </div>
          <p class="description">${game.description}</p>
          ${detailButton}
          <div class="game-hover-panel" aria-hidden="true">
            ${renderHoverDetails(game)}
          </div>
        </article>
      `;
    }).join("");
  }

  function updateGameList() {
    const query = gameSearch.value.trim();
    const filteredGames = sortGames(
      getFilteredGames(query).filter((game) => matchesGenreFilter(game) && matchesFilters(game, getActiveFilters()))
    );
    const visibleGames = isExpanded ? filteredGames : filteredGames.slice(0, initialGameLimit);

    renderGames(visibleGames);
    showMoreGames.hidden = filteredGames.length <= initialGameLimit;
    showMoreGames.textContent = isExpanded ? "간략히 보기" : "더보기";
    showMoreGames.setAttribute("aria-expanded", String(isExpanded));
  }

  function getSelectedGames() {
    return games.filter((game) => selectedIds.has(game.id));
  }

  function countMatches(values, targetValues) {
    return targetValues.filter((value) => values.includes(value)).length;
  }

  function getRecommendations(selectedGames) {
    const selectedIds = selectedGames.map((game) => game.id);
    const selectedGenres = selectedGames.map((game) => game.genre);
    const selectedTags = selectedGames.flatMap((game) => getComparableTags(game));
    const selectedMoods = selectedGames.flatMap((game) => game.mood);

    return games
      .filter((game) => !selectedIds.includes(game.id))
      .map((game) => {
        const genreMatches = selectedGenres.includes(game.genre) ? 1 : 0;
        const tagMatches = countMatches(selectedTags, getComparableTags(game));
        const moodMatches = countMatches(selectedMoods, game.mood);
        const score = genreMatches * 3 + tagMatches * 2 + moodMatches;

        return {
          game,
          score,
          genreMatches,
          tagMatches,
          moodMatches
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.game.title.localeCompare(b.game.title))
      .slice(0, 5);
  }

  function renderRecommendations() {
    const selectedGames = getSelectedGames();

    if (selectedGames.length === 0) {
      result.innerHTML = '<p class="empty-message">플레이한 게임을 하나 이상 선택해 주세요.</p>';
      return;
    }

    const recommendations = getRecommendations(selectedGames);

    if (recommendations.length === 0) {
      result.innerHTML = '<p class="empty-message">현재 선택과 일치하는 추천 게임을 찾지 못했습니다. 다른 게임을 추가로 선택해 보세요.</p>';
      return;
    }

    result.innerHTML = `
      <div class="result-list">
        ${recommendations.map((item) => `
          <article class="result-card">
            ${renderGameCover(item.game)}
            <h3 class="game-title result-title">${renderGameTitle(item.game)}</h3>
            <p class="score">추천 점수 ${item.score}점</p>
            <p>${item.game.description}</p>
            <p class="site-link"><a href="${getGameUrl(item.game)}" target="_blank" rel="noopener noreferrer">사이트 이동하기</a></p>
            <a class="game-detail-link" href="${getDetailPageUrl(item.game)}">게임 정보 보기</a>
            <div class="meta">
              <span class="pill">${getGenreLabel(item.game.genre)}</span>
              ${getComparableTags(item.game).map((tag) => `<span class="pill">${tag}</span>`).join("")}
            </div>
            <div class="game-hover-panel" aria-hidden="true">
              ${renderHoverDetails(item.game)}
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  renderGenreOptions();
  updateGameList();
  function toggleGameCard(card) {
    const gameId = card.dataset.cardId;

    if (!gameId) {
      return;
    }

    if (selectedIds.has(gameId)) {
      selectedIds.delete(gameId);
    } else {
      selectedIds.add(gameId);
    }

    const isSelected = selectedIds.has(gameId);
    card.classList.toggle("selected", isSelected);
    card.setAttribute("aria-checked", String(isSelected));
  }

  gameList.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      return;
    }

    const card = event.target.closest(".game-card");

    if (card) {
      toggleGameCard(card);
    }
  });
  gameList.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const card = event.target.closest(".game-card");

    if (card) {
      event.preventDefault();
      toggleGameCard(card);
    }
  });
  gameSearch.addEventListener("input", () => {
    isExpanded = false;
    updateGameList();
  });
  genreFilter.addEventListener("change", () => {
    isExpanded = false;
    updateGameList();
  });
  gameSort.addEventListener("change", () => {
    isExpanded = false;
    updateGameList();
  });
  document.querySelectorAll('input[name="gameFilter"]').forEach((input) => {
    input.addEventListener("change", () => {
      isExpanded = false;
      updateGameList();
    });
  });
  document.querySelectorAll("[data-genre-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      genreFilter.value = button.dataset.genreFilter;
      gameSearch.value = "";
      isExpanded = false;
      updateGameList();
      const gameSelectAnchor = document.getElementById("game-select-anchor");

      if (gameSelectAnchor) {
        gameSelectAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        gameList.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
  showMoreGames.addEventListener("click", () => {
    isExpanded = !isExpanded;
    updateGameList();
  });
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.dataset.state = button.getAttribute("aria-expanded") === "true" ? "open" : "closed";

    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("is-open");

      button.setAttribute("aria-expanded", String(isOpen));
      button.dataset.state = isOpen ? "open" : "closed";
    });
  });
  updateIntroState();
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (!siteHeader) {
      updateIntroState();
      return;
    }

    updateIntroState();
    siteHeader.classList.toggle("is-hidden", currentScrollY > lastScrollY && currentScrollY > 80);
    lastScrollY = Math.max(currentScrollY, 0);
  }, { passive: true });
  recommendButton.addEventListener("click", renderRecommendations);
}());
