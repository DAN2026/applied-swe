import {Session} from "next-auth"
import { Users,BriefcaseBusiness,Shield } from "lucide-react"
import { useEffect, useState } from "react"
import { Gift } from "lucide-react"
import Card from "../general/Card"

export default function AdminDashboard({session}:{session:Session}){
    return(
            <div className="grid grid-rows-[12%_15%_40%] h-screen">
                <div className="flex">
                    <Card title="Today's Donations" icon={Gift} value={121} valueGrowth={3}/>
                    <Card title="Today's Users" icon={Gift} value={31} valueGrowth={-3}/>
                    <Card title="Today's Donations" icon={Gift} value={20} valueGrowth={0}/>
                    <Card title="Today's Donations" icon={Gift} value={103} valueGrowth={12}/>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
    )
}

// shadow-md