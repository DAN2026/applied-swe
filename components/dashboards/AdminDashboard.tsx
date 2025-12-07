"use client"
import { Session } from "next-auth"
import { useEffect, useState } from "react"
import { Gift, Users, Loader, Star } from "lucide-react"
import Card from "../general/Card"

type StatWithGrowth = {
    today: number | null;
    yesterday: number | null;
    growth: number | null;
};

interface AdminDashboardProps {
  session: Session;
  adminData?: {
    donations?: StatWithGrowth | null;
    users?: StatWithGrowth | null;
    pendingDonations?: StatWithGrowth | null;
  } | null;
}

export default function AdminDashboard({ session,adminData }:AdminDashboardProps ) {


  return (
    <div className="grid grid-rows-[12%_15%_40%] h-screen gap-4">
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
      <div>

      </div>
      <div>
        
      </div>
    </div>
  )
}
