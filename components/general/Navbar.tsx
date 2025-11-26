"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import {signOut} from "next-auth/react"
import { Session } from "next-auth"

type NavbarProps = {
    session: Session
}
export default function Navbar({session}:NavbarProps){
    return(
                <div className="bg-emerald-400 h-[100px] flex justify-between items-center shadow-lg text-white font-semibold text-lg px-[5%]">
          <Image
            src="/images/sustainwear-transparent-white.png"
            alt="SustainWear Logo"
            width={120}
            height={120}
            className="w-fit"
          />
          <Link href="/" className="hover:underline">Link 2</Link>
          <Button onClick={()=>{signOut()}} className="hover:underline">Logout</Button>
        </div>
    )
}