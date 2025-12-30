import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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
      <p className="text-center text-slate-400 text-sm mb-2 font-mono uppercase tracking-widest">
        Impacto en tu Negocio
      </p>

      {/* Chart Container */}
      <div className="h-64 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={[
              { name: "Sem 1", incidentes: 85, eficiencia: 20 },
              { name: "Sem 2", incidentes: 75, eficiencia: 35 },
              { name: "Sem 3", incidentes: 55, eficiencia: 50 },
              { name: "Sem 4", incidentes: 35, eficiencia: 70 },
              { name: "Sem 5", incidentes: 20, eficiencia: 85 },
              { name: "Sem 6", incidentes: 10, eficiencia: 98 },
            ]}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorEficiencia" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorIncidentes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              dy={10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                borderColor: "#334155",
                borderRadius: "8px",
                color: "#f8fafc",
              }}
              itemStyle={{ fontSize: "14px", fontWeight: "bold" }}
            />
            <CartesianGrid
              vertical={false}
              stroke="#334155"
              strokeDasharray="3 3"
              opacity={0.4}
            />

            {/* Red Area: Incidentes fading out */}
            <Area
              type="monotone"
              dataKey="incidentes"
              stroke="#f43f5e"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorIncidentes)"
              name="Caos Operativo"
              animationDuration={2000}
            />

            {/* Green Area: Eficiencia rising */}
            <Area
              type="monotone"
              dataKey="eficiencia"
              stroke="#10b981"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorEficiencia)"
              name="Control & Eficiencia"
              animationDuration={2000}
              animationBegin={500}
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Floating badge for effect */}
        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-700 shadow-xl flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-bold text-emerald-400">
            Eficiencia +390%
          </span>
        </div>
      </div>

      <DemoPills className="mt-6 lg:justify-start" />
    </div>
  );
}
