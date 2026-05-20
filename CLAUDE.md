# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 프로젝트 개요

**개발자 웹 이력서** - HTML, JavaScript, CSS, Tailwind CSS를 활용한 반응형 포트폴리오 웹사이트

---

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어
- **커밋 메시지**: 한국어
- **문서화**: 한국어
- **변수명/함수명**: 영어 (코드 표준 준수)

---

## 프로젝트 아키텍처

### 전체 구조

```
프로젝트
├── index.html              # 메인 이력서 페이지
├── css/
│   └── custom.css         # 커스텀 스타일 (Tailwind 확장)
├── js/
│   └── script.js          # 인터랙티브 기능 (네비게이션, 다크모드 등)
├── assets/
│   └── images/            # 프로필 사진 등 리소스
├── ROADMAP.md             # 개발 로드맵
├── CLAUDE.md              # 이 파일
└── README.md              # 사용자 가이드
```

### 아키텍처 설명

**단일 페이지 애플리케이션 (SPA)**
- 모든 콘텐츠는 `index.html` 하나에 통합
- 섹션 기반 구조 (소개, 경력, 기술, 프로젝트, 연락처)
- JavaScript로 클라이언트 사이드 네비게이션 구현

**기술 스택 선택 이유**
- **HTML/CSS/JS**: 배포 간편성, 호스팅 비용 없음
- **Tailwind CSS**: 빠른 스타일링, 반응형 디자인 용이
- **Vanilla JavaScript**: 의존성 최소화, 번들 사이즈 작음

---

## 개발 명령어

### 로컬 개발
```bash
# Live Server 또는 Python으로 로컬 서버 실행
python -m http.server 8000

# 또는 VS Code Live Server 확장 사용
# (우측 하단 "Go Live" 클릭)
```

### Tailwind CSS 설정
```bash
# CDN 사용 (간단한 개발용)
<script src="https://cdn.tailwindcss.com"></script>

# 또는 npm으로 설치 (최적화된 프로덕션용)
npm install -D tailwindcss
npx tailwindcss -i ./css/input.css -o ./css/output.css --watch
```

### 코드 검증
```bash
# HTML 유효성 검사
# https://validator.w3.org/ 에서 검증

# CSS 검증
# https://jigsaw.w3.org/css-validator/ 에서 검증
```

---

## 개발 가이드

### 파일별 역할

**index.html**
- 모든 섹션의 마크업
- SEO 메타 태그
- Tailwind CSS 클래스 적용
- 접근성 (Accessibility) 고려

**js/script.js**
- 부드러운 스크롤 네비게이션
- 다크모드 토글 기능
- 모바일 메뉴 열기/닫기
- 이벤트 리스너 관리

**css/custom.css**
- Tailwind 기본 클래스로 커버 불가능한 커스텀 스타일
- 애니메이션 (keyframes)
- 글꼴 정의

### 네이밍 컨벤션

**클래스명 (Tailwind)**
```html
<!-- Tailwind 기본 클래스 우선 사용 -->
<div class="flex items-center justify-between p-4 bg-white dark:bg-gray-900">

<!-- 커스텀 클래스는 kebab-case -->
<div class="custom-gradient-header">
```

**JavaScript 함수**
```javascript
// camelCase 사용
function toggleDarkMode() { }
function scrollToSection(sectionId) { }
function initializeMenuToggle() { }
```

**CSS 변수**
```css
/* kebab-case, 색상은 의미있는 이름 사용 */
:root {
  --primary-color: #3b82f6;
  --dark-bg: #1f2937;
  --light-text: #ffffff;
}
```

### 반응형 디자인 전략

Tailwind의 반응형 접두사 사용:
```html
<!-- 모바일 우선 접근 -->
<div class="flex flex-col md:flex-row lg:grid lg:grid-cols-3">
  <!-- sm: < 640px (모바일) -->
  <!-- md: ≥ 768px (태블릿) -->
  <!-- lg: ≥ 1024px (데스크톱) -->
</div>
```

### 다크모드 구현

```html
<!-- HTML에 dark 클래스 토글 -->
<html class="dark">

<!-- Tailwind dark: 접두사 사용 -->
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
```

---

## 배포

### GitHub Pages 배포
```bash
# 저장소 settings에서 Pages 활성화
# 분기: main, 폴더: / (root)
# 자동으로 https://username.github.io/repo-name 에 배포됨
```

### 커스텀 도메인
```bash
# CNAME 파일 생성 (루트 디렉토리)
your-domain.com
```

---

## 성능 최적화 체크리스트

- [ ] 이미지 최적화 (WebP, 적절한 해상도)
- [ ] CSS/JavaScript 최소화
- [ ] 폰트 로딩 최적화 (system-ui 또는 Google Fonts)
- [ ] 캐시 전략 설정 (.htaccess 또는 GitHub Actions)
- [ ] Lighthouse 점수 확인 (90점 이상 목표)

---

## 참고 사항

- **접근성**: WCAG 2.1 AA 표준 준수 목표
- **브라우저 지원**: 최신 2개 버전 (Chrome, Firefox, Safari, Edge)
- **모바일**: iOS 12+, Android 8+
- **추가 배포**: Vercel, Netlify 등 정적 호스팅 가능

---

## ROADMAP 참고

자세한 개발 단계는 `ROADMAP.md` 파일 참조
