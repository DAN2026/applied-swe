import { useEffect, useState } from "react"
import { LucideX } from "lucide-react"
import Form from "@/components/general/Form"
import { GetCharities } from "@/lib/actions"
import { handleDonation } from "@/app/(pages)/(main)/dashboard/actions"

type ModalProps = {
  onClose: () => void
}

export default function CreateDonation({ onClose }: ModalProps) {
  const [charities, setCharities] = useState<{ id: number; name: string }[] | null>(null)

  useEffect(() => {
    const fetchCharities = async () => {
      const data = await GetCharities()
      setCharities(data)
    }
    fetchCharities()
  }, [])

  const minDate=new Date()
  minDate.setDate(new Date().getDate() + 3)
  const maxDate = new Date()
  maxDate.setDate(minDate.getDate()+30)
  const fields = [
    { name: "name", placeholder: "Item Name", type: "text", className: "w-full", fieldType: "input" },
    { name: "brand", placeholder: "Brand", type: "text", className: "w-full", fieldType: "input" },
    { name: "size", placeholder: "Size", type: "text", className: "w-1/2", fieldType: "select", options: ["XXL","XL","L","M","S","XS"] },
    { name: "condition", placeholder: "Condition", type: "text", className: "w-1/2", fieldType: "select", options: ["New","LikeNew","Worn","HeavilyWorn"] },
    { name: "colour", placeholder: "Colour", type: "text", className: "w-full", fieldType: "input" },
    { name: "time", placeholder: "Time", type: "text", className: "w-1/2", fieldType: "select", options: ["Morning","Afternoon","Evening"] },
    { name: "date", placeholder: "Pickup Date", type: "text", className: "w-1/2", fieldType: "date", min:minDate.toISOString().split("T")[0], maxDate:maxDate.toISOString().split("T")[0] },
    { name: "charity", placeholder: "Charity", type: "text", className: "w-full", fieldType: "select", options: charities?.map(c => c.name) },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl rounded-xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-semibold text-gray-800">Create Donation</h2>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition"
          >
            <LucideX className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
          <Form successFunc={onClose} fields={fields} action={handleDonation} successMsg="Donation created" />
        </div>
      </div>
    </div>
  )
}