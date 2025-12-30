import React, { useState } from "react";
import {
  ChecklistInputBoolean,
  ChecklistInputEmotions,
  ChecklistInputRating,
  ChecklistInputText,
  ChecklistInputAudio,
  ChecklistInputPhoto,
  ChecklistInputSignature,
  ChecklistProductScan,
  ChecklistInputDate,
  ChecklistInputStopwatch,
  ChecklistInputRange,
  ChecklistInputSelect,
  ChecklistInputCurrency,
  ChecklistInputDisclaimer,
  ChecklistInputFile,
  ChecklistInputIDScanner,
  ChecklistInputInstruction,
  ChecklistInputMultiSelect,
  ChecklistInputNPS,
  ChecklistInputSketch,
  ChecklistInputStatus,
  ChecklistInputTally,
  ChecklistInputTeamPicker,
  ChecklistInputTimeSpan,
  ChecklistInputUVIndex,
  ChecklistSectionTitle,
  ChecklistSpacer,
  ChecklistDivider,
} from "./checklists";
import { DemoChecklistsData } from "../DemosUi/DemoChecklistsData";
import {
  CheckCircle2,
  Thermometer,
  Smile,
  Star,
  ClipboardList,
  PenTool,
  Mic,
  Camera,
  Feather,
  Calendar,
  Timer,
  Sliders,
  ChevronDown,
  Radio,
  Gauge,
  Power,
  Lock,
  Trash2,
  Droplets,
  Truck,
  Tag,
  AlertTriangle,
  Car,
  Laptop,
  FileText,
} from "lucide-react";

const COMPONENT_MAP = {
  ChecklistInputBoolean,
  ChecklistInputText,
  ChecklistInputEmotions,
  ChecklistInputRating,
  ChecklistInputPhoto,
  ChecklistInputAudio,
  ChecklistInputSignature,
  ChecklistInputDate,
  ChecklistInputStopwatch,
  ChecklistInputRange,
  ChecklistInputSelect,
  ChecklistProductScan,
  ChecklistInputCurrency,
  ChecklistInputDisclaimer,
  ChecklistInputFile,
  ChecklistInputIDScanner,
  ChecklistInputInstruction,
  ChecklistInputMultiSelect,
  ChecklistInputNPS,
  ChecklistInputSketch,
  ChecklistInputStatus,
  ChecklistInputTally,
  ChecklistInputTeamPicker,
  ChecklistInputTimeSpan,
  ChecklistInputUVIndex,
  ChecklistSectionTitle,
  ChecklistSpacer,
  ChecklistDivider,
};

const ICON_MAP = {
  Camera,
  Mic,
  PenTool,
  MapPin: Camera, // Fallback or MapPin if imported
  Smile,
  Thermometer,
  CheckCircle2,
  Calendar,
  Timer,
  Sliders,
  Feather,
  Trash2,
  Clock: Timer, // Fallback
  Tag,
  Radio,
  Gauge,
  Power,
  Lock,
  AlertTriangle,
  Droplets,
  Truck,
  Car,
  Laptop,
  Star,
  ClipboardList,
};

