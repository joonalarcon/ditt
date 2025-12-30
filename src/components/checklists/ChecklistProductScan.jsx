import React, { useState } from "react";
import { Scan, X } from "lucide-react";

// Este NO es un input, sino un botón que simula escanear un producto para rellenar datos
export const ChecklistProductScan = ({ onScan }) => {
  const [isScanning, setIsScanning] = useState(false);

  // Simulate scanning process
  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      // Return dummy product data
      onScan({
        code: "780123456789",
        name: "Coca Cola 1.5L Original",
        price: "$ 1.500", // CLP formatting simulation
      });
    }, 2000);
  };

  return (
    <>
      <button
        onClick={startScan}
        className="w-full mb-6 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 py-3 rounded-xl flex items-center justify-center gap-2 group transition-all">
        <Scan
          size={20}
          className="text-blue-400 group-hover:scale-110 transition-transform"
        />
        <span className="font-medium">Escanear Producto (Demo)</span>
      </button>

      {/* Camera Overlay Simulation */}
      {isScanning && (
        <div
          className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center animate-fade-in"
          style={{ borderRadius: "2.5rem", margin: "-14px" }}>
          {/* Camera Feed Simulation (just a dark noise gradient if we wanted, or black) */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

          <div className="relative w-64 h-64 border-2 border-red-500 rounded-2xl flex items-center justify-center animate-pulse">
            <div className="w-60 h-0.5 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-scan-beam absolute"></div>
          </div>
          <p className="mt-8 text-white font-mono bg-black/50 px-4 py-1 rounded-full text-sm">
            Buscando código...
          </p>

          <button
            onClick={() => setIsScanning(false)}
            className="absolute top-16 right-8 bg-black/40 p-2 rounded-full text-white">
            <X size={24} />
          </button>
        </div>
      )}
    </>
  );
};
