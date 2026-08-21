# GameTaste Finder

정적 게임 추천 사이트. HTML, CSS, Vanilla JS만 사용하고 백엔드나 DB는 없습니다.

## 구조

```txt
/
├─ index.html, about.html, contact.html, privacy.html, copyright.html
├─ en/              영문 버전 (동일 구성)
├─ games/           게임별 상세 페이지
├─ css/style.css
├─ js/              app.js, games.js, game-cover.js, game-detail.js, hero-terrain.js
├─ functions/       Cloudflare Pages Functions (국가별 /en 리다이렉트)
├─ scripts/         게임 카드·이미지 생성용 빌드 스크립트 (node로 직접 실행)
├─ sitemap.xml, robots.txt
```

## 배포 (Cloudflare Pages)

1. 저장소를 GitHub에 올리고 Cloudflare Pages에서 연결합니다.
2. Framework preset: `None`, Build command: 없음, Build output directory: `/`
3. 배포 후 각 HTML의 `canonical`, `og:url`을 실제 도메인으로 맞춥니다.
