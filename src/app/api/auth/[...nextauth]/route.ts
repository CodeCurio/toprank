import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcryptjs from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          // 1. Attempt to find user in database
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (user) {
            // Compare hashed password
            const isValid = await bcryptjs.compare(credentials.password, user.password);
            if (isValid) {
              return { id: user.id, name: user.name, email: user.email };
            }
          }
        } catch (error) {
          console.error("NextAuth Database connection error:", error);
          // Return null to avoid crashing the whole process
          return null;
        }

        return null; // Auth failed
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
    error: "/admin/login", // Redirect back on error
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-build-only",
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
