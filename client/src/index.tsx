// import React from "react"; // 사용자 인터페이스를 구축하기위한 js 라이브러리
import ReactDOM from "react-dom/client"; // 리엑트를 DOM 과 연결
import { Provider } from "react-redux";
// This package serves as the entry point to the DOM and server renderers for React.
// It is intended to be paired with the generic React package, which is shipped as react to npm.
import App from "./App";
import store from "./redux/store";

// #npm
// 리엑트에서 TS 를 사용하기 위해 필요한 패키지들
// npm install -D typescript @types/node @types/react @types/react-dom ts-loader
// ts-loader : ts 로 작성된 코드가 js로 변환하개 해주는 loader
// tsc --init : tsconfig.json (생성해줌) -> TS 코드를 원하는 JS 코드로 컴파일 하려면 (tsconfig.json) 이 필요함.

// npx typescript --init 을 하면 타입스크립트 설정 파일을 생성할 수 있음.

/* 
  VScode는 tsconfig.json을 참고해서 타입스크립트 문법을 검사한다.
  뿐만 아니라 웹팩에서 설정한 ts-loader가 이 파일을 참고해서 트랜스파일 작업을 하기 때문에 tsconfig.json 파일을 먼저 생성 해야한다.
*/

// npm i -D webpack webpack-cli webpack-dev-server
// webpack : 번들 작업하는 웹팩 코어
// webpack-cli : 웹팩 터미널 도구, 웹팩 커멘드라인에서 사용
// webpack-dev-server : 웹팩을 메로리 상에 빌드하여 개발 서버를 구동

// yarn add -D babel-loader @babel/core
// yarn add -D @babel/preset-env @babel/preset-react @babel/preset-typescript

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/* 
  React 18 shipped March 29th, 2022. 
  ReactDOM.render has been deprecated in React 18 and currently issues a warning and runs in a compatible mode.
*/
