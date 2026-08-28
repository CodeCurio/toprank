"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Search,
  ShieldCheck,
  CheckCircle2,
  Star,
  ArrowUpRight,
  Zap,
  Activity,
  Award,
  Globe,
  Sparkles,
  BarChart3,
  Check
} from "lucide-react";

interface KeywordRankItem {
  keyword: string;
  category: string;
  position: string;
  movement: string;
  volume: string;
  ctr: string;
}

const LIVE_KEYWORDS: KeywordRankItem[] = [
  {
    keyword: "best seo company in lucknow",
    category: "Commercial Intent",
    position: "#1",
    movement: "+14",
    volume: "14.8k/mo",
    ctr: "48.6%",
  },
  {
    keyword: "top dental clinic near me",
    category: "Local Map Pack",
    position: "#1",
    movement: "+9",
    volume: "22.4k/mo",
    ctr: "52.1%",
  },
  {
    keyword: "enterprise b2b crm software",
    category: "National Search",
    position: "#2",
    movement: "+18",
    volume: "45.0k/mo",
    ctr: "39.4%",
  },
];

const COMPLIANCE_ITEMS = [
  {
    title: "Google Core & Spam Update Compliant",
    detail: "100% White-Hat Semantic Architecture",
    badge: "100% Safe",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  {
    title: "High Authority Backlink Network",
    detail: "Zero PBNs • Verified DR 70+ Editorial Links",
    badge: "Zero Spam",
    icon: Award,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  {
    title: "Core Web Vitals & Speed Dominance",
    detail: "Sub-0.8s LCP on Mobile & Desktop SERP",
    badge: "Grade A+",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
  {
    title: "Continuous Algorithm Radar",
    detail: "24/7 rank monitoring & rapid SERP defense",
    badge: "Active 24/7",
    icon: Activity,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
  },
];

export function BrandTrustEngine() {
  const [activeTab, setActiveTab] = useState<"rankings" | "growth" | "shield">("rankings");
  const [activeKeywordIdx, setActiveKeywordIdx] = useState(0);

  // Cycle keywords preview subtly
  useEffect(() => {
    if (activeTab !== "rankings") return;
    const interval = setInterval(() => {
      setActiveKeywordIdx((prev) => (prev + 1) % LIVE_KEYWORDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="relative w-full">
      {/* Ambient background glows */}
      <div className="absolute -top-12 -right-12 w-72 h-72 bg-blue-500/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Floating Trust Badge - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute -top-4 -right-2 md:-right-4 z-20 hidden sm:flex items-center gap-2.5 bg-slate-900/90 border border-blue-500/40 px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-md"
      >
        <div className="flex items-center text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <div className="text-[11px] font-bold text-slate-200">
          <span className="text-white font-extrabold">4.9/5</span> · 100+ Reviews
        </div>
      </motion.div>

      {/* Floating Trust Badge - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute -bottom-5 -left-2 md:-left-4 z-20 hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-950/90 to-slate-900/90 border border-emerald-500/40 px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-md"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-bold text-emerald-300">
          98.6% Client Retention Rate
        </span>
      </motion.div>

      {/* Main Glassmorphic Display Card */}
      <div className="bg-slate-950/80 border border-slate-800/90 rounded-3xl p-5 sm:p-6 lg:p-7 shadow-2xl backdrop-blur-xl relative z-10 overflow-hidden">
        {/* Card Header: Live Telemetry Indicator & Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800/80 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute opacity-75" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 relative" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Live SERP Telemetry</p>
              <p className="text-xs font-bold text-white flex items-center gap-1">
                Verified Client Performance
              </p>
            </div>
          </div>

          <div className="text-[11px] px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3 h-3" />
            Top 1% SERP Standard
          </div>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-2xl mb-5">
          <button
            type="button"
            onClick={() => setActiveTab("rankings")}
            className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "rankings"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-extrabold"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>#1 Rankings</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("growth")}
            className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "growth"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-extrabold"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Growth Curve</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("shield")}
            className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === "shield"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-extrabold"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Algorithm Shield</span>
          </button>
        </div>

        {/* Dynamic Tab Body */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            {/* TAB 1: REAL-TIME RANKINGS */}
            {activeTab === "rankings" && (
              <motion.div
                key="rankings"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                {/* Search Bar Simulation */}
                <div className="bg-slate-900/90 border border-slate-800 px-3.5 py-2 rounded-xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Search className="w-3.5 h-3.5 text-blue-400" />
                    <span className="font-mono text-slate-300 truncate max-w-[190px] sm:max-w-[240px]">
                      {LIVE_KEYWORDS[activeKeywordIdx].keyword}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20 font-bold">
                    Rank #1
                  </span>
                </div>

                {/* Keyword Live List */}
                <div className="space-y-2">
                  {LIVE_KEYWORDS.map((item, idx) => {
                    const isSelected = idx === activeKeywordIdx;
                    return (
                      <div
                        key={item.keyword}
                        onClick={() => setActiveKeywordIdx(idx)}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-slate-900 border-blue-500/50 shadow-md ring-1 ring-blue-500/30"
                            : "bg-slate-900/40 border-slate-800/60 hover:bg-slate-900/80 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-white text-sm shadow-md flex-shrink-0">
                            {item.position}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white truncate max-w-[150px] sm:max-w-[200px]">
                              {item.keyword}
                            </p>
                            <p className="text-[10px] text-slate-400">
                              {item.category} • Vol: {item.volume}
                            </p>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <div className="flex items-center justify-end gap-1 text-emerald-400 text-xs font-black">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                            <span>{item.movement}</span>
                          </div>
                          <p className="text-[10px] text-slate-400 font-medium">{item.ctr} CTR</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Micro Metric Footer */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    89.4% in Top 3 within 90 days
                  </span>
                  <span className="text-blue-400 font-semibold">100+ Brands Live</span>
                </div>
              </motion.div>
            )}

            {/* TAB 2: GROWTH CURVE */}
            {activeTab === "growth" && (
              <motion.div
                key="growth"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Visual mini traffic chart */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black">Average Organic Traffic Trajectory</p>
                      <p className="text-lg font-black text-white flex items-center gap-2">
                        +340% Growth
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          6-Month Compounding
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-400">Avg. Revenue Impact</p>
                      <p className="text-sm font-black text-blue-400">3.8x ROI</p>
                    </div>
                  </div>

                  {/* SVG Chart Graphic */}
                  <div className="relative h-24 w-full">
                    <svg viewBox="0 0 300 80" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="#334155" strokeWidth="0.5" strokeDasharray="3 3" />
                      
                      {/* Growth Area */}
                      <path
                        d="M 0 70 Q 60 65 110 50 T 200 28 T 300 8 L 300 80 L 0 80 Z"
                        fill="url(#growthGradient)"
                      />
                      {/* Growth Curve */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        d="M 0 70 Q 60 65 110 50 T 200 28 T 300 8"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Data points */}
                      <circle cx="0" cy="70" r="3" fill="#60a5fa" />
                      <circle cx="110" cy="50" r="3.5" fill="#60a5fa" />
                      <circle cx="200" cy="28" r="4" fill="#38bdf8" />
                      <circle cx="300" cy="8" r="5" fill="#38bdf8" className="animate-pulse" />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>Month 1: Audit</span>
                    <span>Month 2: Fix</span>
                    <span>Month 4: Scale</span>
                    <span className="text-cyan-400 font-bold">Month 6: Dominance</span>
                  </div>
                </div>

                {/* 2 Key Metric Highlights */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Zero Ad Spend Required</p>
                    <p className="text-sm font-black text-white mt-0.5">100% Organic Leads</p>
                  </div>
                  <div className="bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">Conversion Rate</p>
                    <p className="text-sm font-black text-emerald-400 mt-0.5">High Intent Traffic</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: ALGORITHM SHIELD */}
            {activeTab === "shield" && (
              <motion.div
                key="shield"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-2.5"
              >
                {COMPLIANCE_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${item.bg}`}>
                          <Icon className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white leading-snug">{item.title}</p>
                          <p className="text-[10px] text-slate-400">{item.detail}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold text-slate-200 px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 whitespace-nowrap">
                        {item.badge}
                      </span>
                    </div>
                  );
                })}

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    7+ Years Zero Penalty Track Record
                  </span>
                  <span className="text-slate-300">White-Hat Only</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
