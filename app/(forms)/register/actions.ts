"use server"

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
    console.log(data); 

        try
        {
            await prisma.user.create({
                data: {
                    Username: data.username.toString(),
                    Email: data.email.toString(),
                    Phone: data.mobile.toString(),
                    Address: data.address.toString(),
                    Postcode: data.postcode.toString(),
                    Password: data.password.toString(),
                    
                }
            })
            return { success: true };
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
            console.log(e);
            return { success: false, errors: { general: { errors: ["An unknown error occurred. Please try again."] } } };
        }
}