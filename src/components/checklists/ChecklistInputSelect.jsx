import { ChevronDown } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputSelect = ({ title, subtitle, value, onChange, options = [], isGrouped = false }) => {
    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} />
            <div className="relative">
                <select
                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 appearance-none outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer text-slate-700 dark:text-slate-300"
                    value={value || ''}
                    disabled
                >
                    <option value="">Seleccione una opción</option>
                    {options.map((opt, idx) => (
                        <option key={idx} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
            </div>
        </div>
    );
};
