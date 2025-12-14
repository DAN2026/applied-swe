import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useMemo } from 'react';
import { generateMonthNames as genMonthNames } from '@/lib/utils';

//#region Types

type CharityMonthlyCount = {
  date: string;
  "Cancer Research UK": number;
  Oxfam: number;
  Mind: number;
  "Salvation Army": number;
  "British Heart Foundation": number;
};

type CharityBarChartProps = {
  startDate: string;
  endDate: string;
  data: CharityMonthlyCount[];
};

//#endregion

//#region UI

const colors = {
  Oxfam: "#6ee7b7",
  "Cancer Research UK": "#34d399",
  Mind: "#10b981",
  "Salvation Army": "#059669",
  "British Heart Foundation": "#047857",
} as const;

type Charity = keyof typeof colors;

//#endregion

const CharityBarChart = ({ startDate, endDate, data }: CharityBarChartProps) => {

  //#region Data Filtering

  const filteredData = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const rangeStart = new Date(Math.min(start.getTime(), end.getTime()));
    const rangeEnd = new Date(Math.max(start.getTime(), end.getTime()));
    const monthsInRange = genMonthNames(rangeStart.toISOString(), rangeEnd.toISOString());

    return monthsInRange.map(month => {
      const existing = data.find(d => d.date === month);
      if (existing) return existing;

      return {
        date: month,
        "Cancer Research UK": 0,
        Oxfam: 0,
        Mind: 0,
        "Salvation Army": 0,
        "British Heart Foundation": 0,
      } as CharityMonthlyCount;
    });
  }, [startDate, endDate, data]);


  //#endregion

  //#region Custom Tooltip

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || payload.length === 0) return null;

    return (
      <div className="bg-emerald-700/80 text-white p-3 rounded shadow-lg">
        <p className="font-bold mb-2 text-white text-[0.85vw]">{label} (Donations)</p>
        {payload.map((entry: any) => {
          const charity = entry.dataKey as Charity;
          return (
            <div key={charity} className="flex flex-row items-baseline">
              <h1 className="font-semibold text-[0.75vw]">{charity}:</h1>
              <h1 className="ml-2 text-[0.65vw]">{entry.value}</h1>
            </div>
          );
        })}
      </div>
    );
  };

  //#endregion

  //#region Custom Cursor

  const CustomCursor = ({ x, y, width, height }: any) => {
    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: "rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s",
        }}
      />
    );
  };
  //#endregion

  return (
    <div className="w-full h-[90%] max-w-full">
      <ResponsiveContainer width="95%" height="100%">
        <BarChart
          data={filteredData}
          barSize={60}
          maxBarSize={80}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <         Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          {(Object.keys(colors) as Charity[]).map(charity => (
            <Bar key={charity} dataKey={charity} fill={colors[charity]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CharityBarChart;
