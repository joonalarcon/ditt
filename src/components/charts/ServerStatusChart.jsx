import { Activity, Clock, Cpu, Globe, HardDrive, Layers, Server, Thermometer } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// 7. HISTORIAL TEMPERATURA (Simulado)
const tempHistoryData = Array.from({ length: 20 }, (_, i) => ({
    time: i,
    temp: 50 + Math.random() * 20 - 5 // Random entre 45 y 65
}));

export default function ServerStatusChart() {
    return (
        <div className="w-full">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Server size={20} />
                </div>
                <h2 className="text-xl font-bold text-white tracking-wide">Estado del Servidor ("Hal-9000")</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* 1. SPECS & INFO */}
                <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-6 shadow-[0_0_20px_rgba(6,182,212,0.1)] relative overflow-hidden group h-full">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
                    <h3 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-6 flex items-center gap-2">
                        <Cpu size={16} /> Especificaciones
                    </h3>

                    <div className="space-y-4 relative z-10">
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-slate-400 text-sm flex items-center gap-2"><Cpu size={14} /> CPU Model</span>
                            <span className="text-white font-mono text-sm">Intel Xeon E5-2680 v4</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-slate-400 text-sm flex items-center gap-2"><Layers size={14} /> Cores/Threads</span>
                            <span className="text-white font-mono text-sm">14C / 28T @ 2.40GHz</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-slate-400 text-sm flex items-center gap-2"><HardDrive size={14} /> RAM Total</span>
                            <span className="text-white font-mono text-sm">64 GB DDR4 ECC</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span className="text-slate-400 text-sm flex items-center gap-2"><Globe size={14} /> OS Kernel</span>
                            <span className="text-white font-mono text-sm">Linux 5.4.0-150-generic</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-400 text-sm flex items-center gap-2"><Clock size={14} /> Uptime</span>
                            <span className="text-emerald-400 font-mono text-sm">14d 2h 12m 45s</span>
                        </div>
                    </div>
                </div>

                {/* 2. LIVE RESOURCES (Radial Bars) */}
                <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 flex flex-col items-center justify-center relative h-full">
                    <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-2 w-full text-left flex items-center gap-2">
                        <Activity size={16} /> Carga en Tiempo Real
                    </h3>
                    <div className="flex-1 w-full flex items-center justify-around">
                        {/* CPU Radial */}
                        <div className="relative flex flex-col items-center">
                            <div className="w-28 h-28 relative flex items-center justify-center">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadialBarChart innerRadius="70%" outerRadius="100%" barSize={8} data={[{ name: 'CPU', value: 45, fill: '#06b6d4' }]} startAngle={90} endAngle={-270}>
                                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                                        <RadialBar background clockWise dataKey="value" cornerRadius={10} />
                                    </RadialBarChart>
                                </ResponsiveContainer>
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-xl font-bold text-white">45%</span>
                                    <span className="text-[10px] text-cyan-400">CPU</span>
                                </div>
                            </div>
                        </div>

                        {/* RAM Radial */}
                        <div className="relative flex flex-col items-center">
                            <div className="w-28 h-28 relative flex items-center justify-center">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadialBarChart innerRadius="70%" outerRadius="100%" barSize={8} data={[{ name: 'RAM', value: 72, fill: '#8b5cf6' }]} startAngle={90} endAngle={-270}>
                                        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                                        <RadialBar background clockWise dataKey="value" cornerRadius={10} />
                                    </RadialBarChart>
                                </ResponsiveContainer>
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-xl font-bold text-white">72%</span>
                                    <span className="text-[10px] text-violet-400">RAM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-4 bg-slate-900/50 rounded-lg p-3 border border-white/5 flex justify-between text-xs">
                        <div className="flex gap-2 items-center text-slate-400">
                            <div className="w-2 h-2 rounded-full bg-cyan-500"></div> Load Avg
                        </div>
                        <span className="text-white font-mono">0.45, 0.60, 0.88</span>
                    </div>
                </div>

                {/* 3. TEMPERATURE (Area Chart) */}
                <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl border border-orange-500/20 p-6 shadow-[0_0_20px_rgba(249,115,22,0.1)] h-full">
                    <h3 className="text-sm font-bold text-orange-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Thermometer size={16} /> Temperatura Core (ºC)
                    </h3>
                    <div className="h-40 w-full mb-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={tempHistoryData}>
                                <defs>
                                    <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis dataKey="time" hide />
                                <YAxis domain={[30, 90]} hide />
                                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                                <Area type="monotone" dataKey="temp" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorTemp)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-between items-end border-t border-white/10 pt-3">
                        <div>
                            <p className="text-xs text-slate-400">Actual</p>
                            <p className="text-2xl font-bold text-white">62°C</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-slate-400">Peak (24h)</p>
                            <p className="text-sm font-mono text-orange-400">84°C</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
