import React, { useState } from "react";
import { Mail, Phone, MapPin, Share2, FileText } from "lucide-react";
import { DittoLogo } from "./ui/DittoLogo";

/**
 * Reused Phone Shell from ChecklistDemoPhone to ensure 1:1 visual match.
 */
export default function ContactAppPhone() {
  const [clickedApp, setClickedApp] = useState(null);

  const apps = [
    {
      id: "phone",
      name: "Teléfono",
      // Lucide icons or image urls
      icon: Phone,
      color: "bg-green-500",
      action: () => window.open("tel:+56912345678"),
      textColor: "text-white",
    },
    {
      id: "mail",
      name: "Correo",
      icon: Mail,
      color: "bg-blue-500",
      action: () => window.open("mailto:contacto@ditt.cl"),
      textColor: "text-white",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: ({ className, size }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={className}
          stroke="none">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: "bg-[#0A66C2]",
      action: () => window.open("https://linkedin.com/company/ditt-cl"),
      textColor: "text-white",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: ({ className, size }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      color: "bg-linear-to-tr from-yellow-400 via-red-500 to-purple-500",
      action: () => window.open("https://instagram.com/ditt.cl"),
      textColor: "text-white",
    },
  ];

  const handleAppClick = (app) => {
    setClickedApp(app.id);
    setTimeout(() => {
      setClickedApp(null);
      app.action();
    }, 400); // Wait for animation
  };

  return (
    <div className="w-full relative z-10 flex justify-center">
      {/* Phone Border - EXACT COPY OF CHECKLISTDEMOPHONE */}
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-14 rounded-[2.5rem] h-[650px] md:h-[800px] w-full max-w-[360px] md:max-w-[400px] shadow-2xl flex flex-col shadow-blue-500/20 z-20">
        {/* Screen */}
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

        <div
          id="phone-mockup-screen"
          className="rounded-4xl overflow-hidden w-full h-full bg-slate-50 dark:bg-slate-900 flex flex-col relative">
          {/* Status Bar */}
          <div className="absolute top-0 w-full flex justify-between items-center px-6 pt-5 text-white text-[10px] font-mono z-30">
            <span className="font-bold">13:13</span>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 bg-white/20 rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Wallpaper & Content */}
          <div className="absolute inset-0 z-0 bg-slate-900">
            {/* Abstract Wallpaper */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900"></div>

            {/* Gradient Orbs */}
            <div className="absolute top-[-10%] -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>
          </div>

          {/* Apps Grid */}
          <div className="relative z-10 flex-1 p-8 pt-24 flex flex-col items-center">
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 w-full px-6">
              {apps.map((app) => (
                <div
                  key={app.id}
                  className="flex flex-col items-center gap-3 group cursor-pointer transition-transform hover:scale-105"
                  onClick={() => handleAppClick(app)}>
                  <div
                    className={`w-16 h-16 rounded-2xl ${
                      app.color
                    } flex items-center justify-center shadow-lg transition-all duration-200 relative overflow-hidden backdrop-blur-sm
                                ${
                                  clickedApp === app.id
                                    ? "scale-90 opacity-80 brightness-75"
                                    : "active:scale-95"
                                }
                                `}>
                    {/* App Icon Gloss */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-white/20 to-transparent pointer-events-none"></div>

                    {clickedApp === app.id && (
                      <div className="absolute inset-0 bg-white/40 animate-ping rounded-2xl"></div>
                    )}
                    <app.icon
                      size={30}
                      className={app.iconColor || "text-white"}
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-xs font-medium text-white tracking-wide drop-shadow-md">
                    {app.name}
                  </span>
                </div>
              ))}
            </div>
            {/* PDF Guide */}
            <div className="w-full px-4 mt-8 mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-300 z-10">
              <div className="bg-slate-800/90 backdrop-blur-md w-full rounded-sm shadow-xl p-5 relative border border-slate-700 transform -rotate-1">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-slate-700/50 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="text-red-400" size={20} />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      ayuda.pdf
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500">1 de 1</div>
                </div>
                {/* Content */}
                <div className="space-y-3 font-serif text-slate-200">
                  <h2 className="text-base font-bold text-white border-l-4 border-blue-500 pl-3">
                    ¿Cómo contactarnos?
                  </h2>
                  <div className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="text-xl leading-none">👆</span>
                    <p className="leading-snug">
                      Toca cualquier icono de arriba para abrir la aplicación
                      correspondiente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cool Ditt Footer */}
          <div className="relative z-20 mt-auto mb-10 flex flex-col items-center gap-2">
            <div
              className="animate-[bounce_3s_infinite] drop-shadow-2xl hover:scale-110 transition-transform cursor-pointer"
              onClick={() => setShowNotification(true)}>
              <DittoLogo className="w-32 h-32" showFace={true} />
            </div>
            <p className="text-[10px] text-white/30 font-mono tracking-widest animate-pulse">
              ESTOY ESPERANDO TU LLAMADA
            </p>
          </div>

          {/* Home Indicator */}
          <div className="relative z-20 w-36 h-1.5 bg-white/50 rounded-full mx-auto mb-3"></div>
        </div>
      </div>
    </div>
  );
}
