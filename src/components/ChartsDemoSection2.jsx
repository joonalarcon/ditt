import React from "react";
import UserGrowthLine from "./charts/UserGrowthLine";
import InventoryTurnoverBar from "./charts/InventoryTurnoverBar";
import ErrorRateDonut from "./charts/ErrorRateDonut";
import ApiLatencyArea from "./charts/ApiLatencyArea";
import RevenueRadar from "./charts/RevenueRadar";
import TaskCompletionRadial from "./charts/TaskCompletionRadial";
import ServerLoadTreemap from "./charts/ServerLoadTreemap";
import RegionalBubble from "./charts/RegionalBubble";
import AuditComplianceComposed from "./charts/AuditComplianceComposed";
import SystemHealthRadial from "./charts/SystemHealthRadial";

export default function ChartsDemoSection2() {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Nuevas Métricas de Impacto
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explora dimensiones adicionales de tu negocio con nuestra nueva
            suite de visualización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <UserGrowthLine />
          <InventoryTurnoverBar />
          <ErrorRateDonut />

          <div className="md:col-span-2 xl:col-span-2">
            <ApiLatencyArea />
          </div>
          <RevenueRadar />

          <TaskCompletionRadial />
          <div className="md:col-span-2 xl:col-span-2">
            <ServerLoadTreemap />
          </div>

          <div className="xl:col-span-3">
            <RegionalBubble />
          </div>

          <AuditComplianceComposed />
          <div className="md:col-span-2">
            <SystemHealthRadial />
          </div>
        </div>
      </div>
    </section>
  );
}
