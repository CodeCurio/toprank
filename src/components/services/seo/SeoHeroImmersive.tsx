"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Search,
  ArrowRight,
  Star,
  Globe,
  TrendingUp,
  Zap,
  MapPin,
  MousePointerClick,
  Sparkles,
  MessageSquareText,
  Flame,
  Award,
  ArrowUpRight,
  Activity,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { usePhone } from "@/hooks/usePhone";

interface Scenario {
  id: string;
  tabLabel: string;
  icon: string;
  query: string;
  volume: string;
  difficulty: "High" | "Medium" | "Competitive";
  clientName: string;
  url: string;
  title: string;
  description: string;
  rating: string;
  reviews: string;
  trafficGrowth: string;
  monthlyVisitors: string;
  leadsThisMonth: string;
  ctr: string;
  rankTimeline: { month: string; rank: string; status: string }[];
  sitelinks: string[];
  recentLead: {
    name: string;
    location: string;
    service: string;
    time: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: "local-service",
    tabLabel: "Local SEO",
    icon: "📍",
    query: "Best Interior Designer in Lucknow",
    volume: "18.4k/mo",
    difficulty: "Competitive",
    clientName: "TopRank Lucknow Client (Interior Studio)",
    url: "toprankindia.com/clients/interior-lucknow",
    title: "#1 Luxury Interior Designers in Lucknow | 100+ Turnkey Projects",
    description: "Award-winning studio in Gomti Nagar & Hazratganj. 100% bespoke residential & commercial interiors. Ranked #1 in Google SERP & Maps.",
    rating: "4.9",
    reviews: "184 Reviews",
    trafficGrowth: "+340%",
    monthlyVisitors: "24.6k/mo",
    leadsThisMonth: "+78 High-Intent Calls",
    ctr: "32.4%",
    rankTimeline: [
      { month: "M1", rank: "#47", status: "Invisible" },
      { month: "M2", rank: "#12", status: "Page 2" },
      { month: "M3", rank: "#4", status: "Top 5" },
      { month: "M4", rank: "#1", status: "Rank #1 🏆" },
    ],
    sitelinks: ["View Portfolio", "Free Estimate", "3D Designs", "Reviews"],
    recentLead: {
      name: "Villa Owner",
      location: "Gomti Nagar",
      service: "Home Interior Project (₹25L+)",
      time: "12m ago",
    },
  },
  {
    id: "b2b-agency",
    tabLabel: "Corporate & B2B",
    icon: "🏢",
    query: "Top SEO Agency in Lucknow",
    volume: "12.2k/mo",
    difficulty: "High",
    clientName: "TopRank India™",
    url: "toprankindia.com/services/seo",
    title: "Top SEO Company in Lucknow: Guaranteed #1 Rank & Organic Leads",
    description: "Rank #1 for high-ticket commercial keywords. We engineer scalable client acquisition through aggressive technical & local SEO.",
    rating: "5.0",
    reviews: "150+ Reviews",
    trafficGrowth: "+480%",
    monthlyVisitors: "38.2k/mo",
    leadsThisMonth: "+114 Inquiries",
    ctr: "36.8%",
    rankTimeline: [
      { month: "M1", rank: "#38", status: "Unranked" },
      { month: "M2", rank: "#9", status: "Page 1" },
      { month: "M3", rank: "#2", status: "Top 3" },
      { month: "M4", rank: "#1", status: "Dominance 🚀" },
    ],
    sitelinks: ["Free Audit", "SEO Pricing", "Case Studies", "Contact"],
    recentLead: {
      name: "Healthcare MD",
      location: "Hazratganj",
      service: "Enterprise SEO & GMB Domination",
      time: "4m ago",
    },
  },
  {
    id: "healthcare",
    tabLabel: "Clinic & Healthcare",
    icon: "🩺",
    query: "Best Dental Implant Clinic Lucknow",
    volume: "9.6k/mo",
    difficulty: "Competitive",
    clientName: "Elite Smiles Clinic",
    url: "toprankindia.com/clients/elite-smiles",
    title: "Best Dental Clinic in Lucknow | Painless Implants & Root Canals",
    description: "Certified Multi-Specialty Dental Clinic in Aliganj & Indira Nagar. 100% pain-free treatments with same-day consultations.",
    rating: "4.9",
    reviews: "260+ Reviews",
    trafficGrowth: "+290%",
    monthlyVisitors: "19.8k/mo",
    leadsThisMonth: "+92 Appointments",
    ctr: "31.2%",
    rankTimeline: [
      { month: "M1", rank: "#52", status: "Zero Leads" },
      { month: "M2", rank: "#18", status: "Page 2" },
      { month: "M3", rank: "#5", status: "Top 5" },
      { month: "M4", rank: "#1", status: "Rank #1 🌟" },
    ],
    sitelinks: ["Book Visit", "Doctors", "Pricing / EMI", "Reviews"],
    recentLead: {
      name: "Patient",
      location: "Aliganj",
      service: "Full Mouth Implant Consult",
      time: "Just now",
    },
  },
];

