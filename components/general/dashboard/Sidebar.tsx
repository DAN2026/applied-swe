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
import { UserRound, Users, Clipboard, LogOut,Settings } from "lucide-react"

interface NavbarProps {
  session: Session | null;
  tab?: string;
  setTab: (value: string) => void;
  menuOpen?: boolean;
}


export default function Sidebar({ session, tab, setTab,menuOpen }: NavbarProps){

  const [inSession, setSessionState] = useState(false);

  useEffect(() => {
    setSessionState(session != null);
  }, [session]);

  const generalNavLinks = [

    { label: "Your Donations", onClick: () => setTab("user"), icon: UserRound, roles: ["USER", "STAFF", "ADMIN"] },
    { label: "Charity Donations", onClick: () => setTab("staff"), icon: Clipboard, roles: ["STAFF", "ADMIN"] },
    { label: "Manage Users", onClick: () => setTab("admin"), icon: Users, roles: ["ADMIN"] },
];

  const accountNavLinks = [
    { label: "Settings", onClick: () => signOut(), icon: Settings, roles: ["USER", "STAFF", "ADMIN"] },
    { label: "Logout", onClick: () => signOut(), icon: LogOut, roles: ["USER", "STAFF", "ADMIN"] },
];


const mobileDisplay = (
  <nav>
  </nav>
); 

  const desktopDisplay = (
    <nav className= 
    {menuOpen ? 
    "fixed w-64 left-0 top-0 w-64 bg-gradient-to-b from-emerald-600 to-emerald-900 h-full transform transition-transform duration-300 translate-x-0"
     : "fixed w-64 left-0 top-0 w-64 bg-gradient-to-b from-emerald-600 to-emerald-900 h-full transform transition-transform duration-300 -translate-x-full"}>
      <div className="h-full flex flex-col">
        <div className="h-auto flex flex-row items-center">
          <Link href="/" className="flex flex-row items-center gap-2 text-white font-bold mt-5 mb-10">
            <div className="relative h-12 w-12 ml-8">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="">Sustain Wear</span>
          </Link>
        </div>
        <div className="h-auto ml-5 mt-5">
          <h1 className="text-white">General</h1>
          {generalNavLinks
          .filter(link => session?.user?.role && link.roles.includes(session.user.role))
          .map((link, index) => {
            const Icon = link.icon;
            return (
              <Button
                key={index}
                onClick={link.onClick}
                className="
                w-full flex items-center justify-start rounded-none text-white p-8 w-[90%] mt-1 rounded-[12]
                bg-transparent hover:bg-white/10 transition-colors duration-350"
              >
                {Icon && <Icon className="mr-2 ml-3 " />}
                <span>{link.label}</span>
              </Button>
            );
          })} 
        </div>
        <div className="h-auto ml-5 mt-5">
          <h1 className="text-white">Account</h1>
          {accountNavLinks
          .filter(link => session?.user?.role && link.roles.includes(session.user.role))
          .map((link, index) => {
            const Icon = link.icon;
            return (
              <Button
                key={index}
                onClick={link.onClick}
                className="w-full flex items-center justify-start  rounded-none text-white p-8  w-[90%] mt-1 rounded-[12] bg-transparent hover:bg-white/10"
              >
                {Icon && <Icon className="mr-2 ml-3 " />}
                <span>{link.label}</span>
              </Button>
            );
          })} 
        </div>
      </div>
    </nav>

  );
    return(
      <div>
          {mobileDisplay}
          {desktopDisplay}
      </div>
    )
}

// {generalNavLinks
//         .filter(link => session?.user?.role && link.roles.includes(session.user.role))
//         .map((link, index) => {
//             const Icon = link.icon;
//             return (
//               <Button
//                 key={index}
//                 onClick={link.onClick}
//                 className="w-full flex items-center justify-start  rounded-none text-white p-8  w-[90%] mt-1 rounded-[12] bg-transparent hover:bg-white/10"
//               >
//                 {Icon && <Icon className="mr-2 ml-3 " />}
//                 <span>{link.label}</span>
//               </Button>
//             );
//           })} 

      //     <div className="relative h-full w-12 ml-5 "> 
      //       <Image
      //         src="/images/Logo.png"
      //         alt="Logo"
      //         fill
      //         className="object-contain"
      //         priority
      //       />
      //     </div>
      //     <Link className="text-white w-full text- font-bold" href="/">Sustain Wear</Link>
      // </div>