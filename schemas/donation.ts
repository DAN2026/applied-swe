import { Condition, Size, Times } from "@prisma/client";
import {z} from "zod";

const today = new Date();
const minDate = new Date(today);
minDate.setDate(today.getDate() + 3);

const maxDate = new Date(minDate);
maxDate.setDate(minDate.getDate() + 30);


export const donation = z.object({
    name: z.string().min(1, "Item name is required"),
    brand: z.string().min(1, "Brand name is required"),
    condition: z.enum(["New","LikeNew","Worn","HeavilyWorn"]).transform((val)=>val as Condition),
    size: z.enum(["XS","S","M","L","XL","XXL","XXXL"]).transform((val)=>val as Size),
    time: z.enum(["Morning","Afternoon","Evening"]).transform((val)=>val as Times),
    colour: z.string().min(1, "Colour is required"),
    date: z.string().min(1,"Date is required").transform((val)=>new Date(val)).refine((date)=>date >= minDate, `Date must be after ${minDate.toDateString()}`).refine((date)=>date<=maxDate, `Date must be before ${maxDate.toDateString()}`),
    charity: z.string()
})

export type DonationSchema = z.infer<typeof donation>;