import Navbar from "@/components/general/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import NavbarWrapper from "@/components/wrappers/NavbarWrapper";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)


{
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
