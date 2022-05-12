import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import prisma from '../../../lib/prisma';

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: user.email
        }
      });
      session.user.id = dbUser.id;
      return session
    },
    async redirect({ baseUrl }) {
      return baseUrl
    }
  },
  adapter: PrismaAdapter(prisma),
};