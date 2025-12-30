import React, { useState, useEffect } from "react";
import TypewriterEffect from "./ui/TypewriterEffect";
import { CheckCircle2 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function ChecklistDemoInfo() {
  const [chartData, setChartData] = useState([
    { name: "Todo", value: 0, color: "#34d399" },
    { name: "Esto", value: 0, color: "#fbbf24" },
    { name: "En", value: 0, color: "#f472b6" },
    { name: "Una", value: 0, color: "#a78bfa" },
    { name: "Sola", value: 0, color: "#60a5fa" },
    { name: "App", value: 0, color: "#f87171" },
  ]);

  useEffect(() => {
    // Generate random values after mount to avoid hydration mismatch
    setChartData([
      {
        name: "Todo",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#34d399",
      },
      {
        name: "Esto",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#fbbf24",
      },
      {
        name: "En",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#f472b6",
      },
      {
        name: "Una",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#a78bfa",
      },
      {
        name: "Sola",
        value: Math.floor(Math.random() * 60) + 30,
        color: "#60a5fa",
      },
      { name: "App", value: 100, color: "#f87171" },
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
    <div className="">
      <h2 className="text-start mt-10 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-emerald-400 mb-4">
        Controla tu negocio con Ditt
      </h2>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
        Experiencia Móvil <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
          Fluida e Intuitiva
        </span>
      </h2>
      <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
        Nuestra App está diseñada para el terreno. Botones grandes, respuestas
        rápidas y validaciones en tiempo real que tus operarios amarán usar.
      </p>

      <div className="mt-8 mb-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-2xl md:text-3xl font-bold min-h-14">
        <h3 className="text-white">Esta app se adapta a:</h3>
        <div className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
          <TypewriterEffect
            words={[
              "Supervisores de Obra",
              "Prevención de Riesgos",
              "Control de Calidad",
              "Restaurantes",
              "Hoteles",
              "Mantenimiento Industrial",
              "Seguridad Privada",
              "Flotas de Transporte",
              "Limpieza de Oficinas",
              "Supermercados",
              "Farmacias",
              "Gimnasios",
              "Jardines Infantiles",
              "Clínicas y Hospitales",
              "Rent a Car",
              "Administración de Edificios",
              "Servicios Técnicos",
              "Agroindustria",
              "Plantas de Producción",
              "Organizadores de Eventos",
              "Empresas de Aseo",
              "Retail",
              "Centros Comerciales",
              "Laboratorios",
              "Centros de Distribución",
              "Auditorías Sanitarias",
              "Inspección de Maquinaria",
              "Recepción de Mercadería",
              "Rondas de Vigilancia",
              "Profesores",
              "Talleres Mecánicos",
              "Minimarkets",
              "Botillerías",
              "Control de EPP",
              "Checklists de Vehículos",
            ]}
          />
        </div>
      </div>

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
    </div>
  );
}
