"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import StaffDashboard from "@/components/dashboards/StaffDashboard"
import UserDashboard from "@/components/dashboards/UserDashboard"
import Navbar from "@/components/general/Navbar"
import ButtonGroup from "@/components/general/TimeGroup"
import { Button } from "@/components/ui/button"
import { Role } from "@prisma/client"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function Dashboard(){
    const session = await getServerSession(authOptions)
    if (!session){
        redirect("/")
    }
    const dashboards = {
        [Role.USER]: <UserDashboard/>,
        [Role.STAFF]: <StaffDashboard/>,
        [Role.ADMIN]: <UserDashboard/>
    }
    return (
    <div>
        
        {dashboards[session.user.role as Role ?? <></>]}</div>
)
}