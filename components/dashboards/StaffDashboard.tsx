"use client"

import { GetStaffDonations } from "@/lib/actions"
import { ReactElement, useEffect, useMemo, useState } from "react"
import { DonationStatus, Items } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import DataTable from "../general/DataTable"
import ButtonGroup from "../general/TimeGroup"
import { Session } from "next-auth"

function useDonations(session:Session) {
  const [donations, setDonations] = useState<Items[]>([])
  useEffect(() => {
    const fetch = async () => {
      const d = await GetStaffDonations(session)
      setDonations(d as Items[])
    }
    fetch()
  }, [])
  return donations
}

export default function UserDashboard({session}:{session:Session}) {
  const donations = useDonations(session)
  const [timePeriod, setTimePeriod] = useState("All Time")
  const [modal, setModal] = useState<ReactElement | null>(null)

  const filteredDonations = useMemo(() => {
    const now = new Date()
    return donations.filter(donation => {
      const d1 = new Date(donation.Date_Added)
      switch (timePeriod) {
        case "3 Months":
          return d1 > new Date(now.setMonth(now.getMonth() - 3))
        case "6 Months":
          return d1 > new Date(now.setMonth(now.getMonth() - 6))
        case "1 Year":
          return d1 > new Date(now.setMonth(now.getMonth() - 12))
        default:
          return true
      }
    })
  }, [donations, timePeriod])

  const columns: ColumnDef<Items>[] = useMemo(() => [
    { accessorKey: "Donor_ID", header: "Donor ID"},
    { accessorKey: "Item_Name", header: "Name", enableSorting: true },
    { accessorKey: "Brand", header: "Brand", enableSorting: true },
    {
      accessorKey: "Date_Added",
      header: "Date Donated",
      enableSorting: true,
      cell: ({ row }) => {
        const date = new Date(row.getValue("Date_Added") as string)
        return <span>{new Intl.DateTimeFormat("en-GB", { dateStyle: "short" }).format(date)}</span>
      }
    },
    {
      accessorKey: "Status",
      header: "Status",
      enableSorting: true,
      cell: ({row}) => {
        const statusText = {
          [DonationStatus.Distributed]:"text-green-700 font-semibold",
          [DonationStatus.Collected]:"text-green-700 font-semibold",
          [DonationStatus.Approved]:"text-green-500 font-semibold",
          [DonationStatus.Pending]:"text-orange-500 font-semibold",
          [DonationStatus.Rejected]:"text-red-500 font-semibold"
      }
        const status = row.getValue("Status") as DonationStatus
        return <span className={statusText[status]}>
          {status}
        </span>
      }
    }
  ], [])

  return (
    <div className="gap-6 px-6 h-[calc(100vh-80px)]">
      <div className="flex flex-col overflow-hidden bg-white rounded-xl border shadow">
        <div className="flex justify-between items-center p-3 border-b bg-gray-50">
          <ButtonGroup value={timePeriod} onChange={setTimePeriod} />
        </div>
        <div className="flex-1 overflow-auto p-2">
          <DataTable data={filteredDonations} columns={columns}/>
        </div>
      </div>
      </div>
  )
}