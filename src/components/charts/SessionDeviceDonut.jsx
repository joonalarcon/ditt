import { Smartphone } from "lucide-react";
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
  { name: "Mobile Android", value: 450 },
  { name: "Mobile iOS", value: 300 },
  { name: "Desktop Windows", value: 300 },
  { name: "Desktop Mac", value: 150 },
  { name: "Tablet", value: 50 },
];

const COLORS = ["#10b981", "#3b82f6", "#8b5cf6", "#f472b6", "#f59e0b"];

export default function SessionDeviceDonut() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Sesiones por Dispositivo" icon={Smartphone} />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={80}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={2}
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
            <Legend verticalAlign="middle" align="right" layout="vertical" />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <p className="text-3xl font-bold text-white">1.25k</p>
          <p className="text-xs text-slate-400">Total Sesiones</p>
        </div>
      </div>
    </div>
  );
}
