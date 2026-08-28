"use client";

import { useState } from "react";
import Image from "next/image";
import { SERVICES_DATA, ServiceData } from "@/lib/services-data";
import { RelatedServices } from "./RelatedServices";
import { ContactSection } from "@/components/sections/ContactSection";
import { 
  ArrowRight, CheckCircle2, ChevronRight, Zap, Target, 
  Sparkles, Star, Phone, ShieldCheck, ChevronDown, Check,
  TrendingUp, Award, Users, Calculator, HelpCircle, Layers,
  ExternalLink, MessageCircle, Monitor, Smartphone, Gauge,
  Code2, Laptop, ArrowUpRight, Cpu, Lock, CheckCircle
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { usePhone } from "@/hooks/usePhone";

interface ServiceTemplateProps {
  serviceId: string;
}

export function ServiceTemplate({ serviceId }: ServiceTemplateProps) {
  const service = SERVICES_DATA[serviceId];
  const phone = usePhone();

  // Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive ROI / Scope Calculator State
  const [budgetSlider, setBudgetSlider] = useState<number>(35000);

  if (!service) {
    notFound();
  }

  // Schema Markup generation
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} Services`,
    "description": service.longDescription || service.description,
    "url": `https://www.toprankindia.com${service.href}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "TopRank Digital Service",
      "telephone": `+91 ${phone.raw}`,
      "url": "https://www.toprankindia.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      }
    },
    "serviceType": service.name,
    "areaServed": ["Lucknow", "Chandigarh", "Mohali", "Gonda", "India"]
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.toprankindia.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.toprankindia.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.name,
        "item": `https://www.toprankindia.com${service.href}`
      }
    ]
  };

  // Estimated stats based on calculator
  const estimatedReach = Math.round(budgetSlider * 14.5);
  const estimatedLeads = Math.round((budgetSlider / 280) * 1.8);
  const estimatedRevenue = Math.round(estimatedLeads * 3500);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          SCHEMA.ORG STRUCTURED DATA INJECTION (JSON-LD)
      ───────────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION & VALUE PROPOSITION (WITH BROWSER MOCKUP)
      ───────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        
        {/* Dynamic ambient color glows */}
        <div className={`absolute top-0 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full blur-[110px] sm:blur-[150px] opacity-20 pointer-events-none ${service.bgColor}`} />
        <div className={`absolute bottom-0 left-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full blur-[90px] sm:blur-[130px] opacity-15 pointer-events-none ${service.bgColor}`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className={`${service.images?.heroImage ? "lg:col-span-7" : "lg:col-span-12 max-w-4xl"}`}>
              
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6">
                <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className={service.color}>{service.name}</span>
              </nav>

              {/* Badge Pill */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 ${service.bgColor} border border-slate-200/60 rounded-full ${service.color} text-[10px] font-black uppercase tracking-wider sm:tracking-[0.2em] mb-6 shadow-sm`}
              >
                <service.icon className="w-3.5 h-3.5" />
                <span>{service.badge || "Verified Growth Architecture"}</span>
                <span className="text-slate-300">|</span>
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>4.9/5 Rating</span>
                </div>
              </motion.div>
              
              {/* Main Headline with fluid typography */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 break-words"
              >
                High-Impact <br className="hidden sm:block" />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600`}>
                  {service.name}
                </span> That Scales Revenue.
              </motion.h1>
              
              {/* Value Proposition Description */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8 sm:mb-10 max-w-2xl"
              >
                {service.longDescription || service.description}
              </motion.p>
              
              {/* Dual CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
              >
                <Link 
                  href="#contact" 
                  className="px-7 py-4 bg-slate-900 hover:bg-black text-white text-xs font-black uppercase tracking-wider sm:tracking-widest rounded-xl sm:rounded-2xl transition-all shadow-xl shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-2 text-center"
                >
                  Claim Free Growth Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href={`tel:+91${phone.raw}`} 
                  className="px-7 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 hover:text-slate-950 text-xs font-black uppercase tracking-wider sm:tracking-widest rounded-xl sm:rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 text-center"
                >
                  <Phone className={`w-4 h-4 ${service.color}`} /> Speak With Strategist
                </a>
              </motion.div>

              {/* Proof Metrics Ticker */}
              {service.stats && service.stats.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-100"
                >
                  {service.stats.map((stat, i) => (
                    <div key={i} className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-100">
                      <div className={`text-2xl sm:text-3xl font-black ${service.color} tracking-tight`}>
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

            </div>

            {/* Right Showcase Browser Mockup Card */}
            {service.images?.heroImage && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 relative"
              >
                {/* Modern Window Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                  
                  {/* Browser Header Bar */}
                  <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                      <Lock className="w-2.5 h-2.5 text-emerald-400" />
                      <span>https://yourbrand.com</span>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      100 Speed
                    </span>
                  </div>

                  {/* Browser Content Image */}
                  <div className="relative overflow-hidden">
                    <Image 
                      src={service.images.heroImage}
                      alt={service.images.heroAlt || `${service.name} High Performance Showcase`}
                      width={800}
                      height={500}
                      priority
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Info Pill */}
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 p-3.5 rounded-2xl flex items-center justify-between shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-xs">
                          ⚡
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-xs">Zero-Latency Architecture</h4>
                          <p className="text-[10px] text-slate-400 font-medium">Sub-800ms load time on mobile 4G networks</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. TRUST BADGES & PARTNER CERTIFICATIONS STRIP
      ───────────────────────────────────────────────────────────── */}
      <section className="py-6 sm:py-8 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span className="text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400" /> Official Certifications:
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Google Premier Partner
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" /> Meta Certified Agency
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> ISO 9001:2015 Quality
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" /> Cloudflare Edge Verified
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BENTO GRID: CORE CAPABILITIES & SPECIALIZED MODULES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 ${service.bgColor} ${service.color} border border-slate-200/80 rounded-full text-[10px] font-black uppercase tracking-wider mb-3`}>
              <Zap className="w-3 h-3" /> Growth Engine Architecture
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Everything Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dominant Results</span>
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              We replace sluggish, generic templates with high-performance digital infrastructure that out-ranks and out-converts your competition.
            </p>
          </div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Bento Card 1: Core Technology & Speed Architecture (7 cols) */}
            <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    100% Core Web Vitals
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                  Enterprise Next.js & Headless Architecture
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                  Every website we engineer is built with modern server-side rendering, automated schema generation, and Cloudflare enterprise edge caching. This guarantees sub-second page loads that Google loves.
                </p>

                {/* Micro Features Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Sub-800ms First Contentful Paint",
                    "Zero Vulnerabilities / Static Security",
                    "Automatic JSON-LD Schema Generation",
                    "Direct WhatsApp & CRM Lead Funnels",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 stroke-[3]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Outcome Metric */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Result: <strong className="text-slate-900">+180% Higher Inbound Conversion</strong></span>
                <span className="text-blue-600 font-black">Zero Bloat Guarantee →</span>
              </div>
            </div>

            {/* Bento Card 2: Specialized Solutions Hub (5 cols) */}
            <div className="md:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                    Specialized Modules
                  </span>
                  <Layers className="w-5 h-5 text-blue-400" />
                </div>
                
                <h3 className="text-xl font-black text-white mb-2">Deep-Dive Services</h3>
                <p className="text-slate-400 text-xs font-medium mb-6">Explore specialized modules tailored for specific business models.</p>

                <div className="space-y-2.5">
                  {service.subServices.slice(0, 4).map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.href}
                      className="group flex items-center justify-between p-3 rounded-xl bg-slate-800/80 hover:bg-blue-600 border border-slate-700/60 hover:border-transparent transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-slate-900 text-blue-400 group-hover:text-white flex items-center justify-center shrink-0">
                          <sub.icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-xs group-hover:text-white transition-colors">{sub.name}</h4>
                          <p className="text-[10px] text-slate-400 group-hover:text-blue-100 line-clamp-1">{sub.desc}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="#contact"
                className="mt-6 w-full py-3 text-center block bg-white/10 hover:bg-white text-white hover:text-slate-900 transition-all rounded-xl font-black uppercase tracking-wider text-[11px]"
              >
                Request Custom Architecture
              </Link>
            </div>

            {/* Bento Card 3: 4 Concrete Business Outcomes (Full 12 cols) */}
            <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Sub-Second Speed", value: "< 800ms", desc: "Fast page loads that eliminate bounce rate and lift conversion.", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
                { title: "Search Engine Rank", value: "Page #1", desc: "Built-in semantic headings, schema tags, and fast Core Web Vitals.", icon: Target, color: "text-blue-600", bg: "bg-blue-50" },
                { title: "Conversion Multiplier", value: "+180%", desc: "Mobile-first conversion layouts engineered for phone & WhatsApp leads.", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
                { title: "Enterprise Security", value: "100%", desc: "Serverless static rendering immune to database injections and malware.", icon: ShieldCheck, color: "text-purple-600", bg: "bg-purple-50" }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl ${card.bg} ${card.color} flex items-center justify-center`}>
                      <card.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xl font-black text-slate-900">{card.value}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{card.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. INTERACTIVE GROWTH & ROI ESTIMATOR
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest mb-3">
              <Calculator className="w-3.5 h-3.5 text-blue-400" /> Interactive Forecast Engine
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Estimate Your Potential <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Growth & Leads</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm sm:text-base font-medium">
              See what an aggressive {service.name.toLowerCase()} sprint can generate for your monthly pipeline.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Slider Controls */}
              <div className="md:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      {service.id === "web-dev" ? "Estimated Project Scope / Budget" : "Monthly Investment Budget"}
                    </label>
                    <span className="text-xl font-black text-blue-400">
                      ₹{budgetSlider.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input 
                    type="range" 
                    min="15000" 
                    max="200000" 
                    step="5000"
                    value={budgetSlider}
                    onChange={(e) => setBudgetSlider(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1.5">
                    <span>₹15,000</span>
                    <span>₹1,00,000</span>
                    <span>₹2,00,000+</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60 text-xs text-slate-400 leading-relaxed">
                  💡 <strong className="text-white">Scientific Attribution:</strong> Projections are calculated using historical conversion benchmarks across 250+ campaigns in Google Ads, Meta Ads, and Organic Search.
                </div>
              </div>

              {/* Forecast Output Metrics */}
              <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                    {service.id === "web-dev" ? "Est. Monthly Visitors Handled" : "Est. High-Intent Views"}
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    ~{estimatedReach.toLocaleString("en-IN")}
                  </div>
                </div>

                <div className="bg-blue-600/20 p-5 rounded-2xl border border-blue-500/40">
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-300 block mb-1">
                    Est. Qualified Leads
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-blue-400">
                    ~{estimatedLeads}+ Leads
                  </div>
                </div>

                <div className="sm:col-span-2 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 p-5 rounded-2xl border border-blue-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 block">
                      Est. Monthly Pipeline Value
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-emerald-400">
                      ₹{estimatedRevenue.toLocaleString("en-IN")}+
                    </div>
                  </div>
                  <Link 
                    href="#contact"
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-black uppercase text-[10px] tracking-wider transition-all"
                  >
                    Lock Forecast
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. WHAT YOU GET: DELIVERABLES CHECKLIST
      ───────────────────────────────────────────────────────────── */}
      {service.deliverables && service.deliverables.length > 0 && (
        <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <span className={`text-[10px] font-black uppercase tracking-widest ${service.color} block mb-2`}>
                Complete Scope Transparency
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                What’s Included in Our {service.name} Service
              </h2>
              <p className="text-slate-500 font-medium text-xs sm:text-base">
                Zero guesswork, no hidden charges. Every campaign deployment comes standard with the following enterprise deliverables:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200/70 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{item}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Executed by senior growth specialists with 100% QA checks.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. 3-TIER TRANSPARENT PRICING PACKAGES
      ───────────────────────────────────────────────────────────── */}
      {service.pricingPackages && service.pricingPackages.length > 0 && (
        <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60" id="pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className={`text-[10px] font-black uppercase tracking-widest ${service.color} block mb-2`}>
                Predictable Investment
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Transparent {service.name} <span className={service.color}>Packages</span>
              </h2>
              <p className="text-slate-500 font-medium text-xs sm:text-base">
                Choose the growth velocity that matches your revenue goals. No hidden fees. Fixed pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {service.pricingPackages.map((pkg, idx) => (
                <div 
                  key={idx}
                  className={`rounded-3xl p-8 transition-all relative flex flex-col justify-between ${
                    pkg.popular 
                      ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/30 border-2 border-blue-500 lg:-translate-y-2" 
                      : "bg-white text-slate-900 shadow-sm border border-slate-200/80 hover:shadow-md"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-widest py-1 px-4 rounded-full shadow-md">
                      Most Popular Choice
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-black mb-2">{pkg.name}</h3>
                    <p className={`text-xs font-medium leading-relaxed mb-6 ${pkg.popular ? "text-slate-400" : "text-slate-500"}`}>
                      {pkg.desc}
                    </p>

                    <div className="mb-6 pb-6 border-b border-slate-100/10">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl font-black tracking-tight">{pkg.price}</span>
                        <span className={`text-xs font-bold uppercase tracking-wider ${pkg.popular ? "text-slate-400" : "text-slate-500"}`}>
                          /{pkg.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3.5 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? "text-blue-400" : service.color}`} />
                          <span className={pkg.popular ? "text-slate-300" : "text-slate-700"}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="#contact"
                    className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs text-center transition-all active:scale-95 shadow-md ${
                      pkg.popular
                        ? "bg-blue-600 hover:bg-blue-500 text-white"
                        : "bg-slate-900 hover:bg-black text-white"
                    }`}
                  >
                    Select {pkg.name}
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          7. 4-STAGE SCIENTIFIC EXECUTION BLUEPRINT
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className={`text-[10px] font-black uppercase tracking-widest ${service.color} block mb-2`}>
              Scientific Execution
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Our 4-Stage Deployment <span className={service.color}>Blueprint</span>
            </h2>
            <p className="text-slate-500 font-medium text-xs sm:text-base">
              A systematic operational framework engineered to deploy, measure, and scale high-intent customer acquisitions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Deep Audit",
                desc: "We analyze your historic metrics, audit competitor funnels, and pinpoint conversion leakage across all touchpoints."
              },
              {
                step: "02",
                title: "Custom Engineering",
                desc: "Our team drafts high-converting ad scripts, codes Next.js landing layouts, and configures server-side attribution."
              },
              {
                step: "03",
                title: "Aggressive Launch",
                desc: "We deploy the multi-channel strategy with real-time conversion monitoring and immediate audience feedback loops."
              },
              {
                step: "04",
                title: "Iterate & Scale",
                desc: "We systematically prune low-converting angles, perform multivariate creative tests, and scale winning channels to maximize ROAS."
              }
            ].map((node, i) => (
              <div key={i} className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/70 relative group hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
                <div className={`text-3xl sm:text-4xl font-black mb-4 ${service.color} opacity-40 group-hover:opacity-100 transition-opacity`}>
                  {node.step}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{node.title}</h3>
                <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. WHY TOPRANK VS TRADITIONAL AGENCIES (COMPARISON MATRIX)
      ───────────────────────────────────────────────────────────── */}
      {service.comparison && service.comparison.length > 0 && (
        <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className={`text-[10px] font-black uppercase tracking-widest ${service.color} block mb-2`}>
                The Competitive Difference
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Why Industry Leaders Choose TopRank
              </h2>
              <p className="text-slate-500 font-medium text-xs sm:text-base">
                How our engineering-first growth methodology outperforms traditional freelance vendors and generic agencies.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[540px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider font-black">
                      <th className="py-4 px-6">Core Evaluation Area</th>
                      <th className="py-4 px-6 bg-blue-600 text-white">TopRank Digital Service</th>
                      <th className="py-4 px-6 text-slate-400">Traditional Generic Agencies</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
                    {service.comparison.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-900">{row.feature}</td>
                        <td className="py-4 px-6 text-blue-700 bg-blue-50/50 font-bold flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{row.topRank}</span>
                        </td>
                        <td className="py-4 px-6 text-slate-500">{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          9. CLIENT TESTIMONIALS & SOCIAL PROOF
      ───────────────────────────────────────────────────────────── */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className={`text-[10px] font-black uppercase tracking-widest ${service.color} block mb-2`}>
                Verified Results
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                What Our Clients Say About Our {service.name}
              </h2>
              <p className="text-slate-500 font-medium text-xs sm:text-base">
                Real feedback from founders and managing directors scaling their revenue with TopRank.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.testimonials.map((t, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm relative">
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm sm:text-base">{t.name}</h4>
                    <p className="text-xs font-bold text-slate-500">{t.role} • <span className="text-blue-600">{t.company}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          10. ACCESSIBLE ANIMATED FAQ ACCORDION
      ───────────────────────────────────────────────────────────── */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60" id="faqs">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className={`text-[10px] font-black uppercase tracking-widest ${service.color} block mb-2`}>
                Common Inquiries
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 flex items-center justify-center gap-2">
                <HelpCircle className={`w-6 h-6 sm:w-8 sm:h-8 ${service.color}`} />
                FAQs Regarding {service.name}
              </h2>
              <p className="text-slate-500 font-bold text-xs sm:text-base">
                Everything you need to know regarding turnaround times, budgets, and deliverables.
              </p>
            </div>

            <div className="space-y-3.5 sm:space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base md:text-lg leading-snug">
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-slate-100 transition-transform duration-300 ${isOpen ? `rotate-180 ${service.bgColor}` : ""}`}>
                        <ChevronDown className={`w-4 h-4 ${isOpen ? service.color : "text-slate-500"}`} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed border-t border-slate-100">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          11. DIRECT HIGH-INTENT CONTACT & MULTI-CITY OFFICE SECTION
      ───────────────────────────────────────────────────────────── */}
      <ContactSection />

      {/* ─────────────────────────────────────────────────────────────
          12. RELATED SERVICES CROSS-LINKS
      ───────────────────────────────────────────────────────────── */}
      <RelatedServices currentServiceId={service.id} />

    </main>
  );
}
