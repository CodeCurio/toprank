import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcryptjs from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

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

        return null; // Auth failed
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
