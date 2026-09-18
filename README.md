# DaEun Cheong — Research Portfolio

React(Vite)로 만든 포트폴리오 사이트입니다.

## 파일 구성

- `src/data/content.js`: **가장 먼저 볼 파일.** 이름, 소개, 연구(Selected Research), Research Direction, 논문, Side Projects, 경력, 스킬 등 사이트의 모든 텍스트/데이터가 여기 한 곳에 있습니다.
- `src/components/`: 화면을 구성하는 React 컴포넌트 (헤더, 히어로, 타임라인, 논문, 소개, 연락처 등)
- `src/index.css`: 전체 스타일 (색상, 타이포그래피, 반응형)
- `.github/workflows/deploy.yml`: GitHub Pages 배포 워크플로 (빌드 후 배포)
- `.nojekyll` (public 폴더 안): GitHub Pages의 Jekyll 처리 비활성화

## 로컬에서 실행

```bash
npm install
npm run dev       # 개발 서버, http://localhost:5173
npm run build     # dist/ 폴더에 정적 빌드 생성
npm run preview   # 빌드 결과 미리보기
```

## 콘텐츠 수정하기

거의 모든 수정은 `src/data/content.js` 하나만 고치면 됩니다.

- **연구 항목 추가·수정**: `researchItems` 배열의 객체를 고치면 됩니다. 필드는 기간(`period`), 상태(`status`), 태그, 제목, 한 줄 요약(`summary`), 그리고 펼쳤을 때 보이는 Research Context(`context`)·Research Question(`question`)·Method(`method`)·Research Contribution(`contribution`)·Architecture/Concept 다이어그램(`diagram` 또는 `interactionMap`)·Publication 링크(`links`)입니다. Side Projects와는 의도적으로 다른 필드 구성입니다.
- **Side Projects 추가·수정**: `sideProjects.featured`(대표 프로젝트, 큰 카드 — Problem/What I Built/Stack/Demo/GitHub)와 `sideProjects.other`(그 외 프로젝트, 한 줄짜리 compact 리스트)로 나뉩니다. Digital Wardrobe의 `problem`/`whatBuilt`는 현재 DRAFT 문구이니 실제 내용으로 교체해주세요.
- **영상 추가**: 항목의 `video` 필드에 YouTube 또는 Vimeo 링크(일반 공유/워치 링크)를 넣으면 자동으로 임베드됩니다. 비워두면 영상 영역이 아예 표시되지 않습니다.
- **LinkedIn 링크**: `profile.linkedinUrl`이 비어 있으면 Hero의 LinkedIn 버튼이 `#`로 연결됩니다. 실제 프로필 URL을 넣어주세요.

## 배포

`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 자동으로 `npm run build`를 실행하고 결과를 GitHub Pages에 배포합니다. 저장소 Settings → Pages에서 배포 소스가 "GitHub Actions"로 설정되어 있는지 확인해주세요.

이 사이트는 프로젝트 페이지(`https://gracecheong.github.io/web/`)로 배포되는 것을 기준으로 `vite.config.js`의 `base: '/web/'`가 설정되어 있습니다. 저장소 이름을 바꾸거나 커스텀 도메인을 연결하면 이 값도 함께 수정해야 합니다.
