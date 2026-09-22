# DaEun Cheong — Research Portfolio

React(Vite) 기반 연구 포트폴리오입니다.

## 현재 섹션 순서

1. Hero & Contact
2. Education & Experience
3. Research Direction
4. Publications
5. Projects
6. Side Projects

## 파일 구성

- `src/data/content.js`: 프로필, Research Direction, Publications, Projects, Side Projects, 학력/경력, 스킬 데이터
- `src/components/Publications.jsx`: 논문 카드. DOI 제목 링크, 저자, 기관, abstract, main figure, video, folding 지원
- `src/components/Projects.jsx`: 프로젝트 카드. 설명, 역할, 결과 이미지, video, folding 지원
- `src/components/SideProjects.jsx`: 간결한 엔지니어링/사이드 프로젝트 목록
- `src/components/About.jsx`: Education & Experience
- `src/index.css`: 전체 스타일 및 반응형 레이아웃
- `.github/workflows/deploy.yml`: GitHub Pages 자동 배포

## 로컬 실행

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 콘텐츠 수정

대부분의 콘텐츠는 `src/data/content.js`에서 수정합니다. 영어/한국어 텍스트와 캡션도 이 파일 하나에서 함께 관리합니다.

### 다국어 텍스트 규칙

`src/data/content.js`는 문자열 대신 아래 형태를 사용할 수 있습니다.

- `given`: 직접 확정한 원문/문구
- `translated`: 번역문

렌더링 시 우선순위는 다음과 같습니다.

1. 현재 언어의 `given`
2. 현재 언어의 `translated`
3. 영어 `given`
4. 영어 `translated`

즉, 같은 언어에 `given` 텍스트가 있으면 `translated`보다 먼저 선택됩니다.

### Publications

`publications` 배열에 최신 논문부터 추가합니다.

- `year`: 화면에 표시할 출판 시점
- `title`: 논문 제목
- `authors`: 저자 목록
- `institutions`: 기관 목록
- `venue`: 저널/학회 정보
- `doiUrl`: 논문 제목 및 DOI 링크
- `abstract`: 포트폴리오용 abstract/summary
- `mainFigure`: 대표 figure 이미지 경로 또는 URL. 비우면 이미지 영역을 숨깁니다.
- `video`: YouTube/Vimeo URL. 비우면 영상 영역을 숨깁니다.

논문 카드는 접기/펼치기를 지원합니다.

### Projects

`projects` 배열에 최신 프로젝트부터 추가합니다.

- `period`, `status`
- `title`
- `tags`
- `description`
- `role`
- `images`: 결과 이미지 배열
- `video`: YouTube/Vimeo URL
- `githubUrl`
- `relatedPublication`

Publications와 동일한 카드 계열 UI와 folding 구조를 사용합니다.

### Side Projects

`sideProjects`는 간결한 보조 프로젝트 목록입니다. 최신 항목부터 배치합니다.

### Education & Experience

`educationTimeline`을 최신순으로 유지합니다.

## 배포

`main` 브랜치에 push/merge되면 GitHub Actions가 `npm run build`를 실행하고 GitHub Pages에 배포합니다.

GitHub Pages 프로젝트 경로는 `https://gracecheong.github.io/web/`이며, `vite.config.js`의 `base: '/web/'` 설정을 사용합니다.
