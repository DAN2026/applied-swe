"use client"

import React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Items } from "@prisma/client"
import { useState } from "react"
import { Button } from "../ui/button"
import { ArrowDown, ArrowUp, ArrowUpDown, Minus } from "lucide-react"

type DataTableProps<T=any> = {
  data: T[],
  columns: ColumnDef<T>[],
rowClick?: (row:T)=>void}

const DataTable = ({rowClick,data,columns}:DataTableProps) =>{
  const [sorting,setSorting] = useState<SortingState>([])
  const table = useReactTable({
    data, 
    columns, 
    state: {sorting},
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  })

  return (
    <Table className="bg-white shadow-md rounded-lg overflow-hidden rounded-b-none">
      <TableHeader>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>{headerGroup.headers.map(header => (
            <TableHead
  key={header.id}
  className="p-3 bg-gray-100 text-gray-700 font-semibold uppercase tracking-wide"
>
  {header.isPlaceholder ? null : (
    <Button
      variant="ghost"
      onClick={header.column.getToggleSortingHandler()}
      className="flex items-center gap-2"
    >
      {flexRender(header.column.columnDef.header, header.getContext())}
      {{
        asc: <ArrowUp className="h-4 w-4 text-emerald-600" />,
        desc: <ArrowDown className="h-4 w-4 text-emerald-600" />,
        false: <ArrowUpDown className="h-4 w-4 opacity-30" />,
      }[header.column.getIsSorted() as string] ?? null}
    </Button>
  )}
</TableHead>
          ))}</TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length > 0 ? 
        (table.getRowModel().rows.map(row => (
          <TableRow onDoubleClick={rowClick?()=>rowClick(row.original):()=>{}} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-all" key={row.id}>{row.getVisibleCells().map(cell => (
            <TableCell className="p-3 text-sm text-gray-800" key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
          ))}</TableRow>
        ))) : (<TableRow><TableCell colSpan={table.getAllColumns().length} className="bg-gray-50 text-gray-500 text-center p-6">No data available</TableCell></TableRow>)}
      </TableBody>
    </Table>
  )
}

export default React.memo(DataTable);