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

export function WebsiteDevelopmentChandigarhClient() {
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
          service: `Website Development Chandigarh - ${formData.serviceType}`,
          message: `Budget: ${formData.budget} | Notes: ${formData.message}`,
          location: "Chandigarh"
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    }

    const text = `Hi TopRank Team, I need website development in Chandigarh / Tricity.\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email}\n🌐 *Service Type:* ${formData.serviceType}\n💰 *Budget:* ${formData.budget}\n📝 *Requirements:* ${formData.message || "Please provide consultation and quote."}`;
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
      q: "What is the website development cost in Chandigarh?",
      a: "Website development cost in Chandigarh typically starts from ₹18,000 to ₹25,000 for a standard professional business website. Custom high-performance corporate platforms, SaaS portals, and custom e-commerce stores range from ₹35,000 to ₹85,000+ depending on UI/UX complexity, API integrations, and payment gateways. TopRank provides transparent fixed pricing with no hidden charges."
    },
    {
      q: "How fast can you launch our business website in Chandigarh?",
      a: "Standard 5-to-10 page corporate websites are typically designed, coded, and launched within 2 to 3 weeks. Fast-track landing pages can be deployed in 5 to 7 days, while complex custom portals and e-commerce platforms take 4 to 6 weeks under our agile sprint process."
    },
    {
      q: "Why should Tricity businesses choose custom Next.js over WordPress templates?",
      a: "WordPress page builder templates often score poorly on Google Core Web Vitals due to heavy plugin bloat and slow server response times. Custom Next.js 16 websites deliver sub-800ms loading speeds, 99+ Google PageSpeed scores, complete protection against malware vulnerabilities, and significant ranking advantages on Google Search in Chandigarh and Mohali."
    },
    {
      q: "Do you provide SEO with website development?",
      a: "Yes! Every website developed by TopRank Digital Service is built with technical on-page SEO from day one. This includes Schema.org LocalBusiness JSON-LD markup, optimized heading hierarchy, XML sitemaps, OpenGraph meta tags, and mobile ergonomics for #1 Google rankings."
    },
    {
      q: "Do you provide in-person meetings in Chandigarh, Mohali, and Panchkula?",
      a: "Yes. Our team provides in-person project discovery sessions across Sector 17, Sector 34, Rajiv Gandhi IT Park, Phase 8B Mohali, and MDC Panchkula to align on your design and conversion goals."
    },
    {
      q: "Can you redesign our existing slow or outdated website?",
      a: "Absolutely. We migrate legacy websites to high-speed Next.js or clean WordPress architectures with 100% data preservation, zero downtime, and complete 301 SEO redirection safety."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SCHEMA MARKUP (Structured Data)
      ───────────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "TopRank Digital Service - Website Development Company in Chandigarh",
            "image": "https://www.toprankindia.com/icon.jpg",
            "url": "https://www.toprankindia.com/services/website-development-chandigarh",
            "telephone": "+919115439115",
            "priceRange": "₹18,000 - ₹85,000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 17 / IT Park Corridor",
              "addressLocality": "Chandigarh",
              "addressRegion": "Chandigarh / Punjab",
              "postalCode": "160017",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.7333,
              "longitude": 76.7794
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "20:00"
            },
            "sameAs": [
              "https://www.facebook.com/toprankdigital",
              "https://www.instagram.com/toprankdigital"
            ]
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

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Mobile-First Engineered)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-pink-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Breadcrumb */}
            <nav className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest text-slate-300 mb-5 sm:mb-6 backdrop-blur-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-blue-400 truncate max-w-[130px] sm:max-w-none">Chandigarh Web Dev</span>
            </nav>

            {/* H1 Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] sm:leading-[1.08] mb-4 sm:mb-6 px-1"
            >
              Website Development Company in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400">
                Chandigarh
              </span>
            </motion.h1>

            {/* Short Value Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto px-2"
            >
              We build custom, lightning-fast websites engineered on <strong>Next.js 16, React & WordPress</strong>. Designed to rank #1 on Google, capture qualified customer leads, and power business growth across Chandigarh, Mohali, Panchkula, and the entire Tricity region.
            </motion.p>

            {/* CTAs */}
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

            {/* Micro badges */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-8 text-xs font-bold text-slate-400">
              <span className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Sub-800ms Load Time</span>
              <span className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-pink-400" /> 100% Mobile Responsive</span>
              <span className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-400" /> Local SEO & Schema Ready</span>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. TRUST / CREDIBILITY METRICS
      ───────────────────────────────────────────────────────────── */}
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

      {/* ─────────────────────────────────────────────────────────────
          3. WEBSITE DEVELOPMENT SERVICES WE OFFER IN CHANDIGARH
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-slate-50 relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-block">
              Tailored Engineering
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
              Website Development Services We Offer in Chandigarh
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              From corporate brand portals to high-velocity e-commerce and custom Next.js applications, we deliver robust solutions engineered for maximum conversion across Chandigarh and Tricity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            
            {/* Service 1 */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  Business Website Development
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  High-converting digital presence built specifically for local Chandigarh businesses, immigration consultants, education institutes, and clinics looking for consistent customer inquiries.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Lead capture funnels</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Direct WhatsApp & Click-to-Call</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Layout className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-pink-600 transition-colors">
                  Corporate Website Development
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Multi-page enterprise architectures with custom corporate branding, interactive investor portfolios, case studies, and career modules for IT Park firms.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" /> Enterprise-grade security</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" /> Scalable CMS architecture</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-orange-600 transition-colors">
                  WordPress Development
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Custom WordPress theme engineering without slow page-builder bloat. Easy content management with fast database queries and automated security patches.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" /> 100% Hand-coded themes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" /> Simple visual content editor</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-emerald-600 transition-colors">
                  E-commerce Development
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Feature-rich online stores built on Shopify, WooCommerce, or custom Next.js checkout engines. Integrated with Razorpay, Cashfree, UPI, and automated courier tracking.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Instant UPI/Card checkout</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Automated inventory & order sync</li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2 sm:mb-3 group-hover:text-indigo-600 transition-colors">
                  Custom Web Development (<a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-600">Next.js</a> / <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:underline text-indigo-600">React</a>)
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Custom full-stack web applications, SaaS dashboards, and portal engines built with Next.js 16, React 19, Node.js, and Supabase PostgreSQL databases adhering to <a href="https://www.w3.org/standards/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold underline">W3C Web Standards</a>.
                </p>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 border-t border-slate-100 pt-3 sm:pt-4 text-xs font-bold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Sub-800ms page load speeds</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" /> Zero vulnerability architecture</li>
              </ul>
            </div>

            {/* Service 6 */}
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

      {/* ─────────────────────────────────────────────────────────────
          4. NEXT-GEN WEB ARCHITECTURE & TRICITY LOCAL COVERAGE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800" id="tech-architecture">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
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
              We build custom Next.js websites that outperform legacy WordPress templates, loading in under 800ms to convert your local Chandigarh & Tricity traffic into paying clients.
            </p>
          </div>

          {/* 1. Core Engineering Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all hover:bg-slate-900">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sub-800ms Load Speeds</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Server-rendered static generation (SSG) with zero bloated plugins ensures 99/100 Google PageSpeed scores, reducing bounce rates by up to 60%.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Core Web Vitals Optimized
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all hover:bg-slate-900">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Built-in Technical SEO</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Automated XML sitemaps, OpenGraph cards, and rich Schema.org JSON-LD structured data engineered to dominate Google Search and Google Maps.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                <CheckCircle2 className="w-4 h-4" /> LocalBusiness Schema Included
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-all hover:bg-slate-900">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp & Call Triggers</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Frictionless 1-tap WhatsApp consultation buttons, dynamic click-to-call bars, and lightweight lead capture forms synced to your dashboard.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-400">
                <CheckCircle2 className="w-4 h-4" /> Instant Customer Dispatch
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all hover:bg-slate-900">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100% Fluid Responsive UI</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Pixel-perfect UI designed in Figma tailored for mobile devices, tablets, and 4K desktop screens with smooth micro-interactions.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4" /> Adaptive Touch Ergonomics
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all hover:bg-slate-900">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security & SSL</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Zero PHP database vulnerabilities. Built with enterprise-grade SSL, automatic DDoS mitigation, and robust Content Security Policies (CSP).
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
                <CheckCircle2 className="w-4 h-4" /> 100% Hack-Resistant Stack
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-pink-500/50 transition-all hover:bg-slate-900">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Full-Stack Tech Stack</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Powered by Next.js 16, React 19, TypeScript, Tailwind CSS, Supabase, and PostgreSQL for unmatched scalability as your business grows.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-pink-400">
                <CheckCircle2 className="w-4 h-4" /> Modern Cloud Architecture
              </div>
            </div>

          </div>

          {/* 2. Chandigarh & Tricity Local Service Coverage */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-3 inline-block">
                In-Person & Remote Support
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Serving Businesses Across All Chandigarh & Tricity Hubs
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                We offer on-site project discovery meetings and rapid 24-48h turnaround sprints across major commercial belts in Chandigarh:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Sector 17 (City Centre)", desc: "Corporate brand headquarters, retail stores, banking firms & legal consultants", badge: "Commercial Hub" },
                { name: "Rajiv Gandhi IT Park", desc: "Software exporters, SaaS product companies, tech startups & co-working spaces", badge: "Tech Park" },
                { name: "Sector 34 (Business District)", desc: "Education coaching hubs, immigration consultants & professional finance firms", badge: "Education Zone" },
                { name: "Industrial Area Phase 1 & 2", desc: "Elante Mall corporate zone, manufacturing exporters & auto showrooms", badge: "Industrial Hub" },
                { name: "Sector 35 & 22", desc: "Hospitality hotels, luxury dining, healthcare clinics & boutique retail", badge: "Retail & Dining" },
                { name: "Phase 8B & 9 (Mohali)", desc: "IT corridor, multinational tech offices & high-growth venture startups", badge: "IT Corridors" },
                { name: "MDC (Panchkula)", desc: "Corporate complexes, real estate developers & healthcare networks", badge: "Tricity Network" },
                { name: "Zirakpur & VIP Road", desc: "Real estate townships, hospitality banquets & high-volume commercial retail", badge: "Growth Corridor" }
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
                      href={`https://wa.me/919115439115?text=${encodeURIComponent(`Hi TopRank, I need website development for my business in ${area.name}, Chandigarh.`)}`}
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
                Schedule In-Person Consultation in Chandigarh
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. OUR WEBSITE DEVELOPMENT PROCESS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-block">
              Agile Execution
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
              Our Website Development Process in Chandigarh
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              A transparent, 7-stage engineering methodology ensuring zero delays, superior code quality, and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {[
              { step: "01", title: "Requirement Analysis", desc: "We study your business goals, target Tricity customer persona, and benchmark your direct competitors." },
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

            {/* Final Highlight Card */}
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

      {/* ─────────────────────────────────────────────────────────────
          6. GET A QUOTE FORM SECTION (100% Working Lead Capture)
      ───────────────────────────────────────────────────────────── */}
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
                  placeholder="e.g. Gurpreet Singh"
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
                ✓ Thank you! Your inquiry is saved and our Chandigarh engineering team will connect with you shortly.
              </p>
            )}
          </form>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TOPICAL CLUSTER & RESEARCH GUIDES (Internal & External Linking)
      ───────────────────────────────────────────────────────────── */}
      <SeoTopicClusterSection currentCity="Chandigarh" />

      {/* ─────────────────────────────────────────────────────────────
          7. FAQS
      ───────────────────────────────────────────────────────────── */}
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
              Everything you need to know about developing a website for your business in Chandigarh & Tricity.
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
