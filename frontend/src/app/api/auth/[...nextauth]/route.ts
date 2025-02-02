// export { GET, POST } from '@/auth';

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Backend Auth",
      credentials: {},
      async authorize(credentials, req) {
        try {
          // Fetch session from NestJS backend
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/session`, {
            method: "GET",
            credentials: "include", // Ensure cookies are sent
            headers: {
              "Content-Type": "application/json",
              //@ts-ignore
              Cookie: req?.headers?.cookie || "", // Forward cookies
            },
          });

          if (!res.ok) return null;
          const user = await res.json();
          return user; // Return session data
        } catch (error) {
          console.error("Auth Error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }: any) {
      session.user = token.user; // Attach user from JWT
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};
//@ts-ignore
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
