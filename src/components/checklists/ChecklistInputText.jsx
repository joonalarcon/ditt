import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputText = ({ title, subtitle, value, onChange, placeholder, isGrouped = false }) => {
    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} />
            <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                placeholder={placeholder || 'Escriba aquí...'}
                value={value || ''}
                readOnly
            />
        </div>
    );
};
