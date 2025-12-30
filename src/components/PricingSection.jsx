import React, { useState } from "react";
import { CheckCircle2, XCircle, Zap } from "lucide-react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter / Freelance",
      description: "Para profesionales independientes que buscan orden.",
      price: isAnnual ? "0.4" : "0.5",
      currency: "UF",
      period: "/ mes",
      features: [
        "1 Usuario Administrador",
        "Checklists ilimitados",
        "Reportes PDF y Excel",
        "Soporte por correo",
        "Retención de datos 6 meses",
      ],
      notIncluded: [
        "Dashboard Business Intelligence",
        "Roles y Permisos avanzados",
        "Integración API",
      ],
      buttonText: "Prueba Gratis 7 días",
      buttonColor: "bg-slate-800 hover:bg-slate-700 text-white",
      popular: false,
    },
    {
      name: "Pyme / Equipo",
      description: "Para empresas en crecimiento con equipos en terreno.",
      price: isAnnual ? "0.8" : "1.2",
      currency: "UF",
      period: "/ mes",
      features: [
        "Hasta 5 Usuarios",
        "Checklists ilimitados",
        "Dashboard Business Intelligence",
        "Roles y Permisos avanzados",
        "Soporte Prioritario WhatsApp",
        "Retención histórica ilimitada",
        "Marca de agua personalizada",
      ],
      notIncluded: ["Integraciones API / Webhooks", "SLA de Garantía"],
      buttonText: "Prueba Gratis 7 días",
      buttonColor:
        "bg-linear-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white shadow-lg shadow-blue-500/25",
      popular: true,
      badge: "Recomendado",
    },
    {
      name: "Empresa / Corporate",
      description: "Control total y personalización para grandes flotas.",
      price: "Cotizar",
      period: "",
      features: [
        "Usuarios Ilimitados",
        "Todo lo del plan Pyme",
        "Integraciones API / Webhooks",
        "Desarrollo de features a medida",
        "Onboarding y Capacitación",
        "SLA de Garantía",
        "Gestor de cuenta dedicado",
      ],
      notIncluded: [],
      buttonText: "Contactar Ventas",
      buttonColor:
        "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
      popular: false,
    },
    {
      name: "Motor Dedicado",
      description: "Para lógicas de negocio ultra-específicas.",
      price: "A medida",
      period: "",
      features: [
        "Desarrollo de Motores de Cálculo",
        "Reglas de negocio complejas",
        "Integración con Hardware/IoT",
        "Validaciones personalizadas",
        "Infraestructura aislada",
        "Consultoría de procesos",
      ],
      notIncluded: [],
      buttonText: "Agendar Reunión",
      buttonColor:
        "bg-transparent hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500",
      popular: false,
    },
  ];

  return (
    <section className="py-8 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-[95%] xl:max-w-[1700px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Precios Transparentes
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Elige el plan perfecto para <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
              escalar tu operación
            </span>
          </h3>
          <p className="text-slate-400 text-lg">
            Comienza gratis y mejora tu plan a medida que tu equipo crece. Sin
            tarjetas de crédito para empezar.
          </p>

          {/* Toggle Button */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <span
              className={`text-sm font-medium ${
                !isAnnual ? "text-white" : "text-slate-400"
              }`}>
              Mensual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-16 h-8 bg-slate-800 rounded-full p-1 relative transition-colors border border-slate-700 cursor-pointer">
              <div
                className={`w-6 h-6 rounded-full bg-emerald-400 shadow-sm transition-transform duration-300 ${
                  isAnnual ? "translate-x-8" : "translate-x-0"
                }`}></div>
            </button>
            <span
              className={`text-sm font-medium ${
                isAnnual ? "text-white" : "text-slate-400"
              }`}>
              Anual{" "}
              <span className="text-emerald-400 text-xs ml-1 font-bold">
                (-20%)
              </span>
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
              className="h-full animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div
                className={`relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 hover:-translate-y-2 flex flex-col h-full ${
                  plan.popular
                    ? "bg-slate-800/40 border-blue-500/50 shadow-2xl shadow-blue-900/20 z-10 scale-105 md:-mt-4"
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60"
                }`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-blue-500 to-emerald-500 rounded-full text-xs font-bold text-white shadow-lg uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h4>
                  <p className="text-slate-400 text-sm h-10">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 flex items-end gap-1">
                  <span className="text-4xl font-bold text-white transition-all duration-500">
                    {plan.currency ? plan.currency : ""} {plan.price}
                  </span>
                  <span className="text-slate-500 mb-1">{plan.period}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-xl font-bold transition-all mb-8 ${plan.buttonColor}`}>
                  {plan.buttonText}
                </button>

                <div className="space-y-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Incluye:
                  </p>
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckCircle2
                        size={18}
                        className="text-emerald-400 shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}

                  {plan.notIncluded.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-slate-600 text-sm">
                      <XCircle size={18} className="shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Preview or Trust Badges could go here */}
        <div className="mt-20 pt-10 border-t border-slate-800 text-center">
          <p className="text-slate-500 mb-4 ">
            ¿Tienes dudas sobre qué plan elegir?
          </p>
          <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center justify-center gap-2 mx-auto">
            <Zap size={18} />
            Agendar una demo con un especialista
          </button>
        </div>
      </div>
    </section>
  );
}
