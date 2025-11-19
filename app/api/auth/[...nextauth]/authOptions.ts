import prisma from "@/lib/prisma"
import {NextAuthOptions} from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"

export const authOptions : NextAuthOptions = {
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID ?? '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
  }),
  Credentials({
  name: "Credentials",
  credentials: {},
  async authorize(credentials?: Record<string, string>) {
    if (!credentials?.email || !credentials?.password) return null;
    const user = await prisma.user.findUnique({ where: { email: credentials.email } });
    if (!user) return null;

    const valid = await bcrypt.compare(credentials.password, user.password!);
    if (!valid) return null;

    return {
      id: user.user_id,
      name: user.username,
      email: user.email,
      role: user.role,
      needsOnboarding: false
    };
  }
})],
  session: {
    maxAge: 60 * 60
  },
  callbacks: {
    async signIn({user, account}){
      if (account?.provider === "credentials"){
        return true;
      }
      const existingUser = await prisma.user.findUnique({
        where: {email: user.email!}
      })
      if (!existingUser){
        user.needsOnboarding = true
        return true
      }
      user.needsOnboarding = false;
      user.id = existingUser.user_id;
      user.name = existingUser.username;
      user.email = existingUser.email;
      user.role = existingUser.role;
      return true;
    },

    async session({ session, token }){
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.role = token.role;
      session.user.needsOnboarding = token.needsOnboarding;
      return session
    },

    async jwt({token, user, trigger}){
      
      if (user) {
        token.id = user.id as number
        token.name = user.name
        token.email = user.email
        token.role = user.role
        token.needsOnboarding = user.needsOnboarding
      }
      if (trigger == "update"){
        const userCheck = await prisma.user.findUnique({
          where: {email: token.email}
        })
        if (userCheck){
          token.id = userCheck.user_id
          token.name = userCheck.username
          token.email = userCheck.email
          token.role = userCheck.role
          token.needsOnboarding = false;
        }
      }
      return token;
      
    }
  }

}