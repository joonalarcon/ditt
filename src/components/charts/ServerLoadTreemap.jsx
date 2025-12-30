import { Server } from "lucide-react";
import { ResponsiveContainer, Tooltip, Treemap } from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  {
    name: "DB Cluster",
    children: [
      { name: "Primary DB", size: 4000 },
      { name: "Replica 1", size: 3000 },
      { name: "Replica 2", size: 3000 },
    ],
  },
  {
    name: "App Servers",
    children: [
      { name: "Node-01", size: 2000 },
      { name: "Node-02", size: 1800 },
      { name: "Worker-01", size: 1500 },
    ],
  },
  {
    name: "Cache",
    children: [
      { name: "Redis Total", size: 1200 },
      { name: "Memcached", size: 800 },
    ],
  },
];

const COLORS = [
  "#8889DD",
  "#9597E4",
  "#8DC77B",
  "#A5D297",
  "#E2CF45",
  "#F8C12D",
];

// Custom Content for Treemap to have colors
const CustomizedContent = (props) => {
  const {
    root,
    depth,
    x,
    y,
    width,
    height,
    index,
    payload,
    colors,
    rank,
    name,
  } = props;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill:
            depth < 2
              ? COLORS[Math.floor((index / root.children.length) * 6)]
              : "rgba(255,255,255,0)",
          stroke: "#fff",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10),
        }}
      />
      {depth === 1 ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 7}
          textAnchor="middle"
          fill="#fff"
          fontSize={14}>
          {name}
        </text>
      ) : null}
      {depth === 1 ? (
        <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
          {index + 1}
        </text>
      ) : null}
    </g>
  );
};

export default function ServerLoadTreemap() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Distribución de Carga de Recursos" icon={Server} />
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <Treemap
            data={data}
            dataKey="size"
            ratio={4 / 3}
            stroke="#fff"
            fill="#8884d8"
            content={<CustomizedContent colors={COLORS} />}
          />
        </ResponsiveContainer>
      </div>
    </div>
  );
}
