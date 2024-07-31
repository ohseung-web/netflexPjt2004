### 24/07/30
## 컴포넌트 생성 src/components
* `Header.js`
* `HeroBanner.js` //메인 페이지 첫번째 큰 영화
* `Row.js` //메인페이지 하단 영화 썸네일 등 묶어주는 가로 행
* `MovieCard.js` //각 영화 포스터, 이미지, 제목, 설명 포함하는 팝업
* `Footer.js`
* `export default function 컴포넌트명(){return(<></>)}` 기본구성완료
## 컴포넌트 불러오기 App.js
* `import Header from './components/Header';`
* `import HeroBanner from './components/HeroBanner';`
* `import Row from './components/Row';`
* `import MovieCard from './components/MovieCard';`
* `import Footer from './components/Footer';`
# 리액트에서 이미지 가져오는 방법 정리
## 소규모 프로젝트에 적합한 방법
### 이미지 파일 `import`
* `import name from 'url';`
### 이미지 폴더 불러와 파일 이름 매핑
* `const name = { logo:require('url'), banner:require('url'), }`
* `<img src={name['logo']} alt="logo" />`
## 대규모 프로젝트 적합한 방법
* 이미지가 많거나 고해상도의 이미지가 필요할 때 서버 로딩 줄이고 빠른 콘텐츠 전달에 적합
### 클라우드 스토리지 또는 CDN 사용
* `const name = 'https://....png'`
* `<img src={name} alt="" />`
### JSON 파일 생성한 이미지 메타데이터 관리
* `images.json -> { "logo":{"src":"url", "alt":"logo"}, ... }`
* `import images from './images.json';`
* `function imagefunc({images}){ const {src, alt} = img[images]}; return <img src={src} alt={alt} />`

