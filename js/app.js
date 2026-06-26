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
  const gameDetails = {
    "elden-ring": ["2022", "약 60-100시간", 5, "온라인 협동/침입", "PC, PlayStation, Xbox", "지원", "Metacritic 96 / Steam 매우 긍정적"],
    "dark-souls-3": ["2016", "약 35-60시간", 5, "온라인 협동/침입", "PC, PlayStation, Xbox", "지원", "Metacritic 89 / Steam 매우 긍정적"],
    "the-witcher-3": ["2015", "약 50-120시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 93 / Steam 압도적으로 긍정적"],
    "baldurs-gate-3": ["2023", "약 75-120시간", 4, "온라인 협동 최대 4명", "PC, PlayStation, Xbox", "지원", "Metacritic 96 / Steam 압도적으로 긍정적"],
    "stardew-valley": ["2016", "약 50-150시간", 2, "온라인 협동 최대 8명", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 89 / Steam 압도적으로 긍정적"],
    "animal-crossing": ["2020", "약 60시간 이상", 1, "온라인 최대 8명", "Switch", "지원", "Metacritic 90 / Steam 없음"],
    "minecraft": ["2011", "플레이 방식에 따라 크게 달라짐", 2, "온라인 다인원", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 93 / Steam 없음"],
    "terraria": ["2011", "약 50-100시간", 3, "온라인 최대 8명", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 83 / Steam 압도적으로 긍정적"],
    "hades": ["2020", "약 20-50시간", 4, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 93 / Steam 압도적으로 긍정적"],
    "dead-cells": ["2018", "약 20-60시간", 4, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 89 / Steam 압도적으로 긍정적"],
    "civilization-vi": ["2016", "약 40시간 이상", 3, "온라인 다인원", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 88 / Steam 매우 긍정적"],
    "xcom-2": ["2016", "약 30-50시간", 4, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 88 / Steam 매우 긍정적"],
    "portal-2": ["2011", "약 8-12시간", 2, "협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 95 / Steam 압도적으로 긍정적"],
    "the-witness": ["2016", "약 15-30시간", 4, "싱글플레이", "PC, PlayStation, Xbox, Mobile", "미지원", "Metacritic 87 / Steam 매우 긍정적"],
    "hollow-knight": ["2017", "약 25-50시간", 4, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
    "ori-will-of-the-wisps": ["2020", "약 12-20시간", 3, "싱글플레이", "PC, Xbox, Switch", "지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
    "celeste": ["2018", "약 8-20시간", 5, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 94 / Steam 압도적으로 긍정적"],
    "slay-the-spire": ["2019", "약 20-100시간", 4, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 89 / Steam 압도적으로 긍정적"],
    "subnautica": ["2018", "약 25-50시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 87 / Steam 압도적으로 긍정적"],
    "dont-starve": ["2013", "약 20시간 이상", 4, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 79 / Steam 매우 긍정적"],
    "mass-effect-2": ["2010", "약 25-45시간", 3, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 96 / Steam 매우 긍정적"],
    "it-takes-two": ["2021", "약 12-15시간", 2, "협동 2명 전용", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 89 / Steam 압도적으로 긍정적"],
    "cyberpunk-2077": ["2020", "약 30-80시간", 3, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 86 / Steam 매우 긍정적"],
    "red-dead-redemption-2": ["2018", "약 50-100시간", 3, "온라인 다인원", "PC, PlayStation, Xbox", "지원", "Metacritic 97 / Steam 매우 긍정적"],
    "god-of-war": ["2018", "약 20-40시간", 3, "싱글플레이", "PC, PlayStation", "지원", "Metacritic 94 / Steam 압도적으로 긍정적"],
    "horizon-zero-dawn": ["2017", "약 35-70시간", 3, "싱글플레이", "PC, PlayStation", "지원", "Metacritic 89 / Steam 매우 긍정적"],
    "ghost-of-tsushima": ["2020", "약 30-60시간", 3, "온라인 협동 최대 4명", "PC, PlayStation", "지원", "Metacritic 83 / Steam 매우 긍정적"],
    "monster-hunter-world": ["2018", "약 50-100시간", 4, "온라인 협동 최대 4명", "PC, PlayStation, Xbox", "지원", "Metacritic 90 / Steam 매우 긍정적"],
    "sekiro": ["2019", "약 30-50시간", 5, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 90 / Steam 매우 긍정적"],
    "bloodborne": ["2015", "약 35-60시간", 5, "온라인 협동/침입", "PlayStation", "지원", "Metacritic 92 / Steam 없음"],
    "nioh-2": ["2020", "약 50-100시간", 5, "온라인 협동 최대 3명", "PC, PlayStation", "지원", "Metacritic 85 / Steam 매우 긍정적"],
    "persona-5-royal": ["2019", "약 90-120시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 95 / Steam 압도적으로 긍정적"],
    "dragon-quest-xi-s": ["2019", "약 60-100시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 91 / Steam 매우 긍정적"],
    "final-fantasy-vii-remake": ["2020", "약 35-50시간", 3, "싱글플레이", "PC, PlayStation", "지원", "Metacritic 87 / Steam 매우 긍정적"],
    "nier-automata": ["2017", "약 25-60시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 88 / Steam 매우 긍정적"],
    "disco-elysium": ["2019", "약 20-40시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 91 / Steam 매우 긍정적"],
    "divinity-original-sin-2": ["2017", "약 60-100시간", 4, "온라인 협동 최대 4명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 93 / Steam 압도적으로 긍정적"],
    "rimworld": ["2018", "약 50시간 이상", 4, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 87 / Steam 압도적으로 긍정적"],
    "factorio": ["2020", "약 50시간 이상", 4, "온라인 다인원", "PC, Switch", "지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
    "oxygen-not-included": ["2019", "약 50시간 이상", 4, "싱글플레이", "PC", "지원", "Metacritic 86 / Steam 압도적으로 긍정적"],
    "cities-skylines": ["2015", "약 40시간 이상", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 85 / Steam 매우 긍정적"],
    "the-sims-4": ["2014", "플레이 방식에 따라 크게 달라짐", 1, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 70 / Steam 매우 긍정적"],
    "fire-emblem-three-houses": ["2019", "약 50-80시간", 3, "싱글플레이", "Switch", "지원", "Metacritic 89 / Steam 없음"],
    "into-the-breach": ["2018", "약 10-30시간", 4, "싱글플레이", "PC, Switch, Mobile", "지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
    "total-war-three-kingdoms": ["2019", "약 30-80시간", 4, "온라인 2명", "PC", "지원", "Metacritic 85 / Steam 매우 긍정적"],
    "age-of-empires-ii-de": ["2019", "약 20시간 이상", 3, "온라인 다인원", "PC, Xbox", "지원", "Metacritic 84 / Steam 매우 긍정적"],
    "tetris-effect-connected": ["2018", "약 5-20시간", 2, "온라인/로컬 최대 3명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 89 / Steam 압도적으로 긍정적"],
    "return-of-the-obra-dinn": ["2018", "약 8-12시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 89 / Steam 압도적으로 긍정적"],
    "outer-wilds": ["2019", "약 15-25시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
    "super-mario-odyssey": ["2017", "약 12-30시간", 2, "로컬 2명", "Switch", "지원", "Metacritic 97 / Steam 없음"],
    "metroid-dread": ["2021", "약 8-15시간", 4, "싱글플레이", "Switch", "지원", "Metacritic 88 / Steam 없음"],
    "cuphead": ["2017", "약 10-20시간", 5, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 88 / Steam 압도적으로 긍정적"],
    "the-last-of-us-part-ii": ["2020", "약 25-35시간", 3, "싱글플레이", "PlayStation", "지원", "Metacritic 93 / Steam 없음"],
    "uncharted-4": ["2016", "약 15-30시간", 2, "온라인 다인원", "PC, PlayStation", "지원", "Metacritic 93 / Steam 매우 긍정적"],
    "resident-evil-4-remake": ["2023", "약 15-30시간", 4, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 93 / Steam 압도적으로 긍정적"],
    "zelda-breath-of-the-wild": ["2017", "약 50-100시간", 3, "싱글플레이", "Switch", "지원", "Metacritic 97 / Steam 없음"],
    "zelda-tears-of-the-kingdom": ["2023", "약 60-120시간", 3, "싱글플레이", "Switch", "지원", "Metacritic 96 / Steam 없음"],
    "dave-the-diver": ["2023", "약 20-35시간", 2, "싱글플레이", "PC, PlayStation, Switch", "지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
    "vampire-survivors": ["2022", "약 20-60시간", 2, "로컬 협동 최대 4명", "PC, Xbox, Switch, Mobile", "지원", "Metacritic 86 / Steam 압도적으로 긍정적"],
    "balatro": ["2024", "약 20-80시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
    "valheim": ["2021", "약 60-120시간", 3, "온라인 최대 10명", "PC, Xbox", "지원", "Metacritic 86 / Steam 압도적으로 긍정적"],
    "palworld": ["2024", "약 40-100시간", 3, "온라인 다인원", "PC, Xbox", "지원", "Metacritic 69 / Steam 매우 긍정적"],
    "lethal-company": ["2023", "반복 플레이 중심", 3, "온라인 협동 최대 4명", "PC", "미지원", "Metacritic 확인 필요 / Steam 압도적으로 긍정적"],
    "helldivers-2": ["2024", "약 30시간 이상", 4, "온라인 협동 최대 4명", "PC, PlayStation", "지원", "Metacritic 82 / Steam 대체로 긍정적"],
    "deep-rock-galactic": ["2020", "약 40시간 이상", 3, "온라인 협동 최대 4명", "PC, PlayStation, Xbox", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
    "risk-of-rain-2": ["2020", "약 30-100시간", 4, "온라인 협동 최대 4명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
    "no-mans-sky": ["2016", "약 50시간 이상", 3, "온라인 다인원", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 71 / Steam 매우 긍정적"],
    "satisfactory": ["2024", "약 80시간 이상", 3, "온라인 협동", "PC", "지원", "Metacritic 91 / Steam 압도적으로 긍정적"],
    "hi-fi-rush": ["2023", "약 10-15시간", 3, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 89 / Steam 압도적으로 긍정적"],
    "sea-of-stars": ["2023", "약 30-45시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 87 / Steam 매우 긍정적"],
    "tunic": ["2022", "약 12-25시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 85 / Steam 매우 긍정적"],
    "undertale": ["2015", "약 6-15시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 92 / Steam 압도적으로 긍정적"],
    "dredge": ["2023", "약 10-20시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
    "inscryption": ["2021", "약 12-20시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
    "cult-of-the-lamb": ["2022", "약 15-35시간", 3, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 82 / Steam 매우 긍정적"],
    "lies-of-p": ["2023", "약 30-50시간", 5, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 80 / Steam 매우 긍정적"],
    "armored-core-vi": ["2023", "약 20-40시간", 4, "온라인 대전", "PC, PlayStation, Xbox", "지원", "Metacritic 86 / Steam 매우 긍정적"],
    "remnant-2": ["2023", "약 25-60시간", 4, "온라인 협동 최대 3명", "PC, PlayStation, Xbox", "지원", "Metacritic 80 / Steam 매우 긍정적"],
    "phasmophobia": ["2020", "반복 플레이 중심", 3, "온라인 협동 최대 4명", "PC", "지원", "Metacritic 확인 필요 / Steam 압도적으로 긍정적"],
    "project-zomboid": ["2013", "약 50시간 이상", 5, "온라인 다인원", "PC", "지원", "Metacritic 확인 필요 / Steam 매우 긍정적"],
    "binding-of-isaac-rebirth": ["2014", "약 50시간 이상", 4, "로컬 협동 최대 4명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 86 / Steam 압도적으로 긍정적"],
    "euro-truck-simulator-2": ["2012", "약 50시간 이상", 2, "온라인 다인원", "PC", "지원", "Metacritic 79 / Steam 압도적으로 긍정적"],
    "among-us": ["2018", "반복 플레이 중심", 2, "온라인 최대 15명", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 85 / Steam 매우 긍정적"],
    "papers-please": ["2013", "약 5-10시간", 3, "싱글플레이", "PC, PlayStation, Mobile", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
    "hotline-miami": ["2012", "약 5-10시간", 4, "싱글플레이", "PC, PlayStation, Switch", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
    "ftl": ["2012", "약 10-40시간", 4, "싱글플레이", "PC, Mobile", "지원", "Metacritic 84 / Steam 압도적으로 긍정적"],
    "stanley-parable-ultra-deluxe": ["2022", "약 3-8시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
    "a-short-hike": ["2019", "약 2-5시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 88 / Steam 압도적으로 긍정적"],
    "spiritfarer": ["2020", "약 25-40시간", 2, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 84 / Steam 압도적으로 긍정적"],
    "inside": ["2016", "약 3-5시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 91 / Steam 압도적으로 긍정적"],
    "limbo": ["2010", "약 3-5시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 88 / Steam 압도적으로 긍정적"],
    "fez": ["2013", "약 8-15시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "미지원", "Metacritic 91 / Steam 매우 긍정적"],
    "spelunky-2": ["2020", "약 20-80시간", 5, "온라인/로컬 협동 최대 4명", "PC, PlayStation, Switch", "지원", "Metacritic 91 / Steam 매우 긍정적"],
    "shovel-knight-treasure-trove": ["2014", "약 20-40시간", 3, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 86 / Steam 압도적으로 긍정적"],
    "katana-zero": ["2019", "약 5-10시간", 4, "싱글플레이", "PC, Xbox, Switch", "지원", "Metacritic 83 / Steam 압도적으로 긍정적"],
    "hyper-light-drifter": ["2016", "약 8-15시간", 4, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 84 / Steam 매우 긍정적"],
    "enter-the-gungeon": ["2016", "약 30시간 이상", 4, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 84 / Steam 압도적으로 긍정적"],
    "darkest-dungeon": ["2016", "약 50시간 이상", 5, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 84 / Steam 매우 긍정적"],
    "firewatch": ["2016", "약 4-6시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 81 / Steam 매우 긍정적"],
    "gris": ["2018", "약 3-5시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 83 / Steam 압도적으로 긍정적"],
    "edith-finch": ["2017", "약 2-3시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 88 / Steam 압도적으로 긍정적"],
    "baba-is-you": ["2019", "약 20-40시간", 4, "싱글플레이", "PC, Switch, Mobile", "지원", "Metacritic 87 / Steam 압도적으로 긍정적"],
    "untitled-goose-game": ["2019", "약 3-6시간", 1, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 81 / Steam 매우 긍정적"],
    "loop-hero": ["2021", "약 20-40시간", 3, "싱글플레이", "PC, Xbox, Switch, Mobile", "지원", "Metacritic 82 / Steam 매우 긍정적"],
    "rain-world": ["2017", "약 20-50시간", 5, "로컬 협동 최대 4명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 66 / Steam 매우 긍정적"],
    "night-in-the-woods": ["2017", "약 8-12시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 88 / Steam 매우 긍정적"],
    "oxenfree": ["2016", "약 4-6시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 80 / Steam 매우 긍정적"],
    "crypt-of-the-necrodancer": ["2015", "약 15-40시간", 4, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 87 / Steam 압도적으로 긍정적"],
    "superhot": ["2016", "약 3-8시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 82 / Steam 매우 긍정적"],
    "brotato": ["2023", "약 20-60시간", 3, "로컬 협동 최대 4명", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 82 / Steam 압도적으로 긍정적"],
    "unpacking": ["2021", "약 3-5시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 84 / Steam 압도적으로 긍정적"],
    "dorfromantik": ["2022", "약 10-30시간", 2, "싱글플레이", "PC, Switch", "지원", "Metacritic 80 / Steam 압도적으로 긍정적"],
    "mini-motorways": ["2021", "약 10-30시간", 3, "싱글플레이", "PC, Switch, Mobile", "지원", "Metacritic 87 / Steam 매우 긍정적"]
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
