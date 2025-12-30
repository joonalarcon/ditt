import React, { useState } from 'react';
import { ChecklistLabel } from './ChecklistLabel';
import { Check, X } from 'lucide-react';

export const ChecklistInputMultiSelect = ({ title, subtitle, icon, value, options = [], onChange, isGrouped = false }) => {
    // Value should be an array of selected strings
    const [selectedOptions, setSelectedOptions] = useState(Array.isArray(value) ? value : []);

    const toggleOption = (option) => {
        let newSelection;
        if (selectedOptions.includes(option)) {
            newSelection = selectedOptions.filter((item) => item !== option);
        } else {
            newSelection = [...selectedOptions, option];
        }
        setSelectedOptions(newSelection);
        onChange(newSelection);
    };

    return (
        <div className="mb-4">
            <ChecklistLabel
                title={title}
                subtitle={subtitle}
                icon={icon}
                isGrouped={isGrouped}
            />

            <div className="flex flex-col gap-2">
                {options.map((option, idx) => {
                    const isSelected = selectedOptions.includes(option);
                    return (
                        <button
                            key={idx}
                            onClick={() => toggleOption(option)}
                            className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${isSelected
                                    ? 'bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900/30 dark:border-indigo-500/50 dark:text-indigo-300 shadow-sm'
                                    : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-300'
                                }`}
                        >
                            <span className="font-medium text-sm text-left">{option}</span>
                            <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${isSelected
                                        ? 'bg-indigo-500 border-indigo-500 text-white'
                                        : 'bg-transparent border-gray-300 dark:border-slate-500'
                                    }`}
                            >
                                {isSelected && <Check size={14} strokeWidth={3} />}
                            </div>
                        </button>
                    );
                })}
            </div>
            {/* Selection summary */}
            <div className='mt-2 text-xs text-gray-500 dark:text-gray-400 px-1'>
                {selectedOptions.length === 0 ? 'Ninguna opción seleccionada' : `${selectedOptions.length} seleccionadas`}
            </div>
        </div>
    );
};
