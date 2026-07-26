"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  Code,
  MapPin,
  Target,
  Share2,
  Megaphone,
  MessageCircle,
  Palette,
  Video,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Sparkles,
  ChevronRight,
  HelpCircle,
  TrendingUp,
  Star,
  Globe,
} from "lucide-react";
import Link from "next/link";
import {
  SEOMicroVisual,
  GMBMicroVisual,
  WebDevMicroVisual,
  AdsMicroVisual,
  SocialMicroVisual,
  MarketingMicroVisual,
  AutomationMicroVisual,
  BrandingMicroVisual,
  ContentMicroVisual,
  HostingMicroVisual,
} from "@/components/services/shared/ServiceVisuals";

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  outcome: string;
  highlights: string[];
  icon: any;
  color: string;
  bgLight: string;
  borderLight: string;
  link: string;
  visual: React.ReactNode;
  isPrimary?: boolean;
}

const mainServices: ServiceItem[] = [
  {
    id: "web-dev",
    category: "Development",
    badge: "CORE SERVICE",
    badgeColor: "bg-pink-100 text-pink-700 border-pink-200",
    title: "Website Development",
    description: "Zero-lag, modern Next.js websites engineered to look stunning and convert casual visitors into paying clients.",
    outcome: "Get a lightning-fast, high-converting digital storefront that outranks competitors.",
    highlights: ["Custom Next.js & React Apps", "Sub-Second Page Load Speed", "Mobile-First CRO Layouts"],
    icon: Code,
    color: "text-pink-600",
    bgLight: "bg-pink-50",
    borderLight: "border-pink-200",
    link: "/services/web-development",
    visual: <WebDevMicroVisual />,
    isPrimary: true,
  },
  {
    id: "seo",
    category: "Organic Search",
    badge: "MOST POPULAR",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    title: "Search Engine Optimization (SEO)",
    description: "Rank #1 on Google for high-intent keywords your customers are already searching for every single day.",
    outcome: "Capture organic search traffic and build a steady flow of inbound customer inquiries.",
    highlights: ["Technical SEO & Speed Optimization", "High-Authority Link Building", "ROI Keyword Targeting"],
    icon: Search,
    color: "text-indigo-600",
    bgLight: "bg-indigo-50",
    borderLight: "border-indigo-200",
    link: "/services/seo",
    visual: <SEOMicroVisual />,
    isPrimary: true,
  },
  {
    id: "local-seo",
    category: "Local Dominance",
    badge: "MAP PACK #1",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    title: "Local SEO & Google Maps",
    description: "Dominate Google Business Profile (GMB) listings and capture customers searching for services in your city.",
    outcome: "Show up in the Google 3-Pack and drive calls/visits straight to your local business.",
    highlights: ["Google Map Pack Ranking", "GMB Profile Optimization", "Automated Review Campaign"],
    icon: MapPin,
    color: "text-orange-600",
    bgLight: "bg-orange-50",
    borderLight: "border-orange-200",
    link: "/services/local-seo",
    visual: <GMBMicroVisual />,
    isPrimary: true,
  },
  {
    id: "paid-ads",
    category: "Performance Ads",
    badge: "INSTANT LEADS",
    badgeColor: "bg-rose-100 text-rose-700 border-rose-200",
    title: "Paid Ads (Google & Meta)",
    description: "Laser-targeted Google Search & Meta (Facebook/Instagram) ad campaigns designed to generate leads from Day 1.",
    outcome: "Generate immediate revenue with positive Return on Ad Spend (ROAS) and clear conversion tracking.",
    highlights: ["High-Intent Google Search Ads", "Meta Retargeting Funnels", "Real-Time ROAS Analytics"],
    icon: Target,
    color: "text-rose-600",
    bgLight: "bg-rose-50",
    borderLight: "border-rose-200",
    link: "/services/google-ads",
    visual: <AdsMicroVisual />,
    isPrimary: true,
  },
];

