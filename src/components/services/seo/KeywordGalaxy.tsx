"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Target,
  Search,
  Share2,
  BarChart3,
  Rocket,
  Sparkles,
  Zap,
  Globe,
  TrendingUp,
  MapPin,
  Bot,
  Award,
  CheckCircle2
} from "lucide-react";

interface KeywordNode {
  id: string;
  query: string;
  category: "commercial" | "local" | "informational" | "ai";
  volume: string;
  rank: string;
  ctr: string;
  x: number; // percentage or offset
  y: number;
  orbit: 1 | 2 | 3;
  color: string;
}

const KEYWORD_NODES: KeywordNode[] = [
  // Orbit 1: High-Intent Commercial (Inner Core)
  { id: "kw1", query: "Best SEO Agency in Lucknow", category: "commercial", volume: "18.4k", rank: "#1", ctr: "36.2%", x: -180, y: -90, orbit: 1, color: "from-blue-500 to-indigo-600" },
  { id: "kw2", query: "Top SEO Company Near Me", category: "commercial", volume: "14.2k", rank: "#1", ctr: "34.8%", x: 190, y: -80, orbit: 1, color: "from-blue-500 to-indigo-600" },
  { id: "kw3", query: "Hire Dedicated SEO Specialist", category: "commercial", volume: "8.6k", rank: "#2", ctr: "28.4%", x: -160, y: 110, orbit: 1, color: "from-blue-500 to-indigo-600" },
  { id: "kw4", query: "E-Commerce SEO Services India", category: "commercial", volume: "22.5k", rank: "#1", ctr: "38.1%", x: 170, y: 100, orbit: 1, color: "from-blue-500 to-indigo-600" },

  // Orbit 2: Local & Geo-Targeted Queries (Middle Ring)
  { id: "kw5", query: "GMB Map 3-Pack Optimization", category: "local", volume: "9.8k", rank: "#1", ctr: "41.5%", x: -310, y: -40, orbit: 2, color: "from-emerald-500 to-teal-600" },
  { id: "kw6", query: "Local Business SEO Lucknow", category: "local", volume: "11.3k", rank: "#1", ctr: "37.0%", x: 310, y: -30, orbit: 2, color: "from-emerald-500 to-teal-600" },
  { id: "kw7", query: "Digital Marketing Hazratganj", category: "local", volume: "6.4k", rank: "#1", ctr: "39.2%", x: -260, y: 170, orbit: 2, color: "from-emerald-500 to-teal-600" },
  { id: "kw8", query: "SEO Agency Gomti Nagar", category: "local", volume: "7.8k", rank: "#1", ctr: "35.6%", x: 270, y: 160, orbit: 2, color: "from-emerald-500 to-teal-600" },

  // Orbit 3: AI, SGE & Informational Authority (Outer Ring)
  { id: "kw9", query: "Google Core Algorithm Recovery", category: "informational", volume: "15.9k", rank: "#1", ctr: "29.4%", x: -280, y: -190, orbit: 3, color: "from-purple-500 to-pink-600" },
  { id: "kw10", query: "Sub-Second Core Web Vitals Fix", category: "informational", volume: "12.7k", rank: "#1", ctr: "31.8%", x: 290, y: -180, orbit: 3, color: "from-purple-500 to-pink-600" },
  { id: "kw11", query: "AI Overviews & SGE Optimization", category: "ai", volume: "16.4k", rank: "#1", ctr: "42.0%", x: 0, y: -230, orbit: 3, color: "from-amber-500 to-orange-600" },
  { id: "kw12", query: "Top Rated Digital Agency with High ROI", category: "ai", volume: "10.1k", rank: "#1", ctr: "33.5%", x: 0, y: 220, orbit: 3, color: "from-amber-500 to-orange-600" },
];

const CATEGORIES = [
  { id: "all", label: "Entire Keyword Universe", icon: Sparkles },
  { id: "commercial", label: "Commercial Intent", icon: Target },
  { id: "local", label: "Local & Map 3-Pack", icon: MapPin },
  { id: "informational", label: "Technical & Informational", icon: Zap },
  { id: "ai", label: "AI Search & SGE", icon: Bot },
];

