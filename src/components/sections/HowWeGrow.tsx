"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Search, MousePointer2, Target, Zap, BarChart3, Users, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

// --- The Premium Laptop "Journey" App / Mockup Component ---
function InteractiveJourney() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let active = true;
    const runSequence = async () => {
      while (active) {
        setPhase(0); // Phase 0: Google Homepage
        await new Promise(r => setTimeout(r, 1200));
        if(!active) break;
        
        setPhase(1); // Phase 1: Typing Keywords
        await new Promise(r => setTimeout(r, 1500));
        if(!active) break;
        
        setPhase(2); // Phase 2: SERP Load
        await new Promise(r => setTimeout(r, 1200));
        if(!active) break;
        
        setPhase(3); // Phase 3: Mouse Move & Click
        await new Promise(r => setTimeout(r, 1500));
        if(!active) break;
        
        setPhase(4); // Phase 4: Customer Dashboard "Chosen" Action
        await new Promise(r => setTimeout(r, 4500));
      }
    };
    runSequence();
    return () => { active = false; };
  }, []);

  return (
    <div className="relative w-full max-w-[500px] aspect-[16/10] bg-[#202124] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col font-sans select-none border border-slate-700/50 ring-4 ring-slate-800/40">
      
      {/* Laptop / Browser Header frame */}
      <div className="h-6 bg-[#303134] border-b border-[#3c4043] flex items-center px-3 gap-1.5 shrink-0 relative z-40 shadow-sm">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <div className="flex-grow flex justify-center ml-2 mr-10 relative">
           <div className="w-full max-w-[200px] h-[14px] bg-[#202124] rounded-sm text-center flex items-center justify-center">
             <span className="text-[#9aa0a6] text-[7px] pointer-events-none">
               {phase >= 4 ? "toprankindia.com/dashboard" : "google.com/search"}
             </span>
           </div>
        </div>
      </div>

      {/* Screen Canvas */}
      <div className="relative flex-grow overflow-hidden bg-[#202124]">
        
        {/* State 0 & 1: Google Homepage */}
        <motion.div 
           initial={false}
           animate={{ opacity: phase < 2 ? 1 : 0, scale: phase < 2 ? 1 : 0.95 }}
           transition={{ duration: 0.4 }}
           className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 pointer-events-none"
        >
           {/* Authentic Google Text Logo */}
           <span className="text-white text-4xl font-semibold tracking-tighter mb-5" style={{ fontFamily: 'Product Sans, sans-serif', letterSpacing: '-1px' }}>
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
           </span>
           
           {/* Homepage Search Box */}
           <div className="w-full max-w-[340px] h-11 bg-[#303134] border border-[#5f6368] rounded-full flex items-center px-4 gap-3 shadow-lg">
              <Search className="w-4 h-4 text-[#9aa0a6]" />
              <div className="relative flex-grow h-full flex items-center overflow-hidden">
                <span className="text-[#e8eaed] text-[12px]">top digital marketing agency</span>
                <motion.div 
                  initial={{ left: "0%" }}
                  animate={{ left: phase >= 1 ? "100%" : "0%" }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="absolute inset-y-0 right-0 bg-[#303134] z-10"
                />
              </div>
           </div>
        </motion.div>

        {/* State 2 & 3: SERP */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: phase >= 2 && phase < 4 ? 1 : 0 }}
           transition={{ duration: 0.5 }}
           className="absolute inset-0 bg-[#202124] z-20 flex flex-col pointer-events-none"
        >
           <div className="h-12 border-b border-[#3c4043] flex items-center px-4 gap-4 bg-[#202124]">
             <span className="text-white text-lg font-bold tracking-tighter">Google</span>
             <div className="flex-grow h-7 bg-[#303134] rounded-full flex items-center px-3 border border-[#5f6368]">
               <span className="text-[#e8eaed] text-[9px] truncate">top digital marketing agency</span>
             </div>
           </div>
           
           <div className="flex-grow p-4 md:p-5 flex flex-col gap-5 relative overflow-hidden">
              <motion.div 
                className={`flex flex-col relative w-[90%] transition-colors duration-300 ${phase === 3 ? "bg-[#303134]/50 rounded-lg -mx-2 px-2 py-1" : ""}`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                   <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                     <Target className="w-2.5 h-2.5 text-blue-600" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[#bdc1c6] text-[9px] leading-none mb-0.5"><span className="font-bold text-white">Sponsored</span> · TopRankIndia.com</span>
                   </div>
                </div>
                <span className={`text-[#8ab4f8] text-[15px] font-medium leading-tight mb-0.5 ${phase === 3 ? "underline" : ""}`}>
                  TopRank Digital Service: Generate Real Enquiries
                </span>
                <span className="text-[#9aa0a6] text-[10px] leading-snug">
                  Stop blending in. We engineer growth through SEO, custom Web Development, and Data-Driven Performance Marketing...
                </span>
              </motion.div>

              <div className="flex flex-col w-[85%] opacity-60">
                <div className="flex items-center gap-1.5 mb-1">
                   <div className="w-4 h-4 rounded-full bg-[#3c4043]" />
                   <span className="text-[#bdc1c6] text-[9px]">competitor1.com</span>
                </div>
                <span className="text-[#8ab4f8] text-[13px] font-medium leading-tight mb-0.5">Best Digital Marketing Agency in the City</span>
              </div>
           </div>
        </motion.div>

        {/* State 4: Dashboard Action */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: phase === 4 ? 1 : 0, y: phase === 4 ? 0 : 30 }}
           transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
           className="absolute inset-0 bg-white z-30 flex flex-col p-5"
        >
           <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 p-3 rounded-lg mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-[13px] leading-none mb-1">New Client Enquiry Received!</span>
                <span className="text-slate-500 text-[10px] leading-none">High-intent lead captured via TopRank System</span>
              </div>
           </div>
           
           <div className="flex-grow bg-slate-50 rounded-xl border border-slate-100 flex items-end justify-between p-3 gap-1 relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(transparent_9px,rgba(0,0,0,0.03)_10px)] [background-size:100%_10px]" />
               <div className="absolute top-3 left-3 bg-white shadow-sm border border-slate-200 rounded-full px-2.5 py-1 font-black text-slate-800 text-[9px] flex items-center gap-1 z-10">
                 <Zap className="w-3 h-3 text-orange-500 fill-orange-500" /> Conversions Spiking
               </div>
               
               <motion.div initial={{ height: "15%" }} animate={{ height: phase === 4 ? "25%" : "15%" }} transition={{ delay: 0.1 }} className="flex-1 bg-slate-200 rounded-t-sm relative z-10" />
               <motion.div initial={{ height: "15%" }} animate={{ height: phase === 4 ? "40%" : "15%" }} transition={{ delay: 0.2 }} className="flex-1 bg-blue-200 rounded-t-sm relative z-10" />
               <motion.div initial={{ height: "15%" }} animate={{ height: phase === 4 ? "55%" : "15%" }} transition={{ delay: 0.3 }} className="flex-1 bg-blue-400 rounded-t-sm relative z-10" />
               <motion.div initial={{ height: "15%" }} animate={{ height: phase === 4 ? "80%" : "15%" }} transition={{ delay: 0.4 }} className="flex-1 bg-blue-500 rounded-t-sm relative z-10" />
               <motion.div initial={{ height: "15%" }} animate={{ height: phase === 4 ? "100%" : "15%" }} transition={{ delay: 0.5 }} className="flex-1 bg-blue-600 rounded-t-sm relative z-10 shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
           </div>
        </motion.div>

        {/* Animated Mouse Cursor */}
        <motion.div
           animate={{
             opacity: phase >= 2 && phase < 4 ? 1 : 0,
             left: phase === 3 ? "28%" : "80%",
             top: phase === 3 ? "35%" : "85%",
             scale: phase === 3 ? [1, 1, 0.85, 1] : 1
           }}
           transition={{ duration: 1, ease: "easeInOut", times: [0, 0.7, 0.9, 1] }} 
           className="absolute z-50 pointer-events-none w-6 h-6 pt-[2px]"
        >
           <MousePointer2 className="w-5 h-5 text-white fill-slate-900 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
        </motion.div>
      </div>
    </div>
  );
}

