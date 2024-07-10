import { PrismaAdapter } from "@auth/prisma-adapter";
// import { Role } from "@prisma/client";
import { User } from "@prisma/client";
import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "../prisma";
const IS_BETA = false;
export const authOptions = {
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/auth/sign-in",
    signOut: "/auth/sign-out",
    verifyRequest: "/auth/magic-link-sent",
    newUser: "/auth/onboarding/account",
    error: "/auth/error",
  },
  callbacks: {
    async session({ session, token, user }) {
      const dbUser = await prisma.user.findFirst({ where: { id: user.id } });
      if (dbUser) {
        // Ensure session.user exists
        if (!session.user) session.user = {} as User;

        // Assign properties to session.user according to the user in the database
        session.user.id = dbUser.id;
        session.user.first_name = dbUser.first_name ?? "";
        session.user.last_name = dbUser.last_name ?? "";
        session.user.onboarded = dbUser.onboarded ?? false;
      }

      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log("[/api/auth/signin/] signing in user: ", user);
      const userExist = await prisma.user.findUnique({
        where: { email: `${user.email}`.toLowerCase() },
      });

      if (userExist) {
        return true;
      } else {
        return true;
      }
    },
  },
  providers: [
    // EmailProvider({
    //   async sendVerificationRequest({
    //     identifier: email,
    //     url,
    //     provider: { server, from },
    //     token,
    //   }) {
    //     // Check if the user exists
    //     const user = await prisma.user.findUnique({ where: { email } });

    //     // if(user && IS_BETA){
    //     //   await sendMagicLinkEmail(email, url);
    //     // }

    //     if (IS_BETA) {
    //       if (user) {
    //         await sendMagicLinkEmail(email, url);
    //       }
    //     } else {
    //       await sendMagicLinkEmail(email, url);
    //     }
    //   },
    //   async generateVerificationToken() {
    //     return "magic_link_" + randomUUID();
    //   },
    // }),
    // GoogleProvider({
    //   clientId: `${process.env.GOOGLE_CLIENT}`,
    //   clientSecret: `${process.env.GOOGLE_SECRET}`,
    //   allowDangerousEmailAccountLinking: true,
    // }),
    GitHubProvider({
      clientId: `${process.env.GITHUB_CLIENT_ID}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
      profile(profile) {
        return {
          id: profile.id.toString(),
          first_name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
} as AuthOptions;

export default NextAuth(authOptions);
