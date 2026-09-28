"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Sparkles,
  Eye,
  Edit3,
  Columns,
  CheckCircle2,
  TrendingUp,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { useAdminTheme } from "./AdminThemeContext";

interface RichStoryEditorProps {
  value: string;
  onChange: (val: string) => void;
  label?: string;
  placeholder?: string;
}

export function RichStoryEditor({
  value,
  onChange,
  label = "Full Case Study Story & Article Narrative",
  placeholder = "Write a comprehensive breakdown of the client journey, strategic insights, execution milestones, and outcomes...",
}: RichStoryEditorProps) {
  const { isLight } = useAdminTheme();
  const [viewMode, setViewMode] = useState<"write" | "split" | "preview">("write");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Auto-resize textarea height to fit content naturally
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const newHeight = Math.max(260, textarea.scrollHeight);
      textarea.style.height = `${newHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value, viewMode]);

  // Insert formatting at cursor position
  const insertFormatting = (prefix: string, suffix: string = "", placeholderText: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end);
    const contentToInsert = selected || placeholderText;

    const replacement = `${prefix}${contentToInsert}${suffix}`;
    const newVal =
      textarea.value.substring(0, start) + replacement + textarea.value.substring(end);

    onChange(newVal);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + contentToInsert.length
      );
      adjustHeight();
    }, 10);
  };

  const handleInsertHeading = (level: 2 | 3) => {
    if (level === 2) {
      insertFormatting("\n\n<h2>", "</h2>\n", "Section Heading");
    } else {
      insertFormatting("\n\n<h3>", "</h3>\n", "Sub-Section Title");
    }
  };

  const handleInsertLink = () => {
    const url = prompt("Enter URL link (e.g. https://example.com):", "https://");
    if (!url) return;
    insertFormatting(`<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">`, "</a>", "Link text");
  };

  const handleInsertCallout = () => {
    const calloutHTML = `\n<div class="my-6 p-5 rounded-2xl bg-blue-500/10 border-l-4 border-blue-500 text-slate-800 dark:text-blue-100">\n  <strong class="text-blue-600 dark:text-blue-300 font-bold block mb-1">💡 Key Strategic Takeaway</strong>\n  <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">Highlight the most important learning or tactical decision made during this phase...</p>\n</div>\n`;
    insertFormatting(calloutHTML, "", "");
  };

  const handleInsertMetricBox = () => {
    const metricHTML = `\n<div class="my-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-4">\n  <div class="text-3xl font-black text-emerald-600 dark:text-emerald-400">+310%</div>\n  <div>\n    <div class="text-xs font-black uppercase text-emerald-700 dark:text-emerald-300">Verified Outcome</div>\n    <div class="text-xs text-slate-600 dark:text-slate-300">Growth achieved in qualified organic inquiries within 90 days.</div>\n  </div>\n</div>\n`;
    insertFormatting(metricHTML, "", "");
  };

  const handleInsertTemplate = () => {
    if (value && value.trim().length > 0) {
      if (!confirm("This will append a standard structured Case Study outline. Continue?")) return;
    }

    const template = `<h2>The Objective & Background</h2>
<p>Provide a high-level background on the client's position in the market, their primary growth bottleneck, and why previous attempts had plateaued.</p>

<h2>The Discovery & Audit</h2>
<p>Break down the granular findings discovered during technical audit, competitive keyword reverse-engineering, and user funnel evaluation.</p>

<div class="my-6 p-5 rounded-2xl bg-blue-500/10 border-l-4 border-blue-500 text-slate-800 dark:text-blue-100">
  <strong class="text-blue-600 dark:text-blue-300 font-bold block mb-1">💡 Core Breakthrough Insight</strong>
  <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">Local search intent was fragmented across multiple sub-service clusters without dedicated conversion-optimized landing pages.</p>
</div>

<h2>The Multi-Tiered Strategy</h2>
<h3>1. Sub-Second Performance & Web Re-Architecture</h3>
<p>Rebuilt the digital touchpoint using Next.js with high-conversion mobile UX and automated WhatsApp lead routing.</p>

<h3>2. Google Maps 3-Pack & Local Citation Blitz</h3>
<p>Systematically geo-tagged assets, generated localized review funnels, and secured top rankings for high-intent transactional search queries.</p>

<div class="my-6 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-4">
  <div class="text-3xl font-black text-emerald-600 dark:text-emerald-400">#1 Spot</div>
  <div>
    <div class="text-xs font-black uppercase text-emerald-700 dark:text-emerald-300">Search Monopoly</div>
    <div class="text-xs text-slate-600 dark:text-slate-300">Dominating primary high-value local queries across the targeted region.</div>
  </div>
</div>

<h2>Measurable Business Impact</h2>
<p>Summarize the ultimate ROI, customer influx, and long-term market leadership achieved for the brand.</p>`;

    onChange(value ? `${value}\n\n${template}` : template);
  };

  // Calculate statistics
  const wordCount = value
    ? value
        .replace(/<[^>]*>/g, " ")
        .trim()
        .split(/\s+/)
        .filter(Boolean).length
    : 0;

  const readingTime = Math.ceil(wordCount / 180) || 1;

  return (
    <div
      className={`space-y-3 ${
        isFullscreen
          ? isLight
            ? "fixed inset-4 z-50 bg-white/95 border border-slate-300 backdrop-blur-2xl rounded-3xl p-6 overflow-y-auto shadow-2xl flex flex-col"
            : "fixed inset-4 z-50 bg-slate-950/95 border border-slate-700 backdrop-blur-2xl rounded-3xl p-6 overflow-y-auto shadow-2xl flex flex-col"
          : ""
      }`}
    >
      {/* Top Header & View Tabs */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3 ${
        isLight ? "border-slate-200" : "border-slate-800"
      }`}>
        <div>
          <label className={`block text-xs font-black uppercase tracking-wider ${isLight ? "text-slate-800" : "text-white"}`}>
            {label}
          </label>
          <span className={`text-[11px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            Rich HTML &amp; Markdown supported · Renders with full agency typography on live case study
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <div className={`flex items-center rounded-xl p-1 border ${
            isLight ? "bg-slate-100 border-slate-200" : "bg-slate-950 border-slate-800"
          }`}>
            <button
              type="button"
              onClick={() => setViewMode("write")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === "write"
                  ? "bg-blue-600 text-white shadow-xs"
                  : isLight
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" /> Write
            </button>
            <button
              type="button"
              onClick={() => setViewMode("split")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all hidden md:flex ${
                viewMode === "split"
                  ? "bg-blue-600 text-white shadow-xs"
                  : isLight
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Columns className="w-3.5 h-3.5" /> Split
            </button>
            <button
              type="button"
              onClick={() => setViewMode("preview")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === "preview"
                  ? "bg-blue-600 text-white shadow-xs"
                  : isLight
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Eye className="w-3.5 h-3.5" /> Live Preview
            </button>
          </div>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className={`p-2 rounded-xl border transition-colors ${
              isLight
                ? "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
            }`}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Focus"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Formatting Toolbar */}
      {viewMode !== "preview" && (
        <div className={`flex flex-wrap items-center gap-1.5 p-2 border rounded-2xl ${
          isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950 border-slate-800"
        }`}>
          <button
            type="button"
            onClick={() => handleInsertHeading(2)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border flex items-center gap-1 transition-colors ${
              isLight
                ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800"
            }`}
            title="Heading 2"
          >
            <Heading2 className="w-3.5 h-3.5 text-blue-600" /> H2
          </button>

          <button
            type="button"
            onClick={() => handleInsertHeading(3)}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border flex items-center gap-1 transition-colors ${
              isLight
                ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800"
            }`}
            title="Heading 3"
          >
            <Heading3 className="w-3.5 h-3.5 text-indigo-600" /> H3
          </button>

          <div className={`w-px h-5 mx-1 ${isLight ? "bg-slate-200" : "bg-slate-800"}`} />

          <button
            type="button"
            onClick={() => insertFormatting("<strong>", "</strong>", "bold text")}
            className={`p-1.5 rounded-lg border transition-colors ${
              isLight
                ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800"
            }`}
            title="Bold"
          >
            <Bold className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => insertFormatting("<em>", "</em>", "italic text")}
            className={`p-1.5 rounded-lg border transition-colors ${
              isLight
                ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800"
            }`}
            title="Italic"
          >
            <Italic className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => insertFormatting("<ul>\n  <li>", "</li>\n  <li>Second item</li>\n</ul>", "First item")}
            className={`p-1.5 rounded-lg border transition-colors ${
              isLight
                ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800"
            }`}
            title="Bullet List"
          >
            <List className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => insertFormatting("<ol>\n  <li>", "</li>\n  <li>Second step</li>\n</ol>", "Step 1")}
            className={`p-1.5 rounded-lg border transition-colors ${
              isLight
                ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800"
            }`}
            title="Numbered List"
          >
            <ListOrdered className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => insertFormatting("<blockquote class=\"border-l-4 border-blue-500 pl-4 my-4 italic text-slate-700 dark:text-slate-300 bg-blue-50 dark:bg-blue-500/5 p-4 rounded-r-xl\">\n  ", "\n</blockquote>", "Client quote or memorable statement")}
            className={`p-1.5 rounded-lg border transition-colors ${
              isLight
                ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800"
            }`}
            title="Blockquote"
          >
            <Quote className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleInsertLink}
            className={`p-1.5 rounded-lg border transition-colors ${
              isLight
                ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-2xs"
                : "bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800"
            }`}
            title="Insert Link"
          >
            <LinkIcon className="w-3.5 h-3.5" />
          </button>

          <div className={`w-px h-5 mx-1 ${isLight ? "bg-slate-200" : "bg-slate-800"}`} />

          {/* Smart Pre-built Elements */}
          <button
            type="button"
            onClick={handleInsertCallout}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1 transition-colors ${
              isLight
                ? "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
                : "bg-blue-950/60 hover:bg-blue-900/80 text-blue-300 border-blue-800/80"
            }`}
          >
            <Sparkles className="w-3 h-3 text-blue-600" /> + Key Insight Box
          </button>

          <button
            type="button"
            onClick={handleInsertMetricBox}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-bold flex items-center gap-1 transition-colors ${
              isLight
                ? "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200"
                : "bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border-emerald-800/80"
            }`}
          >
            <TrendingUp className="w-3 h-3 text-emerald-600" /> + Result Banner
          </button>

          <button
            type="button"
            onClick={handleInsertTemplate}
            className="ml-auto px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all"
            title="Load full case study outline"
          >
            <Sparkles className="w-3 h-3" /> Insert Full Outline
          </button>
        </div>
      )}

      {/* Editor Content Area */}
      <div className={`grid gap-4 ${viewMode === "split" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
        
        {/* Write View */}
        {(viewMode === "write" || viewMode === "split") && (
          <div className="space-y-2">
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                onChange(e.target.value);
                adjustHeight();
              }}
              placeholder={placeholder}
              className={`w-full min-h-[280px] p-4 rounded-2xl text-xs sm:text-sm font-mono focus:outline-none transition-colors leading-relaxed resize-y custom-scrollbar border ${
                isLight
                  ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 shadow-2xs"
                  : "bg-slate-950 border-slate-800 text-slate-100 placeholder-slate-600 focus:border-blue-500"
              }`}
            />
          </div>
        )}

        {/* Live Rendered Preview */}
        {(viewMode === "preview" || viewMode === "split") && (
          <div className={`p-6 sm:p-8 border rounded-2xl overflow-y-auto max-h-[650px] custom-scrollbar shadow-inner ${
            isLight ? "bg-white border-slate-200 text-slate-900" : "bg-slate-900/90 border-slate-800 text-white"
          }`}>
            <div className={`flex items-center justify-between pb-4 mb-4 border-b ${
              isLight ? "border-slate-100" : "border-slate-800"
            }`}>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Exact Live Site Appearance
              </span>
              <span className={`text-[10px] font-mono ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                {wordCount} words · ~{readingTime} min read
              </span>
            </div>

            {value ? (
              <div
                className={`prose max-w-none 
                  prose-headings:font-black prose-headings:tracking-tight
                  prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:border-b prose-h2:pb-2 prose-h2:mt-6 prose-h2:mb-3
                  prose-h3:text-base sm:prose-h3:text-lg prose-h3:text-blue-600 prose-h3:mt-4
                  prose-p:leading-relaxed prose-p:text-xs sm:prose-p:text-sm prose-p:mb-3
                  prose-li:text-xs sm:prose-li:text-sm
                  prose-strong:font-bold
                  prose-a:text-blue-600 hover:prose-a:text-blue-700 ${
                    isLight
                      ? "prose-slate prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-h2:border-slate-200"
                      : "prose-invert prose-slate prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-h2:border-slate-800"
                  }`}
                dangerouslySetInnerHTML={{ __html: value }}
              />
            ) : (
              <div className={`text-center py-16 space-y-2 ${isLight ? "text-slate-400" : "text-slate-500"}`}>
                <Edit3 className="w-8 h-8 mx-auto opacity-50" />
                <p className="text-xs font-bold">Preview will appear here</p>
                <p className="text-[11px]">Type in the editor or click "Insert Full Outline" to see formatting.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer statistics */}
      <div className={`flex items-center justify-between text-[11px] font-medium px-2 ${
        isLight ? "text-slate-500" : "text-slate-400"
      }`}>
        <div className="flex items-center gap-3">
          <span><strong>{wordCount}</strong> words</span>
          <span>•</span>
          <span><strong>{value.length}</strong> characters</span>
          <span>•</span>
          <span>~<strong>{readingTime}</strong> min read</span>
        </div>
        <div className="font-mono text-[10px] text-blue-600 font-bold">
          HTML / Markdown Ready
        </div>
      </div>
    </div>
  );
}
