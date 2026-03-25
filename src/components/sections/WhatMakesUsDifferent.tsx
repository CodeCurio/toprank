"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, TrendingUp, MapPin, MessageSquare, Globe, ArrowRight } from "lucide-react";
import { AnimatedCTA } from "@/components/ui/animated-cta";

const differentiators = [
  {
    icon: TrendingUp,
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    title: "SEO That Puts You on Top",
    desc: "Rank on Page 1 of Google for high-intent keywords your customers are already searching for.",
  },
  {
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    title: "Websites Built to Convert",
    desc: "Not just beautiful — every element is engineered to turn a visitor into a paying customer.",
  },
  {
    icon: MapPin,
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    title: "Google My Business Domination",
    desc: "Appear in the local map pack, own your area, and capture customers the moment they search.",
  },
  {
    icon: MessageSquare,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    title: "WhatsApp & Funnel Automation",
    desc: "Systems that capture every enquiry automatically — day or night — so no lead slips through.",
  },
];

const audiences = [
  { icon: "👉", text: "Bring you more qualified leads" },
  { icon: "👉", text: "Increase your visibility in your area" },
  { icon: "👉", text: "Turn your online presence into a revenue-generating asset" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

export function WhatMakesUsDifferent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-50 overflow-hidden pt-24 pb-12 md:pt-36 md:pb-20"
      id="what-makes-us-different"
    >
      {/* Ambient orbs — same style as Hero */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-orange-400/10 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-pink-500/10 blur-[130px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-full text-slate-500 text-[11px] font-black uppercase tracking-[0.4em] mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Our Edge
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-4">
            What Makes Us{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Different?
            </span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4">
            Most agencies stop at rankings.{" "}
            <span className="text-slate-900 font-semibold">We go further.</span>
          </p>
          <p className="text-slate-500 text-base max-w-xl mx-auto mt-2 leading-relaxed">
            We build your complete digital presence — so your business doesn't just grow, it becomes{" "}
            <span className="text-slate-700 font-medium">predictable and scalable.</span>
          </p>
        </motion.div>

        {/* Main Grid: Feature Cards + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-28">

          {/* Left: Feature Cards */}
          <motion.div
            variants={containerVariants}
            initial={false}
            animate={mounted ? { opacity: 1 } : { opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group p-5 rounded-2xl border ${item.border} bg-white hover:bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <h3 className="text-slate-900 font-bold text-[15px] leading-snug mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={false}
            animate={mounted && isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[3/2] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)] border-[5px] border-white"
          >
            <Image
              src="/images/how_to_rank_higher_in_google.jpg"
              alt="How to rank higher in Google — TopRank Digital Service"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Subtle overlay so floating cards always readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none z-10" />

            {/* Floating stat card — bottom left */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-5 left-5 z-20 bg-white/95 backdrop-blur-md border border-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-slate-900 text-sm font-black leading-tight">+82% Avg. Traffic Growth</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Across active clients · 2024</p>
              </div>
            </motion.div>

            {/* Floating stat card — top right */}
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="absolute top-5 right-5 z-20 bg-white/95 backdrop-blur-md border border-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] rounded-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <p className="text-slate-900 text-sm font-black leading-tight">100+ Clients Served</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Across Lucknow &amp; Chandigarh</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Built For Section */}
            <motion.div
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : { y: 32 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-20 md:mb-28 border-t border-slate-200/60 pt-16 md:pt-24"
          >
          <div>
            <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
              Built for Local Businesses{" "}
              <span className="text-slate-500">That Want Real Growth</span>
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Whether you're a clinic, service provider, or local brand — our focus is simple.
            </p>
            <div className="space-y-4">
              {audiences.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 border border-orange-200 flex items-center justify-center text-lg">
                    {a.icon}
                  </div>
                  <p className="text-slate-700 font-semibold text-base group-hover:text-slate-900 transition-colors">{a.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Conversion Block */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-pink-50/50 to-blue-50/50 p-8 md:p-10 relative overflow-hidden shadow-sm"
          >
            {/* Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl pointer-events-none" />
            <p className="text-[13px] font-black text-orange-500 uppercase tracking-[0.4em] mb-5">Remember This</p>
            <h4 className="text-xl md:text-2xl font-black text-slate-900 leading-snug mb-5">
              If your business isn't showing up on Google, you're losing customers{" "}
              <span className="italic text-orange-500">every single day.</span>
            </h4>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              We make sure that never happens. With TopRank, your digital presence works as hard as you do — 24/7.
            </p>
            <AnimatedCTA
              text="Get Free Audit"
              tooltipText="Zero cost, total clarity."
              className="w-full sm:w-auto shadow-[0_8px_30px_rgb(249,115,22,0.25)]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
