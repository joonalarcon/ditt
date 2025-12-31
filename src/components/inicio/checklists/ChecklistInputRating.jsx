import React, { useState } from "react";
import { ChecklistLabel } from "./ChecklistLabel";
import { Star } from "lucide-react";

export const ChecklistInputRating = ({
  title,
  subtitle,
  icon,
  value,
  onChange,
  isGrouped = false,
}) => {
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="mb-4">
      <ChecklistLabel
        title={title}
        subtitle={subtitle}
        icon={icon}
        isGrouped={isGrouped}
      />
      <div className="flex justify-center gap-2 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="focus:outline-none transform transition-transform duration-200 hover:scale-125 active:scale-95"
            onMouseEnter={() => setHoverValue(star)}
            onMouseLeave={() => setHoverValue(0)}
            onClick={() => onChange(star)}>
            <Star
              size={42}
              fill={(hoverValue || value) >= star ? "#eab308" : "transparent"}
              color={(hoverValue || value) >= star ? "#eab308" : "#d1d5db"}
              className="filter shadow-sm"
              strokeWidth={1.5}
            />
          </button>
        ))}
      </div>
      {value > 0 && (
        <p className="text-center text-sm font-bold text-yellow-500 mt-2">
          {value} / 5 Estrellas
        </p>
      )}
    </div>
  );
};
