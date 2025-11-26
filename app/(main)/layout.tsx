"use server"

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Navbar from "@/components/general/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const session = await getServerSession(authOptions)
    console.log(session)
    if (!session?.user){
      redirect("/")
    }
  if (session.user.needsOnboarding){
    redirect("/register/external")
  }
    
  return (
    <div className="">
        <Navbar session={session}/>
        {children}
    </div>
  );
}
