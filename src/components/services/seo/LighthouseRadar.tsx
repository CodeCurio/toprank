"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Zap, ShieldCheck, Search, BarChart3, Clock, Rocket, Globe, AlertCircle, CheckCircle2 } from "lucide-react";

const METRICS = [
  { 
    id: "performance", 
    label: "Performance", 
    startValue: 42,
    endValue: 98, 
    icon: Zap, 
    color: "text-amber-500", 
    bg: "bg-amber-500/10",
    desc: "Speed is a primary ranking factor. We optimize for sub-second LCP.",
    trigger: [0.1, 0.3] // scroll range to trigger
  },
  { 
    id: "seo", 
    label: "SEO Score", 
    startValue: 35,
    endValue: 100, 
    icon: Search, 
    color: "text-blue-500", 
    bg: "bg-blue-500/10",
    desc: "Perfect semantic structure and metadata for every single page.",
    trigger: [0.2, 0.4]
  },
  { 
    id: "best-practices", 
    label: "Best Practices", 
    startValue: 58,
    endValue: 95, 
    icon: ShieldCheck, 
    color: "text-emerald-500", 
    bg: "bg-emerald-500/10",
    desc: "Adherence to all Google Webmaster and security guidelines.",
    trigger: [0.3, 0.5]
  },
  { 
    id: "accessibility", 
    label: "Accessibility", 
    startValue: 62,
    endValue: 92, 
    icon: Globe, 
    color: "text-purple-500", 
    bg: "bg-purple-500/10",
    desc: "Ensuring an inclusive experience for every user on every device.",
    trigger: [0.4, 0.6]
  }
];