// Helper for epic entry animations
const AnimateItem = ({ children, delay }) => (
  <div
    className="animate-entry"
    style={{
      opacity: 0,
      animation: `epicSlideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
      animationDelay: `${delay}ms`,
    }}>
    {children}
  </div>
);

export default function ChecklistDemoPhone({ children }) {
  const [formData, setFormData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentOption, setCurrentOption] = useState("Seleccionar opciones");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFinish = () => {
    setIsFinished(true);
    setIsClosing(false);

    // Start exit animation
    setTimeout(() => {
      setIsClosing(true);
    }, 1000); // Displays for 1s then starts closing

    // Reset and unmount
    setTimeout(() => {
      setIsFinished(false);
      setIsClosing(false);
      setFormData({});
    }, 1500); // Total duration 1.5s
  };

  return (
    <div className="lg:w-1/3 relative z-10 -mt-8">
      <div className="flex justify-center mb-4 relative z-50 px-4 w-full">
        <div className="relative w-full max-w-[320px]">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between gap-3 w-full px-6 py-4 bg-size-200 bg-linear-to-r from-slate-900 via-blue-900/40 to-slate-900 backdrop-blur-xl border border-blue-400/50 rounded-2xl text-white font-bold transition-all duration-300 group cursor-pointer relative overflow-hidden"
            style={{
              animation:
                "radiate 2s infinite ease-in-out, flow 3s infinite linear",
            }}>
            {/* Internal Glow Blob */}
            <div className="absolute inset-0 bg-blue-500/10 animate-pulse "></div>

            <span className="flex items-center gap-2 relative z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_15px_cyan] animate-[pulse_1s_ease-in-out_infinite]"></div>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-cyan-100 drop-shadow-sm">
                {currentOption}
              </span>
            </span>
            <ChevronDown
              size={20}
              className={`text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-transform duration-300 relative z-10 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full left-0 right-0 mt-3 bg-slate-900/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 origin-top z-60 ${
              isDropdownOpen
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
            }`}>
            {Object.keys(DemoChecklistsData).map((option) => (
              <button
                key={option}
                onClick={() => {
                  setCurrentOption(option);
                  setIsDropdownOpen(false);
                  setFormData({});
                }}
                className={`w-full text-left px-6 py-4 text-sm font-bold transition-all flex items-center gap-3 cursor-pointer relative group ${
                  currentOption === option
                    ? "text-cyan-300 bg-blue-500/10"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                }`}>
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentOption === option
                      ? "bg-cyan-400 shadow-[0_0_8px_cyan]"
                      : "bg-slate-600 group-hover:bg-cyan-200"
                  }`}></div>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {children}
      {/* Phone Border */}
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-14 rounded-[2.5rem] h-[650px] md:h-[800px] w-full max-w-[360px] md:max-w-[400px] shadow-2xl flex flex-col shadow-blue-500/20 z-20">
        {/* Screen */}
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

        <div
          id="phone-mockup-screen"
          className="rounded-4xl overflow-hidden w-full h-full bg-slate-50 dark:bg-slate-900 flex flex-col relative">
          {/* Header Virtual */}
          <div className="bg-blue-600 p-4 pt-8 text-white shadow-md z-10">
            <div className="flex justify-between items-center mb-1">
              <div className="w-16 text-xs font-mono font-extrabold opacity-80">
                13:13
              </div>
              <div className="flex gap-1">
                <div className="w-4 h-4 rounded-full bg-white/20"></div>
                <div className="w-4 h-4 rounded-full bg-white/20"></div>
              </div>
            </div>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <ClipboardList size={20} />
              Checklist Demo Pagina Web
            </h3>
            <p className="text-xs text-blue-100 opacity-80 pl-7">
              Sucursal Central
            </p>
          </div>

          {/* Scrollable Content */}
          <div
            key={currentOption}
            className="flex-1 overflow-y-auto p-4 space-y-2 pb-20 scrollbar-hide">
            {DemoChecklistsData[currentOption] ? (
              DemoChecklistsData[currentOption].map((item, index) => {
                const Component = COMPONENT_MAP[item.type];
                const Icon = item.icon ? ICON_MAP[item.icon] : undefined;
                if (!Component) return null;
                return (
                  <AnimateItem key={index} delay={index * 100}>
                    <Component
                      {...item}
                      icon={Icon}
                      value={
                        formData[item.title] !== undefined
                          ? formData[item.title]
                          : item.value || ""
                      }
                      onChange={(val) => handleChange(item.title, val)}
                    />
                  </AnimateItem>
                );
              })
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-2 py-10 animate-in fade-in zoom-in duration-500">
                {/* PDF Document Container (Dark Mode) */}
                <div className="bg-slate-800 w-full rounded-sm shadow-2xl p-4 relative border border-slate-700 transform -rotate-1 min-h-[300px]">
                  {/* PDF Header */}
                  <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="text-red-400" size={20} />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        instrucciones.pdf
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500">1 de 1</div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6 font-serif text-slate-200">
                    <div>
                      <h2 className="text-xl font-bold text-white border-l-4 border-blue-500 pl-3 mb-2">
                        Bienvenido a la Demo
                      </h2>
                      <p className="text-sm leading-relaxed text-slate-400">
                        Estás viendo una simulación en tiempo real de nuestra
                        App.
                      </p>
                    </div>

                    <div className="bg-blue-900/30 p-3 rounded text-sm text-blue-200 border border-blue-500/30 flex items-start gap-3">
                      <div className="text-xl shrink-0">👆</div>
                      <div className="min-w-0">
                        <strong>Para comenzar:</strong>
                        <br />
                        Toca el menú desplegable que está arriba del teléfono.
                      </div>
                    </div>

                    <p className="text-xs text-white italic text-center mt-8">
                      "Digitaliza tus operaciones en minutos."
                    </p>
                  </div>

                  {/* Drawn Arrow pointing UP to the dropdown */}
                  <div className="absolute -top-16 -right-2 w-32 h-32 z-50 pointer-events-none">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full text-blue-400 drop-shadow-md animate-bounce">
                      <defs>
                        <marker
                          id="arrowhead"
                          markerWidth="6"
                          markerHeight="6"
                          refX="5"
                          refY="3"
                          orient="auto">
                          <path d="M0,0 L6,3 L0,6" fill="currentColor" />
                        </marker>
                      </defs>
                      {/* Curved arrow pointing up and leftish towards the center/dropdown */}
                      <path
                        d="M 30 80 Q 80 60 50 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        markerEnd="url(#arrowhead)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer / Floating Button with SafeArea Gradient emulation */}
          {DemoChecklistsData[currentOption] && (
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 pt-4 bg-linear-to-t from-slate-50 via-slate-50 to-transparent dark:from-slate-900 dark:via-slate-900 z-30">
              <AnimateItem delay={1500}>
                <button
                  onClick={handleFinish}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2">
                  <span>Finalizar Checklist</span>
                </button>
              </AnimateItem>
            </div>
          )}

          {/* Success Overlay */}
          {isFinished && (
            <div
              className={`absolute inset-0 z-50 bg-green-500 flex flex-col items-center justify-center text-white ${
                isClosing
                  ? "animate-[epicOverlayOut_0.5s_forwards]"
                  : "animate-[epicOverlayIn_0.5s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]"
              }`}>
              <div className="bg-white/20 p-6 rounded-full mb-6 animate-bounce">
                <CheckCircle2 size={64} strokeWidth={3} />
              </div>
              <h3 className="text-3xl font-bold mb-2">¡Enviado!</h3>
              <p className="text-green-100 text-center px-8">
                El checklist se ha registrado correctamente en el sistema.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
