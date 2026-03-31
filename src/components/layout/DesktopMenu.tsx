"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Code, Megaphone, Search, PenTool, MapPin, 
  BarChart, Smartphone, Users, Globe, ShoppingCart, Video, 
  LayoutTemplate, Palette, Workflow, Mail, MessageSquare,
  Monitor, Layout, Database, TrendingUp, Presentation,
  Layers, Navigation, Phone, ArrowRight, Map, Target, ShieldCheck,
  FileText, MessageCircle, Sparkles, Share2, Zap, ClipboardCheck
} from "lucide-react";

import LkoOfficeImg from "../images/TopRank LKO office 1.jpg";
import ChdOfficeImg from "../images/Chandigarh Office TopRank.jpg";

import { SERVICES_DATA } from "@/lib/services-data";

const PLATFORMS_TOOLS = [
  { name: "Next.js", icon: "🌐" },
  { name: "Shopify", icon: "🛍️" },
  { name: "WordPress", icon: "📝" },
  { name: "Google Ads", icon: "📈" },
  { name: "Meta Ads", icon: "📱" },
  { name: "Figma", icon: "🎨" },
];

export function DesktopMenu() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<keyof typeof SERVICES_DATA>("web-dev");

  // Prevent hydration errors by ensuring we only mount complex animations post-load
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ul className="flex items-center space-x-1 lg:space-x-3 xl:space-x-5">
      <li>
        <Link href="/" className="px-2 py-2 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="px-2 py-2 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
          About Us
        </Link>
      </li>

      {/* Dynamic Pane SERVICES Mega Menu */}
      <li
        className="relative"
        onMouseEnter={() => setHoveredMenu("Services")}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <button className="flex items-center px-2 py-6 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors focus:outline-none whitespace-nowrap">
          Services 
          <motion.div animate={{ rotate: hoveredMenu === "Services" ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="ml-1 h-4 w-4 text-slate-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {hoveredMenu === "Services" && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }} 
              className="absolute -left-64 lg:fixed lg:left-1/2 lg:-translate-x-1/2 top-[85px] w-[95vw] lg:w-full max-w-[1100px] bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200/50 overflow-hidden transform-gpu"
              style={{ zIndex: 100 }}
            >
              <div className="flex flex-row min-h-[440px]">
                {/* Left Side: Service Categories */}
                <div className="w-[45%] p-8 bg-white border-r border-slate-100 flex flex-col">
                  <h3 className="text-[13px] font-black tracking-widest text-slate-400 uppercase mb-6 flex-shrink-0">Our Expertise</h3>
                  <div className="flex flex-col space-y-1.5 overflow-y-auto pr-3 custom-scrollbar max-h-[500px]">
                    {(Object.entries(SERVICES_DATA) as [keyof typeof SERVICES_DATA, typeof SERVICES_DATA[keyof typeof SERVICES_DATA]][]).map(([key, service]) => {
                      const isActive = activeService === key;
                      return (
                        <Link
                          key={key}
                          href={service.href}
                          onMouseEnter={() => setActiveService(key)}
                          className={`flex flex-row items-center p-3 rounded-2xl cursor-pointer transition-all duration-300 ${
                            isActive ? "bg-white shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] ring-1 ring-slate-100 scale-[1.02] z-10 relative" : "hover:bg-slate-50/80 hover:scale-[1.01]"
                          }`}
                        >
                          <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-xl border ${isActive ? 'border-transparent shadow-md' : 'border-slate-100/50'} ${service.bgColor} ${service.color} transition-all duration-400 ${isActive ? 'scale-110' : ''}`}>
                            <service.icon className="h-5 w-5" />
                          </div>
                          <div className="ml-4 flex-grow">
                            <p className={`text-[14px] font-black tracking-tight transition-colors duration-300 ${isActive ? service.color : "text-slate-800"}`}>
                              {service.name}
                            </p>
                            <p className="mt-0.5 text-[12px] font-medium text-slate-500 line-clamp-1">
                              {service.description}
                            </p>
                          </div>
                          {isActive && (
                            <motion.div layoutId="active-indicator" className={`ml-auto w-2 h-2 rounded-full ${service.bgColor.replace('50', '500')} shadow-sm`} />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-slate-100">
                     <Link href="/services" className="text-[14px] font-black text-blue-600 hover:text-blue-700 flex items-center group">
                        Explore All Services 
                        <motion.span className="ml-1 font-normal group-hover:translate-x-1 transition-transform" aria-hidden="true">→</motion.span>
                     </Link>
                  </div>
                </div>

                {/* Right Side: Dynamic Sub-Services */}
                <div className="w-[55%] bg-slate-50/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none" />
                  
                  <div className="p-10 h-full relative z-10 flex flex-col">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeService}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="h-full flex flex-col"
                      >
                        <div className="mb-10">
                          <h3 className="text-3xl font-black text-slate-900 flex items-center tracking-tight">
                            {SERVICES_DATA[activeService].name} Solutions
                          </h3>
                          <p className="text-[15px] text-slate-500 mt-3 max-w-sm leading-relaxed">
                            Tailored strategies and executions to scale your {SERVICES_DATA[activeService].name.toLowerCase()} efforts.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 flex-grow pb-4">
                          {SERVICES_DATA[activeService].subServices.map((sub, idx) => {
                            const activeColor = SERVICES_DATA[activeService].color;
                            const activeBg = SERVICES_DATA[activeService].bgColor;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="group flex flex-row items-center p-3 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-transparent hover:border-slate-100 transition-all duration-300 active:scale-[0.98]"
                              >
                                <div className={`flex-shrink-0 bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 mr-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 ${activeColor} group-hover:bg-slate-50 group-hover:border-slate-200`}>
                                  <sub.icon className="h-4 w-4" />
                                </div>
                                <div className="flex flex-col">
                                  <span className={`text-slate-900 font-bold text-[13px] tracking-tight leading-tight transition-colors mb-0.5 group-hover:${activeColor}`}>
                                    {sub.name}
                                  </span>
                                  <span className="text-[11px] font-medium leading-snug text-slate-500 group-hover:text-slate-600 transition-colors line-clamp-1">
                                    {sub.desc}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-slate-200/50">
                           <Link 
                            href={SERVICES_DATA[activeService].href}
                            className="inline-flex items-center justify-center px-6 py-3 text-[14px] font-bold rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm"
                           >
                              View {SERVICES_DATA[activeService].name} Overview
                           </Link>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Platforms Built On */}
              <div className="bg-white border-t border-slate-100 px-8 py-5">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-black text-slate-400 uppercase tracking-widest">Technologies We Master</p>
                  <div className="flex items-center space-x-6">
                    {PLATFORMS_TOOLS.map((platform, idx) => (
                      <div 
                        key={platform.name}
                        className="flex flex-row items-center cursor-pointer group"
                      >
                         <span className="text-xl mr-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">{platform.icon}</span>
                         <span className="text-[14px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{platform.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </li>

      {/* Advanced Locations Mega Menu */}
      <li
        className="relative"
        onMouseEnter={() => setHoveredMenu("Locations")}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <button className="flex items-center px-2 py-6 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors focus:outline-none whitespace-nowrap">
          Serving Locations
          <motion.div animate={{ rotate: hoveredMenu === "Locations" ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="ml-1 h-4 w-4 text-slate-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {hoveredMenu === "Locations" && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }} 
              className="absolute -left-32 lg:fixed lg:left-1/2 lg:-translate-x-1/2 top-[85px] w-[95vw] lg:w-full max-w-[850px] bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200/50 overflow-hidden transform-gpu flex flex-col"
              style={{ zIndex: 100 }}
            >
              <div className="flex flex-row">
                {/* Lucknow HQ Column */}
                <div className="w-1/2 p-6 lg:p-8 border-r border-slate-100 group relative bg-white hover:bg-slate-50/50 transition-colors">
                  <div className="relative w-full h-40 lg:h-44 rounded-2xl overflow-hidden mb-5 shadow-sm border border-slate-100">
                      <Image 
                        src={LkoOfficeImg} 
                        alt="TopRank Lucknow Office" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        <span className="text-xs font-bold text-slate-700">HQ</span>
                      </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-600 p-2.5 rounded-xl mr-4 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight mb-1">Lucknow</h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed mb-5 font-medium">
                        Sulabh Awas, A47/32, Apartments, Sector 01, Gomti Nagar, UP 226010
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                      <Link href="/lucknow" className="flex-1 bg-white border border-slate-200 hover:border-orange-200 hover:text-orange-600 text-slate-700 text-[13px] font-bold py-2.5 px-3 rounded-xl text-center transition-all shadow-sm">
                        View Local SEO
                      </Link>
                      <a href="https://maps.google.com/?q=TopRank+Digital+Service+Lucknow" target="_blank" rel="noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white p-2.5 px-4 rounded-xl flex items-center justify-center transition-colors">
                        <Navigation className="w-4 h-4" />
                      </a>
                  </div>
                </div>

                {/* Chandigarh Column */}
                <div className="w-1/2 p-6 lg:p-8 group relative bg-white hover:bg-slate-50/50 transition-colors">
                  <div className="relative w-full h-40 lg:h-44 rounded-2xl overflow-hidden mb-5 shadow-sm border border-slate-100">
                      <Image 
                        src={ChdOfficeImg} 
                        alt="TopRank Chandigarh Office" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-2.5 rounded-xl mr-4 shrink-0">
                      <Map className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight mb-1">Chandigarh</h3>
                      <p className="text-[13px] text-slate-500 leading-relaxed mb-5 font-medium">
                        Shop No. 8, Sector 34B, Sector 34, Chandigarh, 160022
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                      <Link href="/chandigarh" className="flex-1 bg-white border border-slate-200 hover:border-blue-200 hover:text-blue-600 text-slate-700 text-[13px] font-bold py-2.5 px-3 rounded-xl text-center transition-all shadow-sm">
                        View Local SEO
                      </Link>
                      <a href="https://maps.google.com/?q=TopRank+Digital+Service+Chandigarh" target="_blank" rel="noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white p-2.5 px-4 rounded-xl flex items-center justify-center transition-colors">
                        <Navigation className="w-4 h-4" />
                      </a>
                  </div>
                </div>
              </div>

              {/* Bottom Call Action - Rendered Naturally avoiding Absolute overlap */}
              <div className="w-full bg-slate-50 border-t border-slate-100 p-4 text-center">
                 <Link href="/contact" className="inline-flex items-center justify-center text-[13px] font-bold text-slate-600 hover:text-blue-600 transition-colors">
                   <Phone className="w-4 h-4 mr-2" /> Prefer to talk? Call 93050 30523 to speak with our regional experts.
                 </Link>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </li>

      <li>
        <Link href="/portfolio" className="px-2 py-2 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
          Portfolio
        </Link>
      </li>
      <li>
        <Link href="/blog" className="px-2 py-2 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" className="px-2 py-2 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
