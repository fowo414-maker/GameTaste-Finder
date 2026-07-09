const games = [
  {
    id: "elden-ring",
    title: "Elden Ring",
    titleKo: "엘든 링",
    genre: "Action RPG",
    tags: ["오픈월드", "소울라이크", "탐험", "판타지"],
    mood: ["도전적", "몰입감"],
    description: "광활한 세계와 높은 난이도 전투가 특징인 액션 RPG"
  },
  {
    id: "dark-souls-3",
    title: "Dark Souls III",
    titleKo: "다크 소울 3",
    genre: "Action RPG",
    tags: ["소울라이크", "보스전", "다크판타지", "전투"],
    mood: ["도전적", "긴장감"],
    description: "정교한 전투와 강한 성취감을 주는 다크 판타지 액션 RPG"
  },
  {
    id: "the-witcher-3",
    title: "The Witcher 3: Wild Hunt",
    titleKo: "더 위쳐 3: 와일드 헌트",
    genre: "RPG",
    tags: ["오픈월드", "스토리", "판타지", "선택"],
    mood: ["몰입감", "서사적"],
    description: "풍부한 이야기와 선택 중심 퀘스트가 돋보이는 오픈월드 RPG"
  },
  {
    id: "baldurs-gate-3",
    title: "Baldur's Gate 3",
    titleKo: "발더스 게이트 3",
    genre: "RPG",
    tags: ["턴제", "스토리", "파티", "선택"],
    mood: ["전략적", "서사적"],
    description: "선택과 주사위 판정, 파티 전투가 결합된 깊이 있는 RPG"
  },
  {
    id: "stardew-valley",
    title: "Stardew Valley",
    titleKo: "스타듀 밸리",
    genre: "Simulation",
    tags: ["농장", "생활", "제작", "관계"],
    mood: ["편안함", "따뜻함"],
    description: "농장 운영과 마을 생활을 느긋하게 즐길 수 있는 생활 시뮬레이션"
  },
  {
    id: "animal-crossing",
    title: "Animal Crossing: New Horizons",
    titleKo: "모여봐요 동물의 숲",
    genre: "Simulation",
    tags: ["생활", "꾸미기", "수집", "섬"],
    mood: ["편안함", "따뜻함"],
    description: "섬을 꾸미고 이웃과 교류하는 느긋한 생활형 게임"
  },
  {
    id: "minecraft",
    title: "Minecraft",
    titleKo: "마인크래프트",
    genre: "Sandbox",
    tags: ["생존", "건축", "제작", "탐험"],
    mood: ["창의적", "자유로움"],
    description: "블록 세계에서 건축, 탐험, 생존을 자유롭게 즐기는 샌드박스 게임"
  },
  {
    id: "terraria",
    title: "Terraria",
    titleKo: "테라리아",
    genre: "Sandbox",
    tags: ["생존", "제작", "탐험", "보스전"],
    mood: ["자유로움", "모험적"],
    description: "2D 세계에서 자원을 모으고 강력한 보스를 상대하는 샌드박스 어드벤처"
  },
  {
    id: "hades",
    title: "Hades",
    titleKo: "하데스",
    genre: "Roguelike",
    tags: ["액션", "로그라이크", "스토리", "신화"],
    mood: ["빠른", "도전적"],
    description: "빠른 전투와 반복 플레이 속 이야기 전개가 강점인 로그라이크 액션 게임"
  },
  {
    id: "dead-cells",
    title: "Dead Cells",
    titleKo: "데드 셀",
    genre: "Roguelike",
    tags: ["액션", "로그라이크", "플랫포머", "전투"],
    mood: ["빠른", "도전적"],
    description: "속도감 있는 전투와 반복 도전이 핵심인 로그라이크 액션 플랫포머"
  },
  {
    id: "civilization-vi",
    title: "Sid Meier's Civilization VI",
    titleKo: "시드 마이어의 문명 VI",
    genre: "Strategy",
    tags: ["턴제", "문명", "전략", "확장"],
    mood: ["전략적", "집중"],
    description: "문명을 성장시키며 외교, 과학, 전쟁을 운영하는 턴제 전략 게임"
  },
  {
    id: "xcom-2",
    title: "XCOM 2",
    titleKo: "엑스컴 2",
    genre: "Strategy",
    tags: ["턴제", "전술", "분대", "SF"],
    mood: ["전략적", "긴장감"],
    description: "분대 단위 전술과 자원 관리가 결합된 턴제 전략 게임"
  },
  {
    id: "portal-2",
    title: "Portal 2",
    titleKo: "포털 2",
    genre: "Puzzle",
    tags: ["퍼즐", "물리", "스토리", "협동"],
    mood: ["영리함", "유쾌함"],
    description: "포털 장치를 이용해 공간 퍼즐을 해결하는 퍼즐 어드벤처 게임"
  },
  {
    id: "the-witness",
    title: "The Witness",
    titleKo: "더 위트니스",
    genre: "Puzzle",
    tags: ["퍼즐", "탐험", "섬", "관찰"],
    mood: ["차분함", "영리함"],
    description: "섬 곳곳의 규칙을 관찰하며 퍼즐을 풀어가는 탐험형 퍼즐 게임"
  },
  {
    id: "hollow-knight",
    title: "Hollow Knight",
    titleKo: "할로우 나이트",
    genre: "Metroidvania",
    tags: ["탐험", "플랫포머", "보스전", "다크판타지"],
    mood: ["몰입감", "도전적"],
    description: "거대한 지하 왕국을 탐험하고 강력한 적과 싸우는 메트로배니아 게임"
  },
  {
    id: "ori-will-of-the-wisps",
    title: "Ori and the Will of the Wisps",
    titleKo: "오리와 도깨비불",
    genre: "Metroidvania",
    tags: ["탐험", "플랫포머", "감성", "판타지"],
    mood: ["감성적", "아름다움"],
    description: "부드러운 움직임과 감성적인 연출이 돋보이는 액션 플랫포머"
  },
  {
    id: "celeste",
    title: "Celeste",
    titleKo: "셀레스트",
    genre: "Platformer",
    tags: ["플랫포머", "정밀조작", "스토리", "도전"],
    mood: ["도전적", "감성적"],
    description: "정밀한 조작과 성장 이야기를 함께 담은 고난도 플랫포머"
  },
  {
    id: "slay-the-spire",
    title: "Slay the Spire",
    titleKo: "슬레이 더 스파이어",
    genre: "Card Strategy",
    tags: ["카드", "로그라이크", "전략", "덱빌딩"],
    mood: ["전략적", "집중"],
    description: "카드를 선택하고 덱을 발전시키며 탑을 오르는 전략 로그라이크"
  },
  {
    id: "subnautica",
    title: "Subnautica",
    titleKo: "서브노티카",
    genre: "Survival",
    tags: ["생존", "탐험", "제작", "해양"],
    mood: ["몰입감", "긴장감"],
    description: "낯선 해양 행성에서 자원을 모으고 생존하는 탐험형 생존 게임"
  },
  {
    id: "dont-starve",
    title: "Don't Starve",
    titleKo: "돈 스타브(굶지마)",
    genre: "Survival",
    tags: ["생존", "제작", "로그라이크", "자원관리"],
    mood: ["긴장감", "기묘함"],
    description: "독특한 세계에서 굶주림과 위험을 관리하는 생존 게임"
  },
  {
    id: "mass-effect-2",
    title: "Mass Effect 2",
    titleKo: "매스 이펙트 2",
    genre: "RPG",
    tags: ["SF", "스토리", "파티", "선택"],
    mood: ["서사적", "몰입감"],
    description: "동료와 선택, 우주 서사가 중심인 SF RPG"
  },
  {
    id: "it-takes-two",
    title: "It Takes Two",
    titleKo: "잇 테이크 투",
    genre: "Co-op Adventure",
    tags: ["협동", "퍼즐", "플랫포머", "스토리"],
    mood: ["유쾌함", "창의적"],
    description: "두 명이 함께 다양한 장치를 해결하는 협동 어드벤처 게임"
  },
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    titleKo: "사이버펑크 2077",
    genre: "RPG",
    tags: ["오픈월드", "SF", "스토리", "선택"],
    mood: ["몰입감", "긴장감"],
    description: "거대한 미래 도시와 선택 중심 서사가 결합된 오픈월드 RPG"
  },
  {
    id: "red-dead-redemption-2",
    title: "Red Dead Redemption 2",
    titleKo: "레드 데드 리뎀션 2",
    genre: "Open World",
    tags: ["오픈월드", "스토리", "탐험", "서부"],
    mood: ["몰입감", "서사적"],
    description: "방대한 서부 세계와 인물 서사가 돋보이는 오픈월드 어드벤처"
  },
  {
    id: "god-of-war",
    title: "God of War",
    titleKo: "갓 오브 워",
    genre: "Action Adventure",
    tags: ["액션", "스토리", "신화", "전투"],
    mood: ["서사적", "몰입감"],
    description: "강렬한 전투와 부자 관계 서사가 중심인 액션 어드벤처"
  },
  {
    id: "horizon-zero-dawn",
    title: "Horizon Zero Dawn",
    titleKo: "호라이즌 제로 던",
    genre: "Action RPG",
    tags: ["오픈월드", "탐험", "SF", "전투"],
    mood: ["모험적", "몰입감"],
    description: "기계 생명체가 지배하는 세계를 탐험하는 오픈월드 액션 RPG"
  },
  {
    id: "ghost-of-tsushima",
    title: "Ghost of Tsushima",
    titleKo: "고스트 오브 쓰시마",
    genre: "Action Adventure",
    tags: ["오픈월드", "전투", "스토리", "잠입"],
    mood: ["서사적", "몰입감"],
    description: "아름다운 섬과 검술 전투가 어우러진 사무라이 액션 어드벤처"
  },
  {
    id: "monster-hunter-world",
    title: "Monster Hunter: World",
    titleKo: "몬스터 헌터: 월드",
    genre: "Action RPG",
    tags: ["액션", "협동", "전투", "제작"],
    mood: ["도전적", "모험적"],
    description: "거대 몬스터 사냥과 장비 제작이 핵심인 협동 액션 RPG"
  },
  {
    id: "sekiro",
    title: "Sekiro: Shadows Die Twice",
    titleKo: "세키로: 섀도우 다이 트와이스",
    genre: "Action Adventure",
    tags: ["소울라이크", "전투", "잠입", "보스전"],
    mood: ["도전적", "긴장감"],
    description: "정밀한 검술과 패링 중심 전투가 특징인 고난도 액션 어드벤처"
  },
  {
    id: "bloodborne",
    title: "Bloodborne",
    titleKo: "블러드본",
    genre: "Action RPG",
    tags: ["소울라이크", "보스전", "다크판타지", "전투"],
    mood: ["도전적", "기묘함"],
    description: "고딕 공포 분위기와 공격적인 전투가 강점인 액션 RPG"
  },
  {
    id: "nioh-2",
    title: "Nioh 2",
    titleKo: "인왕 2",
    genre: "Action RPG",
    tags: ["소울라이크", "전투", "장비", "보스전"],
    mood: ["도전적", "긴장감"],
    description: "복잡한 자세 전환과 장비 빌드가 깊이 있는 액션 RPG"
  },
  {
    id: "persona-5-royal",
    title: "Persona 5 Royal",
    titleKo: "페르소나 5 더 로열",
    genre: "JRPG",
    tags: ["턴제", "스토리", "생활", "파티"],
    mood: ["감성적", "서사적"],
    description: "학교 생활과 던전 공략이 결합된 스타일리시 턴제 JRPG"
  },
  {
    id: "dragon-quest-xi-s",
    title: "Dragon Quest XI S",
    titleKo: "드래곤 퀘스트 XI S",
    genre: "JRPG",
    tags: ["턴제", "스토리", "판타지", "파티"],
    mood: ["따뜻함", "모험적"],
    description: "전통적인 모험 서사와 안정적인 턴제 전투가 중심인 JRPG"
  },
  {
    id: "final-fantasy-vii-remake",
    title: "Final Fantasy VII Remake",
    titleKo: "파이널 판타지 VII 리메이크",
    genre: "Action RPG",
    tags: ["액션", "스토리", "파티", "SF"],
    mood: ["서사적", "몰입감"],
    description: "실시간 액션과 전술 선택이 섞인 시네마틱 액션 RPG"
  },
  {
    id: "nier-automata",
    title: "NieR: Automata",
    titleKo: "니어: 오토마타",
    genre: "Action RPG",
    tags: ["액션", "스토리", "SF", "철학"],
    mood: ["감성적", "서사적"],
    description: "빠른 액션과 철학적인 서사가 결합된 액션 RPG"
  },
  {
    id: "disco-elysium",
    title: "Disco Elysium",
    titleKo: "디스코 엘리시움",
    genre: "RPG",
    tags: ["스토리", "선택", "추리", "대화"],
    mood: ["서사적", "기묘함"],
    description: "대화와 선택, 심리 묘사가 핵심인 서사 중심 RPG"
  },
  {
    id: "divinity-original-sin-2",
    title: "Divinity: Original Sin 2",
    titleKo: "디비니티: 오리지널 신 2",
    genre: "RPG",
    tags: ["턴제", "스토리", "파티", "선택"],
    mood: ["전략적", "서사적"],
    description: "자유로운 상호작용과 전술 전투가 강점인 파티 기반 RPG"
  },
  {
    id: "rimworld",
    title: "RimWorld",
    titleKo: "림월드",
    genre: "Simulation",
    tags: ["생존", "건축", "자원관리", "스토리"],
    mood: ["전략적", "기묘함"],
    description: "정착민의 생존과 돌발 사건 관리가 핵심인 colony 시뮬레이션"
  },
  {
    id: "factorio",
    title: "Factorio",
    titleKo: "팩토리오",
    genre: "Automation",
    tags: ["건축", "자원관리", "제작", "자동화"],
    mood: ["집중", "창의적"],
    description: "자원 채굴부터 생산 라인 최적화까지 이어지는 자동화 게임"
  },
  {
    id: "oxygen-not-included",
    title: "Oxygen Not Included",
    titleKo: "옥시전 낫 인클루디드",
    genre: "Simulation",
    tags: ["생존", "건축", "자원관리", "과학"],
    mood: ["전략적", "집중"],
    description: "기지의 산소와 열, 자원을 세밀하게 관리하는 생존 시뮬레이션"
  },
  {
    id: "cities-skylines",
    title: "Cities: Skylines",
    titleKo: "시티즈: 스카이라인",
    genre: "Simulation",
    tags: ["건축", "도시", "자원관리", "확장"],
    mood: ["창의적", "집중"],
    description: "교통과 구역, 공공 서비스를 설계하는 도시 건설 시뮬레이션"
  },
  {
    id: "the-sims-4",
    title: "The Sims 4",
    titleKo: "심즈 4",
    genre: "Simulation",
    tags: ["생활", "꾸미기", "관계", "창작"],
    mood: ["자유로움", "창의적"],
    description: "캐릭터의 일상과 집, 관계를 자유롭게 꾸미는 생활 시뮬레이션"
  },
  {
    id: "fire-emblem-three-houses",
    title: "Fire Emblem: Three Houses",
    titleKo: "파이어 엠블렘 풍화설월",
    genre: "Strategy RPG",
    tags: ["턴제", "전술", "스토리", "관계"],
    mood: ["전략적", "서사적"],
    description: "학원 생활과 전술 전투, 분기 서사가 결합된 전략 RPG"
  },
  {
    id: "into-the-breach",
    title: "Into the Breach",
    titleKo: "인투 더 브리치",
    genre: "Strategy",
    tags: ["턴제", "전술", "SF", "퍼즐"],
    mood: ["전략적", "집중"],
    description: "작은 전장에서 수를 계산해 피해를 막는 턴제 전술 게임"
  },
  {
    id: "total-war-three-kingdoms",
    title: "Total War: Three Kingdoms",
    titleKo: "토탈 워: 삼국",
    genre: "Strategy",
    tags: ["전략", "전술", "역사", "전쟁"],
    mood: ["전략적", "서사적"],
    description: "삼국지 외교와 대규모 전투를 결합한 역사 전략 게임"
  },
  {
    id: "age-of-empires-ii-de",
    title: "Age of Empires II: Definitive Edition",
    titleKo: "에이지 오브 엠파이어 2: 결정판",
    genre: "Strategy",
    tags: ["전략", "건축", "전쟁", "자원관리"],
    mood: ["전략적", "집중"],
    description: "문명 성장과 실시간 전투 운영이 핵심인 클래식 RTS"
  },
  {
    id: "tetris-effect-connected",
    title: "Tetris Effect: Connected",
    titleKo: "테트리스 이펙트: 커넥티드",
    genre: "Puzzle",
    tags: ["퍼즐", "음악", "협동", "점수"],
    mood: ["아름다움", "집중"],
    description: "음악과 시각 연출이 몰입감을 높이는 리듬감 있는 퍼즐 게임"
  },
  {
    id: "return-of-the-obra-dinn",
    title: "Return of the Obra Dinn",
    titleKo: "리턴 오브 더 오브라 딘",
    genre: "Puzzle",
    tags: ["추리", "퍼즐", "관찰", "스토리"],
    mood: ["영리함", "기묘함"],
    description: "사건의 단서를 관찰해 승무원의 운명을 추적하는 추리 퍼즐 게임"
  },
  {
    id: "outer-wilds",
    title: "Outer Wilds",
    titleKo: "아우터 와일즈",
    genre: "Adventure",
    tags: ["탐험", "퍼즐", "우주", "스토리"],
    mood: ["모험적", "감성적"],
    description: "반복되는 시간 속 우주 비밀을 풀어가는 탐험 어드벤처"
  },
  {
    id: "super-mario-odyssey",
    title: "Super Mario Odyssey",
    titleKo: "슈퍼 마리오 오디세이",
    genre: "Platformer",
    tags: ["플랫포머", "탐험", "수집", "액션"],
    mood: ["유쾌함", "창의적"],
    description: "다채로운 왕국을 자유롭게 탐험하는 3D 플랫포머"
  },
  {
    id: "metroid-dread",
    title: "Metroid Dread",
    titleKo: "메트로이드 드레드",
    genre: "Metroidvania",
    tags: ["탐험", "플랫포머", "SF", "전투"],
    mood: ["긴장감", "몰입감"],
    description: "빠른 움직임과 긴장감 있는 추격이 특징인 메트로배니아"
  },
  {
    id: "cuphead",
    title: "Cuphead",
    titleKo: "컵헤드",
    genre: "Run and Gun",
    tags: ["액션", "보스전", "플랫포머", "협동"],
    mood: ["도전적", "유쾌함"],
    description: "고전 애니메이션풍 연출과 어려운 보스전이 핵심인 액션 게임"
  },
  {
    id: "the-last-of-us-part-ii",
    title: "The Last of Us Part II",
    titleKo: "더 라스트 오브 어스 파트 II",
    genre: "Action Adventure",
    tags: ["스토리", "잠입", "전투", "생존"],
    mood: ["서사적", "긴장감"],
    description: "강렬한 서사와 생존 전투가 결합된 시네마틱 액션 어드벤처"
  },
  {
    id: "uncharted-4",
    title: "Uncharted 4: A Thief's End",
    titleKo: "언차티드 4: 해적왕과 최후의 보물",
    genre: "Action Adventure",
    tags: ["액션", "스토리", "탐험", "퍼즐"],
    mood: ["모험적", "서사적"],
    description: "영화적인 연출과 보물 탐험이 어우러진 액션 어드벤처"
  },
  {
    id: "resident-evil-4-remake",
    title: "Resident Evil 4 Remake",
    titleKo: "바이오하자드 RE:4",
    genre: "Survival Horror",
    tags: ["생존", "공포", "전투", "자원관리"],
    mood: ["긴장감", "기묘함"],
    description: "자원 관리와 압박감 있는 전투가 중심인 생존 공포 게임"
  },
  {
    id: "zelda-breath-of-the-wild",
    title: "The Legend of Zelda: Breath of the Wild",
    titleKo: "젤다의 전설 브레스 오브 더 와일드",
    genre: "Open World",
    tags: ["오픈월드", "탐험", "퍼즐", "판타지"],
    mood: ["자유로움", "모험적"],
    description: "물리와 탐험의 자유도가 뛰어난 오픈월드 어드벤처"
  },
  {
    id: "zelda-tears-of-the-kingdom",
    title: "The Legend of Zelda: Tears of the Kingdom",
    titleKo: "젤다의 전설 티어스 오브 더 킹덤",
    genre: "Open World",
    tags: ["오픈월드", "탐험", "제작", "퍼즐"],
    mood: ["자유로움", "창의적"],
    description: "하늘과 지상을 넘나들며 장치를 조합하는 오픈월드 어드벤처"
  },
  {
    id: "dave-the-diver",
    title: "Dave the Diver",
    titleKo: "데이브 더 다이버",
    genre: "Adventure",
    tags: ["탐험", "생활", "수집", "경영"],
    mood: ["유쾌함", "따뜻함"],
    description: "해양 탐험과 초밥집 운영이 결합된 캐주얼 어드벤처"
  },
  {
    id: "vampire-survivors",
    title: "Vampire Survivors",
    titleKo: "뱀파이어 서바이버즈",
    genre: "Roguelike",
    tags: ["로그라이크", "액션", "생존", "빌드"],
    mood: ["빠른", "집중"],
    description: "자동 공격과 성장 빌드가 중독적인 생존 로그라이크"
  },
  {
    id: "balatro",
    title: "Balatro",
    titleKo: "발라트로",
    genre: "Card Strategy",
    tags: ["카드", "로그라이크", "전략", "덱빌딩"],
    mood: ["전략적", "집중"],
    description: "포커 조합과 변칙 카드 시너지가 핵심인 덱빌딩 로그라이크"
  },
  {
    id: "valheim",
    title: "Valheim",
    titleKo: "발헤임",
    genre: "Survival",
    tags: ["생존", "건축", "협동", "탐험"],
    mood: ["모험적", "자유로움"],
    description: "바이킹 세계에서 건축과 탐험, 보스전을 이어가는 생존 게임"
  },
  {
    id: "palworld",
    title: "Palworld",
    titleKo: "팰월드",
    genre: "Survival",
    tags: ["생존", "수집", "건축", "협동"],
    mood: ["자유로움", "유쾌함"],
    description: "생물 수집과 기지 건설, 전투가 결합된 오픈월드 생존 게임"
  },
  {
    id: "lethal-company",
    title: "Lethal Company",
    titleKo: "리썰 컴퍼니",
    genre: "Survival Horror",
    tags: ["공포", "협동", "탐험", "수집"],
    mood: ["긴장감", "유쾌함"],
    description: "폐시설에서 폐품을 모으는 협동 공포 생존 게임"
  },
  {
    id: "helldivers-2",
    title: "HELLDIVERS 2",
    titleKo: "헬다이버즈 2",
    genre: "Co-op Shooter",
    tags: ["협동", "슈터", "전투", "SF"],
    mood: ["긴장감", "유쾌함"],
    description: "분대 협동과 전장 혼란이 강점인 3인칭 협동 슈터"
  },
  {
    id: "deep-rock-galactic",
    title: "Deep Rock Galactic",
    titleKo: "딥 락 갤럭틱",
    genre: "Co-op Shooter",
    tags: ["협동", "슈터", "채굴", "SF"],
    mood: ["유쾌함", "모험적"],
    description: "동굴 탐사와 채굴, 외계 생물 전투가 결합된 협동 슈터"
  },
  {
    id: "risk-of-rain-2",
    title: "Risk of Rain 2",
    titleKo: "리스크 오브 레인 2",
    genre: "Roguelike",
    tags: ["로그라이크", "액션", "협동", "빌드"],
    mood: ["빠른", "도전적"],
    description: "아이템 중첩과 난이도 상승이 핵심인 3D 액션 로그라이크"
  },
  {
    id: "no-mans-sky",
    title: "No Man's Sky",
    titleKo: "노 맨즈 스카이",
    genre: "Open World",
    tags: ["오픈월드", "탐험", "우주", "제작"],
    mood: ["자유로움", "모험적"],
    description: "무한에 가까운 우주 탐험과 기지 건설이 중심인 오픈월드 게임"
  },
  {
    id: "satisfactory",
    title: "Satisfactory",
    titleKo: "새티스팩토리",
    genre: "Automation",
    tags: ["자동화", "건축", "자원관리", "협동"],
    mood: ["집중", "창의적"],
    description: "거대한 3D 공장과 생산 라인을 설계하는 자동화 게임"
  },
  {
    id: "hi-fi-rush",
    title: "Hi-Fi RUSH",
    titleKo: "하이파이 러시",
    genre: "Action Adventure",
    tags: ["액션", "음악", "전투", "스토리"],
    mood: ["유쾌함", "빠른"],
    description: "리듬에 맞춘 전투와 만화풍 연출이 강점인 액션 어드벤처"
  },
  {
    id: "sea-of-stars",
    title: "Sea of Stars",
    titleKo: "씨 오브 스타즈",
    genre: "JRPG",
    tags: ["턴제", "스토리", "판타지", "파티"],
    mood: ["따뜻함", "모험적"],
    description: "고전 JRPG 감성과 현대적인 턴제 전투가 어우러진 RPG"
  },
  {
    id: "tunic",
    title: "TUNIC",
    titleKo: "튜닉",
    genre: "Adventure",
    tags: ["탐험", "퍼즐", "전투", "판타지"],
    mood: ["영리함", "모험적"],
    description: "설명서를 해독하며 세계의 비밀을 찾아가는 어드벤처"
  },
  {
    id: "undertale",
    title: "Undertale",
    titleKo: "언더테일",
    genre: "RPG",
    tags: ["스토리", "선택", "전투", "픽셀"],
    mood: ["감성적", "기묘함"],
    description: "전투와 대화 선택이 서사에 크게 영향을 주는 인디 RPG"
  },
  {
    id: "dredge",
    title: "DREDGE",
    titleKo: "드레지",
    genre: "Adventure",
    tags: ["탐험", "수집", "공포", "해양"],
    mood: ["기묘함", "긴장감"],
    description: "낚시와 업그레이드, 불길한 해양 미스터리가 결합된 어드벤처"
  },
  {
    id: "inscryption",
    title: "Inscryption",
    titleKo: "인스크립션",
    genre: "Card Strategy",
    tags: ["카드", "로그라이크", "퍼즐", "공포"],
    mood: ["기묘함", "영리함"],
    description: "카드 게임과 퍼즐, 메타 서사가 얽힌 기묘한 덱빌딩 게임"
  },
  {
    id: "cult-of-the-lamb",
    title: "Cult of the Lamb",
    titleKo: "컬트 오브 더 램",
    genre: "Roguelike",
    tags: ["로그라이크", "경영", "액션", "기지"],
    mood: ["기묘함", "유쾌함"],
    description: "던전 액션과 교단 운영이 섞인 귀여운 분위기의 로그라이크"
  },
  {
    id: "lies-of-p",
    title: "Lies of P",
    titleKo: "P의 거짓",
    genre: "Action RPG",
    tags: ["소울라이크", "전투", "보스전", "다크판타지"],
    mood: ["도전적", "긴장감"],
    description: "동화 피노키오를 어둡게 재해석한 소울라이크 액션 RPG"
  },
  {
    id: "armored-core-vi",
    title: "Armored Core VI: Fires of Rubicon",
    titleKo: "아머드 코어 VI 루비콘의 화염",
    genre: "Action",
    tags: ["액션", "전투", "커스터마이징", "SF"],
    mood: ["빠른", "도전적"],
    description: "고속 메카 전투와 기체 조립이 핵심인 액션 게임"
  },
  {
    id: "remnant-2",
    title: "Remnant II",
    titleKo: "렘넌트 2",
    genre: "Action RPG",
    tags: ["슈터", "협동", "소울라이크", "전투"],
    mood: ["도전적", "긴장감"],
    description: "총기 전투와 보스 공략, 협동 플레이가 결합된 액션 RPG"
  },
  {
    id: "phasmophobia",
    title: "Phasmophobia",
    titleKo: "파스모포비아",
    genre: "Survival Horror",
    tags: ["공포", "협동", "추리", "탐험"],
    mood: ["긴장감", "기묘함"],
    description: "장비로 유령의 정체를 조사하는 협동 공포 게임"
  },
  {
    id: "project-zomboid",
    title: "Project Zomboid",
    titleKo: "프로젝트 좀보이드",
    genre: "Survival",
    tags: ["생존", "좀비", "자원관리", "협동"],
    mood: ["긴장감", "전략적"],
    description: "좀비 아포칼립스에서 생활과 자원을 관리하는 하드코어 생존 게임"
  },
  {
    id: "binding-of-isaac-rebirth",
    title: "The Binding of Isaac: Rebirth",
    titleKo: "아이작의 번제: 리버스",
    genre: "Roguelike",
    tags: ["로그라이크", "액션", "아이템", "던전"],
    mood: ["기묘함", "도전적"],
    description: "무작위 아이템 조합과 방 단위 전투가 핵심인 로그라이크"
  },
  {
    id: "euro-truck-simulator-2",
    title: "Euro Truck Simulator 2",
    titleKo: "유로 트럭 시뮬레이터 2",
    genre: "Simulation",
    tags: ["운전", "경영", "탐험", "생활"],
    mood: ["차분함", "집중"],
    description: "유럽 도로를 달리며 화물을 운송하는 트럭 운전 시뮬레이션"
  },
  {
    id: "among-us",
    title: "Among Us",
    titleKo: "어몽 어스",
    genre: "Social Deduction",
    tags: ["협동", "추리", "파티", "심리전"],
    mood: ["유쾌함", "긴장감"],
    description: "크루원과 임포스터의 심리전이 핵심인 멀티플레이 추리 게임"
  },
  {
    id: "papers-please",
    title: "Papers, Please",
    titleKo: "페이퍼스, 플리즈",
    genre: "Simulation",
    tags: ["추리", "선택", "스토리", "관리"],
    mood: ["긴장감", "기묘함"],
    description: "입국 심사관의 판단과 선택을 다루는 독특한 서류 심사 시뮬레이션"
  },
  {
    id: "hotline-miami",
    title: "Hotline Miami",
    titleKo: "핫라인 마이애미",
    genre: "Action",
    tags: ["액션", "전투", "속도감", "픽셀"],
    mood: ["빠른", "긴장감"],
    description: "빠른 판단과 반복 도전이 강렬한 탑다운 액션 게임"
  },
  {
    id: "ftl",
    title: "FTL: Faster Than Light",
    titleKo: "FTL: 패스터 댄 라이트",
    genre: "Strategy",
    tags: ["전략", "우주", "자원관리", "로그라이크"],
    mood: ["전략적", "긴장감"],
    description: "우주선을 관리하며 위기를 넘기는 전략 로그라이크"
  },
  {
    id: "stanley-parable-ultra-deluxe",
    title: "The Stanley Parable: Ultra Deluxe",
    titleKo: "스탠리 패러블: 울트라 디럭스",
    genre: "Adventure",
    tags: ["스토리", "선택", "유머", "탐험"],
    mood: ["기묘함", "유쾌함"],
    description: "내레이션과 선택을 비트는 실험적인 스토리 어드벤처"
  },
  {
    id: "a-short-hike",
    title: "A Short Hike",
    titleKo: "어 쇼트 하이크",
    genre: "Adventure",
    tags: ["탐험", "생활", "수집", "힐링"],
    mood: ["따뜻함", "차분함"],
    description: "작은 섬을 자유롭게 오르내리는 짧고 따뜻한 탐험 어드벤처"
  },
  {
    id: "spiritfarer",
    title: "Spiritfarer",
    titleKo: "스피릿페어러",
    genre: "Simulation",
    tags: ["생활", "제작", "스토리", "관계"],
    mood: ["감성적", "따뜻함"],
    description: "영혼을 배웅하며 배를 확장하고 관계를 쌓는 감성 시뮬레이션"
  },
  {
    id: "inside",
    title: "INSIDE",
    titleKo: "인사이드",
    genre: "Puzzle",
    tags: ["퍼즐", "플랫포머", "스토리", "공포"],
    mood: ["기묘함", "긴장감"],
    description: "어두운 세계를 통과하며 환경 퍼즐을 해결하는 시네마틱 퍼즐 게임"
  },
  {
    id: "limbo",
    title: "LIMBO",
    titleKo: "림보",
    genre: "Puzzle",
    tags: ["퍼즐", "플랫포머", "공포", "관찰"],
    mood: ["기묘함", "차분함"],
    description: "흑백 실루엣 세계에서 위험을 피해 나아가는 퍼즐 플랫포머"
  },
  {
    id: "fez",
    title: "FEZ",
    titleKo: "페즈",
    genre: "Puzzle",
    tags: ["퍼즐", "플랫포머", "탐험", "관찰"],
    mood: ["영리함", "차분함"],
    description: "2D와 3D 시점을 돌려 숨은 길을 찾는 퍼즐 플랫포머"
  },
  {
    id: "spelunky-2",
    title: "Spelunky 2",
    titleKo: "스펠렁키 2",
    genre: "Roguelike",
    tags: ["로그라이크", "플랫포머", "탐험", "협동"],
    mood: ["도전적", "긴장감"],
    description: "매번 달라지는 동굴을 탐험하는 고난도 로그라이크 플랫포머"
  },
  {
    id: "shovel-knight-treasure-trove",
    title: "Shovel Knight: Treasure Trove",
    titleKo: "쇼벨 나이트: 트레저 트로브",
    genre: "Platformer",
    tags: ["플랫포머", "액션", "보스전", "픽셀"],
    mood: ["유쾌함", "도전적"],
    description: "고전 액션 플랫포머 감성을 현대적으로 다듬은 인디 게임"
  },
  {
    id: "katana-zero",
    title: "Katana ZERO",
    titleKo: "카타나 제로",
    genre: "Action",
    tags: ["액션", "스토리", "전투", "픽셀"],
    mood: ["빠른", "긴장감"],
    description: "시간 조작과 즉사 액션이 결합된 스타일리시 액션 게임"
  },
  {
    id: "hyper-light-drifter",
    title: "Hyper Light Drifter",
    titleKo: "하이퍼 라이트 드리프터",
    genre: "Action Adventure",
    tags: ["액션", "탐험", "전투", "픽셀"],
    mood: ["감성적", "도전적"],
    description: "묵직한 분위기와 빠른 전투가 어우러진 액션 어드벤처"
  },
  {
    id: "enter-the-gungeon",
    title: "Enter the Gungeon",
    titleKo: "엔터 더 건전",
    genre: "Roguelike",
    tags: ["로그라이크", "슈터", "액션", "협동"],
    mood: ["빠른", "도전적"],
    description: "총알 지옥 전투와 아이템 조합이 핵심인 로그라이크 슈터"
  },
  {
    id: "darkest-dungeon",
    title: "Darkest Dungeon",
    titleKo: "다키스트 던전",
    genre: "Strategy",
    tags: ["턴제", "전략", "자원관리", "공포"],
    mood: ["긴장감", "기묘함"],
    description: "스트레스와 위험을 관리하며 던전을 공략하는 어두운 전략 RPG"
  },
  {
    id: "firewatch",
    title: "Firewatch",
    titleKo: "파이어워치",
    genre: "Adventure",
    tags: ["스토리", "탐험", "대화", "미스터리"],
    mood: ["감성적", "차분함"],
    description: "숲속 감시탑에서 벌어지는 관계와 미스터리를 따라가는 어드벤처"
  },
  {
    id: "gris",
    title: "GRIS",
    titleKo: "그리스",
    genre: "Platformer",
    tags: ["플랫포머", "감성", "퍼즐", "예술"],
    mood: ["아름다움", "감성적"],
    description: "수채화 같은 비주얼과 감성적인 진행이 돋보이는 플랫포머"
  },
  {
    id: "edith-finch",
    title: "What Remains of Edith Finch",
    titleKo: "왓 리메인즈 오브 에디스 핀치",
    genre: "Adventure",
    tags: ["스토리", "탐험", "미스터리", "가족"],
    mood: ["감성적", "서사적"],
    description: "한 가족의 이야기를 다양한 방식으로 체험하는 서사 어드벤처"
  },
  {
    id: "baba-is-you",
    title: "Baba Is You",
    titleKo: "바바 이즈 유",
    genre: "Puzzle",
    tags: ["퍼즐", "규칙", "논리", "창의"],
    mood: ["영리함", "집중"],
    description: "규칙 문장을 직접 바꿔 해법을 만드는 창의적인 퍼즐 게임"
  },
  {
    id: "untitled-goose-game",
    title: "Untitled Goose Game",
    titleKo: "언타이틀드 구스 게임",
    genre: "Puzzle",
    tags: ["퍼즐", "잠입", "유머", "생활"],
    mood: ["유쾌함", "창의적"],
    description: "마을 사람들을 골탕 먹이며 목표를 해결하는 코미디 퍼즐 게임"
  },
  {
    id: "loop-hero",
    title: "Loop Hero",
    titleKo: "루프 히어로",
    genre: "Strategy",
    tags: ["전략", "덱빌딩", "로그라이크", "자동전투"],
    mood: ["전략적", "집중"],
    description: "타일과 카드를 배치해 반복 루프를 설계하는 전략 게임"
  },
  {
    id: "rain-world",
    title: "Rain World",
    titleKo: "레인 월드",
    genre: "Survival",
    tags: ["생존", "탐험", "플랫포머", "생태계"],
    mood: ["긴장감", "기묘함"],
    description: "거친 생태계 속에서 살아남아 이동하는 생존 플랫포머"
  },
  {
    id: "night-in-the-woods",
    title: "Night in the Woods",
    titleKo: "나이트 인 더 우즈",
    genre: "Adventure",
    tags: ["스토리", "대화", "관계", "미스터리"],
    mood: ["감성적", "기묘함"],
    description: "작은 마을의 관계와 불안을 그리는 스토리 중심 어드벤처"
  },
  {
    id: "oxenfree",
    title: "Oxenfree",
    titleKo: "옥센프리",
    genre: "Adventure",
    tags: ["스토리", "대화", "미스터리", "선택"],
    mood: ["기묘함", "감성적"],
    description: "무전기를 통해 섬의 미스터리를 풀어가는 대화 중심 어드벤처"
  },
  {
    id: "crypt-of-the-necrodancer",
    title: "Crypt of the NecroDancer",
    titleKo: "크립트 오브 더 네크로댄서",
    genre: "Roguelike",
    tags: ["로그라이크", "음악", "리듬", "던전"],
    mood: ["빠른", "도전적"],
    description: "박자에 맞춰 움직이며 던전을 공략하는 리듬 로그라이크"
  },
  {
    id: "superhot",
    title: "SUPERHOT",
    titleKo: "슈퍼핫",
    genre: "Action",
    tags: ["액션", "슈터", "퍼즐", "전투"],
    mood: ["영리함", "긴장감"],
    description: "움직일 때만 시간이 흐르는 독특한 규칙의 액션 슈터"
  },
  {
    id: "brotato",
    title: "Brotato",
    titleKo: "브로타토",
    genre: "Roguelike",
    tags: ["로그라이크", "액션", "생존", "빌드"],
    mood: ["빠른", "집중"],
    description: "짧은 웨이브와 무기 빌드가 핵심인 캐주얼 액션 로그라이크"
  },
  {
    id: "unpacking",
    title: "Unpacking",
    titleKo: "언패킹",
    genre: "Puzzle",
    tags: ["퍼즐", "생활", "정리", "스토리"],
    mood: ["차분함", "따뜻함"],
    description: "물건을 정리하며 한 사람의 삶을 따라가는 조용한 퍼즐 게임"
  },
  {
    id: "dorfromantik",
    title: "Dorfromantik",
    titleKo: "도르프로만틱",
    genre: "Puzzle",
    tags: ["퍼즐", "건축", "타일", "차분함"],
    mood: ["차분함", "집중"],
    description: "타일을 이어 평화로운 풍경을 만드는 차분한 퍼즐 게임"
  },
  {
    id: "mini-motorways",
    title: "Mini Motorways",
    titleKo: "미니 모터웨이즈",
    genre: "Strategy",
    tags: ["전략", "교통", "퍼즐", "도시"],
    mood: ["집중", "영리함"],
    description: "도로망을 설계해 도시의 교통 흐름을 유지하는 전략 퍼즐 게임"
  },
  {
    id: "half-life-2",
    title: "Half-Life 2",
    titleKo: "하프라이프 2",
    genre: "Action",
    tags: ["FPS", "스토리", "물리엔진", "SF"],
    mood: ["몰입감", "긴장감"],
    description: "물리 기반 퍼즐과 밀도 높은 연출이 결합된 SF FPS의 고전"
  },
  {
    id: "portal",
    title: "Portal",
    titleKo: "포탈",
    genre: "Puzzle",
    tags: ["퍼즐", "물리", "유머", "SF"],
    mood: ["영리함", "유쾌함"],
    description: "포털 하나로 세상을 뒤집는 짧고 완벽한 퍼즐 게임"
  },
  {
    id: "counter-strike-2",
    title: "Counter-Strike 2",
    titleKo: "카운터 스트라이크 2",
    genre: "Shooter",
    tags: ["FPS", "대전", "전술", "e스포츠"],
    mood: ["긴장감", "집중"],
    description: "정밀한 조준과 팀 전술이 승부를 가르는 대표 경쟁 FPS"
  },
  {
    id: "gta-5",
    title: "Grand Theft Auto V",
    titleKo: "그랜드 테프트 오토 5",
    genre: "Open World",
    tags: ["오픈월드", "범죄", "탐험", "다인원"],
    mood: ["자유로움", "몰입감"],
    description: "세 주인공의 이야기와 방대한 도시를 자유롭게 오가는 오픈월드 범죄극"
  },
  {
    id: "skyrim",
    title: "The Elder Scrolls V: Skyrim",
    titleKo: "엘더스크롤 5: 스카이림",
    genre: "RPG",
    tags: ["오픈월드", "판타지", "탐험", "모드"],
    mood: ["자유로움", "몰입감"],
    description: "끝없는 탐험과 자유도가 특징인 판타지 오픈월드 RPG의 기준점"
  },
  {
    id: "fallout-4",
    title: "Fallout 4",
    titleKo: "폴아웃 4",
    genre: "RPG",
    tags: ["오픈월드", "포스트아포칼립스", "제작", "선택"],
    mood: ["자유로움", "기묘함"],
    description: "폐허가 된 세계를 탐험하며 기지를 짓고 이야기를 만드는 오픈월드 RPG"
  },
  {
    id: "bioshock-infinite",
    title: "BioShock Infinite",
    titleKo: "바이오쇼크 인피니트",
    genre: "Action",
    tags: ["FPS", "스토리", "SF", "선택"],
    mood: ["서사적", "몰입감"],
    description: "하늘 위 도시를 배경으로 한 반전 가득한 스토리 중심 FPS"
  },
  {
    id: "dishonored-2",
    title: "Dishonored 2",
    titleKo: "디스아너드 2",
    genre: "Action",
    tags: ["잠입", "액션", "선택", "판타지"],
    mood: ["전략적", "긴장감"],
    description: "잠입과 전투 중 원하는 방식을 골라 목표를 처리하는 초자연 액션 게임"
  },
  {
    id: "doom-eternal",
    title: "DOOM Eternal",
    titleKo: "둠 이터널",
    genre: "Action",
    tags: ["FPS", "전투", "SF", "속도감"],
    mood: ["빠른", "도전적"],
    description: "쉴 새 없이 몰아치는 전투 리듬이 중독적인 하드코어 FPS"
  },
  {
    id: "control",
    title: "Control",
    titleKo: "컨트롤",
    genre: "Action Adventure",
    tags: ["초자연", "전투", "탐험", "SF"],
    mood: ["기묘함", "몰입감"],
    description: "초자연적인 힘과 변형되는 공간을 활용하는 3인칭 액션 어드벤처"
  },
  {
    id: "resident-evil-village",
    title: "Resident Evil Village",
    titleKo: "바이오하자드 빌리지",
    genre: "Survival Horror",
    tags: ["공포", "전투", "자원관리", "탐험"],
    mood: ["긴장감", "기묘함"],
    description: "기괴한 마을을 탐험하며 생존을 다투는 1인칭 생존 공포 게임"
  },
  {
    id: "death-stranding",
    title: "Death Stranding",
    titleKo: "데스 스트랜딩",
    genre: "Action Adventure",
    tags: ["오픈월드", "탐험", "비동기협동", "SF"],
    mood: ["기묘함", "서사적"],
    description: "황량한 대지를 가로질러 세상을 다시 연결하는 독특한 배달 어드벤처"
  },
  {
    id: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    titleKo: "호그와트 레거시",
    genre: "Action RPG",
    tags: ["오픈월드", "판타지", "마법", "탐험"],
    mood: ["몰입감", "따뜻함"],
    description: "마법 학교와 주변 세계를 자유롭게 누비는 오픈월드 액션 RPG"
  },
  {
    id: "starfield",
    title: "Starfield",
    titleKo: "스타필드",
    genre: "RPG",
    tags: ["오픈월드", "SF", "탐험", "우주"],
    mood: ["자유로움", "모험적"],
    description: "수많은 행성을 탐험하고 우주선을 꾸미는 방대한 스케일의 SF RPG"
  },
  {
    id: "diablo-4",
    title: "Diablo IV",
    titleKo: "디아블로 4",
    genre: "Action RPG",
    tags: ["핵앤슬래시", "협동", "장비", "다크판타지"],
    mood: ["도전적", "몰입감"],
    description: "끝없는 사냥과 장비 파밍이 중독적인 다크 판타지 액션 RPG"
  },
  {
    id: "path-of-exile",
    title: "Path of Exile",
    titleKo: "패스 오브 엑자일",
    genre: "Action RPG",
    tags: ["핵앤슬래시", "빌드", "무료", "다크판타지"],
    mood: ["전략적", "도전적"],
    description: "복잡하고 깊이 있는 빌드 설계가 매력인 무료 핵앤슬래시 RPG"
  },
  {
    id: "warframe",
    title: "Warframe",
    titleKo: "워프레임",
    genre: "Co-op Shooter",
    tags: ["협동", "슈터", "SF", "무료"],
    mood: ["빠른", "몰입감"],
    description: "다양한 전투 슈트로 임무를 함께 수행하는 무료 협동 슈터"
  },
  {
    id: "apex-legends",
    title: "Apex Legends",
    titleKo: "에이펙스 레전드",
    genre: "Shooter",
    tags: ["배틀로얄", "슈터", "협동", "무료"],
    mood: ["빠른", "긴장감"],
    description: "개성 있는 캐릭터와 팀 전술이 돋보이는 배틀로얄 슈터"
  },
  {
    id: "rust",
    title: "Rust",
    titleKo: "러스트",
    genre: "Survival",
    tags: ["생존", "제작", "다인원", "PvP"],
    mood: ["긴장감", "전략적"],
    description: "자원과 신뢰를 두고 다투는 살벌한 멀티플레이 생존 게임"
  },
  {
    id: "ark-survival-evolved",
    title: "ARK: Survival Evolved",
    titleKo: "아크: 서바이벌 이볼브드",
    genre: "Survival",
    tags: ["생존", "공룡", "제작", "탐험"],
    mood: ["모험적", "긴장감"],
    description: "공룡이 뛰노는 섬에서 길들이고 건설하며 살아남는 생존 게임"
  },
  {
    id: "sons-of-the-forest",
    title: "Sons Of The Forest",
    titleKo: "선즈 오브 더 포레스트",
    genre: "Survival Horror",
    tags: ["생존", "공포", "제작", "협동"],
    mood: ["긴장감", "기묘함"],
    description: "식인종이 도사리는 숲에서 살아남는 오픈월드 생존 공포 게임"
  },
  {
    id: "v-rising",
    title: "V Rising",
    titleKo: "브이 라이징",
    genre: "Survival",
    tags: ["생존", "뱀파이어", "제작", "PvP"],
    mood: ["긴장감", "모험적"],
    description: "뱀파이어가 되어 성을 쌓고 세력을 넓히는 오픈월드 생존 게임"
  },
  {
    id: "dying-light-2",
    title: "Dying Light 2 Stay Human",
    titleKo: "다잉 라이트 2",
    genre: "Action RPG",
    tags: ["파쿠르", "좀비", "오픈월드", "선택"],
    mood: ["긴장감", "빠른"],
    description: "파쿠르로 도시를 누비며 좀비 무리를 피해 다니는 오픈월드 액션"
  },
  {
    id: "left-4-dead-2",
    title: "Left 4 Dead 2",
    titleKo: "레프트 4 데드 2",
    genre: "Co-op Shooter",
    tags: ["협동", "좀비", "슈터", "생존"],
    mood: ["긴장감", "빠른"],
    description: "네 명이 힘을 합쳐 좀비 무리를 뚫고 나아가는 협동 슈터의 명작"
  },
  {
    id: "team-fortress-2",
    title: "Team Fortress 2",
    titleKo: "팀 포트리스 2",
    genre: "Shooter",
    tags: ["슈터", "대전", "무료", "유머"],
    mood: ["유쾌함", "빠른"],
    description: "개성 강한 9개 클래스로 팀 전투를 즐기는 무료 클래식 슈터"
  },
  {
    id: "monster-hunter-rise",
    title: "Monster Hunter Rise",
    titleKo: "몬스터 헌터 라이즈",
    genre: "Action RPG",
    tags: ["액션", "협동", "전투", "제작"],
    mood: ["도전적", "모험적"],
    description: "날렵한 이동기와 사냥 액션이 강화된 몬스터 헌터 시리즈"
  },
  {
    id: "street-fighter-6",
    title: "Street Fighter 6",
    titleKo: "스트리트 파이터 6",
    genre: "Fighting",
    tags: ["격투", "대전", "e스포츠", "콤보"],
    mood: ["빠른", "긴장감"],
    description: "정교한 타격감과 콤보 설계가 살아있는 대표 격투 게임"
  },
  {
    id: "tekken-8",
    title: "TEKKEN 8",
    titleKo: "철권 8",
    genre: "Fighting",
    tags: ["격투", "대전", "e스포츠", "콤보"],
    mood: ["빠른", "긴장감"],
    description: "화려한 3D 격투 액션과 깊이 있는 시스템을 갖춘 철권 시리즈 최신작"
  },
  {
    id: "rocket-league",
    title: "Rocket League",
    titleKo: "로켓 리그",
    genre: "Sports",
    tags: ["스포츠", "자동차", "대전", "협동"],
    mood: ["빠른", "유쾌함"],
    description: "로켓을 단 자동차로 축구를 즐기는 독창적인 스포츠 게임"
  },
  {
    id: "human-fall-flat",
    title: "Human: Fall Flat",
    titleKo: "휴먼: 폴 플랫",
    genre: "Co-op Adventure",
    tags: ["협동", "물리", "퍼즐", "유머"],
    mood: ["유쾌함", "창의적"],
    description: "흐물흐물한 캐릭터로 물리 퍼즐을 함께 풀어가는 코미디 협동 게임"
  },
  {
    id: "overcooked-2",
    title: "Overcooked! 2",
    titleKo: "오버쿡드 2",
    genre: "Co-op Adventure",
    tags: ["협동", "요리", "파티", "타이밍"],
    mood: ["유쾌함", "빠른"],
    description: "정신없는 주방에서 손발을 맞춰야 하는 협동 요리 파티 게임"
  },
  {
    id: "hunt-showdown",
    title: "Hunt: Showdown 1896",
    titleKo: "헌트: 쇼다운",
    genre: "Survival Horror",
    tags: ["PvPvE", "슈터", "현상금", "긴장감"],
    mood: ["긴장감", "전략적"],
    description: "괴물과 다른 플레이어를 동시에 상대하는 하드코어 현상금 사냥 슈터"
  },
  {
    id: "metro-exodus",
    title: "Metro Exodus",
    titleKo: "메트로 엑소더스",
    genre: "Action",
    tags: ["FPS", "생존", "포스트아포칼립스", "스토리"],
    mood: ["긴장감", "서사적"],
    description: "폐허가 된 러시아를 열차로 가로지르는 몰입감 짙은 생존 FPS"
  },
  {
    id: "titanfall-2",
    title: "Titanfall 2",
    titleKo: "타이탄폴 2",
    genre: "Action",
    tags: ["FPS", "메카", "이동기", "스토리"],
    mood: ["빠른", "몰입감"],
    description: "거대 로봇과 날렵한 파쿠르 이동이 결합된 완성도 높은 FPS"
  },
  {
    id: "borderlands-3",
    title: "Borderlands 3",
    titleKo: "보더랜드 3",
    genre: "Action RPG",
    tags: ["루팅", "협동", "슈터", "유머"],
    mood: ["유쾌함", "빠른"],
    description: "수많은 총기를 파밍하며 즐기는 코믹한 협동 루터 슈터"
  },
  {
    id: "deltarune",
    title: "Deltarune",
    titleKo: "델타룬",
    genre: "RPG",
    tags: ["턴제", "스토리", "선택", "유머"],
    mood: ["감성적", "기묘함"],
    description: "언더테일 세계관을 잇는 개성 넘치는 턴제 스토리 RPG"
  },
  {
    id: "cocoon",
    title: "COCOON",
    titleKo: "코쿤",
    genre: "Puzzle",
    tags: ["퍼즐", "탐험", "세계관", "미니멀"],
    mood: ["영리함", "몰입감"],
    description: "세계 속의 세계를 오가며 퍼즐을 풀어가는 미니멀한 탐험 퍼즐"
  },
  {
    id: "chicory",
    title: "Chicory: A Colorful Tale",
    titleKo: "치커리: 컬러풀 테일",
    genre: "Adventure",
    tags: ["탐험", "그림", "퍼즐", "감성"],
    mood: ["따뜻함", "감성적"],
    description: "붓으로 세상에 색을 칠하며 나아가는 따뜻한 탐험 어드벤처"
  },
  {
    id: "neon-white",
    title: "Neon White",
    titleKo: "네온 화이트",
    genre: "Action",
    tags: ["스피드런", "FPS", "플랫포머", "스토리"],
    mood: ["빠른", "집중"],
    description: "카드를 무기와 이동기로 바꿔 쓰는 초고속 스피드런 액션 게임"
  },
  {
    id: "pizza-tower",
    title: "Pizza Tower",
    titleKo: "피자 타워",
    genre: "Platformer",
    tags: ["플랫포머", "속도감", "픽셀", "유머"],
    mood: ["빠른", "유쾌함"],
    description: "끊임없이 질주하는 하이텐션 2D 플랫포머"
  },
  {
    id: "signalis",
    title: "SIGNALIS",
    titleKo: "시그널리스",
    genre: "Survival Horror",
    tags: ["생존", "공포", "SF", "스토리"],
    mood: ["긴장감", "기묘함"],
    description: "레트로 감성의 그래픽과 짙은 분위기가 인상적인 생존 공포 게임"
  },
  {
    id: "pentiment",
    title: "Pentiment",
    titleKo: "펜티먼트",
    genre: "Adventure",
    tags: ["스토리", "추리", "선택", "역사"],
    mood: ["서사적", "감성적"],
    description: "중세 마을의 살인 사건을 추적하는 독특한 그림체의 추리 어드벤처"
  },
  {
    id: "astroneer",
    title: "Astroneer",
    titleKo: "애스트로니어",
    genre: "Sandbox",
    tags: ["탐험", "제작", "협동", "우주"],
    mood: ["편안함", "창의적"],
    description: "행성 지형을 직접 깎고 다지며 탐험하는 아기자기한 우주 샌드박스"
  },
  {
    id: "core-keeper",
    title: "Core Keeper",
    titleKo: "코어 키퍼",
    genre: "Sandbox",
    tags: ["채굴", "제작", "협동", "탐험"],
    mood: ["편안함", "몰입감"],
    description: "지하 동굴을 채굴하고 개척하는 2D 협동 샌드박스 게임"
  },
  {
    id: "raft",
    title: "Raft",
    titleKo: "래프트",
    genre: "Survival",
    tags: ["생존", "제작", "해양", "협동"],
    mood: ["편안함", "모험적"],
    description: "작은 뗏목 하나에서 시작해 바다를 개척하는 협동 생존 게임"
  },
  {
    id: "a-plague-tale-requiem",
    title: "A Plague Tale: Requiem",
    titleKo: "어 플레이그 테일: 레퀴엠",
    genre: "Action Adventure",
    tags: ["잠입", "스토리", "쥐떼", "가족"],
    mood: ["서사적", "긴장감"],
    description: "쥐떼가 뒤덮은 세계에서 남매의 여정을 그리는 잠입 액션 어드벤처"
  },
  {
    id: "little-nightmares-2",
    title: "Little Nightmares II",
    titleKo: "리틀 나이트메어 2",
    genre: "Puzzle",
    tags: ["퍼즐", "공포", "플랫포머", "동행"],
    mood: ["기묘함", "긴장감"],
    description: "기괴한 세계를 동료와 함께 헤쳐나가는 공포 퍼즐 플랫포머"
  },
  {
    id: "kena-bridge-of-spirits",
    title: "Kena: Bridge of Spirits",
    titleKo: "케나: 브릿지 오브 스피릿",
    genre: "Action Adventure",
    tags: ["전투", "탐험", "정령", "감성"],
    mood: ["따뜻함", "감성적"],
    description: "귀여운 정령들과 함께 잊혀진 마을을 치유하는 액션 어드벤처"
  },
  {
    id: "against-the-storm",
    title: "Against the Storm",
    titleKo: "어게인스트 더 스톰",
    genre: "Strategy",
    tags: ["도시건설", "로그라이크", "자원관리", "다크판타지"],
    mood: ["전략적", "집중"],
    description: "폭풍이 몰아치는 세계에서 반복해서 마을을 재건하는 전략 로그라이크"
  },
  {
    id: "terra-nil",
    title: "Terra Nil",
    titleKo: "테라 닐",
    genre: "Simulation",
    tags: ["환경", "빌드", "역발상", "힐링"],
    mood: ["편안함", "창의적"],
    description: "황무지를 되살리고 흔적 없이 떠나는 역발상 환경 시뮬레이션"
  },
  {
    id: "wukong",
    title: "Black Myth: Wukong",
    titleKo: "검은 신화: 오공",
    genre: "Action RPG",
    tags: ["소울라이크", "전투", "신화", "보스전"],
    mood: ["도전적", "몰입감"],
    description: "서유기를 재해석한 화려한 액션과 웅장한 보스전이 특징인 소울라이크"
  }
];

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
  "vampire-survivors": ["2022", "약 20-60시간", 2, "로컬 협동 최대 4명", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 86 / Steam 압도적으로 긍정적"],
  "balatro": ["2024", "약 20-80시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "미지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
  "valheim": ["2021", "약 60-120시간", 3, "온라인 최대 10명", "PC, Xbox", "지원", "Metacritic 확인 필요 / Steam 압도적으로 긍정적"],
  "palworld": ["2024", "약 40-100시간", 3, "온라인 다인원", "PC, Xbox", "지원", "Metacritic 확인 필요 / Steam 매우 긍정적"],
  "lethal-company": ["2023", "반복 플레이 중심", 3, "온라인 협동 최대 4명", "PC", "미지원", "Metacritic 확인 필요 / Steam 압도적으로 긍정적"],
  "helldivers-2": ["2024", "약 30시간 이상", 4, "온라인 협동 최대 4명", "PC, PlayStation, Xbox", "지원", "Metacritic 82 / Steam 대체로 긍정적"],
  "deep-rock-galactic": ["2020", "약 40시간 이상", 3, "온라인 협동 최대 4명", "PC, PlayStation, Xbox", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
  "risk-of-rain-2": ["2020", "약 30-100시간", 4, "온라인 협동 최대 4명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
  "no-mans-sky": ["2016", "약 50시간 이상", 3, "온라인 다인원", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 61 / Steam 매우 긍정적"],
  "satisfactory": ["2024", "약 80시간 이상", 3, "온라인 협동", "PC", "지원", "Metacritic 91 / Steam 압도적으로 긍정적"],
  "hi-fi-rush": ["2023", "약 10-15시간", 3, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
  "sea-of-stars": ["2023", "약 30-45시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 87 / Steam 매우 긍정적"],
  "tunic": ["2022", "약 12-25시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 85 / Steam 매우 긍정적"],
  "undertale": ["2015", "약 6-15시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch", "미지원", "Metacritic 92 / Steam 압도적으로 긍정적"],
  "dredge": ["2023", "약 10-20시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
  "inscryption": ["2021", "약 12-20시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
  "cult-of-the-lamb": ["2022", "약 15-35시간", 3, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 82 / Steam 매우 긍정적"],
  "lies-of-p": ["2023", "약 30-50시간", 5, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 80 / Steam 매우 긍정적"],
  "armored-core-vi": ["2023", "약 20-40시간", 4, "온라인 대전", "PC, PlayStation, Xbox", "지원", "Metacritic 86 / Steam 매우 긍정적"],
  "remnant-2": ["2023", "약 25-60시간", 4, "온라인 협동 최대 3명", "PC, PlayStation, Xbox", "지원", "Metacritic 80 / Steam 매우 긍정적"],
  "phasmophobia": ["2020", "반복 플레이 중심", 3, "온라인 협동 최대 4명", "PC", "지원", "Metacritic 확인 필요 / Steam 압도적으로 긍정적"],
  "project-zomboid": ["2013", "약 50시간 이상", 5, "온라인 다인원", "PC", "지원", "Metacritic 확인 필요 / Steam 매우 긍정적"],
  "binding-of-isaac-rebirth": ["2014", "약 50시간 이상", 4, "로컬 협동 최대 4명", "PC, PlayStation, Xbox, Switch", "미지원", "Metacritic 86 / Steam 압도적으로 긍정적"],
  "euro-truck-simulator-2": ["2012", "약 50시간 이상", 2, "온라인 다인원", "PC", "지원", "Metacritic 79 / Steam 압도적으로 긍정적"],
  "among-us": ["2018", "반복 플레이 중심", 2, "온라인 최대 15명", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 85 / Steam 매우 긍정적"],
  "papers-please": ["2013", "약 5-10시간", 3, "싱글플레이", "PC, PlayStation, Mobile", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
  "hotline-miami": ["2012", "약 5-10시간", 4, "싱글플레이", "PC, PlayStation, Switch", "미지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
  "ftl": ["2012", "약 10-40시간", 4, "싱글플레이", "PC, Mobile", "미지원", "Metacritic 84 / Steam 압도적으로 긍정적"],
  "stanley-parable-ultra-deluxe": ["2022", "약 3-8시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
  "a-short-hike": ["2019", "약 2-5시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch", "미지원", "Metacritic 82 / Steam 압도적으로 긍정적"],
  "spiritfarer": ["2020", "약 25-40시간", 2, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 84 / Steam 압도적으로 긍정적"],
  "inside": ["2016", "약 3-5시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 87 / Steam 압도적으로 긍정적"],
  "limbo": ["2010", "약 3-5시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 88 / Steam 압도적으로 긍정적"],
  "fez": ["2013", "약 8-15시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 91 / Steam 매우 긍정적"],
  "spelunky-2": ["2020", "약 20-80시간", 5, "온라인/로컬 협동 최대 4명", "PC, PlayStation, Switch", "지원", "Metacritic 91 / Steam 매우 긍정적"],
  "shovel-knight-treasure-trove": ["2014", "약 20-40시간", 3, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 85 / Steam 압도적으로 긍정적"],
  "katana-zero": ["2019", "약 5-10시간", 4, "싱글플레이", "PC, Xbox, Switch", "지원", "Metacritic 83 / Steam 압도적으로 긍정적"],
  "hyper-light-drifter": ["2016", "약 8-15시간", 4, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "미지원", "Metacritic 84 / Steam 매우 긍정적"],
  "enter-the-gungeon": ["2016", "약 30시간 이상", 4, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 84 / Steam 압도적으로 긍정적"],
  "darkest-dungeon": ["2016", "약 50시간 이상", 5, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 84 / Steam 매우 긍정적"],
  "firewatch": ["2016", "약 4-6시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch", "미지원", "Metacritic 81 / Steam 매우 긍정적"],
  "gris": ["2018", "약 3-5시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 84 / Steam 압도적으로 긍정적"],
  "edith-finch": ["2017", "약 2-3시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 89 / Steam 압도적으로 긍정적"],
  "baba-is-you": ["2019", "약 20-40시간", 4, "싱글플레이", "PC, Switch, Mobile", "지원", "Metacritic 87 / Steam 압도적으로 긍정적"],
  "untitled-goose-game": ["2019", "약 3-6시간", 1, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 79 / Steam 매우 긍정적"],
  "loop-hero": ["2021", "약 20-40시간", 3, "싱글플레이", "PC, Xbox, Switch, Mobile", "지원", "Metacritic 82 / Steam 매우 긍정적"],
  "rain-world": ["2017", "약 20-50시간", 5, "로컬 협동 최대 4명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 66 / Steam 매우 긍정적"],
  "night-in-the-woods": ["2017", "약 8-12시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch", "미지원", "Metacritic 88 / Steam 매우 긍정적"],
  "oxenfree": ["2016", "약 4-6시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "미지원", "Metacritic 80 / Steam 매우 긍정적"],
  "crypt-of-the-necrodancer": ["2015", "약 15-40시간", 4, "로컬 협동 2명", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 87 / Steam 압도적으로 긍정적"],
  "superhot": ["2016", "약 3-8시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 82 / Steam 매우 긍정적"],
  "brotato": ["2023", "약 20-60시간", 3, "로컬 협동 최대 4명", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 76 / Steam 압도적으로 긍정적"],
  "unpacking": ["2021", "약 3-5시간", 1, "싱글플레이", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 83 / Steam 압도적으로 긍정적"],
  "dorfromantik": ["2022", "약 10-30시간", 2, "싱글플레이", "PC, Switch", "지원", "Metacritic 80 / Steam 압도적으로 긍정적"],
  "mini-motorways": ["2021", "약 10-30시간", 3, "싱글플레이", "PC, PlayStation, Switch, Mobile", "지원", "Metacritic 87 / Steam 매우 긍정적"],
  "half-life-2": ["2004", "약 12-15시간", 3, "싱글플레이", "PC", "지원", "Metacritic 96 / Steam 압도적으로 긍정적"],
  "portal": ["2007", "약 3-4시간", 2, "싱글플레이", "PC", "지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
  "counter-strike-2": ["2023", "제한없음", 4, "온라인 대전", "PC", "지원", "Metacritic 확인 필요 / Steam 매우 긍정적"],
  "gta-5": ["2015", "약 30-100시간", 3, "싱글플레이 및 온라인 다인원", "PC, PlayStation, Xbox", "지원", "Metacritic 확인 필요 / Steam 매우 긍정적"],
  "skyrim": ["2011", "약 100시간 이상", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "미지원", "Metacritic 94 / Steam 압도적으로 긍정적"],
  "fallout-4": ["2015", "약 80-150시간", 3, "싱글플레이", "PC, PlayStation, Xbox", "미지원", "Metacritic 84 / Steam 매우 긍정적"],
  "bioshock-infinite": ["2013", "약 12시간", 3, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 94 / Steam 압도적으로 긍정적"],
  "dishonored-2": ["2016", "약 15-20시간", 4, "싱글플레이", "PC, PlayStation, Xbox", "미지원", "Metacritic 86 / Steam 매우 긍정적"],
  "doom-eternal": ["2020", "약 20시간", 4, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 88 / Steam 압도적으로 긍정적"],
  "control": ["2019", "약 12-20시간", 3, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 85 / Steam 매우 긍정적"],
  "resident-evil-village": ["2021", "약 10-12시간", 4, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 83 / Steam 매우 긍정적"],
  "death-stranding": ["2022", "약 40-60시간", 3, "싱글플레이", "PC, PlayStation", "지원", "Metacritic 85 / Steam 매우 긍정적"],
  "hogwarts-legacy": ["2023", "약 35-50시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 83 / Steam 매우 긍정적"],
  "starfield": ["2023", "약 40-100시간", 3, "싱글플레이", "PC, Xbox", "미지원", "Metacritic 87 / Steam 복합적"],
  "diablo-4": ["2023", "약 30시간 이상", 4, "온라인 협동 최대 4명", "PC, PlayStation, Xbox", "지원", "Metacritic 88 / Steam 복합적"],
  "path-of-exile": ["2013", "제한없음", 5, "온라인 협동 다인원", "PC, PlayStation, Xbox", "지원", "Metacritic 86 / Steam 매우 긍정적"],
  "warframe": ["2013", "제한없음", 4, "온라인 협동 최대 4명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 69 / Steam 매우 긍정적"],
  "apex-legends": ["2020", "제한없음", 4, "온라인 3인 스쿼드 대전", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 88 / Steam 매우 긍정적"],
  "rust": ["2018", "제한없음", 5, "온라인 다인원", "PC, PlayStation, Xbox", "지원", "Metacritic 69 / Steam 매우 긍정적"],
  "ark-survival-evolved": ["2017", "약 60시간 이상", 4, "온라인 다인원", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 70 / Steam 복합적"],
  "sons-of-the-forest": ["2024", "약 15-25시간", 4, "온라인 협동 최대 8명", "PC, PlayStation", "지원", "Metacritic 86 / Steam 매우 긍정적"],
  "v-rising": ["2024", "약 30-50시간", 4, "온라인 협동 및 대전", "PC, PlayStation, Xbox", "지원", "Metacritic 85 / Steam 매우 긍정적"],
  "dying-light-2": ["2022", "약 20-30시간", 3, "온라인 협동 최대 4명", "PC, PlayStation, Xbox", "지원", "Metacritic 77 / Steam 대체로 긍정적"],
  "left-4-dead-2": ["2009", "약 10-15시간", 3, "온라인 협동 최대 4명", "PC", "지원", "Metacritic 89 / Steam 압도적으로 긍정적"],
  "team-fortress-2": ["2007", "제한없음", 3, "온라인 대전", "PC", "지원", "Metacritic 92 / Steam 압도적으로 긍정적"],
  "monster-hunter-rise": ["2022", "약 40-80시간", 4, "온라인 협동 최대 4명", "PC, Switch, PlayStation, Xbox", "지원", "Metacritic 86 / Steam 매우 긍정적"],
  "street-fighter-6": ["2023", "제한없음", 4, "온라인 대전", "PC, PlayStation, Xbox", "지원", "Metacritic 92 / Steam 매우 긍정적"],
  "tekken-8": ["2024", "제한없음", 4, "온라인 대전", "PC, PlayStation, Xbox", "지원", "Metacritic 91 / Steam 매우 긍정적"],
  "rocket-league": ["2015", "제한없음", 3, "온라인 대전 및 협동", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 86 / Steam 매우 긍정적"],
  "human-fall-flat": ["2016", "약 5-8시간", 1, "온라인 협동 최대 8명", "PC, PlayStation, Xbox, Switch, Mobile", "지원", "Metacritic 70 / Steam 매우 긍정적"],
  "overcooked-2": ["2018", "약 10시간", 3, "온라인 협동 최대 4명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 81 / Steam 매우 긍정적"],
  "hunt-showdown": ["2019", "제한없음", 5, "온라인 협동/대전 최대 3인 팀", "PC, PlayStation, Xbox", "지원", "Metacritic 81 / Steam 매우 긍정적"],
  "metro-exodus": ["2019", "약 15시간", 3, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 85 / Steam 매우 긍정적"],
  "titanfall-2": ["2016", "약 6-8시간", 3, "싱글플레이 및 온라인 대전", "PC, PlayStation, Xbox", "미지원", "Metacritic 86 / Steam 압도적으로 긍정적"],
  "borderlands-3": ["2019", "약 30-35시간", 3, "온라인 협동 최대 4명", "PC, PlayStation, Xbox", "지원", "Metacritic 81 / Steam 대체로 긍정적"],
  "deltarune": ["2025", "약 15-20시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch", "미지원", "Metacritic 86 / Steam 압도적으로 긍정적"],
  "cocoon": ["2023", "약 5-6시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 88 / Steam 매우 긍정적"],
  "chicory": ["2021", "약 15-20시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 90 / Steam 압도적으로 긍정적"],
  "neon-white": ["2022", "약 6-8시간", 4, "싱글플레이", "PC, Switch", "지원", "Metacritic 89 / Steam 압도적으로 긍정적"],
  "pizza-tower": ["2023", "약 8-10시간", 4, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 89 / Steam 압도적으로 긍정적"],
  "signalis": ["2022", "약 8-10시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 81 / Steam 매우 긍정적"],
  "pentiment": ["2022", "약 15-20시간", 2, "싱글플레이", "PC, Xbox", "지원", "Metacritic 88 / Steam 매우 긍정적"],
  "astroneer": ["2019", "약 15-25시간", 2, "온라인 협동 다인원", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 71 / Steam 매우 긍정적"],
  "core-keeper": ["2024", "약 30-50시간", 3, "온라인 협동 최대 8명", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 86 / Steam 매우 긍정적"],
  "raft": ["2022", "약 20-30시간", 2, "온라인 협동 다인원", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 확인 필요 / Steam 매우 긍정적"],
  "a-plague-tale-requiem": ["2022", "약 15시간", 3, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 82 / Steam 매우 긍정적"],
  "little-nightmares-2": ["2021", "약 6-8시간", 3, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 83 / Steam 매우 긍정적"],
  "kena-bridge-of-spirits": ["2021", "약 12-15시간", 3, "싱글플레이", "PC, PlayStation", "지원", "Metacritic 83 / Steam 매우 긍정적"],
  "against-the-storm": ["2023", "약 30시간 이상", 4, "싱글플레이", "PC", "지원", "Metacritic 91 / Steam 압도적으로 긍정적"],
  "terra-nil": ["2023", "약 5-8시간", 2, "싱글플레이", "PC, PlayStation, Xbox, Switch", "지원", "Metacritic 79 / Steam 매우 긍정적"],
  "wukong": ["2024", "약 25-35시간", 4, "싱글플레이", "PC, PlayStation, Xbox", "지원", "Metacritic 82 / Steam 매우 긍정적"]
};

const gameCoverUrls = {
  "animal-crossing": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a",
  "bloodborne": "https://image.api.playstation.com/cdn/UP9000/CUSA00900_00/9EJsLXyKS0S1BRey5nwQBOuYr6EDRbGX.png",
  "fire-emblem-three-houses": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000007606/c499fdc86779ca95e61daed1f94288a245d196360d278138e56d44097d1a3878",
  "super-mario-odyssey": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5",
  "metroid-dread": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000042924/4f2c683f0196210ec212a2ab8bf6952223c0b88e827b820953407a2ba61c9cb2",
  "zelda-breath-of-the-wild": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
  "zelda-tears-of-the-kingdom": "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000063714/fb30eab428df3fc993b41c76e20f72e4d76d49734d17d31996b5ab61c414b117"
};

const gameCoverLocalFiles = {
  "minecraft": "minecraft.jpg"
};

const gameCoverFocus = {
  "animal-crossing": "68%",
  "minecraft": "52%",
  "zelda-breath-of-the-wild": "30%",
  "zelda-tears-of-the-kingdom": "73%"
};

const gamePrices = {
  "elden-ring": 64800,
  "dark-souls-3": 49800,
  "the-witcher-3": 34800,
  "baldurs-gate-3": 66000,
  "stardew-valley": 16000,
  "animal-crossing": null,
  "minecraft": null,
  "terraria": 11000,
  "hades": 27000,
  "dead-cells": 25800,
  "civilization-vi": 65000,
  "xcom-2": 24500,
  "portal-2": 11000,
  "the-witness": 43000,
  "hollow-knight": 16500,
  "ori-will-of-the-wisps": 29900,
  "celeste": 21500,
  "slay-the-spire": 27000,
  "subnautica": 33700,
  "dont-starve": 10500,
  "mass-effect-2": 33000,
  "it-takes-two": 44000,
  "cyberpunk-2077": 66000,
  "red-dead-redemption-2": 73000,
  "god-of-war": 52800,
  "horizon-zero-dawn": 51000,
  "ghost-of-tsushima": 62800,
  "monster-hunter-world": 36800,
  "sekiro": 75000,
  "bloodborne": null,
  "nioh-2": 54800,
  "persona-5-royal": 69800,
  "dragon-quest-xi-s": 49800,
  "final-fantasy-vii-remake": 49800,
  "nier-automata": 44800,
  "disco-elysium": 41000,
  "divinity-original-sin-2": 54000,
  "rimworld": 37500,
  "factorio": 40000,
  "oxygen-not-included": 26000,
  "cities-skylines": 33000,
  "the-sims-4": 0,
  "fire-emblem-three-houses": null,
  "into-the-breach": 15500,
  "total-war-three-kingdoms": 44800,
  "age-of-empires-ii-de": 36500,
  "tetris-effect-connected": 41000,
  "return-of-the-obra-dinn": 21500,
  "outer-wilds": 29500,
  "super-mario-odyssey": null,
  "metroid-dread": null,
  "cuphead": 21000,
  "the-last-of-us-part-ii": 52800,
  "uncharted-4": 52800,
  "resident-evil-4-remake": 49800,
  "zelda-breath-of-the-wild": null,
  "zelda-tears-of-the-kingdom": null,
  "dave-the-diver": 24000,
  "vampire-survivors": 5000,
  "balatro": 16500,
  "valheim": 22000,
  "palworld": 32000,
  "lethal-company": 11000,
  "helldivers-2": 44800,
  "deep-rock-galactic": 32000,
  "risk-of-rain-2": 26000,
  "no-mans-sky": 63000,
  "satisfactory": 42000,
  "hi-fi-rush": 34200,
  "sea-of-stars": 37500,
  "tunic": 32000,
  "undertale": 10500,
  "dredge": 27800,
  "inscryption": 22000,
  "cult-of-the-lamb": 25000,
  "lies-of-p": 64800,
  "armored-core-vi": 69800,
  "remnant-2": 53000,
  "phasmophobia": 21500,
  "project-zomboid": 21500,
  "binding-of-isaac-rebirth": 15500,
  "euro-truck-simulator-2": 24800,
  "among-us": 5500,
  "papers-please": 11000,
  "hotline-miami": 11000,
  "ftl": 10500,
  "stanley-parable-ultra-deluxe": 26000,
  "a-short-hike": 8500,
  "spiritfarer": 32000,
  "inside": 26000,
  "limbo": 13000,
  "fez": 10500,
  "spelunky-2": 20500,
  "shovel-knight-treasure-trove": 41000,
  "katana-zero": 16500,
  "hyper-light-drifter": 21000,
  "enter-the-gungeon": 16500,
  "darkest-dungeon": 27000,
  "firewatch": 21500,
  "gris": 16500,
  "edith-finch": 24000,
  "baba-is-you": 15500,
  "untitled-goose-game": 21500,
  "loop-hero": 16500,
  "rain-world": 26900,
  "night-in-the-woods": 21500,
  "oxenfree": 11000,
  "crypt-of-the-necrodancer": 16500,
  "superhot": 25000,
  "brotato": 5600,
  "unpacking": 20500,
  "dorfromantik": 14500,
  "mini-motorways": 10500,
  "half-life-2": 11000,
  "portal": 11000,
  "counter-strike-2": 0,
  "gta-5": 36790,
  "skyrim": 45000,
  "fallout-4": 22000,
  "bioshock-infinite": 32000,
  "dishonored-2": 33500,
  "doom-eternal": 32800,
  "control": 39900,
  "resident-evil-village": 49800,
  "death-stranding": 45000,
  "hogwarts-legacy": 79800,
  "starfield": 54300,
  "diablo-4": 62400,
  "path-of-exile": 0,
  "warframe": 0,
  "apex-legends": 0,
  "rust": 42000,
  "ark-survival-evolved": 16500,
  "sons-of-the-forest": 32000,
  "v-rising": 34500,
  "dying-light-2": 66000,
  "left-4-dead-2": 11000,
  "team-fortress-2": 0,
  "monster-hunter-rise": 49800,
  "street-fighter-6": 44800,
  "tekken-8": 49800,
  "rocket-league": 0,
  "human-fall-flat": 20500,
  "overcooked-2": 26000,
  "hunt-showdown": 36700,
  "metro-exodus": 30400,
  "titanfall-2": 33000,
  "borderlands-3": 64900,
  "deltarune": 29800,
  "cocoon": 29500,
  "chicory": 21500,
  "neon-white": 26800,
  "pizza-tower": 21000,
  "signalis": 20500,
  "pentiment": 19900,
  "astroneer": 32000,
  "core-keeper": 21500,
  "raft": 21000,
  "a-plague-tale-requiem": 58000,
  "little-nightmares-2": 29800,
  "kena-bridge-of-spirits": 41000,
  "against-the-storm": 29900,
  "terra-nil": 27000,
  "wukong": 64800
};

function getGamePrice(game) {
  const price = gamePrices[game.id];
  return typeof price === "number" ? price : null;
}

function formatGamePrice(game) {
  const price = getGamePrice(game);

  if (price === null) {
    return "가격 확인 필요";
  }

  if (price === 0) {
    return "무료";
  }

  return `₩${price.toLocaleString("ko-KR")}`;
}

const recommendedGameIds = new Set([
  "stardew-valley",
  "minecraft",
  "terraria",
  "hollow-knight",
  "cyberpunk-2077",
  "red-dead-redemption-2",
  "cuphead",
  "zelda-breath-of-the-wild",
  "zelda-tears-of-the-kingdom",
  "balatro",
  "binding-of-isaac-rebirth",
  "gta-5"
]);

function isRecommendedGame(game) {
  return recommendedGameIds.has(game.id);
}

// Populated by scripts/fetch-rawg-images.js (requires a RAWG_API_KEY).
// Shape per entry: { rawgId, rawgSlug, image, rawgRating, rawgGenres, released }.
// Empty until that script has been run - every game falls back to its
// Steam/local/direct cover source until then (see js/game-cover.js).
const rawgData = {
  "elden-ring": {
    "rawgId": 326243,
    "rawgSlug": "elden-ring",
    "image": "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
    "rawgRating": 4.39,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2022-02-25"
  },
  "dark-souls-3": {
    "rawgId": 2551,
    "rawgSlug": "dark-souls-iii",
    "image": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
    "rawgRating": 4.4,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2016-04-11"
  },
  "the-witcher-3": {
    "rawgId": 3328,
    "rawgSlug": "the-witcher-3-wild-hunt",
    "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    "rawgRating": 4.64,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2015-05-18"
  },
  "baldurs-gate-3": {
    "rawgId": 324997,
    "rawgSlug": "baldurs-gate-3",
    "image": "https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg",
    "rawgRating": 4.44,
    "rawgGenres": [
      "Adventure",
      "RPG",
      "Strategy"
    ],
    "released": "2023-08-03"
  },
  "stardew-valley": {
    "rawgId": 654,
    "rawgSlug": "stardew-valley",
    "image": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
    "rawgRating": 4.39,
    "rawgGenres": [
      "RPG",
      "Simulation",
      "Indie"
    ],
    "released": "2016-02-25"
  },
  "animal-crossing": {
    "rawgId": 54346,
    "rawgSlug": "animal-crossing",
    "image": "https://media.rawg.io/media/games/9dc/9dc9fbd2c2054a3a9b7c33a906546bea.jpg",
    "rawgRating": 4.17,
    "rawgGenres": [
      "RPG",
      "Simulation"
    ],
    "released": "2001-04-14"
  },
  "minecraft": {
    "rawgId": 22509,
    "rawgSlug": "minecraft",
    "image": "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg",
    "rawgRating": 4.44,
    "rawgGenres": [
      "Action",
      "Simulation",
      "Arcade",
      "Massively Multiplayer",
      "Indie"
    ],
    "released": "2009-05-10"
  },
  "terraria": {
    "rawgId": 422,
    "rawgSlug": "terraria",
    "image": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
    "rawgRating": 4.08,
    "rawgGenres": [
      "Action",
      "Indie",
      "Platformer"
    ],
    "released": "2011-05-16"
  },
  "hades": {
    "rawgId": 194817,
    "rawgSlug": "hades",
    "image": "https://media.rawg.io/media/screenshots/b7b/b7b66ade987d2d33542797ebe460ef5b.jpg",
    "rawgRating": 0,
    "rawgGenres": [
      "Platformer"
    ],
    "released": "2016-06-23"
  },
  "dead-cells": {
    "rawgId": 11726,
    "rawgSlug": "dead-cells",
    "image": "https://media.rawg.io/media/games/f90/f90ee1a4239247a822771c40488e68c5.jpg",
    "rawgRating": 4.23,
    "rawgGenres": [
      "Action",
      "RPG",
      "Indie",
      "Platformer"
    ],
    "released": "2018-08-07"
  },
  "civilization-vi": {
    "rawgId": 10297,
    "rawgSlug": "civilization-vi",
    "image": "https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg",
    "rawgRating": 4.16,
    "rawgGenres": [
      "Strategy",
      "Simulation"
    ],
    "released": "2016-10-20"
  },
  "xcom-2": {
    "rawgId": 1256,
    "rawgSlug": "xcom-2",
    "image": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
    "rawgRating": 4.1,
    "rawgGenres": [
      "RPG",
      "Strategy"
    ],
    "released": "2016-02-04"
  },
  "portal-2": {
    "rawgId": 4200,
    "rawgSlug": "portal-2",
    "image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    "rawgRating": 4.58,
    "rawgGenres": [
      "Shooter",
      "Puzzle"
    ],
    "released": "2011-04-18"
  },
  "the-witness": {
    "rawgId": 2873,
    "rawgSlug": "the-witness",
    "image": "https://media.rawg.io/media/games/00b/00b164224ebaf381104d0b215a37afb3.jpg",
    "rawgRating": 4.01,
    "rawgGenres": [
      "Adventure",
      "Indie",
      "Puzzle"
    ],
    "released": "2016-01-25"
  },
  "hollow-knight": {
    "rawgId": 9767,
    "rawgSlug": "hollow-knight",
    "image": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
    "rawgRating": 4.4,
    "rawgGenres": [
      "Action",
      "Indie",
      "Platformer"
    ],
    "released": "2017-02-23"
  },
  "ori-will-of-the-wisps": {
    "rawgId": 28199,
    "rawgSlug": "ori-and-the-will-of-the-wisps",
    "image": "https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg",
    "rawgRating": 4.41,
    "rawgGenres": [
      "Platformer",
      "Adventure",
      "Action"
    ],
    "released": "2020-03-10"
  },
  "celeste": {
    "rawgId": 22121,
    "rawgSlug": "celeste",
    "image": "https://media.rawg.io/media/games/594/59487800889ebac294c7c2c070d02356.jpg",
    "rawgRating": 4.37,
    "rawgGenres": [
      "Indie",
      "Platformer"
    ],
    "released": "2018-01-25"
  },
  "slay-the-spire": {
    "rawgId": 28121,
    "rawgSlug": "slay-the-spire",
    "image": "https://media.rawg.io/media/games/f52/f5206d55f918edf8ee07803101106fa6.jpg",
    "rawgRating": 4.35,
    "rawgGenres": [
      "RPG",
      "Strategy",
      "Card",
      "Indie"
    ],
    "released": "2019-01-22"
  },
  "subnautica": {
    "rawgId": 10419,
    "rawgSlug": "subnautica",
    "image": "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg",
    "rawgRating": 4.24,
    "rawgGenres": [
      "Adventure",
      "Indie"
    ],
    "released": "2018-01-23"
  },
  "dont-starve": {
    "rawgId": 9475,
    "rawgSlug": "dont-starve",
    "image": "https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg",
    "rawgRating": 3.85,
    "rawgGenres": [
      "Indie"
    ],
    "released": "2013-04-22"
  },
  "mass-effect-2": {
    "rawgId": 4806,
    "rawgSlug": "mass-effect-2",
    "image": "https://media.rawg.io/media/games/3cf/3cff89996570cf29a10eb9cd967dcf73.jpg",
    "rawgRating": 4.46,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2010-01-26"
  },
  "it-takes-two": {
    "rawgId": 179581,
    "rawgSlug": "it-takes-two",
    "image": "https://media.rawg.io/media/screenshots/c02/c02a0c98e873c3912b3fcc5aba5e7a16.jpg",
    "rawgRating": 0,
    "rawgGenres": [
      "Puzzle"
    ],
    "released": "2018-08-20"
  },
  "cyberpunk-2077": {
    "rawgId": 41494,
    "rawgSlug": "cyberpunk-2077",
    "image": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
    "rawgRating": 4.23,
    "rawgGenres": [
      "Action",
      "Shooter",
      "RPG"
    ],
    "released": "2020-12-10"
  },
  "red-dead-redemption-2": {
    "rawgId": 28,
    "rawgSlug": "red-dead-redemption-2",
    "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    "rawgRating": 4.59,
    "rawgGenres": [
      "Action"
    ],
    "released": "2018-10-26"
  },
  "god-of-war": {
    "rawgId": 29179,
    "rawgSlug": "god-of-war",
    "image": "https://media.rawg.io/media/games/1aa/1aa4ca34a8a6bb57a2e065c8332dc230.jpg",
    "rawgRating": 4.36,
    "rawgGenres": [
      "Action"
    ],
    "released": "2005-03-22"
  },
  "horizon-zero-dawn": {
    "rawgId": 278,
    "rawgSlug": "horizon-zero-dawn",
    "image": "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
    "rawgRating": 4.27,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2017-02-28"
  },
  "ghost-of-tsushima": {
    "rawgId": 58550,
    "rawgSlug": "ghost-of-tsushima",
    "image": "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg",
    "rawgRating": 4.41,
    "rawgGenres": [
      "Action",
      "Adventure",
      "RPG"
    ],
    "released": "2020-07-17"
  },
  "monster-hunter-world": {
    "rawgId": 46889,
    "rawgSlug": "monster-hunter-world-2",
    "image": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg",
    "rawgRating": 4.01,
    "rawgGenres": [
      "Adventure",
      "Action",
      "RPG"
    ],
    "released": "2018-01-26"
  },
  "sekiro": {
    "rawgId": 433707,
    "rawgSlug": "sekiro",
    "image": "https://media.rawg.io/media/screenshots/474/474bbffbbf4f93834b735000c19390b0.jpg",
    "rawgRating": 0,
    "rawgGenres": [],
    "released": "2020-04-21"
  },
  "bloodborne": {
    "rawgId": 3387,
    "rawgSlug": "bloodborne",
    "image": "https://media.rawg.io/media/games/214/214b29aeff13a0ae6a70fc4426e85991.jpg",
    "rawgRating": 4.41,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2015-03-24"
  },
  "nioh-2": {
    "rawgId": 58815,
    "rawgSlug": "nioh-2",
    "image": "https://media.rawg.io/media/games/a35/a359074cde22a4b23c54db44a592dc41.jpg",
    "rawgRating": 3.95,
    "rawgGenres": [
      "Action"
    ],
    "released": "2020-03-13"
  },
  "persona-5-royal": {
    "rawgId": 339958,
    "rawgSlug": "persona-5-royal",
    "image": "https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg",
    "rawgRating": 4.75,
    "rawgGenres": [
      "Adventure",
      "RPG"
    ],
    "released": "2020-03-31"
  },
  "dragon-quest-xi-s": {
    "rawgId": 484816,
    "rawgSlug": "dragon-quest-xi-s-echoes-of-an-elusive-age-definit",
    "image": "https://media.rawg.io/media/screenshots/7af/7afce909f5f8510015209451984b683e.jpg",
    "rawgRating": 4.26,
    "rawgGenres": [
      "Adventure",
      "RPG"
    ],
    "released": "2019-09-27"
  },
  "final-fantasy-vii-remake": {
    "rawgId": 259801,
    "rawgSlug": "final-fantasy-vii-remake",
    "image": "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg",
    "rawgRating": 4.37,
    "rawgGenres": [
      "Action",
      "Adventure",
      "RPG"
    ],
    "released": "2020-04-10"
  },
  "nier-automata": {
    "rawgId": 10141,
    "rawgSlug": "nierautomata",
    "image": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg",
    "rawgRating": 4.37,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2017-03-17"
  },
  "disco-elysium": {
    "rawgId": 262382,
    "rawgSlug": "disco-elysium",
    "image": "https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg",
    "rawgRating": 4.37,
    "rawgGenres": [
      "Adventure",
      "RPG",
      "Indie"
    ],
    "released": "2019-10-14"
  },
  "divinity-original-sin-2": {
    "rawgId": 10073,
    "rawgSlug": "divinity-original-sin-2",
    "image": "https://media.rawg.io/media/games/424/424facd40f4eb1f2794fe4b4bb28a277.jpg",
    "rawgRating": 4.38,
    "rawgGenres": [
      "RPG",
      "Strategy"
    ],
    "released": "2017-09-14"
  },
  "rimworld": {
    "rawgId": 12130,
    "rawgSlug": "rimworld",
    "image": "https://media.rawg.io/media/screenshots/4d8/4d85fbe90066fdbef295a618640c4a82.jpg",
    "rawgRating": 4.36,
    "rawgGenres": [
      "Strategy",
      "Simulation",
      "Indie"
    ],
    "released": "2016-07-15"
  },
  "factorio": {
    "rawgId": 10926,
    "rawgSlug": "factorio",
    "image": "https://media.rawg.io/media/games/7e4/7e4e22b76da131e9690d5757555093c2.jpg",
    "rawgRating": 4.36,
    "rawgGenres": [
      "Strategy",
      "Simulation",
      "Casual",
      "Indie"
    ],
    "released": "2020-08-14"
  },
  "oxygen-not-included": {
    "rawgId": 9880,
    "rawgSlug": "oxygen-not-included",
    "image": "https://media.rawg.io/media/games/000/0002b2686a50b30762fb6040a8d9187f.jpg",
    "rawgRating": 4.14,
    "rawgGenres": [
      "Strategy",
      "Simulation",
      "Indie"
    ],
    "released": "2017-05-18"
  },
  "cities-skylines": {
    "rawgId": 10065,
    "rawgSlug": "cities-skylines",
    "image": "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
    "rawgRating": 4.12,
    "rawgGenres": [
      "Strategy",
      "Simulation"
    ],
    "released": "2015-03-10"
  },
  "the-sims-4": {
    "rawgId": 42187,
    "rawgSlug": "the-sims-4",
    "image": "https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg",
    "rawgRating": 3.67,
    "rawgGenres": [
      "Strategy",
      "Simulation",
      "Casual"
    ],
    "released": "2014-09-02"
  },
  "fire-emblem-three-houses": {
    "rawgId": 246478,
    "rawgSlug": "fire-emblem-three-houses",
    "image": "https://media.rawg.io/media/games/530/53081dbd5003f990fa5312404ac3d71a.jpg",
    "rawgRating": 4.35,
    "rawgGenres": [
      "RPG",
      "Strategy"
    ],
    "released": "2019-07-26"
  },
  "into-the-breach": {
    "rawgId": 13566,
    "rawgSlug": "into-the-breach",
    "image": "https://media.rawg.io/media/games/800/800d07ca648a9778a8230f40088e0866.jpg",
    "rawgRating": 4.31,
    "rawgGenres": [
      "RPG",
      "Strategy",
      "Indie"
    ],
    "released": "2018-02-26"
  },
  "total-war-three-kingdoms": {
    "rawgId": 51584,
    "rawgSlug": "total-war-three-kingdoms",
    "image": "https://media.rawg.io/media/games/b4c/b4cd6c7a2712b88eec149536882d6c3b.jpg",
    "rawgRating": 3.98,
    "rawgGenres": [
      "Action",
      "Strategy",
      "Simulation"
    ],
    "released": "2019-05-22"
  },
  "age-of-empires-ii-de": {
    "rawgId": 326253,
    "rawgSlug": "age-of-empires-2-definitive-edition",
    "image": "https://media.rawg.io/media/games/945/9455733af10406794b0c1b8d117bca76.jpg",
    "rawgRating": 4.29,
    "rawgGenres": [
      "Strategy"
    ],
    "released": "2019-11-14"
  },
  "tetris-effect-connected": {
    "rawgId": 471027,
    "rawgSlug": "tetris-effect-connected",
    "image": "https://media.rawg.io/media/games/377/3770f2c7020bcb6cc2072f073f27fb4c.jpg",
    "rawgRating": 4.22,
    "rawgGenres": [
      "Casual",
      "Indie",
      "Puzzle"
    ],
    "released": "2020-11-10"
  },
  "return-of-the-obra-dinn": {
    "rawgId": 46508,
    "rawgSlug": "return-of-the-obra-dinn",
    "image": "https://media.rawg.io/media/games/052/052f9afc7aaeea3e2c5d46eafa92c64e.jpg",
    "rawgRating": 4.33,
    "rawgGenres": [
      "Adventure",
      "Indie"
    ],
    "released": "2018-10-17"
  },
  "outer-wilds": {
    "rawgId": 58764,
    "rawgSlug": "outer-wilds",
    "image": "https://media.rawg.io/media/games/9f4/9f418898f5415668ca47b5f4ab1ecfeb.jpg",
    "rawgRating": 4.36,
    "rawgGenres": [
      "Adventure",
      "Indie",
      "Puzzle"
    ],
    "released": "2019-05-29"
  },
  "super-mario-odyssey": {
    "rawgId": 28026,
    "rawgSlug": "super-mario-odyssey",
    "image": "https://media.rawg.io/media/games/267/267bd0dbc496f52692487d07d014c061.jpg",
    "rawgRating": 4.42,
    "rawgGenres": [
      "Arcade",
      "Platformer"
    ],
    "released": "2017-10-27"
  },
  "metroid-dread": {
    "rawgId": 622495,
    "rawgSlug": "metroid-dread",
    "image": "https://media.rawg.io/media/games/c26/c262f8b54b46edc72594c4a9bb8ee13e.jpg",
    "rawgRating": 4.36,
    "rawgGenres": [
      "Action",
      "RPG",
      "Platformer"
    ],
    "released": "2021-10-08"
  },
  "cuphead": {
    "rawgId": 28154,
    "rawgSlug": "cuphead",
    "image": "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg",
    "rawgRating": 4.37,
    "rawgGenres": [
      "Action",
      "Indie",
      "Platformer"
    ],
    "released": "2017-09-29"
  },
  "the-last-of-us-part-ii": {
    "rawgId": 51325,
    "rawgSlug": "the-last-of-us-part-2",
    "image": "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
    "rawgRating": 4.42,
    "rawgGenres": [
      "Shooter",
      "Adventure",
      "Action"
    ],
    "released": "2020-06-19"
  },
  "uncharted-4": {
    "rawgId": 2462,
    "rawgSlug": "uncharted-4-a-thiefs-end",
    "image": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
    "rawgRating": 4.48,
    "rawgGenres": [
      "Shooter",
      "Action"
    ],
    "released": "2016-05-10"
  },
  "resident-evil-4-remake": {
    "rawgId": 795632,
    "rawgSlug": "resident-evil-4-2023",
    "image": "https://media.rawg.io/media/games/51a/51a404b9918a0b19fc704a3ca248c69f.jpg",
    "rawgRating": 4.57,
    "rawgGenres": [
      "Adventure",
      "Action"
    ],
    "released": "2023-03-24"
  },
  "zelda-breath-of-the-wild": {
    "rawgId": 22511,
    "rawgSlug": "the-legend-of-zelda-breath-of-the-wild",
    "image": "https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg",
    "rawgRating": 4.47,
    "rawgGenres": [
      "Adventure",
      "Action",
      "RPG"
    ],
    "released": "2017-03-03"
  },
  "zelda-tears-of-the-kingdom": {
    "rawgId": 327239,
    "rawgSlug": "the-legend-of-zelda-breath-of-the-wild-sequel",
    "image": "https://media.rawg.io/media/games/556/55684bfd048706f4266d331d70050b37.jpg",
    "rawgRating": 4.37,
    "rawgGenres": [
      "Adventure",
      "Action"
    ],
    "released": "2023-05-12"
  },
  "dave-the-diver": {
    "rawgId": 871264,
    "rawgSlug": "dave-the-diver",
    "image": "https://media.rawg.io/media/games/1ee/1eec43616e3ff00a674124d746926b23.jpg",
    "rawgRating": 4.27,
    "rawgGenres": [
      "Action",
      "Adventure",
      "RPG",
      "Simulation"
    ],
    "released": "2023-06-28"
  },
  "vampire-survivors": {
    "rawgId": 685577,
    "rawgSlug": "vampire-survivors",
    "image": "https://media.rawg.io/media/games/501/501e7019925a3c692bf1c8062f07abe6.jpg",
    "rawgRating": 4.19,
    "rawgGenres": [
      "Action",
      "RPG",
      "Casual",
      "Indie"
    ],
    "released": "2022-10-20"
  },
  "balatro": {
    "rawgId": 977316,
    "rawgSlug": "balatro",
    "image": "https://media.rawg.io/media/games/821/821a40bd0cc0ac7dfb3fe97a7878dc1f.jpg",
    "rawgRating": 4.28,
    "rawgGenres": [
      "Strategy",
      "Casual",
      "Indie"
    ],
    "released": "2024-02-20"
  },
  "valheim": {
    "rawgId": 248521,
    "rawgSlug": "valheim",
    "image": "https://media.rawg.io/media/games/adb/adb59be81367b19c2544457424bcf086.jpg",
    "rawgRating": 3.99,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "released": "2021-02-02"
  },
  "palworld": {
    "rawgId": 718135,
    "rawgSlug": "palworld",
    "image": "https://media.rawg.io/media/games/4e9/4e9c951414c732923fa72d5b1da49402.jpg",
    "rawgRating": 3.54,
    "rawgGenres": [
      "Action",
      "Adventure",
      "RPG",
      "Indie"
    ],
    "released": "2024-01-19"
  },
  "lethal-company": {
    "rawgId": 968329,
    "rawgSlug": "lethal-company",
    "image": "https://media.rawg.io/media/screenshots/2fa/2faa93b7882a018ac21a1f9cc5176579.jpg",
    "rawgRating": 4.24,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "released": "2023-10-23"
  },
  "helldivers-2": {
    "rawgId": 976564,
    "rawgSlug": "helldivers-2",
    "image": "https://media.rawg.io/media/screenshots/755/7552f856f88b0de1dee040121039b079.jpg",
    "rawgRating": 4.24,
    "rawgGenres": [
      "Action"
    ],
    "released": "2024-02-08"
  },
  "deep-rock-galactic": {
    "rawgId": 9551,
    "rawgSlug": "deep-rock-galactic",
    "image": "https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg",
    "rawgRating": 4.1,
    "rawgGenres": [
      "Action",
      "Indie"
    ],
    "released": "2020-05-13"
  },
  "risk-of-rain-2": {
    "rawgId": 263590,
    "rawgSlug": "risk-of-rain-2",
    "image": "https://media.rawg.io/media/games/238/238e2b2b24c9838626700c69cacf1e3a.jpg",
    "rawgRating": 4.14,
    "rawgGenres": [
      "Action",
      "Shooter",
      "Arcade"
    ],
    "released": "2020-08-11"
  },
  "no-mans-sky": {
    "rawgId": 2093,
    "rawgSlug": "no-mans-sky",
    "image": "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg",
    "rawgRating": 3.71,
    "rawgGenres": [
      "Action",
      "Adventure",
      "RPG",
      "Simulation",
      "Massively Multiplayer",
      "Indie"
    ],
    "released": "2016-08-09"
  },
  "satisfactory": {
    "rawgId": 58806,
    "rawgSlug": "satisfactory",
    "image": "https://media.rawg.io/media/games/9b0/9b03581c1ba7df63e221eb0828f8bb52.jpg",
    "rawgRating": 4.3,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Strategy",
      "Indie"
    ],
    "released": "2024-09-11"
  },
  "hi-fi-rush": {
    "rawgId": 914789,
    "rawgSlug": "hi-fi-rush",
    "image": "https://media.rawg.io/media/games/62f/62f71917e64e913f2a893e7373319c60.jpg",
    "rawgRating": 4.3,
    "rawgGenres": [
      "Action",
      "Adventure"
    ],
    "released": "2023-01-25"
  },
  "sea-of-stars": {
    "rawgId": 418066,
    "rawgSlug": "sea-of-stars",
    "image": "https://media.rawg.io/media/screenshots/4c4/4c4bc20edba2fb9701525eadd732de57.jpg",
    "rawgRating": 0,
    "rawgGenres": [
      "Shooter",
      "Adventure",
      "RPG"
    ],
    "released": "2020-03-07"
  },
  "tunic": {
    "rawgId": 29236,
    "rawgSlug": "tunic",
    "image": "https://media.rawg.io/media/games/2c1/2c1984e128ac48b89953ed4de4904a3b.jpg",
    "rawgRating": 4.11,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "released": "2022-03-16"
  },
  "undertale": {
    "rawgId": 13627,
    "rawgSlug": "undertale",
    "image": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg",
    "rawgRating": 4.35,
    "rawgGenres": [
      "RPG",
      "Indie"
    ],
    "released": "2015-09-14"
  },
  "dredge": {
    "rawgId": 842402,
    "rawgSlug": "dredge",
    "image": "https://media.rawg.io/media/games/c2c/c2c9f1c026b6c1be5bc2160baf7224ea.jpg",
    "rawgRating": 4.27,
    "rawgGenres": [
      "Adventure",
      "RPG"
    ],
    "released": "2023-03-29"
  },
  "inscryption": {
    "rawgId": 479694,
    "rawgSlug": "inscryption",
    "image": "https://media.rawg.io/media/games/73e/73efc5c0ac6f354271dae610276f617c.jpg",
    "rawgRating": 4.38,
    "rawgGenres": [
      "Adventure",
      "Strategy",
      "Indie"
    ],
    "released": "2021-10-19"
  },
  "cult-of-the-lamb": {
    "rawgId": 650605,
    "rawgSlug": "cult-of-the-lamb",
    "image": "https://media.rawg.io/media/games/ab8/ab8217a1fe2ced388a388722734e6d16.jpg",
    "rawgRating": 4.11,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Strategy",
      "Indie"
    ],
    "released": "2022-08-11"
  },
  "lies-of-p": {
    "rawgId": 605674,
    "rawgSlug": "lies-of-p",
    "image": "https://media.rawg.io/media/games/458/45838becd01e929b6be8b88d655cebfc.jpg",
    "rawgRating": 4.16,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2023-09-19"
  },
  "armored-core-vi": {
    "rawgId": 892902,
    "rawgSlug": "armored-core-vi",
    "image": "https://media.rawg.io/media/games/c97/c97aba78a97038867d4b32a81fe48567.jpg",
    "rawgRating": 4.14,
    "rawgGenres": [
      "Action"
    ],
    "released": "2023-08-25"
  },
  "remnant-2": {
    "rawgId": 892898,
    "rawgSlug": "remnant-2",
    "image": "https://media.rawg.io/media/games/347/3478db948d4f25d40da7c22c0fd1039c.jpg",
    "rawgRating": 3.74,
    "rawgGenres": [
      "Action",
      "Shooter",
      "Arcade"
    ],
    "released": "2023-07-21"
  },
  "phasmophobia": {
    "rawgId": 427930,
    "rawgSlug": "phasmophobia",
    "image": "https://media.rawg.io/media/screenshots/370/370895ff725d74e26b8d30389222b397.jpg",
    "rawgRating": 3.85,
    "rawgGenres": [
      "Action",
      "Indie"
    ],
    "released": "2020-09-18"
  },
  "project-zomboid": {
    "rawgId": 10900,
    "rawgSlug": "project-zomboid",
    "image": "https://media.rawg.io/media/screenshots/243/2436b84b99f1121c302367f0c5901b84.jpg",
    "rawgRating": 3.87,
    "rawgGenres": [
      "RPG",
      "Indie"
    ],
    "released": "2013-11-08"
  },
  "binding-of-isaac-rebirth": {
    "rawgId": 250,
    "rawgSlug": "the-binding-of-isaac-rebirth",
    "image": "https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg",
    "rawgRating": 4.31,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2014-11-03"
  },
  "euro-truck-simulator-2": {
    "rawgId": 9609,
    "rawgSlug": "euro-truck-simulator-2",
    "image": "https://media.rawg.io/media/games/1f5/1f5ddf7199f2778ff83663b93b5cb330.jpg",
    "rawgRating": 4.12,
    "rawgGenres": [
      "Simulation",
      "Indie"
    ],
    "released": "2012-10-19"
  },
  "among-us": {
    "rawgId": 356714,
    "rawgSlug": "among-us",
    "image": "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg",
    "rawgRating": 3.83,
    "rawgGenres": [
      "Action",
      "Simulation",
      "Casual"
    ],
    "released": "2018-07-25"
  },
  "papers-please": {
    "rawgId": 1358,
    "rawgSlug": "papers-please",
    "image": "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg",
    "rawgRating": 4.37,
    "rawgGenres": [
      "Simulation",
      "Educational",
      "Indie",
      "Puzzle"
    ],
    "released": "2013-08-08"
  },
  "hotline-miami": {
    "rawgId": 3612,
    "rawgSlug": "hotline-miami",
    "image": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
    "rawgRating": 4.38,
    "rawgGenres": [
      "Action",
      "Shooter",
      "Arcade",
      "Indie"
    ],
    "released": "2012-10-22"
  },
  "ftl": {
    "rawgId": 624,
    "rawgSlug": "ftl-faster-than-light",
    "image": "https://media.rawg.io/media/games/5f4/5f4780690dbf04900cbac5f05b9305f3.jpg",
    "rawgRating": 4.25,
    "rawgGenres": [
      "Strategy",
      "Indie",
      "Simulation"
    ],
    "released": "2012-09-14"
  },
  "stanley-parable-ultra-deluxe": {
    "rawgId": 274758,
    "rawgSlug": "the-stanley-parable-ultra-deluxe",
    "image": "https://media.rawg.io/media/games/c4e/c4e3ad247e93d3a5dc40aa215a778a9c.jpg",
    "rawgRating": 4.37,
    "rawgGenres": [
      "Casual",
      "Indie",
      "Adventure"
    ],
    "released": "2022-04-27"
  },
  "a-short-hike": {
    "rawgId": 304247,
    "rawgSlug": "a-short-hike",
    "image": "https://media.rawg.io/media/games/c38/c38deeb8f331a78c89e64ad71a1db361.jpg",
    "rawgRating": 4.35,
    "rawgGenres": [
      "Adventure",
      "Indie"
    ],
    "released": "2019-07-29"
  },
  "spiritfarer": {
    "rawgId": 326236,
    "rawgSlug": "spiritfire",
    "image": "https://media.rawg.io/media/games/727/727f889060e688bbdcba7b2a5d26a603.jpg",
    "rawgRating": 4.12,
    "rawgGenres": [
      "Indie",
      "Adventure",
      "Simulation"
    ],
    "released": "2020-08-18"
  },
  "inside": {
    "rawgId": 1450,
    "rawgSlug": "inside",
    "image": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg",
    "rawgRating": 4.39,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Indie",
      "Puzzle",
      "Platformer"
    ],
    "released": "2016-06-28"
  },
  "limbo": {
    "rawgId": 1030,
    "rawgSlug": "limbo",
    "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    "rawgRating": 4.14,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Indie",
      "Puzzle",
      "Platformer"
    ],
    "released": "2010-07-21"
  },
  "fez": {
    "rawgId": 3740,
    "rawgSlug": "fez",
    "image": "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
    "rawgRating": 4,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Indie",
      "Puzzle",
      "Platformer"
    ],
    "released": "2012-04-13"
  },
  "spelunky-2": {
    "rawgId": 59613,
    "rawgSlug": "spelunky-2",
    "image": "https://media.rawg.io/media/games/686/68625f8bef120a2a6074c394baf27f77.jpg",
    "rawgRating": 3.88,
    "rawgGenres": [
      "Action",
      "Indie",
      "Platformer"
    ],
    "released": "2020-09-15"
  },
  "shovel-knight-treasure-trove": {
    "rawgId": 3364,
    "rawgSlug": "shovel-knight-treasure-trove",
    "image": "https://media.rawg.io/media/games/136/1369a40d031777815fbb5d7bc4dd2f86.jpg",
    "rawgRating": 4.32,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Platformer"
    ],
    "released": "2014-06-25"
  },
  "katana-zero": {
    "rawgId": 13856,
    "rawgSlug": "katana-zero",
    "image": "https://media.rawg.io/media/games/d37/d37e110ddcc0bd52d99f0f647b737a0a.jpg",
    "rawgRating": 4.39,
    "rawgGenres": [
      "Action",
      "Indie",
      "Platformer"
    ],
    "released": "2019-04-17"
  },
  "hyper-light-drifter": {
    "rawgId": 2139,
    "rawgSlug": "hyper-light-drifter",
    "image": "https://media.rawg.io/media/games/578/57885b9590c9a9f80ceea34d147a34c4.jpg",
    "rawgRating": 4.14,
    "rawgGenres": [
      "Action",
      "Adventure",
      "RPG",
      "Indie"
    ],
    "released": "2016-03-30"
  },
  "enter-the-gungeon": {
    "rawgId": 2574,
    "rawgSlug": "enter-the-gungeon",
    "image": "https://media.rawg.io/media/games/3be/3be0e624424d3453005019799a760af2.jpg",
    "rawgRating": 4.07,
    "rawgGenres": [
      "Action",
      "Shooter",
      "Indie"
    ],
    "released": "2016-04-04"
  },
  "darkest-dungeon": {
    "rawgId": 1244,
    "rawgSlug": "darkest-dungeon",
    "image": "https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg",
    "rawgRating": 4.17,
    "rawgGenres": [
      "RPG",
      "Strategy",
      "Indie"
    ],
    "released": "2016-01-18"
  },
  "firewatch": {
    "rawgId": 2819,
    "rawgSlug": "firewatch",
    "image": "https://media.rawg.io/media/games/0be/0bea0a08a4d954337305391b778a7f37.jpg",
    "rawgRating": 4.3,
    "rawgGenres": [
      "Adventure",
      "Indie"
    ],
    "released": "2016-02-08"
  },
  "gris": {
    "rawgId": 59313,
    "rawgSlug": "gris",
    "image": "https://media.rawg.io/media/games/51c/51c430f1795c79b78f863a9f22dc422d.jpg",
    "rawgRating": 4.2,
    "rawgGenres": [
      "Adventure",
      "Indie",
      "Puzzle",
      "Platformer"
    ],
    "released": "2018-12-13"
  },
  "edith-finch": {
    "rawgId": 42,
    "rawgSlug": "what-remains-of-edith-finch",
    "image": "https://media.rawg.io/media/games/34e/34e100b1f648de99f32d477065f04653.jpg",
    "rawgRating": 4.38,
    "rawgGenres": [
      "Indie",
      "Adventure"
    ],
    "released": "2017-04-23"
  },
  "baba-is-you": {
    "rawgId": 50839,
    "rawgSlug": "baba-is-you",
    "image": "https://media.rawg.io/media/games/0bc/0bca854021e14ffa9005a85c4567d25c.jpg",
    "rawgRating": 4.39,
    "rawgGenres": [
      "Indie",
      "Puzzle"
    ],
    "released": "2019-03-13"
  },
  "untitled-goose-game": {
    "rawgId": 59637,
    "rawgSlug": "untitled-goose-game",
    "image": "https://media.rawg.io/media/games/199/1996ab6448cadb2ce4bea31536466333.jpg",
    "rawgRating": 4.05,
    "rawgGenres": [
      "Action",
      "Family",
      "Indie",
      "Puzzle"
    ],
    "released": "2019-09-20"
  },
  "loop-hero": {
    "rawgId": 548036,
    "rawgSlug": "loop-hero",
    "image": "https://media.rawg.io/media/games/cef/cef4c326dd57a8f39d696379eaa84411.jpg",
    "rawgRating": 4.04,
    "rawgGenres": [
      "RPG",
      "Strategy",
      "Simulation",
      "Indie"
    ],
    "released": "2021-03-04"
  },
  "rain-world": {
    "rawgId": 82,
    "rawgSlug": "rain-world",
    "image": "https://media.rawg.io/media/screenshots/ca0/ca0ad22b04fbee26188c02be4d03ab52.jpg",
    "rawgRating": 3.86,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Indie",
      "Platformer"
    ],
    "released": "2017-03-27"
  },
  "night-in-the-woods": {
    "rawgId": 320,
    "rawgSlug": "night-in-the-woods",
    "image": "https://media.rawg.io/media/games/b0a/b0a370527fea0e824225269d4a8797db.jpg",
    "rawgRating": 4.25,
    "rawgGenres": [
      "Adventure"
    ],
    "released": "2017-02-21"
  },
  "oxenfree": {
    "rawgId": 295,
    "rawgSlug": "oxenfree",
    "image": "https://media.rawg.io/media/games/7ba/7baf4663962bad7197e2470d59a6e322.jpg",
    "rawgRating": 3.91,
    "rawgGenres": [
      "Adventure",
      "RPG",
      "Indie"
    ],
    "released": "2016-01-14"
  },
  "crypt-of-the-necrodancer": {
    "rawgId": 2845,
    "rawgSlug": "crypt-of-the-necrodancer",
    "image": "https://media.rawg.io/media/games/70a/70a7a7b21d8fdf5f19622e5e14599bcd.jpg",
    "rawgRating": 3.99,
    "rawgGenres": [
      "Action",
      "RPG",
      "Indie"
    ],
    "released": "2015-04-22"
  },
  "superhot": {
    "rawgId": 7819,
    "rawgSlug": "superhot",
    "image": "https://media.rawg.io/media/screenshots/ad4/ad445a12ee46543d4d117f3893041ebf.jpg",
    "rawgRating": 4.19,
    "rawgGenres": [
      "Action",
      "Shooter",
      "Indie"
    ],
    "released": "2016-02-24"
  },
  "brotato": {
    "rawgId": 857690,
    "rawgSlug": "brotato",
    "image": "https://media.rawg.io/media/screenshots/ed8/ed8a780ca2d64dcd38f8ff3bcecf050a.jpg",
    "rawgRating": 4.03,
    "rawgGenres": [
      "Action",
      "RPG",
      "Casual",
      "Indie"
    ],
    "released": "2022-09-27"
  },
  "unpacking": {
    "rawgId": 102660,
    "rawgSlug": "unpacking",
    "image": "https://media.rawg.io/media/screenshots/1d4/1d44139cf4c9c6e381611d5f9358e7fa.jpg",
    "rawgRating": 0,
    "rawgGenres": [
      "Simulation"
    ],
    "released": "2018-02-10"
  },
  "dorfromantik": {
    "rawgId": 568931,
    "rawgSlug": "dorfromantik",
    "image": "https://media.rawg.io/media/screenshots/b00/b00b7cc04dd09531b631ea4575696276.jpg",
    "rawgRating": 3.88,
    "rawgGenres": [
      "Strategy",
      "Simulation",
      "Casual",
      "Indie",
      "Puzzle"
    ],
    "released": "2022-04-28"
  },
  "mini-motorways": {
    "rawgId": 375231,
    "rawgSlug": "mini-motorways",
    "image": "https://media.rawg.io/media/games/a5b/a5bfc1535a634a02ab0928549272d533.jpg",
    "rawgRating": 4.16,
    "rawgGenres": [
      "Strategy",
      "Simulation",
      "Casual",
      "Indie"
    ],
    "released": "2021-07-20"
  },
  "half-life-2": {
    "rawgId": 13537,
    "rawgSlug": "half-life-2",
    "image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    "rawgRating": 4.48,
    "rawgGenres": [
      "Action",
      "Shooter"
    ],
    "released": "2004-11-16"
  },
  "portal": {
    "rawgId": 13536,
    "rawgSlug": "portal",
    "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    "rawgRating": 4.49,
    "rawgGenres": [
      "Action",
      "Puzzle"
    ],
    "released": "2007-10-09"
  },
  "counter-strike-2": {
    "rawgId": 609128,
    "rawgSlug": "counter-strike-2",
    "image": "https://media.rawg.io/media/screenshots/7b2/7b2920260f974292970d6c2312991a3d.jpg",
    "rawgRating": 0,
    "rawgGenres": [
      "Action",
      "Fighting"
    ],
    "released": "2021-05-27"
  },
  "gta-5": {
    "rawgId": 3498,
    "rawgSlug": "grand-theft-auto-v",
    "image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    "rawgRating": 4.47,
    "rawgGenres": [
      "Action"
    ],
    "released": "2013-09-17"
  },
  "skyrim": {
    "rawgId": 5679,
    "rawgSlug": "the-elder-scrolls-v-skyrim",
    "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    "rawgRating": 4.42,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2011-11-11"
  },
  "fallout-4": {
    "rawgId": 3070,
    "rawgSlug": "fallout-4",
    "image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    "rawgRating": 3.81,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2015-11-09"
  },
  "bioshock-infinite": {
    "rawgId": 4062,
    "rawgSlug": "bioshock-infinite",
    "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    "rawgRating": 4.38,
    "rawgGenres": [
      "Action",
      "Shooter"
    ],
    "released": "2013-03-26"
  },
  "dishonored-2": {
    "rawgId": 864,
    "rawgSlug": "dishonored-2",
    "image": "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
    "rawgRating": 4.26,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2016-11-10"
  },
  "doom-eternal": {
    "rawgId": 58777,
    "rawgSlug": "doom-eternal",
    "image": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
    "rawgRating": 4.37,
    "rawgGenres": [
      "Action",
      "Shooter"
    ],
    "released": "2020-03-19"
  },
  "control": {
    "rawgId": 58812,
    "rawgSlug": "control",
    "image": "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
    "rawgRating": 4.14,
    "rawgGenres": [
      "Action",
      "Shooter",
      "Adventure"
    ],
    "released": "2019-08-27"
  },
  "resident-evil-village": {
    "rawgId": 452649,
    "rawgSlug": "resident-evil-village",
    "image": "https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg",
    "rawgRating": 4.39,
    "rawgGenres": [
      "Action",
      "Adventure"
    ],
    "released": "2021-05-07"
  },
  "death-stranding": {
    "rawgId": 50738,
    "rawgSlug": "death-stranding",
    "image": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg",
    "rawgRating": 4.31,
    "rawgGenres": [
      "Action",
      "Adventure"
    ],
    "released": "2019-11-08"
  },
  "hogwarts-legacy": {
    "rawgId": 906547,
    "rawgSlug": "hogwarts-legacy",
    "image": "https://media.rawg.io/media/games/044/044b2ee023930ca138deda151f40c18c.jpg",
    "rawgRating": 3.91,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2023-02-10"
  },
  "starfield": {
    "rawgId": 58779,
    "rawgSlug": "starfield",
    "image": "https://media.rawg.io/media/games/ba8/ba82c971336adfd290e4c0eab6504fcf.jpg",
    "rawgRating": 3.26,
    "rawgGenres": [
      "Adventure",
      "RPG"
    ],
    "released": "2023-09-06"
  },
  "diablo-4": {
    "rawgId": 388309,
    "rawgSlug": "diablo-iv",
    "image": "https://media.rawg.io/media/games/77d/77d51f8f4a07c3eecb0f8504027b1bf0.jpg",
    "rawgRating": 3.75,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2023-06-06"
  },
  "path-of-exile": {
    "rawgId": 10533,
    "rawgSlug": "path-of-exile",
    "image": "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
    "rawgRating": 3.65,
    "rawgGenres": [
      "Action",
      "RPG",
      "Massively Multiplayer",
      "Indie"
    ],
    "released": "2013-10-23"
  },
  "warframe": {
    "rawgId": 766,
    "rawgSlug": "warframe",
    "image": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
    "rawgRating": 3.42,
    "rawgGenres": [
      "Action",
      "Shooter",
      "RPG",
      "Massively Multiplayer"
    ],
    "released": "2013-03-25"
  },
  "apex-legends": {
    "rawgId": 290856,
    "rawgSlug": "apex-legends",
    "image": "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
    "rawgRating": 3.63,
    "rawgGenres": [
      "Action",
      "Shooter"
    ],
    "released": "2019-02-04"
  },
  "rust": {
    "rawgId": 9671,
    "rawgSlug": "rust",
    "image": "https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg",
    "rawgRating": 3.37,
    "rawgGenres": [
      "Action",
      "Shooter",
      "RPG",
      "Massively Multiplayer",
      "Indie"
    ],
    "released": "2018-02-09"
  },
  "ark-survival-evolved": {
    "rawgId": 9810,
    "rawgSlug": "ark-survival-evolved",
    "image": "https://media.rawg.io/media/games/58a/58ac7f6569259dcc0b60b921869b19fc.jpg",
    "rawgRating": 3.08,
    "rawgGenres": [
      "Action",
      "Adventure",
      "RPG",
      "Massively Multiplayer",
      "Indie"
    ],
    "released": "2015-06-02"
  },
  "sons-of-the-forest": {
    "rawgId": 398405,
    "rawgSlug": "sons-of-the-forest",
    "image": "https://media.rawg.io/media/games/7a0/7a092fa63811a7f6ed90f456a8887e91.jpg",
    "rawgRating": 3.63,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Simulation",
      "Indie"
    ],
    "released": "2024-02-22"
  },
  "v-rising": {
    "rawgId": 602224,
    "rawgSlug": "v-rising",
    "image": "https://media.rawg.io/media/games/bde/bdef96f7782fba0ff62dabc37ff4b1f0.jpg",
    "rawgRating": 3.72,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Massively Multiplayer"
    ],
    "released": "2024-05-08"
  },
  "dying-light-2": {
    "rawgId": 58758,
    "rawgSlug": "dying-light-2",
    "image": "https://media.rawg.io/media/games/73d/73db43df633477d4604c7248292f34b2.jpg",
    "rawgRating": 3.64,
    "rawgGenres": [
      "Action",
      "Adventure",
      "RPG"
    ],
    "released": "2022-02-04"
  },
  "left-4-dead-2": {
    "rawgId": 12020,
    "rawgSlug": "left-4-dead-2",
    "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    "rawgRating": 4.1,
    "rawgGenres": [
      "Action",
      "Shooter"
    ],
    "released": "2009-11-17"
  },
  "team-fortress-2": {
    "rawgId": 11859,
    "rawgSlug": "team-fortress-2",
    "image": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
    "rawgRating": 3.68,
    "rawgGenres": [
      "Action",
      "Shooter"
    ],
    "released": "2007-10-10"
  },
  "monster-hunter-rise": {
    "rawgId": 494393,
    "rawgSlug": "monster-hunter-rise",
    "image": "https://media.rawg.io/media/games/dbb/dbba6100aae179b5f24052c9141d426d.jpg",
    "rawgRating": 4.19,
    "rawgGenres": [
      "Action",
      "RPG"
    ],
    "released": "2021-03-26"
  },
  "street-fighter-6": {
    "rawgId": 742771,
    "rawgSlug": "street-fighter-6",
    "image": "https://media.rawg.io/media/games/ce2/ce2463db40cec363f360c29ddcc56884.jpg",
    "rawgRating": 4.09,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Fighting"
    ],
    "released": "2023-06-01"
  },
  "tekken-8": {
    "rawgId": 850705,
    "rawgSlug": "tekken-8",
    "image": "https://media.rawg.io/media/games/ed3/ed3a5e9fab79022979de9ef420137f73.jpg",
    "rawgRating": 3.96,
    "rawgGenres": [
      "Action",
      "Fighting"
    ],
    "released": "2024-01-25"
  },
  "rocket-league": {
    "rawgId": 3272,
    "rawgSlug": "rocket-league",
    "image": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
    "rawgRating": 3.93,
    "rawgGenres": [
      "Sports",
      "Racing",
      "Indie"
    ],
    "released": "2015-07-07"
  },
  "human-fall-flat": {
    "rawgId": 13247,
    "rawgSlug": "human-fall-flat",
    "image": "https://media.rawg.io/media/games/74d/74dafeb9a442b87b9dd4a1d4a2faa37b.jpg",
    "rawgRating": 3.82,
    "rawgGenres": [
      "Action",
      "Indie",
      "Puzzle"
    ],
    "released": "2016-07-22"
  },
  "overcooked-2": {
    "rawgId": 58827,
    "rawgSlug": "overcooked-2",
    "image": "https://media.rawg.io/media/games/d11/d11470677a829e34562e95a4002c2c7f.jpg",
    "rawgRating": 4.15,
    "rawgGenres": [
      "Action",
      "Casual",
      "Indie"
    ],
    "released": "2018-08-06"
  },
  "hunt-showdown": {
    "rawgId": 47428,
    "rawgSlug": "hunt-showdown",
    "image": "https://media.rawg.io/media/games/929/929a78693f607a3332ecb89fe7ffaf06.jpg",
    "rawgRating": 3.87,
    "rawgGenres": [
      "Action",
      "Shooter"
    ],
    "released": "2018-02-22"
  },
  "metro-exodus": {
    "rawgId": 28201,
    "rawgSlug": "metro-exodus",
    "image": "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg",
    "rawgRating": 4.17,
    "rawgGenres": [
      "Action",
      "Shooter"
    ],
    "released": "2019-02-13"
  },
  "titanfall-2": {
    "rawgId": 923,
    "rawgSlug": "titanfall-2",
    "image": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg",
    "rawgRating": 4.31,
    "rawgGenres": [
      "Action",
      "Shooter"
    ],
    "released": "2016-10-28"
  },
  "borderlands-3": {
    "rawgId": 58617,
    "rawgSlug": "borderlands-3",
    "image": "https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg",
    "rawgRating": 3.87,
    "rawgGenres": [
      "Action",
      "Shooter",
      "Adventure",
      "RPG"
    ],
    "released": "2019-09-13"
  },
  "deltarune": {
    "rawgId": 667350,
    "rawgSlug": "deltarune",
    "image": "https://media.rawg.io/media/games/7a9/7a907fb5e158c8dc34e783d9c22674c3.jpg",
    "rawgRating": 4.35,
    "rawgGenres": [
      "Adventure",
      "RPG"
    ],
    "released": "2018-10-30"
  },
  "cocoon": {
    "rawgId": 801623,
    "rawgSlug": "cocoon-2",
    "image": "https://media.rawg.io/media/games/153/153e8d78ac19e959214dadefb8c27310.jpg",
    "rawgRating": 4.37,
    "rawgGenres": [
      "Indie",
      "Adventure",
      "Puzzle"
    ],
    "released": "2023-09-29"
  },
  "chicory": {
    "rawgId": 364990,
    "rawgSlug": "chicory-a-colorful-tale",
    "image": "https://media.rawg.io/media/games/710/71095dec34962a167121a9d67838818f.jpg",
    "rawgRating": 3.92,
    "rawgGenres": [
      "Indie",
      "Adventure",
      "RPG"
    ],
    "released": "2021-06-10"
  },
  "neon-white": {
    "rawgId": 558980,
    "rawgSlug": "neon-white",
    "image": "https://media.rawg.io/media/games/a12/a120fc7faed7666f8c320a755137e316.jpg",
    "rawgRating": 4.34,
    "rawgGenres": [
      "Action",
      "Shooter",
      "Adventure",
      "Indie"
    ],
    "released": "2022-06-16"
  },
  "pizza-tower": {
    "rawgId": 914795,
    "rawgSlug": "pizza-tower",
    "image": "https://media.rawg.io/media/games/2d0/2d02bcfc07f4b5ed8623599ff999ee91.jpg",
    "rawgRating": 4.17,
    "rawgGenres": [
      "Action",
      "Indie"
    ],
    "released": "2023-01-26"
  },
  "signalis": {
    "rawgId": 424978,
    "rawgSlug": "signalis",
    "image": "https://media.rawg.io/media/games/480/480295ba922318bb052d169174ec88aa.jpg",
    "rawgRating": 4.35,
    "rawgGenres": [
      "Action",
      "Adventure",
      "Indie"
    ],
    "released": "2022-10-27"
  },
  "pentiment": {
    "rawgId": 801567,
    "rawgSlug": "pentiment",
    "image": "https://media.rawg.io/media/games/f1d/f1d25c007b9b45c98b57ff9ebbca9692.jpg",
    "rawgRating": 4.25,
    "rawgGenres": [
      "Adventure",
      "Casual"
    ],
    "released": "2022-11-14"
  },
  "astroneer": {
    "rawgId": 11460,
    "rawgSlug": "astroneer",
    "image": "https://media.rawg.io/media/games/02f/02f775a806c6cd64c28d5aeca928dc76.jpg",
    "rawgRating": 3.78,
    "rawgGenres": [
      "Adventure",
      "Indie"
    ],
    "released": "2019-02-06"
  },
  "core-keeper": {
    "rawgId": 616688,
    "rawgSlug": "core-keeper",
    "image": "https://media.rawg.io/media/games/8d9/8d980d350e5b4661bba3a15afa7b04da.jpg",
    "rawgRating": 3.94,
    "rawgGenres": [
      "Action",
      "Adventure",
      "RPG",
      "Casual",
      "Indie"
    ],
    "released": "2024-08-26"
  },
  "raft": {
    "rawgId": 46301,
    "rawgSlug": "raft",
    "image": "https://media.rawg.io/media/games/6b2/6b253d2d39fc05b2368e5e78bb4abffc.jpg",
    "rawgRating": 3.89,
    "rawgGenres": [
      "Adventure"
    ],
    "released": "2022-06-20"
  },
  "a-plague-tale-requiem": {
    "rawgId": 616697,
    "rawgSlug": "a-plague-tale-requiem",
    "image": "https://media.rawg.io/media/games/cd0/cd074f3f6045297cda9ad077273c09b6.jpg",
    "rawgRating": 4.29,
    "rawgGenres": [
      "Action",
      "Adventure"
    ],
    "released": "2022-10-17"
  },
  "little-nightmares-2": {
    "rawgId": 580495,
    "rawgSlug": "little-nightmares-2",
    "image": "https://media.rawg.io/media/screenshots/7ec/7ecef091fe06c961b963b2784d71bc8f.jpg",
    "rawgRating": 0,
    "rawgGenres": [
      "Action"
    ],
    "released": "2021-03-31"
  },
  "kena-bridge-of-spirits": {
    "rawgId": 452635,
    "rawgSlug": "kena-bridge-of-spirits",
    "image": "https://media.rawg.io/media/games/91d/91ddeef8d5ebee7f21faa89efa0f2201.jpg",
    "rawgRating": 3.97,
    "rawgGenres": [
      "Action",
      "Shooter",
      "Adventure",
      "Strategy",
      "Indie"
    ],
    "released": "2021-09-21"
  },
  "against-the-storm": {
    "rawgId": 494484,
    "rawgSlug": "against-the-storm",
    "image": "https://media.rawg.io/media/screenshots/c7d/c7df14c2f6efd2bb035aa89f7c7ca30a.jpg",
    "rawgRating": 4.27,
    "rawgGenres": [
      "Strategy",
      "Simulation"
    ],
    "released": "2023-12-08"
  },
  "terra-nil": {
    "rawgId": 614952,
    "rawgSlug": "terra-nil",
    "image": "https://media.rawg.io/media/screenshots/91d/91d1068d4c8e55019375562ada13a619.jpg",
    "rawgRating": 3.78,
    "rawgGenres": [
      "Strategy",
      "Simulation",
      "Casual",
      "Indie"
    ],
    "released": "2023-03-28"
  },
  "wukong": {
    "rawgId": 856438,
    "rawgSlug": "wukong",
    "image": "https://media.rawg.io/media/screenshots/b74/b744e79a357677cfe6d62cbca1343204.jpg",
    "rawgRating": 0,
    "rawgGenres": [
      "Platformer"
    ],
    "released": "2022-09-25"
  }
};
