"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Zap, ShieldCheck, Award, ArrowRight, CheckCircle2, Users, Rocket, BarChart3 } from "lucide-react";
import { AnimatedCTA } from "@/components/ui/animated-cta";
import Link from "next/link";

const pillars = [
  {
    icon: Target,
    title: "Data-Driven Precision",
    description: "We don't guess. Every strategy is backed by deep keyword intelligence, competitor benchmarking, and user intent analysis.",
    iconBg: "bg-orange-50 text-orange-500 border-orange-200",
    gradient: "from-orange-500/10 via-transparent to-transparent",
  },
  {
    icon: Zap,
    title: "High-Speed Web Architecture",
    description: "We build custom Next.js web applications engineered for sub-second page loads, maximum Core Web Vitals, and flawless mobile CRO.",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    gradient: "from-blue-500/10 via-transparent to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Transparency",
    description: "Real-time performance tracking, clean monthly attribution reports, and zero hidden fees. You see exact ROI on every rupee spent.",
    iconBg: "bg-pink-50 text-pink-500 border-pink-200",
    gradient: "from-pink-500/10 via-transparent to-transparent",
  },
];

const stats = [
  { label: "Search Visibility", value: "99.4%", icon: BarChart3, color: "text-orange-500" },
  { label: "Active Brands Served", value: "100+", icon: Users, color: "text-blue-600" },
  { label: "Avg. ROI Expansion", value: "3.4x", icon: Rocket, color: "text-pink-500" },
  { label: "Client Satisfaction", value: "5.0 ★", icon: Award, color: "text-amber-500" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function WhoWeAreSection() {
  return (
    <section className="relative bg-white py-20 md:py-28 lg:py-32 overflow-hidden" id="who-we-are">
      {/* Decorative Ambient Glowing Orbs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-400/10 to-pink-500/10 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 to-indigo-500/10 rounded-full blur-[130px] transform -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 border border-slate-200/80 text-slate-600 text-[11px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Who We Are
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            We Are TopRank —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
              Engineering Digital Growth
            </span>{" "}
            For Ambitious Brands.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
          >
            We are not a typical marketing agency that focuses on vanity metrics. We build predictable customer acquisition engines combining organic search dominance, modern web UX, and high-ROI conversion funnels.
          </motion.p>
        </div>

        {/* 2-Column Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 md:mb-24">
          
          {/* Left Column: Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl border border-slate-700/50"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-orange-400" />
              </div>

              <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-400 mb-3 block">
                Our Core Philosophy
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-6">
                Traffic is meaningless if it doesn't translate into profit.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                Our team of search engineers, UX designers, and growth strategists focus strictly on the metrics that build long-term business equity: high-intent inquiries, local search dominance, and low customer acquisition costs.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "No generic, copy-paste templates",
                  "100% transparent live performance dashboards",
                  "Engineered for local, regional & national scale",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-white text-slate-900 px-6 py-3.5 rounded-xl hover:bg-slate-100 transition-all shadow-lg active:scale-95"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 3 Pillars Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-5"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white border border-slate-200/80 hover:border-blue-200 p-6 sm:p-8 rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Hover subtle gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5">
                  <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} border flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}>
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <AnimatedCTA
            text="Get Free Audit & Strategy"
            tooltipText="Zero cost, complete roadmap"
            icon={<ArrowRight className="w-5 h-5" />}
            className="shadow-[0_8px_30px_rgb(59,130,246,0.25)]"
          />
        </motion.div>

      </div>
    </section>
  );
}
