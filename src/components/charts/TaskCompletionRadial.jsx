import { CheckCircle2 } from "lucide-react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { name: "Completado", uv: 90, fill: "#10b981" },
  { name: "En Proceso", uv: 55, fill: "#f59e0b" },
  { name: "Pendiente", uv: 30, fill: "#ef4444" },
  { name: "Cancelado", uv: 10, fill: "#64748b" },
];

export default function TaskCompletionRadial() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Estado de Tareas Diarias" icon={CheckCircle2} />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={20}
            data={data}>
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#fff" }}
              background
              clockWise
              dataKey="uv"
              cornerRadius={5}
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={{ right: 0, color: "#ccc" }}
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
