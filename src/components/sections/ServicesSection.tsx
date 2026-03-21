"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  MonitorSmartphone,
  MapPin,
  Target,
  Share2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Zap,
  Sparkles,
  Users,
  ChevronRight,
  HelpCircle,
  Clock,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  category: string;
  outcome: string;
  description: string;
  features: string[];
  icon: any;
  colorClass: string;
  gradient: string;
  isFeatured?: boolean;
  isSpeciality?: boolean;
  link: string;
  visual?: React.ReactNode;
}

const services: Service[] = [
  {
    id: "seo",
    category: "Search Engine Optimization",
    title: "Rank on Google & Get Daily Leads",
    description: "Our SEO services in Lucknow ensure your business stays at the top of high-intent search results naturally.",
    outcome: "Show up when customers search for your services and start getting daily local enquiries.",
    features: ["Rank for High-Intent Keywords", "Local Authority Building", "Weekly Growth Reports"],
    icon: Search,
    colorClass: "blue",
    gradient: "from-blue-600 to-indigo-600",
    isFeatured: true,
    isSpeciality: true,
    link: "/services/seo-optimization",
    visual: <SEOMicroVisual />
  },
  {
    id: "gmb",
    category: "Local SEO / GMB",
    title: "Rank #1 on Google Maps",
    description: "Expert Google Business Profile optimization to dominate the local 'near me' search market.",
    outcome: "Be the first business people call when searching for your services in their local area.",
    features: ["Map Pack Ranking Strategy", "Review Booster Framework", "Monthly Profile Updates"],
    icon: MapPin,
    colorClass: "orange",
    gradient: "from-orange-500 to-amber-500",
    isSpeciality: true,
    link: "/services/gmb-optimization",
    visual: <GMBMicroVisual />
  },
  {
    id: "web-dev",
    category: "Full-Stack Development",
    title: "Turn Visitors into Customers",
    description: "Premium website development for businesses focused on speed, security, and high conversion rates.",
    outcome: "A high-performance site built specifically to turn browsers into booked appointments.",
    features: ["Psychology-Based Design", "Mobile-First Interface", "Fast & Secure Hosting"],
    icon: MonitorSmartphone,
    colorClass: "pink",
    gradient: "from-pink-600 to-rose-600",
    isSpeciality: true,
    link: "/services/website-development",
    visual: <WebDevMicroVisual />
  },
  {
    id: "google-ads",
    category: "Performance Marketing",
    title: "Get Instant Customers Today",
    description: "Laser-targeted Google Ads management to maximize your ROI and minimize wasted ad spend.",
    outcome: "Skip the 6-month organic wait and start getting premium traffic within 24 hours.",
    features: ["Immediate Search Dominance", "ROI-Focused Management", "Sales-Driven Campaigns"],
    icon: Target,
    colorClass: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    link: "/services/ppc-advertising",
    visual: <AdsMicroVisual />
  },
  {
    id: "social-media",
    category: "Social Media Ads",
    title: "Build a Brand People Trust",
    description: "Strategic social media marketing to build authority and reach your target audience where they hang out.",
    outcome: "Stay top-of-mind so customers choose you over cheaper rivals based on brand trust.",
    features: ["Content Strategy & Design", "Paid Audience Growth", "Direct Engagement Strategy"],
    icon: Share2,
    colorClass: "purple",
    gradient: "from-purple-600 to-violet-600",
    link: "/services/social-media-marketing",
    visual: <SocialMicroVisual />
  },
  {
    id: "strategy",
    category: "Growth Scaling",
    title: "The Ultimate Scale Plan",
    description: "A complete performance growth engine built to take your business to the next revenue milestone.",
    outcome: "A Predictable multi-channel revenue system that scales your business while you sleep.",
    features: ["360° Channel Integration", "Data-Driven Scaling", "Personal Strategy Manager"],
    icon: Rocket,
    colorClass: "cyan",
    gradient: "from-cyan-500 to-blue-600",
    link: "/services/growth-audits",
    visual: <StrategyMicroVisual />
  }
];

