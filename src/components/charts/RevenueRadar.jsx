import { DollarSign } from "lucide-react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { subject: "B2B", A: 120, B: 110, fullMark: 150 },
  { subject: "SaaS", A: 98, B: 130, fullMark: 150 },
  { subject: "Services", A: 86, B: 130, fullMark: 150 },
  { subject: "Hardware", A: 99, B: 100, fullMark: 150 },
  { subject: "Consulting", A: 85, B: 90, fullMark: 150 },
  { subject: "Training", A: 65, B: 85, fullMark: 150 },
];

export default function RevenueRadar() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Mix de Ingresos: 2024 vs 2025" icon={DollarSign} />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 150]}
              tick={false}
              axisLine={false}
            />
            <Radar
              name="2024"
              dataKey="A"
              stroke="#06b6d4"
              fill="#06b6d4"
              fillOpacity={0.3}
            />
            <Radar
              name="2025"
              dataKey="B"
              stroke="#f472b6"
              fill="#f472b6"
              fillOpacity={0.3}
            />
            <Legend wrapperStyle={{ paddingTop: "10px" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
