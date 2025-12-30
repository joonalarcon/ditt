import { Heading } from 'lucide-react';

export const ChecklistSubtitle = ({ title }) => {
    return (
        <div className="pt-2 pb-1 mb-2">
            <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide flex items-center gap-2">
                {title || "Subtítulo"}
            </h4>
        </div>
    );
};
