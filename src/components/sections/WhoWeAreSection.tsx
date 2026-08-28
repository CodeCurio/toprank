"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Target,
  Zap,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Users,
  Rocket,
  BarChart3,
  PhoneCall,
  MessageSquare,
  Building2,
  MapPin,
  Clock,
  Flame,
  Check,
  X,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import { AnimatedCTA } from "@/components/ui/animated-cta";
import Link from "next/link";

const comparisonData = {
  traditional: [
    "Vanity metrics: Impressions & clicks that never convert into real cash",
    "Bloated, slow WordPress templates taking 5+ seconds to load",
    "Hidden fees, lock-in contracts, and vague monthly spreadsheets",
    "Automated support tickets with days of waiting for responses",
  ],
  toprank: [
    "Real business outcomes: High-ticket inquiries, phone calls & revenue",
    "Sub-second Next.js web portals engineered for sub-second mobile conversion",
    "100% transparent pricing with live tracking dashboards & zero lock-ins",
    "Direct WhatsApp & phone access to your dedicated growth engineers",
  ],
};

const pillars = [
  {
    icon: Target,
    number: "01",
    tag: "Search Dominance",
    title: "Hyper-Local & National Organic Dominance",
    description:
      "We don't guess with keywords. We analyze real buyer intent so your business captures the #1 Google Maps 3-Pack and organic search spot when high-paying clients are ready to buy.",
    highlight: "Capture 'Near Me' high-intent buyers before competitors do",
    iconBg: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    gradient: "from-orange-500/10 via-transparent to-transparent",
  },
  {
    icon: Zap,
    number: "02",
    tag: "High-Velocity Engineering",
    title: "Sub-Second Portals That Turn Visitors Into Clients",
    description:
      "No slow, bloated templates. We build custom Next.js web applications that load in under 1 second, pass every Core Web Vital, and guide users effortlessly toward taking action.",
    highlight: "Slashing bounce rates and boosting conversions by up to 2.4x",
    iconBg: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    gradient: "from-blue-500/10 via-transparent to-transparent",
  },
  {
    icon: ShieldCheck,
    number: "03",
    tag: "Lead Automation",
    title: "Instant Lead Routing & WhatsApp Automation",
    description:
      "The second a prospect inquires, our automated funnels instantly ping your phone and dispatch WhatsApp confirmations so you never lose a hot deal to slow response times.",
    highlight: "Respond in under 60 seconds and double inquiry-to-booking rates",
    iconBg: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    gradient: "from-emerald-500/10 via-transparent to-transparent",
  },
];

const stats = [
  { label: "Search Visibility", value: "99.4%", icon: BarChart3, color: "text-orange-500", sub: "Google 3-Pack Authority" },
  { label: "Brands Scaled", value: "100+", icon: Users, color: "text-blue-500", sub: "Across UP & Punjab" },
  { label: "Avg. ROI Expansion", value: "3.4x", icon: Rocket, color: "text-emerald-500", sub: "Documented In Case Studies" },
  { label: "Client Satisfaction", value: "4.9/5 ★", icon: Award, color: "text-amber-500", sub: "Verified Reviews" },
];

