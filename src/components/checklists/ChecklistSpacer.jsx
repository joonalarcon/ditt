import { ChevronsUpDown } from 'lucide-react';

export const ChecklistSpacer = () => {
    return (
        <div className="h-8 w-full border border-dashed border-transparent hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex items-center justify-center group cursor-grab">
            <span className="text-[10px] text-slate-300 opacity-0 group-hover:opacity-100 uppercase font-bold tracking-widest flex items-center gap-1">
                <ChevronsUpDown size={12} /> Espacio
            </span>
        </div>
    );
};
