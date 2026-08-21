// Korean -> English translation data used to build the /en site.
// Consumed by scripts/build-en-games.js and scripts/generate-game-cards-en.js.

// Single word/phrase dictionary shared by tags, moods, and duplicateGenreTags.
// (A few words like "긴장감" or "차분함" show up as both a tag and a mood in
// the source data, so one shared map keeps translations consistent.)
const phraseDict = {
  // tags
  "오픈월드": "Open World", "소울라이크": "Soulslike", "탐험": "Exploration", "판타지": "Fantasy",
  "보스전": "Boss Battles", "다크판타지": "Dark Fantasy", "전투": "Combat", "스토리": "Story",
  "선택": "Choices", "턴제": "Turn-based", "파티": "Party", "농장": "Farming", "생활": "Life Sim",
  "생활 시뮬레이션": "Life Simulation", "제작": "Crafting", "관계": "Relationships", "꾸미기": "Decorating",
  "수집": "Collecting", "섬": "Island", "생존": "Survival", "건축": "Building", "로그라이크": "Roguelike",
  "신화": "Mythology", "플랫포머": "Platformer", "문명": "Civilization", "전략": "Strategy",
  "확장": "Expansion", "전술": "Tactics", "분대": "Squad", "SF": "Sci-Fi", "퍼즐": "Puzzle",
  "물리": "Physics", "협동": "Co-op", "관찰": "Observation", "정밀조작": "Precision Controls",
  "도전": "Challenge", "카드": "Cards", "덱빌딩": "Deckbuilding", "해양": "Ocean",
  "자원관리": "Resource Management", "좀비": "Zombies", "철학": "Philosophy", "추리": "Deduction",
  "대화": "Dialogue", "과학": "Science", "도시": "City", "창작": "Creation", "역사": "History",
  "전쟁": "War", "음악": "Music", "점수": "Scoring", "우주": "Space", "액션": "Action",
  "초자연": "Supernatural", "잠입": "Stealth", "비동기협동": "Asynchronous Co-op", "마법": "Magic",
  "핵앤슬래시": "Hack and Slash", "빌드": "Builds", "무료": "Free", "배틀로얄": "Battle Royale",
  "공룡": "Dinosaurs", "뱀파이어": "Vampires", "PvP": "PvP", "파쿠르": "Parkour", "e스포츠": "Esports",
  "콤보": "Combos", "격투": "Fighting", "자동차": "Cars", "요리": "Cooking", "타이밍": "Timing",
  "PvPvE": "PvPvE", "현상금": "Bounty Hunting", "메카": "Mechs", "이동기": "Movement Tech",
  "루팅": "Looting", "세계관": "Lore", "미니멀": "Minimalist", "그림": "Drawing", "예술": "Art",
  "감성": "Emotional", "스피드런": "Speedrun", "속도감": "High Speed", "채굴": "Mining",
  "쥐떼": "Rat Swarm", "가족": "Family", "동행": "Companion", "정령": "Spirits",
  "도시건설": "City Building", "환경": "Environment", "역발상": "Unconventional", "힐링": "Relaxing",
  "분기 서사": "Branching Narrative", "선택형": "Choice-driven", "QTE": "QTE",
  "전술 슈터": "Tactical Shooter", "파괴 가능 지형": "Destructible Terrain", "5대5": "5v5",
  "100인전": "100-Player Matches", "리듬": "Rhythm", "박자": "Beat", "고난도": "Hardcore",
  "시점 퍼즐": "Perspective Puzzle", "큐브": "Cube", "정밀 타이밍": "Precision Timing",
  "그래플링 훅": "Grappling Hook", "서사": "Narrative", "증거 분석": "Evidence Analysis", "논리": "Logic",
  "2인 협동": "2-Player Co-op", "무전기": "Walkie-Talkie", "탈출": "Escape", "탈옥": "Prison Break",
  "스플릿 스크린": "Split-Screen", "해킹": "Hacking", "코딩": "Coding", "관음": "Voyeurism",
  "사이버펑크": "Cyberpunk", "윤리적 선택": "Ethical Choices", "장애물 경주": "Obstacle Course",
  "리듬 플랫포머": "Rhythm Platformer", "정밀 점프": "Precision Jumping", "물리 등반": "Physics Climbing",
  "인내심": "Patience", "골프": "Golf", "소셜 추리": "Social Deduction", "역할 다양성": "Role Variety",
  "4인 협동": "4-Player Co-op", "호러": "Horror", "공포": "Horror", "코딩 퍼즐": "Coding Puzzle",
  "회사 풍자": "Corporate Satire", "감성 어드벤처": "Emotional Adventure", "비언어": "Wordless",
  "짧은 경험": "Short Experience", "일기 예보": "Weather Forecasting", "타이쿤": "Tycoon",
  "물리 시뮬레이션": "Physics Simulation", "다리 건설": "Bridge Building", "두개골 교체": "Skull Swapping",
  "카드 빌더": "Card Builder", "마을 경영": "Village Management", "기억 여행": "Memory Journey",
  "픽셀 그래픽": "Pixel Graphics", "픽셀": "Pixel", "자동전투": "Auto-Battler", "생태계": "Ecosystem",
  "규칙": "Rules", "창의": "Creativity", "유머": "Humor", "자동화": "Automation", "타일": "Tiles",
  "교통": "Traffic", "장비": "Gear", "던전": "Dungeon", "아이템": "Items", "기지": "Base",
  "경영": "Management", "운전": "Driving", "심리전": "Psychological Warfare", "관리": "Management",
  "커스터마이징": "Customization", "모드": "Mods", "포스트아포칼립스": "Post-Apocalyptic",
  "FPS": "FPS", "범죄": "Crime", "다인원": "Multiplayer", "스포츠": "Sports", "슈터": "Shooter",
  "차분함": "Calm", "서부": "Western", "미스터리": "Mystery", "정리": "Organizing",
  "물리엔진": "Physics Engine", "대전": "PvP", "히어로 슈터": "Hero Shooter",
  // moods
  "도전적": "Challenging", "몰입감": "Immersive", "긴장감": "Tense", "편안함": "Relaxing",
  "따뜻함": "Warm", "창의적": "Creative", "자유로움": "Free-spirited", "모험적": "Adventurous",
  "빠른": "Fast-paced", "전략적": "Strategic", "집중": "Focused", "영리함": "Clever",
  "유쾌함": "Lighthearted", "감성적": "Emotional", "기묘함": "Strange", "서사적": "Narrative-driven",
  "아름다움": "Beautiful"
};

