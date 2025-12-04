"use server"

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { CreateDonation, CreateUser, GetCharityID } from "@/lib/actions";
import prisma from "@/lib/prisma";
import { donation } from "@/schemas/donation";
import { ItemType } from "@/types/item";
import { Condition, Role, Size, Times, DonationStatus } from "@prisma/client";
import { getServerSession } from "next-auth";
import { success, z } from "zod";

export async function handleDonation(formData: FormData) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email){
        return { success: false, errors: { general: { errors: ["Not authenticated"] } }}
    }
    const user = session.user;
    const data = Object.fromEntries(formData.entries());
    const result = donation.safeParse(data);

    if (!result.success) {
        const formattedErrors = z.treeifyError(result.error)
        return { success: false, errors:formattedErrors.properties }
    }
    const charityID = await GetCharityID(data.charity.toString())
    const stringDate = data.date.toString()
    const pickupDate = new Date(stringDate)
    const i:ItemType={
        item_name: data.name.toString(),
        brand: data.brand.toString(),
        size: data.size as Size,
        colour: data.colour.toString(),
        condition: data.condition as Condition,
        image:"",
        time: data.time as Times,
        pickup_date: pickupDate,
        Donor_ID: user.id as number,
        Charity_ID: charityID
    }
    const create = await CreateDonation(i)
    if (create.success){
        return { success: true };
    }
    else{
        return {success:false, errors:create.errors}
    }
}

export async function approveDonation(id: number){
    try{
        const updated = await prisma.items.update({
            where:{Item_No:id},
            data:{Status:DonationStatus.Approved}
        })
        if (updated){
        return true
        }
        return true
    }
    catch{
        return false
    }
}