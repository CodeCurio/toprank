"use client";

import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight, Target, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityFade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Highly visible interactive flashlight glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const spotlightGradient = useMotionTemplate`radial-gradient(1000px circle at ${mouseX}px ${mouseY}px, rgba(37,99,235,0.18), transparent 80%)`;
  const gridSpotlight = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.2), transparent 80%)`;

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden bg-slate-950 flex flex-col justify-center group"
    >
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        
        {/* Layer 1: Ambient Slowly Rotating Aurora Orbs */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[30%] -right-[10%] w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12)_0%,transparent_60%)] blur-[50px] mix-blend-screen will-change-transform" 
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -left-[20%] w-[1400px] h-[1400px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.08)_0%,transparent_60%)] blur-[50px] mix-blend-screen will-change-transform" 
        />

        {/* Layer 2: Interactive Mouse Tracking Spotlight */}
        <motion.div
          className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: spotlightGradient }}
        />

        {/* Layer 3: Interactive Grid that lights up ONLY exactly under the cursor */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,black_10%,transparent_100%)]"></div>
        
        {/* Cursor Glow Grid Reveal */}
        <motion.div
           className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:48px_48px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
           style={{ maskImage: gridSpotlight, WebkitMaskImage: gridSpotlight }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
          
          <motion.div style={{ opacity: opacityFade }} className="max-w-xl relative shrink-0">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full w-max text-blue-400 font-bold text-xs uppercase tracking-widest mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <Target className="w-4 h-4" />
              The Growth Engineers
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white leading-[1.05] tracking-tight mb-8"
            >
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Predictable Scalability.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 font-medium"
            >
              We are TopRank Digital Service, a hyper-focused digital marketing agency. 
              We don't chase vanity metrics. We build robust SEO ecosystems, stunning websites, and data-driven marketing funnels that command market share.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
               className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <a href="#company-overview" className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest group px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all">
                Discover Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 overflow-hidden relative">
                      <Image 
                        src={`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop&crop=face&auto=compress`} 
                        alt="Team member" 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  ))}
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest flex flex-col justify-center">
                  <span>Trusted by</span>
                  <span className="text-white">250+ Brands</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Parallax Media Collage */}
          <div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center isolate pointer-events-none lg:pointer-events-auto mt-10 lg:mt-0">
            
            {/* Main Image */}
            <motion.div 
               style={{ y: y1 }}
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
               className="absolute w-[85%] md:w-[65%] lg:w-[75%] right-0 top-[5%] md:top-[10%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10"
            >
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10" />
              <div className="relative w-full h-full"> 
                {/* Embedded images need relative wrappers when using fill */}
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                  alt="Strategic Planning"
                  fill
                  className="object-cover scale-105"
                  priority
                />
              </div>
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div 
               style={{ y: y2 }}
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
               className="absolute w-[60%] md:w-[45%] lg:w-[55%] left-0 bottom-[5%] md:bottom-[10%] aspect-square rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-8 border-slate-950 z-20"
            >
              <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay z-10" />
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
                  alt="Data Analysis"
                  fill
                  className="object-cover scale-110"
                />
              </div>
            </motion.div>

            {/* Floating Graphic Element */}
            <motion.div
               className="absolute right-[5%] bottom-[20%] z-30 pointer-events-none"
            >
               <motion.div
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                     <Target className="w-5 h-5" />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Growth Rate</p>
                     <p className="text-xl font-black text-white">+314% Avg</p>
                   </div>
                 </div>
               </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
