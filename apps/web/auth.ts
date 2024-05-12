import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@repo/database";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
});
