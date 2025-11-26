"use server"

import { CreateUser } from "@/lib/actions";
import { Role } from "@/lib/generated/prisma";
import prisma from "@/lib/prisma";
import { registerSchema } from "@/schemas/register";
import { z } from "zod";

export async function handleRegister(formData: FormData) {
    const data = Object.fromEntries(formData.entries()); // turns form data into an object
    const result = registerSchema.safeParse(data); // safeParse prevents try/catch, returns object with data or error

    if (!result.success) {
        //if result.success is false
        const formattedErrors = z.treeifyError(result.error); // puts errors into an object w field names
        return { success: false, errors:formattedErrors.properties }; //.properties contains <field:string, errors:string[]>

    }

        try
        {
            const create = await CreateUser({
                            username: data.username.toString(),
                            email: data.email.toString(),
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
            return { success: false, errors: { general: { errors: ["An unknown error occurred. Please try again.",e] } } };
        }
}