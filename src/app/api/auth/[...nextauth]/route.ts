import NextAuth from "next-auth/next";
import KaKaoProvider from "next-auth/providers/kakao";
import { User } from "next-auth";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KaKaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    // GitHubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID!,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    // }),
    // ...add more providers here
  ],
  callbacks: {
    // async jwt(isNewUser: boolean, user: User, token: Record<string, any>) {
    //   // `isNewUser`는 사용자가 처음으로 가입했을 때만 true입니다.
    //   if (isNewUser) {
    //     // token.isNewUser = true;
    //     console.log("isNewUser", user);
    //     console.log("token", token);
    //   }
    //   return token;
    // },
    async signIn({ user }: { user: User }): Promise<string | boolean> {
      const { name, email, image } = user;

      const userData = {
        name, // 필수
        email, //선택
        image, // 선택
      };

      return true;
    },
  },
};

const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST };

// All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.
// Next.js 13.2 introduced Route Handlers, the preferred way to handle REST-like requests in App Router (app/).
// You can initialize NextAuth.js with a Route Handler too, very similar to API Routes.

// Technically, in a Route Handler, the api/ prefix is not necessary, but we decided to keep it required for an easier migration.
