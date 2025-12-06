"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "./../api/auth/[...nextauth]/authOptions";
import Navbar from "@/components/general/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const session = await getServerSession(authOptions)
  return (
    <div className="">
        <Navbar session={session}/>
        {children}
    </div>
  );
}