export function KeywordGalaxy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Spring physics for buttery smooth scroll animations
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  // Scroll transforms
  const coreScale = useTransform(smoothProgress, [0.1, 0.4, 0.7], [0.85, 1.05, 0.95]);
  const coreGlow = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0.4, 1, 0.6]);
  const ringRotate = useTransform(smoothProgress, [0, 1], [-15, 25]);
  const counterRotate = useTransform(smoothProgress, [0, 1], [15, -25]);
  const expansionProgress = useTransform(smoothProgress, [0.15, 0.45], [0.3, 1]);

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-28 bg-slate-950 relative overflow-hidden border-t border-slate-800/80"
    >
      {/* Deep Space Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_45%,rgba(37,99,235,0.08),transparent_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-black uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 fill-blue-400" /> Semantic Entity & Keyword Constellation
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-4"
          >
            Dominate Every <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400">
              High-Intent Search Query.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            We don't just optimize for 1 or 2 isolated keywords. We build an interconnected topical entity universe that captures searchers across every commercial, local, and conversational intent.
          </motion.p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 border cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border-slate-800 hover:bg-slate-850"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* The Galaxy Interactive Canvas */}
        <div className="relative h-[560px] sm:h-[600px] max-w-5xl mx-auto flex items-center justify-center overflow-visible">
          
          {/* Orbital Radar Rings (Scroll-Responsive Rotation) */}
          <motion.div
            style={{ rotate: ringRotate }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {/* Inner Ring (Orbit 1) */}
            <div className="w-[360px] h-[360px] rounded-full border border-blue-500/20 border-dashed animate-[spin_80s_linear_infinite]" />
            {/* Middle Ring (Orbit 2) */}
            <div className="absolute w-[560px] h-[560px] rounded-full border border-indigo-500/15 border-dashed animate-[spin_120s_linear_infinite_reverse]" />
            {/* Outer Ring (Orbit 3) */}
            <div className="absolute w-[760px] h-[760px] rounded-full border border-purple-500/10 border-dashed" />
          </motion.div>

          {/* Central Authority Hub: The Brand / Client Entity */}
          <motion.div
            style={{ scale: coreScale }}
            className="relative z-20 w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-slate-900 via-blue-950/90 to-slate-950 border-2 border-blue-500/60 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.35)] p-4 text-center group cursor-pointer hover:border-blue-400 transition-colors"
          >
            {/* Pulsing Core Aura */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping opacity-30 pointer-events-none" />

            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-400 mb-2 shadow-inner">
              <Target className="w-5 h-5" />
            </div>

            <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">
              TopRank Core
            </div>
            <div className="text-sm font-black text-white leading-tight mb-1">
              Topical Authority
            </div>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold">
              <Award className="w-3 h-3" /> 100/100 Hub
            </div>
          </motion.div>

          {/* Orbiting Interactive Keyword Constellation Nodes */}
          <div className="absolute inset-0 flex items-center justify-center">
            {KEYWORD_NODES.map((node) => {
              const isMatch = activeCategory === "all" || activeCategory === node.category;
              const isHovered = hoveredNode === node.id;

              return (
                <motion.div
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    x: node.x,
                    y: node.y,
                  }}
                  animate={{
                    opacity: isMatch ? (isHovered ? 1 : 0.9) : 0.2,
                    scale: isMatch ? (isHovered ? 1.08 : 1) : 0.85,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`absolute z-30 cursor-pointer transition-all duration-300 ${
                    !isMatch ? "pointer-events-none grayscale" : ""
                  }`}
                >
                  <div
                    className={`px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl bg-slate-900/95 backdrop-blur-md border shadow-xl flex items-center gap-2.5 group transition-all duration-300 ${
                      isHovered
                        ? "border-blue-400 shadow-blue-500/25 bg-slate-850"
                        : "border-slate-800/90 shadow-black/60"
                    }`}
                  >
                    {/* Rank Badge */}
                    <span className="px-1.5 py-0.5 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[9px] uppercase tracking-wider shrink-0 shadow-sm">
                      {node.rank}
                    </span>

                    {/* Query & Stats */}
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-100 group-hover:text-blue-300 transition-colors whitespace-nowrap">
                        {node.query}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                        <span>Vol: <b className="text-slate-300">{node.volume}/mo</b></span>
                        <span className="text-slate-600">•</span>
                        <span className="text-emerald-400 font-bold">CTR: {node.ctr}</span>
                      </div>
                    </div>

                    {/* Sparkle ping */}
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:animate-ping shrink-0" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Outcome Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {[
            { label: "Dominated Keyword Universe", val: "2,400+", sub: "First-Page Rankings", icon: Search, color: "text-blue-400" },
            { label: "Monthly Organic Impressions", val: "1.8M+", sub: "+420% Annual Surge", icon: Share2, color: "text-indigo-400" },
            { label: "Top 3 SERP Placement Rate", val: "94.2%", sub: "High Transactional Share", icon: BarChart3, color: "text-emerald-400" },
            { label: "Compounded Pipeline ROI", val: "5.8x", sub: "Verified Client Growth", icon: Rocket, color: "text-amber-400" },
          ].map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl shadow-black/40 text-left relative overflow-hidden group hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>

                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-0.5">
                  {stat.val}
                </div>
                <div className="text-xs font-bold text-slate-300 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  {stat.sub}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


