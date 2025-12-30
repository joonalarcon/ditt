import { TrendingUp } from "lucide-react";
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

const data = [
  { month: "Ene", mrr: 1000 },
  { month: "Feb", mrr: 1200 },
  { month: "Mar", mrr: 1500 },
  { month: "Abr", mrr: 2100 },
  { month: "May", mrr: 2800 },
  { month: "Jun", mrr: 3800 },
  { month: "Jul", mrr: 5000 },
];

export default function MrrGrowthArea() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle
        title="Crecimiento MRR (Ingresos Recurrentes)"
        icon={TrendingUp}
      />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              stroke="#94a3b8"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="#94a3b8"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value}`}
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
              dataKey="mrr"
              stroke="#10b981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorMrr)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
