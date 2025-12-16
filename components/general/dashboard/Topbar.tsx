"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import { Session } from "next-auth"
import { Role } from "@prisma/client"
import { useState, useEffect } from "react"
import { icons, LucideX } from "lucide-react";
import { LucideMenu } from "lucide-react";
import { UserRound, Users, Clipboard, LogOut, Settings, User } from "lucide-react"


interface NavbarProps {
    session: Session | null;
    menuOpen?: boolean;
    toggleMenu: (value: boolean) => void;
    setTab: (value: string) => void;
    tab?: string;
}


export default function Topbar({ session, menuOpen, toggleMenu, tab, setTab }: NavbarProps) {

    const [inSession, setSessionState] = useState(false);

    const [windowWidth, setWindowWidth] = useState(0);

    const tabTitle = {
        "user": "Dashboard / Personal",
        "staff": "Dashboard / Charities",
        "admin": "Dashboard / User Management",
    }

    const currentTitle = tab ? tabTitle[tab as keyof typeof tabTitle] : "Dashboard";


    useEffect(() => {
        setSessionState(session != null);
    }, [session]);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // initial value
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);




    const mobileDisplay = windowWidth < 1000 ? (
        <nav className="bg-white h-[100px] flex flex-row justify-between">
            <div className="h-full w-[70%] flex">
                <div className="h-full w-[7.5%] flex items-center justify-center ml-2 mr-4">
                    <Button
                        className={`rounded-[8] text-black bg-transparent  hover:bg-black/30 transition-all duration-300
                        ${menuOpen ? "rotate-0" : "rotate-90"}`}
                        onClick={() => toggleMenu(!menuOpen)}>
                        <LucideMenu className="" />
                    </Button>
                </div>
                <div className="h-full w-[60%] flex items-center">
                    <h1 className="text-lg font-semibold">
                        {currentTitle}
                    </h1>
                </div>
            </div>
            <div className="h-full w-[30%] flex">
                <div className=" h-full w-[33%] flex items-center justify-center">
                    <Button className={"text-black rounded-[4] bg-transparent hover:bg-black/30 transition-colors duration-250"} onClick={()=>setTab("account")}>
                        <User className="" />
                    </Button>
                </div>
                <div className=" h-full w-[67%] flex items-center">
                    <h1 className="truncate whitespace-nowrap overflow-hidden max-w-full mr-4">
                        {session?.user.name}
                    </h1>
                </div>
            </div>
        </nav>
    ) : null;




    const desktopDisplay = windowWidth > 1000 ? (
        <nav className="bg-white h-[100px] flex flex-row justify-between">
            <div className="h-full w-[100%] flex">
                <div className="h-full w-[7.5%] flex items-center justify-center">
                    <Button
                        className={`rounded-[8] text-black bg-transparent  hover:bg-black/30 transition-all duration-300
                        ${menuOpen ? "rotate-0" : "rotate-90"}`}
                        onClick={() => toggleMenu(!menuOpen)}>
                        <LucideMenu className="" />
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
                    <Button className={"text-black rounded-[4] bg-transparent hover:bg-black/30 transition-colors duration-250"} onClick={() => setTab?.("account")}>
                        <User className="" />
                    </Button>
                </div>
                <div className=" h-full w-[67%] flex items-center">
                    <h1 className="truncate whitespace-nowrap overflow-hidden max-w-full mr-4">
                        {session?.user.name}
                    </h1>
                </div>
            </div>
        </nav>
    ) : null;

    return (
        <div>
            {mobileDisplay}
            {desktopDisplay}
        </div>
    )
}
