import React from 'react';

export const ChecklistSectionTitle = ({ title, subtitle, icon }) => {
    return (
        <div className="mt-6 mb-3 pb-1 border-b-2 border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
                {/* Decorative Line Indicator */}
                <div className="h-5 w-1.5 bg-indigo-500 rounded-full"></div>

                <h3 className="text-sm font-black text-slate-700 dark:text-slate-200 uppercase tracking-widest leading-none">
                    {title}
                </h3>
            </div>
            {subtitle && (
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium ml-3.5 mt-1 uppercase tracking-wide">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
