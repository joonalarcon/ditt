import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Reportes", ahorro: 95, color: "#3b82f6" },
  { name: "Tramites", ahorro: 80, color: "#10b981" },
  { name: "Errores", ahorro: 90, color: "#f43f5e" },
  { name: "Terreno", ahorro: 70, color: "#8b5cf6" },
];

const GraficoComparativoBarras = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px]" />;

  const isMobile = mounted && window.innerWidth < 768;

  return (
    <div className="w-full h-[280px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: isMobile ? 5 : 0,
            bottom: 5,
          }}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
            horizontal={false}
          />
          <XAxis type="number" hide={true} domain={[0, 100]} />
          <YAxis
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#94a3b8",
              fontSize: isMobile ? 12 : 13,
              fontWeight: "bold",
            }}
            width={isMobile ? 85 : 100}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "12px",
              color: "#f8fafc",
              fontSize: isMobile ? "12px" : "14px",
            }}
            formatter={(value) => [`${value}% de Ahorro/Mejora`, "Impacto"]}
          />
          <Bar
            dataKey="ahorro"
            radius={[0, 10, 10, 0]}
            barSize={isMobile ? 18 : 25}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                fillOpacity={0.8}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center text-slate-500 text-sm italic">
        * % de mejora proyectado por área operativa
      </div>
    </div>
  );
};

export default GraficoComparativoBarras;
