import React, { useState } from "react";
import { createPortal } from "react-dom";
import { ChecklistLabel } from "./ChecklistLabel";
import { Camera, Trash2, CheckCircle2, X } from "lucide-react";

export const ChecklistInputPhoto = ({
  title,
  subtitle,
  icon,
  value,
  onChange,
  isGrouped = false,
}) => {
  const [isSimulatingCamera, setIsSimulatingCamera] = useState(false);
  const [cameraFeed, setCameraFeed] = useState(null);
  const [flash, setFlash] = useState(false);

  const handleStartCamera = () => {
    // Generate the "feed" image immediately
    const randomId = Math.floor(Math.random() * 1000);
    setCameraFeed(`https://picsum.photos/seed/${randomId}/400/800`);
    setIsSimulatingCamera(true);
  };

  const takePhoto = () => {
    setFlash(true);
    // Flash effect delay
    setTimeout(() => {
      onChange(cameraFeed);
      setIsSimulatingCamera(false);
      setFlash(false);
    }, 300); // Short delay for flash
  };

  return (
    <div className="mb-4">
      <ChecklistLabel
        title={title}
        subtitle={subtitle}
        icon={icon}
        isGrouped={isGrouped}
      />

      {value ? (
        <div className="mt-2 flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-900/50 dark:bg-green-900/20 animate-fade-in">
          <div className="flex flex-1 items-center">
            <div className="relative">
              <img
                src={value}
                alt="Preview"
                className="w-12 h-12 rounded bg-gray-300 object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-white">
                <CheckCircle2 size={10} color="white" />
              </div>
            </div>
            <div className="ml-3">
              <p className="font-bold text-green-800 dark:text-green-400 text-sm">
                Foto Guardada
              </p>
              <p className="text-xs text-green-600/70">IMG_2024.jpg</p>
            </div>
          </div>
          <button
            onClick={() => onChange(null)}
            className="ml-2 rounded-full bg-white p-2 shadow-sm hover:shadow-md transition text-red-500 dark:bg-slate-800">
            <Trash2 size={18} />
          </button>
        </div>
      ) : (
        <button
          onClick={handleStartCamera}
          className="mt-1 flex items-center justify-center w-full rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white p-3 transition-all shadow-md active:scale-95 group">
          <Camera
            size={20}
            className="group-hover:rotate-12 transition-transform"
          />
          <span className="ml-2 font-bold">Tomar Foto</span>
        </button>
      )}

      {/* FULL SCREEN CAMERA OVERLAY */}
      {isSimulatingCamera &&
        document.getElementById("phone-mockup-screen") &&
        createPortal(
          <div className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-between animate-fade-in">
            {/* Camera Feed Background */}
            <img
              src={cameraFeed}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
              alt="Camera Feed"
            />

            {/* UI Header */}
            <div className="relative w-full p-4 flex justify-between items-start pt-8 bg-gradient-to-b from-black/60 to-transparent">
              <button
                onClick={() => setIsSimulatingCamera(false)}
                className="bg-black/40 text-white p-2 rounded-full backdrop-blur-md">
                <X size={24} />
              </button>
              <span className="bg-black/40 text-white px-3 py-1 rounded-full text-xs font-mono backdrop-blur-md">
                HDR: ON
              </span>
            </div>

            {/* Focus Square Simulation */}
            <div className="relative w-48 h-48 border border-white/50 rounded-lg flex items-center justify-center opacity-70">
              <div className="w-4 h-4 border-l-2 border-t-2 border-white absolute top-0 left-0 -mt-1 -ml-1"></div>
              <div className="w-4 h-4 border-r-2 border-t-2 border-white absolute top-0 right-0 -mt-1 -mr-1"></div>
              <div className="w-4 h-4 border-l-2 border-b-2 border-white absolute bottom-0 left-0 -mb-1 -ml-1"></div>
              <div className="w-4 h-4 border-r-2 border-b-2 border-white absolute bottom-0 right-0 -mb-1 -mr-1"></div>
            </div>

            {/* UI Footer / Shutter */}
            <div className="relative w-full p-8 pb-12 flex items-center justify-center bg-gradient-to-t from-black/80 to-transparent">
              <button
                onClick={takePhoto}
                className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center bg-white/20 active:scale-95 transition-all">
                <div className="w-16 h-16 bg-white rounded-full"></div>
              </button>
            </div>

            {/* FLASH EFFECT */}
            <div
              className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-150 ${
                flash ? "opacity-100" : "opacity-0"
              }`}></div>
          </div>,
          document.getElementById("phone-mockup-screen"),
        )}
    </div>
  );
};
