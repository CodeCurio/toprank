"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  MapPin,
  Search,
  Target,
  MessageCircle,
  Megaphone,
  Palette,
  Video,
  Code,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const primaryServices = [
  {
    title: "Website Development",
    desc: "Zero-lag Next.js & React web apps built to convert visitors into clients.",
    icon: Code,
    color: "text-pink-600",
    bg: "bg-pink-50 border-pink-200",
    href: "/services/web-development",
    tag: "CORE SERVICE",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Rank #1 on Google for high-intent keywords your clients search daily.",
    icon: Search,
    color: "text-indigo-600",
    bg: "bg-indigo-50 border-indigo-200",
    href: "/services/seo",
    tag: "MOST POPULAR",
  },
  {
    title: "Local SEO & Google Maps",
    desc: "Dominate Google Business Profile (GMB) 3-Pack in your target city.",
    icon: MapPin,
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-200",
    href: "/services/local-seo",
    tag: "MAP PACK #1",
  },
  {
    title: "Paid Ads (Google & Meta)",
    desc: "Laser-targeted Search & Social campaigns engineered for high ROAS.",
    icon: Target,
    color: "text-rose-600",
    bg: "bg-rose-50 border-rose-200",
    href: "/services/google-ads",
    tag: "INSTANT LEADS",
  },
];

const secondaryServices = [
  { title: "WhatsApp & AI Automation", desc: "24/7 lead capture bots & CRM funnels", icon: MessageCircle, href: "/services/whatsapp-automation", color: "text-emerald-600" },
  { title: "Full-Stack Marketing", desc: "Omni-channel growth campaigns", icon: Megaphone, href: "/services/digital-marketing", color: "text-blue-600" },
  { title: "Branding & Visual ID", desc: "Logos, brand guidelines & ad creatives", icon: Palette, href: "/services/branding", color: "text-purple-600" },
  { title: "Content & Reel Engine", desc: "Viral video editing & SEO blog writing", icon: Video, href: "/services/content-creation", color: "text-red-600" },
];

export function DesktopMenu() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <ul className="flex items-center space-x-1 lg:space-x-2">
      <li>
        <Link href="/" className="px-3.5 py-2 text-[14px] font-black text-slate-800 hover:text-blue-600 rounded-full hover:bg-slate-100/80 transition-all whitespace-nowrap">
          Home
        </Link>
      </li>

      <li>
        <Link href="/about" className="px-3.5 py-2 text-[14px] font-black text-slate-800 hover:text-blue-600 rounded-full hover:bg-slate-100/80 transition-all whitespace-nowrap">
          About Us
        </Link>
      </li>

      {/* Services Dropdown */}
      <li
        className="static"
        onMouseEnter={() => setHoveredMenu("Services")}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <button className={`flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-black rounded-full transition-all focus:outline-none whitespace-nowrap ${
          hoveredMenu === "Services" ? "bg-blue-50 text-blue-600" : "text-slate-800 hover:text-blue-600 hover:bg-slate-100/80"
        }`}>
          <span>Services</span>
          <motion.div animate={{ rotate: hoveredMenu === "Services" ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {hoveredMenu === "Services" && mounted && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              transition={{ duration: 0.15, ease: "easeOut" }} 
              className="fixed left-1/2 -translate-x-1/2 top-[64px] sm:top-[70px] w-[92vw] max-w-[1080px]"
              style={{ zIndex: 100 }}
            >
              <div className="bg-white/98 backdrop-blur-2xl rounded-3xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.18)] border border-slate-200/90 overflow-hidden p-6 sm:p-8">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white flex items-center justify-center shadow-md">
                      <Sparkles className="w-4 h-4 fill-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight">Digital Growth Services</h3>
                      <p className="text-xs text-slate-500 font-medium">Engineered to turn search traffic into revenue</p>
                    </div>
                  </div>

                  <Link
                    href="/services"
                    className="flex items-center text-xs font-black text-white bg-slate-900 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors shadow-sm group"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  
                  {/* Left (7 Cols): 4 Primary Featured Services Cards */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {primaryServices.map((service, idx) => {
                      const IconComp = service.icon;
                      return (
                        <Link
                          key={idx}
                          href={service.href}
                          className="group bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-blue-300 p-4 rounded-2xl transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div className={`w-9 h-9 rounded-xl ${service.bg} ${service.color} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <span className="text-[8px] font-black uppercase tracking-widest bg-white border border-slate-200 px-2 py-0.5 rounded-full text-slate-600">
                                {service.tag}
                              </span>
                            </div>

                            <h4 className="text-sm font-black text-slate-900 tracking-tight mb-1 group-hover:text-blue-600 transition-colors">
                              {service.title}
                            </h4>
                            <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-2">
                              {service.desc}
                            </p>
                          </div>

                          <div className="mt-3 flex items-center gap-1 text-[11px] font-black text-blue-600 pt-2 border-t border-slate-100">
                            <span>Explore Solution</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Right (5 Cols): Secondary Offerings & Strategy Banner */}
                  <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                    
                    {/* Secondary List */}
                    <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 space-y-2.5">
                      <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-2">
                        Specialized Solutions
                      </span>
                      {secondaryServices.map((sec, idx) => {
                        const IconComp = sec.icon;
                        return (
                          <Link
                            key={idx}
                            href={sec.href}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors group"
                          >
                            <div className={`w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 ${sec.color} group-hover:scale-105 transition-transform`}>
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <h5 className="text-xs font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                                {sec.title}
                              </h5>
                              <p className="text-[11px] text-slate-500 font-medium truncate">
                                {sec.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Quick Strategy Banner */}
                    <Link
                      href="/contact"
                      className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-4 border border-slate-800 shadow-md flex items-center justify-between group"
                    >
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-orange-400 block mb-0.5">
                          Need Custom Strategy?
                        </span>
                        <p className="text-xs font-black text-white">Get Free Digital Growth Audit ➔</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>

                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>

      <li>
        <Link href="/portfolio" className="px-3.5 py-2 text-[14px] font-black text-slate-800 hover:text-blue-600 rounded-full hover:bg-slate-100/80 transition-all whitespace-nowrap">
          Portfolio
        </Link>
      </li>

      <li>
        <Link href="/blog" className="px-3.5 py-2 text-[14px] font-black text-slate-800 hover:text-blue-600 rounded-full hover:bg-slate-100/80 transition-all whitespace-nowrap">
          Blog
        </Link>
      </li>

      <li>
        <Link href="/contact" className="px-3.5 py-2 text-[14px] font-black text-slate-800 hover:text-blue-600 rounded-full hover:bg-slate-100/80 transition-all whitespace-nowrap">
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
