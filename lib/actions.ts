"use server"

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import {getServerSession} from 'next-auth'
import prisma from "./prisma";
import { UserType } from "@/types/user";
import bcrypt from "bcryptjs";
import { ItemType } from "@/types/item";

export async function CreateUser(user:UserType){
  try {
    const salt = 10;
    const password = await bcrypt.hash(user.password, salt)
    await prisma.user.create({
                data: {
                    Username: user.username,
                    Email: user.email,
                    Phone: user.phone?.length === 0 ? null : user.phone,
                    Address: user.address,
                    Postcode: user.postcode,
                    Role: user.role,    
                    Password: password,
                }
            })
    return {success:true};
  }
  catch (e:any)
        {
            const fieldMap: Record<string,string> ={
                Username: "username",
                Phone: "mobile",
                Email: "email",
            }
            if (e.code === "P2002"){
                const field = e.meta?.target?.[0];
                const fieldError = fieldMap[field ?? ""] ?? field?.toLowerCase() ?? "unknown"; 
                
                return {
                    success: false, 
                    errors:{ 
                        [fieldError]: { errors: [`That ${fieldError} is already in use.`]}
                    }
                };
            }
            return { success: false, errors: { general: { errors: [`An unknown error occurred. Please try again. ${e}`] } } };
        }
}

export async function GetUserDonations(){
  const session = await getServerSession(authOptions)
  if (!session?.user){
    return null
  }
  try{
  const items = await prisma.items.findMany({
    where: {Donor_ID: session.user.id},
  })
  return items
}catch(e){
  return null
}
}

export async function GetStaffDonations(){
  const session = await getServerSession(authOptions)
  if (!session?.user){
    return null
  }
  try{
  const items = await prisma.items.findMany()
  return items
}catch(e){
  return null
}
}

export async function GetCharities(){
  const charities = await prisma.charity.findMany()
  return charities.map(charity => ({
    id: charity.Charity_ID,
    name: charity.Charity_Name
  }))
}

export async function GetCharityID(name:string){
  const charity = await prisma.charity.findMany(
    {where:{Charity_Name: name}})
  return charity[0].Charity_ID
}

export async function CreateDonation(item:ItemType){
  try {
    console.log(item)
    await prisma.items.create({
                data: {
                    Item_Name: item.item_name,
                    Brand: item.brand,
                    Colour: item.colour,
                    Condition: item.condition,
                    Size: item.size,
                    Image: item.image,
                    Time: item.time,
                    Pickup_Date: item.pickup_date,   
                    Donor_ID:item.Donor_ID,
                    Charity_ID:item.Charity_ID 
                    
                }
            })
    return {success:true};
  }
  catch (e:any)
  {
    return { success: false, errors: { general: { errors: [`An unknown error occurred. Please try again. ${e}`] } } };
  }
}