function ScoreCard({ metric, scrollYProgress }: { metric: typeof METRICS[0], scrollYProgress: any }) {
  // Transformation for the score value
  const rawValue = useTransform(scrollYProgress, metric.trigger, [metric.startValue, metric.endValue]);
  const score = useSpring(rawValue, { stiffness: 50, damping: 20 });
  const [displayScore, setDisplayScore] = useState(metric.startValue);

  // Transformation for colors and icons
  const isOptimized = useTransform(scrollYProgress, [metric.trigger[0], metric.trigger[1]], [0, 1]);
  const cardScale = useTransform(scrollYProgress, [metric.trigger[0], (metric.trigger[0] + metric.trigger[1])/2, metric.trigger[1]], [1, 1.05, 1]);
  
  useEffect(() => {
    return score.on("change", (latest) => {
      setDisplayScore(Math.floor(latest));
    });
  }, [score]);

  return (
    <motion.div
      style={{ scale: cardScale }}
      className="bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 group transition-all duration-500 w-[220px]"
    >
      <div className={`w-12 h-12 rounded-2xl ${metric.bg} flex items-center justify-center relative`}>
        <metric.icon className={`w-6 h-6 transition-colors duration-500 ${displayScore > 90 ? metric.color : 'text-slate-400'}`} />
        <motion.div 
          style={{ opacity: isOptimized }}
          className="absolute -top-1 -right-1"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-white" />
        </motion.div>
      </div>
      <div>
        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{metric.label}</div>
        <div className={`text-2xl font-black leading-none flex items-baseline gap-1 transition-colors duration-500 
          ${displayScore > 90 ? 'text-slate-900' : displayScore > 70 ? 'text-amber-600' : 'text-rose-600'}`
        }>
          {displayScore}
          <span className="text-[10px] opacity-40">/100</span>
        </div>
      </div>
      
      {/* Scanning status line */}
      <motion.div 
        style={{ scaleX: isOptimized }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent origin-left"
      />
    </motion.div>
  );
}

export function LighthouseRadar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Rotate the lighthouse beam based on scroll
  const beamRotate = useTransform(scrollYProgress, [0, 0.6], [-60, 60]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 0.6], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: The Lighthouse Visual */}
          <div className="relative h-[500px] flex items-center justify-center order-2 lg:order-1">
             
             {/* Technical Audit Heading Decor */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-full text-[9px] font-black uppercase tracking-widest mb-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 Live Technical Audit
               </div>
             </div>

             {/* The Beam */}
             <motion.div
               style={{ 
                 rotate: beamRotate, 
                 opacity: beamOpacity,
                 transformOrigin: 'bottom center' 
               }}
               className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] pointer-events-none"
             >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[conic-gradient(from_0deg_at_50%_100%,transparent_75deg,rgba(59,130,246,0.15)_90deg,transparent_105deg)] filter blur-3xl" />
                
                {/* Visual Scanning Indicator */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-px h-20 bg-gradient-to-t from-blue-500 to-transparent" />
                  <div className="bg-blue-600 text-white text-[8px] font-black px-2 py-1 rounded shadow-lg uppercase tracking-widest whitespace-nowrap">
                    Optimizing Infrastructure...
                  </div>
                </div>
             </motion.div>

             {/* The Lighthouse Tower */}
             <div className="relative z-20 flex flex-col items-center mt-20">
                <div className="w-14 h-8 bg-slate-900 rounded-t-xl" />
                <motion.div 
                  className="w-20 h-16 bg-slate-800 border-x-4 border-slate-700 flex items-center justify-center relative overflow-hidden"
                >
                   <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/10 to-transparent animate-pulse" />
                   <div className="w-10 h-10 rounded-full bg-blue-500 shadow-[0_0_60px_rgba(59,130,246,1)] relative z-10" />
                </motion.div>
                <div className="w-24 h-48 bg-slate-900 relative shadow-2xl">
                   <div className="absolute inset-x-6 inset-y-8 grid grid-rows-3 gap-6">
                      <div className="border border-white/5 rounded-sm bg-blue-500/5" />
                      <div className="border border-white/5 rounded-sm" />
                      <div className="border border-white/5 rounded-sm" />
                   </div>
                </div>
                <div className="w-32 h-8 bg-slate-950 rounded-xl shadow-xl" />
             </div>
             
             {/* Floating Score Circles */}
             <div className="absolute inset-0 z-30 pointer-events-none">
                {METRICS.map((metric, i) => (
                  <div
                    key={metric.id}
                    className="absolute"
                    style={{
                      top: i === 0 ? '5%' : i === 1 ? '15%' : i === 2 ? '65%' : '75%',
                      left: i === 0 ? '2%' : i === 2 ? '0%' : 'auto',
                      right: i === 1 ? '2%' : i === 3 ? '0%' : 'auto',
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <ScoreCard metric={metric} scrollYProgress={scrollYProgress} />
                    </motion.div>
                  </div>
                ))}
             </div>
          </div>

          {/* Right: Text Content */}
          <div className="order-1 lg:order-2 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                <Zap className="w-3 h-3 fill-blue-600" /> Technical Supremacy
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
                Engineered for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Google's Favour.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                We don't just "do" SEO. We rebuild your technical foundation to meet every single algorithmic requirement Google demands.
              </p>
            </div>

            <div className="space-y-6">
               <div className="flex gap-6 items-start p-6 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                     <Clock className="w-7 h-7 text-amber-500" />
                  </div>
                  <div>
                     <h4 className="font-black text-slate-900 text-lg mb-1">Sub-Second Performance</h4>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">Our Next.js architecture ensures your site loads faster than 99% of your competitors, drastically reducing bounce rates.</p>
                  </div>
               </div>
               <div className="flex gap-6 items-start p-6 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                     <BarChart3 className="w-7 h-7 text-blue-500" />
                  </div>
                  <div>
                     <h4 className="font-black text-slate-900 text-lg mb-1">Semantic Authority</h4>
                     <p className="text-slate-500 text-sm font-medium leading-relaxed">We structure your data so Google's AI perfectly understands your topical expertise and rewards you with higher rankings.</p>
                  </div>
               </div>
            </div>

            <div className="pt-4">
               <div className="inline-flex items-center gap-4 p-3 pr-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                     <Rocket className="w-7 h-7" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-tight">Elite Guarantee</p>
                     <p className="text-base font-black text-white">100/100 Core Web Vital Scoring</p>
                  </div>
               </div>
            </div>
          </div>

        </div>

      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}

