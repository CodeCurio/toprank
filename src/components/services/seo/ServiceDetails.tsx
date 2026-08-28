"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Search,
  Settings,
  MapPin,
  BarChart3,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  TrendingUp,
  Award,
  Layers,
  Target,
  Link2
} from "lucide-react";
import Link from "next/link";

interface ServiceDetailsProps {
  locationName?: string;
}

interface Pillar {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  kpi: string;
  icon: typeof Search;
  color: string;
  borderColor: string;
  bgGlow: string;
  headline: string;
  fullDesc: string;
  deliverables: { title: string; desc: string }[];
  impact: string;
  metricLabel: string;
  metricValue: string;
}

export function ServiceDetails({ locationName = "Lucknow" }: ServiceDetailsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  const PILLARS: Pillar[] = [
    {
      id: "keyword-intent",
      number: "01",
      title: "Keyword & Search Intent Intelligence",
      shortDesc: "High-intent transactional keyword clustering & competitor gap analysis.",
      kpi: "Top 1% Intent",
      icon: Target,
      color: "text-blue-400",
      borderColor: "border-blue-500/40",
      bgGlow: "from-blue-600/10",
      headline: "Stop ranking for useless vanity keywords that bring zero paying clients.",
      fullDesc: `We analyze search volumes across ${locationName} and nationwide to target strictly high-intent transactional queries. We map your prospective customers' exact search journey so you capture buyers at the exact moment of decision.`,
      deliverables: [
        { title: "Competitor Search Gap Audit", desc: "Reverse-engineering top 5 competitors to seize their highest-yielding keywords." },
        { title: "Commercial Intent Clustering", desc: "Grouping queries by purchase intent to prevent keyword cannibalization." },
        { title: "Search Volume & ROI Mapping", desc: "Prioritizing keywords with the lowest difficulty and highest client value." }
      ],
      impact: "Attracts high-value decision makers ready to buy, not casual browsers.",
      metricLabel: "Target Keyword Conversion",
      metricValue: "+320%"
    },
    {
      id: "technical-seo",
      number: "02",
      title: "Technical SEO & Speed Architecture",
      shortDesc: "Sub-0.5s Core Web Vitals, clean crawlability & Next.js SSR engine.",
      kpi: "100/100 Vitals",
      icon: Zap,
      color: "text-amber-400",
      borderColor: "border-amber-500/40",
      bgGlow: "from-amber-600/10",
      headline: "A slow, broken website will never be prioritized by Google algorithms.",
      fullDesc: `We optimize your website's entire core architecture—from sub-second server responses and asset compression to dynamic XML sitemaps and clean canonical structures. Google bots can crawl and index your pages effortlessly.`,
      deliverables: [
        { title: "Core Web Vitals Optimization", desc: "Ensuring LCP < 0.6s, INP < 15ms, and 0.00 Cumulative Layout Shift." },
        { title: "JSON-LD Entity Schema Injection", desc: "Giving Google AI structured data for Rich Snippets & Knowledge Graphs." },
        { title: "Crawl Budget & Indexation Fixes", desc: "Eliminating 404 errors, redirect loops, and server-side bottlenecks." }
      ],
      impact: "Enables instant Google indexation and drastically slashes mobile bounce rates.",
      metricLabel: "Page Load Speed",
      metricValue: "0.48s"
    },
    {
      id: "local-gmb",
      number: "03",
      title: "Hyper-Local GMB & 3-Pack Domination",
      shortDesc: "Google Business Profile supremacy for high-converting 'near me' calls.",
      kpi: "#1 Map Spot",
      icon: MapPin,
      color: "text-emerald-400",
      borderColor: "border-emerald-500/40",
      bgGlow: "from-emerald-600/10",
      headline: `Dominate the Google 3-Pack in ${locationName} where 70% of local clicks go.`,
      fullDesc: `For businesses serving ${locationName}, Google Maps is your primary lead engine. We optimize your Google Business Profile, build localized geo-citations, and implement automated review acquisition to establish local dominance.`,
      deliverables: [
        { title: "Google My Business Optimization", desc: "Complete profile restructuring with primary and secondary category precision." },
        { title: "Geo-Targeted Local Citations", desc: "100% NAP (Name, Address, Phone) consistency across top Indian directories." },
        { title: "Local Review Velocity Engine", desc: "Ethical review growth systems that build 5-star Google social proof fast." }
      ],
      impact: "Drives direct phone calls, map directions, and in-person foot traffic daily.",
      metricLabel: "Local Call Inquiries",
      metricValue: "3.8x More"
    },
    {
      id: "authority-backlinks",
      number: "04",
      title: "Semantic Authority & High-DR Backlinks",
      shortDesc: "Editorial white-hat backlinks and contextual domain power building.",
      kpi: "DR 50+ Moat",
      icon: Link2,
      color: "text-purple-400",
      borderColor: "border-purple-500/40",
      bgGlow: "from-purple-600/10",
      headline: "Build an untouchable domain moat that competitors cannot overtake.",
      fullDesc: `Backlinks remain Google's #1 trust signal. We earn high-authority editorial links from industry-leading publications and regional news outlets, permanently solidifying your #1 position at the top of search engine results.`,
      deliverables: [
        { title: "High-Authority Editorial PR", desc: "Publishing thought-leadership placements on high Domain Rating (DR) media." },
        { title: "Topical Cluster Link Weaving", desc: "Internal semantic linking that cascades ranking power across all service pages." },
        { title: "100% White-Hat Assurance", desc: "Strict adherence to Google Search Essentials—zero risky PBNs or spam links." }
      ],
      impact: "Permanently cements your #1 spot and protects you from algorithm updates.",
      metricLabel: "Domain Authority Moat",
      metricValue: "Top 1%"
    }
  ];

  const pillar = PILLARS[activeTab];

  // Auto-switch tabs every 6.5s
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % PILLARS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoPlay, PILLARS.length]);

  return (
    <section className="py-20 lg:py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800/80 flex flex-col justify-center lg:min-h-[calc(100vh-5rem)]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-blue-400" /> Complete 4-Pillar SEO Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              The Engine Behind <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">
                Guaranteed #1 Rankings.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-400 font-medium max-w-md">
            No guesswork, black-hat tricks, or vanity metrics. A scientific, four-tier organic growth framework engineered to outrank competitors and capture market revenue.
          </p>
        </div>

        {/* Interactive 4-Pillar Cockpit (Fits in single viewport) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Interactive Pillar Selectors (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            {PILLARS.map((item, idx) => {
              const isActive = activeTab === idx;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(idx);
                    setIsAutoPlay(false);
                  }}
                  className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? "bg-slate-900 border-blue-500/50 shadow-xl shadow-blue-950/40"
                      : "bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activePillarBar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500"
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                      isActive
                        ? "bg-blue-600/20 border-blue-500/40 text-blue-400"
                        : "bg-slate-900 border-slate-800 text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-[10px] font-mono font-bold text-slate-500">
                        PILLAR {item.number}
                      </span>
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                          isActive
                            ? "bg-blue-500/15 text-blue-400 border border-blue-500/30"
                            : "bg-slate-900 text-slate-400"
                        }`}
                      >
                        {item.kpi}
                      </span>
                    </div>

                    <h3
                      className={`text-sm sm:text-base font-black transition-colors truncate ${
                        isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-normal line-clamp-1 mt-0.5">
                      {item.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Pillar Execution Blueprint (7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="h-full bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl shadow-black/60 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl"
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-b ${pillar.bgGlow} to-transparent blur-3xl rounded-full pointer-events-none`} />

                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Phase {pillar.number} • Strategic Execution
                    </span>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                      <span className="text-slate-400 font-medium">{pillar.metricLabel}:</span>
                      <span className="font-black text-emerald-400 font-mono text-sm">{pillar.metricValue}</span>
                    </div>
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white leading-snug mb-3">
                    {pillar.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {pillar.fullDesc}
                  </p>

                  {/* Key Deliverables Grid */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                      Core Engineering Deliverables:
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {pillar.deliverables.map((del, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-1"
                        >
                          <div className="text-xs font-bold text-slate-100 flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                            <span className="truncate">{del.title}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                            {del.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Impact & Action Strip */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong className="text-white">Business Impact:</strong> {pillar.impact}</span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-colors shrink-0 shadow-md shadow-blue-600/20"
                  >
                    <span>Get Strategy Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

