import React, { useState } from "react";
import { ChecklistLabel } from "./ChecklistLabel";

export const ChecklistInputRange = ({
  title,
  subtitle,
  icon,
  value,
  onChange,
  isGrouped = false,
}) => {
  const steps = [0, 25, 50, 75, 100];
  const currentValue = value ? parseInt(value) : 0;

  const getLabel = (val) => {
    if (val === 0) return "Nulo";
    if (val === 25) return "Bajo";
    if (val === 50) return "Medio";
    if (val === 75) return "Alto";
    if (val === 100) return "Total";
    return "";
  };

  const getColor = (val) => {
    if (val <= 25) return "bg-red-500";
    if (val <= 50) return "bg-orange-500";
    if (val <= 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="mb-4">
      <ChecklistLabel
        title={title}
        subtitle={subtitle}
        icon={icon}
        isGrouped={isGrouped}
      />

      <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800 shadow-sm">
        {/* Display */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-gray-500 text-sm font-medium">
            Nivel Estimado
          </span>
          <div
            className={`rounded-lg px-3 py-1 transition-colors duration-300 ${getColor(
              currentValue,
            )}`}>
            <span className="text-lg font-bold text-white">
              {currentValue}%
            </span>
          </div>
        </div>

        {/* Visual Track */}
        <div className="relative h-12 flex items-center justify-between px-2">
          {/* Background Line */}
          <div className="absolute left-0 right-0 h-2 rounded-full bg-gray-100 dark:bg-slate-700 top-1/2 -mt-1 -z-0"></div>

          {steps.map((step) => {
            const isActive = currentValue >= step;
            const isSelected = currentValue === step;
            const colorClass = getColor(step); // Dynamic step color

            return (
              <button
                key={step}
                onClick={() => onChange(step.toString())}
                className="relative z-10 flex flex-col items-center group focus:outline-none">
                <div
                  className={`
                               h-6 w-6 rounded-full border-2 transition-all duration-300 
                               ${
                                 isActive
                                   ? `${colorClass} border-white shadow-md scale-110`
                                   : "border-slate-200 bg-slate-100 dark:border-slate-600 dark:bg-slate-700"
                               }
                               ${
                                 isSelected
                                   ? "ring-4 ring-black/5 dark:ring-white/10 scale-125"
                                   : ""
                               }
                           `}></div>
                <span
                  className={`mt-2 text-xs font-bold transition-colors ${
                    isSelected
                      ? "text-slate-800 dark:text-white"
                      : "text-slate-400"
                  }`}>
                  {step}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-2 text-center text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
          {getLabel(currentValue)}
        </p>
      </div>
    </div>
  );
};
