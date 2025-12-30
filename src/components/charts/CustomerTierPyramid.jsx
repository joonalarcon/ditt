import { Award } from "lucide-react";
import {
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { value: 500, name: "Free Tier", fill: "#94a3b8" },
  { value: 300, name: "Starter", fill: "#60a5fa" },
  { value: 200, name: "Pro", fill: "#3b82f6" },
  { value: 50, name: "Enterprise", fill: "#1d4ed8" },
];

export default function CustomerTierPyramid() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Pirámide de Clientes por Nivel" icon={Award} />
      <div className="h-80 w-full">
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
            <Funnel dataKey="value" data={data} isAnimationActive>
              <LabelList
                position="right"
                fill="#fff"
                stroke="none"
                dataKey="name"
              />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
