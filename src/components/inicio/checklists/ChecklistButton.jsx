import React from 'react';
import { MousePointerClick } from 'lucide-react';

export const ChecklistButton = ({ title, subtitle, icon, value, onChange, isGrouped = false, options = [] }) => {
    // Options expected as ["bg-blue-600", "text-white"] (Tailwind classes)
    // or simple string array if mapped differently. Let's assume options[0] is bg color class.

    const bgClass = options && options[0] ? options[0] : 'bg-blue-600';
    const textClass = options && options[1] ? options[1] : 'text-white';

    const handleClick = () => {
        // Visual feedback or logic trigger
        alert(`Acción ejecutada: ${title}`);
        if (onChange) onChange("clicked");
    };

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <button
                onClick={handleClick}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl shadow-md transition-all active:scale-95 hover:shadow-lg font-bold ${bgClass} ${textClass}`}
            >
                {icon ? React.createElement(icon, { size: 20 }) : <MousePointerClick size={20} />}
                <span>{title}</span>
            </button>
            {subtitle && (
                <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