function SEOMicroVisual() {
  return (
    <div className="relative w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden mb-6 group-hover:bg-white transition-colors duration-500 shadow-inner">
      <div className="p-4 space-y-2 relative">
        {/* Search Header Mockup */}
        <div className="flex gap-1.5 mb-3 opacity-20">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>

        <div className="relative h-16">
          {/* Competitor 1 */}
          <motion.div
            animate={{
              y: [0, 0, 15, 15, 15, 0],
              opacity: [0.3, 0.3, 0.2, 0.2, 0.2, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.45, 0.8, 0.9, 1] }}
            className="absolute top-0 left-0 w-full flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-sm bg-slate-200" />
            <div className="h-1.5 w-24 bg-slate-200 rounded-full" />
            <div className="ml-auto px-1.5 py-0.5 bg-slate-100 text-[6px] text-slate-400 rounded-sm">AD</div>
          </motion.div>

          {/* Competitor 2 */}
          <motion.div
            animate={{
              y: [20, 20, 35, 35, 35, 20],
              opacity: [0.3, 0.3, 0.2, 0.2, 0.2, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.45, 0.8, 0.9, 1] }}
            className="absolute top-0 left-0 w-full flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-sm bg-slate-200" />
            <div className="h-1.5 w-20 bg-slate-200 rounded-full" />
            <div className="ml-auto px-1.5 py-0.5 bg-slate-100 text-[6px] text-slate-400 rounded-sm">AD</div>
          </motion.div>

          {/* YOUR BUSINESS (The Hero) */}
          <motion.div
            initial={{ y: 40, opacity: 0.2 }}
            animate={{
              y: [40, 40, 0, 0, 0, 40],
              opacity: [0.4, 0.4, 1, 1, 1, 0.4],
              scale: [0.95, 0.95, 1, 1, 1, 0.95],
              boxShadow: [
                "0px 0px 0px rgba(59,130,246,0)",
                "0px 0px 20px rgba(59,130,246,0.3)",
                "0px 4px 12px rgba(59,130,246,0.1)",
                "0px 4px 12px rgba(59,130,246,0.1)",
                "0px 0px 0px rgba(59,130,246,0)",
                "0px 0px 0px rgba(59,130,246,0)"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              times: [0, 0.3, 0.5, 0.85, 0.95, 1]
            }}
            className="absolute top-0 left-0 w-full flex items-center gap-2 bg-white p-2 rounded-lg border border-blue-50 z-20"
          >
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Search className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-2 w-20 bg-blue-600 rounded-full" />
              <div className="h-1.5 w-14 bg-blue-100 rounded-full" />
            </div>
            <motion.div
              animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.48, 0.55, 0.8, 0.9, 1] }}
              className="ml-auto flex items-center gap-1"
            >
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[8px] font-black text-green-600">ORGANIC #1</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Transformation Scanner Effect */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 6, repeat: Infinity, times: [0.3, 0.5] }}
        className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent skew-x-12 z-10"
      />

      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
    </div>
  );
}

