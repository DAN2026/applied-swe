"use client";

import { useState,useEffect } from "react";
import {Session} from "next-auth"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import UserDashboard from "@/components/dashboards/UserDashboard";
import StaffDashboard from "@/components/dashboards/StaffDashboard";
import { useSession } from "next-auth/react";
import { Role } from "@prisma/client";
import AdminDashboard from "@/components/dashboards/AdminDashboard";
import Topbar from "@/components/general/dashboard/Topbar";
import Sidebar from "@/components/general/dashboard/Sidebar";
import { GetTodaysDonationsWithGrowth,GetNewUsersWithGrowth,GetPendingDonationsWithGrowth,GetMonthlyUserCounts,GetDonationCountsByMonth,GetAllUsers  } from "@/lib/actions";
import Account from "@/components/dashboards/Account";

export default function DashboardSwitcher() {

  //#region Data type

  type StatWithGrowth = {
    today: number | null;
    yesterday: number | null;
    growth: number | null;
  };

  type AdminData = {
    donations: StatWithGrowth | null;
    users: StatWithGrowth | null;
    pendingDonations: StatWithGrowth | null;
    userChartData?: userChartData | null; 
    charityMonthlyCounts?: CharityMonthlyCount[] | null; 
    allUsers?: any[];   
  };

  type userChartData = {
    data: { name: string; Users: number }[];
    isAnimationActive?: boolean;
  };

  type DashboardData = {
    admin?: AdminData;
    staff?: any; 
    user?: any;  
  };

 type CharityMonthlyCount = {
  date: string;  // "Jan 2026"
  "Cancer Research UK": number;
  Oxfam: number;
  Mind: number;
  "Salvation Army": number;
  "British Heart Foundation": number;
};

  //#endregion

  //#region Use States

  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);

  const [menuOpen, toggleMenu] = useState(true);

  //#endregion

  //#region Session Management

  const session = useSession().data;
  if (!session){
    return(<></>)
  }
  const [tab, setTab] = useState(
     session.user.role === Role.STAFF ? "staff" : session.user.role === Role.ADMIN ? "admin":"user"
  );

  //#endregion

  //#region Fetching Dashboard Data

// Im not yet sure whether this will be good practice fetching data here, so it doesnt refetch on navigation w/ the navbar. 
// If you believe so do data query here n pass down as prop ive not defined the type for the other roles just let them as any.

  useEffect(() => {
  const fetchDashboardData = async () => {
    if (!session) return;
    try {
      if (session.user.role === Role.ADMIN) {
        const [donations, users, pendingDonations,userChartData,charityMonthlyCounts,allUsers] = await Promise.all([
          GetTodaysDonationsWithGrowth(),
          GetNewUsersWithGrowth(),
          GetPendingDonationsWithGrowth(),
          GetMonthlyUserCounts(),
          GetDonationCountsByMonth(),
          GetAllUsers(),  
        ]);

        setDashboardData({
          admin: {
            donations,
            users,
            pendingDonations,
            userChartData: { data: userChartData },      
            charityMonthlyCounts,
            allUsers 
          },
        });
      }
    } catch (err) {
      console.error("Failed to fetch dashboard data", err);
    } finally {
    }
  };
  fetchDashboardData();

  const interval = setInterval(fetchDashboardData, 10000);

  return () => clearInterval(interval);
  
}, [session]);

//#endregion

  return (
    <div
    className={`h-full w-full transition-all duration-300 ${
    menuOpen ? "grid grid-cols-[16rem_1fr]" : "grid grid-cols-[0rem_1fr]"
    }`}>
      <div>
        <Sidebar session={session} tab={tab} setTab={setTab} menuOpen={menuOpen} ></Sidebar>
      </div>
      <div className="grid grid-rows-[10%_90%]">
        <Topbar session={session} menuOpen={menuOpen} setTab={setTab} toggleMenu={toggleMenu} tab={tab}></Topbar>
        <Tabs value={tab} onValueChange={setTab} >
          <TabsContent value="user">
            <UserDashboard session={session}/>
         </TabsContent>
          {(session.user.role === Role.STAFF || session.user.role === Role.ADMIN) && (
            <TabsContent value="staff"> 
              <StaffDashboard session={session}/>
            </TabsContent>
          )}
          {session.user.role === Role.ADMIN && (
            <TabsContent value="admin">
              <AdminDashboard session={session} adminData={dashboardData?.admin}/>
            </TabsContent>
          )}
          <TabsContent value="account">
            <Account session={session}/>
          </TabsContent>
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