import { Layers } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";

// 5. STREAMGRAPH (Area Stacked)
const streamData = [
  { name: "Ene", cat1: 400, cat2: 240, cat3: 240 },
  { name: "Feb", cat1: 300, cat2: 139, cat3: 221 },
  { name: "Mar", cat1: 200, cat2: 980, cat3: 229 },
  { name: "Abr", cat1: 278, cat2: 390, cat3: 200 },
  { name: "May", cat1: 189, cat2: 480, cat3: 218 },
  { name: "Jun", cat1: 239, cat2: 380, cat3: 250 },
  { name: "Jul", cat1: 349, cat2: 430, cat3: 210 },
];

export default function TrendArea() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl h-full">
      <SectionTitle title="Tendencias de Fallas por Categoría" icon={Layers} />
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={streamData} stackOffset="expand">
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="rgba(255,255,255,0.05)"
            />
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
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Area
              type="monotone"
              dataKey="cat1"
              stackId="1"
              stroke="none"
              fill="#6366f1"
            />
            <Area
              type="monotone"
              dataKey="cat2"
              stackId="1"
              stroke="none"
              fill="#ec4899"
            />
            <Area
              type="monotone"
              dataKey="cat3"
              stackId="1"
              stroke="none"
              fill="#10b981"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex gap-4 mt-2 justify-center">
        <span className="text-xs text-indigo-400">● Eléctrico</span>
        <span className="text-xs text-pink-400">● Mecánico</span>
        <span className="text-xs text-emerald-400">● Hidráulico</span>
      </div>
    </div>
  );
}
