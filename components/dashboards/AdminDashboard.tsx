"use client"
import { Session } from "next-auth"
import { useEffect, useState } from "react"
import { Gift, Users, Loader, Star, User2Icon } from "lucide-react"
import Card from "../general/Card"
import UserLineChart from "../general/graphs/UserLineChart"
import CharityBarChart from "../general/graphs/CharityBarChart"
import { CalendarB } from "../general/dashboard/Calendar"
import { getDefaultStartEndDates } from "@/lib/utils"
import DataTable from "../general/DataTable"
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@prisma/client"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { UpdateUserRole } from "@/lib/actions"; // your server action
import { useTransition } from "react";
import { DialogPromotion } from "../general/dashboard/DialogPromotion"


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
    charityMonthlyCounts?: CharityMonthlyCount[] | null;
    allUsers?: any[];
  } | null;
}



//#endregion

export default function AdminDashboard({ session, adminData }: AdminDashboardProps) {

  //#region Constants

  const defaultDates = getDefaultStartEndDates();

  const userDetails = [
    { label: "User ID", key: "User_ID" },
    { label: "Email", key: "Email" },
    { label: "Phone", key: "Phone" },
    { label: "Role", key: "Role" },
    { label: "Joined", key: "Date_Joined" },
    { label: "Address", key: "Address" },
    { label: "Postcode", key: "Postcode" },
  ];

  //#endregion

  //#region Use States

  const [startDate, setSqlTimestampStart] = useState<string>(defaultDates[0]) // For the calendar Component

  const [endDate, setSqlTimestampEnd] = useState<string>(defaultDates[1]) // For the calendar Component

  const [selectedID, setSelectedID] = useState<string | null>(null) // For the displaying specific user

  const [selectedUser, setSelectedUser] = useState<User | null>(null); // User object from selectedID

  const [query, setQuery] = useState("") // The query which is the search from the <Input> component

  const [users, setUsers] = useState<User[]>(() => adminData?.allUsers ?? []);

  const [windowWidth, setWindowWidth] = useState(0);

  //#endregion

  //#region Use Effects

  useEffect(() => {
    if (!selectedID || !adminData?.allUsers) {
      setSelectedUser(null); // No selected ID we just display null
      return;
    }

    const user = adminData.allUsers.find( // Here we select the user object with the selectedID
      (u: User) => u.User_ID.toString() === selectedID.toString()
    );

    setSelectedUser(user ?? null); // Here we set the selected user object.
  }, [selectedID, adminData?.allUsers]);

  useEffect(() => {
    if (adminData?.allUsers) {
      setUsers(adminData.allUsers);
    }
  }, [adminData?.allUsers]);


  // We are tracking the window size so we can display the correct component

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);


  //#endregion

  //#region Table Functions

  const filteredUsers = users.filter((user) => {
    if (!query) return true;
    const search = query.toLowerCase();
    return (
      user.User_ID.toString().includes(search) ||
      user.Username.toLowerCase().includes(search) ||
      user.Email.toLowerCase().includes(search) ||
      (user.Phone ?? "").toLowerCase().includes(search) ||
      user.Address.toLowerCase().includes(search) ||
      user.Postcode.toLowerCase().includes(search) ||
      user.Role.toLowerCase().includes(search)
    );
  });

  const handleRowClick = (row: any) => {
    setSelectedID(row.User_ID)
  }

  const handleRoleChange = async (userId: number, newRole: "USER" | "STAFF" | "ADMIN") => {
    try {
      await UpdateUserRole(userId, newRole);
      // Update local state to trigger re-render
      setUsers((prev) =>
        prev.map((u) => (u.User_ID === userId ? { ...u, Role: newRole } : u))
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserUpdate = (updatedUser: User) => {
    setUsers((prev) =>
      prev.map((u) => (u.User_ID === updatedUser.User_ID ? updatedUser : u))
    );

    // If the updated user is currently selected, update selectedUser too
    if (selectedUser?.User_ID === updatedUser.User_ID) {
      setSelectedUser(updatedUser);
    }
  };


  //#endregion

  //#region Table Colum Def

  const userColumns: ColumnDef<User>[] = [
    {
      accessorKey: "User_ID",
      header: "ID",
      enableSorting: true,
    },
    {
      accessorKey: "Username",
      header: "Username",
      enableSorting: true,
    },
    {
      accessorKey: "Email",
      header: "Email",
      enableSorting: true,
    },
    {
      accessorKey: "Phone",
      header: "Phone",
      enableSorting: true,
      cell: ({ row }) => row.getValue("Phone") ?? "-", // show "-" if phone is null
    },
    {
      accessorKey: "Address",
      header: "Address",
      enableSorting: false, // maybe too long for sorting
    },
    {
      accessorKey: "Postcode",
      header: "Postcode",
      enableSorting: true,
    },
    {
      accessorKey: "Role",
      header: "Role",
      enableSorting: true,
      cell: ({ row }) => (
        <span className="font-semibold">
          {row.getValue("Role")}
        </span>
      ),
    },
    {
      accessorKey: "Date_Joined",
      header: "Joined",
      enableSorting: true,
      cell: ({ row }) => {
        const date = new Date(row.getValue("Date_Joined") as string);
        return <span>{new Intl.DateTimeFormat("en-GB", { dateStyle: "short" }).format(date)}</span>;
      },
    },
  ];

  //#endregion

  //#region User Formatting Functions

  const formatValue = (key: string, value: any) => {
    if (!value) return "Not available";

    if (key === "Date_Joined") {
      return new Date(value).toLocaleDateString("en-GB");
    }

    return value;
  };

  //#endregion

  //#region Desktop View

  const desktopDisplay = windowWidth >= 1440 ? (
    <div className="w-full">
      <div className="grid grid-rows-[min-content_min-content_1fr_1fr] h-screen">
        <div className="grid grid-cols-[25%_25%_25%_25%]">
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
            title="Pending Donos"
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
        <div className="flex flex-wrap gap-6 px-10 py-4 min-h-[50px]">
          <div className="flex-1 min-w-[250px] grid grid-cols-[3fr_1fr] items-center gap-4">
            <h1 className="font-semibold text-sm lg:text-base">User Overview</h1>
            <div className="flex items-center gap-2">
              <div className="w-6 h-1 bg-emerald-600 rounded mr-2"></div>
              <h1 className="text-xs lg:text-sm">Users</h1>
            </div>
          </div>
          <div className="flex-1 min-w-[250px] items-center flex justify-between gap-4">
            <h1 className="font-semibold text-sm lg:text-base">Charity Overview</h1>
            <div className="flex gap-2">
              <CalendarB label="Start Date" setSqlTimestamp={setSqlTimestampStart} dateType="Start Date" />
              <CalendarB label="End Date" setSqlTimestamp={setSqlTimestampEnd} dateType="End Date" />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-[50%_50%] min-h-[400px]">
          <div className="flex items-center ml-5 mr-5">
            <UserLineChart data={adminData?.userChartData?.data ?? []} />
          </div>
          <div className="flex items-center">
            <CharityBarChart startDate={startDate} endDate={endDate} data={adminData?.charityMonthlyCounts ?? []}></CharityBarChart>
          </div>
        </div>
        <div className="">
          <div className="overflow-hidden">
            <div className=" ml-10 flex items-center mt-10">
              <h1 className="font-semibold text-sm lg:text-base">User Table</h1>
            </div>
            <div className="ml-10">
              <div className="flex items-center mt-2 mb-2">
                <Input placeholder="Search for a username..." value={query} onChange={(e) => setQuery(e.target.value)} className="max-w-sm" />
                <DialogPromotion user={selectedUser} onUserUpdate={handleUserUpdate}></DialogPromotion>
              </div>
              <div className="flex-1 overflow-scroll mr-10">
                <DataTable data={filteredUsers} columns={userColumns} rowClick={handleRowClick} selectedID={selectedID} getRowId={(row) => row.User_ID} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;


  //#endregion

  const laptopDisplay = windowWidth >= 1024 && windowWidth < 1440 ? (
    <div className="w-full h-[900px]">
      <div className="grid grid-rows-[min-content_min-content_1fr_1fr] h-screen">
        <div className="grid grid-cols-[25%_25%_25%_25%]">
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
            title="Pending Donos"
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
        <div className="flex flex-wrap gap-6 px-10 py-4 min-h-[50px]">
          <div className="flex-1 min-w-[250px] grid grid-cols-[3fr_1fr] items-center gap-4">
            <h1 className="font-semibold text-sm lg:text-base">User Overview</h1>
            <div className="flex items-center gap-2">
              <div className="w-6 h-1 bg-emerald-600 rounded mr-2"></div>
              <h1 className="text-xs lg:text-sm">Users</h1>
            </div>
          </div>
          <div className="flex-1 min-w-[250px] items-center flex justify-between gap-4">
            <h1 className="font-semibold text-sm lg:text-base">Charity Overview</h1>
            <div className="flex gap-2">
              <CalendarB label="Start Date" setSqlTimestamp={setSqlTimestampStart} dateType="Start Date" />
              <CalendarB label="End Date" setSqlTimestamp={setSqlTimestampEnd} dateType="End Date" />
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-[50%_50%] min-h-[400px]">
          <div className="flex items-center ml-5 mr-5">
            <UserLineChart data={adminData?.userChartData?.data ?? []} />
          </div>
          <div className="flex items-center">
            <CharityBarChart startDate={startDate} endDate={endDate} data={adminData?.charityMonthlyCounts ?? []}></CharityBarChart>
          </div>
        </div>
        <div className="">
          <div className="overflow-hidden">
            <div className=" ml-10 flex items-center ">
              <h1 className="font-semibold text-sm lg:text-base">User Table</h1>
            </div>
            <div className="ml-10">
              <div className="flex items-center mt-2 mb-2">
                <Input placeholder="Search for a username..." value={query} onChange={(e) => setQuery(e.target.value)} className="max-w-sm" />
                <DialogPromotion user={selectedUser} onUserUpdate={handleUserUpdate}></DialogPromotion>
              </div>
              <div className="flex-1 overflow-scroll mr-10">
                <DataTable data={filteredUsers} columns={userColumns} rowClick={handleRowClick} selectedID={selectedID} getRowId={(row) => row.User_ID} />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-[10%_90%]">
          </div>
        </div>
      </div>
    </div>
  ) : null;

  const ipadDisplay = windowWidth < 1024 ? (
    <div className="w-[96vw] h-[2000px]">
      <div className="flex flex-col h-full">

        <div className="flex-[.25] p-2">
          <div className="grid grid-cols-2 gap-2 h-full">
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
              title="Pending Donos"
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
        </div>

        <div className="flex-[.5] p-4">
          <h1 className="font-semibold text-lg mb-10 mt-10 ml-5">
            User Overview
          </h1>
          <div className="h-[90%] w-[90%] max-h-[300px]">
            <UserLineChart data={adminData?.userChartData?.data ?? []} />
          </div>
        </div>

        <div className="flex-[.5] p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg mb-10 mt-10 ml-5">Charity Overview</h1>
            <div className="flex">
              <CalendarB label="Start Date" setSqlTimestamp={setSqlTimestampStart} dateType="Start Date" />
              <CalendarB label="End Date" setSqlTimestamp={setSqlTimestampEnd} dateType="End Date" />
            </div>
          </div>
          <div className="h-[90%] w-[95%] ">
            <CharityBarChart startDate={startDate} endDate={endDate} data={adminData?.charityMonthlyCounts ?? []}></CharityBarChart>
          </div>
        </div>

        <div className="flex-[0.5] p-2  overflow-hidden">
          <div className="h-[10%] flex items-center">
            <h1 className="font-semibold text-lg mb-10 mt-10 ml-5">User Table</h1>
          </div>
          <div className="h-[10%] ml-5 mr-15">
            <Input placeholder="Search for a username..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-[50%]" />
            <DialogPromotion user={selectedUser} onUserUpdate={handleUserUpdate} ></DialogPromotion>
          </div>
          <div className="h-[80%] overflow-auto ml-5">
            <DataTable data={filteredUsers} columns={userColumns} rowClick={handleRowClick} selectedID={selectedID} getRowId={(row) => row.User_ID} />
          </div>
        </div>

      </div>
    </div>
  ) : null;


  return (
    <div>
      {desktopDisplay}
      {laptopDisplay}
      {ipadDisplay}
    </div>
  )
}


