"use server"

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import LandingNavbar from "@/components/general/";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const session = await getServerSession(authOptions)
    if (!session?.user){
      redirect("/")
    }
  if (session.user.needsOnboarding){
    redirect("/register/external")
  }
    
  return (
    <div className="">
        <LandingNavbar session={session}/>
        {children}
    </div>
  );
}
