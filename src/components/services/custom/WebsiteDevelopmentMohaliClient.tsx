"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, Code, Zap, Search, ShieldCheck, MapPin, 
  Building2, ShoppingCart, Layout, Layers, Server, 
  Globe, HelpCircle, Star, DollarSign, Database, 
  Award, Users, ChevronDown, Send, Phone, MessageSquare,
  Sparkles, CheckCircle2, ArrowRight, Clock, ExternalLink,
  ChevronRight, RefreshCw, FileText
} from "lucide-react";
import Link from "next/link";
import { usePhone } from "@/hooks/usePhone";
import { SeoTopicClusterSection } from "./SeoTopicClusterSection";

export function WebsiteDevelopmentMohaliClient() {
  const phone = usePhone();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Business Website Development",
    budget: "₹25,000 - ₹50,000",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone || "",
          email: formData.email || "",
          service: `Website Development Mohali - ${formData.serviceType}`,
          message: `Budget: ${formData.budget} | Notes: ${formData.message}`,
          location: "Mohali"
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    }

    const text = `Hi TopRank Team, I need website development in Mohali.\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email}\n🌐 *Service Type:* ${formData.serviceType}\n💰 *Budget:* ${formData.budget}\n📝 *Requirements:* ${formData.message || "Please provide consultation and quote."}`;
    const encodedText = encodeURIComponent(text);

    setTimeout(() => {
      window.open(`https://wa.me/919115439115?text=${encodedText}`, "_blank");
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 400);
  };

  const faqs = [
    {
      q: "What is the website development cost in Mohali (SAS Nagar)?",
      a: "Website development in Mohali starts from ₹18,000 to ₹25,000 for standard business websites. Custom Next.js web applications, tech startup portals in Phase 8B, and feature-rich e-commerce stores range from ₹35,000 to ₹85,000+ based on dynamic features, database architecture, and custom UI/UX design."
    },
    {
      q: "How fast can you develop and launch our website in Mohali?",
      a: "Standard business websites are typically delivered in 2 to 3 weeks. Fast-track marketing landing pages can be deployed in 5 to 7 days, while custom full-stack SaaS portals and complex e-commerce platforms take 4 to 6 weeks."
    },
    {
      q: "Why should Mohali IT startups and businesses choose Next.js?",
      a: "Mohali is Punjab's premier IT & tech hub. Next.js 16 delivers sub-800ms loading speeds, unmatched security with zero PHP/WordPress plugin vulnerabilities, and superior Core Web Vitals that give your business a direct competitive edge on Google Search."
    },
    {
      q: "Do you provide SEO with website development in Mohali?",
      a: "Yes! Every website we build includes complete technical on-page SEO: Schema.org LocalBusiness JSON-LD markup, OpenGraph social meta tags, semantic HTML5 structure, and XML sitemaps to ensure fast Google indexing and high rankings."
    },
    {
      q: "Can we meet in-person in Phase 8B, QuarkCity, or Aerocity?",
      a: "Yes. Our engineering team conducts on-site requirement discovery sessions across Phase 8B Industrial Area, QuarkCity, Bestech Business Towers, and IT City Mohali."
    },
    {
      q: "Can you redesign our existing slow website?",
      a: "Yes. We specialize in modernizing legacy websites, ensuring 100% data preservation, zero downtime, and complete 301 redirection safety so your current search rankings remain intact."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "TopRank Digital Service - Website Development Company in Mohali",
            "image": "https://www.toprankindia.com/icon.jpg",
            "url": "https://www.toprankindia.com/services/website-development-mohali",
            "telephone": "+919115439115",
            "priceRange": "₹18,000 - ₹85,000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Phase 8B / Industrial Focal Point",
              "addressLocality": "Mohali (SAS Nagar)",
              "addressRegion": "Punjab",
              "postalCode": "160055",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.7046,
              "longitude": 76.7179
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "20:00"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
              }
            }))
          })
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-pink-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <nav className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest text-slate-300 mb-5 sm:mb-6 backdrop-blur-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-blue-400 truncate max-w-[130px] sm:max-w-none">Mohali Web Dev</span>
            </nav>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] sm:leading-[1.08] mb-4 sm:mb-6 px-1"
            >
              Website Development Company in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400">
                Mohali
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto px-2"
            >
              We engineer custom, ultra-fast websites on <strong>Next.js 16, React & WordPress</strong>. Built to rank #1 on Google, capture qualified B2B & consumer leads, and accelerate business growth across Phase 8B, QuarkCity, IT City, and all Mohali commercial sectors.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2 sm:px-0"
            >
              <a 
                href="#quote-form" 
                className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-95 text-white font-black text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest transition-all shadow-xl shadow-orange-500/25 active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-white" /> Get Free Website Quote
              </a>
              <a 
                href="tel:+919115439115" 
                className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-400" /> Call: +91 91154 39115
              </a>
            </motion.div>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-8 text-xs font-bold text-slate-400">
              <span className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Sub-800ms Load Time</span>
              <span className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-400" /> 100% Mobile Responsive</span>
              <span className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400" /> Local SEO & Schema Ready</span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST METRICS */}
      <section className="py-8 sm:py-12 bg-slate-900 border-y border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="space-y-0.5 sm:space-y-1 p-2">
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">8+ Years</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Industry Experience</p>
            </div>
            <div className="space-y-0.5 sm:space-y-1 p-2">
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400">250+ Sites</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Websites Live & Ranked</p>
            </div>
            <div className="space-y-0.5 sm:space-y-1 p-2">
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">&lt; 0.8s</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Avg Page Load Speed</p>
            </div>
            <div className="space-y-0.5 sm:space-y-1 p-2">
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-orange-400">4.9 ★</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Google Review Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className="py-14 sm:py-20 lg:py-28 bg-slate-50 relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-block">
              Tailored Engineering
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
              Website Development Services in Mohali
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              From high-growth tech startup platforms to local business lead generation portals, we deliver custom web solutions engineered for maximum conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  Business Website Development
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  High-converting digital presence built specifically for local Mohali service companies, immigration advisors, real estate developers, and clinics.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Lead capture funnels</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Direct WhatsApp & Click-to-Call</li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Layout className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-pink-600 transition-colors">
                  Corporate & Startup Web Portals
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Multi-page corporate platforms for Phase 8B tech startups, software exporters, and venture-backed IT firms in QuarkCity and Bestech.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" /> Enterprise-grade security</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" /> Scalable CMS architecture</li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">
                  WordPress Development
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Custom WordPress theme engineering without slow page-builder bloat. Fast database queries, clean code, and simple visual content management.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" /> 100% Hand-coded themes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" /> Simple visual editor</li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-emerald-600 transition-colors">
                  E-commerce Development
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Feature-rich online stores built on Shopify, WooCommerce, or custom Next.js checkout engines with Razorpay, Cashfree, UPI, and courier sync.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Instant UPI/Card checkout</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Automated inventory sync</li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors">
                  Custom Next.js & React Applications
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Custom full-stack web applications, SaaS dashboards, and portal engines built with Next.js 16, React 19, Node.js, and Supabase PostgreSQL databases following <a href="https://www.w3.org/standards/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">W3C Web Standards</a>.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Sub-800ms page load speeds</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Zero vulnerability architecture</li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-rose-600 transition-colors">
                  Website Redesign & Speed Optimization
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Transform outdated, slow-loading websites into sleek, modern conversion machines with 100% Core Web Vitals and zero loss of existing Google rankings.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" /> 301 SEO redirection safety</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" /> Modern 2026 UI/UX aesthetics</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TECH ARCHITECTURE & LOCAL MOHALI HUBS */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800" id="tech-architecture">
        <div className="absolute top-0 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Next-Gen Web Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
              Engineered For Maximum Speed, Security &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400">
                Inbound Leads
              </span>
            </h2>
            <p className="text-slate-300 font-medium text-sm sm:text-base lg:text-lg">
              We build custom Next.js websites that outperform legacy WordPress templates, loading in under 800ms to convert your local Mohali traffic into paying clients.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-3 inline-block">
                In-Person & Remote Support
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Serving Businesses Across All Mohali Commercial Hubs
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                We offer on-site project discovery meetings and rapid 24-48h turnaround sprints across major commercial zones in Mohali:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Phase 8B (IT Corridor)", desc: "Software exporters, tech startups, SaaS companies & multinational offices", badge: "Tech Hub" },
                { name: "Bestech Business Towers", desc: "Corporate consulting firms, digital agencies & enterprise SaaS offices", badge: "Corporate Zone" },
                { name: "QuarkCity & Sector 75", desc: "Global IT development centers, BPOs & technology incubators", badge: "Innovation Hub" },
                { name: "Phase 7 & Sector 70", desc: "Immigration consultancies, IELTS coaching institutes & local retail", badge: "Education Belt" },
                { name: "Phase 3B2 & Sector 68", desc: "Restaurants, cafes, healthcare clinics & boutique commercial services", badge: "Commercial Core" },
                { name: "Sector 82 (JLPL IT City)", desc: "Industrial manufacturers, logistics firms & enterprise warehouses", badge: "Industrial Hub" },
                { name: "Aerocity & Airport Road", desc: "Real estate developers, international hotel chains & commercial malls", badge: "Growth Belt" },
                { name: "CP67 Mall & Homeland", desc: "Luxury lifestyle retail, entertainment complexes & hospitality venues", badge: "Retail Center" }
              ].map((area, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                        <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                        {area.name}
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{area.desc}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {area.badge}
                    </span>
                    <a
                      href={`https://wa.me/919115439115?text=${encodeURIComponent(`Hi TopRank, I need website development for my business in ${area.name}, Mohali.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      Inquire →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center pt-6 border-t border-slate-800/80">
              <a
                href="#quote-form"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4" />
                Schedule In-Person Consultation in Mohali
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-block">
              Agile Execution
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
              Our Website Development Process in Mohali
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              A transparent, 7-stage engineering methodology ensuring zero delays, superior code quality, and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: "01", title: "Requirement Analysis", desc: "We study your business goals, target audience, and benchmark your direct competitors in Mohali." },
              { step: "02", title: "Planning & Sitemap", desc: "We map out the complete URL architecture, conversion funnels, and content hierarchy for frictionless UX." },
              { step: "03", title: "UI/UX Design (Figma)", desc: "Our visual designers create custom, pixel-perfect mockups reflecting your brand identity for your review." },
              { step: "04", title: "Full-Stack Development", desc: "We code your website using modern Next.js 16 / React or custom WordPress with semantic clean code." },
              { step: "05", title: "SEO & Speed Tuning", desc: "We implement Schema.org JSON-LD markup and optimize Core Web Vitals to achieve sub-second load times." },
              { step: "06", title: "Testing & QA", desc: "Cross-browser validation, mobile viewport checks, form submission testing, and SSL security audits." },
              { step: "07", title: "Deployment & Launch", desc: "We point your domain DNS, setup Cloudflare CDN, and hand over admin dashboard access with training." }
            ].map((node, idx) => (
              <div key={idx} className="bg-slate-50 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200 relative group hover:border-blue-300 transition-all shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 opacity-40 mb-3 sm:mb-4 group-hover:opacity-100 transition-opacity">
                  {node.step}
                </div>
                <h3 className="text-sm sm:text-base font-black text-slate-900 mb-1.5 sm:mb-2">{node.title}</h3>
                <p className="text-slate-500 font-medium text-xs leading-relaxed">{node.desc}</p>
              </div>
            ))}

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-5 sm:p-6 rounded-2xl sm:rounded-3xl text-white flex flex-col justify-center shadow-lg">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4 text-yellow-300" />
              <h3 className="text-base sm:text-lg font-black mb-1.5 sm:mb-2">Dedicated Account Manager</h3>
              <p className="text-blue-100 text-xs font-medium leading-relaxed">
                Direct WhatsApp access to our lead engineer for instant project updates throughout the development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUOTE FORM */}
      <section className="py-14 sm:py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden" id="quote-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full mb-3 inline-block">
              Free Website Consultation
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3">
              Request Your Free Project Proposal
            </h2>
            <p className="text-slate-400 font-medium text-xs sm:text-base">
              Share your project requirements and receive a detailed wireframe, fixed-cost proposal, and delivery timeline within 24 hours.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-slate-950 border border-slate-800 p-6 sm:p-10 rounded-3xl shadow-2xl space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Navjot Singh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Phone Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. contact@yourbusiness.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Service Required</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                >
                  <option value="Business Website Development">Business Website Development</option>
                  <option value="Corporate Next.js Portal">Corporate Next.js Portal</option>
                  <option value="E-Commerce Store (Shopify/Next.js)">E-Commerce Store (Shopify/Next.js)</option>
                  <option value="Custom WordPress Development">Custom WordPress Development</option>
                  <option value="Website Redesign & Speed Optimization">Website Redesign & Speed Optimization</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Project Details & Objectives</label>
              <textarea
                rows={3}
                placeholder="Tell us about your business, target audience, and reference websites you like..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-95 text-white font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Submitting & Connecting...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Proposal Request & Connect on WhatsApp</span>
                </>
              )}
            </button>

            {submitSuccess && (
              <p className="text-center text-xs font-bold text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                ✓ Thank you! Your inquiry is saved and our Mohali engineering team will connect with you shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* TOPIC CLUSTER */}
      <SeoTopicClusterSection currentCity="Mohali" />

      {/* 7. FAQS */}
      <section className="py-14 sm:py-20 lg:py-28 bg-slate-50 border-t border-slate-200" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-block">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              Everything you need to know about developing a website for your business in Mohali & SAS Nagar.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 font-bold text-sm sm:text-base lg:text-lg text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm lg:text-base text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3 sm:pt-4">
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

    </main>
  );
}
