import React from "react";

export const DittoLogo = ({
  className = "w-10 h-10",
  color = "bg-purple-500",
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <style>
        {`
        @keyframes ditto-wobble {
            0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(0,0) scale(1); }
            33% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: translate(2px, -2px) scale(1.05); }
            66% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; transform: translate(-2px, 2px) scale(0.95); }
            100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(0,0) scale(1); }
        }
        .animate-ditto {
            animation: ditto-wobble 3s ease-in-out infinite;
        }
        `}
      </style>

      {/* The Blob */}
      <div
        className={`absolute inset-0 ${color} animate-ditto opacity-90 transition-all duration-300`}></div>

      {/* Face (Eyes and Smile) */}
      <div className="relative z-10 flex flex-col items-center justify-center translate-y-0.5 pointer-events-none">
        <div className="flex gap-[8px] mb-[4px]">
          {/* Eyes */}
          <div className="w-[5px] h-[5px] bg-slate-900 rounded-full opacity-80"></div>
          <div className="w-[5px] h-[5px] bg-slate-900 rounded-full opacity-80"></div>
        </div>
        {/* Smile */}
        <div className="w-[14px] h-[6px] border-b-[3px] border-slate-900 rounded-b-full opacity-80 mt-[-2px]"></div>
      </div>
    </div>
  );
};
