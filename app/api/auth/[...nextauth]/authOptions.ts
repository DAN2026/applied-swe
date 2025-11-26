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
  ],
  session: {
    maxAge: 60 * 60
  },
  callbacks: {
    async signIn({user, account}){
      const existingUser = await prisma.user.findUnique({
        where: {Email: user.email!}
      })
      if (!existingUser){
        user.needsOnboarding = true
        return true
      }
      user.needsOnboarding = false;
      user.id = existingUser.User_ID;
      user.name = existingUser.Username;
      user.email = existingUser.Email;
      user.role = existingUser.Role;
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
          where: {Email: token.email}
        })
        if (userCheck){
          token.id = userCheck.User_ID
          token.name = userCheck.Username
          token.email = userCheck.Email
          token.role = userCheck.Role
          token.needsOnboarding = false;
        }
      }
      return token;
      
    }
  }

}