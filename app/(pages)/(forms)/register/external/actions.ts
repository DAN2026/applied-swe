"use server"

import { CreateUser } from "@/lib/actions";
import { externalSchema } from "@/schemas/externalRegister";
import { UserType } from "@/types/user";
import { Role } from "@prisma/client";
import { error } from "console";
import { getServerSession } from "next-auth";
import { success, z } from "zod";

export async function handleExternal(formData: FormData) {
    const session = await getServerSession();
    if (!session?.user?.email){
        return { success: false, errors: { general: { errors: ["Not authenticated"] } }}
    }
    const user = session.user;
    const data = Object.fromEntries(formData.entries());
    const result = externalSchema.safeParse(data);

    if (!result.success) {
        const formattedErrors = z.treeifyError(result.error)
        return { success: false, errors:formattedErrors.properties }
    }
    const t:UserType={
        username: data.username.toString(),
        email: user.email!,
        phone: data.mobile.toString(),
        password: data.password.toString(),
        address: data.address.toString(),
        postcode: data.postcode.toString(),
        role: Role.USER
    }
    const create = await CreateUser(t)
    if (create.success){
        return { success: true };
    }
    else{
        return {success:false, errors:create.errors}
    }
}