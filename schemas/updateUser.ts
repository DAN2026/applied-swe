import {z} from "zod";

export const UpdateUserSchema = z.object({
    username: z.string().min(1, "Username is required").max(20, "Username must be at most 20 characters"),
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    mobile: z.string().optional(),
    address: z.string().min(1, "Address is required"),
    postcode: z.string().min(1, "Postcode is required"),
    password: z.string().optional()
  .refine(val => !val || val.length >= 10, {message: "Password must be at least 10 characters long",})
  .refine(val => !val || /[A-Z]/.test(val), {message: "Must include at least one uppercase letter",})
  .refine(val => !val || /\d/.test(val), {message: "Must include at least one number",})
  .refine(val => !val || /[!@#$%^&*.?~]/.test(val), {message: "Must include a special character",}),
})

export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;