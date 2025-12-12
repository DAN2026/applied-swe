"use client"

import { useState } from "react"
import { Session } from "next-auth"
import { Button } from "../ui/button"

export default function Account({ session }: { session: Session }) {
  const [username, setUsername] = useState(session.user?.name || "")
  const [email] = useState(session.user?.email || "")
  const [mobile, setMobile] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="px-6">
      <div className="flex flex-col overflow-hidden bg-white rounded-xl border shadow">
        <div className="flex justify-between items-center p-3 border-b bg-gray-50">
          <h2 className="text-xl font-semibold">Account Settings</h2>
          <Button className="rounded bg-emerald-600 text-white text-sm hover:bg-emerald-700">Save Changes</Button>
        </div>

        <div className="flex flex-col p-4 space-y-4">

          <div>
            <label className="text-sm font-medium">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              value={email}
              disabled
              className="w-full mt-1 px-3 py-2 border rounded bg-gray-100 text-gray-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">New Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter new password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Mobile</label>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Postcode</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
