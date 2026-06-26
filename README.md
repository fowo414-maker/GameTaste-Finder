# GameTaste Finder

정적 게임 추천 사이트입니다. HTML, CSS, Vanilla JavaScript만 사용하며 백엔드, 데이터베이스, 외부 라이브러리가 없습니다.

## 파일 구조

```txt
/
├─ index.html
├─ about.html
├─ features.html
├─ privacy.html
├─ css/
│  └─ style.css
├─ js/
│  ├─ games.js
│  └─ app.js
└─ README.md
```

## Cloudflare Pages 배포

1. 이 폴더를 GitHub 저장소에 업로드합니다.
2. Cloudflare Pages에서 `Create a project`를 선택합니다.
3. 저장소를 연결합니다.
4. Framework preset은 `None`으로 선택합니다.
5. Build command는 비워 둡니다.
6. Build output directory는 `/` 또는 비워 둡니다.
7. 배포 후 실제 도메인에 맞게 각 HTML의 `canonical`과 `og:url` 값을 수정합니다.
