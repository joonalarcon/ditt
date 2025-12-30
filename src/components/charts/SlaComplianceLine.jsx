import { ShieldCheck } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { day: "L", time: 120 },
  { day: "M", time: 110 },
  { day: "X", time: 140 },
  { day: "J", time: 90 },
  { day: "V", time: 85 },
  { day: "S", time: 60 },
  { day: "D", time: 50 },
];

export default function SlaComplianceLine() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle
        title="Cumplimiento SLA (Tiempos Respuesta)"
        icon={ShieldCheck}
      />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              stroke="#94a3b8"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="#94a3b8"
              axisLine={false}
              tickLine={false}
              unit="ms"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <ReferenceLine
              y={100}
              label="SLA Target (100ms)"
              stroke="#ef4444"
              strokeDasharray="3 3"
            />
            <Line
              type="monotone"
              dataKey="time"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ r: 4, fill: "#06b6d4" }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
