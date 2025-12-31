import React, { useState, useEffect } from "react";
import { ChecklistLabel } from "./ChecklistLabel";
import { Mic, Square, Play, Trash2, Pause } from "lucide-react";

export const ChecklistInputAudio = ({
  title,
  subtitle,
  icon,
  value,
  onChange,
  isGrouped = false,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    } else {
      setDuration(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleRecord = () => {
    setIsRecording(true);
    // Simulate recording for 3 seconds then save
    setTimeout(() => {
      setIsRecording(false);
      onChange("dummy-audio-url");
    }, 3000);
  };

  const handleStop = () => {
    setIsRecording(false);
    onChange("dummy-audio-url");
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDelete = () => {
    onChange(null);
    setIsPlaying(false);
  };

  return (
    <div className="mb-4">
      <ChecklistLabel
        title={title}
        subtitle={subtitle}
        icon={icon}
        isGrouped={isGrouped}
      />

      <div className="mt-2 flex items-center justify-between rounded-xl bg-gray-50 p-3 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700">
        {!value && !isRecording && (
          <button
            onClick={handleRecord}
            className="flex items-center space-x-3 w-full hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg p-1 transition opacity-90 hover:opacity-100">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-500">
              <Mic size={20} />
            </div>
            <span className="font-medium text-gray-600 dark:text-gray-300">
              Grabar Nota de Voz
            </span>
          </button>
        )}

        {isRecording && (
          <button
            onClick={handleStop}
            className="flex items-center space-x-3 w-full animate-pulse">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30">
              <Square size={20} fill="white" />
            </div>
            <span className="font-medium text-red-600 dark:text-red-400">
              Grabando... {duration}s
            </span>
          </button>
        )}

        {value && !isRecording && (
          <div className="flex flex-1 items-center justify-between animate-fade-in-up">
            <div className="flex items-center space-x-3">
              <button
                onClick={togglePlayback}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
                {isPlaying ? (
                  <Pause size={20} fill="#2563eb" />
                ) : (
                  <Play size={20} fill="#2563eb" className="ml-1" />
                )}
              </button>
              <div className="flex flex-col">
                <span className="font-medium text-gray-700 dark:text-gray-200 text-sm">
                  {isPlaying ? "Reproduciendo..." : "Audio_Nota_01.mp3"}
                </span>
                <span className="text-xs text-gray-400">00:03</span>
              </div>
            </div>

            <button
              onClick={handleDelete}
              className="p-2 text-gray-400 hover:text-red-500 transition">
              <Trash2 size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
