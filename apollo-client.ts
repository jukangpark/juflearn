import { ApolloClient, InMemoryCache } from "@apollo/client";

// 예시 uri
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export default client;
