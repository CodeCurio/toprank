"use client";

import { motion } from "framer-motion";
import { Check, Star, ChevronRight, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ServiceConversionProps {
  locationName?: string;
}

interface ServiceProofProps {
  locationName?: string;
}

export function ServiceConversion({ locationName = "Lucknow" }: ServiceConversionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const dynamicFaqs = [
    {
      q: `How long does it take to see SEO results in ${locationName}?`,
      a: "Typically, noticeable rankings and organic traffic improvements take 3 to 6 months depending on keyword competition. However, local GMB optimizations can drive qualified phone calls within the first 30-45 days."
    },
    {
      q: "Is SEO better than Google Ads for my business?",
      a: "Google Ads provide immediate visibility as long as you pay. SEO is a long-term compounding asset. Once you rank organically, you capture high-intent traffic 24/7 without paying per click. The best strategy integrates both."
    },
    {
      q: "Do you guarantee #1 rankings on Google?",
      a: "No credible agency guarantees #1 rankings because Google's algorithm is proprietary. We guarantee a data-driven process, absolute transparency, and a proven track record of securing page-one positions for 100+ clients."
    },
    {
      q: "Do I need a new website for SEO to work?",
      a: "Not necessarily. If your current website is structurally sound, we will optimize its technical framework and content. If it is fundamentally broken or slow, we may recommend a rebuilding phase to maximize SEO ROI."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 8. Pricing Psychology Section (Anchored) */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }}>
               <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Investment in <span className="text-blue-600">Growth.</span></h2>
               <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">Custom pricing based on your industry competition and current website authority.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-5xl mx-auto">
            {/* National Scaling (Anchor) */}
            <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl order-3 md:order-1 opacity-90 hover:opacity-100 transition-opacity">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">National Scaling</p>
               <h3 className="text-4xl font-black mb-2 flex items-baseline gap-1">₹45k<span className="text-lg text-slate-400 font-bold">/mo</span></h3>
               <p className="text-slate-600 text-sm font-medium mb-8">For aggressive B2B and E-commerce brands competing nationally.</p>
               <ul className="space-y-4 mb-8">
                 {[ "Deep Competitor Gap Analysis", "10 High-DR Backlinks/mo", "Advanced Technical SEO fixing", "National Keyword Targets", "Priority Support" ].map((f, i) => (
                   <li key={i} className="flex gap-3 items-start text-sm font-medium text-slate-700">
                     <Check className="w-5 h-5 text-blue-500 shrink-0" /> {f}
                   </li>
                 ))}
               </ul>
               <Link href="/contact" className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl flex items-center justify-center transition-colors">Apply Now</Link>
            </motion.div>

            {/* Local Dominator (Most Popular) */}
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' }} whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1, duration: 0.6 }} className="bg-slate-900 text-white rounded-3xl p-10 border border-blue-500 shadow-2xl relative order-1 md:order-2 group z-10">
               <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">Most Popular</div>
               <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Local Dominator</p>
               <h3 className="text-4xl font-black mb-2 flex items-center gap-2">₹25k<span className="text-lg text-slate-500 font-bold">/mo</span></h3>
               <p className="text-slate-400 text-sm font-medium mb-8">Perfect for clinics, real estate, and service businesses targeting exact cities.</p>
               <ul className="space-y-4 mb-8">
                 {[ "Hyper-Local Keyword Targeting", "Aggressive GMB Optimization", "Localized Citation Building", "5 Content Hub Articles/mo", "Monthly Conversion Reporting" ].map((f, i) => (
                   <li key={i} className="flex gap-3 items-start text-sm font-medium text-slate-300">
                     <Check className="w-5 h-5 text-blue-400 shrink-0" /> {f}
                   </li>
                 ))}
               </ul>
               <Link href="/contact" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]">Claim Market Share</Link>
            </motion.div>

            {/* Basic Starter */}
            <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl order-2 md:order-3 opacity-90 hover:opacity-100 transition-opacity">
               <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Foundation</p>
               <h3 className="text-4xl font-black mb-2 flex items-baseline gap-1">₹15k<span className="text-lg text-slate-400 font-bold">/mo</span></h3>
               <p className="text-slate-600 text-sm font-medium mb-8">Essential SEO maintenance for smaller boutique setups.</p>
               <ul className="space-y-4 mb-8">
                 {[ "Basic On-Page SEO", "GMB Profile Setup", "2 Articles/mo", "Basic Monthly Report" ].map((f, i) => (
                   <li key={i} className="flex gap-3 items-start text-sm font-medium text-slate-700">
                     <Check className="w-5 h-5 text-slate-400 shrink-0" /> {f}
                   </li>
                 ))}
               </ul>
               <Link href="/contact" className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl flex items-center justify-center transition-colors">Start Small</Link>
            </motion.div>
          </div>
          <p className="text-center text-slate-500 text-sm font-bold mt-8">* Custom enterprise packages available from ₹95k/mo upon consultation.</p>
        </div>

        {/* 11. Local SEO Booster Section */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }} whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-[3rem] p-10 lg:p-16 flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-md mb-6">Local Advantage</div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Serving Businesses in <span className="text-blue-600">{locationName}.</span></h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-6">Whether your office is located in the premium high-rises or bustling markets of <strong>{locationName}</strong>, our geographically optimized SEO guarantees you rank first when local customers search for your services.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">Rank Locally Now <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
               {["Healthcare & Clinics", "Real Estate Agencies", "Law Firms", "Home Services", "E-commerce Sites", "B2B Tech Startups"].map((n, i) => (
                 <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 font-bold text-slate-700 text-sm flex items-center gap-2">
                   <Star className="w-4 h-4 text-blue-500 shrink-0" /> {n}
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

        {/* 12. FAQs (Featured Snippet Target) */}
        <div className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-3xl md:text-5xl font-black tracking-tight mb-4">Frequently Asked <span className="text-blue-600">Questions</span></motion.h2>
          </div>
          
          <div className="space-y-4 text-left">
            {dynamicFaqs.map((faq, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: idx * 0.1 }}
                key={idx} 
                className={`bg-white border ${openFaq === idx ? 'border-blue-500 shadow-md' : 'border-slate-200 hover:border-slate-300'} rounded-2xl overflow-hidden transition-all`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                  className="w-full text-left p-6 flex justify-between items-center"
                >
                  <span className="font-bold text-lg text-slate-900 pr-8 leading-snug">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-90 text-blue-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4 mt-2">
                    <p>{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* FAQ Schema Script Generation */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: dynamicFaqs.map(f => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: {
                     "@type": "Answer",
                     text: f.a
                  }
                }))
              })
            }}
          />
        </div>

        {/* 13. Content Depth Add-ons (Mini Guide) & 15. Final CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <motion.div initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
            <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 z-10">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-black mb-4 z-10 text-white">Bonus: Agency Hiring Checklist</h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-8 z-10">Don't get scammed by fake SEO gurus using outdated PBNs. Download our free 10-point technical checklist to evaluate any SEO agency before signing a contract. Know exactly what questions to ask.</p>
            <button className="relative z-10 inline-flex items-center justify-center gap-2 text-sm font-bold text-white uppercase tracking-widest px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all w-full sm:w-max">
              Download Checklist
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="bg-blue-600 text-white p-10 lg:p-14 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-center shadow-2xl shadow-blue-600/30">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)] pointer-events-none" />
            <h3 className="text-3xl md:text-5xl font-black mb-6 leading-[1.1] z-10">Ready to Dominate Google?</h3>
            <p className="text-blue-100 text-lg font-medium leading-relaxed mb-10 z-10">Stop letting competitors steal your traffic. Book a free 30-minute strategic audit call with our lead SEO experts today.</p>
            <div className="flex flex-col sm:flex-row gap-4 z-10">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-blue-600 font-black rounded-xl flex items-center justify-center transition-transform hover:scale-105 shadow-lg shadow-black/10">
                Book Free Audit
              </Link>
              <Link href="tel:+919305030523" className="w-full sm:w-auto px-8 py-4 bg-blue-700/50 hover:bg-blue-700 text-white border border-blue-500/50 font-black rounded-xl flex items-center justify-center transition-colors">
                Call Direct
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
