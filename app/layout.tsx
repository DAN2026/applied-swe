import Navbar from "@/components/general/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)


{
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
