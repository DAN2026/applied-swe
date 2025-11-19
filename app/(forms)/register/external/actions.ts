"use server"

import { CreateUser } from "@/lib/actions";
import { externalSchema } from "@/schemas/externalRegister";
import { Role } from "@prisma/client";
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
        try
        {
            const create = await CreateUser({
                username: user.name!,
                email: user.email!,
                phone: data.phone.toString().trim().length === 0 ? undefined : data.phone.toString(),
                password: data.password.toString(),
                address: data.address.toString(),
                postcode: data.postcode.toString(),
                role: Role.USER
            })
            if (create){
                return { success: true };
            }
            else return {success: false, error: {general:{errors: ["Could not create user"]}}}
        } 
        catch (e:any)
        {
            const fieldMap: Record<string,string> ={
                Username: "username",
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