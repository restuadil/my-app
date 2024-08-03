import { login } from "@/lib/firebase/service"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, // need to be changed later
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }
        const user: any = await login(email)
        if (user) {
          const confirmPassword = bcrypt.compareSync(password, user.password)
          if (confirmPassword) {
            return user
          } else {
            return null
          }
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }: any) {
      if (account?.provider === "credentials") {
        token.email = user?.email
        token.role = user?.role
      }
      return token
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email
      }
      if ("role" in token) {
        session.user.role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
