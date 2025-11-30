"use client"

import { GetStaffDonations } from "@/lib/actions"
import { useEffect, useMemo, useState } from "react"
import { Items } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import DataTable from "../general/DataTable"
import ButtonGroup from "../general/TimeGroup"
import { Button } from "../ui/button"
import { useSession } from "next-auth/react"
import CreateDonation from "./modals/CreateDonation"

function useDonations() {
  const [donations, setDonations] = useState<Items[]>([])
  useEffect(() => {
    const fetch = async () => {
      const d = await GetStaffDonations()
      setDonations(d as Items[])
    }
    fetch()
  }, [])
  return donations
}

export default function UserDashboard() {
  const { data: session } = useSession()
  const donations = useDonations()
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
      accessorKey: "Collected",
      header: "Collection Status",
      enableSorting: true,
      cell: ({row}) => {
        const status = row.getValue("Collected") as boolean
        return <span className={status ? "text-green-500" : "text-red-500"}>
          {status ? "Collected" : "Awaiting Collection"}
        </span>
      }
    },
    {
      accessorKey: "Distributed",
      header: "Distribution Status",
      enableSorting: true,
      cell: ({ row }) => {
        const status = row.getValue("Distributed") as boolean
        return <span className={status ? "text-green-500" : "text-red-500"}>
          {status ? "Distributed" : "Not Distributed"}
        </span>
      }
    }
  ], [])

  const Layout = ({actions }: {actions?: React.ReactNode }) => (
    <div className="min-h-screen bg-emerald-600 grid grid-rows-[10%_90%]">
      {isModalOpen && <CreateDonation onClose={() => setIsModalOpen(false)} />}
      <div className="flex flex-col justify-center p-5 text-white">
        <h2 className="text-2xl m-5 font-semibold">Welcome {session?.user.name}</h2>
      </div>
      <div>
      <div className="flex justify-between w-[90%] mx-auto">
        <div>
        {actions}
        </div>
        <div className="mx-4">
        <ButtonGroup value={timePeriod} onChange={setTimePeriod} />
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <DataTable data={filteredDonations} columns={columns} type="Items" />
      </div>
    </div>
    </div>
  )

  return (
    <>
      {session?.user.role === "STAFF" ? (
        <Layout
        />
      ) : (
        <Layout
          actions={<Button variant="outline" onClick={() => setIsModalOpen(true)}>Create Donation</Button>}
        />
      )}
    </>
  )
}