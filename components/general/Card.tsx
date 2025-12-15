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
        <div className="h-full w-auto bg-white rounded-lg shadow p-4 flex items-center ml-10">
            <div className="w-[70%]">
                <h1 className="text-sm lg:text-base font-medium text-muted-foreground">
                    {title}
                </h1>
                <div className="flex items-baseline mt-2">
                    <h1 className={value != null ? "font-semibold text-[clamp(1.5rem,2.2vw,2.25rem)]" : ""}>
                        {value ?? <LoaderCircle className="mt-2 animate-spin" />}
                    </h1>
                    {valueGrowth !== undefined && (
                        <h1 className={`ml-2 font-semibold ${valueGrowth > 0 ? "text-green-600": valueGrowth < 0? "text-red-600": "text-orange-600"}`}>
                            {valueIncrease}
                        </h1>
                    )}
                </div>
            </div>
            <div className="w-[30%] flex items-center justify-center">
                <div className="bg-emerald-600/75 h-12 w-12 rounded-[4px] flex items-center justify-center">
                    {Icon && <Icon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-white" />}
                </div>
            </div>
        </div>
    )
}



