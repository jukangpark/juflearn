import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Providers from "@/Providers";
import Head from "next/head";
import Script from "next/script";
import * as gtag from "@libs/gtag";

/** 
  Inter 는 구글 폰트에서 제공하는 폰트 중 하나입니다.
  Inter 는 next/font/google 에서 제공하는 함수를 통해 사용할 수 있습니다.
  아래 코드에서는 Inter 폰트를 latin 서브셋으로 사용하도록 설정했습니다.
  latin 서브셋은 영어와 같은 라틴어를 사용하는 언어를 위한 서브셋입니다.

  inter.className 을 body 요소의 클래스로 지정함으로써
  Inter 폰트를 사용하도록 설정했습니다.
*/
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code King Academy",
  description: "Code Like a KING",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Note! If you do not add suppressHydrationWarning to your <html> you will get warnings because next-themes updates that element. This property only applies one level deep, so it won't block hydration warnings on other elements.
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

/*
What causes NextJS Warning: "Extra attributes from the server: data-new-gr-c-s-check-loaded... "
NextJS 경고 "서버에서 추가 속성: data-new-gr-c-s-check-loaded..."의 원인은 일반적으로 브라우저에서 UI와 상호 작용할 때 코드와 함께 이러한 추가 속성을 전달하는 확장 프로그램 때문입니다. 
이로 인해 서버에서 렌더링된 내용과 클라이언트에서 렌더링된 내용이 일치하지 않게 됩니다. 
따라서, Grammarly, ColorZilla, LanguageTool과 같은 확장 프로그램이 이 경고의 원인이 됩니다. 
이를 해결하기 위해서는, 어떤 확장 프로그램이 이러한 속성을 전달하는지 찾아서 해당 확장 프로그램을 비활성화하거나 설정하여 개발에 사용하는 포트에서 실행되지 않도록 설정해야 합니다. 
이는 경고를 해결하는 간단한 방법이며, 개발 중에는 확장 프로그램 사용을 피하는 것이 권장됩니다.
*/
