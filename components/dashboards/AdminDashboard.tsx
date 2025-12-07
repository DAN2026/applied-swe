"use client"
import { Session } from "next-auth"
import { useEffect, useState } from "react"
import { Gift, Users, Loader, Star, User } from "lucide-react"
import Card from "../general/Card"
import UserLineChart from "../general/graphs/UserLineChart"
import CharityBarChart from "../general/graphs/CharityBarChart"

type StatWithGrowth = {
    today: number | null;
    yesterday: number | null;
    growth: number | null;
};

  type userChartData = {
    data: { name: string; Users: number }[];
    isAnimationActive?: boolean;
  };


interface AdminDashboardProps {
  session: Session;
  adminData?: {
    donations?: StatWithGrowth | null;
    users?: StatWithGrowth | null;
    pendingDonations?: StatWithGrowth | null;
    userChartData?:userChartData | null;
    
  } | null;
}


const sampleData = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export default function AdminDashboard({ session,adminData }:AdminDashboardProps ) {

  return (

    <div className="grid grid-rows-[12%_7.5%_50%] h-screen">
        <div className="flex gap-4">
            <Card 
            title="Today's Donations" 
            icon={Gift} 
            value={adminData?.donations?.today ?? null} 
            valueGrowth={adminData?.donations?.growth ?? undefined} 
            />
            <Card 
            title="Today's Users" 
            icon={Users} 
            value={adminData?.users?.today ?? null} 
            valueGrowth={adminData?.users?.growth ?? undefined} 
            />
            <Card 
            title="Pending Donations" 
            icon={Loader} 
            value={adminData?.pendingDonations?.today ?? null} 
            valueGrowth={adminData?.pendingDonations?.growth ?? undefined} 
            />
            <Card 
            title="New Users" 
            icon={Star} 
            value={adminData?.users?.today ?? null} 
            valueGrowth={adminData?.users?.growth ?? undefined} 
            />
        </div>
        <div className="flex">
            <h1 className="w-[50%] ml-10 mt-5 font-semibold text-[0.85vw]">User Overview</h1>
            <h1 className="w-[50%] mt-5 font-semibold text-3x1">Charity Overview</h1>
        </div>
        <div className=" grid grid-cols-[50%_50%]">
            <div className="flex items-center ml-5 mr-5">
                <UserLineChart data={adminData?.userChartData?.data ?? []}/>
            </div>
            <div className="flex items-center">
                <CharityBarChart data={sampleData}></CharityBarChart>
            </div>
        </div>
        <div className="bg-red-300">
            
        </div>
    </div>
  )
}
