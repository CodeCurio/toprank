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

// Rich Service Data Structure with Sub-Services
const SERVICES_DATA = {
  "digital-marketing": {
    name: "Digital Marketing",
    icon: Megaphone,
    bgColor: "bg-blue-50",
    color: "text-blue-600",
    description: "Multi-channel growth strategies to scale your brand.",
    href: "/services/digital-marketing",
    subServices: [
      { name: "Social Media Marketing", desc: "Build brand awareness", icon: Share2, href: "/services/digital-marketing/social-media" },
      { name: "Social Media Management", desc: "Professional profile handling", icon: Users, href: "/services/digital-marketing/management" },
      { name: "Content Marketing", desc: "Value-driven content strategy", icon: FileText, href: "/services/digital-marketing/content" },
      { name: "Influencer Marketing", desc: "Leverage industry authority", icon: Sparkles, href: "/services/digital-marketing/influencer" },
      { name: "Online Reputation (ORM)", desc: "Maintain a positive image", icon: ShieldCheck, href: "/services/digital-marketing/orm" },
      { name: "Lead Generation", desc: "High-intent lead capture", icon: Target, href: "/services/digital-marketing/leads" },
    ]
  },
  "seo": {
    name: "SEO Services",
    icon: Search,
    bgColor: "bg-indigo-50",
    color: "text-indigo-600",
    description: "Dominate search rankings and drive organic traffic.",
    href: "/services/seo",
    subServices: [
      { name: "On-Page SEO", desc: "Content & Keyword tuning", icon: LayoutTemplate, href: "/services/seo/on-page" },
      { name: "Off-Page SEO", desc: "Authority & Link building", icon: Globe, href: "/services/seo/off-page" },
      { name: "Technical SEO", desc: "Site speed & architecture", icon: Database, href: "/services/seo/technical" },
      { name: "Keyword Research", desc: "High-intent search terms", icon: Search, href: "/services/seo/keywords" },
      { name: "Competitor Analysis", desc: "Outrank your rivals", icon: BarChart, href: "/services/seo/competitor" },
      { name: "SEO Audit", desc: "Complete health check-up", icon: ClipboardCheck, href: "/services/seo/audit" },
    ]
  },
  "local-seo": {
    name: "Local SEO & GMB",
    icon: MapPin,
    bgColor: "bg-orange-50",
    color: "text-orange-600",
    description: "Dominate the local 'near me' search market.",
    href: "/services/local-seo",
    subServices: [
      { name: "GMB Setup", desc: "Official business profile", icon: MapPin, href: "/services/local-seo/gmb-setup" },
      { name: "GMB Optimization", desc: "Rank in the Local Pack", icon: Zap, href: "/services/local-seo/gmb-optimization" },
      { name: "Map Ranking", desc: "Top visibility on Maps", icon: Navigation, href: "/services/local-seo/map-ranking" },
      { name: "Review Management", desc: "Build customer trust", icon: MessageSquare, href: "/services/local-seo/reviews" },
    ]
  },
  "web-dev": {
    name: "Web Development",
    icon: Code,
    bgColor: "bg-pink-50",
    color: "text-pink-600",
    description: "High-performance websites built for conversion.",
    href: "/services/web-development",
    subServices: [
      { name: "Business Website", desc: "Lead-focused corporate sites", icon: Monitor, href: "/services/web-development/business" },
      { name: "E-commerce Development", desc: "Online stores that sell", icon: ShoppingCart, href: "/services/web-development/ecommerce" },
      { name: "WordPress Development", desc: "Flexible & scalable sites", icon: Layout, href: "/services/web-development/wordpress" },
      { name: "Website Speed", desc: "Lightning fast performance", icon: Zap, href: "/services/web-development/speed" },
    ]
  },
  "google-ads": {
    name: "Google Ads / PPC",
    icon: Target,
    bgColor: "bg-rose-50",
    color: "text-rose-600",
    description: "Instant traffic and ROI-focused search ads.",
    href: "/services/google-ads",
    subServices: [
      { name: "Search Ads", desc: "Appear at the top of Google", icon: Search, href: "/services/google-ads/search" },
      { name: "Display Ads", desc: "Visual ads across the web", icon: Monitor, href: "/services/google-ads/display" },
      { name: "YouTube Ads", desc: "Video ads that engage", icon: Video, href: "/services/google-ads/youtube" },
      { name: "Remarketing", desc: "Target previous visitors", icon: Workflow, href: "/services/google-ads/remarketing" },
    ]
  },
  "meta-ads": {
    name: "Meta Ads (FB & IG)",
    icon: Share2,
    bgColor: "bg-blue-50",
    color: "text-blue-500",
    description: "Powerful social advertising that converts.",
    href: "/services/meta-ads",
    subServices: [
      { name: "Facebook Ads", desc: "Target specific demographics", icon: Users, href: "/services/meta-ads/facebook" },
      { name: "Instagram Ads", desc: "Visual storytelling for ROI", icon: Smartphone, href: "/services/meta-ads/instagram" },
      { name: "Lead Ads", desc: "Direct customer acquisition", icon: Target, href: "/services/meta-ads/leads" },
      { name: "Ad Creative Strategy", desc: "Winning ad designs", icon: Palette, href: "/services/meta-ads/strategy" },
    ]
  },
  "whatsapp": {
    name: "WhatsApp & AI",
    icon: MessageCircle,
    bgColor: "bg-blue-50",
    color: "text-blue-600",
    description: "Automated customer handling and support.",
    href: "/services/whatsapp-automation",
    subServices: [
      { name: "WhatsApp API", desc: "Official Business API setup", icon: MessageCircle, href: "/services/whatsapp-automation/api" },
      { name: "Chatbot Automation", desc: "24/7 automated support", icon: Workflow, href: "/services/whatsapp-automation/chatbot" },
      { name: "Auto Reply System", desc: "Instant response triggers", icon: MessageSquare, href: "/services/whatsapp-automation/reply" },
      { name: "AI Customer Handling", desc: "Smarter automated chats", icon: Monitor, href: "/services/whatsapp-automation/ai" },
    ]
  },
  "branding": {
    name: "Branding & Design",
    icon: Palette,
    bgColor: "bg-purple-50",
    color: "text-purple-600",
    description: "Creative visuals that define your brand.",
    href: "/services/branding",
    subServices: [
      { name: "Logo Design", desc: "Iconic brand identity", icon: Palette, href: "/services/branding/logo" },
      { name: "Social Media Creatives", desc: "Engaging post designs", icon: LayoutTemplate, href: "/services/branding/social-posts" },
      { name: "Ad Creatives", desc: "High-CTR static & motion ads", icon: TrendingUp, href: "/services/branding/ads" },
      { name: "Banner & Poster", desc: "Marketing collateral design", icon: Layout, href: "/services/branding/marketing-docs" },
    ]
  },
  "content": {
    name: "Content Creation",
    icon: Video,
    bgColor: "bg-red-50",
    color: "text-red-500",
    description: "Engaging video and written content.",
    href: "/services/content-creation",
    subServices: [
      { name: "Reel / Short Video", desc: "Viral vertical video content", icon: Video, href: "/services/content-creation/reels" },
      { name: "Video Editing", desc: "Professional post-production", icon: Monitor, href: "/services/content-creation/editing" },
      { name: "Blog Writing", desc: "SEO-optimized articles", icon: FileText, href: "/services/content-creation/blogs" },
      { name: "Copywriting", desc: "Persuasive sales copy", icon: PenTool, href: "/services/content-creation/copywriting" },
    ]
  },
  "hosting": {
    name: "Hosting & Support",
    icon: ShieldCheck,
    bgColor: "bg-slate-50",
    color: "text-slate-600",
    description: "Reliable infrastructure for your site.",
    href: "/services/hosting",
    subServices: [
      { name: "Website Hosting", desc: "Cloud-based fast hosting", icon: Globe, href: "/services/hosting/cloud" },
      { name: "Domain Management", desc: "DNS & Domain registration", icon: Search, href: "/services/hosting/domains" },
      { name: "Website Maintenance", desc: "Software & plugin updates", icon: Workflow, href: "/services/hosting/maintenance" },
      { name: "Security & Backup", desc: "Peace of mind for your data", icon: ShieldCheck, href: "/services/hosting/security" },
    ]
  }
};

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
                        <div
                          key={key}
                          onMouseEnter={() => setActiveService(key)}
                          className={`flex flex-row items-center p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                            isActive ? "bg-slate-50 ring-1 ring-slate-100 shadow-sm" : "hover:bg-slate-50/50"
                          }`}
                        >
                          <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg border border-slate-100/50 ${service.bgColor} ${service.color} transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                            <service.icon className="h-4.5 w-4.5" />
                          </div>
                          <div className="ml-4">
                            <p className={`text-[14px] font-bold transition-colors ${isActive ? "text-blue-600" : "text-slate-900"}`}>
                              {service.name}
                            </p>
                            <p className="mt-0.5 text-[12px] text-slate-500 line-clamp-1">
                              {service.description}
                            </p>
                          </div>
                          {isActive && (
                            <motion.div layoutId="active-indicator" className="ml-auto w-1 h-6 bg-blue-600 rounded-full" />
                          )}
                        </div>
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
                        
                        <div className="grid grid-cols-2 gap-x-8 gap-y-8 flex-grow">
                          {SERVICES_DATA[activeService].subServices.map((sub, idx) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="group flex flex-col"
                            >
                              <div className="flex items-center text-slate-800 font-bold text-[15px] group-hover:text-blue-600 transition-colors">
                                <span className="bg-white p-2.5 rounded-lg shadow-sm border border-slate-200 mr-3 group-hover:border-blue-200 group-hover:shadow-md transition-all">
                                  <sub.icon className="h-5 w-5 text-blue-500" />
                                </span>
                                {sub.name}
                              </div>
                              <span className="ml-[54px] mt-1.5 text-[13px] leading-snug text-slate-500 group-hover:text-slate-600 transition-colors">
                                {sub.desc}
                              </span>
                            </Link>
                          ))}
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
        <Link href="/case-studies" className="px-2 py-2 text-[14px] xl:text-[15px] font-bold text-slate-700 hover:text-blue-600 transition-colors whitespace-nowrap">
          Case Studies
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
