"use client"

import { LucideX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Items } from "@prisma/client"
import { useState } from "react"

type ModalProps = {
  onClose: () => void,
  onApprove: (id: number) => Promise<boolean>,
  onSendForReview: (id: number) => void,
  item: Items
}

export default function ViewDonation({ onClose, item, onApprove, onSendForReview }: ModalProps) {
  const [success, setSuccess] = useState<boolean | null>(null);
  const approve = async () => {
    const result = await onApprove(item.Item_No);
    if (result){
      setSuccess(true)
    }
    else{
      setSuccess(false)
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl border">
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Donation Details
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-200 transition"
          >
            <LucideX className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-6 py-5 space-y-6">
          <div>
            <p className={`${success === null ? "" : success ? "text-green-500" : "text-red-500"} font-semibold`}>{success === null ? "" : success ? "Updated donation, refresh page to see changes" : "Could not update changes, please try again"}</p>
            <div className="bg-gray-100 p-3 rounded-md">
              <p className="font-medium">User ID: {item.Donor_ID}</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Item Information</h3>
            <div className="grid grid-cols-2 gap-3">
              <Info label="Name" value={item.Item_Name} />
              <Info label="Brand" value={item.Brand} />
              <Info label="Size" value={item.Size} />
              <Info label="Colour" value={item.Colour} />
              <Info label="Condition" value={item.Condition} />
              <Info label="Time" value={item.Time} />
              <Info label="Pickup Date" value={new Date(item.Pickup_Date).toLocaleDateString()} />
              <Info label="Status" value={item.Status} />
            </div>
          </div>

          {item.Image && (
            <div>
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Image</h3>
              <img
                src={item.Image}
                alt="Donation item"
                className="w-full max-h-64 object-cover rounded-md border"
              />
            </div>
          )}

        </div>
        <div className="flex justify-end gap-3 border-t px-5 py-4 bg-gray-50 rounded-b-2xl">
          <Button variant="outline" className="bg-red-600 text-white hover:bg-red-500 hover:text-white" onClick={() => onSendForReview(item.Item_No)}>
            Send for Resubmit
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-500 hover:text-white" onClick={approve}>
            Approve Donation
          </Button>
        </div>

      </div>
    </div>
  )
}

function Info({ label, value }: { label: string; value: any }) {
  return (
    <div className="flex flex-col bg-gray-100 rounded-md p-2">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
