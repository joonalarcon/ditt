import { useState } from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputRiskMatrix = ({ title, subtitle, isGrouped = false }) => {
    const [selectedCell, setSelectedCell] = useState(null); // { impact: 1, prob: 1 }

    // 3x3 Matrix Definition
    // Probabilities: Baja (1), Media (2), Alta (3)
    // Impacts: Leve (1), Moderado (2), Crítico (3)

    const matrixColors = {
        '1-1': 'bg-emerald-500', // Baja Prob - Leve Impacto
        '1-2': 'bg-emerald-400',
        '1-3': 'bg-yellow-400',
        '2-1': 'bg-emerald-400',
        '2-2': 'bg-yellow-400',
        '2-3': 'bg-orange-500',
        '3-1': 'bg-yellow-400',
        '3-2': 'bg-orange-500',
        '3-3': 'bg-red-600', // Alta Prob - Crítico Impacto
    };

    const handleSelect = (prob, impact) => {
        setSelectedCell({ prob, impact });
    };

    const getRiskLabel = () => {
        if (!selectedCell) return "Seleccione Nivel";
        const score = selectedCell.prob * selectedCell.impact;
        if (score <= 2) return "Bajo";
        if (score <= 4) return "Medio";
        if (score <= 6) return "Alto";
        return "Crítico";
    };

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} icon={AlertTriangle} />

            <div className="flex flex-col items-center bg-white dark:bg-slate-800 p-3 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">

                <div className="flex items-end gap-2 mb-2 w-full justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400 -rotate-90 origin-bottom-left translate-x-4 translate-y-8">Probabilidad</span>
                    <div className="flex flex-col gap-1">
                        {[3, 2, 1].map(prob => (
                            <div key={prob} className="flex gap-1">
                                {[1, 2, 3].map(impact => (
                                    <button
                                        key={`${prob}-${impact}`}
                                        onClick={() => handleSelect(prob, impact)}
                                        className={`w-10 h-10 rounded-md border-2 transition-all ${matrixColors[`${prob}-${impact}`]} ${selectedCell?.prob === prob && selectedCell?.impact === impact ? 'border-white ring-2 ring-indigo-500 scale-110 z-10' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'}`}
                                    />
                                ))}
                            </div>
                        ))}
                        <div className="flex justify-between w-full px-1 mt-1">
                            <span className="text-[9px] font-bold text-slate-400">Leve</span>
                            <span className="text-[9px] font-bold text-slate-400 text-center">Impacto</span>
                            <span className="text-[9px] font-bold text-slate-400">Crítico</span>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-2 pt-2 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                    <div className="flex items-center gap-1 text-slate-400">
                        <Info size={12} />
                        <span className="text-[10px]">Toque un cuadrante</span>
                    </div>
                    <div className={`text-xs font-bold px-2 py-1 rounded text-white ${selectedCell ? (selectedCell.prob * selectedCell.impact >= 6 ? 'bg-red-500' : 'bg-slate-500') : 'bg-slate-300 dark:bg-slate-600'}`}>
                        Riesgo: {getRiskLabel()}
                    </div>
                </div>

            </div>
        </div>
    );
};
