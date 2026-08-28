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

export function SeoServicesInLucknowClient() {
  const phone = usePhone();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<string>("local");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    website: "",
    package: "Growth SEO Package",
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
          service_requested: `SEO Services in Lucknow - ${formData.package}`,
          message: `Website: ${formData.website} | Selected Plan: ${formData.package} | Notes: ${formData.message}`,
          city: "Lucknow",
          status: "New",
        },
      ]);
    } catch (err) {
      console.error("Supabase lead insertion error:", err);
    }

    const text = `Hi TopRank Team, I want to inquire about SEO Services in Lucknow.\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n🌐 *Website/Business:* ${formData.website || "Not provided"}\n📦 *Selected Package:* ${formData.package}\n📝 *Requirements:* ${formData.message || "Please provide free SEO audit and consultation."}`;
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
      q: "How much do SEO services in Lucknow cost?",
      a: "SEO services in Lucknow typically range from ₹6,000 to ₹12,000 per month depending on your business goals, target keywords, market competition, and website size. At TopRank Digital Service, our Starter Local SEO package starts at ₹6,000/month, our Growth Business plan is ₹10,000/month, and our Enterprise & E-Commerce SEO plan is ₹12,000/month with 100% transparent deliverables and zero hidden fees."
    },
    {
      q: "How long does it take to see rank results on Google with SEO in Lucknow?",
      a: "For local Google Maps 3-Pack and low-to-medium competition local search queries in Lucknow, initial keyword rank movements and lead improvements usually appear within 4 to 8 weeks. For competitive commercial keywords and high-volume national search terms, significant 1st-page Google rankings and sustained organic traffic growth typically take 3 to 6 months of systematic on-page, technical, and link-building optimization."
    },
    {
      q: "Why should I choose TopRank Digital Service as my SEO company in Lucknow?",
      a: "TopRank Digital Service is a premier SEO agency in Lucknow with a proven track record of ranking 450+ keywords on Google Page #1. We offer white-hat ethical SEO strategies, dedicated account managers, bi-weekly live ranking reports, local Google Business Profile (GMB) mastery across Gomti Nagar, Hazratganj, and Aliganj, and transparent ROI tracking focused on qualified inbound leads."
    },
    {
      q: "What is the difference between Local SEO and Standard SEO?",
      a: "Local SEO specifically targets geographic searches within Lucknow (e.g., 'best dental clinic in Gomti Nagar' or 'interior designer in Hazratganj') by optimizing your Google Business Profile (GMB), local map pack listings, NAP citations, and localized landing pages. Standard SEO focuses on broader statewide or nationwide keyword rankings for digital products, e-commerce stores, or SaaS platforms without strict geographic filters."
    },
    {
      q: "Do you offer guaranteed #1 rankings on Google?",
      a: "No legitimate, ethical SEO agency can guarantee an absolute #1 spot because Google's algorithm uses over 200 dynamic ranking factors and undergoes regular core updates. However, TopRank guarantees 100% white-hat Google-compliant execution, measurable keyword position improvements on Page 1, consistent growth in organic traffic, and targeted business lead generation."
    },
    {
      q: "Will I receive regular SEO ranking and performance reports?",
      a: "Yes! Every client receives an interactive monthly performance dashboard alongside bi-weekly progress updates. Our reports clearly detail keyword ranking movements, organic website visits, impressions, click-through rates (CTR), Google Search Console data, conversion metrics, and completed on-page and backlink tasks."
    },
    {
      q: "Do I need to sign a long-term lock-in contract?",
      a: "No. We believe in earning your trust every month through measurable ranking results and transparent ROI. We operate on flexible month-to-month contracts with no lock-in traps, though we recommend a minimum 3 to 6-month commitment to achieve compounding organic traffic momentum."
    },
    {
      q: "Can SEO help my local Lucknow shop or service business get more phone calls and visits?",
      a: "Absolutely! Over 86% of consumers in Lucknow search on Google and Google Maps before visiting a local store or booking a service. With our targeted Local SEO and GMB optimization, your business appears directly in front of customers searching 'near me' with click-to-call buttons and instant driving directions."
    }
  ];

  const packages = [
    {
      name: "Starter Local SEO",
      tagline: "Best for local shops, clinics & single-location service businesses in Lucknow",
      price: "₹6,000",
      period: "per month",
      popular: false,
      features: [
        "Up to 15 Target Keywords",
        "Google Business Profile (GMB) Setup & Optimization",
        "Local Map Pack 3-Pack Optimization",
        "On-Page SEO (Title, Meta, Headers, Alt Tags)",
        "Technical SEO & Speed Fixes",
        "20+ High-Authority Local Citations in Lucknow",
        "Monthly Ranking & Traffic Report",
        "Dedicated SEO Specialist Support"
      ],
      cta: "Choose Starter Plan"
    },
    {
      name: "Growth Business SEO",
      tagline: "Most popular for scaling companies, real estate, schools & B2B brands",
      price: "₹10,000",
      period: "per month",
      popular: true,
      features: [
        "Up to 35 Target Keywords",
        "Comprehensive Website SEO & Competitor Audit",
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
      tagline: "Designed for large enterprises, multi-location franchises & online stores",
      price: "₹12,000",
      period: "per month",
      popular: false,
      features: [
        "60+ Target Keywords (Local, State & National)",
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

  const lucknowAreas = [
    { name: "Gomti Nagar", desc: "Vibhuti Khand, Patrakarpuram, Gomti Nagar Extension & Shaheed Path commercial zones." },
    { name: "Hazratganj", desc: "Central business district, retail high-streets, corporate offices & legacy marketplaces." },
    { name: "Aliganj & Kapoorthala", desc: "Dense residential hubs, coaching centers, healthcare facilities & retail centers." },
    { name: "Indira Nagar", desc: "Munshi Pulia, Bhootnath market, lifestyle clinics, showrooms & local services." },
    { name: "Sushant Golf City", desc: "High-growth township, Medanta hospital zone, modern retail & real estate corridor." },
    { name: "Mahanagar & Nishatganj", desc: "Prime commercial complexes, educational institutions & local specialty businesses." },
    { name: "Ashiyana & LDA Colony", desc: "South Lucknow residential zones, medical practices, gyms & local commercial complexes." },
    { name: "Chowk & Old Lucknow", desc: "Historic manufacturing hubs, wholesale textiles, jewelry & traditional dining brands." }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          SCHEMA MARKUP (Structured Data for SEO Dominance)
      ───────────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "TopRank Digital Service - SEO Services in Lucknow",
            "image": "https://www.toprankindia.com/icon.jpg",
            "telephone": ["+91 93050 30523", "+91 91154 39115"],
            "url": "https://www.toprankindia.com/seo-services-in-lucknow",
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
              "Sushant Golf City", "Lucknow", "Uttar Pradesh"
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
            "name": "SEO Services in Lucknow",
            "description": "Result-oriented SEO services in Lucknow by TopRank Digital Service. Rank #1 on Google, drive organic traffic, dominate Google Maps 3-Pack, and generate high-intent customer leads across Lucknow.",
            "areaServed": {
              "@type": "City",
              "name": "Lucknow"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SEO Service Packages in Lucknow",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Starter Local SEO in Lucknow"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Growth Business SEO in Lucknow"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise & E-Commerce SEO in Lucknow"
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
                "name": "SEO Services in Lucknow",
                "item": "https://www.toprankindia.com/seo-services-in-lucknow"
              }
            ]
          })
        }}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (H1: SEO Services in Lucknow)
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
              <span className="text-blue-400">SEO Services in Lucknow</span>
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
                Lucknow
              </span>
            </motion.h1>

            {/* Value Proposition */}
            <motion.p 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-xl md:text-2xl text-slate-300 font-normal leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto"
            >
              Rank #1 on Google, dominate local search results in Lucknow, and generate high-converting organic leads with data-driven, white-hat <strong className="text-white font-semibold">SEO services in Lucknow</strong> by TopRank Digital Service.
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
                Claim Free SEO Audit in Lucknow
              </a>
              <a
                href={`https://wa.me/919115439115?text=${encodeURIComponent("Hi TopRank, I want to discuss SEO services in Lucknow for my website.")}`}
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
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Top 3 Map Pack Success</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">5.2x</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Average Organic ROI</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-indigo-400">150+</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Active Lucknow Clients</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. H2: Why Businesses in Lucknow Need SEO
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Target className="w-3.5 h-3.5" />
              Market Growth & High Intent
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Why Businesses in Lucknow Need SEO
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Lucknow is witnessing rapid commercial expansion across Gomti Nagar, Shaheed Path, and Hazratganj. Without search engine optimization, your competitors capture the customers actively looking for your services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">High Local Search Volume</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Over 87% of consumers in Lucknow search on Google before making a purchase or booking a local service. Professional SEO in Lucknow puts your brand in front of ready-to-buy customers.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <BadgePercent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Higher ROI than Paid Ads</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Unlike Google Ads where leads stop the second your daily budget ends, organic SEO rankings in Lucknow deliver compounding inbound inquiries at zero cost-per-click 24/7.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Google Map Pack Dominance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ranking in the top 3 spots of Google Maps drives over 65% of all phone calls, store visits, and direction requests for local Lucknow businesses.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Build Unbeatable Brand Trust</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Websites appearing on Page 1 of Google enjoy natural credibility and industry authority in Lucknow, winning customer trust over unranked competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. H2: Our SEO Services in Lucknow (With 7 H3 Sub-Services)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive 360° Optimization
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Our SEO Services in Lucknow
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              We deliver end-to-end, full-funnel search engine optimization strategies custom-tailored for businesses in Lucknow to achieve top search visibility and revenue growth.
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
                  Dominate Google Maps 3-Pack and geo-targeted search results in Lucknow. We optimize your Google Business Profile (GMB), build verified local citations across Lucknow directories, and drive high-intent store footfalls and phone calls.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    Google Business Profile (GMB) Mastery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    NAP Consistency & Local Citation Building
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    Lucknow Geo-Targeted Landing Pages
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
                  Optimize every individual page on your website to ensure search engines understand your exact relevance for high-value search queries in Lucknow.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    Meta Titles, Descriptions & H1-H6 Tag Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    Keyword Density & LSI Keyword Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    Internal Linking Structure & Content Formatting
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
                  Fix underlying website architecture issues, speed bottlenecks, and crawlability errors so Google spiders can index your web pages without friction.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    Core Web Vitals & PageSpeed 90+ Score Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    XML Sitemap, Robots.txt & Canonical Tag Audits
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
                  Identify high-converting, commercial intent search terms that your prospective customers in Lucknow are typing into Google every single day.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    High-Intent Transactional Keyword Discovery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    Competitor Keyword Gap Analysis in Lucknow
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    Long-Tail Geo-Modified Search Query Mapping
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
                  Publish authoritative, informative, and engaging content that ranks on Google and convinces visitors in Lucknow to become paying customers.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    E-E-A-T Compliant Article & Blog Writing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Pillar-Cluster Topic Authority Architectures
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
                  Acquire 100% white-hat, high-Domain Authority (DA) contextual backlinks from trusted publications and industry portals to supercharge domain strength.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    High DA/DR Editorial Backlink Outreach
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    Local Press & Regional Media PR Coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    Zero Toxic PBN or Spam Link Guarantee
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
                    Scale online sales, category rankings, and product discoverability across Shopify, WooCommerce, and custom Next.js stores in Lucknow and all-India. We optimize product schema markup, handle canonical tags for variants, and target lucrative buyer searches.
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
                      Faceted Category Navigation Optimization
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
          4. H2: Local SEO for Businesses in Lucknow
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Neighborhood Level Search Dominance
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Local SEO for Businesses in Lucknow
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Win the Google Maps 3-Pack and appear at the very top when nearby customers search for your services in Lucknow’s top commercial and residential hubs.
            </p>
          </div>

          {/* Localized Strategy Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-7 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="text-blue-400 font-black text-xl mb-2">01. Google Maps 3-Pack Rank</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                We optimize your GMB profile categories, geotagged real photos, service menus, and primary business descriptions to capture the coveted top 3 map positions in Lucknow.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="text-emerald-400 font-black text-xl mb-2">02. NAP Citation Accuracy</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                We establish consistent Name, Address, and Phone number listings across 50+ tier-1 business directories like Justdial, IndiaMART, Sulekha, and Google Maps in Lucknow.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="text-purple-400 font-black text-xl mb-2">03. Review Generation & Reputation</div>
              <p className="text-sm text-slate-300 leading-relaxed">
                We implement automated review generation workflows to gain 5-star customer ratings, boosting social proof and elevating your local search algorithm ranking.
              </p>
            </div>
          </div>

          {/* Area Spotlight Grid */}
          <div className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700/80">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Targeted Local SEO Coverage Across Prime Lucknow Neighborhoods
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {lucknowAreas.map((area, idx) => (
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
              A scientific, milestone-driven framework engineered to deliver transparent results, rapid keyword traction, and compounding organic ROI for your business in Lucknow.
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
                      <span><strong>GMB & Local Audit:</strong> Google Maps listing status, NAP consistency & local citation score.</span>
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
                    We map out high-volume, transactional keywords searched by customers across Lucknow. We reverse-engineer your top 5 local competitors to identify lucrative content gaps, high-ranking pages, and backlink opportunities.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Search Intent Matrix</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Competitor Backlink Spy</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">Lucknow Geo-Queries</span>
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
                      <span><strong>Target Keyword Matrix:</strong> Primary, secondary & long-tail Lucknow keywords grouped by commercial intent.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Competitor Gap Blueprint:</strong> Exact keyword phrases driving revenue to your top 3 Lucknow rivals.</span>
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
                    We create authoritative localized content and execute strategic outreach campaigns to earn high-DA contextual backlinks and local directory citations, establishing unassailable search authority in Lucknow.
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
                      <span><strong>Local Citations & Directory Listings:</strong> 25+ verified Lucknow business profiles with 100% NAP consistency.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span><strong>E-E-A-T Authority Articles:</strong> Monthly localized blog clusters answering buyer questions in Lucknow.</span>
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
                      <span><strong>24/7 Client Dashboard Access:</strong> Live tracking for all target keywords across Lucknow & India.</span>
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
          6. H2: Industries We Serve in Lucknow
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              Specialized Industry Experience
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Industries We Serve in Lucknow
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              We engineer custom, niche-specific SEO campaigns tailored to the distinct audience search habits and competitive landscapes of diverse industries across Lucknow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Real Estate & Builders",
                desc: "Rank for luxury apartments, commercial plots, and township keywords across Gomti Nagar Ext., Shaheed Path & Sultanpur Road.",
                icon: Building2
              },
              {
                title: "Healthcare & Clinics",
                desc: "Drive patient appointments for hospitals, dental clinics, IVF centers, and specialty doctors in Lucknow.",
                icon: ShieldCheck
              },
              {
                title: "Coaching & Institutes",
                desc: "Capture student enrollments for competitive exams, IIT-JEE, NEET, UPSC, and spoken English institutes in Aliganj & Hazratganj.",
                icon: Award
              },
              {
                title: "Retail & Showrooms",
                desc: "Drive offline showroom foot traffic for jewelry, designer apparel, furniture, and electronics in Lucknow.",
                icon: ShoppingCart
              },
              {
                title: "Hotels & Restaurants",
                desc: "Boost table bookings, banquet inquiries, catering orders, and tourist visibility across Lucknow.",
                icon: Star
              },
              {
                title: "B2B Manufacturers",
                desc: "Generate wholesale bulk inquiries and supplier contracts for manufacturing units in Talkatora & Transport Nagar.",
                icon: Zap
              },
              {
                title: "Legal & Financial",
                desc: "Gain high-value corporate clients for law firms, chartered accountants, GST consultants, and wealth advisors in Lucknow.",
                icon: FileCheck
              },
              {
                title: "Interior & Architecture",
                desc: "Attract luxury residential and commercial design clients searching for top interior designers in Lucknow.",
                icon: Layers
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
              Unmatched Agency Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Why Choose TopRank Digital Service?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              We are not just another digital agency. We are your dedicated growth partners in Lucknow, committed to verifiable search rankings, transparent reporting, and real business revenue.
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
              <h3 className="text-xl font-bold text-white mb-2">Local Lucknow Office & Team</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Based right here in Gomti Nagar, Lucknow. You can meet our SEO specialists in person, discuss quarterly strategies, and get rapid, localized support.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparent Live Reporting</h3>
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
                We do not settle for vanity traffic metrics. We optimize for commercial intent keywords that translate directly into phone calls, WhatsApp leads, and paying clients.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-slate-800/90 border border-slate-700">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dedicated Account Manager</h3>
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
              See how our SEO services in Lucknow helped local businesses scale organic search traffic, dominate competitor rankings, and achieve multi-fold lead increases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Case Study 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="p-7">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">Healthcare Clinic • Gomti Nagar</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Super Specialty Dental & Maxillofacial Center</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Targeted high-intent local search queries like "best dental implant in Gomti Nagar" and "root canal clinic Lucknow" with local SEO and GMB optimization.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-2">
                  <div>
                    <div className="text-2xl font-black text-blue-600">+380%</div>
                    <div className="text-xs text-slate-500 font-medium">Organic Patients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-emerald-600">#1 Spot</div>
                    <div className="text-xs text-slate-500 font-medium">18 Local Keywords</div>
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
                <div className="text-xs font-bold uppercase tracking-wider text-purple-600 mb-2">Real Estate • Hazratganj</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Residential & Commercial Brokerage</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Executed technical architecture optimization and high-authority link building to rank for competitive phrases like "luxury flats in Lucknow" and "commercial office space Gomti Nagar".
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-2">
                  <div>
                    <div className="text-2xl font-black text-purple-600">+520%</div>
                    <div className="text-xs text-slate-500 font-medium">Qualified Leads</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-emerald-600">Top 3</div>
                    <div className="text-xs text-slate-500 font-medium">32 High-Volume Terms</div>
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
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">E-Commerce • Lucknow / Pan-India</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Authentic Chikankari Apparel Brand</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Optimized product rich snippets, category page internal link silos, and pan-India seasonal search intent for handcrafted apparel.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mb-2">
                  <div>
                    <div className="text-2xl font-black text-emerald-600">4.8x</div>
                    <div className="text-xs text-slate-500 font-medium">Organic Revenue</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-600">+640%</div>
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
              Choose the perfect SEO package for your business scale in Lucknow. Fixed transparent pricing, 100% white-hat execution, and zero hidden charges.
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
                  onClick={() => setFormData(prev => ({ ...prev, package: pkg.name }))}
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
            <h3 className="text-base font-bold text-blue-950 mb-1">Need a Customized SEO Strategy in Lucknow?</h3>
            <p className="text-xs sm:text-sm text-blue-800 mb-4">
              Have unique multi-city target locations, custom enterprise platforms, or specific API integrations? We design bespoke SEO campaigns tailored to your exact roadmap.
            </p>
            <a
              href={`https://wa.me/919115439115?text=${encodeURIComponent("Hi TopRank, I need a custom SEO quote for my business in Lucknow.")}`}
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
              Everything you need to know about our SEO services in Lucknow, ranking timelines, pricing, and execution methodology.
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
          11. H2: Get Started With SEO Services in Lucknow (Conversion Form)
      ───────────────────────────────────────────────────────────── */}
      <section id="audit-form" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side Pitch */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Free 30-Minute SEO Strategy Session
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                Get Started With SEO Services in Lucknow
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Ready to dominate Page 1 of Google and outrank your local competitors? Request a free comprehensive SEO audit of your website or schedule an in-person consultation at our Gomti Nagar office.
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
                  <span>Actionable Roadmap to Capture Google Maps 3-Pack Rankings</span>
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
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Lucknow Head Office</div>
                <div className="text-sm font-semibold text-white mb-4">
                  A42/32, Sulabh Awas, Sector 01, Gomti Nagar, Lucknow, UP 226010
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-bold">
                  <a href="tel:+919115439115" className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300">
                    <Phone className="w-3.5 h-3.5" /> +91 91154 39115
                  </a>
                  <a href="tel:+919305030523" className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300">
                    <Phone className="w-3.5 h-3.5" /> +91 93050 30523
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side Instant Lead Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 sm:p-10 text-slate-900 shadow-2xl border border-slate-100">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Claim Your Free SEO Audit</h3>
                <p className="text-sm text-slate-600 mb-6">Fill in your details below and our Lucknow SEO lead will contact you within 30 minutes.</p>

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
                      placeholder="e.g. Rahul Verma"
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
                      placeholder="Tell us about your target keywords, competitors, or ranking challenges in Lucknow..."
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
