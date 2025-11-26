"use client"

import {useSession} from "next-auth/react"
import { Button } from "../ui/button";
import { useMemo, useState } from "react";
import UserDashboard from "./UserDashboard";
import { ColumnDef } from "@tanstack/react-table";
import { Items } from "@prisma/client";
import ButtonGroup from "../general/TimeGroup";
import DataTable from "../general/DataTable";

export default function StaffDashboard(){
    const session = useSession();
    const [page,setPage] = useState<string>("staff")
    const columns: ColumnDef<Items>[] = useMemo(()=>[
          {
            accessorKey: "Item_Name",
            header: "Name"
          },
          {
            accessorKey: "Brand",
            header: "Brand"
          },
          {
            accessorKey: "Date_Added",
            header: "Date Donated",
            cell: ({row}) => {
              const date = new Date(row.getValue("Date_Added") as string)
              const formattedDate = new Intl.DateTimeFormat("en-GB", {
                dateStyle: "short"
              }).format(date)
              return (
                <span>{formattedDate}</span>
              )
            }
          },
          {
            accessorKey: "Distributed",
            header: "Distribution Status",
            cell: ({row}) => {
              const status = row.getValue("Distributed") as boolean;
              return (
                <span className={status ? "text-green-500" : "text-red-500"}>{status ? "Distributed" : "Not Distributed"}</span>
              )
            }
          }
        ],[]);
    return (
        <div className="min-h-screen bg-emerald-600 grid grid-rows-[20%_10%_70%]">
                  <div className="flex flex-col justify-center bg-linear-0 from-emerald-500 to-emerald-600">
                    <h2 className="text-3xl text-center tracking-wider text-white font-bold">WELCOME</h2>
                    <h3 className="text-2xl text-center tracking-tight text-white font-semibold uppercase">{session.data?.user.name ?? ""}</h3>
                  </div>
                  <div/>
                  <div className="w-[90%] mx-auto">
                    <div className="flex flex-row w-full justify-between">
                  </div>
                  <DataTable data={filteredDonations ?? []} columns={columns} type="Items"/>
                </div>
                </div>
    )
}