export function WhoWeAreSection() {
  const [activeTab, setActiveTab] = useState<"pillars" | "difference">("pillars");

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/60 to-white py-20 md:py-28 lg:py-32 overflow-hidden" id="who-we-are">
      
      {/* Decorative Ambient Glowing Orbs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/10 via-pink-500/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 via-indigo-500/10 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge & Headline */}
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-18">
          
          {/* Conversational Live Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-sm mb-6"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-black text-slate-700 uppercase tracking-widest">
              Real People · Real Results · No Fluff
            </span>
          </motion.div>

          {/* Eye-catching Display Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6"
          >
            We Are TopRank —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
              Engineering Digital Growth
            </span>{" "}
            For Ambitious Brands.
          </motion.h2>

          {/* Humanized Relatable Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Tired of agencies that celebrate "impressions" while your phone stays quiet? We build predictable customer acquisition engines — ranking you <strong className="text-slate-900 font-bold">#1 where local buyers search</strong>, building sub-second high-converting websites, and delivering qualified inquiries directly to your sales team.
          </motion.p>

          {/* Interactive Mode Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 inline-flex shadow-inner">
              <button
                onClick={() => setActiveTab("pillars")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                  activeTab === "pillars"
                    ? "bg-white text-slate-900 shadow-md shadow-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                ⚡ How We Build Growth
              </button>
              <button
                onClick={() => setActiveTab("difference")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 ${
                  activeTab === "difference"
                    ? "bg-white text-slate-900 shadow-md shadow-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>The TopRank Difference</span>
                <span className="px-1.5 py-0.5 rounded-md bg-rose-100 text-rose-600 text-[10px] font-bold">Vs Others</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: How We Build Growth (3 Pillars & Core Philosophy Card) */}
        {activeTab === "pillars" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16 md:mb-20"
          >
            
            {/* Left Column: Human Commitment Card (5 Cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl border border-slate-800 flex flex-col justify-between">
              
              {/* Ambient Glows */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner">
                    <HeartHandshake className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full border border-orange-500/30">
                    Our Direct Promise
                  </span>
                </div>

                <div>
                  <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-400 block mb-2">
                    Human-First Growth
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                    "If it doesn't generate real revenue, we don't consider it success."
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  We don't hide behind account managers or technical jargon. When you partner with TopRank, you work directly with experienced search engineers and conversion specialists based out of our <strong className="text-white">Lucknow HQ</strong> and <strong className="text-white">Chandigarh Hub</strong>.
                </p>

                {/* Direct Proof Bullets */}
                <div className="space-y-3 pt-2">
                  {[
                    "Zero copy-paste generic templates",
                    "Real-time transparent ROI & ranking analytics",
                    "Direct WhatsApp channel with your lead strategist",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Quick Contact Action */}
              <div className="relative z-10 pt-8 mt-8 border-t border-slate-800 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/919115439115?text=Hi%20TopRank,%20I%20want%20to%20discuss%20scaling%20my%20business%20growth."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/about"
                  className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Our Story
                </Link>
              </div>

            </div>

            {/* Right Column: 3 Pillars (7 Cols) */}
            <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-slate-200/90 hover:border-blue-300 p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-5">
                    
                    <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} border flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <pillar.icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-2 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">
                          {pillar.number} · {pillar.tag}
                        </span>
                      </div>

                      <h4 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                        {pillar.title}
                      </h4>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        {pillar.description}
                      </p>

                      <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-blue-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{pillar.highlight}</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        )}

        {/* Tab 2: The TopRank Difference (Vs Traditional Agencies) */}
        {activeTab === "difference" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-16 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            
            {/* Traditional Agency Card */}
            <div className="p-7 sm:p-9 rounded-3xl bg-rose-50/40 border border-rose-200/80 shadow-sm space-y-6">
              <div className="flex items-center gap-3 text-rose-600 border-b border-rose-200 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Traditional Digital Agencies</h3>
                  <p className="text-xs text-rose-600 font-semibold">The broken status quo</p>
                </div>
              </div>

              <ul className="space-y-4">
                {comparisonData.traditional.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <span className="w-5 h-5 rounded-full bg-rose-200/80 text-rose-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The TopRank Advantage Card */}
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-blue-500/30 text-white shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 border-b border-slate-800 pb-4 relative z-10">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-400 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">The TopRank Growth Engine</h3>
                  <p className="text-xs text-emerald-400 font-semibold">Engineered for direct profit</p>
                </div>
              </div>

              <ul className="space-y-4 relative z-10">
                {comparisonData.toprank.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 font-medium">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        )}

        {/* Live Numbers & Verified Milestones Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}>
              <div className="flex items-center gap-2 mb-1">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wider mb-0.5">
                {stat.label}
              </span>
              <span className="text-[11px] font-semibold text-slate-400">
                {stat.sub}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Conversational Bottom Action Bar (High-Conversion Connect Box) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-2xl shadow-blue-500/25 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold mb-1 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Ready for measurable growth?</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
              Let's Audit Your Search &amp; Website Performance For Free
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm max-w-xl font-medium">
              We'll review your local Google Maps visibility, keyword gaps, and conversion bottlenecks — with zero obligation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <AnimatedCTA
              text="Claim Free Growth Audit"
              tooltipText="Zero cost, full roadmap"
              icon={<ArrowRight className="w-5 h-5" />}
              className="shadow-xl bg-white !text-slate-900 hover:!bg-slate-100"
              href="/contact"
            />

            <a
              href="tel:+919115439115"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950/40 hover:bg-slate-950/60 text-white text-sm font-bold backdrop-blur-md border border-white/20 transition-all hover:scale-105"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>+91 91154 39115</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
