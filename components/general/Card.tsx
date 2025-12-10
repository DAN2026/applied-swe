"use client"

import { LucideIcon } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

type CardProps = {
  title: string;
  value: number | null;
  icon?: LucideIcon;
  valueGrowth: number | undefined ;

}

export default function Card({title, value,icon: Icon,valueGrowth }:CardProps){


    const valueIncrease = valueGrowth === undefined ? "Data loading" : valueGrowth > 0 ? `+${valueGrowth}%`  : valueGrowth != 0 ? `${valueGrowth}%` : `~${valueGrowth}%`;



    return(
        <div className={`h-full w-[25%] grid grid-cols-[70%_30%]`}>
            <div>
                <div className="ml-10 mt-5">
                    <h1>
                        {title}
                    </h1>
                </div>
                <div className="ml-10 flex items-baseline">
                    <h1 className={value !=null ? "text-4xl font-semibold" : ""}>
                        {value ?? <LoaderCircle className="mt-5 animate-spin"></LoaderCircle>}
                    </h1>
                    <h1 className={valueGrowth=== undefined ? "hidden" :  valueGrowth > 0 ?  // May refactor this later
                        "ml-2 text-green-600 font-semibold" 
                        : valueGrowth!=0 ? "ml-2 text-red-600 font-semibold" 
                        : "ml-2 text-orange-600 font-semibold"}>
                        {valueIncrease}
                    </h1>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className=" h-[35%] w-[35%] rounded-[4] flex items-center justify-center">
                    {/* {Icon && <Icon className="w-[1vw+1vh] h-[1vw+1vh] text-white"/>} */}
                </div>
            </div>
        </div>
    )
}



