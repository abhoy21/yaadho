import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare, hash } from "bcrypt";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { generatePassword } from "./generate-password";
import { prisma } from "./prisma";

type AuthorizeResponse = {
  id: number;
  email: string;
  username: string;
} | null;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  debug: true,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials): Promise<AuthorizeResponse> {
        try {
          if (!credentials?.email || !credentials.password) {
            throw new Error("Invalid credentials");
          }

          const existingUser = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!existingUser) {
            throw new Error("No user found with that email");
          }

          const validPassword = await compare(
            credentials.password,
            existingUser.password,
          );

          if (!validPassword) {
            throw new Error("Incorrect password");
          }

          return {
            id: existingUser.id,
            email: existingUser.email,
            username: existingUser.username,
          };
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error("Authentication failed");
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = Number(user.id);
        token.username = user.username;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.userId;
        session.user.username = token.username;
      }
      return session;
    },

    async signIn({ user, account }) {
      try {
        if (account?.provider === "github" || account?.provider === "google") {
          const existingUser = await prisma.user.findUnique({
            where: {
              email: user.email ?? "",
            },
            include: {
              accounts: true,
            },
          });

          if (!existingUser && user.email) {
            const username = user.email.split("@")[0];

            const password = generatePassword({
              email: user.email,
              name: user.name ?? username,
            });

            const hashedPassword = await hash(password, 10);

            const newUser = await prisma.user.create({
              data: {
                email: user.email,
                username,
                password: hashedPassword,
              },
              select: {
                id: true,
                email: true,
                username: true,
              },
            });

            await prisma.account.create({
              data: {
                userId: newUser.id,
                type: account.type,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                access_token: account.access_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
              },
            });

            return true;
          }

          if (existingUser) {
            const existingProviderAccount = existingUser.accounts.find(
              (acc) => acc.provider === account.provider,
            );

            if (!existingProviderAccount) {
              await prisma.account.create({
                data: {
                  userId: existingUser.id,
                  type: account.type,
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  access_token: account.access_token,
                  expires_at: account.expires_at,
                  token_type: account.token_type,
                  scope: account.scope,
                  id_token: account.id_token,
                },
              });
            }
          }
        }
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET ?? "",
};
