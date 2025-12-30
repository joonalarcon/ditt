import { Building2, FileCheck } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SectionTitle from "./SectionTitle";

const topDocumentsData = [
  { name: "Transportes Chile", value: 3850 },
  { name: "Minería El Teniente", value: 3100 },
  { name: "Constructora Andes", value: 2400 },
  { name: "Celulosa Arauco", value: 1950 },
  { name: "Agrosuper", value: 1540 },
];

const topChecklistsData = [
  { name: "Retail Falabella", value: 5200 },
  { name: "Walmart Chile", value: 4800 },
  { name: "Cencosud", value: 4150 },
  { name: "Sodimac", value: 3900 },
  { name: "SMU Unimarc", value: 3200 },
];

export default function TopCompaniesCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-transparent shadow-none border-none p-0 w-full h-full">
      {/* 8a. TOP CHECKLISTS */}
      <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl">
        <SectionTitle
          title="Top 5 Empresas: Checklists Operativos"
          icon={FileCheck}
        />
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={topChecklistsData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.05)"
                horizontal={false}
              />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b" }}
              />
              <YAxis
                dataKey="name"
                type="category"
                width={110}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.05)" }}
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Bar
                dataKey="value"
                fill="#8b5cf6"
                radius={[0, 4, 4, 0]}
                barSize={20}
                name="Checklists">
                <LabelList
                  dataKey="value"
                  position="right"
                  fill="#cbd5e1"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 8b. TOP DOCUMENTOS */}
      <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-xl">
        <SectionTitle
          title="Top 5 Empresas: Documentos Generados"
          icon={Building2}
        />
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={topDocumentsData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.05)"
                horizontal={false}
              />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b" }}
              />
              <YAxis
                dataKey="name"
                type="category"
                width={110}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.05)" }}
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Bar
                dataKey="value"
                fill="#06b6d4"
                radius={[0, 4, 4, 0]}
                barSize={20}
                name="Documentos">
                <LabelList
                  dataKey="value"
                  position="right"
                  fill="#cbd5e1"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
