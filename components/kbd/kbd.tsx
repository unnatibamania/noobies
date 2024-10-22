import React from "react";

interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

export const Kbd: React.FC<KbdProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`p-1 min-w-6 min-h-6 text-xs font-semibold border border-gray-400 rounded-md shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

