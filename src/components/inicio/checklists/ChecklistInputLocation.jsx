import { useState } from 'react';
import { MapPin, Navigation, Loader2 } from 'lucide-react';
import { ChecklistLabel } from './ChecklistLabel';

export const ChecklistInputLocation = ({ title, subtitle, value, onChange, isGrouped = false }) => {
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState(value || null);

    const handleGetLocation = () => {
        setLoading(true);
        // Simulate GPS fetch delay
        setTimeout(() => {
            const mockLocation = {
                lat: -33.4489,
                lng: -70.6693,
                address: "Av. Libertador Bernardo O'Higgins 1234, Santiago"
            };
            setLocation(mockLocation);
            setLoading(false);
            if (onChange) onChange(mockLocation);
        }, 1500);
    };

    return (
        <div className={`mb-4 ${isGrouped ? 'px-2' : ''}`}>
            <ChecklistLabel title={title} subtitle={subtitle} icon={MapPin} />

            {location ? (
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800 animate-fade-in">
                    {/* Fake Map visualization */}
                    <div className="h-32 bg-slate-200 dark:bg-slate-700 w-full relative group cursor-pointer hover:opacity-90 transition-opacity">
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=-33.4489,-70.6693&zoom=14&size=400x200&sensor=false')] bg-cover bg-center"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <MapPin className="text-red-500 drop-shadow-md animate-bounce" size={32} fill="currentColor" />
                        </div>
                    </div>

                    <div className="p-3 bg-gray-50 dark:bg-slate-800/50">
                        <div className="flex items-start gap-2">
                            <Navigation size={16} className="text-blue-500 mt-1 shrink-0" />
                            <div>
                                <p className="text-xs font-bold text-slate-700 dark:text-slate-200">Ubicación Actual</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 break-words line-clamp-2">{location.address}</p>
                                <p className="text-[10px] text-slate-400 mt-1 font-mono">Lat: {location.lat}, Lng: {location.lng}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setLocation(null)}
                        className="w-full py-2 text-xs font-semibold text-red-500 border-t border-gray-100 dark:border-slate-700 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                    >
                        Eliminar Ubicación
                    </button>
                </div>
            ) : (
                <button
                    onClick={handleGetLocation}
                    disabled={loading}
                    className={`w-full flex items-center justify-center gap-2 p-4 rounded-xl border border-dashed border-blue-300 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:border-blue-400 transition-all dark:bg-blue-900/20 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/40 ${loading ? 'opacity-75 cursor-wait' : ''}`}
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            <span className="text-sm font-medium">Obteniendo coordenadas...</span>
                        </>
                    ) : (
                        <>
                            <MapPin size={20} />
                            <span className="text-sm font-medium">Capturar Ubicación GPS</span>
                        </>
                    )}
                </button>
            )}
        </div>
    );
};
