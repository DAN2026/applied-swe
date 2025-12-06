import { LucideIcon } from "lucide-react";

type CardProps = {
  title: string;
  value: number | null;
  icon?: LucideIcon;
  iconColor?: string; 
}

export default function DataCardAdmin({title, value,icon: Icon, iconColor  }:CardProps){
    return(
        <div className=' w-full h-full grid grid-rows-[20%_25%_55%] bg-white mt-10 rounded-lg'>
            <div>
                {Icon && <Icon className="w-6 h-6 mt-5 ml-5" style={{ color: iconColor }} />}
            </div>
            <div className="flexitems-center">
                <h2 className="text-lg font-medium text-gray-600 ml-5 mt-5">{title}</h2>  
            </div>
            <div className="flex items-center ml-5 text-lg mb-5">
                <h2 className="">{value}</h2>
            </div>
        </div>
    )
}

