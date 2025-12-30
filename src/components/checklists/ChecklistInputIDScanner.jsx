import React from 'react';
import { ScanFace, UserSquare2, TextCursorInput } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputIDScanner = ({ title, subtitle, onChange, isGrouped = false }) => {
    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} icon={ScanFace} />

            <div className="relative group cursor-pointer">
                {/* Card Container simulating an ID Card */}
                <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl p-4 shadow-md text-white overflow-hidden relative min-h-[140px] flex flex-col justify-between">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>

                    {/* Header */}
                    <div className="flex justify-between items-start z-10">
                        <div className="flex gap-2 items-center">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <UserSquare2 size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Documento Identidad</p>
                                <p className="text-xs font-bold">Cédula Nacional</p>
                            </div>
                        </div>
                        <div className="bg-white/20 px-2 py-1 rounded text-[10px] font-mono">
                            RUN
                        </div>
                    </div>

                    {/* Scan Area Visualization */}
                    <div className="flex items-center gap-3 mt-4 z-10">
                        <div className="w-16 h-16 bg-white/10 rounded-lg border border-white/30 flex items-center justify-center">
                            <ScanFace size={24} className="opacity-80" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
                            <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
                            <div className="h-2 w-full bg-white/20 rounded-full mt-2"></div>
                        </div>
                    </div>

                    {/* Action Hint */}
                    <div className="mt-3 pt-3 border-t border-white/10 flex justify-center z-10">
                        <p className="text-[10px] font-medium flex items-center gap-1 opacity-90">
                            <TextCursorInput size={12} />
                            Escanear Reverso (PDF417)
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
