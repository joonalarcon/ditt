import { Search } from "lucide-react";
import {
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";

// 1. ANOMALIAS (Scatter)
const anomaliesData = Array.from({ length: 50 }, () => ({
  x: Math.floor(Math.random() * 2400), // Hora del día (00:00 - 24:00)
  y: Math.floor(Math.random() * 60) + 5, // Duración checklist (mins)
  z: Math.floor(Math.random() * 500), // Score / Importancia
  type: Math.random() > 0.9 ? "anomaly" : "normal",
}));

export default function AnomaliesScatter() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Detección de Anomalías Operativas" icon={Search} />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
            />
            <XAxis
              type="number"
              dataKey="x"
              name="Hora"
              unit="h"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b" }}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Duración"
              unit="m"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b" }}
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Scatter name="Operaciones" data={anomaliesData} fill="#8884d8">
              {anomaliesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.type === "anomaly" ? "#f43f5e" : "#6366f1"}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <p className="absolute bottom-4 right-6 text-xs text-rose-400 font-bold animate-pulse">
        ● 3 Anomalías Detectadas Hoy
      </p>
    </div>
  );
}
