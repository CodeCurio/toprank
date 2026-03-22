"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Play, Sparkles, ArrowRight, Target, TrendingUp, Zap, ShieldCheck } from "lucide-react";
import { AnimatedCTA } from "@/components/ui/animated-cta";
import Image from "next/image";
import Link from "next/link";
import aboutThumbnail from "@/components/images/About-section-thumbnail.webp";
import React from "react";

const CardItem = React.memo(({ card, i }: { card: any, i: number }) => (
  <div key={i} className="relative p-6 md:p-10 group transform-gpu">
     {/* Frosted Glass Background (Z varies to create weaving effect) */}
     <div className={`absolute inset-0 bg-white/95 backdrop-blur-2xl border border-slate-200/60 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_40px_80px_-20px_rgba(59,130,246,0.1)] ${card.bgZ}`} />
     
     {/* Content (Always on Top) */}
     <div className="relative z-20">
         <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
               {card.icon}
            </div>
            <div className="flex flex-col items-end gap-1">
               {card.badge && (
                 <span className="px-3 py-1 bg-slate-900 text-white text-[8px] font-black uppercase tracking-widest rounded-full">
                    {card.badge}
                 </span>
               )}
               {card.trust && (
                 <span className="text-[7px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-1 text-right">
                    <Sparkles className="w-2 h-2" /> {card.trust}
                 </span>
               )}
            </div>
         </div>
         <h3 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight mb-3 md:mb-5 drop-shadow-sm group-hover:text-blue-600 transition-colors">
            {card.title}
         </h3>
         <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium drop-shadow-sm mb-6">
            {card.content}
         </p>

         {card.hasCTA && (
           <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-600/20">
              Build My Strategy <ArrowRight className="w-3 h-3" />
           </Link>
         )}
     </div>
  </div>
));
CardItem.displayName = "CardItem";

