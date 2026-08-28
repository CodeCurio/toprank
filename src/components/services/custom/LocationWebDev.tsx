"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Monitor, Zap, Search, 
  Layout, HelpCircle, Star, Phone, Code, Sparkles, 
  ShieldCheck, Smartphone, ShoppingCart 
} from "lucide-react";
import Link from "next/link";
import { usePhone } from "@/hooks/usePhone";
import { ContactSection } from "@/components/sections/ContactSection";

interface LocationWebDevProps {
  locationName: string;
  locationSlug: string;
  regions: string[];
}

export function LocationWebDev({ locationName, locationSlug, regions }: LocationWebDevProps) {
  const phone = usePhone();

  const faqs = [
    {
      q: `What is the cost of website development in ${locationName}?`,
      a: `Website development costs in ${locationName} depend on the scope and technology stack. A high-converting business website typically starts from ₹20,000 to ₹35,000, while custom e-commerce or SaaS web applications are quoted based on specific functionality. Contact our ${locationName} team for a free, transparent quote.`
    },
    {
      q: `How long does it take to design and build a website in ${locationName}?`,
      a: `A standard 5-to-10 page corporate website takes 2 to 3 weeks from visual Figma draft to live deployment. Complex e-commerce stores with custom payment gateways and inventory syncing typically take 3 to 5 weeks.`
    },
    {
      q: `Why do you build on Next.js and React instead of slow WordPress templates?`,
      a: `WordPress themes are notorious for slow loading speeds and heavy plugin vulnerabilities. We build with Next.js & React to ensure sub-second load times, 100% Google Core Web Vitals score, and superior SEO indexing, resulting in much higher search rankings in ${locationName}.`
    },
    {
      q: `Will my website rank on Google for local searches in ${locationName}?`,
      a: `Yes! Every website we develop includes on-page SEO, schema markup, mobile responsiveness, XML sitemaps, and local Google Business Profile (GMB) integration tailored for ${locationName} search queries.`
    }
  ];

  return (
    <>
      {/* Schema Markup for Local Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Website Development in ${locationName}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "TopRank Digital Service",
              "telephone": `+91 ${phone.raw}`,
              "url": `https://www.toprankindia.com/${locationSlug}/website-development`,
              "areaServed": regions
            },
            "description": `Custom Next.js & React website development services in ${locationName}. Fast, secure, and SEO-optimized for maximum lead conversions.`,
            "serviceType": "Web Development"
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

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:48px_48px] opacity-40 pointer-events-none" />
        
        {/* Glows */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-500/10 rounded-full blur-[90px] sm:blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-pink-50 border border-pink-100 rounded-full text-pink-700 text-[10px] font-black uppercase tracking-wider sm:tracking-[0.25em] mb-4 sm:mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 fill-pink-200 text-pink-600" />
              #1 Web Development Agency in {locationName}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.05] mb-5 sm:mb-8"
            >
              Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">Websites</span> That Turn <br className="hidden sm:block" />
              Visitors Into Clients in {locationName}.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-lg md:text-2xl text-slate-600 font-medium leading-relaxed mb-8 sm:mb-10 max-w-3xl"
            >
              We engineer zero-latency, high-converting websites on Next.js & React. Serving high-growth businesses across {regions.join(", ")} with modern UI/UX and automated lead funnels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link href="#contact" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-900 hover:bg-black text-white text-xs font-black uppercase tracking-wider sm:tracking-widest rounded-xl sm:rounded-2xl transition-all shadow-xl shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-2">
                Get Free Website Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:+91${phone.raw}`} className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 text-xs font-black uppercase tracking-wider sm:tracking-widest rounded-xl sm:rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-pink-600" /> Talk to Developer
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Pillars Grid */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-2 space-y-8 sm:space-y-10">
              <div className="prose prose-slate max-w-none space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  High-Performance Web Development in {locationName}
                </h2>
                <p className="text-slate-600 font-medium text-base leading-relaxed">
                  In today's competitive digital ecosystem, slow template websites destroy conversion rates. Most businesses in <strong>{locationName}</strong> lose 40% of their ad traffic simply because their WordPress site takes more than 3 seconds to open on a mobile phone.
                </p>
                <p className="text-slate-600 font-medium text-base leading-relaxed">
                  At <strong>TopRank Digital Service</strong>, we develop bespoke web architectures on <strong>Next.js, Tailwind CSS, and Node.js</strong>. Every layout is engineered to load under 800ms, rank on the 1st page of Google, and provide a friction-free experience for your clients across <strong>{regions.slice(0, 4).join(", ")}</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />,
                    title: "Corporate & Business Sites",
                    desc: "Lead-focused brand websites designed to position your company as the market leader in your industry."
                  },
                  {
                    icon: <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
                    title: "E-Commerce & Shopify Stores",
                    desc: "Seamless checkout experiences, inventory management, and fast product filtering to scale online revenue."
                  },
                  {
                    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
                    title: "Lightning Speed (100 Core Web Vitals)",
                    desc: "SSR & Static generation ensuring sub-second load times and zero layout shift on mobile devices."
                  },
                  {
                    icon: <Search className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />,
                    title: "Built-In SEO Architecture",
                    desc: "JSON-LD Schemas, semantic HTML5, clean URL structures, and automatic XML sitemaps for fast Google indexing."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-50 flex items-center justify-center mb-4 sm:mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Card / Trust Block */}
            <div className="lg:col-span-1 bg-white border border-slate-200 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">Why Choose TopRank in {locationName}?</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed mb-6 sm:mb-8">
                Over 250+ businesses trust our engineering team for high-uptime, scalable web applications.
              </p>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "100% Handcrafted custom design",
                  "Direct WhatsApp & CRM integration",
                  "Mobile-first adaptive layouts",
                  "Free 1st Year Cloudflare SSL & Hosting setup",
                  "Dedicated 24/7 technical support"
                ].map((val, idx) => (
                  <li key={idx} className="flex gap-2.5 sm:gap-3 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>

              <Link href="#contact" className="block w-full py-3.5 sm:py-4 text-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-black uppercase tracking-widest text-[10px] rounded-xl sm:rounded-2xl transition-all shadow-lg shadow-pink-600/20 active:scale-95">
                Book Strategy Call
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* The 4-Stage Development Process */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">
              Our Web Development <span className="text-pink-600">Process</span>
            </h2>
            <p className="text-slate-500 font-medium text-xs sm:text-sm sm:text-base px-2">
              How we take your {locationName} business from initial concept to high-converting live website in 4 steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { step: "01", title: "Strategy & Wireframing", desc: `We study your competitors in ${locationName}, define user funnels, and design high-fidelity Figma drafts.` },
              { step: "02", title: "Next.js Frontend Build", desc: "We code the layout with React components, smooth micro-interactions, and mobile-first responsiveness." },
              { step: "03", title: "SEO & Speed Audit", desc: "We configure schema tags, optimize image assets, and run Google PageSpeed checks to ensure a 95+ score." },
              { step: "04", title: "Deployment & Training", desc: "We connect domain DNS, setup Cloudflare security, and hand over complete dashboard control." }
            ].map((node, idx) => (
              <div key={idx} className="bg-slate-50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 relative group hover:border-pink-200 transition-all shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-pink-600 opacity-40 mb-3 sm:mb-6 group-hover:opacity-100 transition-opacity">
                  {node.step}
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 sm:mb-3">{node.title}</h3>
                <p className="text-slate-500 font-medium text-xs leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
              <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600" />
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 font-bold text-xs sm:text-sm sm:text-base px-2">
              Got questions about web development in {locationName}? Here are the facts.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-sm sm:text-lg text-slate-900 mb-2 leading-snug">{faq.q}</h3>
                <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
