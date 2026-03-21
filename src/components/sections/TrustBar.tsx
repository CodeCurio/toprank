"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, Award, CheckCircle2, Globe, TrendingUp, Users, Zap, MonitorSmartphone } from "lucide-react";

// Authority Branding Platforms with original brand colors
const PLATFORMS = [
  {
    id: "google",
    name: "Google Business",
    proof: "82+ Reviews",
    rating: "4.9 ⭐",
    status: "Top Rated",
    color: "text-[#4285F4]",
    bg: "bg-[#4285F4]/5",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    id: "trustpilot",
    name: "Trustpilot",
    proof: "Great Service",
    rating: "4.7 Score",
    status: "Verified",
    color: "text-[#00b67a]",
    bg: "bg-[#00b67a]/5",
    icon: (
      <div className="relative group-hover:scale-110 transition-transform duration-500">
        <Star className="w-8 h-8 fill-current" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] font-black text-white">TP</div>
      </div>
    ),
  },
  {
    id: "meta",
    name: "Meta Partner",
    proof: "Ad Certified",
    rating: "Proven",
    status: "Official",
    color: "text-[#0668E1]",
    bg: "bg-[#0668E1]/5",
    icon: (
      <svg viewBox="0 0 24 24" className="w-9 h-9 group-hover:scale-110 transition-transform duration-500" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.514c-1.393.79-3.155 1.196-5.111 1.196-4.526 0-7.073-2.434-7.073-6.71 0-4.275 2.547-6.709 7.073-6.709 1.956 0 3.718.406 5.111 1.196v3.131c-1.172-.736-2.5-1.104-3.824-1.104-2.28 0-3.612 1.346-3.612 3.486 0 2.138 1.332 3.484 3.612 3.484 1.324 0 2.652-.368 3.824-1.104v3.134z" />
      </svg>
    ),
  },
  {
    id: "clutch",
    name: "Clutch Global",
    proof: "72% ROI Boost",
    rating: "High Growth",
    status: "Verified",
    color: "text-[#ff3c2f]",
    bg: "bg-[#ff3c2f]/5",
    icon: <Award className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />,
  },
  {
    id: "justdial",
    name: "Justdial",
    proof: "Top Ranking",
    rating: "Verified",
    status: "Power Lister",
    color: "text-[#ff6a00]",
    bg: "bg-[#ff6a00]/5",
    icon: <Users className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />,
  },
  {
    id: "indiamart",
    name: "IndiaMart",
    proof: "Lead Master",
    rating: "Trust Seal",
    status: "Premium",
    color: "text-[#2e3192]",
    bg: "bg-[#2e3192]/5",
    icon: <ShieldCheck className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />,
  },
  {
    id: "sulekha",
    name: "Sulekha",
    proof: "Local Expert",
    rating: "4.8 Rated",
    status: "Elite",
    color: "text-[#f9b115]",
    bg: "bg-[#f9b115]/5",
    icon: <Zap className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />,
  },
  {
    id: "bing",
    name: "Bing Places",
    proof: "MS Verified",
    rating: "Sync'd",
    status: "Active",
    color: "text-[#008373]",
    bg: "bg-[#008373]/5",
    icon: <Globe className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />,
  },
  {
    id: "apple",
    name: "Apple Maps",
    proof: "iOS Reach",
    rating: "Verified",
    status: "Connected",
    color: "text-[#555555]",
    bg: "bg-[#555555]/5",
    icon: <MonitorSmartphone className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />,
  }
];
export function TrustBar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // 2x duplication for perfect infinite loop
  const marqueeItems = [...PLATFORMS, ...PLATFORMS];

  // Render main container regardless of mounted state, only conditionalize the marquee logic
  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 mt-[-32px] lg:mt-[-52px] pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className="bg-white border md:border-white/50 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] p-8 lg:px-14 lg:py-12 overflow-hidden ring-1 ring-slate-900/5 relative group min-h-[180px]">
          {/* Subtle Radiant Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

          <div className="mb-10 text-center relative z-10">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-6">
                 <Zap className="w-4 h-4 text-blue-500" />
                 <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.2em]">Authentic Verification</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Verified Multi-Channel <span className="text-blue-600 italic">Reach</span>
              </h2>
            </div>
          </div>

          {/* Truly Seamless Infinite Marquee - Only render when mounted for stability */}
          <div className="relative w-full overflow-hidden block">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {mounted ? (
              <motion.div
                initial={{ x: "0%" }}
                animate={{ x: "-50%" }}
                transition={{ duration: 22, ease: "linear", repeat: Infinity }}
                className="flex whitespace-nowrap pb-4"
              >
                {marqueeItems.map((item, idx) => (
                  <div key={idx} className="mx-4 md:mx-6 lg:mx-10 relative flex-shrink-0">
                    <div className="flex items-center bg-white border border-slate-100 p-5 rounded-[2rem] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]">
                      <div className={`${item.color} mr-5 p-3 rounded-2xl ${item.bg}`}>
                        {item.icon}
                      </div>
                      <div className="pr-2">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-black text-slate-900 tracking-tight">{item.name}</h3>
                          <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-[13px] font-black ${item.color}`}>{item.rating}</span>
                          <span className="h-1 w-1 rounded-full bg-slate-200" />
                          <span className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">{item.proof}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
               <div className="h-24 w-full flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-xs">Initializing Authorities...</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
