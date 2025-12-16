"use server"

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Navbar from "@/components/general/LandingNavbar";

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
    <div>{children}</div>
  );
}