const growthSteps = [
  {
    step: "STEP 01",
    title: "The Right Search Intent",
    badge: "INTENT TARGETING",
    badgeColor: "bg-orange-50 text-orange-600 border-orange-200",
    description: "We capture customers at the exact moment they search on Google for services you offer.",
    points: ["High-Intent Keywords", "Local 3-Pack Presence", "Zero Waste Traffic"],
    icon: Target,
    iconBg: "bg-orange-50 text-orange-500 border-orange-200",
    gradient: "from-orange-500 via-pink-500 to-amber-500",
    visual: (
      <div className="h-32 w-full bg-slate-900 rounded-2xl p-4 relative overflow-hidden flex flex-col justify-center mb-6">
        <div className="w-full bg-slate-800 border border-slate-700 rounded-full py-2 px-3 flex items-center gap-2 shadow-inner">
          <Search className="w-4 h-4 text-orange-400 shrink-0" />
          <div className="h-2 w-36 bg-slate-700 rounded-full" />
          <span className="ml-auto text-[9px] font-black text-orange-400 bg-orange-500/20 px-2 py-0.5 rounded-full">HIGH INTENT</span>
        </div>
        <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1"><MousePointer2 className="w-3 h-3 text-orange-400" /> Active Buyer Search</span>
          <span className="font-mono text-emerald-400 font-bold">100% Match</span>
        </div>
      </div>
    ),
  },
  {
    step: "STEP 02",
    title: "Behavior-Driven UX",
    badge: "CONVERSION ARCHITECTURE",
    badgeColor: "bg-pink-50 text-pink-600 border-pink-200",
    description: "We design sub-second Next.js web experiences tailored to how your customers evaluate & trust.",
    points: ["Sub-Second Page Load", "Frictionless Mobile UX", "Instant Trust Signals"],
    icon: BarChart3,
    iconBg: "bg-pink-50 text-pink-500 border-pink-200",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    visual: (
      <div className="h-32 w-full bg-slate-900 rounded-2xl p-4 relative overflow-hidden flex flex-col justify-center mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black text-pink-400 uppercase tracking-wider">User Retention</span>
          <span className="text-[10px] font-mono text-white font-bold">98.4% Engagement</span>
        </div>
        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
          <motion.div
            initial={{ width: "20%" }}
            whileInView={{ width: "95%" }}
            transition={{ duration: 1.5 }}
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
          />
        </div>
        <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1"><Users className="w-3 h-3 text-pink-400" /> Targeted Visitors</span>
          <span className="text-pink-400 font-bold">3.2x Higher CRO</span>
        </div>
      </div>
    ),
  },
  {
    step: "STEP 03",
    title: "Engineered For Action",
    badge: "AUTOMATED LEADS",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    description: "We turn clicks into direct inquiries, call bookings, and whatsapp messages automatically.",
    points: ["Direct Call Triggers", "WhatsApp Auto-Bot", "Real-Time Lead Tracking"],
    icon: Zap,
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    gradient: "from-blue-500 via-indigo-500 to-cyan-500",
    visual: (
      <div className="h-32 w-full bg-slate-900 rounded-2xl p-4 relative overflow-hidden flex flex-col justify-center mb-6">
        <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-xl p-2.5 flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-[11px] font-bold text-white">New Booking Captured!</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-400 font-bold">+1 LEAD</span>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-blue-400" /> 24/7 Automated Engine</span>
          <span className="text-emerald-400 font-bold">Verified ROAS</span>
        </div>
      </div>
    ),
  },
];