function translatePhrase(word) {
  return phraseDict[word] || word;
}

function translateList(list) {
  return list.map(translatePhrase);
}

// gameDetails[3] (multiplayer) token-substitution transform. Order matters:
// specific patterns first, then generic word swaps.
function translateMultiplayer(text) {
  let out = text;
  out = out.replace(/최대\s*(\d+)인\s*팀/g, "teams of up to $1");
  out = out.replace(/최대\s*(\d+)명/g, "up to $1 players");
  out = out.replace(/(\d+)인\s*팀/g, "$1-player teams");
  out = out.replace(/(\d+)명/g, "$1 players");
  out = out.replace(/(\d+)인/g, "$1-player");
  out = out.replace(/온라인\/로컬/g, "Online/Local");
  out = out.replace(/온라인/g, "Online");
  out = out.replace(/로컬/g, "Local");
  out = out.replace(/협동/g, "Co-op");
  out = out.replace(/대전/g, "PvP");
  out = out.replace(/다인원/g, "Multiplayer");
  out = out.replace(/싱글플레이/g, "Singleplayer");
  out = out.replace(/전용/g, "only");
  out = out.replace(/\s*및\s*/g, " & ");
  out = out.replace(/스쿼드/g, "squad");
  out = out.replace(/침입/g, "invasion");
  return out;
}

