"use client";

import { Phone, Mail, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePhone } from "@/hooks/usePhone";

export function TopBar() {
  const phone = usePhone();

  return (
    <div className="bg-slate-950 text-slate-300 border-b border-slate-800/80 text-[10px] sm:text-[11px] font-bold py-2 relative z-[70] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
        
        {/* Mobile View (< 640px): Pan India + Phone + Email */}
        <div className="flex sm:hidden items-center justify-between w-full text-[10px] gap-2">
          <div className="flex items-center gap-1 text-orange-400 font-black shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span>Pan India Partner</span>
          </div>

          <div className="flex items-center gap-2 text-[10px]">
            <a href={`tel:+91${phone.raw}`} className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors">
              <Phone className="w-2.5 h-2.5 text-blue-400" />
              <span>{phone.display}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a href="mailto:connect@toprankindia.com" className="flex items-center gap-1 text-slate-200 hover:text-white transition-colors truncate max-w-[140px]">
              <Mail className="w-2.5 h-2.5 text-pink-400 shrink-0" />
              <span className="truncate">Email</span>
            </a>
          </div>
        </div>

        {/* Tablet & Desktop Layout (>= 640px) */}
        
        {/* Left: Pan India & Offices */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 text-orange-400 font-black text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span>Pan India Digital Partner</span>
          </span>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-2 text-slate-300 font-semibold text-[11px]">
            <span className="text-white font-bold">Lucknow (HQ)</span>
            <span className="text-slate-600">·</span>
            <span>Chandigarh</span>
            <span className="text-slate-600">·</span>
            <span>Mohali</span>
            <span className="text-slate-600">·</span>
            <span>Gonda</span>
          </div>
        </div>

        {/* Center: Free Audit Announcement */}
        <div className="hidden lg:flex items-center gap-2 text-slate-300">
          <Link href="#contact" className="text-orange-400 hover:text-orange-300 font-black flex items-center gap-1">
            <Sparkles className="w-3 h-3 fill-orange-400" />
            <span>Free Strategy Audit</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Right: Phone & Email */}
        <div className="hidden sm:flex items-center gap-3 md:gap-4 shrink-0 text-slate-300">
          <a href={`tel:+91${phone.raw}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-blue-400" />
            <span>{phone.display}</span>
          </a>
          <span className="text-slate-700">|</span>
          <a href="mailto:connect@toprankindia.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail className="w-3 h-3 text-pink-400" />
            <span>connect@toprankindia.com</span>
          </a>
        </div>

      </div>
    </div>
  );
}
