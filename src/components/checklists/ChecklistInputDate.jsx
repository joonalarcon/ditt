import React, { useState } from "react";
import { ChecklistLabel } from "./ChecklistLabel";
import { Calendar } from "lucide-react";

export const ChecklistInputDate = ({
  title,
  subtitle,
  icon,
  value,
  onChange,
  isGrouped = false,
}) => {
  // Simple HTML Date Input styled to look like a button
  return (
    <div className="mb-4 relative">
      <ChecklistLabel
        title={title}
        subtitle={subtitle}
        icon={icon}
        isGrouped={isGrouped}
      />

      <div className="relative w-full">
        <input
          type="datetime-local"
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white dark:bg-slate-800 dark:border-slate-700 text-gray-700 dark:text-white font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none cursor-pointer shadow-sm hover:border-blue-400 transition-colors"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Calendar
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      </div>
    </div>
  );
};
