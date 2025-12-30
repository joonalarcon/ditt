import { ThumbsUp } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import SectionTitle from "./SectionTitle";

// 6. GAUGE SIMULADO (Pie)
const gaugeData = [
  { name: "Score", value: 85, color: "#10b981" },
  { name: "Rest", value: 15, color: "#1e293b" },
];

export default function SatisfactionGauge() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl flex flex-col items-center justify-center relative h-full">
      <SectionTitle title="Satisfacción Global (NPS)" icon={ThumbsUp} />
      <div className="h-56 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={gaugeData}
              cx="50%"
              cy="70%"
              startAngle={180}
              endAngle={0}
              innerRadius={80}
              outerRadius={100}
              paddingAngle={0}
              dataKey="value"
              stroke="none">
              <Cell fill="#10b981" />
              <Cell fill="#1e293b" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 top-20 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-5xl font-bold text-white">85</span>
          <span className="text-sm text-emerald-400 font-medium">
            EXCELENTE
          </span>
        </div>
      </div>
      <p className="text-center text-xs text-slate-500 mt-[-40px]">
        Basado en 1,200 firmas de clientes
      </p>
    </div>
  );
}
