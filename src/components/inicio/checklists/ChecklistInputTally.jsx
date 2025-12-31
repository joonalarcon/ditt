import { useState } from 'react';
import { Minus, Plus, RotateCcw } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputTally = ({ title, subtitle, isGrouped = false }) => {
    const [count, setCount] = useState(0);

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} />

            <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-2 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
                <button
                    onClick={() => setCount(Math.max(0, count - 1))}
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-100 text-red-600 hover:bg-red-200 active:scale-95 transition-all dark:bg-red-900/30 dark:text-red-400"
                >
                    <Minus size={24} strokeWidth={3} />
                </button>

                <div className="flex-1 text-center">
                    <span className="text-4xl font-black text-slate-700 dark:text-slate-200 font-mono tracking-tighter">
                        {String(count).padStart(3, '0')}
                    </span>
                </div>

                <button
                    onClick={() => setCount(count + 1)}
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 hover:bg-emerald-200 active:scale-95 transition-all dark:bg-emerald-900/30 dark:text-emerald-400"
                >
                    <Plus size={24} strokeWidth={3} />
                </button>
            </div>

            <div className="flex justify-end mt-1">
                <button
                    onClick={() => setCount(0)}
                    className="text-[10px] text-slate-400 flex items-center gap-1 hover:text-slate-600 transition-colors"
                >
                    <RotateCcw size={10} /> Reset
                </button>
            </div>
        </div>
    );
};
