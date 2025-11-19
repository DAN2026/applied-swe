"use server"

import prisma from "./prisma";
import { UserType } from "@/types/user";
import bcrypt from "bcryptjs";

export async function CreateUser(user:UserType){
  try {
    const salt = 10;
    const password = await bcrypt.hash(user.password, salt)
    await prisma.user.create({
                data: {
                    username: user.username,
                    email: user.email,
                    phone: user.phone ?? null,
                    address: user.address,
                    postcode: user.postcode,
                    role: user.role,    
                    password: password,
                }
            })
    return true;
  }
  catch(err) {
    console.error("Issue creating user:",err)
    return false
  }
}