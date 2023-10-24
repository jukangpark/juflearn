import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";
import { MongoClient } from "mongodb";
import Course from "../server/data/Course";
// import User from "../server/data/User";

const MONGO_URI = process.env.MONGO_URI as string;

export const client = new MongoClient(MONGO_URI);

async function start() {
  try {
    await client.connect();
    console.log("Connected to MongoDB server");
  } catch (err) {
    console.error(err);
  }
}

start();

const resolvers = {
  Query: {
    hello: () => "world",
    // course: async (
    //   _source: any,
    //   { id }: { id: string },
    //   { dataSources }: any
    // ): Promise<Course | null> => {
    //   return dataSources.courses.getCourse(id);
    // },
    // user: async (
    //   _source: any,
    //   { id }: { id: string },
    //   { dataSources }: any
    // ): Promise<User | null> => {
    //   return dataSources.users.getUser(id);
    // },
    courses: async (
      _source: any,
      _args: any,
      { dataSources }: any
    ): Promise<Course[]> => {
      return dataSources.courses.getAllCourses();
    },
  },
};

const typeDefs = gql`
  type Query {
    hello: String
    # course(id): Course
    courses: [Course]
  }
  type Course {
    id: ID
    name: String
  }
  # type User {
  #   name: String
  #   email: String!
  #   image: String!
  # }
`;

const apolloServer = new ApolloServer({
  resolvers,
  typeDefs,
});

const nextHandler = startServerAndCreateNextHandler(apolloServer, {
  context: async () => ({
    dataSources: {
      courses: new Course({
        modelOrCollection: client
          .db(process.env.MONGO_DB)
          .collection("courses"),
      }),
      // users: new User({
      //   modelOrCollection: client.db("test").collection("users"),
      // }),
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
