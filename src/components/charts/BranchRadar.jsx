import { MapPin } from "lucide-react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import SectionTitle from "./SectionTitle";

// 3. COMPARATIVA SUCURSALES (Radar Multi)
const radarComparativeData = [
  { subject: "Velocidad", A: 120, B: 110, fullMark: 150 },
  { subject: "Calidad Fotos", A: 98, B: 130, fullMark: 150 },
  { subject: "Asistencia", A: 86, B: 130, fullMark: 150 },
  { subject: "Ventas", A: 99, B: 100, fullMark: 150 },
  { subject: "Seguridad", A: 85, B: 90, fullMark: 150 },
  { subject: "Limpieza", A: 65, B: 85, fullMark: 150 },
];

export default function BranchRadar() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl h-full">
      <SectionTitle
        title="Comparativa Sucursales (Norte vs Sur)"
        icon={MapPin}
      />
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="70%"
            data={radarComparativeData}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "#94a3b8", fontSize: 10 }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 150]}
              tick={false}
              axisLine={false}
            />
            <Radar
              name="Sucursal Norte"
              dataKey="A"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="#3b82f6"
              fillOpacity={0.3}
            />
            <Radar
              name="Sucursal Sur"
              dataKey="B"
              stroke="#ec4899"
              strokeWidth={2}
              fill="#ec4899"
              fillOpacity={0.3}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