// gameDetails[1] (playTime) transform.
function translatePlayTime(text) {
  if (text === "제한없음") return "Unlimited";
  if (text === "반복 플레이 중심") return "Session-based, highly replayable";
  if (text === "플레이 방식에 따라 크게 달라짐") return "Varies greatly by playstyle";

  let match = text.match(/^약\s*(\d+)-(\d+)시간$/);
  if (match) return `~${match[1]}-${match[2]} hours`;

  match = text.match(/^약\s*(\d+)시간\s*이상$/);
  if (match) return `~${match[1]}+ hours`;

  match = text.match(/^약\s*(\d+)시간$/);
  if (match) return `~${match[1]} hours`;

  return text;
}

const koreanSupportDict = {
  "지원": "Supported",
  "미지원": "Not supported"
};

function translateKoreanSupport(text) {
  return koreanSupportDict[text] || text;
}

const steamRatingDict = {
  "압도적으로 긍정적": "Overwhelmingly Positive",
  "매우 긍정적": "Very Positive",
  "대체로 긍정적": "Mostly Positive",
  "긍정적": "Positive",
  "복합적": "Mixed",
  "대체로 부정적": "Mostly Negative",
  "부정적": "Negative",
  "압도적으로 부정적": "Overwhelmingly Negative",
  "없음": "N/A",
  "확인 필요": "TBD"
};

// gameDetails[6] (ratings), e.g. "Metacritic 96 / Steam 매우 긍정적"
function translateRatings(text) {
  const match = text.match(/^Metacritic\s+(.+?)\s*\/\s*Steam\s+(.+)$/);

  if (!match) return text;

  const metacritic = match[1] === "확인 필요" ? "TBD" : match[1];
  const steamText = steamRatingDict[match[2]] || match[2];

  return `Metacritic ${metacritic} / Steam ${steamText}`;
}

