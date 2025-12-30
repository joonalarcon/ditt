import { AlertTriangle } from "lucide-react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { name: "Error Humano", value: 45 },
  { name: "Falla Sistema", value: 15 },
  { name: "Stock Fantasma", value: 25 },
  { name: "Merma", value: 15 },
];

const COLORS = ["#f59e0b", "#ef4444", "#8b5cf6", "#64748b"];

export default function ErrorRateDonut() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle
        title="Distribución de Errores en Auditoría"
        icon={AlertTriangle}
      />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
