import { useRef } from 'react';
import { PenTool, Undo, Eraser } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputSketch = ({ title, subtitle, isGrouped = false }) => {
    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} icon={PenTool} />

            <div className="relative group rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 overflow-hidden min-h-[180px]">

                {/* Sketch Canvas Placeholder */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10 pointer-events-none"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity">
                    <PenTool size={32} className="text-slate-400 mb-2" />
                    <span className="text-xs uppercase font-bold text-slate-400 tracking-widest">Lienzo de Dibujo</span>
                </div>

                {/* Fake Toolbar */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 bg-white/90 dark:bg-slate-900/90 rounded-full px-3 py-1.5 shadow-lg border border-slate-200 dark:border-slate-700">
                    <button className="w-6 h-6 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:scale-110 transition-transform" title="Lápiz Negro">
                        <div className="w-2 h-2 rounded-full bg-current"></div>
                    </button>
                    <button className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 transition-transform" title="Lápiz Rojo">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                    </button>
                    <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-1"></div>
                    <button className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                        <Undo size={14} />
                    </button>
                    <button className="text-slate-500 hover:text-red-500 transition-colors">
                        <Eraser size={14} />
                    </button>
                </div>

            </div>
        </div>
    );
};
