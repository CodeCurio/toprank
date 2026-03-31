"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Search, ArrowRight, Star, Globe, TrendingUp, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function SeoHeroImmersive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const fullSearchText = "Best SEO Agency in Lucknow...";
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Typing effect on mount
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setSearchValue(fullSearchText.slice(0, i));
      i++;
      if (i > fullSearchText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Scroll transforms for the search result climb
  const mockResultY = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const mockResultScale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const mockResultOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.5, 1]);
  
  // Blur effect for "competitors"
  const competitorBlur = useTransform(scrollYProgress, [0.3, 0.5], ["blur(0px)", "blur(8px)"]);
  const competitorOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.2]);

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-slate-950">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b,transparent)] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 1]) }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-bold text-[10px] uppercase tracking-widest">
              <Star className="w-3 h-3 fill-blue-400" />
              Dominate Local & National Search
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Rank #1. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-500">
                Outgrow Everyone.
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-lg font-medium leading-relaxed">
              We don't just build websites; we engineer organic dominance. Our data-driven SEO strategies place your brand exactly where your customers are searching.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2">
                Get Your Free Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-900 border border-slate-800 rounded-2xl">
                 <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                          <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" width={32} height={32} className="object-cover" />
                       </div>
                    ))}
                 </div>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">100+ Brands <br/> Dominating</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Immersive Search Results Mockup */}
          <div className="relative h-[500px] w-full max-w-xl mx-auto flex items-center justify-center">
            {/* The "Google" Frame */}
            <motion.div
              style={{ scale: useTransform(scrollYProgress, [0, 0.1], [0.9, 1]) }}
              className="w-full h-full bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              {/* Browser Header */}
              <div className="h-14 bg-slate-950 border-b border-slate-800 flex items-center px-6 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="flex-grow max-w-md h-8 bg-slate-900 rounded-lg flex items-center px-4 gap-2 border border-slate-800">
                   <Search className="w-3 h-3 text-slate-500" />
                   <span className="text-[10px] text-slate-400 font-mono transition-all">
                     {searchValue}
                     <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.6 }}>|</motion.span>
                   </span>
                </div>
              </div>

              {/* Search Results List */}
              <div className="p-6 space-y-6 overflow-hidden h-full">
                
                {/* Competitor 1 (Blurred on scroll) */}
                <motion.div style={{ filter: competitorBlur, opacity: competitorOpacity }} className="space-y-2 opacity-50">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-slate-800" />
                    <div className="w-24 h-2 bg-slate-800 rounded" />
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded" />
                  <div className="w-3/4 h-2 bg-slate-800 rounded" />
                </motion.div>

                {/* THE PRIZE: TopRank Result */}
                <motion.div
                  style={{ 
                    y: mockResultY, 
                    scale: mockResultScale, 
                    opacity: mockResultOpacity,
                    boxShadow: useTransform(scrollYProgress, [0.3, 0.4], ["0 0 0px 0px rgba(59,130,246,0)", "0 20px 50px -10px rgba(59,130,246,0.3)"])
                  }}
                  className="bg-white rounded-2xl p-6 border border-blue-200 relative z-20"
                >
                  <div className="absolute -top-3 right-4 bg-blue-600 text-[8px] font-black text-white px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Highest Visibility
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                        <Globe className="w-4 h-4" />
                     </div>
                     <div className="space-y-1">
                        <div className="text-[11px] font-black text-blue-600 flex items-center gap-1">
                          TOPRANK.PRO <span className="text-slate-400">› services › seo</span>
                        </div>
                        <div className="text-sm font-black text-slate-900 underline decoration-blue-600 underline-offset-4">
                          #1 SEO Company in Lucknow: Rank Higher & Get Results
                        </div>
                     </div>
                  </div>
                  
                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold">
                        <TrendingUp className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-500 font-black">+240% Growth</span> in First 3 Months.
                     </div>
                     <div className="flex gap-2">
                        <div className="px-2 py-1 bg-slate-50 rounded text-[9px] font-black text-slate-600 border border-slate-100 flex items-center gap-1">
                           <ShieldCheck className="w-3 h-3" /> Technical SEO
                        </div>
                        <div className="px-2 py-1 bg-slate-50 rounded text-[9px] font-black text-slate-600 border border-slate-100 flex items-center gap-1">
                           <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Local GMB
                        </div>
                     </div>
                  </div>
                </motion.div>

                {/* Competitor 2 (Blurred on scroll) */}
                <motion.div style={{ filter: competitorBlur, opacity: competitorOpacity }} className="space-y-2 opacity-50">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-slate-800" />
                    <div className="w-20 h-2 bg-slate-800 rounded" />
                  </div>
                  <div className="w-full h-3 bg-slate-800 rounded" />
                </motion.div>
                
                {/* Scroll Indicator Overlay */}
                <motion.div
                  style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 font-black text-[8px] uppercase tracking-[0.3em]"
                >
                  <p>Scroll to Rank</p>
                  <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-4 h-6 border border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Decorative SEO Tags */}
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]), opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
              className="absolute -right-8 top-1/4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-xl z-30"
            >
               <div className="text-[10px] font-black text-blue-400 mb-1">KW DIFFICULTY</div>
               <div className="text-xl font-black text-white leading-none">ULTRA-HIGH</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
