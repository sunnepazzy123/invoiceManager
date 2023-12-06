import NextAuth from "next-auth";
import Github from 'next-auth/providers/github';
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";

const GITHUB_CLIEND_ID = process.env.GITHUB_CLIENT_ID
const GITHUB_CLIEND_SECRET = process.env.GITHUB_CLIENT_SECRET

if(!GITHUB_CLIEND_ID && !GITHUB_CLIEND_SECRET) {
    throw new Error('Missing github oauth credential')
}

export const { handlers: { GET, POST }, auth, signIn, signOut} = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Github({
            clientId: GITHUB_CLIEND_ID,
            clientSecret: GITHUB_CLIEND_SECRET
        })
    ],
    callbacks: {
        // Usually not needed, here we are fixing a bug in nextauth
        async session({ session, user }: any) {
            if(session && user) {
                session.user.id = user.id
            }
            return session;
        }
    }
})