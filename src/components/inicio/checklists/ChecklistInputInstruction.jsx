import React from "react";
import { AlertCircle } from "lucide-react";

export const ChecklistInputInstruction = ({
  title,
  subtitle,
  content,
  icon: Icon,
  isGrouped = false,
}) => {
  return (
    <div className={`mb-4 ${isGrouped ? "px-2" : ""}`}>
      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg shadow-sm">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {Icon ? (
              <Icon className="h-5 w-5 text-blue-500" />
            ) : (
              <AlertCircle className="h-5 w-5 text-blue-500" />
            )}
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
              {title}
            </h3>
            {(subtitle || content) && (
              <div className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                <p>{subtitle || content}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
