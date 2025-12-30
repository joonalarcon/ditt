import { Server } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import SectionTitle from "./SectionTitle";

const data01 = [
  { name: "Online", value: 800 },
  { name: "Maintenance", value: 200 },
];
const data02 = [
  { name: "Server A", value: 300 },
  { name: "Server B", value: 500 },
  { name: "Backup X", value: 100 },
  { name: "Update Y", value: 100 },
];

const COLORS_INNER = ["#10b981", "#f59e0b"];
const COLORS_OUTER = ["#059669", "#34d399", "#d97706", "#fbbf24"];

export default function NestedPieUptime() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle
        title="Estado de Infraestructura (Clusters)"
        icon={Server}
      />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8">
              {data01.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS_INNER[index % COLORS_INNER.length]}
                />
              ))}
            </Pie>
            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label>
              {data02.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS_OUTER[index % COLORS_OUTER.length]}
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
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
