import { Headphones } from "lucide-react";
import {
  Bar,
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
  { month: "Ene", tickets: 120, satisfaction: 4.8 },
  { month: "Feb", tickets: 135, satisfaction: 4.7 },
  { month: "Mar", tickets: 160, satisfaction: 4.5 },
  { month: "Abr", tickets: 140, satisfaction: 4.8 },
  { month: "May", tickets: 180, satisfaction: 4.6 },
  { month: "Jun", tickets: 210, satisfaction: 4.9 },
];

export default function SupportVolumeComposed() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Volumen Soporte vs Satisfacción" icon={Headphones} />
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
            <YAxis
              yAxisId="left"
              stroke="#94a3b8"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 5]}
              stroke="#f472b6"
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
              yAxisId="left"
              dataKey="tickets"
              name="Tickets"
              fill="#6366f1"
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="satisfaction"
              name="Satisfacción"
              stroke="#f472b6"
              strokeWidth={2}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
