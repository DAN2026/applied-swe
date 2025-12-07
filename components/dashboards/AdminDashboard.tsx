"use client"
import { Session } from "next-auth"
import { useEffect, useState } from "react"
import { Gift, Users, Loader, Star, User } from "lucide-react"
import Card from "../general/Card"
import UserLineChart from "../general/graphs/UserLineChart"
import CharityBarChart from "../general/graphs/CharityBarChart"
import { Dropdown } from "../ui/dashboard/dropdown"
import { CalendarB } from "../ui/dashboard/calendarB"
import { getDefaultStartEndDates } from "@/lib/utils"

//#region Types

type StatWithGrowth = {
    today: number | null;
    yesterday: number | null;
    growth: number | null;
};

type userChartData = {
  data: { name: string; Users: number }[];
  isAnimationActive?: boolean;
};

type CharityMonthlyCount = {
  date: string;  // "Jan 2026"
  "Cancer Research UK": number;
  Oxfam: number;
  Mind: number;
  "Salvation Army": number;
  "British Heart Foundation": number;
};

interface AdminDashboardProps {
  session: Session;
  adminData?: {
    donations?: StatWithGrowth | null;
    users?: StatWithGrowth | null;
    pendingDonations?: StatWithGrowth | null;
    userChartData?: userChartData | null;
    charityMonthlyCounts?: CharityMonthlyCount[] | null; // ⭐ NEW FIELD
  } | null;
}



//#endregion


export default function AdminDashboard({ session,adminData }:AdminDashboardProps ) {

  const defaultDates = getDefaultStartEndDates(); 

  const [startDate, setSqlTimestampStart] = useState<string>(defaultDates[0])

  const [endDate, setSqlTimestampEnd] = useState<string>(defaultDates[1])

  console.log(adminData?.charityMonthlyCounts);


  useEffect(() => {
  console.log("Start Date:", startDate);
  console.log("End Date:", endDate);
}, [startDate, endDate]);
  

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
            <div className="w-[50%] grid grid-cols-[80%_20%] items-center">
              <h1 className="font-semibold text-[0.85vw] ml-10">User Overview</h1>
              <div className="flex items-center justify-center">
                <div className="w-6 h-1 bg-emerald-600 rounded-[3] mr-4"></div>
                <h1 className="text-[0.75vw]">Users</h1>
              </div>
            </div>
            <div className="w-[50%] flex items-center justify-between">
              <h1 className="w-[50%]  font-semibold text-[0.85vw] ml-10">Charity Overview</h1>
              <div className="flex flex-row">
                <CalendarB label="Start Date" setSqlTimestamp={setSqlTimestampStart} dateType="Start Date"></CalendarB>
                <CalendarB label="End Date" setSqlTimestamp={setSqlTimestampEnd} dateType="End Date"></CalendarB>
              </div>
            </div>
        </div>
        <div className=" grid grid-cols-[50%_50%]">
            <div className="flex items-center ml-5 mr-5">
                <UserLineChart data={adminData?.userChartData?.data ?? []}/>
            </div>
            <div className="flex items-center">
                <CharityBarChart startDate={startDate} endDate={endDate} data={adminData?.charityMonthlyCounts ?? []}></CharityBarChart>
            </div>
        </div>
        <div className="bg-red-300">
            
        </div>
    </div>
  )
}
