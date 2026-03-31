"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Search, ChevronRight, Terminal, Loader2, CheckCircle2, AlertCircle, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const AUDIT_STEPS = [
  { id: 1, label: "Initializing Diagnostic Crawler...", delay: 1000 },
  { id: 2, label: "Analyzing Semantic Content Hubs...", delay: 2000 },
  { id: 3, label: "Scanning Technical Indexation Gaps...", delay: 1500 },
  { id: 4, label: "Reverse-Engineering Competitor Backlinks...", delay: 2500 },
  { id: 5, label: "Calculating Growth Potential...", delay: 1200 },
];

export function SeoAuditSimulator() {
  const [step, setStep] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const startAudit = () => {
    setIsScanning(true);
    setStep(1);
  };

  useEffect(() => {
    if (isScanning && step > 0 && step <= AUDIT_STEPS.length) {
      const timer = setTimeout(() => {
        if (step < AUDIT_STEPS.length) {
          setStep(step + 1);
        } else {
          setIsScanning(false);
          setShowResult(true);
        }
      }, AUDIT_STEPS[step - 1].delay);
      return () => clearTimeout(timer);
    }
  }, [isScanning, step]);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b,transparent)] opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-bold text-[10px] uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5 fill-blue-400" />
              Intelligence Engine
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Stop Guessing. <br />
              <span className="text-blue-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-500">
                Start Dominating.
              </span>
            </h2>

            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Our proprietary SEO audit doesn't just find errors; it finds **Growth Opportunities**. We identify exactly where your competitors are weak and where your biggest ranking gaps lie.
            </p>

            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.button
                  key="start-btn"
                  onClick={startAudit}
                  disabled={isScanning}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isScanning ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Scanning Your Domain...
                    </>
                  ) : (
                    <>
                      Run Free System Diagnostic <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              ) : (
                <motion.div
                  key="result-cta"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-blue-600 rounded-3xl border border-blue-500 shadow-2xl shadow-blue-600/20 text-white"
                >
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-lg">
                        <CheckCircle2 className="w-6 h-6" />
                     </div>
                     <div>
                        <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Diagnostic Complete</div>
                        <div className="text-xl font-black">Growth Blueprint Ready.</div>
                     </div>
                  </div>
                  <Link href="/contact" className="w-full py-4 bg-white text-blue-600 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                     Download Free Strategy Document <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: The Simulation Console */}
          <div className="relative h-[500px] w-full max-w-xl mx-auto">
             <div className="absolute inset-0 bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
                {/* Console Header */}
                <div className="h-12 bg-slate-950 border-b border-slate-800 flex items-center px-6 justify-between">
                   <div className="flex items-center gap-3">
                      <Terminal className="w-4 h-4 text-slate-500" />
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">TOPRANK_SEARCH_CORE_V4.0</span>
                   </div>
                   <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-800" />
                      <div className="w-2 h-2 rounded-full bg-slate-800" />
                   </div>
                </div>

                {/* Console Content */}
                <div className="flex-grow p-8 font-mono text-[11px] leading-relaxed relative">
                   <div className="space-y-4">
                      {/* Previous Steps */}
                      {AUDIT_STEPS.slice(0, step - 1).map((s) => (
                        <div key={s.id} className="flex items-start gap-3">
                           <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                           <span className="text-slate-300">{s.label}</span>
                        </div>
                      ))}

                      {/* Current Step */}
                      {step > 0 && step <= AUDIT_STEPS.length && (
                        <div className="flex items-start gap-3">
                           <Loader2 className="w-3.5 h-3.5 text-blue-500 animate-spin shrink-0 mt-0.5" />
                           <motion.span
                             animate={{ opacity: [0.5, 1, 0.5] }}
                             transition={{ repeat: Infinity, duration: 0.8 }}
                             className="text-white font-black"
                           >
                             {AUDIT_STEPS[step - 1].label}
                           </motion.span>
                        </div>
                      )}

                      {/* Final Result Lines */}
                      {showResult && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="pt-6 border-t border-slate-800 space-y-4"
                        >
                           <div className="text-emerald-400 font-black">› [SYSTEM]: VULNERABILITIES IDENTIFIED IN COMPETITOR_RANKINGS</div>
                           <div className="text-blue-400 font-black">› [SYSTEM]: GROWTH_ACCELERATION_PROTOCOLS_LOADED</div>
                           <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 text-white flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                 <AlertCircle className="w-4 h-4 text-orange-400" />
                                 <span>Potential Traffic Uplift</span>
                              </div>
                              <span className="text-xl font-black text-emerald-400">+340%</span>
                           </div>
                        </motion.div>
                      )}

                      {/* Initial Waiting State */}
                      {!isScanning && !showResult && (
                        <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center space-y-4 opacity-50">
                           <Search className="w-12 h-12 mb-4" />
                           <p className="max-w-[200px]">System Standby. Awaiting Domain for Full Algorithm Analysis.</p>
                        </div>
                      )}
                   </div>
                   
                   {/* Scanning Line Effect */}
                   {isScanning && (
                     <motion.div
                       animate={{ y: [0, 400, 0] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                       className="absolute left-0 right-0 h-px bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10"
                     />
                   )}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
