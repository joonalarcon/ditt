import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { CheckCircle2 } from "lucide-react";
import DemoPills from "./DemoPills";

export default function DemoInfoChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData([
      {
        name: "Todo",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#334155", // Slate 700
      },
      {
        name: "Esto",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#475569", // Slate 600
      },
      {
        name: "En",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#1e293b", // Slate 800
      },
      {
        name: "Una",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#334155", // Slate 700
      },
      {
        name: "Sola",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#475569", // Slate 600
      },
      { name: "App", value: 100, color: "#0ea5e9" }, // Sky 500 (Accent)
    ]);
  }, []);

  return (
    <div className="mt-8 w-full bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
      <p className="text-center text-slate-400 text-sm mb-2 font-mono">
        Potencial de Operación
      </p>

      {/* Chart Container */}
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={chartData}>
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              width={50}
              tick={{ fill: "#cbd5e1", fontSize: 13, fontWeight: "bold" }}
              axisLine={false}
              tickLine={false}
            />
            <Bar
              dataKey="value"
              radius={[0, 10, 10, 0]}
              barSize={18}
              animationDuration={3000}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <DemoPills className="mt-6 lg:justify-start" />
    </div>
  );
}
