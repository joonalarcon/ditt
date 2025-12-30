import { Map } from "lucide-react";
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { region: "Norte", x: 200, y: 300, z: 500, name: "Antofagasta" },
  { region: "Centro", x: 500, y: 500, z: 2400, name: "Santiago" },
  { region: "Sur", x: 300, y: 200, z: 800, name: "Concepción" },
  { region: "Norte", x: 100, y: 100, z: 200, name: "Arica" },
  { region: "Sur", x: 400, y: 150, z: 400, name: "Valdivia" },
  { region: "Centro", x: 550, y: 450, z: 1200, name: "Valparaíso" },
];

export default function RegionalBubble() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Actividad Regional (Volumen TRX)" icon={Map} />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
            />
            <XAxis
              type="number"
              dataKey="x"
              name="Clientes"
              unit=""
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8" }}
            />
            <YAxis
              type="number"
              dataKey="y"
              name="Operaciones"
              unit=""
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8" }}
            />
            <ZAxis
              type="number"
              dataKey="z"
              range={[100, 1000]}
              name="Volumen"
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Scatter name="Regiones" data={data} fill="#8b5cf6" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
