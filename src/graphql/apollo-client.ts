import { ApolloClient, InMemoryCache } from "@apollo/client";

// ApolloClient 인스턴스를 생성한다.
// 이 인스턴스는 URI 로 GraphQL 서버와 통신합니다.
const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

export default client;

/*
  @apollo/server: Apollo Server의 주 라이브러리로, GraphQL 서버를 생성하고 운영하는데 사용됩니다.
  @as-integrations/next: Next.js와 함께 사용하기 위한 Apollo Server의 통합 모듈입니다..
  graphql: GraphQL 언어로 API를 생성하고 사용하는 데 필요한 주 라이브러리입니다.
  apollo-server-core: GraphQL 서버를 단순하고 유연하게 생성하고 관리하는 데 사용됩니다.
  @apollo/client: 클라이언트에서 GraphQL 요청 및 상태를 처리하는 데 사용되는 라이브러리입니다.
  graphql-tag: JavaScript에서 GraphQL 쿼리를 생성하고 조작하는 데 사용되는 라이브러리입니다.
*/