function GMBMicroVisual() {
  return (
    <div className="relative w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden mb-6 group-hover:bg-white transition-colors duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      {/* Competitor Pins being pushed away */}
      <motion.div
        animate={{ x: [0, -15, -15, 0], y: [0, -10, -10, 0], opacity: [0.3, 0.1, 0.1, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.8, 1] }}
        className="absolute top-6 left-12 w-2 h-2 rounded-full bg-slate-300"
      />
      <motion.div
        animate={{ x: [0, 20, 20, 0], y: [0, 15, 15, 0], opacity: [0.3, 0.1, 0.1, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.8, 1] }}
        className="absolute bottom-8 right-16 w-2 h-2 rounded-full bg-slate-300"
      />

      {/* YOUR BUSINESS PIN dropping powerfully */}
      <motion.div
        initial={{ scale: 0, opacity: 0, y: -20 }}
        animate={{
          scale: [0, 1.3, 1, 1, 1, 0],
          opacity: [0, 1, 1, 1, 1, 0],
          y: [-20, 0, 0, 0, 0, -20]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          times: [0.3, 0.35, 0.4, 0.85, 0.95, 1]
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      >
        <div className="relative">
          <MapPin className="w-10 h-10 text-orange-500 fill-orange-400 drop-shadow-2xl" />
          <motion.div
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -bottom-1 w-6 h-3 bg-orange-500/20 rounded-full blur-md left-1/2 -translate-x-1/2"
          />
        </div>

        <motion.div
          animate={{ opacity: [0, 1, 1] }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.45, 1] }}
          className="mt-1 bg-white px-2 py-0.5 rounded-full shadow-lg border border-orange-100 flex items-center gap-1"
        >
          <div className="flex">
            {[1, 2, 3, 4, 5].map(i => (
              <Sparkles key={i} className="w-1.5 h-1.5 text-orange-400 fill-orange-400" />
            ))}
          </div>
          <span className="text-[7px] font-black text-slate-800">5.0</span>
        </motion.div>
      </motion.div>

      {/* Radar pulse during optimization */}
      <motion.div
        animate={{ scale: [0, 4], opacity: [0.6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1.8 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-orange-500/20 rounded-full"
      />
    </div>
  );
}

function WebDevMicroVisual() {
  return (
    <div className="relative w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden mb-6 group-hover:bg-white transition-colors duration-500 flex items-center justify-center">
      <div className="w-36 h-24 bg-white border border-slate-200 rounded-lg shadow-sm relative overflow-hidden p-3 pt-6">
        {/* Top Bar Navigation Mock */}
        <div className="absolute top-0 left-0 w-full h-4 bg-slate-50 border-b border-slate-100 p-1 flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        </div>

        <div className="flex gap-4 items-end h-10">
          {/* Legacy Bar */}
          <motion.div
            animate={{
              height: ["80%", "80%", "10%", "10%", "80%"],
              backgroundColor: ["#fee2e2", "#fee2e2", "#f1f5f9", "#f1f5f9", "#fee2e2"]
            }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.4, 0.9, 1] }}
            className="w-4 rounded-t-sm"
          />
          {/* Optimized Growth Bar */}
          <motion.div
            initial={{ height: "10%" }}
            animate={{
              height: ["10%", "10%", "100%", "100%", "10%"],
              backgroundColor: ["#f1f5f9", "#f1f5f9", "#3b82f6", "#3b82f6", "#f1f5f9"]
            }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.35, 0.5, 0.85, 1] }}
            className="flex-grow rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          />
        </div>

        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.45, 0.55, 0.85, 1] }}
          className="absolute top-6 right-3 flex flex-col items-end"
        >
          <span className="text-[10px] font-black text-blue-600">99 SPEED</span>
          <Zap className="w-3 h-3 text-orange-500 fill-orange-400" />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}

