import { Clock } from "lucide-react";
import SectionTitle from "./SectionTitle";

// 4. GENERADOR DE CALENDARIO (Heatmap)
const generateCalendarData = () => {
  // Generar ultimos 5 meses
  const data = [];
  const intensities = [
    "bg-slate-800",
    "bg-emerald-900",
    "bg-emerald-700",
    "bg-emerald-500",
    "bg-emerald-400",
  ];
  for (let i = 0; i < 140; i++) {
    data.push(intensities[Math.floor(Math.random() * intensities.length)]);
  }
  return data;
};
const calendarData = generateCalendarData();

export default function ProductivityHeatmap() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl h-full">
      <SectionTitle title="Mapa de Calor de Productividad" icon={Clock} />
      <div className="flex flex-wrap gap-1.5 justify-center mt-4">
        {calendarData.map((colorClass, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-sm ${colorClass} hover:ring-2 ring-white/50 transition-all cursor-pointer`}
            title={`Día ${i}: Actividad Alta`}></div>
        ))}
      </div>
      <div className="flex justify-between mt-4 text-xs text-slate-500 px-4">
        <span>Ene</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Abr</span>
        <span>May</span>
      </div>
    </div>
  );
}
