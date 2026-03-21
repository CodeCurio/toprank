"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Search, MousePointer2, Target, Zap, BarChart3, Users, Network, CheckCircle2, ArrowRight } from "lucide-react";

// --- The Spotlight / Interactive Card component ---
function InteractiveCard({ children, variants }: { children: React.ReactNode; variants: any }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      variants={variants}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative overflow-hidden bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-100 hover:border-blue-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-2 flex flex-col h-full group cursor-default"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 z-20"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.08), transparent 40%)`,
        }}
      />
      <div className="relative z-30 flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  );
}

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
                {/* Typing mask (slides right to reveal) */}
                <motion.div 
                  initial={{ left: "0%" }}
                  animate={{ left: phase >= 1 ? "100%" : "0%" }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="absolute inset-y-0 right-0 bg-[#303134] z-10"
                />
              </div>
           </div>
        </motion.div>

        {/* State 2 & 3: SERP (Search Engine Results Page) */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: phase >= 2 && phase < 4 ? 1 : 0 }}
           transition={{ duration: 0.5 }}
           className="absolute inset-0 bg-[#202124] z-20 flex flex-col pointer-events-none"
        >
           {/* SERP Header mini */}
           <div className="h-12 border-b border-[#3c4043] flex items-center px-4 gap-4 bg-[#202124]">
             <span className="text-white text-lg font-bold tracking-tighter">Google</span>
             <div className="flex-grow h-7 bg-[#303134] rounded-full flex items-center px-3 border border-[#5f6368]">
               <span className="text-[#e8eaed] text-[9px] truncate">top digital marketing agency</span>
             </div>
           </div>
           
           {/* Results List */}
           <div className="flex-grow p-4 md:p-5 flex flex-col gap-5 relative overflow-hidden">
              {/* Result 1 (TopRank) */}
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
                  Stop blending in. We engineer growth through SEO, custom Web Development, and Data-Driven Performance Marketing built to convert traffic into revenue...
                </span>
              </motion.div>

              {/* Result 2 (Competitor) */}
              <div className="flex flex-col w-[85%] opacity-60">
                <div className="flex items-center gap-1.5 mb-1">
                   <div className="w-4 h-4 rounded-full bg-[#3c4043]" />
                   <span className="text-[#bdc1c6] text-[9px]">competitor1.com</span>
                </div>
                <span className="text-[#8ab4f8] text-[13px] font-medium leading-tight mb-0.5">Best Digital Marketing Agency in the City</span>
                <span className="text-[#9aa0a6] text-[9px] leading-snug">
                  We are providing standard SEO and social media posting services at affordable prices...
                </span>
              </div>

              {/* Result 3 (Competitor) */}
              <div className="flex flex-col w-[85%] opacity-40">
                <div className="flex items-center gap-1.5 mb-1">
                   <div className="w-4 h-4 rounded-full bg-[#3c4043]" />
                   <span className="text-[#bdc1c6] text-[9px]">cheap-marketing-now.in</span>
                </div>
                <span className="text-[#8ab4f8] text-[13px] font-medium leading-tight mb-0.5">Affordable SEO Packages</span>
                <span className="text-[#9aa0a6] text-[9px] leading-snug">
                  Buy links and generic content. No measurable growth tracking...
                </span>
              </div>
           </div>
        </motion.div>

        {/* State 4: Dashboard/Conversion Action */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: phase === 4 ? 1 : 0, y: phase === 4 ? 0 : 30 }}
           transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
           className="absolute inset-0 bg-white z-30 flex flex-col p-5"
        >
           {/* Top Success Banner */}
           <div className="flex items-center gap-3 bg-green-50 border border-green-100 p-3 rounded-lg mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold text-[13px] leading-none mb-1">New Client Enquiry Received!</span>
                <span className="text-slate-500 text-[10px] leading-none">High-intent lead captured via TopRank System</span>
              </div>
           </div>
           
           {/* Abstract Upward Graph UI */}
           <div className="flex-grow bg-slate-50 rounded-xl border border-slate-100 flex items-end justify-between p-3 gap-1 relative overflow-hidden">
               {/* Grid lines */}
               <div className="absolute inset-0 bg-[linear-gradient(transparent_9px,rgba(0,0,0,0.03)_10px)] [background-size:100%_10px]" />
               
               {/* Overlay Revenue Pill */}
               <div className="absolute top-3 left-3 bg-white shadow-sm border border-slate-200 rounded-full px-2.5 py-1 font-black text-slate-800 text-[9px] flex items-center gap-1 z-10">
                 <Zap className="w-3 h-3 text-orange-500 fill-orange-500" /> Conversions Spiking
               </div>
               
               {/* Generated Bars */}
               <motion.div initial={{ height: "15%" }} animate={{ height: phase === 4 ? "25%" : "15%" }} transition={{ delay: 0.1 }} className="flex-1 bg-slate-200 rounded-t-sm relative z-10" />
               <motion.div initial={{ height: "15%" }} animate={{ height: phase === 4 ? "40%" : "15%" }} transition={{ delay: 0.2 }} className="flex-1 bg-blue-200 rounded-t-sm relative z-10" />
               <motion.div initial={{ height: "15%" }} animate={{ height: phase === 4 ? "55%" : "15%" }} transition={{ delay: 0.3 }} className="flex-1 bg-blue-400 rounded-t-sm relative z-10" />
               <motion.div initial={{ height: "15%" }} animate={{ height: phase === 4 ? "80%" : "15%" }} transition={{ delay: 0.4 }} className="flex-1 bg-blue-500 rounded-t-sm relative z-10" />
               <motion.div initial={{ height: "15%" }} animate={{ height: phase === 4 ? "100%" : "15%" }} transition={{ delay: 0.5 }} className="flex-1 bg-blue-600 rounded-t-sm relative z-10 shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
           </div>
        </motion.div>

        {/* The Animated Mouse Cursor */}
        <motion.div
           animate={{
             opacity: phase >= 2 && phase < 4 ? 1 : 0,
             left: phase === 3 ? "28%" : "80%", // Moves to the TopRank Headline
             top: phase === 3 ? "35%" : "85%", // Moves to the TopRank Headline
             scale: phase === 3 ? [1, 1, 0.85, 1] : 1 // Clicks when it arrives
           }}
           transition={{ duration: 1, ease: "easeInOut", times: [0, 0.7, 0.9, 1] }} 
           className="absolute z-50 pointer-events-none w-6 h-6 pt-[2px]"
        >
           <MousePointer2 className="w-5 h-5 text-white fill-slate-900 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
           {/* Ripple emitted exactly at cursor tip on click */}
           {phase === 3 && (
             <motion.div
               initial={false}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.8 }} // Matches the 0.8/0.9 scale timing
               className="absolute -top-1 -left-1 w-6 h-6 bg-blue-400/50 rounded-full pointer-events-none"
             />
           )}
        </motion.div>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function HowWeGrow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !mounted) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative bg-slate-50 pt-4 pb-24 md:pt-8 md:pb-36 overflow-hidden"
    >
      <motion.div 
        animate={mounted ? { x: mousePos.x, y: mousePos.y } : { x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 40, damping: 25 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-orange-400/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[130px]" 
        />
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[30%] w-[700px] h-[700px] rounded-full bg-pink-500/10 blur-[140px]" 
        />
      </motion.div>
      
      <motion.div 
         initial={{ height: 0 }}
         animate={isInView ? { height: "120px" } : { height: 0 }}
         transition={{ duration: 1.5, ease: "easeInOut" }}
         className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 hidden md:block z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 md:pt-8">
        
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-slate-200 rounded-full text-slate-500 text-[11px] font-black uppercase tracking-[0.4em] mb-6 shadow-sm overflow-hidden relative group cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse relative z-10" />
            <span className="relative z-10">Methodology</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
            Growth Isn’t Magic.<br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-600 to-blue-600 ml-0 md:ml-3">
              It’s Engineered.
            </span>
          </h2>
          
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Most agencies will promise you rankings. Some will even get you traffic. 
            <span className="text-slate-900 font-bold block mt-3 text-xl md:text-2xl tracking-tight">But very few understand what actually makes a business grow online.</span>
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial={false}
          animate={mounted && isInView ? "visible" : "visible"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24"
        >
          {/* Card 1: Intent */}
          <InteractiveCard variants={itemVariants}>
            <div className="h-48 w-full bg-slate-50 rounded-2xl border border-slate-100 mb-8 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/5 transition-colors duration-500 opacity-50 group-hover:opacity-100" />
              <div className="w-4/5 h-12 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center px-4 gap-3 z-10 -mt-4 transform transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]">
                 <Search className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors duration-500" />
                 <div className="h-2 w-1/2 bg-slate-200 rounded-full group-hover:bg-blue-100 transition-colors duration-500" />
              </div>
              <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute bottom-6 right-10 text-blue-500 drop-shadow-md z-20 group-hover:-rotate-12 transition-transform duration-500"
              >
                 <MousePointer2 className="w-9 h-9 fill-blue-50 stroke-[1.5]" />
              </motion.div>
            </div>
            
            <div className="flex-grow z-10 relative pointer-events-none">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 shadow-sm transition-all duration-500 border border-blue-100/50">
                <Target className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-500">The Right Intent</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Real growth happens when everything works together — when your business shows up at the right time, in front of the right people, with the right intent behind every click.
              </p>
            </div>
          </InteractiveCard>

          {/* Card 2: Behavior */}
          <InteractiveCard variants={itemVariants}>
            <div className="h-48 w-full bg-slate-50 rounded-2xl border border-slate-100 mb-8 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-pink-500/5 transition-colors duration-500 opacity-50 group-hover:opacity-100" />
              <div className="relative w-full h-full flex items-center justify-center">
                 <Network className="absolute w-28 h-28 text-pink-200 stroke-[1.5] transition-transform duration-1000 ease-out group-hover:scale-125 group-hover:rotate-12" />
                 <div className="w-16 h-16 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-full z-10 flex items-center justify-center border border-pink-50 group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-7 h-7 text-pink-500 group-hover:text-pink-600 transition-colors duration-500" />
                 </div>
                 <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-8 left-12 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center border border-slate-50 group-hover:border-pink-200 transition-colors duration-500"><div className="w-2.5 h-2.5 bg-blue-400 rounded-full" /></motion.div>
                 <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 right-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center border border-slate-50 group-hover:border-pink-200 transition-colors duration-500"><div className="w-3.5 h-3.5 bg-orange-400 rounded-full" /></motion.div>
              </div>
            </div>
            
            <div className="flex-grow z-10 relative pointer-events-none">
              <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-pink-500 shadow-sm transition-all duration-500 border border-pink-100/50">
                <BarChart3 className="w-7 h-7 text-pink-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-pink-600 transition-colors duration-500">Behavior-Driven</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                We don’t start with tools or tactics. We start by deeply understanding how your exact customers search, compare, and finally decide.
              </p>
            </div>
          </InteractiveCard>

          {/* Card 3: Action */}
          <InteractiveCard variants={itemVariants}>
            <div className="h-48 w-full bg-slate-50 rounded-2xl border border-slate-100 mb-8 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-orange-500/5 transition-colors duration-500 opacity-50 group-hover:opacity-100" />
              <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105">
                 <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-700" />
                 <button className="relative px-6 py-3.5 bg-white border border-orange-100 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center gap-2 font-bold text-slate-800 pointer-events-none">
                   Book Appointment
                   <CheckCircle2 className="w-5 h-5 text-green-500 transition-transform duration-500 group-hover:scale-125" />
                 </button>
              </div>
              <motion.div 
                 animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl z-0 group-hover:scale-150 transition-transform duration-1000"
              />
            </div>
            
            <div className="flex-grow z-10 relative pointer-events-none">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 shadow-sm transition-all duration-500 border border-orange-100/50">
                <Zap className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-orange-600 transition-colors duration-500">Engineered for Action</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Then we build a system around that behavior — so when someone finds you on Google, they don’t just visit… they take action.
              </p>
            </div>
          </InteractiveCard>

        </motion.div>

        {/* Premium Creative Agency Glass CTA Banner */}
        <motion.div
          variants={itemVariants}
          initial={false}
          animate={mounted && isInView ? "visible" : "visible"}
          className="w-full relative group cursor-default"
        >
          {/* Subtle Outer Drop Shadow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-pink-200 rounded-[3.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-1000" />
          
          <div className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-white/60 backdrop-blur-2xl border-2 border-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-700 p-8 md:p-12 lg:p-16">
            
            {/* Highly abstract internal moving gradients for agency vibe */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-400/30 transition-colors duration-1000" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-orange-400/20 to-pink-400/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 group-hover:bg-orange-400/30 transition-colors duration-1000" />
            <div className="absolute inset-0 bg-white/40" /> {/* Extra frosted layer */}
            
            <div className="relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text & CTA */}
              <div className="text-left flex flex-col items-start lg:col-span-5 order-2 lg:order-1">
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-full text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
                   <Zap className="w-3 h-3 fill-blue-600" /> Let's Scale
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-slate-900 leading-[1.1] tracking-tight mb-6 relative">
                  More visibility.<br /> Better leads.<br />
                  <span className="relative inline-block mt-3">
                    <span className="relative z-10 px-4 text-white">Real growth.</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-500 rounded-xl -rotate-2 z-0 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-xl" />
                  </span>
                </h3>

                <p className="text-slate-600 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed">
                  Built with proven strategy, not <span className="text-slate-900 font-bold border-b-2 border-orange-400">guesswork.</span> Let our team build a marketing engine that turns clicks into serious revenue for your business.
                </p>
                
                <button className="group/btn relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 tracking-wide text-base">Start Growing Today</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Column: The "Search -> Decision -> Journey" Graphic */}
              <div className="flex justify-center w-full lg:col-span-7 order-1 lg:order-2">
                 <div className="transform group-hover:-rotate-1 group-hover:scale-[1.03] group-hover:-translate-y-2 transition-transform duration-700 ease-out w-full">
               {/* Guaranteed SSR-safe visual */}
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
