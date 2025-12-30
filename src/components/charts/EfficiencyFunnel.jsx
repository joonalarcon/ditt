import { GitMerge } from "lucide-react";
import {
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import SectionTitle from "./SectionTitle";

// 2. EMBUDO (Funnel)
const funnelData = [
  { value: 100, name: "Inician App", fill: "#6366f1" },
  { value: 80, name: "Selecc. Plantilla", fill: "#8b5cf6" },
  { value: 50, name: "Toman Fotos", fill: "#d946ef" },
  { value: 40, name: "Firman", fill: "#ec4899" },
  { value: 35, name: "Sincronizan", fill: "#10b981" },
];

export default function EfficiencyFunnel() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative h-full">
      <SectionTitle title="Eficiencia del Flujo" icon={GitMerge} />
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Funnel dataKey="value" data={funnelData} isAnimationActive>
              <LabelList
                position="right"
                fill="#fff"
                stroke="none"
                dataKey="name"
                fontSize={10}
              />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute top-6 right-6 text-right">
        <p className="text-3xl font-bold text-white">35%</p>
        <p className="text-xs text-slate-500">Conversión Final</p>
      </div>
    </div>
  );
}
