import prisma from "@/lib/prisma"
import {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"
import { Role } from "@prisma/client"

export const authOptions : NextAuthOptions = {
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID ?? '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
  }),
  CredentialsProvider({
    name: "Credentials",
    credentials:{
      email: {label:"Email", type:"email",placeholder:"Email"},
      password: {label:"Password", type:"password",placeholder:"Password"}
    },
    async authorize(credentials){
      if(!credentials?.email || !credentials.password) return null;
      const user = await prisma.user.findUnique({
        where:{Email:credentials.email}
      })
      console.log("USER: ",user)
      if (!user)return null;

      const isValid = await bcrypt.compare(credentials.password, user.Password)
      if (!isValid) return null;

      return {
        id: user.User_ID,
        name: user.Username,
        email: user.Email,
        role: user.Role,
        needsOnboarding: false
      }
    }
  })
  ],
  session: {
    maxAge: 60 * 60
  },
  callbacks: {
    async signIn({user, account}){
      const existingUser = await prisma.user.findUnique({
        where: {Email: user.email!.toLowerCase()}
      })
      if (!existingUser){
        user.needsOnboarding = true
        return true
      }
      if (existingUser.Role == Role.STAFF){
        const staff = await prisma.staff.findFirst({
        where: {User_ID: existingUser.User_ID as number}
        })
        user.staffId = staff?.Staff_ID
        user.charityId = staff?.Charity_ID
      }
      if (existingUser.Role == Role.ADMIN){
        const admin = await prisma.admin.findFirst({
        where: {User_ID: existingUser.User_ID as number}
        })
        user.adminId = admin?.Admin_ID
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
      session.user.staffId = token.staffId;
      session.user.charityId = token.charityId;
      session.user.adminId = token.adminId;
      session.user.needsOnboarding = token.needsOnboarding;
      return session
    },

    async jwt({token, user, trigger}){
      
      if (user) {
        token.id = user.id as number
        token.name = user.name
        token.email = user.email
        token.role = user.role
        token.staffId = user.staffId;
        token.charityId = user.charityId;
        token.adminId = user.adminId;
        token.needsOnboarding = user.needsOnboarding
      }
      if (trigger == "update"){
        const userCheck = await prisma.user.findUnique({
          where: {Email: token.email?.toLowerCase()}
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