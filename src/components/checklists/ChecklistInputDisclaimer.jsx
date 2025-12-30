import React, { useState } from 'react';
import { ChecklistLabel } from './ChecklistLabel';
import { ScrollText, CheckSquare, Square } from 'lucide-react';

export const ChecklistInputDisclaimer = ({ title, subtitle, icon, value, onChange, isGrouped = false }) => {
    const [accepted, setAccepted] = useState(false);

    const toggleAccept = () => {
        const newVal = !accepted;
        setAccepted(newVal);
        onChange(newVal);
    };

    return (
        <div className="mb-4">
            <ChecklistLabel
                title={title}
                subtitle={subtitle}
                icon={icon || ScrollText}
                isGrouped={isGrouped}
            />

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-slate-700 dark:bg-slate-800 shadow-inner">
                <div className="h-32 overflow-y-auto mb-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg p-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p className="font-bold mb-2">TÉRMINOS Y CONDICIONES</p>
                    <p>
                        Al firmar este documento, el usuario declara haber verificado todos los puntos anteriores con la mayor diligencia posible.
                        Este reporte tiene carácter de declaración jurada interna. Cualquier falsedad en los datos podría conllevar sanciones administrativas.
                    </p>
                    <p className="mt-2">
                        El usuario asume la responsabilidad por la veracidad de la información proporcionada y confirma que se han seguido todos los protocolos de seguridad establecidos por la empresa.
                    </p>
                </div>

                <button
                    onClick={toggleAccept}
                    className={`flex items-center w-full p-3 rounded-lg transition-all border ${accepted
                            ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:border-slate-600 dark:text-gray-300'
                        }`}
                >
                    {accepted ? (
                        <CheckSquare size={20} className="mr-3" />
                    ) : (
                        <Square size={20} className="mr-3" />
                    )}
                    <span className="text-sm font-bold">
                        {accepted ? 'He leído y acepto los términos' : 'Acepto los términos y condiciones'}
                    </span>
                </button>
            </div>
        </div>
    );
};
