import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Semana 1", eficiencia: 10, control: 20 },
  { name: "Semana 2", eficiencia: 30, control: 45 },
  { name: "Semana 3", eficiencia: 65, control: 75 },
  { name: "Semana 4", eficiencia: 90, control: 100 },
];

const GraficoProyeccionEficiencia = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px]" />;

  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorEficiencia" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorControl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#334155"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94a3b8", fontSize: 12 }}
          />
          <YAxis hide={true} domain={[0, 110]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "12px",
              color: "#f8fafc",
            }}
          />
          <Area
            type="monotone"
            dataKey="eficiencia"
            stroke="#3b82f6"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorEficiencia)"
            name="Eficiencia Operativa"
          />
          <Area
            type="monotone"
            dataKey="control"
            stroke="#10b981"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorControl)"
            name="Control de Calidad"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoProyeccionEficiencia;
