"use client";

import { useState } from "react";
import {Session} from "next-auth"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UserDashboard from "@/components/dashboards/UserDashboard";
import StaffDashboard from "@/components/dashboards/StaffDashboard";
import { useSession } from "next-auth/react";
import { Role } from "@prisma/client";

export default function DashboardSwitcher() {
  const session = useSession().data;
  if (!session){
    return(<></>)
  }
  const [defaultTab, setDefaultTab] = useState(
     session.user.role === Role.STAFF ? "staff" : "user"
  );

  return (
    <Tabs defaultValue={defaultTab} className="w-full">
      <TabsList>
        {session.user.role === Role.STAFF && (<>
        <TabsTrigger value="user">Your Donations</TabsTrigger>
          <TabsTrigger value="staff">All Donations</TabsTrigger>
          </>)}
      </TabsList>

      
      <TabsContent value="user">
        <UserDashboard session={session}/>
      </TabsContent>
      {session.user.role === Role.STAFF && (
        <TabsContent value="staff">
          <StaffDashboard session={session}/>
        </TabsContent>)}
    </Tabs>
  );
}