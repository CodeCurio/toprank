"use client";

import { motion } from "framer-motion";
import { Check, X, Building2, UserX, Target } from "lucide-react";

interface MasterProofProps {
  locationName?: string;
}

export function MasterProof({ locationName = "Lucknow & Chandigarh" }: MasterProofProps) {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 6. Process (Trust Builder Timeline) */}
        <div className="mb-32">
           <div className="text-center mb-16">
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                 Our Proven <span className="text-blue-600">Digital Marketing Process.</span>
               </h2>
               <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">We leverage data-first engineering to build predictable revenue engines for {locationName} businesses.</p>
             </motion.div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Market & Keyword Research", desc: "We map your current traffic leaks, high-intent keyword gaps, and local competitor vulnerabilities in Lucknow/Chandigarh." },
                  { step: "02", title: "SEO & Website Optimization", desc: "A custom KPI-driven roadmap to fix technical LCP bottlenecks and build absolute topical search authority." },
                  { step: "03", title: "Lead Generation Setup", desc: "Our specialists deploy high-velocity Google & Meta ad campaigns to capture immediate sales intent and inquiries." },
                  { step: "04", title: "Tracking & ROI Scaling", desc: "Continuous A/B testing, scaling profitable search buckets, and transparent revenue reporting every 30 days." },
                ].map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: i * 0.1 }} className="bg-white border border-slate-200 rounded-3xl p-8 relative">
                   <div className="text-6xl font-black text-slate-50 mb-6 absolute top-4 right-4 pointer-events-none z-0">{p.step}</div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{p.title}</h3>
                   <p className="text-slate-600 text-sm font-medium leading-relaxed relative z-10">{p.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* 7. Proof Section (Multi-layered Trust) */}
        <div className="mb-32">
           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white text-center shadow-2xl">
             <h2 className="text-2xl md:text-4xl font-black mb-12">Trusted by 100+ businesses across scales.</h2>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
               {/* Placeholders for logos */}
               {["LokalApp", "TechPro", "MedicaLine", "BuildEstate", "NovaRetail"].map((brand, i) => (
                 <div key={i} className="text-xl md:text-2xl font-black tracking-widest uppercase text-slate-400">{brand}</div>
               ))}
             </div>
             
             <div className="absolute bottom-6 left-6 z-20 bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 border border-slate-700 shadow-xl text-left">
                  <p className="text-orange-400 font-black text-2xl">{locationName}</p>
                  <p className="text-white text-xs font-bold uppercase tracking-widest">Local Presence</p>
                </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left border-t border-slate-800 pt-16">
                <div>
                  <p className="text-5xl font-black text-blue-400 mb-3 tracking-tighter">350%</p>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed">Average increase in organic leads for our local service clients in Year 1.</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-pink-500 mb-3 tracking-tighter">4.8x</p>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed">Average Return On Ad Spend (ROAS) achieved for E-commerce partners.</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-indigo-400 mb-3 tracking-tighter">Top 1%</p>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed">Rankings secured for high-volume commercial keywords nationwide.</p>
                </div>
             </div>
           </motion.div>
        </div>

        {/* 8. Comparison (Decision Section) */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Stop <span className="text-rose-500">Wasting Capital.</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium">Why piecing together remote freelancers fundamentally breaks your marketing.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
             {/* Freelancer */}
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="bg-white border border-slate-200 rounded-3xl p-8 opacity-80">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-rose-50 flex items-center justify-center rounded-xl"><UserX className="w-6 h-6 text-rose-500" /></div>
                  <h3 className="text-xl font-bold">Solo Freelancer</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm font-medium text-slate-600"><X className="w-5 h-5 text-rose-400 shrink-0" /> No Google Maps visibility strategy</li>
                  <li className="flex gap-3 text-sm font-medium text-slate-600"><X className="w-5 h-5 text-rose-400 shrink-0" /> Disappears when daily leads drop</li>
                  <li className="flex gap-3 text-sm font-medium text-slate-600"><X className="w-5 h-5 text-rose-400 shrink-0" /> No data-backed keyword research</li>
                </ul>
             </motion.div>

             {/* Mega Agency */}
             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }} className="bg-white border border-slate-200 rounded-3xl p-8 opacity-80">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-xl"><Building2 className="w-6 h-6 text-slate-500" /></div>
                  <h3 className="text-xl font-bold">Mega Agencies</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm font-medium text-slate-600"><X className="w-5 h-5 text-rose-400 shrink-0" /> You are passed to junior interns</li>
                  <li className="flex gap-3 text-sm font-medium text-slate-600"><X className="w-5 h-5 text-rose-400 shrink-0" /> Massive overhead fees layered in</li>
                  <li className="flex gap-3 text-sm font-medium text-slate-600"><X className="w-5 h-5 text-rose-400 shrink-0" /> Slow execution timelines</li>
                </ul>
             </motion.div>

             {/* TopRank */}
             <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }} className="bg-blue-600 text-white rounded-3xl p-8 shadow-2xl shadow-blue-600/30 ring-4 ring-blue-500/20 relative z-10">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-full rotate-12 shadow-lg">The Smart Choice</div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-white/20 flex items-center justify-center rounded-xl"><Target className="w-6 h-6 text-white" /></div>
                  <h3 className="text-xl font-black">TopRank Engine</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm font-medium text-blue-100"><Check className="w-5 h-5 text-orange-400 shrink-0" /> Unified SEO, Ads & Web squad</li>
                  <li className="flex gap-3 text-sm font-medium text-blue-100"><Check className="w-5 h-5 text-orange-400 shrink-0" /> Director-level execution only</li>
                  <li className="flex gap-3 text-sm font-medium text-blue-100"><Check className="w-5 h-5 text-orange-400 shrink-0" /> Pure data-driven ROI focus</li>
                </ul>
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
