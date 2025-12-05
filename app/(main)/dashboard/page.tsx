"use client";

import { useState } from "react";
import {Session} from "next-auth"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UserDashboard from "@/components/dashboards/UserDashboard";
import StaffDashboard from "@/components/dashboards/StaffDashboard";
import { useSession } from "next-auth/react";
import { Role } from "@prisma/client";
import AdminDashboard from "@/components/dashboards/AdminDashboard";

export default function DashboardSwitcher() {
  const session = useSession().data;
  if (!session){
    return(<></>)
  }
  const [tab, setTab] = useState(
     session.user.role === Role.STAFF ? "staff" : session.user.role === Role.ADMIN ? "admin":"user"
  );

  return (
    <Tabs value={tab} onValueChange={setTab} className="w-full py-[4vh]">
      {session.user.role !== Role.USER && (<>
      <TabsList className="w-1/2 mx-auto mb-[2vh]">
        <TabsTrigger value="user" className="py-5 text-lg font-semibold tracking-wide data-[state=active]:bg-emerald-700/80 data-[state=active]:text-white transition-colors">Your Donations</TabsTrigger>
        {session.user.role === Role.STAFF &&
          <TabsTrigger value="staff" className="py-5 text-lg font-semibold tracking-wide data-[state=active]:bg-emerald-700/80 data-[state=active]:text-white transition-colors">All Donations</TabsTrigger>}
        {session.user.role === Role.ADMIN &&
          <TabsTrigger value="admin" className="py-5 text-lg font-semibold tracking-wide data-[state=active]:bg-emerald-700/80 data-[state=active]:text-white transition-colors">Admin Functions</TabsTrigger>}
      </TabsList>
      <div className="bg-emerald-700/80 w-full mb-[3vh] h-[0.5vh]"/>
      </>)}
      
      <TabsContent value="user">
        <UserDashboard session={session}/>
      </TabsContent>
      {session.user.role === Role.STAFF && (
        <TabsContent value="staff">
          <StaffDashboard session={session}/>
        </TabsContent>)}
      {session.user.role === Role.ADMIN && (
        <TabsContent value="admin">
          <AdminDashboard session={session}/>
        </TabsContent>
      )}
    </Tabs>
  );
}