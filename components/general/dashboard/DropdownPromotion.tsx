import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

interface DropdownPromotionProps {
  selectedRole: string
  onSelectRole: (role: "ADMIN" | "STAFF" | "USER") => void
}

export function DropdownPromotion({ selectedRole, onSelectRole }: DropdownPromotionProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 w-[30%] rounded-lg mt-2 truncate whitespace-nowrap">
        {selectedRole || "Select Role"}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mt-3 bg-emerald-600 text-white border-none ">
        <DropdownMenuItem
          className="hover:!bg-emerald-700 hover:!text-white"
          onClick={() => onSelectRole("ADMIN")}>ADMIN</DropdownMenuItem>
        <DropdownMenuItem
          className="hover:!bg-emerald-700 hover:!text-white"
          onClick={() => onSelectRole("STAFF")}>STAFF</DropdownMenuItem>
        <DropdownMenuItem
          className="hover:!bg-emerald-700 hover:!text-white"
          onClick={() => onSelectRole("USER")}>USER</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}