const secondaryServices: ServiceItem[] = [
  {
    id: "whatsapp",
    category: "Automation",
    title: "WhatsApp & Sales Automation",
    description: "WhatsApp API chatbots and automated lead capture systems to respond to inquiries 24/7 without manual delay.",
    outcome: "Convert leads instantly day or night.",
    highlights: ["WhatsApp Official API", "24/7 Auto-Responder Bot"],
    icon: MessageCircle,
    color: "text-emerald-600",
    bgLight: "bg-emerald-50",
    borderLight: "border-emerald-200",
    link: "/services/whatsapp-automation",
    visual: <AutomationMicroVisual />,
  },
  {
    id: "digital-marketing",
    category: "Growth Strategy",
    title: "Full-Stack Digital Marketing",
    description: "Comprehensive multi-channel strategies combining content, social presence, and targeted outreach.",
    outcome: "Build market authority and scale fast.",
    highlights: ["Omni-Channel Strategy", "Lead Gen Funnels"],
    icon: Megaphone,
    color: "text-blue-600",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-200",
    link: "/services/digital-marketing",
    visual: <MarketingMicroVisual />,
  },
  {
    id: "branding",
    category: "Creative ID",
    title: "Branding & Visual Identity",
    description: "Iconic brand positioning, logo design, and ad creative suites that make your business command premium pricing.",
    outcome: "Stand out from every competitor.",
    highlights: ["Logo & Brand Guidelines", "High-Converting Ad Creatives"],
    icon: Palette,
    color: "text-purple-600",
    bgLight: "bg-purple-50",
    borderLight: "border-purple-200",
    link: "/services/branding",
    visual: <BrandingMicroVisual />,
  },
  {
    id: "content",
    category: "Content Engine",
    title: "Content & Reel Creation",
    description: "High-impact video editing, Instagram Reels creation, and SEO-rich blog articles to build brand trust.",
    outcome: "Engage audience and build authority.",
    highlights: ["Viral Reel/Video Editing", "SEO Content Writing"],
    icon: Video,
    color: "text-red-600",
    bgLight: "bg-red-50",
    borderLight: "border-red-200",
    link: "/services/content-creation",
    visual: <ContentMicroVisual />,
  },
];

export function ServicesSection({ location }: { location?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState<"all" | "primary" | "secondary">("all");

  const helperGuide = [
    { goal: "I need a fast, modern website", service: "Website Development", link: "/services/web-development" },
    { goal: "I want to rank #1 on Google Search", service: "SEO Engineering", link: "/services/seo" },
    { goal: "I want more local customers & calls", service: "Local SEO & Google Maps", link: "/services/local-seo" },
    { goal: "I want high-quality leads today", service: "Google & Meta Paid Ads", link: "/services/google-ads" },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-slate-50 overflow-hidden" id="services">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] bg-[radial-gradient(circle_at_50%_0%,#cbd5e1,transparent)] opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-slate-200 rounded-full text-slate-800 text-[11px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            Our Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            What We Do To{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
              Grow Your Business{location ? ` in ${location}` : ""}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
          >
            From zero-lag website development to Page 1 Google rankings and high-ROI ads — we provide everything your business needs to win and scale online.
          </motion.p>
        </div>

        {/* ----------------------------------------------------
            PRIMARY SERVICES: THE BIG 4 CORE HIGHLIGHT CARDS
           ---------------------------------------------------- */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 block mb-1">
                Core Growth Offerings
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Our 4 Primary Services
              </h3>
            </div>
            <Link
              href="/services"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors"
            >
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, index) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden`}
                >
                  {/* Top Glowing Accent Border */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 opacity-90 group-hover:h-2 transition-all" />

                  <div>
                    {/* Micro Visual Header */}
                    {service.visual}

                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl ${service.bgLight} ${service.color} border ${service.borderLight} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      {service.badge && (
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${service.badgeColor}`}>
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-xl font-black text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                      {service.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-xs font-bold text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Button */}
                  <Link
                    href={service.link}
                    className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-between group/btn shadow-sm"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ----------------------------------------------------
            SECONDARY SERVICES: CLEAN EXPANDABLE GRID
           ---------------------------------------------------- */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-pink-600 block mb-1">
              Specialized Solutions
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Additional Growth Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryServices.map((service, index) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${service.bgLight} ${service.color} border ${service.borderLight} flex items-center justify-center shrink-0`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 pt-3 border-t border-slate-100"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ----------------------------------------------------
            DECISION GUIDE BOX ("WHICH SERVICE DO YOU NEED?")
           ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl border border-white/10"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-blue-300 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                Quick Selection Guide
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                Which Service Does Your Business Need?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-6">
                Not sure where to start? Tell us your goal and our growth engineers will build the exact roadmap for you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 text-white font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
              >
                Get Free Growth Blueprint <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {helperGuide.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 hover:border-white/30 p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-orange-400 block mb-1">
                      {item.goal}
                    </span>
                    <span className="text-sm font-black text-white group-hover:text-blue-300 transition-colors">
                      ➔ {item.service}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
