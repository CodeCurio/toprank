"use client";

import { useState, useRef, useEffect } from "react";
import { UploadCloud, X, Check, Loader2, Link as LinkIcon, AlertCircle } from "lucide-react";
import { useAdminTheme } from "./AdminThemeContext";

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  helperText?: string;
}

export function ImageUploader({
  value,
  onChange,
  label = "Cover / Featured Image",
  helperText = "Upload high quality PNG, JPG, or WebP (Max 15MB)",
}: ImageUploaderProps) {
  const { isLight } = useAdminTheme();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [localBlobUrl, setLocalBlobUrl] = useState<string | null>(null);
  const [mode, setMode] = useState<"upload" | "url">(value && !value.startsWith("/uploads/") ? "url" : "upload");
  const [urlInput, setUrlInput] = useState(value || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value) {
      setUrlInput(value);
    }
  }, [value]);

  const displayImage = localBlobUrl || value;

  const handleFileSelect = async (file: File) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file (PNG, JPG, WebP, etc.)");
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setError("Image size exceeds 15MB limit.");
      return;
    }

    const blobPreview = URL.createObjectURL(file);
    setLocalBlobUrl(blobPreview);
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to upload image.");
      }

      onChange(data.url);
      setUrlInput(data.url);
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(err.message || "Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleRemove = () => {
    onChange("");
    setLocalBlobUrl(null);
    setUrlInput("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUrlApply = () => {
    if (urlInput.trim()) {
      setLocalBlobUrl(null);
      onChange(urlInput.trim());
    }
  };

  return (
    <div className="space-y-3">
      {/* Header & Mode Switcher */}
      <div className="flex items-center justify-between">
        <label className={`block text-xs font-black uppercase tracking-wider ${isLight ? "text-slate-800" : "text-slate-300"}`}>
          {label} <span className="text-orange-500">*</span>
        </label>
        <div className={`flex items-center gap-1 border p-0.5 rounded-lg text-[11px] font-bold ${
          isLight ? "bg-slate-100 border-slate-200" : "bg-slate-950 border-slate-800"
        }`}>
          <button
            type="button"
            onClick={() => setMode("upload")}
            className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
              mode === "upload"
                ? "bg-blue-600 text-white shadow"
                : isLight
                ? "text-slate-600 hover:text-slate-900"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <UploadCloud className="w-3 h-3" /> Upload File
          </button>
          <button
            type="button"
            onClick={() => setMode("url")}
            className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1 ${
              mode === "url"
                ? "bg-blue-600 text-white shadow"
                : isLight
                ? "text-slate-600 hover:text-slate-900"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <LinkIcon className="w-3 h-3" /> Direct URL
          </button>
        </div>
      </div>

      {/* Error notification */}
      {error && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-bold flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Image Preview if image is present */}
      {displayImage ? (
        <div className={`relative aspect-[16/10] w-full rounded-2xl overflow-hidden border group ${
          isLight ? "bg-slate-100 border-slate-200" : "bg-slate-950 border-slate-800"
        }`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={displayImage}
            alt="Uploaded Preview"
            className="w-full h-full object-cover"
          />

          {uploading && (
            <div className="absolute inset-0 bg-slate-950/75 flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
              <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
              <p className="text-xs font-bold text-white">Saving image to server...</p>
            </div>
          )}

          <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg flex items-center gap-1.5"
            >
              <UploadCloud className="w-3.5 h-3.5" /> Replace Image
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="p-2 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-all shadow-lg"
              title="Remove image"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <Check className="w-3 h-3" /> Image Active
          </div>
        </div>
      ) : (
        <>
          {mode === "upload" ? (
            /* Drag & Drop Upload Box */
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => !uploading && fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-3 ${
                uploading
                  ? "border-blue-500 bg-blue-500/5 cursor-wait"
                  : isLight
                  ? "border-slate-300 hover:border-blue-500 bg-slate-50/80 hover:bg-slate-100/80"
                  : "border-slate-800 hover:border-blue-500/60 bg-slate-950/60 hover:bg-slate-900/60"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileSelect(e.target.files[0]);
                  }
                }}
              />

              {uploading ? (
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                  <p className="text-xs font-bold text-blue-600">Processing image upload...</p>
                </div>
              ) : (
                <>
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${
                    isLight ? "bg-blue-50 border-blue-200 text-blue-600" : "bg-blue-500/10 border-blue-500/20 text-blue-400"
                  }`}>
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div>
                    <p className={`text-xs font-black ${isLight ? "text-slate-800" : "text-white"}`}>
                      Click to upload or drag &amp; drop
                    </p>
                    <p className={`text-[11px] mt-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>{helperText}</p>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* Direct URL input */
            <div className="flex items-center gap-2">
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://images.unsplash.com/... or /uploads/image.png"
                className={`flex-1 px-4 py-3 border rounded-xl text-xs font-mono focus:outline-none transition-colors ${
                  isLight
                    ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 shadow-2xs"
                    : "bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-blue-500"
                }`}
              />
              <button
                type="button"
                onClick={handleUrlApply}
                className="px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
              >
                Apply URL
              </button>
            </div>
          )}
        </>
      )}

      {/* Recommended Sizing & Mockup Framing Guidance */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] p-3.5 rounded-2xl border shadow-2xs ${
        isLight ? "bg-slate-100/90 border-slate-200 text-slate-600" : "bg-slate-950/80 border-slate-800/90 text-slate-400"
      }`}>
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-blue-600">📐 Best Resolution:</span>
          <span className={`font-medium ${isLight ? "text-slate-800" : "text-slate-300"}`}>1920 × 1200 (16:10) or 1920 × 1080 (16:9)</span>
        </div>
        <div className={`text-[10px] font-medium ${isLight ? "text-slate-500" : "text-slate-400"}`}>
          💡 <span className="text-amber-600 font-bold">Pro-Tip:</span> Keep ~5-10% canvas padding around device mockups
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFileSelect(e.target.files[0]);
          }
        }}
      />
    </div>
  );
}
