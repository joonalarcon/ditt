import { useState } from 'react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputSplit = ({ title, subtitle, isGrouped = false }) => {
    // Mock initial values that sum to 100
    const [values, setValues] = useState({ A: 50, B: 30, C: 20 });

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} />

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm space-y-4">

                {/* Item A */}
                <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                        <span className="text-blue-500">Opción A</span>
                        <span className="text-slate-600 dark:text-slate-300">{values.A}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div style={{ width: `${values.A}%` }} className="h-full bg-blue-500 rounded-full"></div>
                    </div>
                </div>

                {/* Item B */}
                <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                        <span className="text-purple-500">Opción B</span>
                        <span className="text-slate-600 dark:text-slate-300">{values.B}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div style={{ width: `${values.B}%` }} className="h-full bg-purple-500 rounded-full"></div>
                    </div>
                </div>

                {/* Item C */}
                <div>
                    <div className="flex justify-between text-xs mb-1 font-medium">
                        <span className="text-pink-500">Opción C</span>
                        <span className="text-slate-600 dark:text-slate-300">{values.C}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div style={{ width: `${values.C}%` }} className="h-full bg-pink-500 rounded-full"></div>
                    </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-700 text-center">
                    <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-slate-500 font-mono">
                        Total: {values.A + values.B + values.C}%
                    </span>
                </div>

            </div>
        </div>
    );
};
