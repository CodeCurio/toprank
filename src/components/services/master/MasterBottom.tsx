"use client";

import { motion } from "framer-motion";
import { Star, ChevronRight, FileText, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";

const faqs = [
  {
    q: "What are the best SEO services in India for local business growth?",
    a: "The best SEO services combined technical audits with semantic local intent. At TopRank, we focus on ranking you for high-converting 'commercial' keywords in Lucknow & Chandigarh that actually drive phone calls and revenue, not just vanity traffic."
  },
  {
    q: "How much does digital marketing cost in Lucknow?",
    a: "Marketing costs depend on your niche competition. Our local growth packages in Lucknow start from ₹15,000/mo. For aggressive scaling across UP and Punjab, strategies range from ₹45k to ₹95k+. We provide transparent ROI reporting to justify every rupee spent."
  },
  {
    q: "Can you rank my business on Google Maps in Chandigarh & Lucknow?",
    a: "Absolutely. We specialize in GMB (Google My Business) optimization. We ensure your business appears in the Map Pack for high-intent 'near me' queries in hubs like Gomti Nagar (Lucknow) and Sector 17 (Chandigarh)."
  }
];

interface MasterBottomProps {
  locationName?: string;
  regions?: string[];
}

export function MasterBottom({ locationName = "Lucknow & Chandigarh", regions = ["Gomti Nagar", "Hazratganj", "Sector 17", "Mohali"] }: MasterBottomProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 10. Local SEO Booster Section */}
        <div className="mb-32">
          <motion.div initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }} whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="bg-slate-900 rounded-[3rem] p-4 lg:p-6 flex flex-col md:flex-row gap-8 items-center justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 pointer-events-none" />
            
            <div className="w-full md:w-1/2 aspect-square relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-inner group">
               <div className="absolute inset-0 bg-blue-600/30 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay" />
               <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" sizes="(max-width: 1024px) 100vw, 50vw" fill alt="Lucknow Local Business Team Coaching" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute bottom-6 left-6 z-20 bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 border border-slate-700 shadow-xl text-left">
                  <p className="text-orange-400 font-black text-2xl">{locationName}</p>
                  <p className="text-white text-xs font-bold uppercase tracking-widest">Local Presence</p>
                </div>
            </div>

            <div className="w-full md:w-1/2 p-6 lg:p-12 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-md mb-6">Local Dominance</div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-white">Dominate the <span className="text-blue-400">Local Market.</span></h2>
              <p className="text-slate-400 font-medium leading-relaxed mb-6">Whether your office is in {regions.slice(0, 3).join(", ")}, or surrounding business hubs, our geographically optimized marketing guarantees you capture your exact target demographic in <strong>{locationName}</strong>.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                 {["Real Estate Developers", "Healthcare & Hospitals", "Educational Institutes", "Retail & E-commerce"].map((n, i) => (
                   <div key={i} className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 font-bold text-slate-300 text-sm flex items-center gap-3">
                     <Star className="w-4 h-4 text-blue-400 shrink-0" /> {n}
                   </div>
                 ))}
              </div>

              <Link href="/services/seo" className="inline-flex items-center gap-2 text-white font-bold bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-4 rounded-xl transition-all">Explore Local SEO <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </motion.div>
        </div>

        {/* 12. FAQs (Featured Snippet Target) */}
        <div className="mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">Frequently Asked <span className="text-blue-600">Questions</span></motion.h2>
            <p className="text-slate-600 font-medium">Clear answers mapping exactly to your concerns regarding cost, time, and results.</p>
          </div>
          
          <div className="space-y-4 text-left p-2">
            {faqs.map((faq, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: idx * 0.1 }}
                key={idx} 
                className={`bg-white border ${openFaq === idx ? 'border-blue-500 shadow-md transform scale-[1.01]' : 'border-slate-200 hover:border-slate-300'} rounded-2xl overflow-hidden transition-all duration-300`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center"
                >
                  <span className="font-bold text-lg text-slate-900 pr-8 leading-snug">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-90 text-blue-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4 mt-2">
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
                mainEntity: faqs.map(f => ({
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

        {/* 11. Content Depth (Checklist) & 13. Final CTA Overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch pt-16">
          
          <motion.div initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="lg:col-span-2 bg-indigo-50 border border-indigo-100 p-10 lg:p-14 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-600/30 z-10">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-black mb-4 z-10 text-slate-900 leading-tight">Bonus: 10-Point Agency Hiring Checklist</h3>
            <p className="text-slate-600 font-medium leading-relaxed mb-10 z-10">Not ready to chat? Download our free technical checklist to evaluate any digital agency before signing a massive contract. Know exactly what hidden red flags to look for.</p>
            <button className="relative z-10 inline-flex items-center justify-center gap-2 text-sm font-bold text-indigo-700 uppercase tracking-widest px-6 py-4 bg-white/50 hover:bg-white border border-indigo-200 rounded-xl transition-all w-full md:w-max">
              Download Free Guide
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="lg:col-span-3 bg-blue-600 text-white p-10 lg:p-16 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-center shadow-2xl shadow-blue-600/30">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_60%)] pointer-events-none" />
            <h3 className="text-4xl md:text-6xl font-black mb-6 leading-[1.05] z-10">Start Scaling <br/>Your Revenue.</h3>
            <p className="text-blue-100 text-xl font-medium leading-relaxed mb-6 z-10 max-w-xl">Stop letting competitors steal your exact target audience. Book a free 30-minute discovery call with our directors today.</p>
            <p className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10 z-10 opacity-80 animate-pulse">🔥 Free audit for limited businesses this week</p>
            <div className="flex flex-col sm:flex-row gap-4 z-10">
              <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-100 text-blue-600 font-black text-lg rounded-xl flex items-center justify-center transition-transform hover:scale-105 shadow-xl shadow-black/10">
                Book Free Audit
              </Link>
              <Link href="tel:+919305030523" className="w-full sm:w-auto px-10 py-5 bg-blue-700/50 hover:bg-blue-700 text-white border border-blue-500/50 font-black text-lg rounded-xl flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5 mr-2" /> Call Direct
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
