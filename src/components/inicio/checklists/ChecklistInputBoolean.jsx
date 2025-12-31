import React from "react";
import { ChecklistLabel } from "./ChecklistLabel";

export const ChecklistInputBoolean = ({
  title,
  subtitle,
  icon,
  value,
  onChange,
  isGrouped = false,
}) => {
  return (
    <div
      className={
        isGrouped
          ? "flex flex-col items-start py-2"
          : "flex items-center justify-between mb-4 rounded-2xl border-2 border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow"
      }>
      <div className={isGrouped ? "mb-1" : "mr-4 flex-1"}>
        <ChecklistLabel
          title={title}
          subtitle={subtitle}
          icon={icon}
          isGrouped={isGrouped}
        />
      </div>

      <div
        onClick={() => onChange(!value)}
        className={`w-12 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          value ? "bg-blue-600" : "bg-slate-300"
        }`}>
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
            value ? "translate-x-5" : "translate-x-0"
          }`}></div>
      </div>
    </div>
  );
};
