import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { createGuest, getGuest } from "./data-service";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.NEXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_GITHUB_CLIENT_SECRET,
    }),
  ],
  // setup callbacks that handle authorization
  callbacks: {
    authorized({ auth, request }) {
      // Return true if authorized, false if not (will redirect to login)
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      try {
        // console.log("Sing in attempt for: ", user.email);

        // check the user exists
        const existingGuest = await getGuest(user.email);
        // console.log("Existing guest: ", existingGuest);

        // if the user doesn't exist, then create
        if (!existingGuest) {
          console.log("Creating new guest for: ", user.email);
          try {
            await createGuest({
              email: user.email,
              fullName: user.name,
            });
            console.log("Guest created successfully");
          } catch (error) {
            console.error("Failed to create guest: ", error);
            throw error;
          }
        }
        return true;
      } catch (error) {
        console.error("Sign in error: ", error);
        return false;
      }
    },

    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