// Hand-translated per-game description overrides (id -> English sentence).
const descriptionOverrides = {
  "elden-ring": "An action RPG defined by a vast world and punishing high-difficulty combat",
  "dark-souls-3": "A dark fantasy action RPG whose precise combat delivers a strong sense of accomplishment",
  "the-witcher-3": "An open-world RPG shaped by a rich story and choice-driven quests",
  "baldurs-gate-3": "A deep RPG that combines meaningful choices, dice rolls, and party-based combat",
  "stardew-valley": "A relaxed life sim about running a farm and settling into small-town life",
  "animal-crossing": "A laid-back life game about decorating your island and getting to know your neighbors",
  "minecraft": "A sandbox game where you build, explore, and survive freely in a blocky world",
  "terraria": "A 2D sandbox adventure about gathering resources and taking on powerful bosses",
  "hades": "A roguelike action game whose strength lies in fast combat and a story that unfolds across repeated runs",
  "dead-cells": "A roguelike action platformer built around fast-paced combat and repeated attempts",
  "civilization-vi": "A turn-based strategy game about growing a civilization through diplomacy, science, and war",
  "xcom-2": "A turn-based strategy game combining squad-level tactics with resource management",
  "portal-2": "A puzzle adventure about solving spatial puzzles with a portal device",
  "the-witness": "An exploration-driven puzzle game about observing rules scattered across an island",
  "hollow-knight": "A metroidvania about exploring a vast underground kingdom and fighting powerful foes",
  "ori-will-of-the-wisps": "An action platformer defined by fluid movement and emotionally resonant presentation",
  "celeste": "A challenging platformer that pairs precise controls with a story of personal growth",
  "slay-the-spire": "A strategic roguelike about picking cards, building your deck, and climbing a tower",
  "subnautica": "An exploration-driven survival game about gathering resources on an alien ocean planet",
  "dont-starve": "A survival game about managing hunger and danger in a strange world",
  "mass-effect-2": "A sci-fi RPG centered on your crew, your choices, and a sweeping space saga",
  "it-takes-two": "A co-op adventure where two players solve a variety of mechanics together",
  "cyberpunk-2077": "An open-world RPG combining a sprawling future city with a choice-driven story",
  "red-dead-redemption-2": "An open-world adventure defined by a vast western frontier and its characters' stories",
  "god-of-war": "An action adventure centered on intense combat and the story of a father and son",
  "horizon-zero-dawn": "An open-world action RPG about exploring a world ruled by mechanical creatures",
  "ghost-of-tsushima": "A samurai action adventure blending a beautiful island with sword combat",
  "monster-hunter-world": "A co-op action RPG built around hunting giant monsters and crafting gear",
  "sekiro": "A challenging action adventure defined by precise swordplay and parry-focused combat",
  "bloodborne": "An action RPG whose strengths are its gothic horror atmosphere and aggressive combat",
  "nioh-2": "An action RPG with deep stance-switching mechanics and gear builds",
  "persona-5-royal": "A stylish turn-based JRPG combining school life with dungeon crawling",
  "dragon-quest-xi-s": "A JRPG built on traditional adventure storytelling and solid turn-based combat",
  "final-fantasy-vii-remake": "A cinematic action RPG blending real-time action with tactical choices",
  "nier-automata": "An action RPG combining fast combat with a philosophical narrative",
  "disco-elysium": "A narrative-driven RPG built on dialogue, choice, and psychological depth",
  "divinity-original-sin-2": "A party-based RPG whose strengths are open-ended interaction and tactical combat",
  "rimworld": "A colony simulation centered on keeping settlers alive and managing unexpected crises",
  "factorio": "An automation game spanning everything from resource mining to optimizing production lines",
  "oxygen-not-included": "A survival simulation about meticulously managing your base's oxygen, heat, and resources",
  "cities-skylines": "A city-building simulation about designing traffic, zoning, and public services",
  "the-sims-4": "A life simulation where you freely shape your character's daily life, home, and relationships",
  "fire-emblem-three-houses": "A strategy RPG combining academy life, tactical battles, and a branching story",
  "into-the-breach": "A turn-based tactics game about calculating your moves to prevent damage on a compact battlefield",
  "total-war-three-kingdoms": "A historical strategy game combining Three Kingdoms diplomacy with large-scale battles",
  "age-of-empires-ii-de": "A classic RTS built around growing a civilization and commanding real-time battles",
  "tetris-effect-connected": "A rhythmic puzzle game whose music and visuals heighten immersion",
  "return-of-the-obra-dinn": "A deduction puzzle game about observing clues to trace a crew's fate",
  "outer-wilds": "An exploration adventure about unraveling a cosmic mystery across a looping span of time",
  "super-mario-odyssey": "A 3D platformer about freely exploring a variety of vibrant kingdoms",
  "metroid-dread": "A metroidvania defined by fast movement and tense pursuit",
  "cuphead": "An action game built around classic cartoon-style visuals and tough boss fights",
  "the-last-of-us-part-ii": "A cinematic action adventure combining an intense story with survival combat",
  "uncharted-4": "An action adventure blending cinematic presentation with treasure-hunting exploration",
  "resident-evil-4-remake": "A survival horror game centered on resource management and pressure-filled combat",
  "zelda-breath-of-the-wild": "An open-world adventure known for its physics-driven, freeform exploration",
  "zelda-tears-of-the-kingdom": "An open-world adventure about traveling between sky and land while building contraptions",
  "dave-the-diver": "A casual adventure combining ocean exploration with running a sushi restaurant",
  "vampire-survivors": "An addictive survival roguelike built on automatic attacks and growing your build",
  "balatro": "A deckbuilding roguelike built on poker hands and unconventional card synergies",
  "valheim": "A survival game about building, exploring, and battling bosses across a Viking world",
  "palworld": "An open-world survival game combining creature collecting, base building, and combat",
  "lethal-company": "A co-op horror survival game about scavenging scrap in derelict facilities",
  "helldivers-2": "A third-person co-op shooter whose strengths are squad teamwork and battlefield chaos",
  "deep-rock-galactic": "A co-op shooter combining cave exploration, mining, and combat against alien creatures",
  "risk-of-rain-2": "A 3D action roguelike built on stacking items as difficulty escalates",
  "no-mans-sky": "An open-world game centered on near-endless space exploration and base building",
  "satisfactory": "An automation game about designing sprawling 3D factories and production lines",
  "hi-fi-rush": "An action adventure whose strengths are rhythm-synced combat and comic-book style presentation",
  "sea-of-stars": "An RPG blending classic JRPG charm with modern turn-based combat",
  "tunic": "An adventure about deciphering an instruction manual to uncover the world's secrets",
  "undertale": "An indie RPG where combat and dialogue choices heavily shape the story",
  "dredge": "An adventure combining fishing and upgrades with an ominous ocean mystery",
  "inscryption": "A strange deckbuilding game weaving together a card game, puzzles, and a meta-narrative",
  "cult-of-the-lamb": "A cute-styled roguelike mixing dungeon action with running your own cult",
  "lies-of-p": "A soulslike action RPG that darkly reimagines the Pinocchio fairy tale",
  "armored-core-vi": "An action game built around high-speed mech combat and assembling your own machine",
  "remnant-2": "An action RPG combining gunplay, boss fights, and co-op play",
  "phasmophobia": "A co-op horror game about using equipment to investigate a ghost's identity",
  "project-zomboid": "A hardcore survival game about managing daily life and resources in a zombie apocalypse",
  "binding-of-isaac-rebirth": "A roguelike built on random item combinations and room-by-room combat",
  "euro-truck-simulator-2": "A truck driving simulation about hauling cargo across European roads",
  "among-us": "A multiplayer deduction game built on the psychological standoff between crewmates and impostors",
  "papers-please": "A unique document-inspection simulation about the judgment calls of a border checkpoint officer",
  "hotline-miami": "An intense top-down action game of quick decisions and repeated attempts",
  "ftl": "A strategic roguelike about managing a starship through one crisis after another",
  "stanley-parable-ultra-deluxe": "An experimental story adventure that toys with narration and choice",
  "a-short-hike": "A short, warm exploration adventure about freely climbing a small island",
  "spiritfarer": "An emotional simulation about ferrying spirits to the afterlife while expanding your boat and building relationships",
  "inside": "A cinematic puzzle game about making your way through a dark world by solving environmental puzzles",
  "limbo": "A puzzle platformer about pressing forward through danger in a black-and-white silhouette world",
  "fez": "A puzzle platformer about rotating between 2D and 3D perspectives to find hidden paths",
  "spelunky-2": "A challenging roguelike platformer about exploring caves that are different every run",
  "shovel-knight-treasure-trove": "An indie game that polishes classic action-platformer sensibilities for a modern audience",
  "katana-zero": "A stylish action game combining time manipulation with one-hit-kill combat",
  "hyper-light-drifter": "An action adventure blending a weighty atmosphere with fast combat",
  "enter-the-gungeon": "A roguelike shooter built on bullet-hell combat and item combinations",
  "darkest-dungeon": "A grim strategy RPG about clearing dungeons while managing stress and danger",
  "firewatch": "An adventure following the relationships and mystery that unfold at a fire lookout tower in the woods",
  "gris": "A platformer defined by watercolor-like visuals and an emotionally resonant journey",
  "edith-finch": "A narrative adventure that lets you experience one family's stories in a variety of ways",
  "baba-is-you": "A creative puzzle game about rewriting the rules themselves to craft a solution",
  "untitled-goose-game": "A comedy puzzle game about pestering the townsfolk to complete your goals",
  "loop-hero": "A strategy game about placing tiles and cards to design a repeating loop",
  "rain-world": "A survival platformer about staying alive and on the move within a harsh ecosystem",
  "night-in-the-woods": "A story-driven adventure portraying the relationships and anxieties of a small town",
  "oxenfree": "A dialogue-driven adventure about using a radio to unravel an island's mystery",
  "crypt-of-the-necrodancer": "A rhythm roguelike about moving to the beat to clear a dungeon",
  "superhot": "An action shooter built on the unique rule that time only moves when you do",
  "brotato": "A casual action roguelike built on short waves and weapon builds",
  "unpacking": "A quiet puzzle game about unpacking belongings to trace one person's life",
  "dorfromantik": "A calm puzzle game about connecting tiles to build a peaceful landscape",
  "mini-motorways": "A strategic puzzle game about designing road networks to keep a city's traffic flowing",
  "half-life-2": "A classic sci-fi FPS combining physics-based puzzles with dense, immersive storytelling",
  "portal": "A short, perfectly crafted puzzle game where a single portal turns the world on its head",
  "counter-strike-2": "The definitive competitive FPS, where precise aim and team tactics decide the match",
  "gta-5": "An open-world crime saga about freely roaming a vast city through the stories of three protagonists",
  "skyrim": "The benchmark fantasy open-world RPG, defined by endless exploration and freedom",
  "fallout-4": "An open-world RPG about exploring a ruined world, building settlements, and shaping your own story",
  "bioshock-infinite": "A story-driven FPS full of twists, set in a city floating in the sky",
  "dishonored-2": "A supernatural action game where you choose between stealth and combat to complete your objectives",
  "doom-eternal": "A hardcore FPS whose relentless combat rhythm is addictive",
  "control": "A third-person action adventure that uses supernatural powers and shifting spaces",
  "resident-evil-village": "A first-person survival horror game about exploring a grotesque village and fighting to survive",
  "death-stranding": "A unique delivery adventure about crossing a desolate land to reconnect the world",
  "hogwarts-legacy": "An open-world action RPG about freely roaming a school of magic and the world around it",
  "starfield": "A massive-scale sci-fi RPG about exploring countless planets and customizing your ship",
  "diablo-4": "A dark fantasy action RPG whose endless monster hunting and gear farming are addictive",
  "path-of-exile": "A free hack-and-slash RPG whose appeal lies in complex, deep build crafting",
  "warframe": "A free co-op shooter about tackling missions together in a variety of combat suits",
  "apex-legends": "A battle royale shooter distinguished by its distinctive characters and team tactics",
  "rust": "A cutthroat multiplayer survival game where resources and trust are constantly in dispute",
  "ark-survival-evolved": "A survival game about taming dinosaurs, building, and staying alive on an island where they roam",
  "sons-of-the-forest": "An open-world survival horror game about staying alive in a forest stalked by cannibals",
  "v-rising": "An open-world survival game about becoming a vampire, building a castle, and expanding your power",
  "dying-light-2": "Open-world action about parkouring across a city while dodging hordes of zombies",
  "left-4-dead-2": "A landmark co-op shooter about four survivors fighting their way through hordes of zombies",
  "team-fortress-2": "A free classic shooter about team combat across nine highly distinctive classes",
  "monster-hunter-rise": "A Monster Hunter entry with enhanced mobility tools and sharper hunting action",
  "street-fighter-6": "A premier fighting game alive with precise hit feedback and combo design",
  "tekken-8": "The latest Tekken entry, with flashy 3D fighting action and deep systems",
  "rocket-league": "An inventive sports game about playing soccer with rocket-powered cars",
  "human-fall-flat": "A comedy co-op game about solving physics puzzles together with floppy, wobbly characters",
  "overcooked-2": "A co-op cooking party game that demands teamwork in a chaotic kitchen",
  "hunt-showdown": "A hardcore bounty-hunting shooter about facing monsters and rival players at the same time",
  "metro-exodus": "An immersive survival FPS about crossing a ruined Russia by train",
  "titanfall-2": "A polished FPS combining giant robots with nimble parkour movement",
  "borderlands-3": "A comedic co-op looter shooter about farming a seemingly endless variety of guns",
  "deltarune": "A distinctive turn-based story RPG that continues the Undertale universe",
  "cocoon": "A minimalist exploration puzzle game about solving puzzles by moving between worlds nested inside one another",
  "chicory": "A warm exploration adventure about painting the world with a brush as you go",
  "neon-white": "An ultra-fast speedrunning action game about turning cards into weapons and movement tools",
  "pizza-tower": "A high-energy 2D platformer defined by relentless, breakneck momentum",
  "signalis": "A survival horror game with striking retro-style graphics and a thick atmosphere",
  "pentiment": "A deduction adventure with a distinctive art style about investigating a murder in a medieval village",
  "astroneer": "A charming space sandbox about exploring, sculpting, and reshaping planetary terrain",
  "core-keeper": "A 2D co-op sandbox game about mining and settling an underground cave",
  "raft": "A co-op survival game about starting from a small raft and carving out a life at sea",
  "a-plague-tale-requiem": "A stealth action adventure following a brother and sister's journey through a world overrun by rats",
  "little-nightmares-2": "A horror puzzle platformer about making your way through a grotesque world alongside a companion",
  "kena-bridge-of-spirits": "An action adventure about healing a forgotten village together with adorable spirits",
  "against-the-storm": "A strategic roguelike about rebuilding settlements again and again in a storm-ravaged world",
  "terra-nil": "An unconventional environmental simulation about restoring a wasteland and leaving no trace behind",
  "wukong": "A soulslike that reimagines Journey to the West, defined by flashy action and grand boss battles",
  "detroit-become-human": "A branching narrative adventure about androids, where your choices shape the ending",
  "rainbow-six-siege": "A tactical shooter that leverages each operator's unique ability and fully destructible terrain",
  "pubg-battlegrounds": "The original battle royale, where 100 players fight to be the last one standing on a shrinking island",
  "rhythm-doctor": "A rhythm game about pressing the spacebar at the exact right moment, in time with a patient's heartbeat",
  "moncage": "A puzzle game about rotating a small cube to align six scenes from just the right perspective",
  "a-dance-of-fire-and-ice": "A rhythm game about clicking at the exact right moment, in time with two planets orbiting each other",
  "sanabi": "A Korean-made action platformer about swinging across a city with a single grappling hook",
  "uncover-the-smoking-gun": "A deduction simulation about analyzing scattered evidence to identify the true culprit",
  "we-were-here-together": "A 2-player co-op puzzle game about escaping a snowbound castle while communicating only by radio",
  "a-way-out": "A 2-player co-op game, played in split-screen, about two escaped prisoners' story",
  "bitburner": "A programming game about writing your own JavaScript code to hack servers and earn money",
  "do-not-feed-the-monkeys": "An observation simulation about spying on others' lives through hidden cameras and choosing whether to intervene",
  "do-not-feed-the-monkeys-2099": "A sequel to the observation simulation, returning in a near-future setting",
  "fall-guys": "A party battle royale where jelly-like characters tumble through obstacle courses",
  "geometry-dash": "An ultra-fast rhythm platformer about clearing obstacles in time with the beat",
  "getting-over-it": "An infamous test of patience about hauling a body stuck in a pot up a mountain with nothing but a hammer",
  "golfing-over-it": "A golf-themed take on Getting Over It, about hitting a ball up a mountain with a single golf club",
  "goose-goose-duck": "A free social deduction game where players split into geese and ducks to hide their identity and deduce who's who",
  "gtfo": "A 4-player co-op horror shooter about infiltrating an underground facility, where a single sound can wipe out your whole team",
  "human-resource-machine": "A programming puzzle game about automating office tasks using simple instruction blocks",
  "journey": "A short, powerful, wordless adventure about crossing a desert toward a distant mountain",
  "jump-king": "An infamous precision-jumping game where a single mistake sends you tumbling far back down",
  "muck": "A co-op survival roguelike where dying sends you all the way back to the start",
  "no-umbrellas-allowed": "A weather-forecasting simulation about predicting the weather, selling it to townsfolk, and settling into a small town",
  "poly-bridge-2": "A physics puzzle game about designing a bridge within budget and testing whether vehicles can cross it safely",
  "skul-the-hero-slayer": "A Korean-made roguelike action game about swapping heads to change your abilities",
  "stacklands": "A card-based builder game about stacking and combining cards to grow a village",
  "to-the-moon": "A pixel-art emotional adventure about traveling back through the memories of a dying old man",
  "we-were-here-forever": "A radio-based 2-player co-op escape puzzle, expanded to the series' largest scale yet",
  "overwatch-2": "A free team-based hero shooter where distinctive heroes clash by role"
};

module.exports = {
  phraseDict,
  translatePhrase,
  translateList,
  translateMultiplayer,
  translatePlayTime,
  translateKoreanSupport,
  translateRatings,
  descriptionOverrides
};
