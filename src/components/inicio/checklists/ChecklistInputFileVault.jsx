import { Lock, UploadCloud, FileText } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputFileVault = ({ title, subtitle, isGrouped = false }) => {
    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} />

            <div className="relative group cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 transition-colors">

                <div className="absolute top-2 right-2 text-amber-500 bg-amber-50 dark:bg-amber-900/20 p-1 rounded-md border border-amber-200 dark:border-amber-900/50" title="Encriptado">
                    <Lock size={12} />
                </div>

                <div className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                        <UploadCloud size={24} className="text-indigo-500" />
                    </div>
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Subir Documento Seguro</p>
                    <p className="text-[10px] text-slate-400 mt-1 max-w-[150px]">
                        Los archivos se encriptarán antes de subir y no se guardarán en el dispositivo.
                    </p>
                </div>

            </div>
        </div>
    );
};
