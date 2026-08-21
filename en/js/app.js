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

  const gameListEmpty = document.getElementById("gameListEmpty");
  const cardsById = new Map();

  gameList.querySelectorAll(".game-card").forEach((card) => {
    cardsById.set(card.dataset.cardId, card);
  });

  const siteHeader = document.querySelector(".site-header");
  const initialGameLimit = 20;
  const minSelectedGames = 3;
  const selectedIds = new Set();
  let isExpanded = false;
  let lastScrollY = window.scrollY;
  const updateIntroState = () => {
    document.body.classList.toggle("is-intro-collapsed", window.scrollY > 40);
  };
  const duplicateGenreTags = {
    "Action RPG": ["Action"],
    "Action Adventure": ["Action"],
    "Automation": ["Automation"],
    "Card Strategy": ["Strategy"],
    "Co-op Shooter": ["Co-op", "Shooter"],
    "Action": ["Action"],
    "Fighting": ["Fighting"],
    "Open World": ["Open World"],
    "Platformer": ["Platformer"],
    "Puzzle": ["Puzzle"],
    "Roguelike": ["Roguelike"],
    "Run and Gun": ["Action"],
    "Shooter": ["Shooter"],
    "Sports": ["Sports"],
    "Strategy": ["Strategy"],
    "Strategy RPG": ["Strategy"],
    "Survival": ["Survival"],
    "Survival Horror": ["Survival"]
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
    "mini-motorways": "1127500",
    "half-life-2": "220",
    "portal": "400",
    "counter-strike-2": "730",
    "gta-5": "3240220",
    "skyrim": "489830",
    "fallout-4": "377160",
    "bioshock-infinite": "8870",
    "dishonored-2": "403640",
    "doom-eternal": "782330",
    "control": "870780",
    "resident-evil-village": "1196590",
    "death-stranding": "1850570",
    "hogwarts-legacy": "990080",
    "starfield": "1716740",
    "diablo-4": "2344520",
    "path-of-exile": "238960",
    "warframe": "230410",
    "apex-legends": "1172470",
    "rust": "252490",
    "ark-survival-evolved": "346110",
    "sons-of-the-forest": "1326470",
    "v-rising": "1604030",
    "dying-light-2": "534380",
    "left-4-dead-2": "550",
    "team-fortress-2": "440",
    "monster-hunter-rise": "1446780",
    "street-fighter-6": "1364780",
    "tekken-8": "1778820",
    "rocket-league": "252950",
    "human-fall-flat": "477160",
    "overcooked-2": "728880",
    "hunt-showdown": "594650",
    "metro-exodus": "412020",
    "titanfall-2": "1237970",
    "borderlands-3": "397540",
    "deltarune": "1671210",
    "cocoon": "1497440",
    "chicory": "1123450",
    "neon-white": "1533420",
    "pizza-tower": "2231450",
    "signalis": "1262350",
    "pentiment": "1205520",
    "astroneer": "361420",
    "core-keeper": "1621690",
    "raft": "648800",
    "a-plague-tale-requiem": "1182900",
    "little-nightmares-2": "860510",
    "kena-bridge-of-spirits": "1954200",
    "against-the-storm": "1336490",
    "terra-nil": "1593030",
    "wukong": "2358720"
  };

  function getComparableTags(game) {
    const duplicateTags = duplicateGenreTags[game.genre] || [];

    return game.tags.filter((tag) => !duplicateTags.includes(tag));
  }

  function renderStars(rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
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

  function getGameUrl(game) {
    const appId = steamAppIds[game.id];

    if (appId) {
      return `https://store.steampowered.com/app/${appId}/`;
    }

    return `https://store.steampowered.com/search/?term=${encodeURIComponent(game.title)}`;
  }

  function getDetailPageUrl(game) {
    return `/games/${game.id}.html`;
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
      ["Overwhelmingly Positive", 97],
      ["Mostly Positive", 75],
      ["Very Positive", 88],
      ["Mixed", 50],
      ["Negative", 20],
      ["Overwhelmingly Negative", 8]
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
    const multiplayerPattern = /Online|Co-op|Local|Multiplayer|PvP/;

    return activeFilters.every((filter) => {
      if (filter === "korean") {
        return details.korean === "Supported";
      }

      if (filter === "multiplayer") {
        return multiplayerPattern.test(multiplayerText);
      }

      if (filter === "singleplayer") {
        return multiplayerText.includes("Singleplayer");
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

    genreFilter.innerHTML = '<option value="">All genres</option>' + genres
      .map((genre) => `<option value="${genre}">${genre}</option>`)
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

  function syncGameList(visibleGames) {
    const visibleIds = new Set(visibleGames.map((game) => game.id));

    visibleGames.forEach((game) => {
      const card = cardsById.get(game.id);

      if (!card) {
        return;
      }

      card.hidden = false;
      gameList.appendChild(card);
    });

    games.forEach((game) => {
      if (visibleIds.has(game.id)) {
        return;
      }

      const card = cardsById.get(game.id);

      if (card) {
        card.hidden = true;
        gameList.appendChild(card);
      }
    });

    if (gameListEmpty) {
      gameListEmpty.hidden = visibleGames.length > 0;
      gameList.appendChild(gameListEmpty);
    }
  }

  function updateGameList() {
    const query = gameSearch.value.trim();
    const filteredGames = sortGames(
      getFilteredGames(query).filter((game) => matchesGenreFilter(game) && matchesFilters(game, getActiveFilters()))
    );
    const visibleGames = isExpanded ? filteredGames : filteredGames.slice(0, initialGameLimit);

    syncGameList(visibleGames);
    showMoreGames.hidden = filteredGames.length <= initialGameLimit;
    showMoreGames.textContent = isExpanded ? "Show less" : "Show more";
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
      .slice(0, 8);
  }

  function animateScoreCounters() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    result.querySelectorAll(".score-value").forEach((el) => {
      const target = Number(el.dataset.target) || 0;

      if (reduceMotion || target === 0) {
        el.textContent = String(target);
        return;
      }

      const duration = 560;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(target * eased));

        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      }

      window.requestAnimationFrame(tick);
    });
  }

  function revealResultCards() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = result.querySelectorAll(".result-card-enter");

    if (reduceMotion) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        cards.forEach((card) => card.classList.add("is-visible"));
      });
    });
  }

  function renderRecommendations() {
    const selectedGames = getSelectedGames();

    if (selectedGames.length < minSelectedGames) {
      result.innerHTML = `<p class="empty-message">Select at least ${minSelectedGames} games. (Currently selected: ${selectedGames.length})</p>`;
      return;
    }

    const recommendations = getRecommendations(selectedGames);

    if (recommendations.length === 0) {
      result.innerHTML = '<p class="empty-message">No recommended games matched your current selection. Try selecting a few more games.</p>';
      return;
    }

    result.innerHTML = `
      <div class="result-list">
        ${recommendations.map((item, index) => `
          <article class="result-card result-card-enter" style="--reveal-delay:${index * 90}ms">
            ${renderRecommendedRibbon(item.game)}
            ${renderGameCover(item.game)}
            <h3 class="game-title result-title">${renderGameTitle(item.game)}</h3>
            <div class="meta">
              <span class="pill">${item.game.genre}</span>
              ${getComparableTags(item.game).map((tag) => `<span class="pill">${tag}</span>`).join("")}
            </div>
            ${renderGamePrice(item.game)}
            <p class="score">Recommendation score <span class="score-value" data-target="${item.score}">0</span></p>
            <p>${item.game.description}</p>
            <div class="result-actions">
              <a class="site-link-button" href="${getGameUrl(item.game)}" target="_blank" rel="noopener noreferrer"><span>Visit store page</span></a>
              <a class="game-detail-link" href="${getDetailPageUrl(item.game)}"><span>View game info</span></a>
            </div>
            <div class="game-hover-panel" aria-hidden="true">
              ${renderHoverDetails(item.game)}
            </div>
          </article>
        `).join("")}
      </div>
    `;

    revealResultCards();
    animateScoreCounters();
  }

  function renderGameTitle(game) {
    return `<span class="game-title-en">${game.title}</span>`;
  }

  function renderGameCover(game) {
    return buildGameCoverHtml(game);
  }

  function renderGamePrice(game) {
    return `<p class="game-price">${formatGamePrice(game)}</p>`;
  }

  const recommendLoadingSteps = [
    { icon: "🎲", text: "Loading your selected games" },
    { icon: "🧩", text: "Comparing genres and tags" },
    { icon: "🔍", text: "Checking mood compatibility" },
    { icon: "🏆", text: "Narrowing down the top 8 games" },
    { icon: "✨", text: "Recommendations ready!" }
  ];

  function playRecommendLoading(onDone) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      onDone();
      return;
    }

    result.innerHTML = `
      <div class="result-loading">
        <div class="result-loading-dice" aria-hidden="true">${recommendLoadingSteps[0].icon}</div>
        <p class="result-loading-text">${recommendLoadingSteps[0].text}</p>
        <div class="result-loading-bar"><div class="result-loading-bar-fill"></div></div>
      </div>
    `;

    const iconEl = result.querySelector(".result-loading-dice");
    const textEl = result.querySelector(".result-loading-text");
    const fillEl = result.querySelector(".result-loading-bar-fill");
    const stepMs = 520;

    window.requestAnimationFrame(() => {
      if (fillEl) {
        fillEl.style.width = "100%";
      }
    });

    let step = 0;
    const timer = setInterval(() => {
      step += 1;

      if (step < recommendLoadingSteps.length && textEl && iconEl) {
        textEl.textContent = recommendLoadingSteps[step].text;
        iconEl.textContent = recommendLoadingSteps[step].icon;
      }
    }, stepMs);

    setTimeout(() => {
      clearInterval(timer);
      onDone();
    }, stepMs * recommendLoadingSteps.length + 120);
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
  document.querySelectorAll(".collapsible-toggle").forEach((button) => {
    const section = button.closest(".collapsible-section");

    if (!section) {
      return;
    }

    button.addEventListener("click", () => {
      const isExpanded = section.classList.toggle("is-expanded");

      button.setAttribute("aria-expanded", String(isExpanded));
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

  const jumpToStep2Button = document.getElementById("jumpToStep2");
  const heroSection = document.querySelector(".hero");
  const step2Section = document.getElementById("recommend-title") ? document.getElementById("recommend-title").closest("section") : null;

  if (jumpToStep2Button && heroSection && step2Section) {
    const updateJumpButtonVisibility = () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const step2Top = step2Section.getBoundingClientRect().top;
      const shouldShow = heroBottom < 60 && step2Top > 160;

      jumpToStep2Button.classList.toggle("is-visible", shouldShow);
    };

    updateJumpButtonVisibility();
    window.addEventListener("scroll", updateJumpButtonVisibility, { passive: true });
    window.addEventListener("resize", updateJumpButtonVisibility);

    jumpToStep2Button.addEventListener("click", () => {
      step2Section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const recommendButtonLabel = recommendButton.querySelector(".button-label") || recommendButton;
  const recommendButtonDefaultText = recommendButtonLabel.textContent;

  recommendButton.addEventListener("click", () => {
    if (recommendButton.disabled) {
      return;
    }

    if (getSelectedGames().length < minSelectedGames) {
      renderRecommendations();
      return;
    }

    recommendButton.disabled = true;
    recommendButton.classList.add("is-loading");
    recommendButtonLabel.textContent = "Analyzing...";

    playRecommendLoading(() => {
      renderRecommendations();
      recommendButton.disabled = false;
      recommendButton.classList.remove("is-loading");
      recommendButtonLabel.textContent = recommendButtonDefaultText;
    });
  });
}());
