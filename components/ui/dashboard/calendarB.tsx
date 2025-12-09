"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Popover,PopoverContent,PopoverTrigger } from "@/components/ui/popover"

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
]

type CalendarBProps = {
  label?: string  
  dateType? : string   
  setSqlTimestamp?: (value: string) => void   
}

function monthYearToSqlTimestamp(year: number, monthIndex: number,dateType:string): string {
  const pad = (n: number, z = 2) => n.toString().padStart(z, "0")

  if (!dateType) return ""

  if (dateType === "Start Date") {
    return `${year}-${pad(monthIndex + 1)}-01 00:00:00.000` // Should give 1st day of month
  }

  if (dateType === "End Date") {

    const lastDay = new Date(year, monthIndex + 1, 0).getDate() // 0 = last day of previous monh
    return `${year}-${pad(monthIndex + 1)}-${pad(lastDay)} 23:59:59.999`
  }

  return ""
}

export function CalendarB({label,dateType,setSqlTimestamp}:CalendarBProps) {

  const [open, setOpen] = useState(false)

  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())


  return (
    <div className="flex flex-row mr-2 items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            id="date"
            className="hover:bg-black/30 transition-all duration-300"
          >
            {selectedMonth !== null
              ? `${months[selectedMonth]} ${selectedYear}`
              : label}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-4">
          <div className="flex justify-between items-center mb-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedYear(selectedYear - 1)}
            >
              ←
            </Button>
            <span className="font-medium">{selectedYear}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedYear(selectedYear + 1)}
            >
              →
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {months.map((month, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedMonth(index)
                  setOpen(false)

                  if(dateType){
                    const timestamp = monthYearToSqlTimestamp(selectedYear, index, dateType);
                    setSqlTimestamp?.(timestamp);
                  }
                }}
                className={`
                  p-2 rounded-md text-sm
                  hover:bg-gray-200 transition
                  ${
                    selectedMonth === index
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }
                `}
              >
                {month.slice(0, 3)}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
