"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MasterPsychologyProps {
  locationName?: string;
}

export function MasterPsychology({ locationName = "Lucknow & Chandigarh" }: MasterPsychologyProps) {
  const [selectedType, setSelectedType] = useState<"local" | "ecommerce" | "b2b">("local");

  const guidanceData = {
    local: {
      problem: "Local competitors are stealing our customers on Google Maps.",
      service: "Local SEO & GMB Domination",
      action: "Rank #1 for Local Intent",
      link: "/services/seo"
    },
    ecommerce: {
      problem: "Our competitors are ranking for high-intent keywords we miss.",
      service: "Performance Ads + CRO",
      action: "Scale ROAS & Market Share",
      link: "/contact"
    },
    b2b: {
      problem: "We need B2B authority that converts traffic into daily leads.",
      service: "National SEO & LinkedIn Ads",
      action: "Build Search Dominance",
      link: "/contact"
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 4. Problem-Solution Mapping Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-500 font-bold text-xs uppercase tracking-widest mb-6">
                <XCircle className="w-3.5 h-3.5" />
                Market Reality Check
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                Your Competitors Are Already <br/><span className="text-rose-600 font-extrabold italic">Ranking on Google.</span> Are You?
              </h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
                Your local competitors are ranking on Google and <span className="text-blue-600 font-bold">getting daily leads</span> — while your business stays invisible. If you're <span className="text-slate-900 font-bold">missing Google Maps visibility</span>, you're handing over your market share on a silver platter.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                prob: "Invisible on Search Engines", 
                probDesc: `Your website exists, but your customers can't find it for high-intent keywords in ${locationName}.`,
                solTitle: "Dominant SEO Strategy",
                solDesc: "We engineer your content to capture the #1 spot and stay there, increasing your organic traffic.",
              },
              { 
                prob: "Losing Leads to Competitors", 
                probDesc: "Competitors with worse products are stealing your inquiries because they rank higher on Google.",
                solTitle: "Competitor Displacement",
                solDesc: "We outperform their backlink profiles and authority to push you up the search engine results.",
              },
              { 
                prob: "Wasted Ads Spend (Low ROI)", 
                probDesc: "You're paying for clicks that don't convert into real sales inquiries or phone calls.",
                solTitle: "ROI-Driven Funnels",
                solDesc: "We optimize your landing pages to ruthlessly convert passive readers into active buyers.",
              }
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: idx * 0.1 }} className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
                 <div className="mb-8">
                    <div className="inline-flex items-center gap-2 text-rose-500 font-bold mb-3"><XCircle className="w-5 h-5" /> The Problem</div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">{item.prob}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.probDesc}</p>
                 </div>
                 <div className="pt-8 border-t border-slate-200">
                    <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-3"><CheckCircle2 className="w-5 h-5" /> The Solution</div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">{item.solTitle}</h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{item.solDesc}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 9. Which Service is Right for You? (Lead Guidance CRO) */}
        <div>
           <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 border border-slate-800 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none" />
             
             <div className="text-center mb-12 relative z-10">
               <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">What type of business are you?</h2>
               <p className="text-slate-400 font-medium">Select your profile and we'll show you exactly how we scale your specific model.</p>
             </div>

             <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
               <button onClick={() => setSelectedType("local")} className={`px-8 py-4 rounded-xl font-bold transition-all ${selectedType === "local" ? 'bg-blue-600 shadow-lg shadow-blue-500/20' : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white'}`}>Local Service / Clinic</button>
               <button onClick={() => setSelectedType("ecommerce")} className={`px-8 py-4 rounded-xl font-bold transition-all ${selectedType === "ecommerce" ? 'bg-indigo-600 shadow-lg shadow-indigo-500/20' : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white'}`}>E-Commerce Store</button>
               <button onClick={() => setSelectedType("b2b")} className={`px-8 py-4 rounded-xl font-bold transition-all ${selectedType === "b2b" ? 'bg-orange-600 shadow-lg shadow-orange-500/20 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white'}`}>B2B SaaS / Enterprise</button>
             </div>

             <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 max-w-3xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left mb-12">
                <div>
                   <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">Primary Bottleneck</p>
                   <p className="text-xl font-bold text-slate-300 mb-6 italic font-serif leading-relaxed">"{guidanceData[selectedType].problem}"</p>
                   <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-2">Recommended Engine</p>
                   <p className="text-2xl font-black text-white">{guidanceData[selectedType].service}</p>
                </div>
                <Link href={guidanceData[selectedType].link} className="shrink-0 px-8 py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-slate-100 transition-colors shadow-lg flex items-center gap-2">
                  {guidanceData[selectedType].action} <ArrowRight className="w-5 h-5" />
                </Link>
             </div>

             {/* Business Support Grid for Long-tail SEO */}
             <div className="pt-8 border-t border-slate-800/50 relative z-10">
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-center">Engineered for Specific Industries</p>
                <div className="flex flex-wrap justify-center gap-3">
                   {["Local Businesses", "Medical Clinics", "SaaS Startups", "E-commerce Brands", "Legal Practices", "Real Estate Groups"].map((tag) => (
                     <span key={tag} className="px-4 py-1.5 bg-slate-800/50 border border-slate-700 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full">{tag}</span>
                   ))}
                </div>
             </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
