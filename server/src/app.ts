require("dotenv").config();
// 최대한 빨리 dotenv 파일을 환경변수에 추가해준다.

const isHeroku = process.env.NODE_ENV === "production";

console.log(process.env.NODE_ENV);

import "./db";

// ts 컴파일러를 먼저 설치
// npm install -g typescript
// npm i -D typescript
// 배포를 할 때 타입스크립트 컴파일러를 설치하라고 devDependencies 에다가 추가해줍시다.

// ts -> js 로 (트랜스파일) 해줘야 실행이 가능
// tsconfig.json 을 타입스크립트 컴파일러를 이용해 만들어 줌.
// 컴파일러를 설치하면 tsc 명령어를 사용할 수 있는데,
// tsc --init 이라고 작성하면 tsconfig.json 파일이 생기게 된다.

// 전역에 설치된 패키지는 OS에 따라 설치 장소가 다르다.
// macOS의 경우
// /usr/local/lib/node_modules
// 윈도우의 경우
// c:\Users\%USERNAME%\AppData\Roaming\npm\node_modules
import express from "express";
// CommonJS 모듈을 위와같이 ES6 모듈 코드베이스로 가져오려고 하게되면,
// require(~~~); 의 구문으로 해결할 수도 있지만,
// tsconfig 의 컴파일 옵션 중 --esModuleInterop flab 의 수정을 통해 해결할 수 있습니다.
// esModuleInterop 속성이 위의 코드 처럼 true로 설정될 경우, ES6 모듈 사양을 준수하여 CommonJS 모듈을 가져올 수 있게 됩니다.

const app = express();
app.use(express.static("dist")); // build 안에 폴더에 접근할 수 있도록
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 9000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});
// __dirname 은 Node.js 에서 파일명을 제외한 절대 경로를 의미한다.
// 실제 build 된 app.js 는 build 폴더에 들어가게 될것이다.

// webpack devServer 에 historyApiFallback 설정을 true 로 줘야지만,
// 사용자가 localhost:3000/join 페이지에 접근했을 때, 서버로 요청을 보내지 않고,
// 웹팩서버에서 처리하게끔 개발해줘야함.

app.get("*", (req, res) => {
  if (isHeroku) {
    res.sendFile(__dirname + "/dist/index.html");
  }
  res.sendFile(process.cwd() + "/build/dist/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT:${PORT} `);
});

// tsc -> 컴파일러를 통해 트랜스파일링을 해줘야하는데,
// tsc 명령어를 통해 build 를 하게 되면,
// tsconfig.json 의 "outDir" : "./build", 라고 주게되면
// server 폴더에 build 폴더를 생성해주고
// 거기에 트랜스파일링이 된 app.js 에 떨어지게 됨.
// 그리고 빌드된 app.js 에서 /dist/index.html 을 찾아야 하기 때문에
// 빌드된 경로로 지정해주어야 한다.

// 매번 이런 일련의 과정을 반복하면 번거러우니까,

// ts-node 를 설치
// npm i -g ts-node
// 타입스크립트 코드를 JS 로 변환하고, 실행까지 동시에 하려면 필요한 패키지

// npm i nodemon
// npm i concurrently
