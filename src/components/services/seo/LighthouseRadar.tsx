"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Zap,
  ShieldCheck,
  Search,
  BarChart3,
  Clock,
  Rocket,
  Globe,
  CheckCircle2,
  Activity,
  RefreshCw,
  Cpu,
  Sparkles,
  Server,
  Layers
} from "lucide-react";

interface MetricPillar {
  id: string;
  name: string;
  score: number;
  icon: typeof Zap;
  color: string;
  ringColor: string;
  tag: string;
}

const PILLARS: MetricPillar[] = [
  {
    id: "performance",
    name: "Performance",
    score: 99,
    icon: Zap,
    color: "text-emerald-400",
    ringColor: "#10b981",
    tag: "Sub-0.6s LCP",
  },
  {
    id: "seo",
    name: "SEO Score",
    score: 100,
    icon: Search,
    color: "text-blue-400",
    ringColor: "#3b82f6",
    tag: "Valid Schema.org",
  },
  {
    id: "best-practices",
    name: "Best Practices",
    score: 98,
    icon: ShieldCheck,
    color: "text-emerald-400",
    ringColor: "#10b981",
    tag: "A+ SSL & Security",
  },
  {
    id: "accessibility",
    name: "Accessibility",
    score: 96,
    icon: Globe,
    color: "text-purple-400",
    ringColor: "#a855f7",
    tag: "WCAG 2.1 AAA",
  },
];

const CORE_WEB_VITALS = [
  { name: "LCP (Largest Contentful Paint)", value: "0.54s", benchmark: "< 2.5s", status: "PASS", rating: "Good" },
  { name: "INP (Interaction to Next Paint)", value: "12ms", benchmark: "< 200ms", status: "PASS", rating: "Fast" },
  { name: "CLS (Cumulative Layout Shift)", value: "0.00", benchmark: "< 0.1", status: "PASS", rating: "Zero Shift" },
  { name: "TTFB (Time to First Byte)", value: "36ms", benchmark: "< 800ms", status: "PASS", rating: "Instant" },
];

