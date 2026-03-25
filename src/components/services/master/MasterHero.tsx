"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Star, MousePointerClick, MessageSquareText, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, MouseEvent } from "react";

interface MasterHeroProps {
  locationName?: string;
  locationSlug?: string;
}

export function MasterHero({ locationName = "Lucknow & Chandigarh", locationSlug }: MasterHeroProps) {
  const [activeTab, setActiveTab] = useState<"leads" | "website" | "ranking" | "brand">("leads");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const tabContent = {
    leads: "We deploy aggressive Performance Marketing and Conversion Rate Optimization (CRO) to flood your sales funnel with highly qualified, ready-to-buy prospects.",
    website: "We engineer lightning-fast, premium Next.js websites designed specifically as high-converting lead generation engines, not just digital brochures.",
    ranking: "We execute elite technical and semantic SEO strategies to secure the #1 position on Google for extremely competitive commercial keywords.",
    brand: "We build dominant social media architectures that cultivate absolute brand supremacy, turning cold audiences into intensely loyal brand advocates."
  };

  return (
    <div 
      className="relative pt-32 pb-20 overflow-hidden bg-slate-950 group"
      onMouseMove={handleMouseMove}
    >
      {/* Immersive Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <motion.div animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
         <motion.div animate={{ rotate: -360, scale: [1, 1.3, 1] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-pink-600/10 blur-[100px] rounded-full mix-blend-screen" />
         <motion.div animate={{ rotate: 360, scale: [1, 1.1, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-orange-600/10 blur-[80px] rounded-full mix-blend-screen" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_100%)] pointer-events-none"></div>

      {/* Interactive Interactive Spotlight mapping to the user's cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(37, 99, 235, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Hero Section (BOF + TOF Hybrid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="text-left">
            <div className="inline-flex flex-wrap items-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-bold text-xs uppercase tracking-widest">
                <Star className="w-3.5 h-3.5 fill-blue-400" />
                #1 Rated Agency in UP & Punjab
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 font-bold text-xs uppercase tracking-widest">
                <Star className="w-3.5 h-3.5 fill-orange-400" />
                4.8 Google Rating
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] font-black text-white leading-[1.1] tracking-tight mb-6 relative z-10">
              SEO, GMB & Digital Marketing Services That <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 animate-gradient-x underline decoration-blue-500/30 font-extrabold italic">Generate Real Leads & Customers.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-10 max-w-2xl">
              Helping businesses in <span className="text-white font-bold">{locationName}</span> rank higher on Google, dominate their local market, and grow faster with data-backed marketing engines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-12 relative z-10">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)] group/btn">
                FREE SEO AUDIT NOW <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link href="https://wa.me/919305030523" className="w-full sm:w-auto px-8 py-4 bg-orange-600/10 hover:bg-orange-600/20 text-orange-400 border border-orange-500/30 font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
                <MessageSquareText className="w-5 h-5" /> WhatsApp Expert
              </Link>
            </div>

            {/* Micro-Proof Logos Strip (Immediate Legitimacy) */}
            <div className="pt-8 border-t border-slate-800/50">
               <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Trusted by 250+ {locationName} Businesses</p>
               <div className="flex flex-wrap items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                  <span className="text-white font-black text-sm tracking-tighter italic">TECHPRO LABS</span>
                  <span className="text-white font-black text-sm tracking-tighter italic">LOKALAPP</span>
                  <span className="text-white font-black text-sm tracking-tighter italic">MEDICALLINE</span>
                  <span className="text-white font-black text-sm tracking-tighter italic">BUILDREEL</span>
                  <span className="text-white font-black text-sm tracking-tighter italic">NOVARETAIL</span>
               </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative lg:ml-auto w-full max-w-lg">
             <div className="relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl aspect-[4/3] bg-slate-900 group">
                <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                <Image src="/artifacts/growth_proof.png" priority sizes="(max-width: 1024px) 100vw, 50vw" fill alt="Google Ranking & Leads Growth Proof" className="object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             
             {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-700 flex items-center gap-4 animate-bounce shrink-0 z-20">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                   <TrendingUp className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                   <p className="text-white font-black text-xl leading-none">+350%</p>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Avg Growth ROI</p>
                </div>
             </div>
          </motion.div>
        </div>

        {/* 2. Service Navigator (Interactive / UX Layer) */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-16 relative">
           <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl overflow-hidden text-center">
             <div className="inline-flex items-center gap-2 mb-6">
               <MousePointerClick className="w-5 h-5 text-blue-400" />
               <h2 className="text-xl font-black text-white">What is your primary goal?</h2>
             </div>
             
             {/* The Tab Headers */}
             <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  { id: "leads", label: "Get Qualified Leads" },
                  { id: "website", label: "Build a Premium Website" },
                  { id: "ranking", label: "Improve Google Ranking" },
                  { id: "brand", label: "Scale Brand Awareness" }
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}`}
                  >
                    {tab.label}
                  </button>
                ))}
             </div>

             {/* The Dynamic Content Panel */}
             <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800 min-h-[140px] flex flex-col justify-center items-center">
                <motion.p 
                  key={activeTab} 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="text-slate-300 font-medium leading-relaxed max-w-3xl"
                >
                  {tabContent[activeTab]}
                </motion.p>
             </div>
           </div>
        </motion.div>

      </div>
    </div>
  );
}
