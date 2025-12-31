import React from "react";

export default function LogoDittReact({
  className = "w-10 h-10",
  color = "bg-purple-500",
  showFace = true,
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Face (Eyes and Smile) */}
      {showFace && (
        <div className="relative z-10 flex flex-col items-center justify-center translate-y-0.5 pointer-events-none">
          <div className="flex gap-[8px] mb-[4px]">
            {/* Eyes */}
            <div className="w-[5px] h-[5px] bg-slate-900 rounded-full opacity-80" />
            <div className="w-[5px] h-[5px] bg-slate-900 rounded-full opacity-80" />
          </div>
          {/* Smile */}
          <div className="w-[14px] h-[6px] border-b-[3px] border-slate-900 rounded-b-full opacity-80 mt-[-2px]" />
        </div>
      )}

      {/* The Blob */}
      <div
        className={`absolute inset-0 animate-ditto opacity-90 transition-all duration-300 ${color}`}></div>
    </div>
  );
}
