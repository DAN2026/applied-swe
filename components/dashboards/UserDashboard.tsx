"use client"

import { GetStaffDonations, GetUserDonations } from "@/lib/actions"
import { useEffect, useMemo, useState } from "react"
import { DonationStatus, Items } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import DataTable from "../general/DataTable"
import ButtonGroup from "../general/TimeGroup"
import { Button } from "../ui/button"
import { useSession } from "next-auth/react"
import CreateDonation from "./modals/CreateDonation"
import { Session } from "next-auth"
import { LucideArrowUpFromDot } from "lucide-react"

function useDonations(session:Session) {
  const [donations, setDonations] = useState<Items[]>([])
  useEffect(() => {
    const fetch = async () => {
      const d = await GetUserDonations(session)
      setDonations(d as Items[])
    }
    fetch()
  }, [session])
  return {donations,setDonations}
}

export default function UserDashboard({session}:{session:Session}) {
  const {donations, setDonations} = useDonations(session)
  const [timePeriod, setTimePeriod] = useState("All Time")
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    {accessorKey:"Condition", header:"Condition", enableSorting:true},
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
          [DonationStatus.Collected]:"text-green-500 font-semibold",
          [DonationStatus.Approved]:"text-green-300 font-semibold",
          [DonationStatus.Pending]:"text-orange-500 font-semibold",
      }
        const status = row.getValue("Status") as DonationStatus
        return <span className={statusText[status]}>
          {status}
        </span>
      }
    }
  ], [])

  return (
    <div className="grid grid-rows-[10%_90%]">
      {isModalOpen && <CreateDonation onClose={() => setIsModalOpen(false)} />}
      <div>
      <div className="flex justify-between w-[90%] mx-auto">
        <div>
        <Button variant="outline" onClick={() => setIsModalOpen(true)}>Create Donation</Button>
        </div>
        <div className="mx-4">
        <ButtonGroup value={timePeriod} onChange={setTimePeriod} />
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <DataTable data={filteredDonations} columns={columns} />
      </div>
    </div>
    </div>
  )
}