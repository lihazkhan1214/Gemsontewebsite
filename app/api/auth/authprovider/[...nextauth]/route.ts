import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import Healthcare from "@/models/Healthcare";
import bcrypt from "bcryptjs";

// Removed the 'role' from the Session and JWT declarations
declare module "next-auth" {
  interface Session {
    healthcare: {};
  }
}

declare module "next-auth/jwt" {
  interface JWT {}
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    // Email & Password
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        await connect();

        // Find user with the email
        const healthcare = await Healthcare.findOne({
          email: credentials?.email,
        });

        // Email Not found
        if (!healthcare) {
          throw new Error("Email is not registered");
        }

        // Check hashed password with DB hashed password
        const isPasswordCorrect = await bcrypt.compare(
          credentials!.password,
          healthcare.password
        );

        // Incorrect password
        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }

        return healthcare;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Adjusted the session callback to remove 'role'
      return session;
    },
    async jwt({ token }) {
      // Removed role setting in the jwt callback
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  }
});

export { handler as GET, handler as POST };
