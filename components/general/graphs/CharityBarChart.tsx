"use client";

import React from "react";
import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

//#region Types
type ChartDataPoint = {
  name: string;
  uv: number;
  pv: number;
  amt: number; // third bar
};

type CharityBarChartData = {
  data: ChartDataPoint[];
  isAnimationActive?: boolean;
};
//#endregion

const CharityBarChart = ({isAnimationActive = true, data }: CharityBarChartData) => {
  return (
  <div className="w-full h-[50vh] max-w-full">
    <ResponsiveContainer width="95%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#8884d8" isAnimationActive={isAnimationActive} />
        <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={isAnimationActive} />
        <Bar dataKey="amt" fill="#ffc658" isAnimationActive={isAnimationActive} />
      </BarChart>
    </ResponsiveContainer>
  </div>
  );
};

export default CharityBarChart;

