"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import {signOut} from "next-auth/react"
import { Session } from "next-auth"


export default function Navbar({session}:{session:Session}){
    return(
          <div className="bg-emerald-400 h-[100px] flex justify-between items-center shadow-lg text-white font-semibold text-lg px-[5%]">
          <Link href="/" className="hover:underline">Test Link</Link>
          <Link href="/" className="hover:underline">Test Link</Link>
          <Image
            src="/images/sustainwear-transparent-white.png"
            alt="SustainWear Logo"
            width={120}
            height={120}
            className="w-fit"
          />
          <Link href="/" className="hover:underline">Test Link</Link>
          <Button onClick={()=>{signOut()}} className="hover:underline">Logout</Button>
        </div>
    )
}