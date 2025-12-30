import { Wallet } from "lucide-react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { month: "Day 1", budget: 10000, spent: 500 },
  { month: "Day 5", budget: 9000, spent: 2000 },
  { month: "Day 10", budget: 7500, spent: 3000 },
  { month: "Day 15", budget: 6000, spent: 5500 },
  { month: "Day 20", budget: 4000, spent: 6500 },
  { month: "Day 25", budget: 2000, spent: 8500 },
  { month: "Day 30", budget: 0, spent: 10200 },
];

export default function BudgetBurnDown() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Control Presupuestario (Burn-Down)" icon={Wallet} />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
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
            <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="spent"
              name="Gasto Acumulado"
              fill="#ef4444"
              stroke="#ef4444"
              fillOpacity={0.2}
            />
            <Line
              type="monotone"
              dataKey="budget"
              name="Presupuesto Restante"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
              strokeDasharray="5 5"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
