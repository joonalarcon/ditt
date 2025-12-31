import { useRef } from 'react';

export const ChecklistLabel = ({ title, subtitle, icon: Icon }) => {
    return (
        <div className="mb-2">
            <div className="flex items-center gap-2 mb-1">
                {Icon && <Icon size={16} className="text-indigo-500" />}
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {title}
                </label>
            </div>
            {subtitle && (
                <p className="text-xs text-slate-500 dark:text-slate-400 ml-1">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
