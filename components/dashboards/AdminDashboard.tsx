"use client"
import { Session } from "next-auth"
import { useEffect, useState } from "react"
import { Gift, Users, Loader, Star, User2Icon } from "lucide-react"
import Card from "../general/Card"
import UserLineChart from "../general/graphs/UserLineChart"
import CharityBarChart from "../general/graphs/CharityBarChart"
import { Dropdown } from "../ui/dashboard/dropdown"
import { CalendarB } from "../ui/dashboard/calendarB"
import { getDefaultStartEndDates } from "@/lib/utils"
import DataTable from "../general/DataTable"
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@prisma/client"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { UpdateUserRole } from "@/lib/actions"; // your server action
import { useTransition } from "react";

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





  //#region Use States

  const [startDate, setSqlTimestampStart] = useState<string>(defaultDates[0]) // For the calendar Component

  const [endDate, setSqlTimestampEnd] = useState<string>(defaultDates[1]) // For the calendar Component

  const [selectedID, setSelectedID] = useState<string | null>(null) // For the displaying specific user

  const [selectedUser, setSelectedUser] = useState<User | null>(null); // User object from selectedID

  const [query, setQuery] = useState("") // The query which is the search from the <Input> component

  const [users, setUsers] = useState<User[]>(adminData?.allUsers ?? []);

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
      cell: ({ row }) => {
        const role = row.getValue("Role") as "USER" | "STAFF" | "ADMIN";
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="font-bold cursor-pointer">{role}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {["USER", "STAFF", "ADMIN"].map((r) => (
                <DropdownMenuItem
                  key={r}
                  onClick={() => handleRoleChange(row.original.User_ID, r as any)}
                >
                  {r}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
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

  //#region Test Data

  const dummyUsers: User[] = [
    {
      User_ID: 1,
      Username: "alice123",
      Email: "alice@example.com",
      Phone: "07123456789",
      Address: "123 Main Street",
      Postcode: "AB12 3CD",
      Role: "USER",
      Date_Joined: new Date("2023-01-15T10:00:00Z"),
      Password: ""
    },
    {
      User_ID: 2,
      Username: "bob_the_builder",
      Email: "bob@example.com",
      Phone: null,
      Address: "456 Elm Road",
      Postcode: "XY98 7ZT",
      Role: "STAFF",
      Date_Joined: new Date("2022-09-22T15:30:00Z"),
      Password: ""
    },
    {
      User_ID: 3,
      Username: "charlie_admin",
      Email: "charlie@example.com",
      Phone: "07987654321",
      Address: "789 Oak Avenue",
      Postcode: "MN45 6OP",
      Role: "ADMIN",
      Date_Joined: new Date("2021-12-01T09:15:00Z"),
      Password: ""
    },
    {
      User_ID: 4,
      Username: "diana_user",
      Email: "diana@example.com",
      Phone: "07411223344",
      Address: "12 Pine Street",
      Postcode: "GH23 4KL",
      Role: "USER",
      Date_Joined: new Date("2023-06-05T13:45:00Z"),
      Password: ""
    },
    {
      User_ID: 5,
      Username: "edward_staff",
      Email: "edward@example.com",
      Phone: null,
      Address: "34 Maple Lane",
      Postcode: "QR56 7ST",
      Role: "STAFF",
      Date_Joined: new Date("2022-11-18T08:20:00Z"),
      Password: ""
    },
    {
      User_ID: 6,
      Username: "fiona_user",
      Email: "fiona@example.com",
      Phone: "07551234567",
      Address: "22 Cedar Court",
      Postcode: "KL12 4GH",
      Role: "USER",
      Date_Joined: new Date("2023-02-10T12:00:00Z"),
      Password: ""
    },
    {
      User_ID: 7,
      Username: "george_staff",
      Email: "george@example.com",
      Phone: null,
      Address: "55 Birch Street",
      Postcode: "XY67 8ZT",
      Role: "STAFF",
      Date_Joined: new Date("2022-08-15T09:30:00Z"),
      Password: ""
    },
    {
      User_ID: 8,
      Username: "hannah_admin",
      Email: "hannah@example.com",
      Phone: "07894561234",
      Address: "78 Walnut Avenue",
      Postcode: "MN12 3OP",
      Role: "ADMIN",
      Date_Joined: new Date("2021-11-20T14:45:00Z"),
      Password: ""
    },
    {
      User_ID: 9,
      Username: "ian_user",
      Email: "ian@example.com",
      Phone: "07711223344",
      Address: "90 Cherry Lane",
      Postcode: "GH45 6KL",
      Role: "USER",
      Date_Joined: new Date("2023-05-01T11:30:00Z"),
      Password: ""
    },
    {
      User_ID: 10,
      Username: "julia_staff",
      Email: "julia@example.com",
      Phone: null,
      Address: "101 Elm Court",
      Postcode: "QR23 4ST",
      Role: "STAFF",
      Date_Joined: new Date("2022-12-05T08:15:00Z"),
      Password: ""
    },
    {
      User_ID: 11,
      Username: "kevin_user",
      Email: "kevin@example.com",
      Phone: "07456789123",
      Address: "15 Maple Street",
      Postcode: "AB34 5CD",
      Role: "USER",
      Date_Joined: new Date("2023-03-12T10:00:00Z"),
      Password: ""
    },
    {
      User_ID: 12,
      Username: "linda_staff",
      Email: "linda@example.com",
      Phone: null,
      Address: "33 Pine Road",
      Postcode: "XY12 3ZT",
      Role: "STAFF",
      Date_Joined: new Date("2022-07-18T13:30:00Z"),
      Password: ""
    },
    {
      User_ID: 13,
      Username: "mike_admin",
      Email: "mike@example.com",
      Phone: "07987651234",
      Address: "44 Cedar Avenue",
      Postcode: "MN67 8OP",
      Role: "ADMIN",
      Date_Joined: new Date("2021-10-25T09:15:00Z"),
      Password: ""
    },
    {
      User_ID: 14,
      Username: "nina_user",
      Email: "nina@example.com",
      Phone: "07551237890",
      Address: "21 Walnut Street",
      Postcode: "GH12 3KL",
      Role: "USER",
      Date_Joined: new Date("2023-04-20T14:45:00Z"),
      Password: ""
    },
    {
      User_ID: 15,
      Username: "oliver_staff",
      Email: "oliver@example.com",
      Phone: null,
      Address: "56 Cherry Lane",
      Postcode: "QR56 7ST",
      Role: "STAFF",
      Date_Joined: new Date("2022-10-10T11:30:00Z"),
      Password: ""
    },
    {
      User_ID: 16,
      Username: "paula_user",
      Email: "paula@example.com",
      Phone: "07712345678",
      Address: "88 Maple Avenue",
      Postcode: "AB56 7CD",
      Role: "USER",
      Date_Joined: new Date("2023-06-01T09:00:00Z"),
      Password: ""
    },
    {
      User_ID: 17,
      Username: "quincy_staff",
      Email: "quincy@example.com",
      Phone: null,
      Address: "12 Birch Street",
      Postcode: "XY45 6ZT",
      Role: "STAFF",
      Date_Joined: new Date("2022-09-01T12:15:00Z"),
      Password: ""
    },
    {
      User_ID: 18,
      Username: "rachel_admin",
      Email: "rachel@example.com",
      Phone: "07891234567",
      Address: "99 Walnut Avenue",
      Postcode: "MN23 4OP",
      Role: "ADMIN",
      Date_Joined: new Date("2021-12-15T10:45:00Z"),
      Password: ""
    },
    {
      User_ID: 19,
      Username: "sam_user",
      Email: "sam@example.com",
      Phone: "07411239876",
      Address: "77 Pine Lane",
      Postcode: "GH34 5KL",
      Role: "USER",
      Date_Joined: new Date("2023-05-10T08:20:00Z"),
      Password: ""
    },
    {
      User_ID: 20,
      Username: "tina_staff",
      Email: "tina@example.com",
      Phone: null,
      Address: "101 Cherry Street",
      Postcode: "QR12 3ST",
      Role: "STAFF",
      Date_Joined: new Date("2022-11-25T14:10:00Z"),
      Password: ""
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

  return (
    <div className="grid grid-rows-[12%_7.5%_50%_50%] h-screen">
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
          <UserLineChart data={adminData?.userChartData?.data ?? []} />
        </div>
        <div className="flex items-center">
          <CharityBarChart startDate={startDate} endDate={endDate} data={adminData?.charityMonthlyCounts ?? []}></CharityBarChart>
        </div>
      </div>
      <div className="">
        <div className="grid grid-rows-[10%_90%] overflow-hidden">
          <div className="flex items-center ">
            <h1 className="ml-10 text-[0.85vw] font-semibold">User Table</h1>
          </div>
          <div className="grid grid-rows-[15%_85%] overflow-hidden">
            <div className="grid grid-cols-[50%_50%] ml-10 mr-10">
              <div className="flex items-center">
                <Input placeholder="Search for a username..." value={query} onChange={(e) => setQuery(e.target.value)} className="max-w-sm" />
                <Button className="ml-6 text-[90%] w-[15%] bg-red-300 hover:bg-black/30">Delete</Button>
              </div>
              <div className="flex items-center">
                {/* <h1>Current Role</h1> */}
              </div>
            </div>
            <div className="ml-10 flex-1 overflow-auto p-2 mr-10">
              <DataTable data={filteredUsers} columns={userColumns} rowClick={handleRowClick} selectedID={selectedID} getRowId={(row) => row.User_ID} />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[10%_90%]  ">
        </div>
      </div>
    </div>
  )
}


