"use client"

import { GetStaffDonations } from "@/lib/actions"
import { ReactElement, useEffect, useMemo, useState } from "react"
import { DonationStatus, Items } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import DataTable from "../general/DataTable"
import ButtonGroup from "../general/TimeGroup"
import { Session } from "next-auth"
import ViewDonation from "./modals/ViewDonation"
import { approveDonation } from "@/app/(main)/dashboard/actions"

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
          [DonationStatus.Collected]:"text-emerald-500 font-semibold",
          [DonationStatus.Approved]:"text-emerald-600 font-semibold",
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
          {modal}
          <div>
          <div className="flex justify-between w-[90%] mx-auto">
            <div className="mx-4">
            <ButtonGroup value={timePeriod} onChange={setTimePeriod} />
            </div>
          </div>
          <div className="w-[90%] mx-auto">
            <DataTable data={filteredDonations as Items[]} rowClick={(item:Items)=> setModal(<ViewDonation item={item} onSendForReview={()=>{}} onApprove={async (id:number) => await approveDonation(id)} onClose={()=>{setModal(null)}}/>)} columns={columns}/>
          </div>
        </div>
        </div>
  )
}