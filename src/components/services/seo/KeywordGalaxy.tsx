"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Target, Search, Share2, MessageCircle, BarChart3, Rocket } from "lucide-react";

const KEYWORDS = [
  { text: "Best SEO Agency", size: "text-2xl", x: -200, y: -150 },
  { text: "Lucknow Marketing", size: "text-xl", x: 200, y: -180 },
  { text: "Organic Leads", size: "text-lg", x: -250, y: 100 },
  { text: "Ranking #1", size: "text-3xl", x: 150, y: 150 },
  { text: "Local Business SEO", size: "text-lg", x: 300, y: -50 },
  { text: "E-commerce SEO", size: "text-xl", x: -300, y: -20 },
  { text: "Technical Audit", size: "text-sm", x: 100, y: -250 },
  { text: "Content Strategy", size: "text-sm", x: -100, y: 250 },
];

export function KeywordGalaxy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Spring for smoother gravitation
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8"
          >
            Dominate Every <br />
            <span className="text-blue-500">Search Query.</span>
          </motion.h2>
          <p className="text-lg text-slate-400 font-medium">
            We don't just target one keyword; we own the entire topical universe of your industry. Our strategy consolidates authority across thousands of relevant search terms.
          </p>
        </div>

        {/* The Galaxy Canvas */}
        <div className="relative h-[600px] flex items-center justify-center">
           
           {/* Central Core (The Result) */}
           <motion.div
             style={{
               scale: useTransform(smoothProgress, [0.3, 0.5, 0.7], [0.8, 1.2, 1]),
               opacity: useTransform(smoothProgress, [0.2, 0.4], [0, 1]),
               rotate: useTransform(smoothProgress, [0, 1], [0, 360])
             }}
             className="w-48 h-48 rounded-full bg-blue-600/20 border-2 border-blue-500/50 flex flex-col items-center justify-center shadow-[0_0_100px_rgba(59,130,246,0.3)] z-20"
           >
              <Target className="w-12 h-12 text-blue-400 mb-2" />
              <div className="text-xs font-black text-white uppercase tracking-widest">Athority Core</div>
              <div className="text-[10px] text-blue-300 font-bold">100/100</div>
           </motion.div>

           {/* Orbiting Keywords */}
           <div className="absolute inset-0 pointer-events-none">
              {KEYWORDS.map((kw, i) => (
                <motion.div
                  key={i}
                  style={{
                    x: useTransform(smoothProgress, [0, 0.6], [kw.x, 0]),
                    y: useTransform(smoothProgress, [0, 0.6], [kw.y, 0]),
                    opacity: useTransform(smoothProgress, [0, 0.5, 0.7], [0.4, 1, 0]),
                    scale: useTransform(smoothProgress, [0, 0.5], [0.5, 1]),
                  }}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full font-black text-white ${kw.size} shadow-xl backdrop-blur-sm`}
                >
                   {kw.text}
                </motion.div>
              ))}
           </div>

           {/* Pulse Lines */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 800 600">
              {[1, 2, 3, 4].map(i => (
                <motion.circle
                  key={i}
                  cx="400"
                  cy="300"
                  r={100 * i}
                  stroke="#3b82f6"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                />
              ))}
           </svg>
        </div>

        {/* Outcome Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
           {[
             { label: "Keywords Ranked", val: "2,400+", icon: Search },
             { label: "Organic Reach", val: "1.2M+", icon: Share2 },
             { label: "Site Authority", val: "84/100", icon: BarChart3 },
             { label: "ROI Velocity", val: "5.4x", icon: Rocket }
           ].map((stat, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="p-6 bg-slate-800/50 rounded-3xl border border-slate-700/50"
             >
                <stat.icon className="w-6 h-6 text-blue-500 mb-4 mx-auto" />
                <div className="text-2xl font-black text-white mb-1">{stat.val}</div>
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}

