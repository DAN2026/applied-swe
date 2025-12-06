"use client";

import { useState } from "react";
import {Session} from "next-auth"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UserDashboard from "@/components/dashboards/UserDashboard";
import StaffDashboard from "@/components/dashboards/StaffDashboard";
import { useSession } from "next-auth/react";
import { Role } from "@prisma/client";
import AdminDashboard from "@/components/dashboards/AdminDashboard";
import DashboardNavbar from "@/components/general/DashboardSidebar";
import DashboardTopbar from "@/components/general/DashboardTopbar";

export default function DashboardSwitcher() {
  const session = useSession().data;
  if (!session){
    return(<></>)
  }
  const [tab, setTab] = useState(
     session.user.role === Role.STAFF ? "staff" : session.user.role === Role.ADMIN ? "admin":"user"
  );

  const [menuOpen, toggleMenu] = useState(true);


  return (
    <div
    className={`h-full w-full transition-all duration-300 ${
    menuOpen ? "grid grid-cols-[16rem_1fr]" : "grid grid-cols-[0rem_1fr]"
    }`}>
      <div>
        <DashboardNavbar session={session} tab={tab} setTab={setTab} menuOpen={menuOpen} ></DashboardNavbar>
      </div>
      <div className="grid grid-rows-[10%_90%]">
        <DashboardTopbar session={session} menuOpen={menuOpen} toggleMenu={toggleMenu} tab={tab}></DashboardTopbar>
        <Tabs value={tab} onValueChange={setTab} >
          <TabsContent value="user">
            <UserDashboard session={session}/>
         </TabsContent>
          {session.user.role === Role.STAFF || Role.ADMIN && (
            <TabsContent value="staff"> 
              <StaffDashboard session={session}/>
            </TabsContent>
          )}
          {session.user.role === Role.ADMIN && (
            <TabsContent value="admin">
              <AdminDashboard session={session}/>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>

    // <div className="w-[90vw] h-[100vh]">Test</div>


    //  div>
    //   <DashboardNavbar session={session} tab={tab} setTab={setTab}></DashboardNavbar>
    // </div> 

           /* {session.user.role !== Role.USER && (<>
    //   <TabsList className="w-1/2 mx-auto mb-[2vh]">
    //     <TabsTrigger value="user" className="py-5 text-lg font-semibold tracking-wide data-[state=active]:bg-emerald-700/80 data-[state=active]:text-white transition-colors">Your Donations</TabsTrigger>
    //     {session.user.role === Role.STAFF &&
    //       <TabsTrigger value="staff" className="py-5 text-lg font-semibold tracking-wide data-[state=active]:bg-emerald-700/80 data-[state=active]:text-white transition-colors">All Donations</TabsTrigger>}
    //     {session.user.role === Role.ADMIN &&
    //       <TabsTrigger value="admin" className="py-5 text-lg font-semibold tracking-wide data-[state=active]:bg-emerald-700/80 data-[state=active]:text-white transition-colors">Admin Functions</TabsTrigger>}
    //   </TabsList>
    //   <div className="bg-emerald-700/80 w-full mb-[3vh] h-[0.5vh]"/>
    //   </>)} */
  );
}