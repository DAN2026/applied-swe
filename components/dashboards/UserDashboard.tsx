"use client"

import { GetUserDonations } from "@/lib/actions"
import { useEffect, useMemo, useState } from "react"
import { DonationStatus, Items } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import DataTable from "../general/DataTable"
import ButtonGroup from "../general/TimeGroup"
import { Button } from "../ui/button"
import CreateDonation from "./modals/CreateDonation"
import { Session } from "next-auth"

function useDonations(session: Session) {
  const [donations, setDonations] = useState<Items[]>([])

  useEffect(() => {
    const fetch = async () => {
      const d = await GetUserDonations(session)
      setDonations(d as Items[])
    }
    fetch()
  }, [session])

  return { donations, setDonations }
}

export default function UserDashboard({ session }: { session: Session }) {
  const { donations } = useDonations(session)
  const [timePeriod, setTimePeriod] = useState("All Time")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredDonations = useMemo(() => {
    const now = new Date()

    return donations.filter(donation => {
      const d1 = new Date(donation.Date_Added)
      const clone = new Date(now) // clone to avoid mutating original

      switch (timePeriod) {
        case "3 Months":
          clone.setMonth(clone.getMonth() - 3)
          return d1 > clone
        case "6 Months":
          clone.setMonth(clone.getMonth() - 6)
          return d1 > clone
        case "1 Year":
          clone.setMonth(clone.getMonth() - 12)
          return d1 > clone
        default:
          return true
      }
    })
  }, [donations, timePeriod])

  const columns: ColumnDef<Items>[] = useMemo(() => [
    { accessorKey: "Donor_ID", header: "Donor ID" },
    { accessorKey: "Item_Name", header: "Name", enableSorting: true },
    { accessorKey: "Brand", header: "Brand", enableSorting: true },
    { accessorKey: "Condition", header: "Condition", enableSorting: true },
    {
      accessorKey: "Date_Added",
      header: "Date Donated",
      enableSorting: true,
      cell: ({ row }) => {
        const date = new Date(row.getValue("Date_Added"))
        return (
          <span>
            {new Intl.DateTimeFormat("en-GB", { dateStyle: "short" }).format(date)}
          </span>
        )
      },
    },
    {
      accessorKey: "Status",
      header: "Status",
      enableSorting: true,
      cell: ({ row }) => {
        const status = row.getValue("Status") as DonationStatus

        const statusText = {
          [DonationStatus.Distributed]: "text-green-700 font-semibold",
          [DonationStatus.Collected]: "text-green-700 font-semibold",
          [DonationStatus.Approved]: "text-green-500 font-semibold",
          [DonationStatus.Pending]: "text-orange-500 font-semibold",
          [DonationStatus.Rejected]: "text-red-500 font-semibold",
        }

        return <span className={statusText[status]}>{status}</span>
      },
    },
  ], [])

  return (
    <div className="grid grid-cols-[1fr_280px] gap-6 px-6 h-[calc(100vh-80px)]">

      {isModalOpen && (
        <CreateDonation onClose={() => setIsModalOpen(false)} />
      )}

      <div className="flex flex-col overflow-hidden bg-white rounded-xl border shadow">
        <div className="flex justify-between items-center p-3 border-b bg-gray-50">
          <Button
            variant="outline"
            className="rounded-none text-lg"
            onClick={() => setIsModalOpen(true)}
          >
            Create Donation
          </Button>

          <ButtonGroup value={timePeriod} onChange={setTimePeriod} />
        </div>

        <div className="flex-1 overflow-auto p-2">
          {/* <DataTable data={filteredDonations} columns={columns} /> */}
        </div>
      </div>

      <div className="flex flex-col justify-start gap-6 sticky top-20">

        <div className="rounded-xl border shadow p-4 bg-white">
          <h2 className="text-center text-sm font-medium text-gray-600">
            Total Donations
          </h2>
          <p className="text-center text-3xl font-bold mt-1">
            {donations.length}
          </p>
        </div>

        <div className="rounded-xl border shadow p-4 bg-white">
          <h2 className="text-center text-sm font-medium text-gray-600">
            Prevented Emissions
          </h2>
          <p className="text-center text-3xl font-bold mt-1">
            {donations.length * 10}
            <span className="text-xl"> kg CO₂</span>
          </p>
        </div>

      </div>
    </div>
  )
}
