import React from "react";
import { Send } from "lucide-react";
import ContactAppPhone from "./ContactAppPhone";

export default function ContactSection() {
  return (
    <section className="py-8 md:py-24 bg-slate-900 relative overflow-hidden min-h-screen">
      {/* Background Blobs */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-[95%] xl:max-w-[1700px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Hablemos
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empieza a <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
              digitalizar tu operación
            </span>
          </h3>
          <p className="text-slate-400 text-lg">
            ¿Tienes dudas sobre los planes o necesitas una solución a medida?
            Nuestro equipo está listo para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          {/* Contact Phone (Left) */}
          <div className="flex justify-center">
            <ContactAppPhone />
          </div>

          {/* Form (Right) */}
          <div className="bg-slate-800/30 p-8 rounded-3xl border border-slate-700 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-blue-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-blue-500 transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">
                  Email Corporativo
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-blue-500 transition-colors"
                  placeholder="ejemplo@empresa.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">
                  Mensaje
                </label>
                <textarea
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-blue-500 transition-colors h-32 resize-none"
                  placeholder="Cuéntanos sobre tu operación..."></textarea>
              </div>

              <button className="w-full bg-linear-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]">
                <Send size={20} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
