"use client";

import { motion } from "framer-motion";
import { Check, X, TrendingUp, Calendar, AlertCircle } from "lucide-react";

interface ServiceProofProps {
  locationName?: string;
}

export function ServiceProof({ locationName = "Lucknow" }: ServiceProofProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 6. Process (Trust + Clarity Section) */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Our Execution <span className="text-blue-600">Timeline.</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">No guesswork. We follow a strict operational timeline that guarantees predictable growth and complete transparency.</p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[120px] left-0 right-0 h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-indigo-100 -z-10" />

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-blue-600 font-black text-xl">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Week 1: The Audit</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">We dismantle your current presence. We run advanced crawls to find toxic backlinks, technical errors, and keyword gaps that are currently suppressing your website.</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-indigo-600 font-black text-xl">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Weeks 2-3: The Fix</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">We deploy rapid architectural optimizations. This includes fixing Core Web Vitals, restructuring internal linking, and optimizing high-priority commercial landing pages.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-blue-600 text-white rounded-3xl p-8 relative shadow-2xl shadow-blue-600/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner text-white font-black text-xl">3</div>
              <h3 className="text-xl font-bold mb-2">Month 2+: Growth Phase</h3>
              <p className="text-blue-100 text-sm font-medium leading-relaxed">We shift to offensive strategy—aggressively acquiring high-authority backlinks, publishing hyper-relevant semantic content, and continuously tuning for algorithm updates.</p>
            </motion.div>
          </div>
        </div>

        {/* 7. Results / Case Studies (Proof Engine) */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4"
            >
              Real Ranking <span className="text-blue-600">Transformations.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} className="bg-white border border-slate-200 p-8 lg:p-10 rounded-3xl shadow-lg relative overflow-hidden group">
               <div className="mb-6">
                 <span className="px-3 py-1 bg-pink-50 text-pink-600 text-xs font-bold uppercase tracking-widest rounded-full border border-pink-200">Local Healthcare Clinic</span>
               </div>
               <div className="grid grid-cols-2 gap-6 mb-8">
                 <div>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">The Problem</p>
                   <p className="text-slate-900 font-medium">Stagnant local traffic. Invisible on Google Maps for "doctor near me".</p>
                 </div>
                 <div>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Our Solution</p>
                   <p className="text-slate-900 font-medium">Aggressive GMB optimization + Local citation building campaign.</p>
                 </div>
               </div>
               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 group-hover:bg-blue-50 transition-colors">
                  <p className="text-blue-600 text-3xl font-black mb-1">+145% Leads</p>
                  <p className="text-slate-600 text-sm font-medium">Increase in verified organic phone calls within 90 days.</p>
               </div>
            </motion.div>
            
            {/* Case Study 2 */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} className="bg-slate-900 text-white border border-slate-800 p-8 lg:p-10 rounded-3xl shadow-xl relative overflow-hidden group">
               <div className="mb-6">
                 <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-500/30">National B2B SaaS</span>
               </div>
               <div className="grid grid-cols-2 gap-6 mb-8">
                 <div>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">The Problem</p>
                   <p className="text-slate-300 font-medium">High competition. Competitors stealing enterprise keywords.</p>
                 </div>
                 <div>
                   <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Our Solution</p>
                   <p className="text-slate-300 font-medium">Deep content hubs + High-DR digital PR backlinks.</p>
                 </div>
               </div>
               <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 group-hover:bg-blue-900/40 transition-colors">
                  <p className="text-blue-400 text-3xl font-black mb-1">+210% Traffic</p>
                  <p className="text-slate-400 text-sm font-medium">Non-branded organic traffic growth in 6 months.</p>
               </div>
            </motion.div>
          </div>
        </div>

        {/* 9. Comparison Section (High Conversion Trick) */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Stop Paying For <span className="text-rose-500">Mediocrity.</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium">Why TopRank is the smartest investment for your business.</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="overflow-x-auto pb-8">
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200">Features</th>
                  <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 bg-slate-50 rounded-tl-2xl">DIY SEO / Hacks</th>
                  <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 bg-slate-50">Local Freelancer</th>
                  <th className="p-6 text-sm font-bold text-blue-600 uppercase tracking-widest border-b-2 border-blue-500 bg-blue-50 rounded-tr-2xl">TopRank Agency</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 font-medium">
                {[
                  { feature: "Data-Driven Keyword Strategy", diy: false, free: true, tr: true },
                  { feature: "Technical Site Architecture", diy: false, free: false, tr: true },
                  { feature: "High-DR Backlink Acquisition", diy: false, free: false, tr: true },
                  { feature: "Algorithmic Update Defense", diy: false, free: false, tr: true },
                  { feature: "Transparent ROI Reporting", diy: false, free: true, tr: true },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 border-b border-slate-100">{row.feature}</td>
                    <td className="p-6 border-b border-slate-100 bg-slate-50/50 text-center">
                      {row.diy ? <Check className="w-5 h-5 text-blue-500 mx-auto" /> : <X className="w-5 h-5 text-rose-300 mx-auto" />}
                    </td>
                    <td className="p-6 border-b border-slate-100 bg-slate-50/50 text-center">
                      {row.free ? <Check className="w-5 h-5 text-blue-500 mx-auto" /> : <X className="w-5 h-5 text-rose-300 mx-auto" />}
                    </td>
                    <td className="p-6 border-b border-slate-100 bg-blue-50/30 text-center relative">
                      {row.tr && <Check className="w-6 h-6 text-blue-600 mx-auto drop-shadow-sm" />}
                      {i === 4 && <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* 10. Why Choose Us (Differentiation Layer) */}
        <div>
           <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden">
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-black mb-8 leading-[1.1]">Why 100+ Brands <br/>Trust Us.</h2>
               <div className="space-y-6">
                 <div className="flex gap-4 items-start">
                   <div className="bg-blue-500/20 p-3 rounded-xl"><TrendingUp className="w-6 h-6 text-blue-400" /></div>
                   <div>
                     <h3 className="font-bold text-lg mb-1">Data Over Guesses</h3>
                     <p className="text-slate-400 text-sm leading-relaxed">We don't rely on luck. Our strategies are forged from live data pulled from successful campaigns across 100+ clients.</p>
                   </div>
                 </div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-rose-500/20 p-3 rounded-xl"><AlertCircle className="w-6 h-6 text-rose-400" /></div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Local Market Supremacy</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">Headquartered in Lucknow with active operations in {locationName}, we intimately understand the local search behavior, giving you a definitive edge over remote agencies.</p>
                    </div>
                  </div>
                 <div className="flex gap-4 items-start">
                   <div className="bg-orange-500/20 p-3 rounded-xl"><Calendar className="w-6 h-6 text-orange-400" /></div>
                   <div>
                     <h3 className="font-bold text-lg mb-1">No Lock-in Contracts</h3>
                     <p className="text-slate-400 text-sm leading-relaxed">We retain clients through exceptional results, not legal bindings. You stay with us because your revenue is growing.</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="relative z-10 hidden md:block">
               <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full point-events-none" />
               {/* Decorative Graphic */}
               <div className="aspect-square border border-slate-700/50 rounded-full relative animate-[spin_40s_linear_infinite] ml-auto w-3/4">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 border border-slate-600 w-16 h-16 rounded-2xl flex items-center justify-center rotate-45 shadow-2xl">
                   <span className="font-black text-blue-400 -rotate-45">SEO</span>
                 </div>
                 <div className="absolute bottom-0 right-1/4 bg-slate-800 border border-slate-600 w-12 h-12 rounded-full" />
                 <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-slate-800 border border-slate-600 w-10 h-10 rounded-full" />
               </div>
             </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
}
