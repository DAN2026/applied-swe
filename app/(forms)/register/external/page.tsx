"use client"

import Form from "@/components/general/Form"
import { LucideHouse, LucideKey, LucidePhone, LucidePin, PersonStanding } from "lucide-react"
import { handleExternal } from "./actions"
import {useSession} from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function External(){
const fields = [
    {
            name:"username",
            placeholder: "Username",
            type: "text",
            className: "w-full",
            icon: <PersonStanding/>,
            max: 20,
            fieldType:"input"
        },
        {
            name:"mobile",
            placeholder: "Mobile (optional)",
            type: "text",
            className: "w-full",
            icon: <LucidePhone/>,
            max: 15,
            fieldType:"input"
        },
        {
            name: "postcode",
            placeholder: "Postcode",
            type: "text",
            className: "lg:w-1/2 md:w-full w-full",
            icon: <LucidePin/>,
            fieldType:"input"
        },{
            name: "address",
            placeholder: "Address",
            type: "text",
            className: "lg:w-1/2 md:w-full w-full",
            icon: <LucideHouse/>,
            fieldType:"input"
        },
        {
            name: "password",
            placeholder: "Password",
            type: "password",
            className: "w-full",
            icon: <LucideKey/>,
            min: 10,
            fieldType:"input"
        }
    ]
    const {data,update} = useSession();
    const router = useRouter();
    useEffect(()=>{
        console.log(data)
        if(!data?.user.needsOnboarding){
            router.push("/dashboard")
        }
    },[data])

    return(<div><Form fields={fields} action={handleExternal} successMsg="Created user" successFunc={()=>{update(); router.push("/dashboard")}}/></div>)
}