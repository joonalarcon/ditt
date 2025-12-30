import { ClipboardCheck } from "lucide-react";
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
  { name: "Sem 1", plan: 100, real: 80, eff: 80 },
  { name: "Sem 2", plan: 120, real: 110, eff: 91 },
  { name: "Sem 3", plan: 130, real: 135, eff: 103 },
  { name: "Sem 4", plan: 140, real: 120, eff: 85 },
  { name: "Sem 5", plan: 150, real: 160, eff: 106 },
];

export default function AuditComplianceComposed() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle
        title="Cumplimiento de Auditorías vs Plan"
        icon={ClipboardCheck}
      />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid
              stroke="#f5f5f5"
              strokeOpacity={0.05}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              stroke="#94a3b8"
            />
            <YAxis axisLine={false} tickLine={false} stroke="#94a3b8" />
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
              dataKey="plan"
              barSize={20}
              fill="#413ea0"
              radius={[4, 4, 0, 0]}
              name="Planificado"
            />
            <Bar
              dataKey="real"
              barSize={20}
              fill="#ff7300"
              radius={[4, 4, 0, 0]}
              name="Realizado"
            />
            <Line
              type="monotone"
              dataKey="eff"
              stroke="#387908"
              strokeWidth={2}
              name="Eficiencia %"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
