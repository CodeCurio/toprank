"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  HeartPulse, 
  Home, 
  ShoppingBag, 
  GraduationCap, 
  Utensils, 
  Briefcase 
} from "lucide-react";

const NODES = [
  { id: "health", icon: HeartPulse, label: "Healthcare", metric: "+340% ROI", color: "from-rose-500 to-pink-600", angle: -60 },
  { id: "realestate", icon: Home, label: "Real Estate", metric: "-22% CPL", color: "from-blue-500 to-indigo-600", angle: 0 },
  { id: "ecom", icon: ShoppingBag, label: "E-commerce", metric: "4.8x ROAS", color: "from-pink-500 to-orange-600", angle: 60 },
  { id: "edu", icon: GraduationCap, label: "Education", metric: "65% Growth", color: "from-amber-500 to-orange-600", angle: 120 },
  { id: "hospitality", icon: Utensils, label: "Hospitality", metric: "+40% Bookings", color: "from-indigo-500 to-violet-600", angle: 180 },
  { id: "pro", icon: Briefcase, label: "Pro Services", metric: "3x Leads", color: "from-slate-600 to-slate-800", angle: 240 },
];

export function GrowthEngine() {
  const [activeNode, setActiveNode] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % NODES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return (
     <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center overflow-visible">
        {/* Simple placeholder or nothing during SSR to avoid mismatch */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-950/20 animate-pulse" />
     </div>
  );

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center group overflow-visible">
      
      {/* 1. CENTRAL TOPRANK CORE */}
      <div className="relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-950 flex items-center justify-center p-1 shadow-2xl shadow-blue-500/20">
         <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-rose-500 animate-spin-slow opacity-80" />
         <div className="relative w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
            <motion.div 
               animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="text-white text-center"
            >
               <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-1">TopRank</p>
               <p className="text-xl font-black tracking-tighter leading-none">CORE</p>
            </motion.div>
            
            {/* Interior Scanning Lines */}
            <motion.div 
               animate={{ y: ["-100%", "100%"] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 w-full h-1/2 bg-white/5 skew-y-12"
            />
         </div>
         
         {/* External Glow Ring */}
         <motion.div 
            animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-blue-500/50"
         />
      </div>

      {/* 2. DATA BEAMS (Pulses from Core to Nodes) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10" viewBox="0 0 400 400">
         <defs>
            <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
               <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
               <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
         </defs>

         {NODES.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const x2 = Number((200 + Math.cos(rad) * 140).toFixed(3));
            const y2 = Number((200 + Math.sin(rad) * 140).toFixed(3));
            
            return (
               <g key={`beam-${node.id}`}>
                  {/* Subtle Static Path */}
                  <line 
                     x1="200" y1="200" x2={x2} y2={y2} 
                     stroke="currentColor" 
                     strokeWidth="1" 
                     className="text-slate-200 opacity-20"
                  />
                  
                  {/* Active Data Pulse */}
                  <AnimatePresence>
                     {activeNode === i && (
                        <motion.line 
                           x1="200" y1="200" x2={x2} y2={y2} 
                           stroke="url(#beamGradient)" 
                           strokeWidth="3" 
                           strokeDasharray="20 100"
                           initial={{ strokeDashoffset: 120, opacity: 0 }}
                           animate={{ strokeDashoffset: -120, opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.8, ease: "easeIn" }}
                        />
                     )}
                  </AnimatePresence>
               </g>
            );
         })}
      </svg>

      {/* 3. INDUSTRY SUCCESS NODES */}
      {NODES.map((node, i) => {
         const rad = (node.angle * Math.PI) / 180;
         const x = Number((Math.cos(rad) * 145).toFixed(3));
         const y = Number((Math.sin(rad) * 145).toFixed(3));

         const Icon = node.icon;

         return (
            <motion.div
               key={node.id}
               style={{ 
                  x, y,
                  position: "absolute" 
               }}
               animate={{ 
                  scale: activeNode === i ? 1.1 : 1,
                  boxShadow: activeNode === i ? "0 20px 40px -10px rgba(59,130,246,0.3)" : "none"
               }}
               className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center p-2 z-30 transition-all duration-500
                  ${activeNode === i ? 'border-blue-500 ring-4 ring-blue-500/10' : 'hover:border-slate-300'}`}
            >
               <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center text-white mb-2 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               
               <AnimatePresence mode="wait">
                  <motion.div
                     key={activeNode === i ? 'metric' : 'label'}
                     initial={{ opacity: 0, y: 5 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -5 }}
                     className="text-center"
                  >
                     {activeNode === i ? (
                        <p className="text-[10px] md:text-[11px] font-black text-blue-600 tracking-tighter leading-none">{node.metric}</p>
                     ) : (
                        <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">{node.label}</p>
                     )}
                  </motion.div>
               </AnimatePresence>

               {/* Success Ripple when Active */}
               {activeNode === i && (
                  <motion.div 
                     layoutId="ripple"
                     animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                     transition={{ duration: 1, repeat: Infinity }}
                     className="absolute -inset-2 border-2 border-blue-500/20 rounded-3xl"
                  />
               )}
            </motion.div>
         );
      })}

      {/* 4. CONNECTING CIRCULAR ORBIT */}
      <div className="absolute inset-0 border-[1px] border-slate-100 rounded-full scale-[0.72] pointer-events-none" />
      <div className="absolute inset-0 border-[1px] border-slate-100 rounded-full scale-[0.35] pointer-events-none" />
    </div>
  );
}
