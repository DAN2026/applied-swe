"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {signOut} from "next-auth/react"
import { Session } from "next-auth"
import { Role } from "@prisma/client"
import { useState,useEffect } from "react"
import { icons, LucideX } from "lucide-react";
import { LucideMenu } from "lucide-react";
import { UserRound, Users, Clipboard, LogOut,Settings,User } from "lucide-react"


interface NavbarProps {
  session: Session | null;
  menuOpen?: boolean;
  toggleMenu: (value: boolean) => void;
  tab?:string ;
  setTab: (tab:string) => void;
}


export default function Topbar({ setTab,session,menuOpen,toggleMenu,tab }: NavbarProps){

    const [inSession, setSessionState] = useState(false);

    const [windowWidth, setWindowWidth] = useState(0);

    const tabTitle = {
        "user" : "Dashboard / Personal",
        "staff" : "Dashboard / Charities",
        "admin" : "Dashboard / User Management",
        "account": "Dashboard / Your Account"
    }

    useEffect(() => {
        setSessionState(session != null);
    }, [session]);

    const mobileDisplay = (
        <nav>
        </nav>
    ); 



    const currentTitle = tab ? tabTitle[tab as keyof typeof tabTitle] : "Dashboard";

    const desktopDisplay = (
        <nav className="bg-white h-full flex flex-row justify-between">
            <div className="h-full w-[100%] flex">
                <div className="h-full w-[7.5%] flex items-center justify-center">
                    <Button
                    className={
                    `h-[50%] w-[40%] rounded-[8] text-black bg-transparent transition-transform duration-300
                    hover:bg-black/30 transition-all duration-300
                    ${menuOpen ? "rotate-0" : "rotate-90"}`}
                    onClick={()=>toggleMenu(!menuOpen)}>
                        <LucideMenu className="!h-[25] !w-[25]" /> 
                    </Button>   
                </div>
                <div className="h-full w-[40%] flex items-center">
                    <h1 className="text-lg font-semibold">
                        {currentTitle}
                    </h1>
                </div>
            </div>
            <div className="h-full w-[20%] flex">
                <div className=" h-full w-[33%] flex items-center justify-center">
                    <Button onClick={()=>{
                    setTab("account")} 
                    }
                    className={"text-black rounded-[4] bg-transparent hover:bg-black/30 transition-colors duration-250"}>
                        <User className=""/>
                    </Button>
                </div>
                <div className=" h-full w-[67%] flex items-center">
                    <h1 className="truncate whitespace-nowrap overflow-hidden max-w-full mr-4">
                        {session?.user.name}
                    </h1>
                </div>
            </div>
        </nav>
  );
    return(
      <div>
          {/* {mobileDisplay} */}
          {desktopDisplay}
      </div>
    )
}
