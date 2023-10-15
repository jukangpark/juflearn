"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apollo-client";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
  children: React.ReactNode;
}

// 일반적으로 RecoilRoot 가 ApolloProvider 더 보다 더 상위에 있는 것이 좋음
const Providers = ({ children }: ProvidersProps) => {
  return (
    <SessionProvider>
      <RecoilRoot>
        <ThemeProvider>
          <ApolloProvider client={client}>{children}</ApolloProvider>
        </ThemeProvider>
      </RecoilRoot>
    </SessionProvider>
  );
};

export default Providers;
