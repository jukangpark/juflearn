/** @type {import('next').NextConfig} */
const nextConfig = {
  // image: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "k.kakaocdn.net",
  //       // port: "",
  //       // pathname: "/dn/dnTa1M/*/*",
  //     },
  //   ],
  // },
  images: {
    domains: ["k.kakaocdn.net"],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
};

module.exports = nextConfig;

/*
  domains 옵션도 외부의 이미지를 사용할 수 있도록, 외부 도메인을 설정할 수 있는데,
  remotePatterns 옵션과 다르게 와일드 카드를 통한 서브 도메인을 지원하지 않고, 
  프로토콜, 경로 이름, 포트 번호 등을 타이트하게 제한하는 것이 불가능하기 때문에 
  remotePatterns 옵션을 사용하는 것을 권장하고 있다.


  https://fe-developers.kakaoent.com/2022/220714-next-image/

  Next/Image 컴포넌트의 기능

  1. 이미지 최적화
  2. lazy loading
  3. placeholder 제공
*/
