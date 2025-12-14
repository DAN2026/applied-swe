"use client"

import { LucideIcon } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

type CardProps = {
    title: string;
    value: number | null;
    icon?: LucideIcon;
    valueGrowth: number | undefined;

}

export default function Card({ title, value, icon: Icon, valueGrowth }: CardProps) {


    const valueIncrease = valueGrowth === undefined ? "Data loading" : valueGrowth > 0 ? `+${valueGrowth}%` : valueGrowth != 0 ? `${valueGrowth}%` : `~${valueGrowth}%`;



    return (
        <div className={`h-full w-auto grid grid-cols-[70%_30%]`}>
            <div>
                <div className="ml-10 mt-5">
                    <h1 className="text-sm lg:text-base font-medium text-muted-foreground">
                        {title}
                    </h1>
                </div>
                <div className="ml-10 flex items-baseline">
                    <h1 className={value != null ? "font-semibold text-[clamp(1.5rem,2.2vw,2.25rem)]" : ""}>
                        {value ?? <LoaderCircle className="mt-5 animate-spin"></LoaderCircle>}
                    </h1>
                    <h1 className={valueGrowth === undefined ? "hidden" : valueGrowth > 0 ?  // May refactor this later
                        "ml-2 text-green-600 font-semibold"
                        : valueGrowth != 0 ? "ml-2 text-red-600 font-semibold"
                            : "ml-2 text-orange-600 font-semibold"}>
                        {valueIncrease}
                    </h1>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="bg-emerald-600/75 h-[35%] w-[35%] rounded-[4] flex items-center justify-center">
                    {Icon && <Icon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-white"/>}
                </div>
            </div>
        </div>
    )
}



