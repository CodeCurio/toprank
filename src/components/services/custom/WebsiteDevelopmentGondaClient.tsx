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

export function WebsiteDevelopmentGondaClient() {
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
          service: `Website Development Gonda - ${formData.serviceType}`,
          message: `Budget: ${formData.budget} | Notes: ${formData.message}`,
          location: "Gonda"
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    }

    const text = `Hi TopRank Team, I need website development in Gonda.\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email}\n🌐 *Service Type:* ${formData.serviceType}\n💰 *Budget:* ${formData.budget}\n📝 *Requirements:* ${formData.message || "Please provide consultation and quote."}`;
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
      q: "What is the website development price in Gonda?",
      a: "Website development packages in Gonda start from ₹18,000 to ₹25,000 for standard local business websites, clinics, schools, and retail shops. Advanced dynamic portals, coaching platforms, and e-commerce stores range between ₹35,000 and ₹65,000+ with 100% fixed transparent pricing."
    },
    {
      q: "How does having a modern website help Gonda businesses?",
      a: "With rising digital smartphone adoption in Gonda, Balrampur, and Bahraich, customers search Google before visiting doctors, schools, or buying goods. A fast, Google-ranked website establishes immediate credibility, generates daily WhatsApp inquiries, and drives foot traffic."
    },
    {
      q: "Do you provide local SEO and Google Maps setup with website design in Gonda?",
      a: "Yes! Every website is built with complete local SEO, Google Business Profile (GMB) integration, Schema.org LocalBusiness markup, and click-to-call buttons so local customers in Gonda can connect in 1 tap."
    },
    {
      q: "How long does it take to deliver a business website in Gonda?",
      a: "Most local business and school/hospital websites in Gonda are completed and launched within 2 to 3 weeks. We handle domain registration, hosting, design, content layout, and mobile optimization from start to finish."
    },
    {
      q: "Can I manage or update the website myself?",
      a: "Yes. We build clean, user-friendly admin dashboards where you can easily update text, add new photos, post announcements, or manage customer inquiries with zero coding knowledge required."
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
            "name": "TopRank Digital Service - Website Development Company in Gonda",
            "image": "https://www.toprankindia.com/icon.jpg",
            "url": "https://www.toprankindia.com/services/website-development-gonda",
            "telephone": "+919115439115",
            "priceRange": "₹18,000 - ₹65,000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Civil Lines / Station Road Commercial Belt",
              "addressLocality": "Gonda",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "271001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 27.1307,
              "longitude": 81.9619
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
              <span className="text-blue-400 truncate max-w-[130px] sm:max-w-none">Gonda Web Dev</span>
            </nav>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] sm:leading-[1.08] mb-4 sm:mb-6 px-1"
            >
              Website Development Company in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400">
                Gonda
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto px-2"
            >
              We design high-speed, modern business websites engineered on <strong>Next.js, React & WordPress</strong>. Designed to rank #1 on Google, generate direct WhatsApp customer calls, and establish digital leadership across Gonda, Balrampur, Bahraich, and Devipatan Division.
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
              Website Development Services in Gonda
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              Custom digital web platforms engineered for doctors, schools, real estate builders, retail merchants, and local businesses in Gonda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  Local Business Websites
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  High-converting digital presence built specifically for Gonda service firms, jewelers, hardware suppliers, and retail businesses.
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
                  Schools & Institute Portals
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Online student admission forms, result announcements, fee notices, and faculty galleries for coaching institutes and schools in Gonda.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" /> Admission lead forms</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" /> Photo & video gallery modules</li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">
                  WordPress & CMS Development
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Simple, lightweight WordPress websites that are easy to update with zero coding skills, backed by automated daily security backups.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" /> 100% Hand-coded themes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" /> Easy Hindi/English support</li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-emerald-600 transition-colors">
                  E-Commerce Store Development
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Sell products locally and nationally with integrated QR code UPI payments, Razorpay, Cashfree, and automated SMS order updates.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Instant UPI/QR checkout</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> WhatsApp order notifications</li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors">
                  Custom Next.js & React Web Apps
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Lightning-fast web platforms engineered with Next.js 16 and Supabase databases adhering to <a href="https://www.w3.org/standards/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">W3C Web Standards</a>.
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
                  Website Redesign & Mobile Fixes
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Upgrade old, broken, or slow-loading websites into modern mobile-first conversion machines that rank #1 on Google in Gonda.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" /> 100% Mobile responsive fix</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" /> Modern 2026 UI/UX aesthetics</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4. LOCAL GONDA COVERAGE */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800" id="tech-architecture">
        <div className="absolute top-0 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-3 inline-block">
                Dedicated Regional Coverage
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Serving Businesses Across Gonda & Devipatan Region
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Fast website turnaround and localized customer support across key commercial markets in Gonda:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Civil Lines", desc: "Clinics, diagnostic pathology labs, advocates & corporate offices", badge: "Commercial Core" },
                { name: "Station Road & Chowk", desc: "Wholesale merchants, jewelers, clothing showrooms & retail", badge: "Trade Center" },
                { name: "Utraula Road", desc: "Schools, degree colleges, technical institutes & coaching hubs", badge: "Education Zone" },
                { name: "Badgaon Commercial", desc: "Automobile dealerships, electronics showrooms & pharmacies", badge: "Retail Belt" },
                { name: "Nawabganj Belt", desc: "Agricultural machinery, fertilizer trade & transport logistics", badge: "Trade Hub" },
                { name: "Balrampur Highway", desc: "Highway restaurants, petrol pump services & manufacturing", badge: "Highway Corridor" },
                { name: "Karnailganj", desc: "Local traders, agro-processing businesses & healthcare centers", badge: "Regional Hub" },
                { name: "Ayodhya-Gonda Corridor", desc: "Hospitality hotels, tourist guest houses & transport portals", badge: "Growth Belt" }
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
                      href={`https://wa.me/919115439115?text=${encodeURIComponent(`Hi TopRank, I need website development for my business in ${area.name}, Gonda.`)}`}
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
                Schedule Consultation for Gonda Project
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
              Our Website Development Process in Gonda
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              A transparent, 7-stage engineering methodology ensuring zero delays, superior code quality, and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: "01", title: "Requirement Analysis", desc: "We study your business goals, target audience, and benchmark your direct competitors in Gonda." },
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
                  placeholder="e.g. Ramesh Kumar"
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
                  <option value="School / College Portal">School / College Portal</option>
                  <option value="Hospital / Clinic Website">Hospital / Clinic Website</option>
                  <option value="E-Commerce Store (Shopify/Next.js)">E-Commerce Store (Shopify/Next.js)</option>
                  <option value="WordPress Website Development">WordPress Website Development</option>
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
                ✓ Thank you! Your inquiry is saved and our Gonda engineering team will connect with you shortly.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* TOPIC CLUSTER */}
      <SeoTopicClusterSection currentCity="Gonda" />

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
              Everything you need to know about developing a website for your business in Gonda & Devipatan region.
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
