"use client";

import { motion } from "framer-motion";
import { MapPin, Building, Navigation } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-50 text-rose-600 font-bold text-[10px] uppercase tracking-[0.2em] rounded-md mb-6">
              Our Base
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Headquartered in <span className="text-rose-600">Lucknow</span>, Empowered by <span className="text-rose-600">Chandigarh</span>.
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 max-w-lg">
              We provide an unfair advantage to businesses across Uttar Pradesh and Punjab, while managing high-growth national campaigns from our multi-city hubs.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {/* Lucknow HQ */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 blur-2xl rounded-full" />
                 <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <Building className="w-5 h-5 text-slate-600" />
                   TopRank HQ - Lucknow
                 </h3>
                 <div className="flex items-start gap-3">
                   <MapPin className="w-5 h-5 text-rose-500 mt-1 shrink-0" />
                   <p className="text-slate-600 font-medium text-sm leading-relaxed">
                     A42/32, Sulabh Awas, Sector 01,<br />
                     Gomti Nagar, Lucknow, UP 226010
                   </p>
                 </div>
              </div>

              {/* Chandigarh Branch */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full" />
                 <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <Building className="w-5 h-5 text-slate-600" />
                   Branch Office - Chandigarh
                 </h3>
                 <div className="flex items-start gap-3">
                   <MapPin className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                   <p className="text-slate-600 font-medium text-sm leading-relaxed">
                     Shop No 8, Sector 34B,<br />
                     Chandigarh, 160034
                   </p>
                 </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Serving Nearby Areas Instantly</p>
              <div className="flex flex-wrap gap-2">
                {["Gomti Nagar", "Kanpur", "Varanasi", "Prayagraj", "Noida", "Delhi NCR"].map((city, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600">{city}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9, y: 50, filter: 'blur(10px)' }}
             whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
             className="w-full h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl relative"
          >
             {/* Use dynamic dual-map embed based on Chandigarh to show branch expansion, or just the Lucknow one from before */}
             <iframe 
               src="https://maps.google.com/maps?q=TopRank%20Digital%20Service,%20Lucknow&t=&z=11&ie=UTF8&iwloc=&output=embed" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0 z-0"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none border-[6px] border-white/20 rounded-[2.5rem] z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
