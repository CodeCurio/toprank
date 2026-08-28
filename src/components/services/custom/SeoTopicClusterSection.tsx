"use client";

import Link from "next/link";
import { BookOpen, ExternalLink, Sparkles, Compass, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface SeoTopicClusterSectionProps {
  currentCity: "Lucknow" | "Chandigarh" | "Mohali" | "Gonda";
}

export function SeoTopicClusterSection({ currentCity }: SeoTopicClusterSectionProps) {
  const clusterGuides = [
    {
      title: "10 Proven Local SEO Strategies for Google 3-Pack in 2026",
      desc: "Step-by-step roadmap to dominate local map rankings, NAP consistency, and review velocity.",
      href: "/blog/local-seo-strategies-2026",
      tag: "Local SEO Guide"
    },
    {
      title: "SEO Pricing & Packages Guide for Indian Businesses",
      desc: "Detailed breakdown of monthly SEO costs, deliverables, link acquisition, and ROI expectations.",
      href: "/blog/seo-pricing-packages-guide-2026",
      tag: "Pricing & Inclusions"
    },
    {
      title: "Double Your Website Conversion Rate Without Extra Ad Spend",
      desc: "How high-speed UI/UX, trust triggers, and frictionless lead forms convert organic visitors into paying customers.",
      href: "/blog/double-website-conversion-rate",
      tag: "CRO & Funnel"
    },
    {
      title: "Building Modern High-Speed Web Applications with Next.js",
      desc: "Why sub-second page speeds and server components supercharge technical search rankings.",
      href: "/blog/building-modern-high-speed-web-apps",
      tag: "Technical Architecture"
    }
  ];

  const cityHubs = [
    { name: "SEO Services in Lucknow", href: "/seo-services-in-lucknow", city: "Lucknow" },
    { name: "SEO Services in Chandigarh", href: "/seo-services-in-chandigarh", city: "Chandigarh" },
    { name: "SEO Services in Mohali", href: "/seo-services-in-mohali", city: "Mohali" },
    { name: "SEO Services in Gonda", href: "/seo-services-in-gonda", city: "Gonda" },
    { name: "Website Development in Lucknow", href: "/services/website-development-lucknow", city: "Lucknow" }
  ];

  const externalAuthorities = [
    {
      name: "Google Search Essentials",
      desc: "Official webmaster quality guidelines, crawlability standards & indexation policies.",
      url: "https://developers.google.com/search/docs/essentials"
    },
    {
      name: "Schema.org LocalBusiness Standards",
      desc: "Structured data schemas for local business NAP, geo-coordinates, reviews & opening hours.",
      url: "https://schema.org/LocalBusiness"
    },
    {
      name: "Google Core Web Vitals (web.dev)",
      desc: "Official metrics for Largest Contentful Paint (LCP), FID/INP & Cumulative Layout Shift (CLS).",
      url: "https://web.dev/vitals/"
    },
    {
      name: "Google Business Profile Guidelines",
      desc: "Official verification, category mapping & location guidelines for Google Maps 3-Pack.",
      url: "https://support.google.com/business/answer/3038177"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            Topical Authority & Knowledge Cluster
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Related SEO Resources & Research Guides
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore our deep-dive research articles, official Google documentation references, and sister city growth hubs.
          </p>
        </div>

        {/* 1. Topical In-Depth Cluster Articles (Spokes) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span>In-Depth SEO Strategy Guides</span>
            </div>
            <Link href="/blog" className="text-xs sm:text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">
              View All Articles <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clusterGuides.map((guide, idx) => (
              <Link 
                key={idx} 
                href={guide.href}
                className="group p-6 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-blue-500/80 hover:bg-slate-800 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-[11px] font-bold uppercase tracking-wider mb-3">
                    {guide.tag}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {guide.desc}
                  </p>
                </div>
                <div className="text-xs font-bold text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Full Guide <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 2. Sibling City SEO Hubs (Cross-City Topic Interlinking) */}
        <div className="mb-14 p-8 rounded-3xl bg-slate-800/50 border border-slate-700/80">
          <div className="flex items-center gap-2 text-lg font-bold text-white mb-6">
            <Compass className="w-5 h-5 text-emerald-400" />
            <span>Target Regional SEO & Web Development Hubs</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityHubs.map((hub, idx) => {
              const isCurrent = hub.city === currentCity;
              return (
                <Link
                  key={idx}
                  href={hub.href}
                  className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isCurrent 
                      ? "bg-blue-600/20 border-blue-500/60 text-white font-bold pointer-events-none" 
                      : "bg-slate-900/80 border-slate-700/60 text-slate-300 hover:border-emerald-500/60 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5 text-sm font-semibold">
                    <CheckCircle2 className={`w-4 h-4 ${isCurrent ? "text-blue-400" : "text-emerald-400"}`} />
                    <span>{hub.name}</span>
                  </div>
                  {isCurrent ? (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/30 text-blue-300 font-black">Active Hub</span>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* 3. High-Authority Outbound Citations (E-E-A-T & Google Compliance) */}
        <div className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800">
          <div className="flex items-center gap-2 text-lg font-bold text-white mb-2">
            <ExternalLink className="w-5 h-5 text-purple-400" />
            <span>Official Standards & Search Engine References</span>
          </div>
          <p className="text-xs text-slate-400 mb-6">
            Our SEO methodologies strictly comply with official webmaster, structured data, and performance specifications established by Google and W3C:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {externalAuthorities.map((auth, idx) => (
              <a
                key={idx}
                href={auth.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/60 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-bold text-purple-300 text-sm mb-1.5 group-hover:text-purple-200">
                    <span>{auth.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400" />
                  </div>
                  <p className="text-xs text-slate-400 leading-normal mb-2">{auth.desc}</p>
                </div>
                <div className="text-[11px] font-semibold text-purple-400/80 group-hover:text-purple-300">
                  Read Official Docs →
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
