import { Smile } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { month: "Ene", promoters: 60, passives: 30, detractors: 10 },
  { month: "Feb", promoters: 65, passives: 25, detractors: 10 },
  { month: "Mar", promoters: 70, passives: 20, detractors: 10 },
  { month: "Abr", promoters: 68, passives: 22, detractors: 10 },
  { month: "May", promoters: 75, passives: 20, detractors: 5 },
  { month: "Jun", promoters: 80, passives: 15, detractors: 5 },
];

export default function NpsScoreStacked() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="NPS Score: Evolución Mensual" icon={Smile} />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} stackOffset="expand">
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
              tickFormatter={(tick) => `${tick * 100}%`}
              stroke="#94a3b8"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Legend />
            <Bar
              dataKey="promoters"
              name="Promotores"
              stackId="a"
              fill="#10b981"
            />
            <Bar dataKey="passives" name="Pasivos" stackId="a" fill="#f59e0b" />
            <Bar
              dataKey="detractors"
              name="Detractores"
              stackId="a"
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