export function ImmersiveAboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.01
  });

  // --- 1. Header Logic ---
  const headerOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const headerY = useTransform(smoothProgress, [0, 0.1], [0, -40]);

  // --- 2. Narrative Logic - Deep Dive Selling Content ---
  const cards = [
    {
      title: "The Reality of SEO in 2024",
      content: "Most marketing agencies sell vanity metrics—likes, generic traffic, or beautiful designs that never actually convert. TopRank was built to solve the real problem: engineering predictable lead generation that moves the needle.",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      bgZ: "z-0",
      badge: "ROI-Focused",
      trust: "5.0 ★ Rating"
    },
    {
      title: "Our Transparent Philosophy",
      content: "We believe in ruthless transparency and data-driven performance. No guesswork. Every backlink, every piece of content, and every UI tweak is calculated with a strict focus on maximizing your Return on Investment.",
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      bgZ: "z-10",
      badge: "Ruthless Transparency",
      trust: "Verified Results"
    },
    {
      title: "AI-Driven Growth Stack",
      content: "We leverage proprietary AI frameworks to identify high-intent search patterns before your competitors do. It's not just marketing; it's digital intelligence applied to dominate your local market.",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      bgZ: "z-0",
      badge: "Next-Gen Tech",
      trust: "AI-Powered"
    },
    {
      title: "Scalable Acquisition Systems",
      content: "Our methodology is built for scale. We don't just 'do SEO'—we build a predictable customer acquisition machine that grows with your business ambitions.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      bgZ: "z-10",
      badge: "Industry Leader",
      hasCTA: true
    }
  ];

  const leftColOpacity = useTransform(smoothProgress, 
    isMobile ? [0, 0.45, 0.55] : [0, 0.08, 0.65, 0.75], 
    isMobile ? [1, 1, 0] : [1, 1, 0, 0]
  );
  const leftColY = useTransform(smoothProgress, 
    isMobile ? [0, 0.45, 0.55] : [0, 0.1, 0.65, 0.75], 
    isMobile ? [0, 0, -80] : [0, 0, -60, -100]
  );

  const rightColOpacity = useTransform(smoothProgress, 
    isMobile ? [0.40, 0.50, 0.85, 0.95] : [0.05, 0.15, 0.70, 0.78], 
    [0, 1, 1, 0]
  );
  const rightColY = useTransform(smoothProgress, 
    isMobile ? [0.40, 0.85] : [0.05, 0.78], 
    [isMobile ? "80vh" : "20vh", isMobile ? "-140vh" : "-60vh"]
  );

  // Curve Drawing Progress
  const pathProgress = useTransform(smoothProgress, [0.05, 0.70], [0, 1]);

  // --- 3. Cinematic Video Expansion (Overlapped for Gap Fix) ---
  const videoOpacity = useTransform(smoothProgress, [0.68, 0.75], [0, 1]);
  const videoY = useTransform(smoothProgress, [0.68, 0.85], [80, 0]);
  
  // High-performance clip-path reveal
  const clipPathMobile = useTransform(smoothProgress, [0.70, 0.85], ["inset(30% 20% 30% 20% round 40px)", "inset(0% 0% 0% 0% round 24px)"]);
  const clipPathDesktop = useTransform(smoothProgress, [0.70, 0.85], ["inset(25% 30% 25% 30% round 48px)", "inset(0% 0% 0% 0% round 24px)"]);
  const clipPathBase = isMobile ? clipPathMobile : clipPathDesktop;

  const imageScale = useTransform(smoothProgress, [0.70, 0.85], [1.3, 1]);
  const glowOpacity = useTransform(smoothProgress, [0.70, 0.85], [0, 0.5]);

  const ctaOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.85, 0.95], [30, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[480vh] bg-white z-0"
      id="about-immersive"
    >
      <div className="sticky top-20 h-[calc(100vh-80px)] w-full overflow-hidden z-20 px-4 md:px-0 flex flex-col items-center justify-center">
        
        {/* --- GLOBAL CONTINUOUS WAVY LINE (Lusion Style Loop) --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
           <svg className="w-full h-full drop-shadow-2xl opacity-90" viewBox="0 0 1000 1000" preserveAspectRatio="none" fill="none">
             <motion.path 
                d={isMobile 
                  ? "M 1000,100 Q 800,50 400,400 T 600,900" 
                  : "M 1100,200 C 700,200 600,300 400,300 C 200,300 50,250 50,450 C 50,650 250,700 400,600 C 600,450 400,900 200,1100"}
                stroke="url(#lusion-blue)"
                strokeWidth={isMobile ? "40" : "45"}
                strokeLinecap="round"
                style={{ pathLength: pathProgress }}
             />
             <defs>
               <linearGradient id="lusion-blue" x1="0" y1="0" x2="1" y2="1">
                 <stop offset="0%" stopColor="#4f46e5" />
                 <stop offset="50%" stopColor="#3b82f6" />
                 <stop offset="100%" stopColor="#8b5cf6" />
               </linearGradient>
             </defs>
           </svg>
        </div>

        <div className="relative w-full h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
            
            {/* Narrative 2-Column Deep Dive */}
            <div className="absolute inset-0 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start pt-[8vh] md:pt-[20vh] pointer-events-none z-20">
              
              {/* Left Column: Sticky-like Headline */}
              <motion.div 
                style={{ opacity: leftColOpacity, y: leftColY }} 
                className="w-full md:w-[40%] flex flex-col mb-12 md:mb-0 md:pr-10 text-center md:text-left pointer-events-auto will-change-[transform,opacity]"
              >
                <div className="inline-flex mx-auto md:mx-0 items-center justify-center md:justify-start gap-2 px-4 py-2 bg-blue-50 border border-blue-100/50 rounded-full w-max text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                  Who we are
                </div>
                <h2 className="text-3xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter shadow-sm relative z-20">
                  Beyond Traffic. <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">True Growth.</span>
                </h2>
                <p className="mt-4 md:mt-6 text-slate-600 text-base md:text-xl font-medium leading-relaxed relative z-20 mb-8">
                  We bridge the gap between aesthetics and actual revenue generation for ambitious brands.
                </p>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <Link href="/about" className="px-8 py-4 bg-slate-900 hover:bg-black text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-slate-900/10 active:scale-95 flex items-center gap-2">
                    Learn More About Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Right Column: Scrolling Cards */}
              <motion.div 
                style={{ opacity: rightColOpacity, y: rightColY }} 
                className="w-full md:w-[60%] flex flex-col gap-6 md:gap-10 md:pl-10 relative will-change-transform transform-gpu"
              >

                  {cards.map((card, i) => (
                    <CardItem key={i} card={card} i={i} />
                  ))}
              </motion.div>
            </div>

            {/* Video Visual Slot */}
            <motion.div 
              style={{ 
                opacity: videoOpacity, 
                y: videoY,
                position: "absolute",
              }}
              className="w-full flex flex-col items-center justify-center z-10 pointer-events-auto will-change-[transform,opacity]"
            >
                {/* Cinematic Core Glow */}
                <motion.div 
                  style={{ opacity: glowOpacity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-blue-500/30 blur-[120px] rounded-full -z-10 pointer-events-none"
                />

                <motion.div
                  style={{ 
                    clipPath: mounted ? clipPathBase : "none",
                    WebkitClipPath: mounted ? clipPathBase : "none" 
                  }}
                  className="w-[92vw] md:w-[85vw] h-[45vh] md:h-[65vh] relative group border border-slate-200/50 will-change-[clip-path] transform-gpu backface-hidden"
                >
                  <motion.div style={{ scale: imageScale }} className="absolute inset-0 w-full h-full origin-center transform-gpu">
                    <Image
                      src={aboutThumbnail}
                      alt="TopRank Digital Service – Strategy Showreel"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                     <motion.div 
                       whileHover={{ scale: 1.1 }}
                       whileTap={{ scale: 0.95 }}
                       className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-md text-slate-950 flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] cursor-pointer"
                     >
                        <Play className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1.5" />
                     </motion.div>
                     <div className="mt-8 text-center px-6">
                        <span className="text-white text-[10px] md:text-[12px] font-black tracking-[0.6em] uppercase opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap">Launch Strategy Showreel</span>
                     </div>
                  </div>
                </motion.div>

                {/* Animated CTA Slot */}
                <motion.div 
                  style={{ opacity: ctaOpacity, y: ctaY }}
                  className="mt-12 flex flex-col items-center gap-6"
                >
                  <AnimatedCTA 
                    text="Read More About Us" 
                    tooltipText="Behind the scenes"
                    icon={<ArrowRight className="w-5 h-5" />}
                    className="shadow-[0_8px_30px_rgb(59,130,246,0.2)]"
                  />
                </motion.div>
              </motion.div>

          </div>
        </div>
    </section>
  );
}


