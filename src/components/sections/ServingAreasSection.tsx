"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Globe2, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Phone, Navigation } from "lucide-react";
import Link from "next/link";

const officeHubs = [
  {
    id: "lucknow",
    city: "Lucknow",
    role: "HEADQUARTERS & MAIN BRANCH",
    isHQ: true,
    badge: "MAIN BRANCH / HQ",
    badgeStyle: "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/20",
    description: "Our primary corporate office and digital growth hub commanding agency operations, SEO engineering, and core client strategy.",
    features: ["Primary Operations Center", "Search & Tech Leadership", "Dedicated Client Managers"],
    address: "Hazratganj & Gomti Nagar Hubs, Lucknow, UP",
    accentBg: "bg-orange-50/80 border-orange-200",
    glowColor: "from-orange-500/10 to-pink-500/10",
    link: "/lucknow",
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    role: "REGIONAL GROWTH HUB",
    isHQ: false,
    badge: "REGIONAL OFFICE",
    badgeStyle: "bg-blue-100 text-blue-700 border-blue-200",
    description: "Serving Chandigarh Tricity with high-impact local SEO, web development, and performance advertising.",
    features: ["Tricity Market Operations", "Local SEO & GMB Experts", "Client Support Hub"],
    address: "Sector 17 & IT Park Regional Office, Chandigarh",
    accentBg: "bg-blue-50/80 border-blue-200",
    glowColor: "from-blue-500/10 to-indigo-500/10",
    link: "/chandigarh",
  },
  {
    id: "mohali",
    city: "Mohali",
    role: "TECH & DIGITAL OPERATIONS",
    isHQ: false,
    badge: "TECH BRANCH",
    badgeStyle: "bg-indigo-100 text-indigo-700 border-indigo-200",
    description: "Specialized technical execution hub for Next.js web application development and AI marketing automation.",
    features: ["Web Engineering Hub", "AI & Automation Team", "Tricity Coverage"],
    address: "Sector 74 & Industrial Area Phase 8, Mohali, Punjab",
    accentBg: "bg-indigo-50/80 border-indigo-200",
    glowColor: "from-indigo-500/10 to-purple-500/10",
    link: "/mohali",
  },
];

const panIndiaCapabilities = [
  "Serving Clients Across 25+ States & Union Territories",
  "100% Remote Strategy & Virtual Dashboard Integration",
  "Pan-India Targeted Paid Ads & Local Ranking Coverage",
];

export function ServingAreasSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden" id="serving-areas">
      {/* Decorative Ambient Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/10 via-pink-500/10 to-transparent rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/10 via-indigo-500/10 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-800 text-[11px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            Our Offices & Coverage
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Physical Presence In 3 Key Hubs —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
              Serving Pan India.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
          >
            Headquartered in Lucknow with active operations in Chandigarh & Mohali, TopRank delivers high-velocity digital marketing and web engineering across the entire nation.
          </motion.p>
        </div>

        {/* 3 Office Hub Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {officeHubs.map((hub, index) => (
            <motion.div
              key={hub.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`group relative bg-white border ${
                hub.isHQ ? "border-orange-300 shadow-xl shadow-orange-500/10 ring-2 ring-orange-500/20" : "border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200"
              } rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
            >
              {/* Subtle top background glow */}
              <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${hub.isHQ ? "from-orange-500 via-pink-500 to-amber-500" : "from-blue-500 to-indigo-600"} opacity-90`} />

              <div>
                {/* Header & Badges */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${hub.isHQ ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30" : "bg-slate-100 text-slate-700"} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${hub.badgeStyle}`}>
                    {hub.badge}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 block mb-1">
                    {hub.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    {hub.city}
                    {hub.isHQ && <Sparkles className="w-5 h-5 text-orange-500 fill-orange-500 inline" />}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                  {hub.description}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-3 mb-6 pt-5 border-t border-slate-100">
                  {hub.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${hub.isHQ ? "text-orange-500" : "text-blue-500"}`} />
                      <span className="text-xs font-bold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[11px] font-bold text-slate-400 mb-4 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{hub.address}</span>
                </p>
                <Link
                  href={hub.link}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-between group/btn ${
                    hub.isHQ
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md hover:opacity-90"
                      : "bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-200"
                  }`}
                >
                  <span>Explore {hub.city} Hub</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pan India Coverage Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl border border-slate-800"
        >
          {/* Inner Glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-lg">
                <Globe2 className="w-8 h-8 text-orange-400 animate-spin-slow" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-400 block mb-1">
                  Nationwide Execution
                </span>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                  Not in Lucknow, Chandigarh or Mohali? We Serve Pan India.
                </h4>
                <p className="text-slate-400 text-sm font-medium mt-1">
                  Our remote systems, real-time dashboards, and virtual strategy calls ensure seamless delivery anywhere in India.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="shrink-0 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl active:scale-95 flex items-center gap-2"
            >
              Contact Pan India Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
