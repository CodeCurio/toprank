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
import { supabase } from "@/lib/supabase/client";

export function WebsiteDevelopmentLucknowClient() {
  const phone = usePhone();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSpot, setActiveSpot] = useState<string | null>("gomti-nagar");
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
      await supabase.from("leads").insert([
        {
          name: formData.name,
          phone: formData.phone || "9115439115",
          service_requested: `Web Dev Lucknow - ${formData.serviceType}`,
          message: `Email: ${formData.email} | Budget: ${formData.budget} | Notes: ${formData.message}`,
          city: "Lucknow",
          status: "New",
        },
      ]);
    } catch (err) {
      console.error("Supabase lead insertion error:", err);
    }

    const text = `Hi TopRank Team, I need website development in Lucknow.\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n📧 *Email:* ${formData.email}\n🌐 *Service Type:* ${formData.serviceType}\n💰 *Budget:* ${formData.budget}\n📝 *Requirements:* ${formData.message || "Please provide consultation and quote."}`;
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
      q: "What is the website development cost in Lucknow?",
      a: "Website development in Lucknow typically starts from ₹18,000 to ₹25,000 for a standard professional business website. High-growth corporate platforms and dynamic custom e-commerce stores range from ₹35,000 to ₹85,000+ depending on custom UI/UX design, payment gateway integrations, and API requirements. TopRank provides transparent, fixed-price quotes with zero hidden charges."
    },
    {
      q: "How long does it take to develop a custom website?",
      a: "A standard 5-to-10 page corporate website takes 2 to 3 weeks from initial wireframing and Figma design to final deployment. Custom e-commerce portals, booking systems, or SaaS web applications typically take 4 to 6 weeks. We follow a strict agile milestone schedule to deliver on time."
    },
    {
      q: "Should I choose WordPress or custom Next.js/React development?",
      a: "If you require a simple blog or basic content site with easy manual edits, WordPress is an option. However, for maximum speed, 100% Google Core Web Vitals scores, high conversion rates, and superior Google SEO ranking in Lucknow, we highly recommend custom Next.js & React. Next.js produces static, lightning-fast web pages that load in under 800ms and cannot be hacked through vulnerable plugins."
    },
    {
      q: "Do you provide SEO with website development?",
      a: "Yes! Every website developed by TopRank Digital Service is built 100% SEO-ready. We configure semantic HTML5 heading hierarchies, JSON-LD Schema markup (LocalBusiness & Service), meta descriptions, OpenGraph social tags, automatic XML sitemaps, and optimized image compression for top Google rankings."
    },
    {
      q: "Do you provide website maintenance and hosting support in Lucknow?",
      a: "Yes, we offer comprehensive post-launch support packages including daily cloud backups, Cloudflare enterprise SSL & CDN setups, software updates, malware security scans, 99.9% uptime monitoring, and priority technical assistance from our Lucknow Gomti Nagar office."
    },
    {
      q: "Can you redesign my existing slow or outdated website?",
      a: "Absolutely. We specialize in website redesigns and legacy migrations. We will migrate your existing content, preserve all your current Google SEO rankings with 301 redirects, and upgrade your platform to a modern, zero-latency Next.js or WordPress design."
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
            "name": "TopRank Digital Service - Website Development Company in Lucknow",
            "image": "https://www.toprankindia.com/icon.jpg",
            "telephone": ["+91 93050 30523", "+91 91154 39115"],
            "url": "https://www.toprankindia.com/services/website-development-lucknow",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "A42/32, Sulabh Awas, Sector 01, Gomti Nagar",
              "addressLocality": "Lucknow",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "226010",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 26.8371748,
              "longitude": 80.9997749
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/p/TopRank-Digital-Service-61578286186245/",
              "https://www.instagram.com/p/DOQuwGsEn0P/",
              "https://in.linkedin.com/company/toprank-digital-service",
              "https://twitter.com/TopRank_Digital"
            ],
            "priceRange": "₹₹",
            "areaServed": [
              "Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", 
              "Vibhuti Khand", "Faizabad Road", "Mahanagar", "Ashiyana", 
              "Sushant Golf City", "Lucknow"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Website Development",
            "provider": {
              "@type": "LocalBusiness",
              "name": "TopRank Digital Service"
            },
            "name": "Website Development Services in Lucknow",
            "description": "Professional Next.js, React and WordPress website development in Lucknow. Fast, responsive, and SEO-optimized web development engineered for high lead conversion.",
            "areaServed": {
              "@type": "City",
              "name": "Lucknow"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Website Development Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Website Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Website Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-Commerce Website Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Next.js & React Custom Web Applications"
                  }
                }
              ]
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
              <span className="text-blue-400 truncate max-w-[130px] sm:max-w-none">Lucknow Web Dev</span>
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
                Lucknow
              </span>
            </motion.h1>

            {/* Short Value Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto px-2"
            >
              We build lightning-fast, high-converting websites engineered on <strong>Next.js, React & WordPress</strong>. Designed to rank #1 on Google, capture qualified leads, and establish your brand authority across Gomti Nagar, Hazratganj, and all Lucknow markets.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2 sm:px-0"
            >
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-95 text-white font-black text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest transition-all shadow-xl shadow-orange-500/25 active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 fill-white" /> Get Free Website Quote
              </a>
              <a 
                href="tel:+919305030523" 
                className="w-full sm:w-auto px-6 sm:px-9 py-3.5 sm:py-4 rounded-xl sm:rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-400" /> Call: +91 93050 30523
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
          2. TRUST / CREDIBILITY SECTION
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
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">15+ Verticals</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Industries Scaled</p>
            </div>

            <div className="space-y-0.5 sm:space-y-1 p-2">
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">99.9% Uptime</p>
              <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Cloud Speed & Security</p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. WEBSITE DEVELOPMENT SERVICES WE OFFER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-slate-50 relative" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-block">
              Tailored Engineering
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
              Website Development Services We Offer in Lucknow
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              From corporate brand portals to high-velocity e-commerce and custom Next.js applications, we deliver robust solutions engineered for maximum conversion.
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
                  High-converting digital presence built specifically for local Lucknow businesses, service firms, clinics, and consultants looking for consistent customer calls.
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
                  Multi-page enterprise architectures with custom corporate branding, interactive investor portfolios, case studies, and career management modules.
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
                  Feature-rich online stores built on Shopify, WooCommerce, or custom Next.js checkout engines. Integrated with Razorpay, Cashfree, UPI, and automated shipping.
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
                  Custom Web Development (Next.js / React)
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium mb-4 sm:mb-6">
                  Custom full-stack web applications, SaaS dashboards, and portal engines built with Next.js, React, Node.js, and Supabase PostgreSQL databases.
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
          4. WHY BUSINESSES IN LUCKNOW NEED A PROFESSIONAL WEBSITE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            <div className="space-y-4 sm:space-y-6">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-orange-600 bg-orange-50 border border-orange-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block">
                Market Reality in Lucknow
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Why Businesses in Lucknow Need a Professional Website
              </h2>
              <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                Lucknow has rapidly transformed into a major commercial and tech hub in North India. With over <strong>4.5 million residents</strong> and massive development in areas like <em>Gomti Nagar Extension, Vibhuti Khand, and Shaheed Path</em>, your customers now search Google before spending a single rupee.
              </p>
              <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                Having a basic social media page is no longer enough. Without a fast, mobile-friendly website, you are losing high-ticket customers directly to competitors who appear on the 1st page of search results.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm mb-1">Local Search Dominance</h4>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-medium">Capture 'near me' customer searches across Lucknow city.</p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm mb-1">24/7 Inbound Leads</h4>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-medium">Direct customer queries routed straight to your WhatsApp.</p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm mb-1">Premium Brand Perception</h4>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-medium">Charge premium rates by positioning your company as an authority.</p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm mb-1">High Ad Conversion (ROAS)</h4>
                  <p className="text-slate-500 text-[11px] sm:text-xs font-medium">Stop wasting Google & Meta ad budget on slow bounce rates.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-600/20 rounded-full blur-[70px] sm:blur-[90px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-pink-600/20 rounded-full blur-[70px] sm:blur-[90px] pointer-events-none" />
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight mb-4 sm:mb-6">
                Is Your Current Website Costing You Revenue?
              </h3>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Takes more than 3 seconds to load on mobile phones",
                  "Doesn't rank in Google's top 10 search results in Lucknow",
                  "Lacks automated WhatsApp or CRM lead tracking",
                  "Looks outdated compared to regional competitors",
                  "Fails Google Core Web Vitals checks"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-slate-300 text-xs sm:text-sm font-medium">
                    <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className="w-full py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-95 text-white font-black text-xs sm:text-xs uppercase tracking-wider sm:tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Claim Free Website Audit Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. WEBSITES WE BUILD FOR LUCKNOW BUSINESSES (Industries)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-purple-600 bg-purple-50 border border-purple-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-block">
              Industry Specialization
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
              Types of Websites We Build for Lucknow Businesses
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              We design niche-specific digital experiences tailored to the customer psychology of your target industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            
            {[
              {
                title: "Healthcare & Hospitals",
                desc: "Online appointment booking, doctor profiles, OPD schedules, and patient inquiry funnels for clinics in Lucknow.",
                color: "border-blue-500"
              },
              {
                title: "Real Estate & Builders",
                desc: "3D property showcases, floor plans, virtual tours, and RERA-compliant project landing pages across Shaheed Path & Gomti Nagar.",
                color: "border-orange-500"
              },
              {
                title: "Education & Coaching",
                desc: "Course listings, online test series, student registration, fee payment gateways, and faculty portfolios in Hazratganj & Aliganj.",
                color: "border-pink-500"
              },
              {
                title: "Restaurants & Cafes",
                desc: "Digital interactive food menus, table reservations, location map guides, and direct online ordering systems.",
                color: "border-emerald-500"
              },
              {
                title: "Professional Services",
                desc: "High-trust authority websites for corporate lawyers, chartered accountants (CAs), architects, and consulting firms.",
                color: "border-purple-500"
              },
              {
                title: "Retail & D2C E-Commerce",
                desc: "Modern online storefronts for Chikan manufacturers, clothing boutiques, jewelry brands, and manufacturing exporters.",
                color: "border-amber-500"
              }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-l-4 ${item.color} border-slate-200 shadow-sm hover:shadow-md transition-all`}>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 sm:mb-2">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. OUR WEBSITE DEVELOPMENT PROCESS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-block">
              Agile Execution
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
              Our Website Development Process
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              A transparent, 7-stage engineering methodology ensuring zero delays, superior code quality, and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {[
              { step: "01", title: "Requirement Analysis", desc: "We study your business goals, target Lucknow customer persona, and benchmark your direct competitors." },
              { step: "02", title: "Planning & Sitemap", desc: "We map out the complete URL architecture, conversion funnels, and content hierarchy for frictionless UX." },
              { step: "03", title: "UI/UX Design (Figma)", desc: "Our visual designers create custom, pixel-perfect mockups reflecting your brand identity for your review." },
              { step: "04", title: "Full-Stack Development", desc: "We code your website using modern Next.js / React or custom WordPress with semantic clean code." },
              { step: "05", title: "SEO & Speed Tuning", desc: "We implement JSON-LD schema, on-page tags, image compression, and achieve sub-second load times." },
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
          7. TECHNOLOGIES WE USE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2">
              Technologies We Use
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">
              We leverage modern, zero-latency frameworks to build future-proof web platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-4">
            {[
              { name: "Next.js", desc: "React Framework", tag: "Fastest SSR" },
              { name: "React.js", desc: "Component Architecture", tag: "Dynamic UI" },
              { name: "WordPress", desc: "Custom Theme CMS", tag: "Easy Content" },
              { name: "Tailwind CSS", desc: "Modern Styling", tag: "Zero Bloat" },
              { name: "Node.js", desc: "Backend API Engine", tag: "High Scalability" },
              { name: "Supabase / SQL", desc: "Secure Database", tag: "Real-time" }
            ].map((tech, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700/80 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center hover:bg-slate-800 transition-all">
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-blue-400 block mb-1">{tech.tag}</span>
                <h4 className="font-black text-white text-xs sm:text-base mb-0.5 sm:mb-1">{tech.name}</h4>
                <p className="text-slate-400 text-[10px] sm:text-[11px] font-medium leading-tight">{tech.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. PORTFOLIO / CASE STUDIES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-slate-50" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-pink-600 bg-pink-50 border border-pink-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-block">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
              Our Website Development Portfolio in Lucknow
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              Explore real-world client case studies engineered for speed, ranking, and high conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-600 to-indigo-900 p-5 sm:p-6 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-full w-max">Healthcare Clinic</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-black">CarePlus Multispeciality</h4>
                  <p className="text-xs text-blue-200 font-medium">Gomti Nagar, Lucknow</p>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-2 gap-2 text-center pb-3 sm:pb-4 border-b border-slate-100">
                  <div className="bg-slate-50 p-2 sm:p-2.5 rounded-xl">
                    <p className="text-base sm:text-lg font-black text-blue-600">+240%</p>
                    <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Monthly Leads</p>
                  </div>
                  <div className="bg-slate-50 p-2 sm:p-2.5 rounded-xl">
                    <p className="text-base sm:text-lg font-black text-emerald-600">0.6s</p>
                    <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Page Load Speed</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Migrated from a slow WordPress site to custom Next.js architecture with online doctor appointment scheduling.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-purple-600 to-pink-900 p-5 sm:p-6 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-full w-max">Real Estate Portal</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-black">Awadh Heights Real Estate</h4>
                  <p className="text-xs text-purple-200 font-medium">Shaheed Path, Lucknow</p>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-2 gap-2 text-center pb-3 sm:pb-4 border-b border-slate-100">
                  <div className="bg-slate-50 p-2 sm:p-2.5 rounded-xl">
                    <p className="text-base sm:text-lg font-black text-purple-600">#1 Rank</p>
                    <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Google SERP</p>
                  </div>
                  <div className="bg-slate-50 p-2 sm:p-2.5 rounded-xl">
                    <p className="text-base sm:text-lg font-black text-emerald-600">4.8x</p>
                    <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">WhatsApp Queries</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Engineered interactive property listing portal with automated floorplan downloads and WhatsApp CRM synchronization.
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-amber-600 to-orange-900 p-5 sm:p-6 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-full w-max">E-Commerce D2C</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-black">Lucknowi Zari & Chikan</h4>
                  <p className="text-xs text-amber-200 font-medium">Hazratganj, Lucknow</p>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-2 gap-2 text-center pb-3 sm:pb-4 border-b border-slate-100">
                  <div className="bg-slate-50 p-2 sm:p-2.5 rounded-xl">
                    <p className="text-base sm:text-lg font-black text-amber-600">₹18L+</p>
                    <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Quarterly Sales</p>
                  </div>
                  <div className="bg-slate-50 p-2 sm:p-2.5 rounded-xl">
                    <p className="text-base sm:text-lg font-black text-emerald-600">100/100</p>
                    <p className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase">Core Web Vitals</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Custom high-speed Shopify e-commerce store with automated UPI checkout and multi-currency international shipping.
                </p>
              </div>
            </div>

          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors py-2 px-4 rounded-xl border border-slate-200 sm:border-transparent"
            >
              Explore Full Portfolio & Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. WEBSITE DEVELOPMENT PRICING IN LUCKNOW
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-white border-t border-slate-200" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-block">
              Transparent Pricing
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
              Website Development Cost in Lucknow
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg px-2">
              Affordable, transparent packages with zero hidden costs. Complete source code ownership guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            
            {/* Plan 1 */}
            <div className="bg-slate-50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-500">Starter</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 mb-2 sm:mb-3">Basic Website</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900">₹18,000</span>
                  <span className="text-xs text-slate-500 font-semibold block mt-0.5">One-time investment</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-xs font-bold text-slate-600 mb-6 sm:mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Up to 5 Custom Pages</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Mobile Responsive Layout</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Contact & WhatsApp Form</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Basic On-Page SEO</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> 1 Year Free Domain & SSL</li>
                </ul>
              </div>
              <a href="#contact" className="w-full py-3 sm:py-3.5 text-center bg-white border border-slate-300 hover:bg-slate-100 text-slate-900 font-black text-xs uppercase tracking-widest rounded-xl transition-all">
                Choose Starter
              </a>
            </div>

            {/* Plan 2 - Featured */}
            <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-blue-500 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                Most Popular in Lucknow
              </div>
              <div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-400">High Growth</span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-1 mb-2 sm:mb-3">Business Website</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-black text-white">₹32,000</span>
                  <span className="text-xs text-slate-400 font-semibold block mt-0.5">One-time investment</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-xs font-bold text-slate-300 mb-6 sm:mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Up to 12 Next.js Pages</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Custom UI/UX Figma Design</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> JSON-LD Schema & Local SEO</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> CRM & WhatsApp Funnel</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> Sub-800ms Speed Guarantee</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" /> 6 Months Tech Support</li>
                </ul>
              </div>
              <a href="#contact" className="w-full py-3 sm:py-3.5 text-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-blue-500/25">
                Choose Business Growth
              </a>
            </div>

            {/* Plan 3 */}
            <div className="bg-slate-50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-500">Retail & Stores</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 mb-2 sm:mb-3">E-Commerce Store</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900">₹48,000</span>
                  <span className="text-xs text-slate-500 font-semibold block mt-0.5">One-time investment</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-xs font-bold text-slate-600 mb-6 sm:mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Unlimited Products & Catalog</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> UPI / Razorpay / COD Integration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Automated Courier Sync</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Cart WhatsApp Recovery</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Customer Account Dashboard</li>
                </ul>
              </div>
              <a href="#contact" className="w-full py-3 sm:py-3.5 text-center bg-white border border-slate-300 hover:bg-slate-100 text-slate-900 font-black text-xs uppercase tracking-widest rounded-xl transition-all">
                Choose E-Commerce
              </a>
            </div>

            {/* Plan 4 */}
            <div className="bg-slate-50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all">
              <div>
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-500">Enterprise</span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 mb-2 sm:mb-3">Custom Web App</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900">Custom</span>
                  <span className="text-xs text-slate-500 font-semibold block mt-0.5">Tailored to scope</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-xs font-bold text-slate-600 mb-6 sm:mb-8">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Next.js / React / Node.js Full Stack</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Custom Database Architecture</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Third-party REST / GraphQL APIs</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Role-based Admin Panels</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Dedicated Cloud Infrastructure</li>
                </ul>
              </div>
              <a href="#contact" className="w-full py-3 sm:py-3.5 text-center bg-slate-900 hover:bg-black text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all">
                Request Custom Quote
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. WHY CHOOSE TOPRANK DIGITAL SERVICE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            <div>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-600 bg-blue-50 border border-blue-200/60 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-block">
                The TopRank Difference
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 sm:mb-6">
                Why Choose TopRank Digital Service in Lucknow
              </h2>
              <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                Unlike freelancers or sales-heavy agencies who outsource your code to third parties, we are a local engineering company with full-time developers and strategists right here in Gomti Nagar, Lucknow.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: "Local Lucknow Headquarters",
                    desc: "Meet our team in person at our Gomti Nagar office for face-to-face planning, milestone reviews, and direct consultations."
                  },
                  {
                    title: "Built-In Local SEO & Schema",
                    desc: "Every page is programmed with Google LocalBusiness Schema, clean URLs, and meta tags designed to rank across Lucknow queries."
                  },
                  {
                    title: "100% Mobile First & Sub-Second Speed",
                    desc: "We ensure zero layout shifts and sub-800ms response times on standard 4G and 5G mobile connections."
                  },
                  {
                    title: "Zero Hidden Fees & Source Code Handover",
                    desc: "You own 100% of your code, design assets, and domain DNS. We provide complete GitHub / cPanel credentials upon launch."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-xs sm:text-sm mb-0.5 sm:mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-[11px] sm:text-xs font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Snapshot Card */}
            <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-200 shadow-xl space-y-4 sm:space-y-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Visit Our Lucknow Headquarters
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                <strong>Address:</strong> A42/32, Sulabh Awas, Sector 01, Gomti Nagar, Lucknow, Uttar Pradesh 226010
              </p>
              
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs font-bold text-slate-700">
                <div className="flex justify-between"><span>Working Days:</span> <span className="text-slate-900">Monday - Sunday</span></div>
                <div className="flex justify-between"><span>Hours:</span> <span className="text-blue-600">24x7 Available</span></div>
                <div className="flex justify-between"><span>Direct Phone:</span> <a href="tel:+919305030523" className="text-blue-600 hover:underline">+91 93050 30523</a></div>
                <div className="flex justify-between"><span>WhatsApp:</span> <a href="https://wa.me/919115439115" className="text-emerald-600 hover:underline">+91 91154 39115</a></div>
              </div>

              <a 
                href="https://share.google/585sAqmLbXxpCuos9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3.5 sm:py-4 text-center bg-slate-900 hover:bg-black text-white font-black text-xs uppercase tracking-widest rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                Get Directions on Google Maps <ExternalLink className="w-4 h-4 text-orange-400" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. AREAS WE SERVE IN LUCKNOW (Realistic Geographic Map & Dual Marquee)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800" id="areas">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-1/4 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-emerald-600/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Live City Geographic Network
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-3 sm:mb-4">
              Real-Time Service Map of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-pink-400">
                Lucknow
              </span>
            </h2>
            <p className="text-slate-400 font-medium text-xs sm:text-base lg:text-lg px-2">
              Authentic geographic deployment grid covering all tech parks, highway expressways, commercial centres, and major townships across Lucknow.
            </p>
          </div>

          {/* 1. REALISTIC LUCKNOW INTERACTIVE CARTOGRAPHIC MAP */}
          <div className="mb-10 sm:mb-16 bg-slate-900/90 border border-slate-800 rounded-2xl sm:rounded-[2.5rem] p-3 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            
            {/* Top Telemetry & Zone Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-800/80 text-[11px] sm:text-xs">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-800 border border-slate-700 text-emerald-400 font-mono font-bold shadow-inner text-[10px] sm:text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  LUCKNOW MAP GRID
                </span>
                <span className="hidden md:inline font-mono text-slate-500 text-[11px]">
                  CENTER: 26.8467° N, 80.9462° E
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 text-[9px] sm:text-[11px] font-bold">
                <span className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-orange-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" /> Gomti Nagar HQ
                </span>
                <span className="flex items-center gap-1 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-blue-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> IT Corridors
                </span>
                <span className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Commercial
                </span>
              </div>
            </div>

            {/* Main Interactive Map Canvas */}
            <div className="relative w-full h-[440px] sm:h-[540px] lg:h-[620px] mt-4 sm:mt-6 rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800/80 overflow-hidden flex items-center justify-center shadow-inner select-none">
              
              {/* Realistic Geographic Vector Elements */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                preserveAspectRatio="none" 
                viewBox="0 0 1000 650"
              >
                <defs>
                  <linearGradient id="gomtiGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.6" />
                  </linearGradient>
                  
                  <filter id="highwayGlowMobile" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <linearGradient id="techCorridorFillMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.02" />
                  </linearGradient>
                </defs>

                {/* Regional Zones */}
                <polygon 
                  points="600,180 880,180 880,480 620,480 580,320" 
                  fill="url(#techCorridorFillMobile)" 
                  stroke="#3b82f6" 
                  strokeWidth="1" 
                  strokeDasharray="4,4" 
                  opacity="0.6"
                />
                <text x="640" y="210" fill="#60a5fa" fontSize="12" fontWeight="900" letterSpacing="2" opacity="0.5">
                  GOMTI TECH CORRIDOR
                </text>

                <polygon 
                  points="580,420 860,420 920,600 640,600" 
                  fill="#f59e0b" 
                  fillOpacity="0.04" 
                  stroke="#f59e0b" 
                  strokeWidth="0.8" 
                  strokeDasharray="3,3" 
                  opacity="0.5"
                />

                {/* Highway Network */}
                <path 
                  d="M 230,550 C 420,530 650,560 760,460 C 830,390 870,300 870,180" 
                  fill="none" 
                  stroke="#f59e0b" 
                  strokeWidth="4.5" 
                  filter="url(#highwayGlowMobile)"
                  opacity="0.8" 
                />
                <path 
                  d="M 230,550 C 420,530 650,560 760,460 C 830,390 870,300 870,180" 
                  fill="none" 
                  stroke="#fff" 
                  strokeWidth="1" 
                  strokeDasharray="8,6" 
                  opacity="0.7" 
                />

                <line x1="460" y1="310" x2="940" y2="190" stroke="#10b981" strokeWidth="3.5" opacity="0.7" />
                <line x1="380" y1="380" x2="160" y2="600" stroke="#3b82f6" strokeWidth="3.5" opacity="0.7" />
                <line x1="430" y1="220" x2="330" y2="50" stroke="#8b5cf6" strokeWidth="3" opacity="0.6" />
                <line x1="460" y1="320" x2="710" y2="300" stroke="#ec4899" strokeWidth="3" opacity="0.7" />

                {/* Gomti River */}
                <path 
                  d="M 120,80 C 220,130 260,260 320,270 C 390,280 430,220 490,260 C 540,290 560,370 630,360 C 700,350 750,420 830,490 L 960,610" 
                  fill="none" 
                  stroke="url(#gomtiGradientMobile)" 
                  strokeWidth="12" 
                  strokeLinecap="round"
                  opacity="0.85" 
                />
                <text x="540" y="335" fill="#38bdf8" fontSize="11" fontWeight="900" letterSpacing="1">
                  ~ Gomti River ~
                </text>

                {/* Real Landmark Anchors */}
                <circle cx="735" cy="465" r="12" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="735" y="470" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">🏟️</text>
                <text x="755" y="470" fill="#fcd34d" fontSize="9" fontWeight="bold">Ekana</text>

                <circle cx="790" cy="545" r="12" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                <text x="790" y="550" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">🛍️</text>
                <text x="810" y="550" fill="#6ee7b7" fontSize="9" fontWeight="bold">Lulu Mall</text>

                <circle cx="455" cy="325" r="12" fill="#1e293b" stroke="#ec4899" strokeWidth="1.5" />
                <text x="455" y="330" fill="#f472b6" fontSize="9" fontWeight="bold" textAnchor="middle">🏛️</text>

                <circle cx="360" cy="380" r="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="360" y="385" fill="#7dd3fc" fontSize="9" fontWeight="bold" textAnchor="middle">🚉</text>
              </svg>

              {/* Realistic Interactive Hotspot Beacons */}
              {[
                { 
                  id: "gomti-nagar", 
                  name: "Gomti Nagar", 
                  sector: "Sector 01 / Manoj Pandey / Patrakar",
                  pincode: "226010",
                  x: 70, y: 44, 
                  color: "bg-orange-500", 
                  pulseColor: "border-orange-400", 
                  textColor: "text-orange-400", 
                  isHQ: true,
                  clients: "80+ Active Sites",
                  turnaround: "Same-Day Meeting",
                  specialty: "Next.js 15, SEO Schema"
                },
                { 
                  id: "vibhuti-khand", 
                  name: "Vibhuti Khand", 
                  sector: "Cyber Heights & IT Park",
                  pincode: "226010",
                  x: 75, y: 39, 
                  color: "bg-blue-500", 
                  pulseColor: "border-blue-400", 
                  textColor: "text-blue-400",
                  clients: "45+ Tech Startups",
                  turnaround: "24-48h Sprints",
                  specialty: "SaaS Dashboards, React"
                },
                { 
                  id: "hazratganj", 
                  name: "Hazratganj", 
                  sector: "Central Business District & GPO",
                  pincode: "226001",
                  x: 47, y: 49, 
                  color: "bg-pink-500", 
                  pulseColor: "border-pink-400", 
                  textColor: "text-pink-400",
                  clients: "50+ Retail Stores",
                  turnaround: "Fast Launch",
                  specialty: "Luxury E-Commerce"
                },
                { 
                  id: "aliganj", 
                  name: "Aliganj", 
                  sector: "Education & Coaching Cluster",
                  pincode: "226024",
                  x: 42, y: 27, 
                  color: "bg-emerald-500", 
                  pulseColor: "border-emerald-400", 
                  textColor: "text-emerald-400",
                  clients: "35+ Institutes",
                  turnaround: "3-5 Days Delivery",
                  specialty: "Lead Funnels"
                },
                { 
                  id: "indira-nagar", 
                  name: "Indira Nagar", 
                  sector: "Munshi Pulia Hub",
                  pincode: "226016",
                  x: 63, y: 29, 
                  color: "bg-indigo-500", 
                  pulseColor: "border-indigo-400", 
                  textColor: "text-indigo-400",
                  clients: "28+ Businesses",
                  turnaround: "Quick Setup",
                  specialty: "WordPress & Local SEO"
                },
                { 
                  id: "shaheed-path", 
                  name: "Shaheed Path", 
                  sector: "Stadium & Expressway",
                  pincode: "226002",
                  x: 74, y: 72, 
                  color: "bg-amber-500", 
                  pulseColor: "border-amber-400", 
                  textColor: "text-amber-400",
                  clients: "25+ Builders",
                  turnaround: "Real Estate Funnels",
                  specialty: "3D Virtual Tours"
                },
                { 
                  id: "sushant-golf-city", 
                  name: "Golf City", 
                  sector: "Lulu Mall & Medanta Zone",
                  pincode: "226030",
                  x: 82, y: 84, 
                  color: "bg-emerald-500", 
                  pulseColor: "border-emerald-400", 
                  textColor: "text-emerald-400",
                  clients: "20+ Enterprise Sites",
                  turnaround: "Full Architecture",
                  specialty: "Payment & Portals"
                },
                { 
                  id: "faizabad-road", 
                  name: "Chinhat", 
                  sector: "BBD & Automobile Zone",
                  pincode: "226028",
                  x: 84, y: 24, 
                  color: "bg-blue-500", 
                  pulseColor: "border-blue-400", 
                  textColor: "text-blue-400",
                  clients: "30+ Exporters",
                  turnaround: "B2B Catalogs",
                  specialty: "Product Inventories"
                },
                { 
                  id: "mahanagar", 
                  name: "Mahanagar", 
                  sector: "Specialty Clinics Enclave",
                  pincode: "226006",
                  x: 50, y: 36, 
                  color: "bg-purple-500", 
                  pulseColor: "border-purple-400", 
                  textColor: "text-purple-400",
                  clients: "22+ Clinics",
                  turnaround: "Rapid Setup",
                  specialty: "Patient Booking"
                },
                { 
                  id: "ashiyana", 
                  name: "Ashiyana", 
                  sector: "LDA Colony Zone",
                  pincode: "226012",
                  x: 31, y: 77, 
                  color: "bg-rose-500", 
                  pulseColor: "border-rose-400", 
                  textColor: "text-rose-400",
                  clients: "24+ Local Shops",
                  turnaround: "Local Fast Track",
                  specialty: "Google Maps 3-Pack"
                },
                { 
                  id: "chowk", 
                  name: "Chowk", 
                  sector: "Chikan & Heritage Market",
                  pincode: "226003",
                  x: 23, y: 38, 
                  color: "bg-yellow-500", 
                  pulseColor: "border-yellow-400", 
                  textColor: "text-yellow-400",
                  clients: "32+ Exporters",
                  turnaround: "Global Ready",
                  specialty: "International Stores"
                },
                { 
                  id: "jankipuram", 
                  name: "Jankipuram", 
                  sector: "AKTU University Zone",
                  pincode: "226021",
                  x: 35, y: 14, 
                  color: "bg-teal-500", 
                  pulseColor: "border-teal-400", 
                  textColor: "text-teal-400",
                  clients: "18+ Startups",
                  turnaround: "Agile Cycles",
                  specialty: "React Apps"
                }
              ].map((spot) => {
                const isSelected = activeSpot === spot.id;
                return (
                  <div
                    key={spot.id}
                    onClick={() => setActiveSpot(isSelected ? null : spot.id)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-30 touch-manipulation"
                  >
                    {/* Blinking Pulse Rings */}
                    <div className={`absolute -inset-2.5 sm:-inset-3.5 rounded-full ${spot.pulseColor} border animate-ping opacity-80`} />
                    <div className={`absolute -inset-1 sm:-inset-1.5 rounded-full ${spot.color} opacity-50 animate-pulse`} />
                    
                    {/* Center Dot Beacon */}
                    <div className={`relative w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full ${spot.color} border-2 border-white shadow-xl flex items-center justify-center ${isSelected ? "scale-125 ring-2 ring-emerald-400" : ""}`}>
                      {spot.isHQ && <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-ping" />}
                    </div>

                    {/* Location Tag */}
                    <div className="absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 sm:px-2.5 py-0.5 rounded bg-slate-950/90 border border-slate-700/80 text-[8px] sm:text-[11px] font-black text-slate-100 shadow-xl backdrop-blur-md pointer-events-none">
                      {spot.name} {spot.isHQ && <span className="text-orange-400 font-black ml-0.5">★ HQ</span>}
                    </div>

                    {/* Interactive Mobile & Desktop Hover Tooltip */}
                    <div className={`transition-all duration-200 absolute bottom-6 sm:bottom-7 left-1/2 -translate-x-1/2 w-64 sm:w-80 bg-slate-900/95 border-2 border-slate-700 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl z-50 text-left backdrop-blur-xl ${isSelected ? "opacity-100 pointer-events-auto" : "opacity-0 group-hover:opacity-100 pointer-events-none sm:group-hover:pointer-events-auto"}`}>
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 mb-2">
                        <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider ${spot.textColor} flex items-center gap-1`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          PIN: {spot.pincode}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400">STATUS: LIVE</span>
                      </div>

                      <h4 className="font-black text-sm sm:text-base text-white tracking-tight">{spot.name}</h4>
                      <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium mb-2">{spot.sector}</p>

                      <div className="space-y-1 text-[11px] sm:text-xs bg-slate-950/60 p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-slate-800/80 font-medium mb-2.5">
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-500">Live Sites:</span>
                          <span className="font-bold text-white">{spot.clients}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-500">Delivery:</span>
                          <span className="font-bold text-emerald-400">{spot.turnaround}</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span className="text-slate-500">Tech:</span>
                          <span className="font-bold text-blue-400">{spot.specialty}</span>
                        </div>
                      </div>

                      <a 
                        href={`https://wa.me/919115439115?text=Hi%20TopRank%2C%20I%20need%20website%20development%20for%20my%20business%20in%20${encodeURIComponent(spot.name)}%20Lucknow.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-1.5 sm:py-2 text-center bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-95 text-white font-black text-[9px] sm:text-[10px] uppercase tracking-widest rounded-lg sm:rounded-xl transition-all shadow-md"
                      >
                        Connect for {spot.name} Project →
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* Map Bottom Helper Note */}
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-slate-950/90 border border-slate-800/80 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-mono text-slate-400 flex items-center gap-2 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span>Tap any pin for instant details</span>
              </div>

            </div>

          </div>

          {/* 2. DUAL-ROW INFINITE MARQUEE SCROLLING TICKER */}
          <div className="space-y-4 sm:space-y-6">
            
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                ⚡ Rapid 24-48h Project Delivery Across All Lucknow Neighborhoods
              </p>
            </div>

            {/* Marquee Row 1 (Left Scrolling) */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div className="flex gap-3 sm:gap-4 w-max animate-marquee hover:[animation-play-state:paused] py-1 sm:py-2">
                {[
                  { name: "Gomti Nagar", badge: "Headquarters (HQ)", desc: "Next.js 15 Web Dev & Local SEO Architecture", icon: "🏢" },
                  { name: "Hazratganj", badge: "Commercial Hub", desc: "Luxury E-Commerce & High-Converting Stores", icon: "🛍️" },
                  { name: "Vibhuti Khand", badge: "IT & Tech Park", desc: "SaaS Dashboards & Enterprise React Portals", icon: "💻" },
                  { name: "Aliganj", badge: "Education Zone", desc: "Coaching Portals & Student Admission Funnels", icon: "🎓" },
                  { name: "Indira Nagar", badge: "Business Hub", desc: "Fast-Loading Business Web Platforms", icon: "⚡" },
                  { name: "Shaheed Path", badge: "Real Estate", desc: "3D Virtual Property Showcase & Lead Capture", icon: "🏗️" },
                  { name: "Sushant Golf City", badge: "Townships", desc: "Enterprise Web Architecture & Portals", icon: "⛳" },
                  { name: "Faizabad Road", badge: "Automobile", desc: "Showroom Inventory & Customer CRM Sync", icon: "🚗" },
                  // Duplication for seamless continuous loop
                  { name: "Gomti Nagar", badge: "Headquarters (HQ)", desc: "Next.js 15 Web Dev & Local SEO Architecture", icon: "🏢" },
                  { name: "Hazratganj", badge: "Commercial Hub", desc: "Luxury E-Commerce & High-Converting Stores", icon: "🛍️" },
                  { name: "Vibhuti Khand", badge: "IT & Tech Park", desc: "SaaS Dashboards & Enterprise React Portals", icon: "💻" },
                  { name: "Aliganj", badge: "Education Zone", desc: "Coaching Portals & Student Admission Funnels", icon: "🎓" },
                  { name: "Indira Nagar", badge: "Business Hub", desc: "Fast-Loading Business Web Platforms", icon: "⚡" },
                  { name: "Shaheed Path", badge: "Real Estate", desc: "3D Virtual Property Showcase & Lead Capture", icon: "🏗️" },
                  { name: "Sushant Golf City", badge: "Townships", desc: "Enterprise Web Architecture & Portals", icon: "⛳" },
                  { name: "Faizabad Road", badge: "Automobile", desc: "Showroom Inventory & Customer CRM Sync", icon: "🚗" }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 w-60 sm:w-72 bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-blue-500/10 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="text-lg sm:text-xl">{item.icon}</span>
                      <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-black text-xs sm:text-sm text-white group-hover:text-blue-400 transition-colors">{item.name}</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1 line-clamp-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marquee Row 2 (Right Scrolling) */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div className="flex gap-3 sm:gap-4 w-max animate-marquee-reverse hover:[animation-play-state:paused] py-1 sm:py-2">
                {[
                  { name: "Mahanagar", badge: "Healthcare", desc: "Doctor Appointment & Multi-Specialty Portals", icon: "🏥" },
                  { name: "Ashiyana & LDA", badge: "Retail & Trade", desc: "Google Map 3-Pack Dominance & Citations", icon: "📍" },
                  { name: "Chowk & Old City", badge: "Zari & Chikan", desc: "International Multi-Currency Online Stores", icon: "🧵" },
                  { name: "Kapoorthala", badge: "Institutes", desc: "Student Registration & Course LMS Funnels", icon: "📚" },
                  { name: "Chinhat Industrial", badge: "Manufacturing", desc: "B2B Product Catalogs & Wholesale Engines", icon: "🏭" },
                  { name: "Janki Puram", badge: "EdTech & Labs", desc: "SaaS Dashboards & Custom Web Applications", icon: "🚀" },
                  { name: "Transport Nagar", badge: "Logistics", desc: "Fleet Management & Booking Platforms", icon: "🚚" },
                  { name: "Rajajipuram", badge: "Local Business", desc: "Zero-Latency Mobile Lead Conversion Sites", icon: "🎯" },
                  // Duplication for seamless loop
                  { name: "Mahanagar", badge: "Healthcare", desc: "Doctor Appointment & Multi-Specialty Portals", icon: "🏥" },
                  { name: "Ashiyana & LDA", badge: "Retail & Trade", desc: "Google Map 3-Pack Dominance & Citations", icon: "📍" },
                  { name: "Chowk & Old City", badge: "Zari & Chikan", desc: "International Multi-Currency Online Stores", icon: "🧵" },
                  { name: "Kapoorthala", badge: "Institutes", desc: "Student Registration & Course LMS Funnels", icon: "📚" },
                  { name: "Chinhat Industrial", badge: "Manufacturing", desc: "B2B Product Catalogs & Wholesale Engines", icon: "🏭" },
                  { name: "Janki Puram", badge: "EdTech & Labs", desc: "SaaS Dashboards & Custom Web Applications", icon: "🚀" },
                  { name: "Transport Nagar", badge: "Logistics", desc: "Fleet Management & Booking Platforms", icon: "🚚" },
                  { name: "Rajajipuram", badge: "Local Business", desc: "Zero-Latency Mobile Lead Conversion Sites", icon: "🎯" }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 w-60 sm:w-72 bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-emerald-500/10 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="text-lg sm:text-xl">{item.icon}</span>
                      <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-black text-xs sm:text-sm text-white group-hover:text-emerald-400 transition-colors">{item.name}</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium mt-1 line-clamp-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          12. FAQS
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
              Everything you need to know about developing a website for your business in Lucknow.
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
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-slate-600 font-medium text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 sm:pt-4">
                          <p>{faq.a}</p>
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

      {/* ─────────────────────────────────────────────────────────────
          13. RELATED SERVICES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2 sm:mb-3">
              Related Digital Growth Services in Lucknow
            </h2>
            <p className="text-slate-500 font-medium text-xs sm:text-sm sm:text-base px-2">
              Scale your entire digital ecosystem with our integrated marketing stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "SEO Services in Lucknow",
                desc: "Rank #1 on Google for high-intent business search terms across Lucknow and national markets.",
                href: "/services/seo"
              },
              {
                title: "Local SEO & Google Maps (GMB)",
                desc: "Dominate the Google Local 3-Pack and capture nearby customer calls.",
                href: "/services/local-seo"
              },
              {
                title: "Google Ads & PPC Management",
                desc: "Instant high-intent lead generation with ROI-focused search and display ad campaigns.",
                href: "/services/google-ads"
              },
              {
                title: "Social Media & Reels Marketing",
                desc: "Viral video production, Meta Ads, and brand building on Instagram and Facebook.",
                href: "/services/digital-marketing"
              }
            ].map((rel, idx) => (
              <Link 
                key={idx} 
                href={rel.href}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-black text-slate-900 text-sm sm:text-base mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mb-3 sm:mb-4">
                    {rel.desc}
                  </p>
                </div>
                <span className="text-xs font-black text-blue-600 flex items-center gap-1">
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          14. FINAL CTA & CONTACT FORM
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Col: Copy & Direct Contact Info */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block">
                Start Your Project Today
              </span>
              
              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-tight">
                Get Your Website Developed in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400">
                  Lucknow
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                Ready to launch a high-converting, sub-second Next.js or WordPress website? Fill out the form or connect directly with our senior development engineers.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4 border-t border-slate-800">
                <a 
                  href="tel:+919305030523" 
                  className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">Call Senior Strategist</p>
                    <p className="text-base sm:text-lg font-black text-white tracking-tight">+91 93050 30523</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919115439115?text=Hi%20TopRank%20Team%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20website%20development%20in%20Lucknow." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/30">
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">Instant WhatsApp Chat</p>
                    <p className="text-base sm:text-lg font-black text-white tracking-tight">+91 91154 39115</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Col: High-Converting Form */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-1 sm:mb-2">Request A Proposal</h3>
              <p className="text-slate-400 text-xs font-medium mb-4 sm:mb-6">Receive detailed milestone timelines and pricing within 24 hours.</p>

              {submitSuccess ? (
                <div className="p-6 sm:p-8 text-center bg-emerald-500/10 border border-emerald-500/30 rounded-xl sm:rounded-2xl">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 mx-auto mb-2.5 sm:mb-3" />
                  <h4 className="text-base sm:text-lg font-black text-white mb-1">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">We are redirecting you to our WhatsApp lead desk right now...</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-slate-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-slate-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                      >
                        <option value="₹18,000 - ₹25,000" className="bg-slate-900">₹18,000 - ₹25,000 (Starter)</option>
                        <option value="₹25,000 - ₹50,000" className="bg-slate-900">₹25,000 - ₹50,000 (Growth)</option>
                        <option value="₹50,000 - ₹1,00,000" className="bg-slate-900">₹50,000 - ₹1,00,000 (E-Commerce)</option>
                        <option value="₹1,00,000+" className="bg-slate-900">₹1,00,000+ (Custom App)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">Website Type Required</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Business Website Development" className="bg-slate-900">Business Website Development</option>
                      <option value="Corporate Website Development" className="bg-slate-900">Corporate Website Development</option>
                      <option value="E-Commerce Store (Shopify / WooCommerce)" className="bg-slate-900">E-Commerce Store (Shopify / WooCommerce)</option>
                      <option value="Custom Next.js / React Web Application" className="bg-slate-900">Custom Next.js / React Web Application</option>
                      <option value="WordPress Theme Development" className="bg-slate-900">WordPress Theme Development</option>
                      <option value="Website Redesign & Speed Optimization" className="bg-slate-900">Website Redesign & Speed Optimization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">Project Details (Optional)</label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your requirements or existing website URL..."
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-95 text-white font-black text-xs sm:text-xs uppercase tracking-wider sm:tracking-widest transition-all shadow-lg active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2 group/btn"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Submitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" /> Send Inquiry & Connect on WhatsApp <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[9px] sm:text-[10px] text-center text-slate-500 font-medium">
                    🔒 100% confidential proposal. Direct connect to Lucknow team within 24h.
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
