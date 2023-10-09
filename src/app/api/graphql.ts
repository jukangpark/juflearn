import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import { MongoClient } from "mongodb";
import Courses from "../server/data/Courses";

const MONGO_URI = process.env.MONGO_URI as string;

const client = new MongoClient(MONGO_URI);
client.connect();

interface Course {
  id: string;
  name: string;
}

const resolvers = {
  Query: {
    hello: () => "world",
    course: async (
      _source: any,
      { id }: { id: string },
      { dataSources }: any
    ): Promise<Course | null> => {
      return dataSources.courses.getCourses(id);
    },
  },
};

const typeDefs = gql`
  type Query {
    hello: String
    course(id: ID!): Course
  }
  type Course {
    id: ID!
    name: String!
  }
`;

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
});

const nextHandler = startServerAndCreateNextHandler(apolloServer, {
  context: async () => ({
    dataSources: {
      courses: new Courses({
        modelOrCollection: client.db("test").collection("courses"),
      }),
    },
  }),
});

export default nextHandler;

// nextHandler 는 Express.js 미들웨어 함수 이다.
// 이 함수는 GraphQL 요청을 처리하고, 다음 미들웨어 함수를 호출 하는 역할을 한다.
// nextHandler 함수는 graphqlHTTP 미들웨어 함수에서 사용되며,
// graphqlHTTP 함수는 GraphQL API 를 생성하는데 사용된다.
// http://localhost:3000/api/graphql 로 요청하면,
// GraphQL Playground 가 나오는 이유는,
// graphqlHTTP 함수는 express-graph 라이브러리에서 가져온 미들웨어 함수로,
// graphql 옵션을 사용하여, 기본값으로 playground 를 활성화 하도록 설정되어있다.
