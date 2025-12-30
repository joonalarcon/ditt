import React from "react";
import { ChecklistLabel } from "./ChecklistLabel";

// Emojis y colores para cada nivel (1-5 nps scale)
const EMOTIONS = [
  {
    value: "1",
    emoji: "😡",
    label: "Enojado",
    color: "bg-red-100",
    active: "bg-red-500",
    text: "text-red-600",
    border: "border-red-200",
  },
  {
    value: "2",
    emoji: "☹️",
    label: "Mal",
    color: "bg-orange-100",
    active: "bg-orange-500",
    text: "text-orange-600",
    border: "border-orange-200",
  },
  {
    value: "3",
    emoji: "😐",
    label: "Regular",
    color: "bg-yellow-100",
    active: "bg-yellow-500",
    text: "text-yellow-600",
    border: "border-yellow-200",
  },
  {
    value: "4",
    emoji: "🙂",
    label: "Bien",
    color: "bg-lime-100",
    active: "bg-lime-500",
    text: "text-lime-600",
    border: "border-lime-200",
  },
  {
    value: "5",
    emoji: "🤩",
    label: "Excelente",
    color: "bg-green-100",
    active: "bg-green-500",
    text: "text-green-600",
    border: "border-green-200",
  },
];

export const ChecklistInputEmotions = ({
  title,
  subtitle,
  icon,
  value,
  onChange,
  isGrouped = false,
}) => {
  const handleSelect = (val) => {
    onChange(val);
  };

  return (
    <div className="mb-4">
      <ChecklistLabel
        title={title}
        subtitle={subtitle}
        icon={icon}
        isGrouped={isGrouped}
      />

      <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-2 dark:border-slate-700 dark:bg-slate-800 shadow-inner">
        {EMOTIONS.map((emotion) => {
          const isSelected = value === emotion.value;
          return (
            <button
              key={emotion.value}
              onClick={() => handleSelect(emotion.value)}
              className={`mx-1 flex-1 flex flex-col items-center justify-center rounded-xl p-2 transition-all duration-300 ${
                isSelected
                  ? `${emotion.active} scale-110 shadow-lg`
                  : "bg-white hover:bg-gray-100 dark:bg-slate-700"
              }`}>
              <span className="text-3xl mb-1 filter drop-shadow-sm">
                {emotion.emoji}
              </span>

              {/* Etiqueta solo si está seleccionado para ahorrar espacio */}
              <span
                className={`text-[10px] font-bold transition-opacity duration-300 ${
                  isSelected ? "text-white opacity-100" : "opacity-0 h-0 hidden"
                }`}>
                {emotion.label}
              </span>
            </button>
          );
        })}
      </div>

      {value && (
        <p className="mt-2 text-center font-medium text-gray-500 dark:text-gray-400 text-sm animate-fade-in">
          Valoración: {EMOTIONS.find((e) => e.value === value)?.label}
        </p>
      )}
    </div>
  );
};
