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
    devtool: prod ? "hidden-source-map" : "eval",
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "[name].js",
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
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
        minify:
          process.env.NODE_ENV === "production"
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
