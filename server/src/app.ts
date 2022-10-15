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

const PORT = process.env.PORT || 9000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT:${PORT} `);
});

// tsc -> 컴파일러를 통해 트랜스파일링을 해줘야하는데,
// node app.js

// 매번 이런 일련의 과정을 반복하면 번거러우니까,

// ts-node 를 설치
// npm i -g ts-node
// 타입스크립트 코드를 JS 로 변환하고, 실행까지 동시에 하려면 필요한 패키지

// npm i nodemon
// npm i concurrently
