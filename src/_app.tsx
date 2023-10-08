"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

export default function MyApp({ children }: any) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
