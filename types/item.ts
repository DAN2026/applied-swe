import { Condition, Size, Times } from "@prisma/client"

export type ItemType = {
    item_name: string,
    brand:string,
    size:Size,
    colour:string,
    condition:Condition,
    image:string,
    time:Times,
    pickup_date: Date,
    Donor_ID: number,
    Charity_ID: number
}