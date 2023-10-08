"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { RecoilRoot } from "recoil";

interface RecoilApolloWrapperProps {
  children: React.ReactNode;
}

// 일반적으로 RecoilRoot 가 ApolloProvider 더 보다 더 상위에 있는 것이 좋음
const RecoilApolloWrapper = ({ children }: RecoilApolloWrapperProps) => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </RecoilRoot>
  );
};

export default RecoilApolloWrapper;
