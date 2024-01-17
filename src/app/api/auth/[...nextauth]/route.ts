import { prismaClient } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import type { NextApiHandler } from "next";
import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const adapter = PrismaAdapter(prismaClient);

const authOptions: AuthOptions = {
  adapter: adapter as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

const handler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions);
export default handler;
