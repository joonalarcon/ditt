import React, { useMemo } from "react";
import ChecklistDemoInfo from "./ChecklistDemoInfo";
import ChecklistDemoPhone from "./ChecklistDemoPhone";

export default function ChecklistDemoSection() {
  const BackgroundCharts = useMemo(
    () => (
      <>
        {/* Decorative Background Charts (Simplified with CSS/SVG to save memory) */}

        {/* Top Left Blob */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 -z-10 opacity-40">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full animate-spin-slow">
            <path
              fill="#818cf8"
              d="M45,-75C58,-69,68,-57,76,-44C84,-31,90,-16,88,-1C86,14,76,29,66,41C56,53,46,62,34,69C22,76,5,81,-11,80C-27,79,-43,72,-56,62C-69,52,-79,39,-83,24C-87,9,-85,-8,-78,-23C-71,-38,-59,-51,-46,-60C-33,-69,-17,-74,0,-74L0,0Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Bottom Right Blob */}
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 -z-10 opacity-40">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full animate-spin-reverse-slow">
            <path
              fill="#34d399"
              d="M38,-63C50,-58,61,-49,70,-38C79,-27,86,-14,85,-1C84,12,75,25,65,36C55,47,44,57,32,64C20,71,6,75,-7,74C-20,73,-32,67,-43,58C-54,49,-64,37,-69,24C-74,11,-74,-3,-69,-16C-64,-29,-54,-41,-43,-50C-32,-59,-20,-65,-6,-64C8,-63,26,-68,38,-63Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Top Right Small Blob */}
        <div className="absolute -top-10 -right-12 w-48 h-48 -z-10 opacity-30">
          <div className="w-full h-full rounded-full bg-linear-to-br from-pink-400 to-rose-500 blur-2xl"></div>
        </div>

        {/* Bottom Left Small Blob */}
        <div className="absolute -bottom-10 -left-12 w-56 h-56 -z-10 opacity-30">
          <div className="w-full h-full rounded-full bg-linear-to-tr from-cyan-400 to-blue-500 blur-2xl"></div>
        </div>

        {/* Bar Chart Decoration - CSS Based */}
        <div className="absolute top-1/2 -right-32 transform -translate-y-1/2 w-64 h-48 -z-20 opacity-30 hidden lg:flex flex-col gap-2 p-4">
          <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
            <div className="h-full bg-purple-400 w-[65%]"></div>
          </div>
          <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-400 w-[45%]"></div>
          </div>
          <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400 w-[85%]"></div>
          </div>
          <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
            <div className="h-full bg-amber-400 w-[55%]"></div>
          </div>
          <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
            <div className="h-full bg-pink-400 w-[75%]"></div>
          </div>
        </div>
      </>
    ),
    [],
  ); // Empty dependency array = render once and never update

  return (
    <section className="py-10 bg-slate-900 overflow-hidden relative">
      <style>{`
        @keyframes epicSlideIn {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.8);
          }
          60% {
             opacity: 1;
             transform: translateY(-10px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes epicOverlayIn {
          0% { opacity: 0; transform: scale(0.5) rotate(-10deg); }
          60% { opacity: 1; transform: scale(1.05) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0); }
        }
        @keyframes epicOverlayOut {
          0% { opacity: 1; transform: scale(1); }
          20% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0; transform: scale(0.5) rotate(10deg); }
        }
        @keyframes radiate {
          0% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 25px rgba(34, 211, 238, 0.8), 0 0 50px rgba(59, 130, 246, 0.4); }
          100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
        }
        @keyframes flow {
           0% { background-position: 0% 50%; }
           50% { background-position: 100% 50%; }
           100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="w-full max-w-[95%] xl:max-w-[1700px] mx-auto px-6 flex flex-col lg:flex-row items-start justify-center gap-12">
        <ChecklistDemoInfo />
        <ChecklistDemoPhone BackgroundCharts={BackgroundCharts} />
      </div>
    </section>
  );
}
