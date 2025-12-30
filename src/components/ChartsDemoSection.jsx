import React from "react";
import AnomaliesScatter from "./charts/AnomaliesScatter";
import BranchRadar from "./charts/BranchRadar";
import EfficiencyFunnel from "./charts/EfficiencyFunnel";
import ProductivityHeatmap from "./charts/ProductivityHeatmap";
import SatisfactionGauge from "./charts/SatisfactionGauge";
import ServerStatusChart from "./charts/ServerStatusChart";
import TopCompaniesCharts from "./charts/TopCompaniesCharts";
import TrendArea from "./charts/TrendArea";

export default function ChartsDemoSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            Analítica Avanzada en Tiempo Real
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Toma el control total de tu operación con dashboards interactivos
            que transforman datos complejos en decisiones simples.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Dashboard Principal - Server Status (Full Width on Desktop) */}
          <div className="xl:col-span-2">
            <ServerStatusChart />
          </div>

          {/* Fila 2 */}
          <div className="xl:col-span-2">
            <TopCompaniesCharts />
          </div>

          {/* Fila 3 - Gráficos más específicos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:col-span-2">
            <BranchRadar />
            <SatisfactionGauge />
          </div>

          {/* Fila 4 */}
          <EfficiencyFunnel />
          <TrendArea />

          {/* Fila 5 */}
          <AnomaliesScatter />
          <ProductivityHeatmap />
        </div>
      </div>
    </section>
  );
}
