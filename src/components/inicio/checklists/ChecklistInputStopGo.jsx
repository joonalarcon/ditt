import { useState } from 'react';
import { Octagon, ShieldCheck } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputStopGo = ({ title, subtitle, isGrouped = false }) => {
    const [status, setStatus] = useState(null); // 'GO' | 'STOP'

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} />

            <div className="grid grid-cols-2 gap-4">
                {/* GO Button */}
                <button
                    onClick={() => setStatus('GO')}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${status === 'GO' ? 'bg-emerald-50 border-emerald-500 shadow-lg scale-[1.02]' : 'bg-white border-gray-100 opacity-60 hover:opacity-100 dark:bg-slate-800 dark:border-slate-700'}`}
                >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${status === 'GO' ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400 dark:bg-slate-700'}`}>
                        <ShieldCheck size={32} />
                    </div>
                    <span className={`font-black text-lg ${status === 'GO' ? 'text-emerald-700' : 'text-slate-500'}`}>SEGURO</span>
                </button>

                {/* STOP Button */}
                <button
                    onClick={() => setStatus('STOP')}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${status === 'STOP' ? 'bg-red-50 border-red-500 shadow-lg scale-[1.02]' : 'bg-white border-gray-100 opacity-60 hover:opacity-100 dark:bg-slate-800 dark:border-slate-700'}`}
                >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${status === 'STOP' ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-400 dark:bg-slate-700'}`}>
                        <Octagon size={32} />
                    </div>
                    <span className={`font-black text-lg ${status === 'STOP' ? 'text-red-700' : 'text-slate-500'}`}>PELIGRO</span>
                </button>
            </div>

            {status === 'STOP' && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-200 text-xs rounded-lg border border-red-200 dark:border-red-900 animate-pulse">
                    ⚠️ <strong>ALERTA CRÍTICA:</strong> El procedimiento no puede continuar hasta resolver el riesgo.
                </div>
            )}
        </div>
    );
};
