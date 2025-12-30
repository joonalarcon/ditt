import { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputTimeSpan = ({ title, subtitle, isGrouped = false }) => {
    const [startTime, setStartTime] = useState("09:00");
    const [endTime, setEndTime] = useState("17:30");

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} icon={Clock} />

            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-3 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">

                <div className="flex-1">
                    <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Inicio</label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded p-1 text-sm font-semibold text-slate-700 dark:text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                </div>

                <div className="flex items-center justify-center text-slate-300 dark:text-slate-600 pt-4">
                    <ArrowRight size={16} />
                </div>

                <div className="flex-1 text-right">
                    <label className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Fin</label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded p-1 text-sm font-semibold text-slate-700 dark:text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500 text-right"
                    />
                </div>

            </div>

            <div className="mt-2 text-right">
                <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-medium dark:bg-indigo-900/40 dark:text-indigo-300">
                    Duración estimada: 8h 30m
                </span>
            </div>
        </div>
    );
};
