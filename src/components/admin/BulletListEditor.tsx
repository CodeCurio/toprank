"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, List, AlignLeft, Sparkles } from "lucide-react";
import { useAdminTheme } from "./AdminThemeContext";

interface BulletListEditorProps {
  label: string;
  sublabel?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  accentColor?: "rose" | "emerald" | "blue" | "indigo";
  presetSuggestions?: string[];
}

export function BulletListEditor({
  label,
  sublabel,
  value,
  onChange,
  placeholder = "Add key point...",
  accentColor = "blue",
  presetSuggestions = [],
}: BulletListEditorProps) {
  const { isLight } = useAdminTheme();
  const [mode, setMode] = useState<"visual" | "raw">("visual");

  const parseItems = (text: string): string[] => {
    if (!text) return [];
    return text
      .split("\n")
      .map((line) => line.replace(/^[•\-\*]\s*/, "").trim())
      .filter(Boolean);
  };

  const [items, setItems] = useState<string[]>(() => {
    const parsed = parseItems(value);
    return parsed.length > 0 ? parsed : [""];
  });

  useEffect(() => {
    const parsed = parseItems(value);
    if (parsed.length === 0 && items.length === 1 && items[0] === "") return;
    const currentJoined = items.filter(Boolean).join("\n");
    const newJoined = parsed.join("\n");
    if (currentJoined !== newJoined && parsed.length > 0) {
      setItems(parsed);
    }
  }, [value]);

  const updateItems = (newItems: string[]) => {
    setItems(newItems);
    const validLines = newItems.filter((it) => it.trim().length > 0);
    const formatted = validLines.map((line) => `• ${line.trim()}`).join("\n");
    onChange(formatted);
  };

  const handleItemChange = (index: number, text: string) => {
    const updated = [...items];
    updated[index] = text;
    updateItems(updated);
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const updated = [...items];
      updated.splice(index + 1, 0, "");
      updateItems(updated);
      setTimeout(() => {
        const nextInput = document.getElementById(`${label}-item-${index + 1}`);
        if (nextInput) nextInput.focus();
      }, 50);
    } else if (e.key === "Backspace" && items[index] === "" && items.length > 1) {
      e.preventDefault();
      const updated = items.filter((_, i) => i !== index);
      updateItems(updated);
      setTimeout(() => {
        const prevInput = document.getElementById(`${label}-item-${Math.max(0, index - 1)}`);
        if (prevInput) prevInput.focus();
      }, 50);
    }
  };

  const addItem = (text = "") => {
    updateItems([...items, text]);
  };

  const removeItem = (index: number) => {
    if (items.length <= 1) {
      updateItems([""]);
      return;
    }
    updateItems(items.filter((_, i) => i !== index));
  };

  const applySuggestion = (sug: string) => {
    if (items.length === 1 && items[0] === "") {
      updateItems([sug]);
    } else if (!items.includes(sug)) {
      updateItems([...items, sug]);
    }
  };

  const getBorderColor = () => {
    if (accentColor === "rose") return "focus-within:border-rose-500/60";
    if (accentColor === "emerald") return "focus-within:border-emerald-500/60";
    if (accentColor === "indigo") return "focus-within:border-indigo-500/60";
    return "focus-within:border-blue-500/60";
  };

  const getBadgeColor = () => {
    if (accentColor === "rose") {
      return isLight ? "bg-rose-50 text-rose-600 border-rose-200" : "bg-rose-500/10 text-rose-400 border-rose-500/20";
    }
    if (accentColor === "emerald") {
      return isLight ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    }
    if (accentColor === "indigo") {
      return isLight ? "bg-indigo-50 text-indigo-600 border-indigo-200" : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
    }
    return isLight ? "bg-blue-50 text-blue-600 border-blue-200" : "bg-blue-500/10 text-blue-400 border-blue-500/20";
  };

  return (
    <div className="space-y-3">
      {/* Header & Mode Switcher */}
      <div className="flex items-center justify-between">
        <div>
          <label className={`block text-xs font-black uppercase tracking-wider ${isLight ? "text-slate-800" : "text-slate-200"}`}>
            {label}
          </label>
          {sublabel && <p className={`text-[11px] font-medium ${isLight ? "text-slate-500" : "text-slate-400"}`}>{sublabel}</p>}
        </div>

        <div className={`flex items-center gap-1 p-1 rounded-xl border ${
          isLight ? "bg-slate-100 border-slate-200" : "bg-slate-950 border-slate-800"
        }`}>
          <button
            type="button"
            onClick={() => setMode("visual")}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all ${
              mode === "visual"
                ? isLight
                  ? "bg-white text-blue-600 shadow-xs"
                  : "bg-slate-800 text-white shadow-sm"
                : isLight
                ? "text-slate-500 hover:text-slate-800"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <List className="w-3 h-3" /> List Mode
          </button>
          <button
            type="button"
            onClick={() => setMode("raw")}
            className={`px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all ${
              mode === "raw"
                ? isLight
                  ? "bg-white text-blue-600 shadow-xs"
                  : "bg-slate-800 text-white shadow-sm"
                : isLight
                ? "text-slate-500 hover:text-slate-800"
                : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <AlignLeft className="w-3 h-3" /> Text Mode
          </button>
        </div>
      </div>

      {/* Preset Suggestions */}
      {presetSuggestions.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          <span className={`text-[10px] font-bold flex items-center gap-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            <Sparkles className="w-3 h-3 text-amber-500" /> Quick Add:
          </span>
          {presetSuggestions.map((sug, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => applySuggestion(sug)}
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-lg border transition-all ${
                isLight
                  ? "bg-slate-100/90 hover:bg-slate-200 border-slate-200 text-slate-700 hover:text-slate-900"
                  : "bg-slate-950/80 hover:bg-slate-800 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white"
              }`}
            >
              + {sug}
            </button>
          ))}
        </div>
      )}

      {/* Editor Body */}
      {mode === "visual" ? (
        <div className={`space-y-2 p-3 border rounded-2xl ${getBorderColor()} transition-colors ${
          isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/80 border-slate-800/90"
        }`}>
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 group">
              <span className={`w-5 h-5 rounded-lg border text-[10px] font-bold flex items-center justify-center shrink-0 ${getBadgeColor()}`}>
                {idx + 1}
              </span>

              <input
                id={`${label}-item-${idx}`}
                type="text"
                value={item}
                onChange={(e) => handleItemChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                placeholder={idx === 0 ? placeholder : "Next key point (press Enter to add another)..."}
                className={`w-full px-3 py-2 rounded-xl text-xs font-semibold focus:outline-none transition-all border ${
                  isLight
                    ? "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 shadow-2xs"
                    : "bg-slate-900/90 border-slate-800/80 text-white placeholder-slate-600 focus:border-blue-500"
                }`}
              />

              <button
                type="button"
                onClick={() => removeItem(idx)}
                className={`p-1.5 rounded-lg transition-colors opacity-80 group-hover:opacity-100 ${
                  isLight
                    ? "text-slate-400 hover:text-red-500 hover:bg-red-50"
                    : "text-slate-600 hover:text-red-400 hover:bg-red-500/10"
                }`}
                title="Remove point"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => addItem()}
            className={`w-full py-2 rounded-xl border border-dashed text-xs font-bold flex items-center justify-center gap-1.5 transition-all mt-2 ${
              isLight
                ? "bg-white hover:bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900 shadow-2xs"
                : "bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white"
            }`}
          >
            <Plus className="w-3.5 h-3.5" /> Add Another Point
          </button>
        </div>
      ) : (
        <div className="space-y-1">
          <textarea
            rows={Math.max(4, value.split("\n").length + 1)}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`w-full px-4 py-3 rounded-2xl text-xs font-medium focus:outline-none transition-colors leading-relaxed custom-scrollbar border ${
              isLight
                ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500"
                : "bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-blue-500"
            }`}
          />
          <p className={`text-[10px] italic ${isLight ? "text-slate-500" : "text-slate-500"}`}>
            Tip: Start each line with a bullet (•) or hyphen (-). Lines will auto-format as points.
          </p>
        </div>
      )}
    </div>
  );
}