export function HowWeGrow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-50 py-14 md:py-20 overflow-hidden"
      id="how-we-grow"
    >
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,#cbd5e1,transparent)] opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Compact Header (Fits standard viewports) */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-slate-800 text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-blue-600 fill-blue-600" />
            Methodology
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-3"
          >
            Growth Isn’t Magic.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
              It’s Engineered.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed"
          >
            Most agencies promise rankings. We build a predictable acquisition engine around real customer behavior.
          </motion.p>
        </div>

        {/* 3 Step Cards (Compact Viewport Height) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {growthSteps.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between"
              >
                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.gradient} opacity-90 group-hover:h-2 transition-all`} />

                <div>
                  {item.visual}

                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl ${item.iconBg} border flex items-center justify-center shrink-0`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-1">
                    {item.step}
                  </span>

                  <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Original Premium Creative Agency Glass CTA Banner with Interactive Journey */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full relative group cursor-default"
        >
          {/* Outer Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-pink-200 rounded-[3.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000" />
          
          <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-white/70 backdrop-blur-2xl border-2 border-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-700 p-8 md:p-10 lg:p-12">
            
            {/* Background glows */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-orange-400/20 to-pink-400/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3" />
            <div className="absolute inset-0 bg-white/40 pointer-events-none" />
            
            <div className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Text & CTA */}
              <div className="text-left flex flex-col items-start lg:col-span-5 order-2 lg:order-1">
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/90 backdrop-blur-md border border-slate-200/50 rounded-full text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
                   <Zap className="w-3 h-3 fill-blue-600" /> Let's Scale
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight mb-5 relative">
                  More visibility.<br /> Better leads.<br />
                  <span className="relative inline-block mt-2">
                    <span className="relative z-10 px-4 text-white">Real growth.</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-500 rounded-xl -rotate-2 z-0 group-hover:rotate-0 transition-all duration-500 shadow-xl" />
                  </span>
                </h3>

                <p className="text-slate-600 text-base md:text-lg font-medium mb-8 max-w-xl leading-relaxed">
                  Built with proven strategy, not <span className="text-slate-900 font-bold border-b-2 border-orange-400">guesswork.</span> Let our team build a marketing engine that turns clicks into serious revenue for your business.
                </p>
                
                <a
                  href="#contact"
                  className="group/btn relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-black text-white font-bold rounded-full overflow-hidden transition-all shadow-xl active:scale-95 text-sm uppercase tracking-wider"
                >
                  <span className="relative z-10">Start Growing Today</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right Column: Interactive Journey Mockup */}
              <div className="flex justify-center w-full lg:col-span-7 order-1 lg:order-2">
                 <div className="w-full">
                   {mounted && <InteractiveJourney />}
                 </div>
              </div>
              
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
