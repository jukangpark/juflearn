import NextAuth from "next-auth/next";
import KaKaoProvider from "next-auth/providers/kakao";
import { User } from "next-auth";
import { client } from "../../graphql";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KaKaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async createUser({ user }: { user: User }) {
      const { name, email, image, id } = user;
      const db = client.db(process.env.MONGO_DB);
      const usersCollection = db.collection("users");
      const userData = {
        name, // 필수
        email, //선택
        image, // 선택
      };

      // Check if user already exists in the database
      const existingUser = await usersCollection.findOne({ id });
      if (existingUser) {
        return existingUser;
      }

      const result = await usersCollection.insertOne(userData);
      console.log(result);
      return userData;
    },

    async signIn({ user }: { user: User }): Promise<string | boolean> {
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.
// Next.js 13.2 introduced Route Handlers, the preferred way to handle REST-like requests in App Router (app/).
// You can initialize NextAuth.js with a Route Handler too, very similar to API Routes.

// Technically, in a Route Handler, the api/ prefix is not necessary, but we decided to keep it required for an easier migration.
// 사용자가 데이터를 업데이트 할 때마다, NextAuth.js는 updateUser() 콜백을 호출합니다.

// 사용자가 최초 로그인 할 때, NextAuth.js는 createUser() 콜백을 호출합니다.
// 이때 사용자의 정보를 데이터베이스에 저장할 수 있습니다.
// 기존에 사용자가 존재하는지 확인하려면, mongodb 의 findOne() 메서드를 사용할 수 있습니다.
// 이때 인자로 주는 email 은 사용자의 이메일 주소가 아닌, 사용자의 고유한 id 입니다.
// 사용자의 고유한 id 는 user.id 로 확인할 수 있습니다.
