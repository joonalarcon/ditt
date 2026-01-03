import React from "react";
import { Activity } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";

export default function ChaosReductionChart() {
  // Generate data: Chaos starts high and trends down smoothly (Sustained reduction)
  const data = Array.from({ length: 24 }, (_, i) => {
    // Smooth, sustained decline.
    // Starts at ~90, drops effectively to ~35-40 (60% reduction).
    // Formula: 36 + 54 * e^(-0.2 * i)
    const baseValue = 36 + 54 * Math.exp(-0.2 * i);

    // Very low volatility, indicating stability and trust
    const randomFlux = Math.sin(i * 0.5) * 2 + (Math.random() * 4 - 2);

    const value = Math.max(10, Math.min(100, baseValue + randomFlux));

    return {
      time: `Sem ${i + 1}`,
      chaos: Math.floor(value),
    };
  });

  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-4 md:p-6 shadow-xl relative overflow-hidden h-full w-full max-w-4xl mx-auto">
      <SectionTitle title="Eliminación del Caos Operativo" icon={Activity} />
      <p className="text-slate-400 text-sm mb-4">
        Impacto directo en la reducción de procesos manuales y burocracia.
      </p>
      <div className="h-64 md:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorChaos" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8} />{" "}
                {/* Rose-500 for Danger/Chaos */}
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />
            <XAxis
              dataKey="time"
              stroke="#94a3b8"
              axisLine={false}
              tickLine={false}
              interval={3}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              stroke="#94a3b8"
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
              label={{
                value: "Nivel de Caos",
                angle: -90,
                position: "insideLeft",
                style: { fill: "#94a3b8" },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              formatter={(value) => [`${value}`, "Índice de Caos"]}
            />
            <Area
              type="monotone"
              dataKey="chaos"
              stroke="#f43f5e"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorChaos)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Explanation Annotation */}
      <div className="absolute top-1/2 right-10 hidden md:block max-w-[200px] text-right pointer-events-none">
        <div className="text-emerald-400 font-bold text-xl mb-1 flex items-center justify-end gap-2">
          <span>-60%</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-leaf">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
          </svg>
        </div>
        <p className="text-slate-300 text-sm">
          Reducción drástica en el uso de papel y planillas Excel.
        </p>
      </div>
    </div>
  );
}
