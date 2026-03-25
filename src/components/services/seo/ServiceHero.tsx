"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, TrendingDown, Target, Search, MessageSquareText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceHeroProps {
  locationName?: string;
  serviceTitle?: string;
}

export function ServiceHero({ locationName = "Lucknow", serviceTitle = "#1 SEO Company in Lucknow" }: ServiceHeroProps) {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Background patterns */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Hero Section (Intent Capture Layer) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
              <Star className="w-3.5 h-3.5 fill-blue-400" />
              100+ Businesses Served in Lucknow & Beyond
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-white leading-[1.05] tracking-tight mb-6">
              {serviceTitle}. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-500 animate-gradient-x">
                Rank Higher. Get Leads.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-8">
              We leverage advanced, data-driven SEO strategies to dominate Google search results, outrank your competitors, and convert organic traffic into paying customers.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Get a Free SEO Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="https://wa.me/919305030523" className="w-full sm:w-auto px-8 py-4 bg-orange-600/10 hover:bg-orange-600/20 text-orange-400 border border-orange-500/30 font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
                <MessageSquareText className="w-5 h-5" /> WhatsApp Us
              </Link>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-slate-400 text-sm font-medium">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-950 overflow-hidden relative">
                      <Image src={`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop&crop=face`} fill alt="Client" className="object-cover" />
                    </div>
                 ))}
               </div>
               <p>Trusted by local & national brands.</p>
            </div>
          </motion.div>

          {/* 2. Pain Point Hook (User Psychology Section) */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative lg:ml-auto w-full max-w-lg"
          >
             <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 blur-[50px] rounded-full" />
                
                <h3 className="text-2xl font-black text-white mb-8 leading-tight">Reality Check.<br/> Are you facing this?</h3>
                
                <div className="space-y-6 mb-8 relative z-10">
                  <div className="flex gap-4">
                     <div className="mt-1 w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
                       <TrendingDown className="w-5 h-5 text-rose-500" />
                     </div>
                     <div>
                       <p className="text-white font-bold text-lg mb-1">Not getting enough leads?</p>
                       <p className="text-slate-400 text-sm leading-relaxed">Traffic exists, but it's not converting into actionable sales inquiries.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="mt-1 w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
                       <Search className="w-5 h-5 text-rose-500" />
                     </div>
                     <div>
                       <p className="text-white font-bold text-lg mb-1">Website is invisible on Google?</p>
                       <p className="text-slate-400 text-sm leading-relaxed">Customers search for your service, but find someone else.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="mt-1 w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
                       <Target className="w-5 h-5 text-rose-500" />
                     </div>
                     <div>
                       <p className="text-white font-bold text-lg mb-1">Competitors outranking you?</p>
                       <p className="text-slate-400 text-sm leading-relaxed">Competitors with worse products are stealing your exact market share.</p>
                     </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 relative z-10">
                   <p className="text-blue-400 font-black mb-2 flex items-center gap-2">
                     <Star className="w-5 h-5 fill-blue-400" />
                     The Solution
                   </p>
                    <p className="text-white text-sm leading-relaxed">
                      Our <span className="text-blue-300 font-bold">{serviceTitle}</span> solve this completely. We engineer your website to dominate the first page for high-intent keywords in {locationName}.
                    </p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
