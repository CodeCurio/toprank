"use client";

import { motion } from "framer-motion";
import { Search, Settings, MapPin, BarChart3, Globe } from "lucide-react";

interface ServiceDetailsProps {
  locationName?: string;
}

export function ServiceDetails({ locationName = "Lucknow" }: ServiceDetailsProps) {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3. Service Overview (Entity + Context Section) */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8">
              What is <span className="text-blue-600">Advanced SEO?</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Search Engine Optimization (SEO) is not just about sprinkling keywords. It is the hardcore engineering of organic traffic through topical authority, solid technical infrastructure, and local relevance. Whether you're a local business in {locationName} or a national B2B brand, our SEO campaigns are designed exclusively to generate high-quality, high-intent leads that actually convert.
            </p>
          </motion.div>
        </div>

        {/* 4. Benefits (Outcome-Focused Section) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Dominate High-Converting Keywords",
              desc: "Stop ranking for useless vanity terms. We target transactional keywords that indicate extremely high buyer intent, meaning the traffic you get directly translates into revenue."
            },
            {
              title: "Establish Topical Authority",
              desc: "We build out deep semantic content hubs that signal to Google you are the definitive expert in your industry within the Lucknow market and scaling across the entire nation."
            },
            {
              title: "Long-Term Compounding Growth",
              desc: "Unlike paid search campaigns that stop the second you pause billing, our SEO assets continue to compound, driving free, sustainable organic leads month after month."
            }
          ].map((benefit, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' }}
               whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
               className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
             >
               <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 blur-3xl rounded-full transition-transform group-hover:scale-150 duration-700" />
               <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug break-words">{benefit.title}</h3>
               <p className="text-slate-600 leading-relaxed text-sm font-medium">{benefit.desc}</p>
             </motion.div>
          ))}
        </div>

        {/* 5. Detailed Service Breakdown (Topical Authority Section) */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="bg-slate-900 rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_60%)] pointer-events-none" />
          
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Complete SEO Infrastructure.</h2>
            <p className="text-slate-400 font-medium text-lg leading-relaxed">We execute a comprehensive 360° methodology to ensure every ranking signal is perfectly optimized. No shortcuts. Just robust, algorithmic growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {/* Subsection 1 */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:bg-slate-800/60 transition-colors">
               <Search className="w-8 h-8 text-blue-400 mb-6" />
               <h3 className="text-xl font-bold text-white mb-4">Keyword Intelligence</h3>
               <p className="text-slate-400 text-sm leading-relaxed">We don't guess. We utilize industry-grade tools to reverse-engineer your competitors' strategies and pinpoint the exact search intents that your audience in {locationName} is actively using to find your services.</p>
            </div>

            {/* Subsection 2 */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:bg-slate-800/60 transition-colors">
               <Globe className="w-8 h-8 text-indigo-400 mb-6" />
               <h3 className="text-xl font-bold text-white mb-4">On-Page Semantic SEO</h3>
               <p className="text-slate-400 text-sm leading-relaxed">We optimize your exact HTML structure—H1s, meta tags, schema markup, and images. We restructure your copy to build a high-relevance semantic web that Google's NLP algorithms perfectly understand and prioritize.</p>
            </div>

            {/* Subsection 3 */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:bg-slate-800/60 transition-colors">
               <Settings className="w-8 h-8 text-purple-400 mb-6" />
               <h3 className="text-xl font-bold text-white mb-4">Technical SEO Diagnostics</h3>
               <p className="text-slate-400 text-sm leading-relaxed">A slow, broken site will never rank. We fix Core Web Vitals, implement dynamic XML sitemaps, resolve indexation bloat, and ensure mobile-first rendering so your website passes every Google technical threshold.</p>
            </div>

            {/* Subsection 4 */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl hover:bg-slate-800/60 transition-colors">
               <MapPin className="w-8 h-8 text-rose-400 mb-6" />
               <h3 className="text-xl font-bold text-white mb-4">Local SEO (GMB Mastery)</h3>
               <p className="text-slate-400 text-sm leading-relaxed">For businesses in {locationName}, the local map pack is your goldmine. We strictly optimize your Google My Business profile, build localized citations, and generate geo-relevant backlinks to dominate "near me" searches.</p>
            </div>

            {/* Subsection 5 */}
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl lg:col-span-2 hover:bg-slate-800/60 transition-colors">
               <BarChart3 className="w-8 h-8 text-orange-400 mb-6" />
               <h3 className="text-xl font-bold text-white mb-4">Transparent ROI Reporting</h3>
               <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">You will never be left in the dark. Every single month, we deliver a comprehensive dashboard tracking keyword movements, organic traffic surges, and exact conversion metrics. You see precisely how our SEO efforts are impacting your bottom-line revenue and fueling your business growth trajectory.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
