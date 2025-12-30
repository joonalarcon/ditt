import { Package } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { category: "Lácteos", in: 4000, out: 2400 },
  { category: "Limpieza", in: 3000, out: 1398 },
  { category: "Bebidas", in: 2000, out: 9800 },
  { category: "Carnes", in: 2780, out: 3908 },
  { category: "Panadería", in: 1890, out: 4800 },
];

export default function InventoryTurnoverBar() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle
        title="Rotación de Inventario por Categoría"
        icon={Package}
      />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />
            <XAxis
              dataKey="category"
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
            <Legend />
            <Bar
              dataKey="in"
              name="Entradas"
              fill="#10b981"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="out"
              name="Salidas"
              fill="#ef4444"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
