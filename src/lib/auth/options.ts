import { PrismaAdapter } from "@auth/prisma-adapter";
// import { Role } from "@prisma/client";
import { randomUUID } from "crypto";
import NextAuth, { AuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { sendMagicLinkEmail } from "../email/mailer";
import { prisma } from "../prisma";
import { User } from "@prisma/client";
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
        session.user.name = dbUser.name ?? "";
        session.user.last_name = dbUser.last_name ?? "";
        session.user.onboarded = dbUser.onboarded ?? false;
      }

      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async signIn({ user, account, profile, email, credentials }) {
      const userExist = await prisma.user.findUnique({
        where: { email: `${user.email}`.toLowerCase() },
      });

      if (userExist) {
        // logsnag.track({
        //   channel: "sweepverse",
        //   event: "Sign In",
        //   user_id: userExist.id,
        //   icon: "🔐",
        //   notify: true,
        //   tags: {
        //     email: `${userExist.email}`,
        //     role: `${userExist.role}`,
        //   },
        // })
        return true;
      } else {
        if (IS_BETA) {
          return "/auth/sign-in?error=Application is currently in private beta. Please try again later.";
        } else {
          return true;
        }
      }
    },
  },
  providers: [
    EmailProvider({
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
        token,
      }) {
        // Check if the user exists
        const user = await prisma.user.findUnique({ where: { email } });

        // if(user && IS_BETA){
        //   await sendMagicLinkEmail(email, url);
        // }

        if (IS_BETA) {
          if (user) {
            await sendMagicLinkEmail(email, url);
          }
        } else {
          await sendMagicLinkEmail(email, url);
        }
      },
      async generateVerificationToken() {
        return "magic_link_" + randomUUID();
      },
    }),
    GoogleProvider({
      clientId: `${process.env.GOOGLE_CLIENT}`,
      clientSecret: `${process.env.GOOGLE_SECRET}`,
      allowDangerousEmailAccountLinking: true,
    }),
  ],

  adapter: PrismaAdapter(prisma),
} as AuthOptions;

export default NextAuth(authOptions);
