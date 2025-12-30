import React from "react";
import NpsScoreStacked from "./charts/NpsScoreStacked";
import CustomerTierPyramid from "./charts/CustomerTierPyramid";
import SessionDeviceDonut from "./charts/SessionDeviceDonut";
import RetentionHeatmap from "./charts/RetentionHeatmap";
import SlaComplianceLine from "./charts/SlaComplianceLine";
import TeamVelocityBar from "./charts/TeamVelocityBar";
import MrrGrowthArea from "./charts/MrrGrowthArea";
import SupportVolumeComposed from "./charts/SupportVolumeComposed";
import NestedPieUptime from "./charts/NestedPieUptime";
import BudgetBurnDown from "./charts/BudgetBurnDown";

export default function ChartsDemoSection3() {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-teal-400 to-indigo-400 mb-4">
            KPIs Estratégicos & Gestión
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Visualiza finanzas, soporte, retención y más con nuestra colección
            ejecutiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <NpsScoreStacked />
          <MrrGrowthArea />
          <CustomerTierPyramid />

          <div className="md:col-span-2 xl:col-span-2">
            <SlaComplianceLine />
          </div>
          <SessionDeviceDonut />

          <TeamVelocityBar />
          <div className="md:col-span-2 xl:col-span-2">
            <SupportVolumeComposed />
          </div>

          <RetentionHeatmap />
          <NestedPieUptime />
          <BudgetBurnDown />
        </div>
      </div>
    </section>
  );
}
