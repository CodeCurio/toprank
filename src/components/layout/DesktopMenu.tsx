"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, MapPin, Navigation, Map, Phone, ArrowRight, Sparkles } from "lucide-react";

import LkoOfficeImg from "../images/TopRank LKO office 1.jpg";
import ChdOfficeImg from "../images/Chandigarh Office TopRank.jpg";
import { SERVICES_DATA } from "@/lib/services-data";
import { usePhone } from "@/hooks/usePhone";

export function DesktopMenu() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const phone = usePhone();

  useEffect(() => setMounted(true), []);

  const serviceCategories = Object.values(SERVICES_DATA);

  return (
    <ul className="flex items-center space-x-1 lg:space-x-3 xl:space-x-5 relative">
      <li>
        <Link href="/" className="px-3 py-2 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="px-3 py-2 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
          About Us
        </Link>
      </li>

      {/* NEW COMPACT & STUNNING SERVICES MEGA MENU */}
      <li
        className="relative"
        onMouseEnter={() => setHoveredMenu("Services")}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <button className="flex items-center px-3 py-6 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors focus:outline-none whitespace-nowrap">
          Services 
          <motion.div animate={{ rotate: hoveredMenu === "Services" ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="ml-1 h-4 w-4 text-slate-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {hoveredMenu === "Services" && mounted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15, ease: "easeOut" }} 
              className="fixed left-1/2 -translate-x-1/2 top-[75px] w-[95vw] max-w-[1200px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200/60 overflow-hidden"
              style={{ zIndex: 100 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">All Digital Solutions</h3>
                  </div>
                  <Link href="/services" className="hidden md:flex items-center text-[13px] font-bold text-white group bg-slate-900 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors shadow-sm">
                    Explore All Services <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {serviceCategories.map((category) => (
                    <div key={category.id} className="flex flex-col p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200 group/card">
                      <Link href={category.href} className="flex items-center gap-2.5 mb-3 group/cat">
                        <div className={`p-2 rounded-lg ${category.bgColor} ${category.color} group-hover/card:scale-110 transition-transform duration-300 shadow-sm border border-white/50`}>
                          <category.icon className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-[14px] text-slate-900 group-hover/cat:text-blue-600 transition-colors leading-tight line-clamp-1">
                          {category.name}
                        </span>
                      </Link>
                      <ul className="flex flex-col gap-1.5 pl-0.5">
                        {category.subServices.slice(0, 4).map(sub => (
                          <li key={sub.name}>
                            <Link href={sub.href} className="text-[12px] font-medium text-slate-500 hover:text-blue-600 transition-colors block leading-snug line-clamp-1">
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>

      {/* Serving Locations Mega Menu */}
      <li
        className="relative"
        onMouseEnter={() => setHoveredMenu("Locations")}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <button className="flex items-center px-3 py-6 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors focus:outline-none whitespace-nowrap">
          Serving Locations
          <motion.div animate={{ rotate: hoveredMenu === "Locations" ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="ml-1 h-4 w-4 text-slate-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {hoveredMenu === "Locations" && mounted && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }} 
              className="fixed left-1/2 -translate-x-1/2 top-[75px] w-[calc(100vw-2rem)] max-w-5xl bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl ring-1 ring-slate-200/60 overflow-hidden"
              style={{ zIndex: 100 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 p-5 lg:p-6 gap-4 bg-slate-50/30">
                {/* Lucknow HQ */}
                <div className="bg-white rounded-xl p-5 border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300 group flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-50 text-orange-600 p-2.5 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-black text-slate-900 tracking-tight flex items-center gap-2">Lucknow <span className="bg-orange-100 text-orange-700 text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">HQ</span></h3>
                    </div>
                  </div>
                  <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-5 flex-grow">
                    A47/32, Sector 01, Gomti Nagar, UP 226010
                  </p>
                  <div className="mt-auto flex gap-2">
                      <Link href="/lucknow" className="flex-1 inline-flex items-center justify-center text-[12px] font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 py-2 px-2 rounded-lg transition-colors">
                        View Local Hub <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                      <a href="https://share.google/585sAqmLbXxpCuos9" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white p-2 px-3 rounded-lg flex items-center justify-center transition-colors">
                        <Navigation className="w-3.5 h-3.5" />
                      </a>
                  </div>
                </div>

                {/* Chandigarh */}
                <div className="bg-white rounded-xl p-5 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 group flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                      <Map className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-black text-slate-900 tracking-tight">Chandigarh</h3>
                    </div>
                  </div>
                  <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-5 flex-grow">
                    Shop No. 8, Sector 34B, Chandigarh, 160022
                  </p>
                  <div className="mt-auto flex gap-2">
                      <Link href="/chandigarh" className="flex-1 inline-flex items-center justify-center text-[12px] font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 py-2 px-2 rounded-lg transition-colors">
                        View Local Hub <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                      <a href="https://share.google/Ti1FOWyQxmiGoWbOE" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white p-2 px-3 rounded-lg flex items-center justify-center transition-colors">
                        <Navigation className="w-3.5 h-3.5" />
                      </a>
                  </div>
                </div>

                {/* Mohali */}
                <div className="bg-white rounded-xl p-5 border border-slate-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300 group flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-50 text-purple-600 p-2.5 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                      <Navigation className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-black text-slate-900 tracking-tight">Mohali</h3>
                    </div>
                  </div>
                  <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-5 flex-grow">
                    Serving top local businesses across the Mohali region.
                  </p>
                  <div className="mt-auto flex gap-2">
                      <Link href="/chandigarh" className="flex-1 inline-flex items-center justify-center text-[12px] font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 py-2 px-2 rounded-lg transition-colors">
                        View Local Hub <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                      <a href="https://share.google/kStpC4aIbQmusT6Bd" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white p-2 px-3 rounded-lg flex items-center justify-center transition-colors">
                        <Navigation className="w-3.5 h-3.5" />
                      </a>
                  </div>
                </div>

                {/* Gonda */}
                <div className="bg-white rounded-xl p-5 border border-slate-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 group flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-50 text-green-600 p-2.5 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-black text-slate-900 tracking-tight">Gonda</h3>
                    </div>
                  </div>
                  <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-5 flex-grow">
                    Expert digital marketing services in Gonda, UP.
                  </p>
                  <div className="mt-auto flex gap-2">
                      <Link href="/gonda" className="flex-1 inline-flex items-center justify-center text-[12px] font-bold text-green-600 bg-green-50 hover:bg-green-100 py-2 px-2 rounded-lg transition-colors">
                        View Local Hub <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                      <a href="https://share.google/REZPedp69CgytyOHR" target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-slate-800 text-white p-2 px-3 rounded-lg flex items-center justify-center transition-colors">
                        <Navigation className="w-3.5 h-3.5" />
                      </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border-t border-slate-100 p-4 text-center">
                 <Link href="/contact" className="inline-flex items-center justify-center text-[13px] font-bold text-slate-600 hover:text-blue-600 transition-colors">
                   <Phone className="w-4 h-4 mr-2" /> Prefer to talk? Call <span className="text-blue-600 mx-1">{phone.raw}</span> or <span className="text-blue-600 mx-1">{phone.secondaryRaw}</span> to speak with our regional experts.
                 </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>

      <li>
        <Link href="/portfolio" className="px-3 py-2 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
          Portfolio
        </Link>
      </li>
      <li>
        <Link href="/blog" className="px-3 py-2 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/contact" className="px-3 py-2 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
