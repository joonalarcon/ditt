import { Upload, File, X } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';
import { useState } from 'react';

export const ChecklistInputFile = ({ title, subtitle, isGrouped = false }) => {
    const [files, setFiles] = useState([]);

    const handleFakeUpload = () => {
        // Simulate file selection
        const newFile = {
            name: `documento_${files.length + 1}.pdf`,
            size: '1.2 MB'
        };
        setFiles([...files, newFile]);
    };

    const removeFile = (idx) => {
        setFiles(files.filter((_, i) => i !== idx));
    };

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} />

            {/* Drop Zone */}
            <div
                onClick={handleFakeUpload}
                className="cursor-pointer border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors bg-white dark:bg-slate-800"
            >
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 rounded-full flex items-center justify-center mb-2">
                    <Upload size={20} />
                </div>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">Toca para subir archivo</p>
                <p className="text-[10px] text-slate-400 mt-1">PDF, DOCX, XLSX (Max 10MB)</p>
            </div>

            {/* File List */}
            <div className="mt-3 space-y-2">
                {files.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 animate-fade-in-up">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-500">
                                <File size={16} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-700 dark:text-slate-200">{file.name}</p>
                                <p className="text-[10px] text-slate-400">{file.size}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => removeFile(idx)}
                            className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                        >
                            <X size={14} />
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
};