function AdsMicroVisual() {
  return (
    <div className="relative w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden mb-6 group-hover:bg-white transition-colors duration-500">
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <div className="flex items-end gap-1.5 h-16">
          {[0.4, 0.6, 0.5, 0.9, 0.7, 1, 0.8].map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: "20%" }}
              animate={{
                height: [`${v * 30}%`, `${v * 30}%`, `${v * 100}%`, `${v * 100}%`, `${v * 30}%`],
                backgroundColor: ["#cbd5e1", "#cbd5e1", "#10b981", "#10b981", "#cbd5e1"]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: i * 0.05, times: [0, 0.35, 0.5, 0.85, 1] }}
              className="flex-1 rounded-t-md relative overflow-hidden"
            >
              <motion.div
                animate={{ y: ["100%", "-100%"] }}
                transition={{ duration: 1, repeat: Infinity, delay: 2.5 }}
                className="absolute inset-0 bg-white/20 skew-y-12"
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center bg-white p-2 rounded-lg border border-slate-100 shadow-sm relative z-10">
          <div className="flex flex-col">
            <span className="text-[6px] text-slate-400 font-bold uppercase">Wasted Spend</span>
            <motion.span
              animate={{ color: ["#94a3b8", "#94a3b8", "#ef4444", "#ef4444", "#94a3b8"] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.3, 0.4, 1] }}
              className="text-[8px] font-black"
            >
              -$2,400
            </motion.span>
          </div>
          <div className="w-px h-6 bg-slate-100" />
          <div className="flex flex-col items-end">
            <span className="text-[6px] text-slate-400 font-bold uppercase">Profit ROI</span>
            <motion.span
              animate={{ color: ["#94a3b8", "#94a3b8", "#10b981", "#10b981", "#94a3b8"], scale: [1, 1, 1.1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.45, 0.55, 0.85, 1] }}
              className="text-[10px] font-black"
            >
              +450%
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialMicroVisual() {
  return (
    <div className="relative w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden mb-6 group-hover:bg-white transition-colors duration-500">
      <div className="p-4 flex flex-col items-center">
        {/* Profile Ring Animation */}
        <div className="relative">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 opacity-20 group-hover:opacity-100 transition-opacity"
          />
          <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-white shadow-md relative overflow-hidden">
            <Users className="absolute inset-0 m-auto text-slate-300 w-8 h-8" />
          </div>
        </div>

        <div className="mt-4 flex gap-1.5">
          {[1, 2, 3, 4, 5].map(i => (
            <motion.div
              key={i}
              initial={{ y: 0, opacity: 0.1 }}
              animate={{
                y: [0, -40, -40],
                opacity: [0.1, 1, 0],
                scale: [1, 1.5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 3 + i * 0.15,
                times: [0, 0.2, 0.4]
              }}
              className="text-xs"
            >
              {["❤️", "🔥", "🚀", "✨", "💫"][i - 1]}
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ opacity: [0.1, 0.1, 1, 1, 0.1], y: [0, 0, -5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.4, 0.5, 0.85, 1] }}
          className="mt-2 bg-white px-3 py-1 rounded-full shadow-sm border border-pink-50"
        >
          <span className="text-[8px] font-black text-pink-600 uppercase tracking-widest">Viral Reach</span>
        </motion.div>
      </div>
    </div>
  );
}

function StrategyMicroVisual() {
  return (
    <div className="relative w-full h-32 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden mb-6 group-hover:bg-white transition-colors duration-500">
      <div className="absolute inset-0 p-6 flex flex-col justify-center">
        <div className="relative h-20 w-full">
          {/* Scatted Chaos Dots before Blueprint */}
          <motion.div
            animate={{ opacity: [0.3, 0.3, 0, 0, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.2, 0.3, 0.9, 1] }}
            className="absolute inset-0"
          >
            <div className="absolute top-2 left-10 w-1.5 h-1.5 bg-slate-300 rounded-full" />
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-slate-300 rounded-full" />
            <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-slate-300 rounded-full" />
          </motion.div>

          <svg className="w-full h-full" viewBox="0 0 100 40">
            <motion.path
              d="M 5 35 Q 25 35 45 20 T 95 5"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="200"
              initial={{ strokeDashoffset: 200 }}
              animate={{ strokeDashoffset: [200, 200, 0, 0, 0, 200] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.6, 0.85, 0.95, 1] }}
            />
            {/* Growing Arrow Head */}
            <motion.path
              d="M 90 10 L 95 5 L 90 0"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              animate={{ opacity: [0, 0, 1, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, times: [0, 0.55, 0.6, 0.85, 1] }}
            />
          </svg>

          <motion.div
            animate={{
              x: [-10, -10, 85, 85, 85, -10],
              y: [30, 30, 0, 0, 0, 30],
              rotate: [0, 0, 45, 45, 45, 0],
              opacity: [0, 0, 1, 1, 0, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.3, 0.6, 0.8, 0.95, 1] }}
            className="absolute text-blue-600"
          >
            <Rocket className="w-4 h-4" />
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.55, 0.65, 0.85, 1] }}
          className="flex justify-center"
        >
          <span className="text-[8px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-full">Winning Blueprint</span>
        </motion.div>
      </div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const currentMonth = mounted
    ? new Date().toLocaleString('en-US', { month: 'long' })
    : "this Month";

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative h-full flex flex-col rounded-[2.5rem] border bg-white transition-all duration-500 overflow-hidden
        ${service.isSpeciality
          ? 'border-blue-200 shadow-[0_20px_50px_-15px_rgba(59,130,246,0.12)] hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.2)]'
          : 'border-slate-200/60 shadow-sm hover:shadow-xl hover:border-slate-300'
        }`}
    >
      <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
        {service.visual && (
          <div className="transition-transform duration-500 group-hover:scale-[1.02]">
            {service.visual}
          </div>
        )}

        <div className="flex justify-between items-start mb-6">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-200 group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-sm`}>
            <service.icon className={`w-6 h-6 text-slate-900`} />
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-colors
              ${service.isSpeciality
                ? 'bg-blue-50 border-blue-100 text-blue-600'
                : 'bg-slate-50 border-slate-100 text-slate-500'
              }`}
            >
              {service.category}
            </div>
            {service.isSpeciality && (
              <div className="flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-orange-400 fill-orange-400" />
                <span className="text-[8px] font-black text-orange-500 uppercase tracking-widest">Core Speciality</span>
              </div>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight mb-3 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
            {service.description}
          </p>
        </div>

        <div className="space-y-3 mb-8 pt-4 border-t border-slate-100 flex-grow">
          <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-2">Service Outcomes</p>
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                <CheckCircle2 className="w-2.5 h-2.5 text-blue-600" />
              </div>
              <span className="text-xs font-bold text-slate-600">{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <Link
            href={service.link}
            className={`w-full py-4 px-6 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 group/btn active:scale-95 shadow-sm
               ${service.isSpeciality
                ? 'bg-slate-900 text-white hover:bg-black'
                : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
          >
            Book My Strategy Call
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
          </Link>

          <div className="flex items-center justify-center gap-2 text-slate-400 transition-opacity opacity-60">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-[8px] font-black uppercase tracking-widest">Limited Slots for {currentMonth}</span>
          </div>
        </div>
      </div>

      {service.isSpeciality && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      )}
    </motion.div>
  );
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const currentMonth = mounted
    ? new Date().toLocaleString('en-US', { month: 'long' })
    : "this Month";

  const helperItems = [
    { goal: "More Google Leads", action: "SEO & GMB" },
    { goal: "Instant Customers", action: "Ads Team" },
    { goal: "Better Conversion", action: "Web Team" },
    { goal: "Brand Authority", action: "Social Team" }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-slate-50 overflow-hidden" id="services">

      {/* Background Ambience matches Hero Style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,#e2e8f0,transparent)] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a08_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Centered Premium Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-800 text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
              Growth Systems
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Solutions Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
                Market Dominance.
              </span>
            </h2>

            <p className="text-slate-500 text-lg md:text-xl font-bold leading-relaxed max-w-2xl mx-auto border-t-2 border-blue-600/20 pt-8">
              Don’t settle for generic marketing. We engineer high-velocity digital ecosystems that capture attention and convert it into revenue.
            </p>
          </motion.div>
        </div>

        {/* Balanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Redesigned & Refined Decision Support Box */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50 border border-blue-200 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-sm mb-24"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100/40 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-100/40 rounded-full blur-[100px]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="lg:max-w-md text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/5 border border-blue-600/10 rounded-full text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                <HelpCircle className="w-3 h-3" />
                Strategy Guide
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-tight mb-4">
                Not sure where <br className="hidden md:block" /> to start?
              </h3>
              <p className="text-slate-600 text-sm font-bold leading-relaxed mb-6">
                Choose the outcome you're looking for, and we'll handle the strategy to get you there.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Link href="#contact" className="px-8 py-4 bg-slate-900 hover:bg-black text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-slate-900/10 active:scale-95 flex items-center gap-2">
                  Claim My Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-xl">
              {helperItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.goal}</p>
                    <p className="text-slate-900 text-base font-black tracking-tight">{item.action}</p>
                  </div>
                </motion.div>
              ))}

              <div className="sm:col-span-2 mt-4 flex items-center justify-center lg:justify-start gap-3 text-slate-400">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Trusted by 100+ high-growth local brands</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global Success Footer */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="flex -space-x-3 mb-2">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-50 overflow-hidden shadow-md">
                  <img src={`https://i.pravatar.cc/150?img=${i + 20}`} alt="Client" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-slate-50 bg-white flex items-center justify-center shadow-md text-[10px] font-black text-slate-900">
                +100
              </div>
            </div>
            <div>
              <p className="text-slate-900 text-xl font-black tracking-tight mb-2 uppercase">Your Success is Our Only Metric.</p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Currently accepting 2 new clients for {currentMonth}</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
