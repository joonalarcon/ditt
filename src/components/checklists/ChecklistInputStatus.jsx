import { useState } from 'react';
import { TrafficCone, Info } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputStatus = ({ title, subtitle, isGrouped = false }) => {
    const [selectedStatus, setSelectedStatus] = useState("");

    const statuses = [
        { id: 'ok', label: 'OPERATIVO / BUENO', color: 'bg-emerald-500', text: 'text-emerald-600', instruction: 'El equipo puede utilizarse con normalidad.' },
        { id: 'warning', label: 'CON OBS. / REGULAR', color: 'bg-yellow-400', text: 'text-yellow-600', instruction: 'Atención: Reportar falla al finalizar el turno. Requiere mantención preventiva.' },
        { id: 'critical', label: 'MALO / NO OPERATIVO', color: 'bg-red-600', text: 'text-red-600', instruction: 'PELIGRO: No utilizar el equipo. Etiquetar y bloquear inmediatamente.' },
        { id: 'na', label: 'NO APLICA', color: 'bg-slate-400', text: 'text-slate-500', instruction: '' },
    ];

    const currentStatus = statuses.find(s => s.id === selectedStatus);

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} icon={TrafficCone} />

            <div className="relative">
                <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className={`
                w-full appearance-none p-3 pl-10 rounded-xl border-2 outline-none font-bold transition-all cursor-pointer
                ${currentStatus
                            ? `bg-white dark:bg-slate-800 border-transparent ring-2 ring-offset-2 ring-offset-slate-900 ring-${currentStatus.color.split('-')[1]}-500`
                            : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500'
                        }
            `}
                >
                    <option value="">Seleccione Estado...</option>
                    {statuses.map(status => (
                        <option key={status.id} value={status.id}>
                            {status.label}
                        </option>
                    ))}
                </select>

                {/* Color Indicator in Select (Fake) */}
                <div className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${currentStatus ? currentStatus.color : 'bg-slate-300'}`}></div>
            </div>

            {/* Dynamic Instruction Box */}
            {currentStatus && currentStatus.instruction && (
                <div className={`mt-3 p-3 rounded-lg border-l-4 flex gap-3 animate-fade-in-up ${currentStatus.id === 'critical' ? 'bg-red-50 dark:bg-red-900/20 border-red-500' : currentStatus.id === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-400' : 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500'}`}>
                    <Info className={`shrink-0 ${currentStatus.text}`} size={18} />
                    <p className={`text-xs font-medium ${currentStatus.text} dark:text-slate-200`}>
                        {currentStatus.instruction}
                    </p>
                </div>
            )}

        </div>
    );
};
