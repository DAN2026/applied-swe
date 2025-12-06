import {Session} from "next-auth"
import DataCardAdmin from "../general/DataCardAdmin"
import { Users,BriefcaseBusiness,Shield } from "lucide-react"
import { GetTotalItems,GetTotalStaff,GetTotalUsers,GetTotalAdmins } from "@/lib/actions";
import { useEffect, useState } from "react"

export default function AdminDashboard({session}:{session:Session}){



    return(
            <div className="grid grid-rows-[12%_15%_40%] h-screen">
                <div className="bg-red-300"></div>
                <div></div>
                <div></div>
            </div>
    )
}

// shadow-md