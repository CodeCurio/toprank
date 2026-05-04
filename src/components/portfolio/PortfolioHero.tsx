"use client";

import { motion } from "framer-motion";

export function PortfolioHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-pink-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950 pointer-events-none" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-300">Our Digital Masterpieces</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]"
          >
            Case Studies that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-400">
              Speak for Themselves
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Explore how we've helped ambitious brands transform their digital presence, increase traffic, and skyrocket their revenue.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
