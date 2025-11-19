"use client"

import DataCard from "@/components/general/DataCard";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Dashboard(){
      const { data: session, status } = useSession();
      const router = useRouter();
      useEffect(()=>{
        if (session?.user.needsOnboarding){
          router.push("/register/external")
        }
      },[session])
    return (
    <div className="h-screen grid grid-rows-[30%_10%_60%]">
      <div className="bg-red-300 flex justify-between">
        <DataCard title="Clothes Donated" value="3"/>
        <DataCard title="d" value="3"/>
        <DataCard title="Clothes Donated" value="3"/>
      </div>
      <div className="bg-green-300"></div>
      <div className="bg-blue-300">
         <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
      </div>
    </div>
    )
}