export function SeoHeroImmersive() {
  const phone = usePhone();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [typedQuery, setTypedQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const scenario = SCENARIOS[activeTab];

  // Auto-switch scenario every 7 seconds if not manually paused
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % SCENARIOS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Typing effect on query change
  useEffect(() => {
    let index = 0;
    const currentQuery = scenario.query;
    setTypedQuery("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index <= currentQuery.length) {
        setTypedQuery(currentQuery.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 35);

    return () => clearInterval(typeInterval);
  }, [activeTab, scenario.query]);

  return (
    <section className="relative pt-36 pb-14 sm:pt-40 sm:pb-16 lg:pt-36 lg:pb-14 xl:pt-40 xl:pb-16 bg-slate-950 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,black_30%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Grid: Left Value Pitch vs Right Live SEO Simulation Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: High-Impact Copy & Proof Points (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Super Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/25 rounded-full shadow-md shadow-blue-500/5 backdrop-blur-md"
            >
              <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              <span className="text-blue-300 font-bold text-xs uppercase tracking-wider">
                #1 Organic Growth & SEO Agency in Lucknow
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.35rem] font-black text-white leading-[1.1] tracking-tight"
            >
              Rank #1 on Google. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">
                Capture 80% of Market Revenue.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl"
            >
              Being on Page 2 is like having a store in the middle of a desert. We engineer high-authority technical SEO, aggressive local map pack domination, and revenue-focused keyword ranking that brings paying customers directly to you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <Link
                href="/contact"
                className="group relative px-7 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black rounded-xl text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <span>Claim Free SEO Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href={`https://wa.me/91${phone.raw}?text=Hi%20TopRank,%20I%20want%20to%20rank%20my%20business%20%231%20on%20Google.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/60 font-bold rounded-xl text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/5 hover:-translate-y-0.5"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <MessageSquareText className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </Link>
            </motion.div>

            {/* Micro Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-5 border-t border-slate-800/80 grid grid-cols-3 gap-3"
            >
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  98.4<span className="text-blue-400 text-base">%</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">Page 1 Keywords</div>
              </div>

              <div className="space-y-0.5 border-x border-slate-800/60 px-3">
                <div className="text-xl sm:text-2xl font-black text-emerald-400 tracking-tight">
                  +340<span className="text-emerald-500 text-base">%</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">Avg Traffic Surge</div>
              </div>

              <div className="space-y-0.5 pl-1">
                <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
                  5.8<span className="text-amber-500 text-base">x</span>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">Average ROI</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Live SERP #1 Rank Simulation Engine (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            {/* Top Bar: Case Switcher + Integrated Live Metrics */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 hidden sm:inline mr-1">
                  Live Case:
                </span>
                {SCENARIOS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(idx);
                      setIsAutoPlay(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border ${
                      activeTab === idx
                        ? "bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/25"
                        : "bg-slate-900/80 text-slate-400 hover:text-white border-slate-800 hover:bg-slate-800"
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.tabLabel}</span>
                    {activeTab === idx && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse ml-0.5" />
                    )}
                  </button>
                ))}
              </div>

              {/* Integrated Traffic Badge */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs text-slate-300">
                <MousePointerClick className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-slate-400 font-medium">Vol:</span>
                <span className="font-bold text-white">{scenario.volume}</span>
                <span className="text-emerald-400 font-bold ml-1">{scenario.monthlyVisitors}</span>
              </div>
            </div>

            {/* Main Interactive Browser Terminal */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
              
              {/* Browser Window Chrome Top */}
              <div className="px-4 py-2.5 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 font-mono hidden sm:inline ml-2">
                    Google Search Engine Simulation
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    <Activity className="w-3 h-3 animate-pulse" /> Live Algorithmic Scan
                  </span>
                </div>
              </div>

              {/* Google Search Bar Mockup */}
              <div className="px-4 py-3 bg-slate-950/40 border-b border-slate-800/60">
                <div className="relative flex items-center w-full bg-slate-900 border border-blue-500/30 rounded-xl px-3.5 py-2.5 shadow-inner shadow-black/40">
                  <div className="flex items-center gap-1 mr-3 select-none text-sm font-black">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-amber-400">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-emerald-500">l</span>
                    <span className="text-red-500">e</span>
                  </div>

                  <div className="flex-1 flex items-center font-mono text-xs sm:text-sm text-white font-medium overflow-hidden">
                    <Search className="w-3.5 h-3.5 text-blue-400 mr-2 shrink-0" />
                    <span className="text-slate-100 truncate">{typedQuery}</span>
                    {isTyping && (
                      <span className="inline-block w-1.5 h-3.5 bg-blue-400 ml-0.5 animate-pulse" />
                    )}
                  </div>

                  <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                    <div className="w-6 h-6 rounded-md bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white cursor-pointer shadow-sm shadow-blue-600/30">
                      <Search className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* SERP Results Container */}
              <div className="p-4 sm:p-5 space-y-3.5">
                
                {/* 🏆 THE #1 TOP RANK WINNER CARD */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={scenario.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-gradient-to-br from-slate-900 via-slate-900/95 to-blue-950/40 rounded-xl p-4 sm:p-4.5 border-2 border-blue-500/50 shadow-lg shadow-blue-950/40 overflow-hidden"
                  >
                    {/* Top Rank Badge Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-wider rounded flex items-center gap-1 shadow-sm">
                          <Award className="w-3 h-3" /> Position #1 (Top Organic)
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold rounded flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> CTR: {scenario.ctr}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Growth: <b className="text-emerald-400">{scenario.trafficGrowth}</b></span>
                      </div>
                    </div>

                    {/* Verified URL */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <Globe className="w-2 h-2" />
                      </div>
                      <span className="text-blue-400 font-bold hover:underline cursor-pointer truncate">
                        {scenario.url}
                      </span>
                      <span className="text-slate-600 text-[11px] hidden sm:inline">› rank-1</span>
                    </div>

                    {/* SERP Title */}
                    <h3 className="text-base sm:text-lg font-black text-blue-300 leading-snug mb-1.5 underline decoration-blue-500/40 underline-offset-2 line-clamp-1">
                      {scenario.title}
                    </h3>

                    {/* Rich Review Rating Stars */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-medium mb-2">
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="font-bold text-white text-xs">{scenario.rating}</span>
                      <span className="text-slate-400 text-[11px]">({scenario.reviews})</span>
                      <span className="text-slate-600 hidden sm:inline">•</span>
                      <span className="text-emerald-400 font-bold text-[11px] flex items-center gap-0.5">
                        <Zap className="w-3 h-3" /> 100/100 Core Web Vitals
                      </span>
                    </div>

                    {/* Snippet Description */}
                    <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-3 line-clamp-2">
                      {scenario.description}
                    </p>

                    {/* Sitelinks Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2.5 border-t border-slate-800/80">
                      {scenario.sitelinks.map((link, i) => (
                        <div
                          key={i}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-[11px] font-bold text-blue-400 flex items-center justify-between cursor-pointer hover:border-blue-500/40 transition-colors"
                        >
                          <span className="truncate">{link}</span>
                          <ArrowUpRight className="w-2.5 h-2.5 text-slate-500 shrink-0 ml-1" />
                        </div>
                      ))}
                    </div>

                    {/* Live Lead Notification inside Card */}
                    <div className="mt-3 p-2.5 bg-gradient-to-r from-emerald-950/50 to-slate-950/80 border border-emerald-500/30 rounded-lg flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <div className="relative shrink-0">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        </div>
                        <span className="text-slate-300 truncate text-[11px] sm:text-xs">
                          <strong className="text-emerald-300">Live SEO Lead:</strong> "{scenario.recentLead.service}"
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono shrink-0">
                        {scenario.recentLead.location} • {scenario.recentLead.time}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* 📊 Animated 4-Month Ranking Progression Tracker */}
                <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      TopRank SEO Roadmap
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Google 3-Pack: #1 in Lucknow
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 pt-0.5">
                    {scenario.rankTimeline.map((step, idx) => (
                      <div
                        key={idx}
                        className={`p-2 rounded-lg border text-center transition-all ${
                          idx === 3
                            ? "bg-blue-600/20 border-blue-500/60 shadow-sm shadow-blue-500/10"
                            : "bg-slate-900/60 border-slate-800/60"
                        }`}
                      >
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                          {step.month}
                        </div>
                        <div
                          className={`text-sm sm:text-base font-black leading-tight ${
                            idx === 3 ? "text-amber-400" : "text-slate-300"
                          }`}
                        >
                          {step.rank}
                        </div>
                        <div className="text-[9px] font-medium text-slate-400 truncate">
                          {step.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}



