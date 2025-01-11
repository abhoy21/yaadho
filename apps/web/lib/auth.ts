import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { generatePassword } from "./generate-password";
import { prisma } from "./prisma";

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
      async authorize(credentials: any): Promise<any> {
        try {
          if (!credentials.email || !credentials.password) {
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

          const validPassword = await bcrypt.compare(
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
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
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
              email: user.email,
            },
            include: {
              accounts: true,
            },
          });

          if (!existingUser && user.email) {
            const username = user.email.split("@")[0];

            const password = generatePassword({
              email: user.email,
              name: user.name as string,
            });

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await prisma.user.create({
              data: {
                email: user.email,
                username,
                password: hashedPassword,
              },
            });

            if (!newUser) {
              console.error("Failed to create new user");
              return false;
            }

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

            return true;
          }
        }
        return true;
      } catch (error) {
        console.error("SignIn error:", error);
        return false;
      }
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
