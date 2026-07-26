"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, TrendingUp, MapPin, MessageSquare, Globe, ArrowRight, Zap, ShieldCheck, Sparkles, Target } from "lucide-react";
import { AnimatedCTA } from "@/components/ui/animated-cta";

const differentiators = [
  {
    icon: TrendingUp,
    color: "text-orange-500",
    bg: "bg-orange-50 border-orange-200",
    title: "SEO That Puts You On Top",
    desc: "We rank your business on Page 1 of Google for high-intent searches that turn directly into leads.",
    highlight: "Page 1 Google Rankings",
  },
  {
    icon: Globe,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200",
    title: "Websites Built To Convert",
    desc: "Not just pretty designs — sub-second Next.js web architecture engineered to convert visitors into paying clients.",
    highlight: "Sub-Second Conversion UX",
  },
  {
    icon: MapPin,
    color: "text-pink-500",
    bg: "bg-pink-50 border-pink-200",
    title: "Google Map Pack Domination",
    desc: "Capture local searchers instantly by claiming and optimizing your Google Business Profile in the top 3-pack.",
    highlight: "Local 3-Pack Dominance",
  },
  {
    icon: MessageSquare,
    color: "text-indigo-600",
    bg: "bg-indigo-50 border-indigo-200",
    title: "WhatsApp & Lead Automation",
    desc: "Automated chatbots and inquiry pipelines that capture and respond to leads 24/7 without manual effort.",
    highlight: "24/7 Automated Response",
  },
];

const commitments = [
  "Attract ready-to-buy clients searching in your local city or region",
  "Build high-speed digital assets optimized for maximum lead conversion",
  "Provide 100% transparent live lead dashboards and ROI tracking",
];

export function WhatMakesUsDifferent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden py-16 md:py-24"
      id="what-makes-us-different"
    >
      {/* Decorative Ambient Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/10 to-pink-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 to-indigo-500/10 rounded-full blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header (Compact Spacing) */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-800 text-[11px] font-black uppercase tracking-[0.3em] mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            Our Competitive Advantage
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4"
          >
            What Makes TopRank{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
              Different?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed"
          >
            Most agencies stop at ranking. We engineer your entire digital presence so customer acquisition becomes predictable, scalable, and profitable.
          </motion.p>
        </div>

        {/* Main Grid: Feature Cards + Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-20">

          {/* Left Column: 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
                >
                  {/* Accent Top Bar */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 opacity-80 group-hover:h-1.5 transition-all" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl ${item.bg} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <IconComp className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest bg-slate-50 text-slate-500 px-2.5 py-1 rounded-full border border-slate-200">
                        {item.highlight}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Visual Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[4/4] shadow-2xl border-4 border-white group"
          >
            <Image
              src="/images/how_to_rank_higher_in_google.jpg"
              alt="Rank Higher on Google with TopRank Digital"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none z-10" />

            {/* Floating Stat Badges */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="bg-white/95 backdrop-blur-md border border-white shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-3 w-full sm:w-auto">
                <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-900 text-xs font-black leading-tight">+82% Avg. Traffic Growth</p>
                  <p className="text-slate-500 text-[10px] font-medium">Across active clients</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md border border-white shadow-xl rounded-2xl px-4 py-2.5 flex items-center gap-3 w-full sm:w-auto">
                <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                </div>
                <div>
                  <p className="text-slate-900 text-xs font-black leading-tight">100+ Brands Served</p>
                  <p className="text-slate-500 text-[10px] font-medium">Pan India Network</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ----------------------------------------------------
            REDESIGNED COMMITMENT & ACTION BLOCK (COMPACT SPACING)
           ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Inner Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-400 block mb-3">
                Our Guarantee & Focus
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                Engineered For Businesses Ready For Predictable Revenue
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-6">
                We make sure your business isn't losing valuable search traffic and local inquiries to competitors.
              </p>

              <div className="space-y-3 mb-2">
                {commitments.map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-center">
              <span className="text-[11px] font-black text-orange-400 uppercase tracking-[0.3em] mb-2 block">
                Take Action Today
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white leading-snug mb-4">
                Don't Let Competitors Steal Your Google Traffic
              </h4>
              <p className="text-xs text-slate-300 mb-6 font-medium">
                Get a comprehensive 100% free digital audit & strategy roadmap within 24 hours.
              </p>
              <AnimatedCTA
                text="Get Free Strategy Audit"
                tooltipText="Zero cost, total clarity."
                className="w-full sm:w-auto shadow-[0_8px_30px_rgb(249,115,22,0.3)]"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
