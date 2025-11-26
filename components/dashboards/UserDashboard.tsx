"use client"

import { GetUserDonations } from "@/lib/actions"
import { useEffect, useMemo, useState } from "react"
import { Items } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import DataTable from "../general/DataTable"
import ButtonGroup from "../general/TimeGroup"
import { Button } from "../ui/button"
import { useSession } from "next-auth/react"
import CreateUser from "./modals/CreateUser"

export default function UserDashboard(){
    const session = useSession();
    const [donations,setDonations] = useState<Items[]|null>(null)
    const [filteredDonations, setFilteredDonations] = useState<Items[] | null>(null)
    const [timePeriod, setTimePeriod] = useState<string>("All Time");
    const [modal, setModal] = useState<React.ReactElement | null>(null)
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

    const donationModal = () => {
      setModal(<CreateUser onClose={closeModal}/>)
    }
    const closeModal = () => {
      setModal(null);
    }
    const handleChange = (value:string) => {
      setTimePeriod(value)
      if (!donations) return
      const now = new Date()
      const filtered = donations?.filter((donation)=>{
        const d1: Date = new Date(donation.Date_Added)
        switch(value){
          case "3 Months": {
            const d2: Date = new Date()
            d2.setMonth(now.getMonth()-3)
            return d1 > d2;
          }
          case "6 Months": {
            const d2: Date = new Date()
            d2.setMonth(now.getMonth() - 6);
            return d1 > d2;
          }
          case "1 Year": {
            const d2: Date = new Date()
            d2.setMonth(now.getMonth() - 12);
            return d1 > d2;
          }
          case "All Time": {
            return true
          }
          default: {return true}
        }
      })
      setFilteredDonations(filtered)
    }
    useEffect(()=>{
        const getDonations = async () => {
            const d = await GetUserDonations()
            setDonations(d)
            setFilteredDonations(d)
        }
        getDonations();
    },[])
    return(
      <div className="min-h-screen bg-emerald-600 grid grid-rows-[20%_10%_70%]">
          {modal}
          <div className="flex flex-col justify-center bg-linear-0 from-emerald-500 to-emerald-600">
            <h2 className="text-3xl text-center tracking-wider text-white font-bold">WELCOME</h2>
            <h3 className="text-2xl text-center tracking-tight text-white font-semibold uppercase">{session.data?.user.name ?? ""}</h3>
          </div>
          <div/>
          <div className="w-[90%] mx-auto">
            <div className="flex flex-row w-full justify-between">
              <div className="ml-[2%]">
                <Button onClick={donationModal} className="text-base rounded-b-none" variant="outline">Create Donation</Button>
              </div>
            <div className="mr-[2%]">
              <ButtonGroup value={timePeriod} onChange={handleChange}/>
            </div>
          </div>
          <DataTable data={filteredDonations ?? []} columns={columns} type="Items"/>
        </div>
        </div>
    )}