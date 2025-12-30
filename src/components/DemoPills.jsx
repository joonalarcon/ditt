import React from "react";
import { CheckCircle2 } from "lucide-react";

export const pills = [
  { text: "Escaneo códigos", color: "text-emerald-500" },
  { text: "Cronómetro", color: "text-rose-500" },
  { text: "Satisfacción", color: "text-amber-400" },
  { text: "Scanner QR", color: "text-cyan-400" },
  { text: "Validación de ubicacion", color: "text-green-500" },
  { text: "Notas de Voz", color: "text-pink-500" },
  { text: "Textos", color: "text-indigo-400" },
  { text: "Fotos", color: "text-purple-500" },
  { text: "Moneda", color: "text-yellow-500" },
  { text: "Disclaimer", color: "text-gray-400" },
  { text: "Archivos", color: "text-blue-300" },
  { text: "Escáner Carnet/ID", color: "text-indigo-500" },
  { text: "Selección Múltiple", color: "text-teal-400" },
  { text: "NPS", color: "text-orange-500" },
  { text: "Croquis/Dibujo", color: "text-fuchsia-400" },
  { text: "Estado", color: "text-lime-400" },
  { text: "Stop & Go", color: "text-red-600" },
  { text: "Contador", color: "text-sky-400" },
  { text: "Selector Equipo", color: "text-violet-400" },
  { text: "Lapso Tiempo", color: "text-rose-300" },
  { text: "Índice UV", color: "text-yellow-400" },
];

export default function DemoPills({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
      {pills.map((pill, index) => (
        <div
          key={index}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 rounded-full border border-slate-700 text-slate-300 text-sm hover:border-slate-500 transition-colors cursor-default">
          <CheckCircle2 size={16} className={pill.color} />
          <span>{pill.text}</span>
        </div>
      ))}
    </div>
  );
}
