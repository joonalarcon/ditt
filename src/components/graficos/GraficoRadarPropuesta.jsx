import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { subject: "Seguridad", A: 120, fullMark: 150 },
  { subject: "Velocidad", A: 98, fullMark: 150 },
  { subject: "Offline", A: 150, fullMark: 150 },
  { subject: "Control", A: 140, fullMark: 150 },
  { subject: "Soporte", A: 110, fullMark: 150 },
  { subject: "Flexibilidad", A: 130, fullMark: 150 },
];

const GraficoRadarPropuesta = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px]" />;

  return (
    <div className="w-full h-[350px] md:h-[450px] flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#94a3b8", fontSize: 13, fontWeight: 500 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 150]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Ditt Performance"
            dataKey="A"
            stroke="#60a5fa"
            fill="#3b82f6"
            fillOpacity={0.5}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #475569",
              borderRadius: "12px",
              color: "#f8fafc",
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoRadarPropuesta;
