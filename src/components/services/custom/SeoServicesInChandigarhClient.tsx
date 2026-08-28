"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  TrendingUp,
  MapPin,
  Globe,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  Sparkles,
  Star,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  BarChart2,
  Target,
  Users,
  Zap,
  Layers,
  FileText,
  RefreshCw,
  HelpCircle,
  Building2,
  ShoppingCart,
  Send,
  Link2,
  FileCheck,
  LineChart,
  PieChart,
  Crosshair,
  BadgePercent,
  Check,
  Clock
} from "lucide-react";
import Link from "next/link";
import { usePhone } from "@/hooks/usePhone";
import { supabase } from "@/lib/supabase/client";
import { SeoTopicClusterSection } from "./SeoTopicClusterSection";

export function SeoServicesInChandigarhClient() {
  const phone = usePhone();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    website: "",
    package: "Growth SEO Package (₹10,000/mo)",
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
          service_requested: `SEO Services in Chandigarh - ${formData.package}`,
          message: `Website: ${formData.website} | Selected Plan: ${formData.package} | Notes: ${formData.message}`,
          city: "Chandigarh",
          status: "New",
        },
      ]);
    } catch (err) {
      console.error("Supabase lead insertion error:", err);
    }

    const text = `Hi TopRank Team, I want to inquire about SEO Services in Chandigarh.\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n🌐 *Website/Business:* ${formData.website || "Not provided"}\n📦 *Selected Package:* ${formData.package}\n📝 *Requirements:* ${formData.message || "Please provide free SEO audit and consultation for Chandigarh / Tricity."}`;
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
      q: "How much do SEO services in Chandigarh cost?",
      a: "SEO services in Chandigarh typically range from ₹6,000 to ₹12,000 per month depending on your target search keywords, competition level in Chandigarh & Tricity, and website scope. At TopRank Digital Service, our Starter Local SEO plan begins at ₹6,000/month, the Growth Business plan is ₹10,000/month, and the Enterprise & E-Commerce plan is ₹12,000/month with transparent reporting and zero hidden charges."
    },
    {
      q: "How fast can my business rank on Google in Chandigarh & Tricity?",
      a: "For local Google Maps 3-Pack and location-specific queries in Chandigarh, Mohali, and Panchkula, rank movements typically appear within 4 to 8 weeks. For competitive national commercial keywords or international immigration queries, significant 1st-page Google rankings and organic traffic scaling generally take 3 to 6 months of systematic optimization."
    },
    {
      q: "Why choose TopRank Digital Service for SEO in Chandigarh?",
      a: "TopRank Digital Service has ranked 450+ high-competition keywords on Google Page #1. With our dedicated local presence in Sector 34B Chandigarh & Mohali, we offer 100% white-hat Google-compliant strategies, bi-weekly live ranking reports, local Google Business Profile mastery across Chandigarh, Mohali & Panchkula, and a strict focus on generating verified business leads."
    },
    {
      q: "What makes Local SEO crucial for Chandigarh and Tricity businesses?",
      a: "Chandigarh is tightly interconnected with Mohali, Panchkula, and Zirakpur. Local SEO ensures your business ranks not just in your specific sector, but across the entire Tricity map pack when potential clients search 'near me', driving high-intent phone calls, direct inquiries, and office visits."
    },
    {
      q: "Do you offer SEO for Immigration, Study Visa & IELTS institutes in Chandigarh?",
      a: "Yes! Immigration consultants and IELTS/PTE institutes in Sector 17, Sector 34, and Mohali are among our top specialties. We target high-value student visa, PR, work permit, and IELTS coaching search queries with high conversion intent to deliver genuine student leads."
    },
    {
      q: "Will I get transparent rank tracking and monthly analytics reports?",
      a: "Yes! You receive 24/7 access to a live client dashboard along with detailed monthly performance reports detailing keyword position shifts, organic search impressions, Google Maps actions, clicks, and inbound conversion tracking."
    },
    {
      q: "Are there any long-term contract lock-ins?",
      a: "No. We offer flexible month-to-month contracts. We earn your partnership through tangible search results, though we recommend a minimum 3 to 6 months engagement to allow compounding organic authority to dominate your competitors."
    },
    {
      q: "Can SEO help my B2B or IT/SaaS company in Mohali & Chandigarh?",
      a: "Definitely. We engineer custom B2B and SaaS SEO architectures focusing on bottom-of-the-funnel commercial keywords, high-authority backlink acquisition, technical speed optimization, and international search visibility for clients targeting USA, UK, Canada, and Australia."
    }
  ];

  const packages = [
    {
      name: "Starter Local SEO",
      tagline: "Ideal for local clinics, retail shops & single-location service businesses in Chandigarh",
      price: "₹6,000",
      period: "per month",
      popular: false,
      features: [
        "Up to 15 Target Keywords",
        "Google Business Profile (GMB) Setup & Optimization",
        "Local Map Pack 3-Pack Optimization in Chandigarh",
        "On-Page SEO (Titles, Meta, Headers, Image Alt)",
        "Technical SEO & Speed Fixes",
        "20+ High-Authority Local Tricity Citations",
        "Monthly Ranking & Traffic Report",
        "Dedicated SEO Specialist Support"
      ],
      cta: "Choose Starter Plan"
    },
    {
      name: "Growth Business SEO",
      tagline: "Most popular for immigration consultants, real estate, clinics & scaling brands",
      price: "₹10,000",
      period: "per month",
      popular: true,
      features: [
        "Up to 35 Target Keywords",
        "Comprehensive Website SEO & Tricity Competitor Audit",
        "Advanced On-Page & Schema Markup Integration",
        "2 High-Quality Local Authority Blog Posts/Month",
        "High-DA Link Building & Guest Post Outreach",
        "Google Business Profile Weekly Optimization & Posts",
        "Conversion Rate Optimization (CRO) Consulting",
        "Bi-Weekly Live Dashboard & Keyword Tracking",
        "Priority Phone & WhatsApp Support"
      ],
      cta: "Choose Growth Plan"
    },
    {
      name: "Enterprise & E-commerce SEO",
      tagline: "Engineered for large enterprises, multi-location franchises, IT & online stores",
      price: "₹12,000",
      period: "per month",
      popular: false,
      features: [
        "60+ Target Keywords (Tricity, State & National/Global)",
        "Full Technical, Speed & Core Web Vitals Optimization",
        "E-Commerce Product & Category Page SEO",
        "4 In-Depth Authority Articles & Pillar Pages/Month",
        "Premium Editorial Backlinks & PR Link Outreach",
        "Multi-Location GMB & Local Directory Domination",
        "Heatmap Tracking & Lead Funnel Optimization",
        "Weekly Strategy Reviews & Dedicated Senior SEO Lead",
        "24/7 Priority Emergency Support"
      ],
      cta: "Choose Enterprise Plan"
    }
  ];

  const chandigarhAreas = [
    { name: "Sector 17 & Sector 22", desc: "Commercial high streets, corporate offices, fashion retail & financial institutions." },
    { name: "Sector 34 & Sector 35", desc: "Prime hub for immigration consultants, coaching institutes, hotels & dining venues." },
    { name: "Chandigarh IT Park (Kishangarh)", desc: "Tech corporations, IT software export units, SaaS companies & digital enterprises." },
    { name: "Mohali Phase 7, 8 & 8B", desc: "IT corridor, Industrial Area, tech startups, media houses & corporate offices." },
    { name: "Industrial Area Phase 1 & 2", desc: "Elante Mall corridor, manufacturing units, automobile showrooms & wholesalers." },
    { name: "Panchkula Sector 8, 9 & 20", desc: "High-income residential sectors, healthcare facilities, specialty clinics & boutiques." },
    { name: "Zirakpur (VIP Road / PR7)", desc: "Fast-growing real estate hub, retail complexes, luxury banquet halls & home services." },
    { name: "Kharar & New Chandigarh", desc: "Emerging educational belt, upcoming residential townships & local commercial markets." }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SCHEMA MARKUP (Structured Data for Chandigarh SEO)
      ───────────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "TopRank Digital Service - SEO Services in Chandigarh",
            "image": "https://www.toprankindia.com/icon.jpg",
            "telephone": ["+91 91154 39115", "+91 98886 16677"],
            "url": "https://www.toprankindia.com/seo-services-in-chandigarh",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shop No 8, Sector 34B",
              "addressLocality": "Chandigarh",
              "addressRegion": "Chandigarh",
              "postalCode": "160034",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 30.7210708,
              "longitude": 76.7708345
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
              "Sector 17 Chandigarh", "Sector 34 Chandigarh", "Sector 35 Chandigarh", 
              "IT Park Chandigarh", "Mohali", "Panchkula", "Zirakpur", 
              "Kharar", "Chandigarh Tricity", "Punjab", "Haryana"
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
            "serviceType": "Search Engine Optimization (SEO)",
            "provider": {
              "@type": "LocalBusiness",
              "name": "TopRank Digital Service"
            },
            "name": "SEO Services in Chandigarh",
            "description": "Top-rated SEO services in Chandigarh, Mohali & Panchkula. Rank #1 on Google, dominate Google Maps 3-Pack, boost organic traffic, and generate high-intent customer leads across the Tricity.",
            "areaServed": {
              "@type": "City",
              "name": "Chandigarh"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SEO Service Packages in Chandigarh",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Starter Local SEO in Chandigarh"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Growth Business SEO in Chandigarh"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise & E-Commerce SEO in Chandigarh"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "SEO Services in Chandigarh",
                "item": "https://www.toprankindia.com/seo-services-in-chandigarh"
              }
            ]
          })
        }}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (H1: SEO Services in Chandigarh)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-blue-600/20 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-indigo-600/20 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Breadcrumb */}
            <nav className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mb-6 backdrop-blur-md">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-blue-400">SEO Services in Chandigarh</span>
            </nav>

            {/* H1 Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] sm:leading-[1.08] mb-5 sm:mb-6"
            >
              SEO Services in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Chandigarh
              </span>
            </motion.h1>

            {/* Value Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-xl md:text-2xl text-slate-300 font-normal leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto"
            >
              Rank #1 on Google, dominate Tricity search results across Chandigarh, Mohali & Panchkula, and generate high-intent customer leads with data-driven <strong className="text-white font-semibold">SEO services in Chandigarh</strong> by TopRank Digital Service.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16"
            >
              <a
                href="#audit-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-blue-600/30 hover:scale-[1.02]"
              >
                <Sparkles className="w-5 h-5" />
                Claim Free Tricity SEO Audit
              </a>
              <a
                href={`https://wa.me/919115439115?text=${encodeURIComponent("Hi TopRank, I want to discuss SEO services in Chandigarh for my website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-emerald-600/30 hover:scale-[1.02]"
              >
                <MessageSquare className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Key Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-blue-400">450+</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Keywords on Google Page 1</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">98%</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Tricity Map Pack Success</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">5.4x</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Average Inbound Lead ROI</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-indigo-400">120+</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Active Tricity Clients</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. H2: Why Businesses in Chandigarh Need SEO
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Target className="w-3.5 h-3.5" />
              Tricity Market Dynamics
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Why Businesses in Chandigarh Need SEO
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Chandigarh, Mohali, and Panchkula form one of North India’s wealthiest, tech-driven commercial ecosystems. Without strategic search optimization, your competitors win the high-intent inquiries looking for your services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">High Buyer Intent Search</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Over 89% of consumers and corporate buyers in Chandigarh search on Google before choosing an immigration consultant, doctor, builder, or IT vendor.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <BadgePercent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Beat Costly Ad Burn</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tricity Google Ad clicks in competitive niches like immigration or real estate cost ₹250–₹700 per click. Organic SEO delivers steady inbound leads without continuous ad spend.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tricity Map Pack Dominance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Appearing in the top 3 spots of Google Maps captures over 70% of all local phone calls, walk-in visits, and consultation bookings across Chandigarh, Mohali & Panchkula.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Industry Authority & Trust</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ranking #1 on Google establishes instant trust with clients in Punjab, Haryana, and Himachal Pradesh seeking top-tier services in the capital city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. H2: Our SEO Services in Chandigarh (With 7 H3 Sub-Services)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Full-Spectrum Search Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Our SEO Services in Chandigarh
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              We deliver custom, data-backed search engine optimization strategies tailored for Chandigarh and Tricity businesses to maximize Google rankings and revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* H3: Local SEO */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-md shadow-blue-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Local SEO</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Dominate Google Maps 3-Pack and geo-targeted search results across Chandigarh, Mohali, Panchkula, and Zirakpur. We optimize your Google Business Profile (GMB), build verified citations, and drive direct calls.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    Google Business Profile (GMB) Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    NAP Consistency Across Tricity Directories
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    Sector-Specific Geo-Targeted Landing Pages
                  </li>
                </ul>
              </div>
              <a href="#audit-form" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700">
                Explore Local SEO <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* H3: On-Page SEO */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center mb-5 shadow-md shadow-sky-500/20">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">On-Page SEO</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Optimize every element of your website so search engine algorithms immediately recognize your relevance for competitive search terms in Chandigarh and across India.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    Meta Titles, Descriptions & H1-H6 Tag Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    Semantic Keyword Density & LSI Term Clustering
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    Internal Linking Silos & Content Hierarchy
                  </li>
                </ul>
              </div>
              <a href="#audit-form" className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700">
                Explore On-Page SEO <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* H3: Technical SEO */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-5 shadow-md shadow-indigo-500/20">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Technical SEO</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Fix core website architecture, mobile responsiveness, server response latency, and indexing roadblocks so Google can crawl and index your site without friction.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    Core Web Vitals & PageSpeed 90+ Score Tuning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    XML Sitemaps, Robots.txt & Canonical Tag Audits
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    JSON-LD Schema Markup (LocalBusiness & Service)
                  </li>
                </ul>
              </div>
              <a href="#audit-form" className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700">
                Explore Technical SEO <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* H3: Keyword Research */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-5 shadow-md shadow-emerald-500/20">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Keyword Research</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Discover high-converting, commercial search queries typed by customers in Chandigarh, Punjab, Haryana, and global clients searching for Tricity services.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    High-Intent Transactional Keyword Discovery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    Tricity Competitor Keyword Gap Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    Geo-Modified Long-Tail Search Mapping
                  </li>
                </ul>
              </div>
              <a href="#audit-form" className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700">
                Explore Keyword Research <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* H3: Content SEO */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center mb-5 shadow-md shadow-amber-500/20">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Content SEO</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Publish authoritative, persuasive, and informative content that ranks on Google and convinces visitors in Chandigarh to become paying clients.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    E-E-A-T Compliant Blog & Article Production
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Pillar-Cluster Topic Authority Structuring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Conversion-Focused Landing Page Copywriting
                  </li>
                </ul>
              </div>
              <a href="#audit-form" className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 hover:text-amber-700">
                Explore Content SEO <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* H3: Link Building */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-5 shadow-md shadow-purple-500/20">
                  <Link2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Link Building</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  Acquire 100% white-hat, high-Domain Authority (DA) contextual backlinks from trusted regional publications, business portals, and industry authorities.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    High DA/DR Editorial Backlink Outreach
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    Regional PR & News Media Coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    Zero Spam Links or Toxic PBN Guarantee
                  </li>
                </ul>
              </div>
              <a href="#audit-form" className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 hover:text-purple-700">
                Explore Link Building <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* H3: E-commerce SEO */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-pink-600 text-white flex items-center justify-center mb-5 shadow-md shadow-pink-500/20">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">E-commerce SEO</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Scale online sales, category rankings, and product discoverability across Shopify, WooCommerce, and custom Next.js stores in Chandigarh and all-India. We optimize product schema markup, variant canonical tags, and high-intent buyer searches.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200">
                  <div className="text-sm font-bold text-slate-900 mb-3">Key Deliverables:</div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                      Product Schema & Rich Snippets Setup
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                      Faceted Navigation & Filter SEO Handling
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-600 flex-shrink-0" />
                      High-Volume Product Keyword Rank Tracking
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. H2: Local SEO for Businesses in Chandigarh
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Tricity Cross-Border Search Dominance
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Local SEO for Businesses in Chandigarh
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Win the Google Maps 3-Pack and appear at the very top when nearby customers search for your services across Chandigarh, Mohali, Panchkula, and Zirakpur.
            </p>
          </div>

          {/* Localized Strategy Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-7 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="text-blue-400 font-black text-xl mb-2">01. Google Maps 3-Pack Rank</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                We optimize your GMB profile categories, geotagged real photos, service menus, and primary business descriptions to capture the top 3 map positions across the Tricity.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="text-emerald-400 font-black text-xl mb-2">02. NAP Citation Accuracy</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                We establish consistent Name, Address, and Phone number listings across 50+ tier-1 business directories like Justdial, IndiaMART, Sulekha, and Google Maps in Chandigarh.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="text-purple-400 font-black text-xl mb-2">03. Review Generation & Trust</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                We implement automated review generation workflows to gain 5-star customer ratings, boosting social proof and elevating your local search algorithm ranking.
              </p>
            </div>
          </div>

          {/* Area Spotlight Grid */}
          <div className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700/80">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Targeted Local SEO Coverage Across Prime Chandigarh & Tricity Zones
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {chandigarhAreas.map((area, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-2 font-bold text-blue-300 text-base mb-1.5">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    {area.name}
                  </div>
                  <div className="text-xs text-slate-400 leading-normal">{area.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. H2: Our SEO Process (With 5 H3 Steps)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Transparent 5-Phase Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Our SEO Process
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              A scientific, milestone-driven framework engineered to deliver transparent results, rapid keyword traction, and compounding organic ROI for your business in Chandigarh.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 -translate-x-1/2" />

            <div className="space-y-8 sm:space-y-12">
              
              {/* Step 1: SEO Audit */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3">
                    <Clock className="w-3.5 h-3.5" /> Phase 1: Days 1 – 7
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">SEO Audit</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                    We perform an exhaustive 100+ checkpoint technical, on-page, and backlink audit. We unearth hidden crawl errors, mobile usability flaws, slow loading speeds, indexing roadblocks, and Google algorithm penalty vulnerabilities.
                  </p>
                  <div className="flex flex-wrap lg:justify-end gap-2 text-xs font-semibold text-slate-700">
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Technical Crawl Analysis</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Core Web Vitals Check</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Backlink Toxicity Scan</span>
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-blue-100 shadow-lg shadow-blue-500/5 relative">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-blue-500/20">
                        01
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-blue-600">Deliverables</div>
                        <div className="text-sm font-black text-slate-900">Website Health Baseline</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">100% In-Depth</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Comprehensive Technical Report:</strong> 40+ page diagnostic covering indexation, crawl errors & 404s.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Core Web Vitals Analysis:</strong> LCP, FID, and CLS performance scoring for mobile & desktop.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span><strong>GMB & Local Audit:</strong> Google Maps listing status, NAP consistency & Tricity citation score.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2: Keyword & Competitor Research */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold mb-3">
                    <Clock className="w-3.5 h-3.5" /> Phase 2: Days 8 – 14
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Keyword & Competitor Research</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                    We map out high-volume, transactional keywords searched by customers across Chandigarh, Mohali, and Panchkula. We reverse-engineer your top 5 local competitors to identify lucrative content gaps and backlink opportunities.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Search Intent Matrix</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Competitor Backlink Spy</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Tricity Geo-Queries</span>
                  </div>
                </div>

                <div className="lg:order-1 bg-white p-6 sm:p-7 rounded-2xl border border-sky-100 shadow-lg shadow-sky-500/5 relative">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-sky-500/20">
                        02
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-sky-600">Deliverables</div>
                        <div className="text-sm font-black text-slate-900">Keyword Master Roadmap</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold">High Intent</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Target Keyword Matrix:</strong> Primary, secondary & long-tail Chandigarh keywords grouped by intent.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Competitor Gap Blueprint:</strong> Exact keyword phrases driving revenue to your top 3 Tricity rivals.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span><strong>URL Mapping Sheet:</strong> Strategic assignment of target search queries to landing pages.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3: Website Optimization */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold mb-3">
                    <Clock className="w-3.5 h-3.5" /> Phase 3: Days 15 – 30
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Website Optimization</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                    Our technical and on-page specialists optimize your title tags, meta descriptions, headings (H1-H6), content structure, Schema.org JSON-LD code, image compression, and URL hierarchy to meet modern Google ranking criteria.
                  </p>
                  <div className="flex flex-wrap lg:justify-end gap-2 text-xs font-semibold text-slate-700">
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Schema.org Structured Data</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Speed & Caching Fixes</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Meta Tag Tuning</span>
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-indigo-100 shadow-lg shadow-indigo-500/5 relative">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-indigo-500/20">
                        03
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">Deliverables</div>
                        <div className="text-sm font-black text-slate-900">100% On-Page & Technical Execution</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">Zero Latency</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span><strong>On-Page Overhaul:</strong> Optimized titles, descriptions, H1s, and internal linking silos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Schema Markup Implementation:</strong> LocalBusiness, FAQ, Service, and Breadcrumb JSON-LD codes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Speed & Mobile Optimization:</strong> Next-gen WebP image conversions, CSS/JS minification & fast TTFB.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 4: Content & Link Building */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-3">
                    <Clock className="w-3.5 h-3.5" /> Phase 4: Month 2 & Ongoing
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Content & Link Building</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                    We create authoritative localized content and execute strategic outreach campaigns to earn high-DA contextual backlinks and local directory citations, establishing unassailable search authority in Chandigarh.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">High-DA Editorial Backlinks</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Localized Blog Posts</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Verified Local Citations</span>
                  </div>
                </div>

                <div className="lg:order-1 bg-white p-6 sm:p-7 rounded-2xl border border-purple-100 shadow-lg shadow-purple-500/5 relative">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-purple-500/20">
                        04
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-purple-600">Deliverables</div>
                        <div className="text-sm font-black text-slate-900">Authority Content & Link Signals</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold">100% White-Hat</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>High-DA Contextual Backlinks:</strong> Acquired via manual guest outreach on reputable niche publications.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Local Citations & Directory Listings:</strong> 25+ verified Tricity business profiles with 100% NAP consistency.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>E-E-A-T Authority Articles:</strong> Monthly localized blog clusters answering buyer questions in Chandigarh.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5: Performance Tracking */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-3">
                    <Clock className="w-3.5 h-3.5" /> Phase 5: Continuous Monitoring
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Performance Tracking</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                    We continuously track daily keyword ranking shifts, Google Search Console clicks, phone call inquiries, and organic conversions, refining strategies to maximize monthly revenue and ROI.
                  </p>
                  <div className="flex flex-wrap lg:justify-end gap-2 text-xs font-semibold text-slate-700">
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Bi-Weekly Live Dashboards</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Google Analytics 4 & GSC</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">ROI & Lead Tracking</span>
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-emerald-100 shadow-lg shadow-emerald-500/5 relative">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-emerald-500/20">
                        05
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">Deliverables</div>
                        <div className="text-sm font-black text-slate-900">Transparent Monthly Reports</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">Live ROI</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>24/7 Client Dashboard Access:</strong> Live tracking for all target keywords across Chandigarh & India.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Monthly Performance Reviews:</strong> Clear organic traffic, impressions, click-through & lead conversion data.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Quarterly Strategy Adjustments:</strong> Continuous pivot to capture newly trending keywords in your niche.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. H2: Industries We Serve in Chandigarh
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              Specialized Industry Experience
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Industries We Serve in Chandigarh
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              We engineer custom, niche-specific SEO campaigns tailored to the distinct audience search habits and competitive landscapes of diverse industries across Chandigarh, Mohali & Panchkula.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Immigration & Visa Consultants",
                desc: "Rank #1 for study visa, PR visa, work permit, and tourist visa keywords across Sector 17, Sector 34 & Mohali.",
                icon: Globe
              },
              {
                title: "IELTS & PTE Institutes",
                desc: "Drive massive student batch enrollments for coaching institutes, English language labs & competitive test prep in Chandigarh.",
                icon: Award
              },
              {
                title: "IT & SaaS Companies",
                desc: "Capture international client contracts in the US, UK, Canada & Australia for software development & SaaS firms in Mohali & IT Park.",
                icon: Zap
              },
              {
                title: "Real Estate & Builders",
                desc: "Generate high-intent buyer inquiries for luxury apartments, commercial showrooms & plots in Zirakpur, Mohali & New Chandigarh.",
                icon: Building2
              },
              {
                title: "Healthcare & Clinics",
                desc: "Boost patient appointments for multi-specialty hospitals, IVF centers, dental clinics & cosmetic doctors in Chandigarh & Panchkula.",
                icon: ShieldCheck
              },
              {
                title: "Hospitality & Dining",
                desc: "Drive table reservations, private event bookings, banquet halls & tourist footfalls across Sector 26, Sector 35 & Elante zone.",
                icon: Star
              },
              {
                title: "B2B Manufacturers",
                desc: "Generate wholesale bulk orders and distribution inquiries for industrial units in Industrial Area Phase 1 & 2.",
                icon: Layers
              },
              {
                title: "Legal & Corporate Advisors",
                desc: "Gain high-value corporate retainers for High Court advocates, chartered accountants, GST & financial consultants in Chandigarh.",
                icon: FileCheck
              }
            ].map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{ind.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. H2: Why Choose TopRank Digital Service?
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              Tricity Growth Partners
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Why Choose TopRank Digital Service?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              We are not just another digital marketing vendor. We are your dedicated organic search partners in Chandigarh, committed to verifiable search rankings, transparent reporting, and real business revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">100% White-Hat SEO</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We strictly adhere to Google Search Essentials and Webmaster Guidelines. No black-hat shortcuts, no automated spam links, and zero penalty risks for your website.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Local Chandigarh & Mohali Hub</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Branch office in Sector 34B Chandigarh & Tech operations in Mohali. You can meet our SEO specialists in person, discuss quarterly roadmaps, and get localized support.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparent Live Dashboards</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Access a 24/7 client portal tracking keyword ranks, organic traffic, leads generated, and completed deliverables with zero technical jargon.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-5">
                <Crosshair className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ROI-Driven Approach</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We optimize for high-converting commercial intent keywords that translate directly into phone calls, WhatsApp leads, and paying clients.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dedicated SEO Account Lead</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                You get a single dedicated point of contact who knows your business, answers your calls instantly, and proactively optimizes your search presence.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-5">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Lock-In Contracts</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We believe in earning your business month after month with real rankings. Flexible, transparent engagement terms with complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. H2: SEO Results & Case Studies
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <BarChart2 className="w-3.5 h-3.5" />
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              SEO Results & Case Studies
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              See how our SEO services in Chandigarh helped local businesses and consultants scale organic search traffic, dominate competitor rankings, and achieve multi-fold lead increases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="p-7">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Immigration & Visa • Sector 34 Chandigarh</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Canada & UK Study Visa Consultancy</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Targeted high-intent search queries like "Canada student visa consultant in Chandigarh" and "best IELTS coaching Sector 34" with local SEO and GMB optimization.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-2">
                  <div>
                    <div className="text-2xl font-black text-blue-600">+480%</div>
                    <div className="text-xs text-slate-500 font-medium">Student Inquiries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-emerald-600">#1 Spot</div>
                    <div className="text-xs text-slate-500 font-medium">24 High-Intent Terms</div>
                  </div>
                </div>
              </div>
              <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                Timeframe: 4 Months of SEO Execution
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="p-7">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-2">IT & Software • Mohali Phase 8B</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Enterprise Software & SaaS Agency</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Executed technical SEO architecture and global editorial link building to rank for competitive international keywords across USA and UK search markets.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-2">
                  <div>
                    <div className="text-2xl font-black text-purple-600">+620%</div>
                    <div className="text-xs text-slate-500 font-medium">Global B2B Clicks</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-emerald-600">Top 3</div>
                    <div className="text-xs text-slate-500 font-medium">35+ USA/UK Terms</div>
                  </div>
                </div>
              </div>
              <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                Timeframe: 6 Months of SEO Execution
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="p-7">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">Real Estate • Zirakpur / Chandigarh</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Luxury Residential & Commercial Projects</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Optimized local landing pages and GMB profiles for high-value phrases like "luxury flats in Zirakpur" and "commercial property near Chandigarh airport".
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-2">
                  <div>
                    <div className="text-2xl font-black text-emerald-600">5.2x</div>
                    <div className="text-xs text-slate-500 font-medium">Verified Buyer Leads</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-600">+530%</div>
                    <div className="text-xs text-slate-500 font-medium">Search Impressions</div>
                  </div>
                </div>
              </div>
              <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                Timeframe: 5 Months of SEO Execution
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. H2: SEO Packages (Transparent Pricing Tiers)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <BadgePercent className="w-3.5 h-3.5" />
              Transparent & ROI-Focused
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              SEO Packages
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Choose the perfect SEO package for your business scale in Chandigarh & the Tricity. Fixed transparent pricing, 100% white-hat execution, and zero hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular 
                    ? "bg-slate-900 text-white shadow-2xl ring-2 ring-blue-500 scale-[1.02]" 
                    : "bg-slate-50 text-slate-900 border border-slate-200 hover:shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-black uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className={`text-2xl font-black mb-2 ${pkg.popular ? "text-white" : "text-slate-900"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs sm:text-sm mb-6 ${pkg.popular ? "text-slate-300" : "text-slate-600"}`}>
                    {pkg.tagline}
                  </p>
                  
                  <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-slate-200/40">
                    <span className={`text-4xl sm:text-5xl font-black ${pkg.popular ? "text-blue-400" : "text-slate-900"}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-sm font-medium ${pkg.popular ? "text-slate-400" : "text-slate-500"}`}>
                      /{pkg.period}
                    </span>
                  </div>

                  <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${pkg.popular ? "text-slate-300" : "text-slate-700"}`}>
                    Package Inclusions:
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-blue-400" : "text-emerald-600"}`} />
                        <span className={pkg.popular ? "text-slate-200" : "text-slate-700"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#audit-form"
                  onClick={() => setFormData(prev => ({ ...prev, package: `${pkg.name} (${pkg.price}/mo)` }))}
                  className={`w-full py-4 rounded-xl font-bold text-center text-sm transition-all duration-200 ${
                    pkg.popular
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-blue-50 border border-blue-200 text-center max-w-2xl mx-auto">
            <h3 className="text-base font-bold text-blue-950 mb-1">Need a Customized SEO Strategy in Chandigarh?</h3>
            <p className="text-xs sm:text-sm text-blue-800 mb-4">
              Have multi-city Tricity target areas, international client export goals, or enterprise software platforms? We design bespoke SEO campaigns tailored to your exact roadmap.
            </p>
            <a
              href={`https://wa.me/919115439115?text=${encodeURIComponent("Hi TopRank, I need a custom SEO quote for my business in Chandigarh.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 underline"
            >
              Request Custom Enterprise SEO Proposal <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TOPICAL CLUSTER & RESEARCH GUIDES (Internal & External Linking)
      ───────────────────────────────────────────────────────────── */}
      <SeoTopicClusterSection currentCity="Chandigarh" />

      {/* ─────────────────────────────────────────────────────────────
          10. H2: Frequently Asked Questions
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              Clear Answers
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Everything you need to know about our SEO services in Chandigarh, ranking timelines, pricing, and execution methodology.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left font-bold text-slate-900 text-base sm:text-lg flex justify-between items-center gap-4 hover:text-blue-600 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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

      {/* ─────────────────────────────────────────────────────────────
          11. H2: Get Started With SEO Services in Chandigarh (Conversion Form)
      ───────────────────────────────────────────────────────────── */}
      <section id="audit-form" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side Pitch */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Free 30-Minute Tricity SEO Strategy Session
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                Get Started With SEO Services in Chandigarh
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Ready to dominate Page 1 of Google and outrank your local competitors across Chandigarh, Mohali & Panchkula? Request a free comprehensive SEO audit of your website or schedule an in-person consultation at our Sector 34B office.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-slate-200 text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>100% Confidential Website Health & Keyword Gap Report</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-full bg-emerald-600/30 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Actionable Roadmap to Capture Tricity Google Maps 3-Pack</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-full bg-purple-600/30 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>Transparent Fixed Price Quote with Zero Lock-In Obligations</span>
                </div>
              </div>

              {/* Direct Office & Call Info */}
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Chandigarh Branch Office</div>
                <div className="text-sm font-semibold text-white mb-4">
                  Shop No 8, Sector 34B, Chandigarh, 160034
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-bold">
                  <a href="tel:+919115439115" className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300">
                    <Phone className="w-3.5 h-3.5" /> +91 91154 39115
                  </a>
                  <a href="tel:+919888616677" className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300">
                    <Phone className="w-3.5 h-3.5" /> +91 98886 16677
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side Instant Lead Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 sm:p-10 text-slate-900 shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Claim Your Free SEO Audit</h3>
                <p className="text-sm text-slate-600 mb-6">Fill in your details below and our Chandigarh SEO lead will contact you within 30 minutes.</p>

                {submitSuccess && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    Thank you! Your request has been dispatched. Opening WhatsApp for direct connection...
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gurpreet Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Website URL / Business
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. yourbusiness.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Target Package / Requirement
                    </label>
                    <select
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Starter Local SEO (₹6,000/mo)">Starter Local SEO (₹6,000/mo)</option>
                      <option value="Growth SEO Package (₹10,000/mo)">Growth SEO Package (₹10,000/mo)</option>
                      <option value="Enterprise & E-commerce SEO (₹12,000/mo)">Enterprise & E-commerce SEO (₹12,000/mo)</option>
                      <option value="Custom Local SEO & GMB Audit">Custom Local SEO & GMB Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Specific Goals / Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your target keywords, competitors, or ranking challenges in Chandigarh / Tricity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        Analyzing Website & Preparing Audit...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Get Free SEO Audit & Quote
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
