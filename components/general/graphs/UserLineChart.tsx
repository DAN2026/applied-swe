"use client";

import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ResponsiveContainer } from "recharts";

//#region Types

export type UserChartData = {
  data: { name: string; Users: number }[];
  isAnimationActive?: boolean;
};

type CustomTooltipProps = {
  active?: boolean;
  payload?: { dataKey: string; value: number }[];
  label?: string;
};

//#endregion

//#region Custom Tooltip

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-emerald-700/80 text-white p-[1vw] rounded shadow-lg">
        <p className="font-bold">{label}</p>
        {payload.map((entry) => (
          <p key={entry.dataKey}>
            {entry.dataKey}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

//#endregion

const UserLineChart = ({ data, isAnimationActive = true }: UserChartData) => {

  const maxValue = Math.max(...data.map((d) => d.Users));
  const numberOfTicks = 5;
  const tickInterval = Math.ceil(maxValue / numberOfTicks);
  const ticks = Array.from({ length: numberOfTicks + 1 }, (_, i) => i * tickInterval);

  return (
    <div className="w-full h-[45vh] max-w-full">
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
