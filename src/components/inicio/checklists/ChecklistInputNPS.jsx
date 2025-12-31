import { useState } from 'react';
import { Smile } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputNPS = ({ title, subtitle, isGrouped = false }) => {
    const [score, setScore] = useState(null);

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} icon={Smile} />

            <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex justify-between items-center gap-1">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <button
                            key={num}
                            onClick={() => setScore(num)}
                            className={`
                        w-8 h-10 rounded-lg flex flex-col items-center justify-center transition-all
                        ${score === num
                                    ? 'bg-indigo-600 text-white shadow-lg scale-110 -translate-y-1'
                                    : 'bg-slate-50 dark:bg-slate-700 text-slate-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
                                }
                    `}
                        >
                            <span className="text-sm font-bold">{num}</span>
                        </button>
                    ))}
                </div>

                <div className="flex justify-between mt-3 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    <span>Nada Probable</span>
                    <span>Muy Probable</span>
                </div>
            </div>
        </div>
    );
};
