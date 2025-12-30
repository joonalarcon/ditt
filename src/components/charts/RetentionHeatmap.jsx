import { Users } from "lucide-react";
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";

const data = [
  { index: 1, name: "Sem 1", retention: 100, cohort: "Sem 1" },
  { index: 1, name: "Sem 1", retention: 80, cohort: "Sem 2" },
  { index: 1, name: "Sem 1", retention: 60, cohort: "Sem 3" },
  { index: 1, name: "Sem 1", retention: 40, cohort: "Sem 4" },

  { index: 2, name: "Sem 2", retention: 0, cohort: "Sem 1" }, // Empty
  { index: 2, name: "Sem 2", retention: 100, cohort: "Sem 2" },
  { index: 2, name: "Sem 2", retention: 85, cohort: "Sem 3" },
  { index: 2, name: "Sem 2", retention: 70, cohort: "Sem 4" },

  { index: 3, name: "Sem 3", retention: 0, cohort: "Sem 1" },
  { index: 3, name: "Sem 3", retention: 0, cohort: "Sem 2" },
  { index: 3, name: "Sem 3", retention: 100, cohort: "Sem 3" },
  { index: 3, name: "Sem 3", retention: 90, cohort: "Sem 4" },

  { index: 4, name: "Sem 4", retention: 0, cohort: "Sem 1" },
  { index: 4, name: "Sem 4", retention: 0, cohort: "Sem 2" },
  { index: 4, name: "Sem 4", retention: 0, cohort: "Sem 3" },
  { index: 4, name: "Sem 4", retention: 100, cohort: "Sem 4" },
];

// Custom renderer to make squares
const CustomShape = (props) => {
  const { cx, cy, fill, width, height, payload } = props;
  if (payload.revention === 0) return null;

  // Calculate opacity based on user retention value
  const opacity = payload.retention > 0 ? payload.retention / 100 : 0;

  return (
    <rect
      x={cx - 20}
      y={cy - 20}
      width={40}
      height={40}
      fill={`rgba(59, 130, 246, ${opacity})`}
      stroke="#1e3a8a"
      strokeWidth={1}
      rx={4}
    />
  );
};

export default function RetentionHeatmap() {
  return (
    <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden h-full">
      <SectionTitle title="Retención de Usuarios (Cohortes)" icon={Users} />
      <div className="h-80 w-full flex items-center justify-center">
        {/* Simulation of Heatmap utilizing Grid */}
        <div className="grid grid-cols-4 gap-2">
          <div className="text-xs text-slate-400 text-center">Week 1</div>
          <div className="text-xs text-slate-400 text-center">Week 2</div>
          <div className="text-xs text-slate-400 text-center">Week 3</div>
          <div className="text-xs text-slate-400 text-center">Week 4</div>

          {/* Row 1 */}
          <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center font-bold text-white">
            100%
          </div>
          <div className="w-16 h-16 bg-blue-400 rounded flex items-center justify-center font-bold text-white">
            85%
          </div>
          <div className="w-16 h-16 bg-blue-300 rounded flex items-center justify-center font-bold text-slate-900">
            70%
          </div>
          <div className="w-16 h-16 bg-blue-200 rounded flex items-center justify-center font-bold text-slate-900">
            60%
          </div>

          {/* Row 2 */}
          <div className="w-16 h-16 bg-transparent"></div>
          <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center font-bold text-white">
            100%
          </div>
          <div className="w-16 h-16 bg-blue-400 rounded flex items-center justify-center font-bold text-white">
            88%
          </div>
          <div className="w-16 h-16 bg-blue-300 rounded flex items-center justify-center font-bold text-slate-900">
            75%
          </div>

          {/* Row 3 */}
          <div className="w-16 h-16 bg-transparent"></div>
          <div className="w-16 h-16 bg-transparent"></div>
          <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center font-bold text-white">
            100%
          </div>
          <div className="w-16 h-16 bg-blue-400 rounded flex items-center justify-center font-bold text-white">
            90%
          </div>

          {/* Row 4 */}
          <div className="w-16 h-16 bg-transparent"></div>
          <div className="w-16 h-16 bg-transparent"></div>
          <div className="w-16 h-16 bg-transparent"></div>
          <div className="w-16 h-16 bg-blue-500 rounded flex items-center justify-center font-bold text-white">
            100%
          </div>
        </div>
      </div>
    </div>
  );
}
