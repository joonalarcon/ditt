import { useState } from 'react';
import { Sun } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputUVIndex = ({ title, subtitle, isGrouped = false }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const ranges = [
        { id: 'low', label: 'BAJO', color: 'bg-[#28A745]', text: 'text-[#28A745]', indices: [1, 2], desc: 'Circular al aire libre normalmente' },
        { id: 'mod', label: 'MODERADO', color: 'bg-[#FFC107]', text: 'text-[#FFC107]', indices: [3, 4, 5], desc: 'Usar sombrero, gafas y protector' },
        { id: 'high', label: 'ALTO', color: 'bg-[#FD7E14]', text: 'text-[#FD7E14]', indices: [6, 7], desc: 'Buscar sombra, evitar sol mediodía' },
        { id: 'very_high', label: 'MUY ALTO', color: 'bg-[#DC3545]', text: 'text-[#DC3545]', indices: [8, 9, 10], desc: 'Peligro. No exponerse al sol' },
        { id: 'extreme', label: 'EXTREMO', color: 'bg-[#6F42C1]', text: 'text-[#6F42C1]', indices: [11], desc: 'Peligro extremo. Protección máxima' },
    ];

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} icon={Sun} />

            <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm overflow-x-auto">

                {/* Color Bands */}
                <div className="flex gap-1 min-w-[320px]">
                    {ranges.map((range) => (
                        <div key={range.id} className="flex-1 flex flex-col gap-1">
                            <div className={`${range.color} text-white text-[9px] font-bold text-center py-0.5 rounded-t-sm uppercase`}>
                                {range.label}
                            </div>
                            <div className="flex gap-0.5">
                                {range.indices.map(idx => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedIndex(idx)}
                                        className={`
                                    flex-1 aspect-square flex items-center justify-center font-black text-lg font-mono transition-all rounded-sm relative
                                    ${selectedIndex === idx
                                                ? `${range.color} text-white scale-110 z-10 shadow-md ring-2 ring-white dark:ring-slate-800`
                                                : `${range.color} bg-opacity-20 text-slate-600 dark:text-slate-300 hover:bg-opacity-80 hover:text-white`
                                            }
                                `}
                                    >
                                        {idx}
                                        {idx === 11 && <span className="absolute top-0 right-0.5 text-[8px]">+</span>}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Selected Description */}
                <div className="mt-3 min-h-[40px] flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-700">
                    {selectedIndex ? (
                        <>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${ranges.find(r => r.indices.some(i => i === selectedIndex))?.color}`}>
                                {selectedIndex}
                            </div>
                            <div className="flex-1">
                                <p className={`text-xs font-bold ${ranges.find(r => r.indices.some(i => i === selectedIndex))?.text}`}>
                                    Índice {ranges.find(r => r.indices.some(i => i === selectedIndex))?.label}
                                </p>
                                <p className="text-[10px] text-slate-500 leading-tight">
                                    {ranges.find(r => r.indices.some(i => i === selectedIndex))?.desc}
                                </p>
                            </div>
                        </>
                    ) : (
                        <p className="text-xs text-slate-400 w-full text-center">Seleccione el índice UV actual</p>
                    )}
                </div>

            </div>
        </div>
    );
};
