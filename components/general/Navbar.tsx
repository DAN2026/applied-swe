"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import {signOut} from "next-auth/react"
import { Session } from "next-auth"
import { Role } from "@prisma/client"
import { useState,useEffect } from "react"
import { LucideX } from "lucide-react";
import { LucideMenu } from "lucide-react";

interface NavbarProps {
  session: Session | null;
}


export default function Navbar({ session }: NavbarProps){



  const [menuOpen, setMenuOpen] = useState(false);

  const [inSession, setSessionState] = useState(false);

  console.log("Session:", session);

  useEffect(() => {
    setSessionState(session != null);
  }, [session]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  if (session) {
  navLinks.push({ href: "/dashboard", label: "Dashboard" });
}


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };



  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);


  console.log("Navbar renders");



const mobileDisplay = (
  <nav className="md:hidden fixed w-full h-[10vh] bg-[#123715]/85">
      <div className="flex justify-between items-center h-full w-full px-4">
         <div className="grid grid-cols-[auto_1fr] items-center gap-2 min-w-[100px] max-w-[200px] h-full ">
          <div className="relative h-full w-10"> 
            <Image
              src="/images/Logo.png"
              alt="Logo"
              fill
              className="object-contain "
              priority
            />
          </div>
          <Link className="text-white text-[clamp(1rem,2vw,1.1rem)] " href="/">Sustain Wear</Link>
        </div>
          <div className="h-full w-[10%] flex items-center justify-center">
            <button className="text-white h-full w-full flex items-center justify-center transition-colors duration-200 hover:bg-[#123715]/15" onClick={toggleMenu}>{!menuOpen ? <LucideMenu/>: <LucideX/> }</button>
          </div>
      </div>
      <div className= {menuOpen ? "bg-[#123715]/85 w-full py-4 p-0 translate-y-0 pb-0 pt-0" : "w-0 py-0 -translate-y-100"}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="h-full flex items-center text-white text-[clamp(1.2rem,2vw,1.4rem)] px-6 pt-6 pb-6 transition-colors duration-200 hover:bg-[#123715]/15"
              > 
                {link.label}
              </Link>
            ))}      
            <div></div>  
      </div>
  </nav>
);  

// className="relative h-full min-w-[50px] max-w-[60px]"

    const desktopDisplay = (
      <nav className="hidden md:flex fixed w-full h-[10vh] bg-[#123715]/85">
        <div className="flex justify-between items-center h-full w-full px-8">
         <div className="grid grid-cols-[auto_1fr] items-center gap-2 min-w-[100px] max-w-[200px] h-full ">
          <div className="relative h-full w-16"> 
            <Image
              src="/images/Logo.png"
              alt="Logo"
              fill
              className="object-contain "
              priority
            />
          </div>
          <Link className="text-white text-[clamp(0.4rem,2vw,1rem)] " href="/">Sustain Wear</Link>
        </div>
          <div className="flex h-full items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="h-full flex items-center text-white text-[clamp(0.4rem,2vw,1rem)] px-6 transition-colors duration-200 hover:bg-[#123715]/15  "
              >
                {link.label}
              </Link>
            ))}
            {session ==null  ? 
            <Link className="ml-6 flex items-center text-black bg-white text-[clamp(0.4rem,2vw,1.1rem)] pl-7 pr-7 pt-2 pb-2 rounded-[3px] shadow-[0_0_11px_1px_rgba(255,255,255,0.2)]" href="/login">Login</Link>
            : <Link onClick={() => signOut()} className="ml-6 flex items-center text-black bg-white text-[clamp(0.4rem,2vw,1.1rem)] pl-7 pr-7 pt-2 pb-2 rounded-[3px] shadow-[0_0_11px_1px_rgba(255,255,255,0.2)]" href="/login">Logout</Link>}
          </div>
        </div>
      </nav>

    );



    return(
      <div>
          {mobileDisplay}
          {desktopDisplay}
      </div>
        //   <div className="bg-emerald-400 h-[100px] flex justify-between items-center shadow-lg text-white font-semibold text-lg px-[5%]">
        //   <Link href="/" className="hover:underline">Test Link</Link>
        //   <Link href="/" className="hover:underline">Test Link</Link>
        //   <Image
        //     src="/images/sustainwear-transparent-white.png"
        //     alt="SustainWear Logo"
        //     width={120}
        //     height={120}
        //     className="w-fit"
        //   />
        //   <Link href="/" className="hover:underline">Test Link</Link>
        //   <Button onClick={()=>{signOut()}} className="hover:underline">Logout</Button>
        // </div>

    )
}