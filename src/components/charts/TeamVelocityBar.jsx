import { Zap } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { sprint: "S-20", points: 35 },
  { sprint: "S-21", points: 42 },
  { sprint: "S-22", points: 38 },
  { sprint: "S-23", points: 55 },
  { sprint: "S-24", points: 48 },
];

export default function TeamVelocityBar() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Velocidad del Equipo (Story Points)" icon={Zap} />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />
            <XAxis
              dataKey="sprint"
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
            <Bar dataKey="points" fill="#f59e0b" radius={[4, 4, 0, 0]}>
              <LabelList dataKey="points" position="top" fill="#cbd5e1" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
