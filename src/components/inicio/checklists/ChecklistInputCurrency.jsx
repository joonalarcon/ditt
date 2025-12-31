import { useState } from 'react';
import { DollarSign, Globe } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputCurrency = ({ title, subtitle, isGrouped = false }) => {
    const [currency, setCurrency] = useState('CLP');
    const [value, setValue] = useState('');

    const formatValue = (val, curr) => {
        // Simple mock formatter
        if (!val) return '';
        const num = val.replace(/\D/g, "");
        return Number(num).toLocaleString('es-CL');
    };

    const handleInput = (e) => {
        setValue(formatValue(e.target.value, currency));
    };

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} icon={DollarSign} />

            <div className="flex bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm overflow-hidden">

                <div className="bg-slate-50 dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 p-2 flex items-center justify-center min-w-[3.5rem]">
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="bg-transparent text-xs font-bold text-slate-600 dark:text-slate-300 outline-none uppercase cursor-pointer"
                    >
                        <option value="CLP">CLP</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="UF">UF</option>
                    </select>
                </div>

                <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-light">$</span>
                    <input
                        type="text"
                        value={value}
                        onChange={handleInput}
                        placeholder="0"
                        className="w-full bg-transparent p-3 pl-6 text-slate-700 dark:text-slate-200 font-mono font-semibold outline-none"
                    />
                </div>

            </div>

            {currency === 'USD' && (
                <p className="text-[10px] text-slate-400 mt-1 text-right">Tasa Referencia: $930 CLP</p>
            )}
        </div>
    );
};
