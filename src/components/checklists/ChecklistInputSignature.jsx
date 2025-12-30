import React, { useState, useRef } from "react";
import { ChecklistLabel } from "./ChecklistLabel";
import { PenTool, Trash2, Check } from "lucide-react";

export const ChecklistInputSignature = ({
  title,
  subtitle,
  icon,
  value,
  onChange,
  isGrouped = false,
}) => {
  const [isSigning, setIsSigning] = useState(false);
  const canvasRef = useRef(null);

  // Simplified simulation for demo: just clicking "Sign" generates a dummy signature visualization
  // In a real generic react component we would implement a real canvas drawing, but here we want to look good quickly.

  const startSigning = () => {
    setIsSigning(true);
  };

  const handleSaveSignature = () => {
    // Just a dummy SVG signature for visual purposes
    const dummySignature = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgODAiPjxwYXRoIGQ9Ik0xMCw0MCBDMzAsMTAgNTAsNzAgNzAsMzAgQzkwLDYwIDExMCwyMCAxMzAsNTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==`;
    onChange(dummySignature);
    setIsSigning(false);
  };

  const handleCancel = () => {
    setIsSigning(false);
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
        <div className="rounded-xl border border-gray-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-800 shadow-sm relative group">
          <div className="h-24 w-full bg-white flex items-center justify-center rounded border border-dashed border-gray-100 dark:border-slate-700 overflow-hidden">
            {/* Render Dummy Signature */}
            <img src={value} className="h-full w-auto opacity-80" alt="Firma" />
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onChange(null)}
                className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-lg shadow-sm">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
          <div className="mt-2 text-center text-xs text-green-600 font-bold flex items-center justify-center gap-1">
            <Check size={12} /> Firmado Digitalmente
          </div>
        </div>
      ) : isSigning ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
          style={{ position: "absolute" }}>
          {/* Absoluto al contenedor para que se vea dentro del telefono */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl w-full p-4 shadow-2xl">
            <h4 className="text-center font-bold mb-4 text-slate-700 dark:text-slate-200">
              Firma en Pantalla
            </h4>
            <div
              className="h-40 bg-gray-50 dark:bg-slate-700 border-2 border-dashed border-gray-300 rounded-xl mb-4 flex items-center justify-center cursor-crosshair relative"
              onClick={handleSaveSignature}>
              <p className="text-gray-400 select-none pointer-events-none">
                Tocame para firmar (Demo)
              </p>
              {/* Simulated pen */}
              <PenTool
                className="absolute bottom-2 right-2 text-gray-400"
                size={20}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="flex-1 py-2 text-gray-500 font-bold bg-gray-100 rounded-lg hover:bg-gray-200">
                Cancelar
              </button>
              {/* <button onClick={handleSaveSignature} className="flex-1 py-2 text-white font-bold bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-500/30">Guardar</button> */}
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={startSigning}
          className="h-24 w-full flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-white hover:border-blue-400 transition-all dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800 group">
          <PenTool
            size={24}
            className="text-gray-400 group-hover:text-blue-500 transition-colors mb-2"
          />
          <span className="text-sm font-medium text-gray-500 group-hover:text-blue-500 transition-colors">
            Toca para firmar
          </span>
        </button>
      )}
    </div>
  );
};