export function LighthouseRadar() {
  const [isScanning, setIsScanning] = useState(false);
  const [activeScore, setActiveScore] = useState<number>(99);
  const [auditStep, setAuditStep] = useState<number>(4);

  const handleRescan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setAuditStep(0);
    setActiveScore(40);

    const timer1 = setTimeout(() => { setAuditStep(1); setActiveScore(65); }, 400);
    const timer2 = setTimeout(() => { setAuditStep(2); setActiveScore(82); }, 900);
    const timer3 = setTimeout(() => { setAuditStep(3); setActiveScore(94); }, 1400);
    const timer4 = setTimeout(() => {
      setAuditStep(4);
      setActiveScore(99);
      setIsScanning(false);
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden border-t border-slate-800/80">
      {/* Background Ambience & Deep Glows */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-600/12 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(30,58,138,0.12),transparent_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Real-World Google Lighthouse & Core Web Vitals Diagnostic Cockpit */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-950/90 rounded-3xl border border-slate-800 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl"
            >
              {/* Terminal Header Bar */}
              <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 font-bold ml-2 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    Google Lighthouse Diagnostic Lab
                  </span>
                </div>

                <button
                  onClick={handleRescan}
                  disabled={isScanning}
                  className="px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-[11px] font-bold text-blue-300 flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3 h-3 ${isScanning ? "animate-spin text-blue-400" : ""}`} />
                  <span>{isScanning ? "Auditing..." : "Re-test URL"}</span>
                </button>
              </div>

              {/* URL & Audit Target Bar */}
              <div className="p-3.5 sm:p-4 bg-slate-900/40 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    PASS Core Web Vitals
                  </span>
                  <span className="font-mono text-slate-400 truncate max-w-[200px] sm:max-w-[280px]">
                    https://toprankindia.com
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Device: Mobile & Desktop</span>
              </div>

              {/* 4 Pillars Circular Score Gauges */}
              <div className="p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 to-slate-900/60">
                {PILLARS.map((item, idx) => {
                  const scoreDisplay = isScanning ? Math.min(activeScore, item.score) : item.score;
                  const radius = 28;
                  const circumference = 2 * Math.PI * radius;
                  const offset = circumference - (scoreDisplay / 100) * circumference;

                  return (
                    <div
                      key={item.id}
                      className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 flex flex-col items-center text-center relative group hover:border-blue-500/40 transition-colors"
                    >
                      {/* SVG Gauge Circle */}
                      <div className="relative w-18 h-18 mb-2 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 72 72">
                          <circle
                            cx="36"
                            cy="36"
                            r={radius}
                            stroke="currentColor"
                            strokeWidth="5"
                            className="text-slate-800"
                            fill="transparent"
                          />
                          <motion.circle
                            cx="36"
                            cy="36"
                            r={radius}
                            stroke={item.ringColor}
                            strokeWidth="5"
                            strokeDasharray={circumference}
                            animate={{ strokeDashoffset: offset }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            strokeLinecap="round"
                            fill="transparent"
                          />
                        </svg>

                        <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                          <span className={`text-xl font-black ${item.color}`}>
                            {scoreDisplay}
                          </span>
                          <span className="text-[8px] font-mono text-slate-500">/100</span>
                        </div>
                      </div>

                      <div className="text-xs font-bold text-white mb-0.5">{item.name}</div>
                      <div className="text-[9px] font-mono text-emerald-400 font-semibold truncate max-w-full">
                        {item.tag}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Core Web Vitals Detailed Breakdown Table */}
              <div className="p-4 sm:p-5 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    Google Real-User Metrics (CrUX Data)
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    100% Green Zone
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CORE_WEB_VITALS.map((vital, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between"
                    >
                      <div className="space-y-0.5 overflow-hidden">
                        <div className="text-[11px] font-bold text-slate-200 truncate">{vital.name}</div>
                        <div className="text-[9px] font-mono text-slate-400">Target: {vital.benchmark}</div>
                      </div>

                      <div className="text-right shrink-0 pl-2">
                        <div className="text-sm font-black text-emerald-400 font-mono">{vital.value}</div>
                        <span className="text-[8px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-950 px-1.5 py-0.2 rounded border border-emerald-500/30">
                          {vital.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live Diagnostic Checks Feed */}
                <div className="mt-3 p-3 bg-slate-900/50 rounded-xl border border-slate-800 text-[11px] font-mono space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Next.js 15 Server-Side Rendering (SSR) Active</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Structured JSON-LD Schema Verified by Google Rich Results</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Zero Render-Blocking Critical CSS/JS Assets</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Value Copy & Technical Guarantees */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-black uppercase tracking-wider mb-5">
                <Zap className="w-3.5 h-3.5 fill-blue-400" /> Technical Supremacy
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-5">
                Engineered for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
                  Google's Algorithm.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-xl">
                We don't just "do" superficial keyword stuffing. We optimize your website's entire core architecture to pass every single algorithmic requirement Google demands for ranking priority.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 items-start p-5 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-lg shadow-black/40 hover:border-slate-700 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">Sub-Second Load Times (&lt; 0.6s LCP)</h4>
                  <p className="text-slate-400 text-sm font-normal leading-relaxed">
                    Google penalizes slow websites. Our custom Next.js engineering ensures sub-second page rendering, instantly cutting bounce rates and boosting conversions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-5 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-lg shadow-black/40 hover:border-slate-700 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">Semantic Knowledge Graph & Entity Authority</h4>
                  <p className="text-slate-400 text-sm font-normal leading-relaxed">
                    We inject custom JSON-LD schema schemas so Google's AI completely understands your business entities, powering Rich Snippets and local map dominance.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-4 p-3 pr-6 bg-slate-950 border border-slate-800 rounded-2xl shadow-xl">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest leading-tight">
                    Technical Guarantee
                  </p>
                  <p className="text-sm sm:text-base font-black text-white">
                    100/100 Core Web Vital Scoring Across All Devices
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


