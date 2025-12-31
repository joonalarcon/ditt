import React, { useState, useEffect } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Ahorro Papel",
    value: 85,
    fill: "#10b981",
  },
  {
    name: "Eficiencia",
    value: 70,
    fill: "#3b82f6",
  },
  {
    name: "Disponibilidad",
    value: 100,
    fill: "#8b5cf6",
  },
];

const GraficoImpactoDirecto = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[300px]" />;

  return (
    <div className="w-full h-[280px] md:h-[400px] relative group">
      {/* Glow effect back */}
      <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-700"></div>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="35%"
          outerRadius="100%"
          barSize={12}
          data={data}
          startAngle={180}
          endAngle={-180}>
          <RadialBar
            minAngle={15}
            label={false}
            background
            clockWise
            dataKey="value"
            cornerRadius={10}
          />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "1px solid #334155",
              borderRadius: "12px",
              color: "#f8fafc",
            }}
          />
          <Legend
            iconSize={8}
            layout={
              mounted && window.innerWidth < 768 ? "horizontal" : "vertical"
            }
            verticalAlign={
              mounted && window.innerWidth < 768 ? "bottom" : "middle"
            }
            align={mounted && window.innerWidth < 768 ? "center" : "right"}
            wrapperStyle={
              mounted && window.innerWidth < 768
                ? {
                    paddingTop: "20px",
                    fontSize: "12px",
                  }
                : {
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    lineHeight: "24px",
                    fontSize: "14px",
                    color: "#94a3b8",
                  }
            }
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoImpactoDirecto;
