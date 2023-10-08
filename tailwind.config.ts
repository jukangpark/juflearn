import type { Config } from "tailwindcss";

// content 는 Tailwind CSS 에서 사용할 css 파일 경로를 정의합니다.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

// tailwind.config.ts 파일에 정의된 theme 속성을 사용하여,
// 다크 모드와 라이트 모드에 대한 색상을 정의할 수 있다.
// color palette 도 정의 가능
