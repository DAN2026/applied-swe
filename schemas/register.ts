import {z} from "zod";

export const registerSchema = z.object({
    username: z.string().min(1, "Username is required").max(20, "Username must be at most 20 characters"),
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    mobile: z.string().optional(),
    address: z.string().min(1, "Address is required"),
    postcode: z.string().min(1, "Postcode is required"),
    password: z.string()
        .min(10, "Password must be at least 10 characters long")
        .refine((val)=>/[A-Z]/.test(val), "Must include at least one uppercase letter")
        .refine((val)=>/\d/.test(val), "Must include at least one number")
        .refine((val)=>/[!@#$%^&*.?~]/.test(val), "Must include at least one special character (!@#$%^&*.?~)"),
})

export type RegisterSchema = z.infer<typeof registerSchema>;