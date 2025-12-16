"use client"

import { useEffect, useState } from "react"
import { Session } from "next-auth"
import { Button } from "../ui/button"
import { GetUser, UpdateUser } from "@/lib/actions"
import { Spinner } from "../ui/spinner"

export default function Account({ session }: { session: Session }) {
  const [username, setUsername] = useState(session.user?.name || "")
  const [email] = useState(session.user?.email || "")
  const [mobile, setMobile] = useState<string|null>(null)
  const [address, setAddress] = useState("")
  const [postcode, setPostcode] = useState("")
  const [password, setPassword] = useState("")
  const [pending, setPending] = useState<boolean>(false)
  const [errors, setErrors] = useState<Record<string, { errors: string[]}> | null>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const result : any= await UpdateUser(formData, session)
    setPending(false)
    if (!result?.success){
        setErrors(result?.errors || null);
        setSuccess(false)
    }
    else {
      setErrors(null);
      setSuccess(true);
  }
}

useEffect(()=>{
  const getUserData = async () =>  {
  const user = await GetUser(session)
  if (user){
    setMobile(user.Phone ?? null)
    setAddress(user.Address)
    setPostcode(user.Postcode)
  }
  }
  getUserData();
},[session])

  return (
    <div className="px-6">
      <form onSubmit={handleSubmit} className="flex flex-col overflow-hidden bg-white rounded-xl border shadow">
        <div className="flex justify-between items-center p-3 border-b bg-gray-50">
          <h2 className="text-xl font-semibold">Account Settings</h2>
          <Button type="submit" disabled={pending} className="rounded bg-emerald-600 text-white text-sm hover:bg-emerald-700 disabled:bg-emerald-600/50">Save Changes {pending ? <Spinner/> : <></>} </Button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          {success ? <p className="text-sm text-green-500 font-semibold">Updated user information</p> : <></>}
            {errors?.["general"]?.errors.map((errorMessage, errorIndex) => (
              <p className="text-red-600 tracking-tighter text-sm w-full" key={errorIndex}>{errorMessage}</p>
            ))}          <div>
            <label className="text-sm font-medium">Username</label>
            <input
            name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
            {errors?.["username"]?.errors.map((errorMessage, errorIndex) => (
              <p className="text-red-600 tracking-tighter text-sm w-full" key={errorIndex}>{errorMessage}</p>
            ))}
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              value={email}
              disabled
              className="w-full mt-1 px-3 py-2 border rounded bg-gray-100 text-gray-500"
            />
            <input name="email" value={email} type="hidden"/>
            {errors?.["email"]?.errors.map((errorMessage, errorIndex) => (
              <p className="text-red-600 tracking-tighter text-sm w-full" key={errorIndex}>{errorMessage}</p>
            ))}
          </div>

          <div>
            <label className="text-sm font-medium">New Password</label>
            <input
            name="password"
              type="password"
              value={password}
              placeholder="Enter new password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
            {errors?.["password"]?.errors.map((errorMessage, errorIndex) => (
              <p className="text-red-600 tracking-tighter text-sm w-full" key={errorIndex}>{errorMessage}</p>
            ))}
          </div>

          <div>
            <label className="text-sm font-medium">Mobile</label>
            <input
            name="mobile"
              value={mobile ?? ""}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
            {errors?.["mobile"]?.errors.map((errorMessage, errorIndex) => (
              <p className="text-red-600 tracking-tighter text-sm w-full" key={errorIndex}>{errorMessage}</p>
            ))}
          </div>

          <div>
            <label className="text-sm font-medium">Address</label>
            <input
            name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
            {errors?.["address"]?.errors.map((errorMessage, errorIndex) => (
              <p className="text-red-600 tracking-tighter text-sm w-full" key={errorIndex}>{errorMessage}</p>
            ))}
          </div>
          <div>
            <label className="text-sm font-medium">Postcode</label>
            <input
            name="postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded"
            />
            {errors?.["postcode"]?.errors.map((errorMessage, errorIndex) => (
              <p className="text-red-600 tracking-tighter text-sm w-full" key={errorIndex}>{errorMessage}</p>
            ))}
          </div>

        </div>
      </form>
    </div>
  )
  
}
