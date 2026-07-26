"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Zap, Star, ShieldCheck, Award, TrendingUp, Users, Globe2 } from "lucide-react";

// 4 High-Trust Authority Stats
const STATS = [
  { label: "Google Business Rating", value: "4.9 ★", sub: "Based on 82+ Reviews", icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
  { label: "Brands Scaled", value: "250+", sub: "Pan India Presence", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Client Retention Rate", value: "98.4%", sub: "Long-term Partnerships", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Certified Multi-Channel", value: "10+ Networks", sub: "Official Listings", icon: ShieldCheck, color: "text-purple-600", bg: "bg-purple-50" },
];

// Rich Platforms with authentic vector SVGs & specific proof metrics
const PLATFORMS = [
  {
    id: "google",
    name: "Google Business",
    rating: "4.9 ★ (82+ Reviews)",
    proof: "Rank #1 GMB 3-Pack",
    status: "Top Rated",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"/>
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z"/>
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
      </svg>
    ),
  },
  {
    id: "trustpilot",
    name: "Trustpilot",
    rating: "4.8/5 Score",
    proof: "Great Service Rating",
    status: "Verified",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-[#00b67a]">
        <path d="M12 0L15.09 8.26H24L16.77 13.37L19.54 21.63L12 16.52L4.46 21.63L7.23 13.37L0 8.26H8.91L12 0Z"/>
      </svg>
    ),
  },
  {
    id: "meta",
    name: "Meta Partner",
    rating: "Ad Certified",
    proof: "High-ROAS Campaigns",
    status: "Official",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-[#0668E1]">
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
      </svg>
    ),
  },
  {
    id: "clutch",
    name: "Clutch Global",
    rating: "72% ROI Boost",
    proof: "Top B2B Agency",
    status: "Verified",
    badgeBg: "bg-red-50 text-red-700 border-red-200",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-[#da291c]">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"/>
      </svg>
    ),
  },
  {
    id: "justdial",
    name: "Justdial",
    rating: "Top Ranking",
    proof: "Power Lister Spot",
    status: "Verified",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-[#ff6a00]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    ),
  },
  {
    id: "indiamart",
    name: "IndiaMART",
    rating: "Trust Seal",
    proof: "Verified Supplier",
    status: "Premium",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-[#2e3192]">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4 9.6l7 3.5v7.1l-7-3.5V9.6zm16 7.1l-7 3.5v-7.1l7-3.5v7.1z"/>
      </svg>
    ),
  },
  {
    id: "bing",
    name: "Bing Places",
    rating: "MS Verified",
    proof: "Sync'd Search Engine",
    status: "Active",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-[#008373]">
        <path d="M5 3v18l5-2.5V8.5l6 2.5-3.5 1.5 5 5 1.5-6L5 3z"/>
      </svg>
    ),
  },
  {
    id: "apple",
    name: "Apple Business Connect",
    rating: "iOS Maps",
    proof: "Apple Ecosystem",
    status: "Connected",
    badgeBg: "bg-slate-100 text-slate-800 border-slate-300",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-[#333333]">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.64-.78 1.07-1.85.95-2.93-.93.04-2.06.62-2.73 1.4-.6.69-1.12 1.79-.98 2.85 1.05.08 2.12-.54 2.76-1.32"/>
      </svg>
    ),
  },
  {
    id: "sulekha",
    name: "Sulekha Local",
    rating: "4.9 Rated",
    proof: "Local Service Expert",
    status: "Verified",
    badgeBg: "bg-orange-50 text-orange-700 border-orange-200",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-[#f9b115]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
  },
  {
    id: "whatsapp",
    name: "WhatsApp Business",
    rating: "Verified API",
    proof: "Automated Lead Bot",
    status: "Official",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0 fill-[#25D366]">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.999 1.594-1.056 3.856 3.948-1.035.852 1.252z"/>
      </svg>
    ),
  },
];

export function TrustBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Duplicate 3x for seamless infinite marquee loop across wide screens
  const marqueeItems = [...PLATFORMS, ...PLATFORMS, ...PLATFORMS];

  return (
    <section className="w-full bg-slate-50/90 py-12 lg:py-16 border-y border-slate-200/80 relative overflow-hidden">
      
      {/* Subtle Background Radial Highlights */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
            <Zap className="w-3.5 h-3.5 fill-blue-600" /> Authentic Authority &amp; Multi-Channel Reach
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto leading-snug">
            Verified &amp; Certified Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">India&apos;s Leading Search Networks</span>
          </h2>
        </div>

        {/* 4 High-Trust Authority Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {STATS.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 p-4 sm:p-5 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] flex items-center gap-3 sm:gap-4 group hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className={`p-2.5 sm:p-3 rounded-xl ${stat.bg} ${stat.color} shrink-0 group-hover:scale-110 transition-transform`}>
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-bold text-slate-700 leading-tight mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[10px] font-semibold text-slate-400">
                    {stat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Full Width Marquee Strip with Side Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-slate-50 via-slate-50/95 to-transparent z-20 pointer-events-none" />
        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-slate-50 via-slate-50/95 to-transparent z-20 pointer-events-none" />

        {mounted ? (
          <>
            <style>{`
              @keyframes marquee-scroll {
                0% { transform: translate3d(0, 0, 0); }
                100% { transform: translate3d(-33.333%, 0, 0); }
              }
              .animate-marquee {
                animation: marquee-scroll 32s linear infinite;
                will-change: transform;
                backface-visibility: hidden;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="flex w-max items-center py-2 animate-marquee">
              {marqueeItems.map((platform, idx) => (
                <div
                  key={`${platform.id}-${idx}`}
                  className="mx-3 sm:mx-4 flex-shrink-0 group"
                >
                  <div className="bg-white border border-slate-200/90 hover:border-blue-300 p-4 sm:p-5 rounded-2xl transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-lg flex items-center gap-4 min-w-[260px] sm:min-w-[290px]">
                    
                    {/* Official Brand Logo Icon Container */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {platform.svg}
                    </div>

                    {/* Brand Name & Rating Badges */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                          {platform.name}
                        </h3>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      </div>

                      <p className="text-[11px] font-bold text-slate-600 mb-1">
                        {platform.proof}
                      </p>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-slate-700">
                          {platform.rating}
                        </span>
                        <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${platform.badgeBg}`}>
                          {platform.status}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="h-20 w-full flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-xs">
            Loading Verified Networks...
          </div>
        )}
      </div>

      {/* Bottom Guarantee Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center relative z-10">
        <p className="text-xs font-bold text-slate-500 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>100% Transparent Live Dashboard Tracking &amp; Guaranteed Citation Sync Across All Platforms</span>
        </p>
      </div>

    </section>
  );
}
