"use server"

import prisma from "@/lib/prisma";

export async function handleLogin(formData: FormData) {
    const data = Object.fromEntries(formData.entries()); // turns form data into an object
        try
        {
            const users = await prisma.user.findMany({
                where: {
                    Username: data.username.toString(),
                    Password: data.password.toString(),
                }
            })
            if (users.length === 0) {
                return { success: false, errors: { general: { errors: ["Invalid username or password."] } } };
            }
            return { success: true };
        } 
        catch (e:any)
        {
            return { success: false, errors: { general: { errors: ["An unknown error occurred. Please try again."] } } };
        }
}