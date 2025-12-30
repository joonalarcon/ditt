import { HeartPulse } from "lucide-react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { name: "Database", uv: 100, fill: "#ffff00" },
  { name: "API Gateway", uv: 95, fill: "#82ca9d" },
  { name: "Auth Service", uv: 98, fill: "#8884d8" },
  { name: "Storage", uv: 85, fill: "#ffc658" },
  { name: "CDN", uv: 99, fill: "#d0ed57" },
];

export default function SystemHealthRadial() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Salud de Subsistemas (Uptime)" icon={HeartPulse} />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={data}>
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#000" }}
              background
              clockWise
              dataKey="uv"
              cornerRadius={10}
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={{ right: 0, color: "#94a3b8" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
