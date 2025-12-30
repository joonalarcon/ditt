import { useState } from 'react';
import { User, Users } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputTeamPicker = ({ title, subtitle, isGrouped = false }) => {
    const [selectedId, setSelectedId] = useState(null);

    const team = [
        { id: 1, name: 'Juan P.', role: 'Jefe' },
        { id: 2, name: 'Ana T.', role: 'Técnico' },
        { id: 3, name: 'Carlos', role: 'Ayudante' },
        { id: 4, name: 'Sofia', role: 'Prevención' },
        { id: 5, name: 'Pedro', role: 'Conductor' },
    ];

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} icon={Users} />

            <div className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x no-scrollbar">
                {team.map((member) => (
                    <button
                        key={member.id}
                        onClick={() => setSelectedId(member.id)}
                        className={`snap-center shrink-0 w-20 flex flex-col items-center gap-2 p-2 rounded-xl border transition-all ${selectedId === member.id ? 'bg-indigo-50 border-indigo-500 shadow-md transform scale-105' : 'bg-white border-gray-100 hover:bg-gray-50 dark:bg-slate-800 dark:border-slate-700'}`}
                    >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedId === member.id ? 'bg-indigo-500 text-white' : 'bg-slate-200 text-slate-500 dark:bg-slate-700'}`}>
                            <User size={18} />
                        </div>
                        <div className="text-center">
                            <p className={`text-[10px] font-bold leading-tight ${selectedId === member.id ? 'text-indigo-700' : 'text-slate-700 dark:text-slate-300'}`}>{member.name}</p>
                            <p className="text-[9px] text-slate-400 leading-tight">{member.role}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};
