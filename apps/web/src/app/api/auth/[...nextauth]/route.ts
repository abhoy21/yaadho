import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import { authOptions } from "../../../../lib/auth";

const handler: NextAuthOptions = NextAuth(authOptions) as NextAuthOptions;

export { handler as GET, handler as POST };
