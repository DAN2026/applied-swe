"use client"

import React, { useState } from "react"
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
import { Button } from "../ui/button"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"

type DataTableProps<T = any> = {
  data: T[]
  columns: ColumnDef<T>[]
  rowClick?: (row: T) => void
  selectedID?: number | string | null
  getRowId?: (row: any) => string | number;
}

const DataTable = ({ rowClick, data, columns,selectedID,getRowId }: DataTableProps) => {
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const visibleRows = table.getRowModel().rows
  const minRows = 8
  const skeletonCount = Math.max(0, minRows - visibleRows.length)
  const totalColumns = table.getAllLeafColumns().length
  

  return (
    <Table className="bg-gray-50 overflow-hidden rounded-2xl">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
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
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {/* REAL ROWS */}
        {visibleRows.map((row) => {
          const rowId = getRowId ? getRowId(row.original) : row.id;
          return (
            <TableRow
              key={row.id}
              onDoubleClick={rowClick ? () => rowClick(row.original) : undefined}
              className={`odd:bg-white even:bg-gray-50 ${
                rowId.toString() === selectedID?.toString() ? "odd:bg-gradient-to-b from-emerald-600 to-emerald-900 even:bg-gradient-to-b from-emerald-600 to-emerald-900" : ""
              } hover:bg-emerald-100 cursor-pointer transition-all duration-300 `}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className={`p-3 text-sm  ${rowId.toString() === selectedID?.toString() ? "text-white" : "text-gray-800"}`}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          )
        })}
        {/* NO DATA ROW */}
        {visibleRows.length === 0 && (
          
          <TableRow>
            <TableCell
              colSpan={totalColumns}
              className="bg-gray-50 text-gray-500 text-center p-6"
            >
              No data available
            </TableCell>
          </TableRow>
        )}

        {/* SKELETON ROWS */}
        {visibleRows.length > 0 &&
          Array.from({ length: skeletonCount }).map((_, i) => (
            <TableRow key={`skeleton-${i}`} className="odd:bg-white even:bg-gray-50">
              {Array.from({ length: totalColumns }).map((_, j) => (
                <TableCell key={j} className="p-3">
                  <div className="h-4 w-full"></div>
                </TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

export default React.memo(DataTable)
