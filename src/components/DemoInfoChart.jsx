import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { CheckCircle2 } from "lucide-react";

export default function DemoInfoChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData([
      {
        name: "Todo",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#334155", // Slate 700
      },
      {
        name: "Esto",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#475569", // Slate 600
      },
      {
        name: "En",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#1e293b", // Slate 800
      },
      {
        name: "Una",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#334155", // Slate 700
      },
      {
        name: "Sola",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#475569", // Slate 600
      },
      { name: "App", value: 100, color: "#0ea5e9" }, // Sky 500 (Accent)
    ]);
  }, []);

  const pills = [
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

  return (
    <div className="mt-8 w-full h-64 bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
      <p className="text-center text-slate-400 text-sm mb-2 font-mono">
        Potencial de Operación
      </p>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart layout="vertical" data={chartData}>
          <XAxis type="number" hide />
          <YAxis
            dataKey="name"
            type="category"
            width={50}
            tick={{ fill: "#cbd5e1", fontSize: 13, fontWeight: "bold" }}
            axisLine={false}
            tickLine={false}
          />
          <Bar
            dataKey="value"
            radius={[0, 10, 10, 0]}
            barSize={18}
            animationDuration={3000}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap gap-4 justify-center mt-10 lg:justify-start">
        {pills.map((pill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-slate-300">
            <CheckCircle2 size={18} className={pill.color} />
            <span>{pill.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
