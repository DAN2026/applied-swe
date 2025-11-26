import { ChevronDownIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Calendar } from "../ui/calendar"
import { useState } from "react"

export default function DatePicker({name,onChange}:{name:string,onChange:(value:Date|undefined)=>void}){
    const [date,setDate] = useState<Date|undefined>()
    const [open, setOpen] = useState<boolean>(false)
    const today = new Date();
    const minDate = new Date()
    const maxDate = new Date()
    minDate.setDate(today.getDate()+3)
    maxDate.setDate(minDate.getDate()+30)
    return(
        <div className="group flex shadow-lg items-center border-2 rounded-md px-2 my-2 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-blue-300 transition-all ease-out duration-300">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-fit justify-between font-normal text bg-gray-100 border-0"
          >
            {date ? date.toLocaleDateString() : "Select pickup date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            disabled={{before: minDate, after: maxDate}}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
              onChange(date)
            }}
          />
        </PopoverContent>
      </Popover>
      <input
        type="hidden"
        name={name}
        value={date ? date.toISOString() : ""}
      />

      </div>
    )
}