import React, { useState, useEffect, useRef } from "react";
import { ChecklistLabel } from "./ChecklistLabel";
import { Play, Pause, RotateCcw } from "lucide-react";

export const ChecklistInputStopwatch = ({
  title,
  subtitle,
  icon,
  value,
  onChange,
  isGrouped = false,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const intervalRef = useRef(null);

  // Initial Value Parsing (if needed for persistent state)
  useEffect(() => {
    if (value && typeof value === "string" && value.includes(":")) {
      const parts = value.split(":");
      if (parts.length === 3) {
        const h = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10);
        const s = parseInt(parts[2], 10);
        const total = h * 3600 + m * 60 + s;
        if (!isNaN(total) && elapsedSeconds === 0) setElapsedSeconds(total);
      }
    }
  }, []);

  const startStop = () => {
    if (isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsRunning(false);
      onChange(formatTime(elapsedSeconds));
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setElapsedSeconds(0);
    onChange("00:00:00");
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="mb-4">
      <ChecklistLabel
        title={title}
        subtitle={subtitle}
        icon={icon}
        isGrouped={isGrouped}
      />

      <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-800 shadow-inner">
        <span className="font-mono text-3xl font-bold tracking-widest text-gray-800 dark:text-white tabular-nums">
          {formatTime(elapsedSeconds)}
        </span>

        <div className="flex items-center gap-3">
          <button
            onClick={startStop}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all shadow-md active:scale-95 ${
              isRunning
                ? "bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}>
            {isRunning ? (
              <Pause size={20} fill="currentColor" />
            ) : (
              <Play size={20} fill="currentColor" />
            )}
            <span>{isRunning ? "Pausar" : "Iniciar"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
