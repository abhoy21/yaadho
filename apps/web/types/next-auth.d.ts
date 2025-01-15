import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    email?: string;
    username?: string;
  }

  interface Session {
    user: User & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: number;
    username?: string;
    email?: string;
  }
}
