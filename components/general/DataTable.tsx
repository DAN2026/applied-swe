"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Items } from "@prisma/client"

type DataTableProps = {
  data: any[],
  columns: ColumnDef<any>[],
type: string}

function DataTable({data,columns,type}:DataTableProps){
  if (type == "Items"){
    data as Items[]
    columns as ColumnDef<Items>[]
  }
  const table = useReactTable({data, columns, getCoreRowModel: getCoreRowModel()})

  return (
    <Table className="bg-white rounded-lg">
      <TableHeader>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>{headerGroup.headers.map(header => (
            <TableHead className="p-3" key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
          ))}</TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map(row => (
          <TableRow key={row.id}>{row.getVisibleCells().map(cell => (
            <TableCell className="p-3" key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
          ))}</TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default React.memo(DataTable);