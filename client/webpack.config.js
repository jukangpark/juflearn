// npm i -D html-webpack-plugin clean-webpack-plugin

/*
    루트 폴더에 webpack.config.js 생성
    mode: 개발, 프로덕션 모드 확인
    devtool: 모드에 따라 SourceMap 확인 여부
    entry: 시작점 경로를 지정하는 옵션, 해당 파일부터 필요한 모듈 로딩 및 하나의 파일로 묶기
    output: webpack이 번들링 결과물을 위치할 경로 및 이름
    devServer: 실시간으로 개발 모드로 개발하는 중 변경사항이 프로젝트에 반영
    resolve: 배열 안 확장자에 따라서 처리
    module: loader 설정 / babel-loader, ts-loader 등
    plugins: 부가 기능을 할 플러그인 설정
    CleanWebpackPlugIn: 번들링을 할 때마다 이전 번들링 결과를 제거
    ProvidePlugin: 자주 사용되는 모듈을 미리 등록하여 매번 작성하지 않게 하는 플러그인
    HtmlWebpackPlugin: HTML 파일에 번들링 된 자바스크립트 파일을 삽입해주고 이 플러그인으로 빌드하면 HTML 파일로 아웃풋에 생성됩니다
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const prod = argv.mode === "production";

  return {
    mode: prod ? "production" : "development",
    // 웹팩을 실행하여 여러 모듈을 하나의 번들링 파일로 만들 때
    // 자바스크립트에서 에러가 발생하면 브라우저의 콘솔에는 번들링된
    // 하나의 파일 첫째줄에서 에러가 떴다고 알려주기 때문에
    // 어떤 모듈의 몇 번째 줄에서 에러가 떴는지 정확히 알기 쉽지 않다.
    // 쉽게 에러를 트래킹 하기 위해서 웹팩에서는 source.map 이라는 모듈을 사용한다.

    // eval-source-map,
    // eval-cheap-source-map,
    // inline-source-map
    // 을 자주사용하며, 공식 사이트에서는 eval-change-source-map 을 권장한다.

    // production 모드에서는 source map 을 설정하지 않거나, hidden-source-map 을 자주 사용한다.
    // hidden-source-map -> source-map 과 동일하지만, 번들에 참조 주석을 추가하지 않습니다.
    // 오류 보고서의 오류 스택 추적에만 소스맵을 매핑하고, 브라우저 개발 도구에는 소스맵을 노출하지 않는 경우에 유용하다.
    devtool: prod ? "hidden-source-map" : "eval-cheap-module-source-map",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].js",
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true,
      proxy: {
        "/user/*": {
          target: "http://localhost:9000",
        },
      },
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader", "ts-loader"],
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify: prod
          ? {
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true, // 주석 제거
            }
          : false,
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
