"use client";

import React, { useMemo } from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Line, ResponsiveContainer } from "recharts";

//#region Types

export type UserChartData = {
  data: { name: string; Users: number }[];
  isAnimationActive?: boolean;
};

//#endregion

const UserLineChart = ({ data, isAnimationActive = true }: UserChartData) => {

  const maxValue = useMemo(() => Math.max(...data.map((d) => d.Users)), [data]);
  const numberOfTicks = 5;
  const tickInterval = Math.ceil(maxValue / numberOfTicks);
  const ticks = useMemo(
    () => Array.from({ length: numberOfTicks + 1 }, (_, i) => i * tickInterval),
    [numberOfTicks, tickInterval]
  );

  //#region Custom Tooltip

  const CustomTooltip = ({ active, payload, label }: any) => {

    if (!active || !payload || payload.length === 0) return null;

    return (
      <div className="bg-emerald-700/80 text-white p-3 rounded shadow-lg ">
        <p className="font-bold mb-2">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.dataKey} className="flex flex-row items-baseline">
            <h1 className="font-semibold text-[0.75vw]">{entry.dataKey}:</h1>
            <h1 className="ml-2 text-[0.65vw]">{entry.value}</h1>
          </div>
        ))}
      </div>
    );
  };

  //#endregion

  return (
    <div className="w-full h-[88%] max-w-full"> {/* Seems odd but for some reason the svg of line chart is just slightly smaller */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="black" />
          <YAxis stroke="black" tick={{ fill: "black" }} ticks={ticks} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line
            type="monotone"
            dataKey="Users"
            stroke="#40b38c"
            isAnimationActive={isAnimationActive}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserLineChart;
