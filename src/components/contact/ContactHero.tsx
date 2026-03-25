"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950 text-white flex items-center">
      {/* Absolute Background Orbs for Premium Vibe */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] will-change-transform" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.15)_0%,transparent_70%)] will-change-transform" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6"
            >
              Contact TopRank – <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Digital Marketing in Lucknow
              </span>
            </motion.h1>

            {/* Subheadline (Above-the-Fold Summary) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 font-medium"
            >
              Ready to engineer your growth? Skip the generic pitches. Speak directly with a strategist who understands local domination and national scaling.
            </motion.p>

            {/* CTAs */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 relative z-20"
            >
              <a href="tel:+919305030523" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/30 active:scale-95">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a href="https://wa.me/919305030523" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BE5A] text-white rounded-xl text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-[#25D366]/30 active:scale-95">
                WhatsApp Us
              </a>
            </motion.div>
          </div>

          {/* Quick NAP Block (Contact Info) embedded in Hero for rapid mobile access */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-lg mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />
             
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
               <span className="w-2 h-6 bg-blue-500 rounded-full inline-block" /> TopRank Digital Service HQ
             </h3>

             <div className="space-y-6">
                <a href="tel:+919305030523" className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Call Directly</p>
                    <p className="text-lg font-black text-white tracking-tight">+91 93050 30523</p>
                  </div>
                </a>

                <a href="mailto:connect@toprankindia.com" className="flex items-center gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-lg font-black text-white tracking-tight">connect@toprankindia.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 border-t border-white/10 mt-2 pt-6">
                  <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Working Hours</p>
                    <p className="text-lg font-bold text-white tracking-tight">Monday - Sunday</p>
                    <p className="text-sm font-semibold text-orange-400">24x7 Available</p>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
