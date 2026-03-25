"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export function TeamSection() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] rounded-md mb-6">
            Leadership
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Meet the Strategist Behind Your <span className="text-blue-600">Next Big Win</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            At TopRank, you aren't handed off to junior account managers. You work directly with proven veterans who have scaled multiple 7-figure campaigns.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 max-w-4xl mx-auto">
          {/* Founder Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2 relative"
          >
             <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative rounded-[2.5rem] overflow-hidden bg-slate-200 border border-slate-300/50 shadow-2xl group">
               <Image 
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                 alt="Founder Portrait"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
               />
               <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0 z-10" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
               
               {/* Floating Badge */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-3xl border border-white/60 shadow-xl z-20 flex justify-between items-center group-hover:-translate-y-2 transition-transform duration-500">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Aryan Singh</h3>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-0.5">Founder & Lead Strategist</p>
                  </div>
                  <a href="#" className="w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shrink-0 hover:scale-110 transition-transform shadow-lg shadow-[#0A66C2]/30">
                    <Linkedin className="w-5 h-5 fill-current" />
                  </a>
               </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2"
          >
             <h3 className="text-2xl font-bold text-slate-900 mb-4">"Marketing isn't magic. It's math, execution, and relentless iteration."</h3>
             <p className="text-slate-600 font-medium leading-relaxed mb-6">
               After seeing countless businesses burn cash on agencies that delivered "brand awareness" instead of actual paying customers, I founded TopRank to change the standard.
             </p>
             <p className="text-slate-600 font-medium leading-relaxed mb-8">
               My focus is entirely on engineering predictable acquisition systems. Whether you're a local clinic in Lucknow or a nationwide e-commerce brand, if we partner together, our only metric of success is your bottom-line revenue growth.
             </p>

             <div className="space-y-4">
               {[
                 "10+ Years Digital Strategy",
                 "Managed ₹50M+ in Ad Spend",
                 "Certified Google & Meta Partner"
               ].map((cert, idx) => (
                 <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="font-bold text-slate-700">{cert}</span>
                 </div>
               ))}
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
