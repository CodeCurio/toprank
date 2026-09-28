"use client";

import { useAdminTheme } from "./AdminThemeContext";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  variant?: "pill" | "icon" | "button";
  className?: string;
}

export function ThemeToggle({ variant = "pill", className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme, isLight } = useAdminTheme();

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`p-2.5 rounded-xl transition-all flex items-center justify-center ${
          isLight
            ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-xs"
            : "bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700"
        } ${className}`}
        title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      >
        {isLight ? <Moon className="w-4 h-4 text-slate-700" /> : <Sun className="w-4 h-4 text-amber-400" />}
      </button>
    );
  }

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
          isLight
            ? "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs"
            : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
        } ${className}`}
      >
        {isLight ? (
          <>
            <Moon className="w-3.5 h-3.5 text-slate-600" />
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>Light Mode</span>
          </>
        )}
      </button>
    );
  }

  // Default: interactive pill toggle
  return (
    <div
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && toggleTheme()}
      className={`relative inline-flex items-center p-1 rounded-full cursor-pointer transition-all select-none border ${
        isLight
          ? "bg-slate-100 border-slate-300 text-slate-700"
          : "bg-slate-800 border-slate-700 text-slate-300"
      } ${className}`}
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <div className="flex items-center gap-1.5 px-1">
        <span
          className={`flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full transition-all ${
            isLight
              ? "bg-white text-blue-600 shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Sun className="w-3 h-3 text-amber-500" />
          <span>Light</span>
        </span>
        <span
          className={`flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full transition-all ${
            !isLight
              ? "bg-slate-900 text-blue-400 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          <Moon className="w-3 h-3 text-indigo-400" />
          <span>Dark</span>
        </span>
      </div>
    </div>
  );
}
