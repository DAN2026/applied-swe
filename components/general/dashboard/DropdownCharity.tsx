import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface DropdownCharityProps {
  selectedCharity:
    | "Mind"
    | "Oxfam"
    | "Cancer Research UK"
    | "British Heart Foundation"
    | "Salvation Army"
    | "";
  onSelectCharity: (
    charity:
      | "Mind"
      | "Oxfam"
      | "Cancer Research UK"
      | "British Heart Foundation"
      | "Salvation Army"
  ) => void;
}

export function DropdownCharity({ selectedCharity, onSelectCharity }: DropdownCharityProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-emerald-600 hover:bg-emerald-700 text-white  p-2 max-w-[150px] truncate whitespace-nowrap w-[45%] rounded-lg mt-2">
        {selectedCharity || "Select charity"}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mt-3 bg-emerald-600 text-white border-none rounded-lg">
        <DropdownMenuItem
          className="hover:!bg-emerald-700 hover:!text-white"
          onClick={() => onSelectCharity("Mind")}
        >
          Mind
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:!bg-emerald-700 hover:!text-white"
          onClick={() => onSelectCharity("Oxfam")}
        >
          Oxfam
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:!bg-emerald-700 hover:!text-white"
          onClick={() => onSelectCharity("Cancer Research UK")}
        >
          Cancer Research UK
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:!bg-emerald-700 hover:!text-white"
          onClick={() => onSelectCharity("British Heart Foundation")}
        >
          British Heart Foundation
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:!bg-emerald-700 hover:!text-white"
          onClick={() => onSelectCharity("Salvation Army")}
        >
          Salvation Army
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
