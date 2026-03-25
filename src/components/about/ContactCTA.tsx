"use client";

import { motion } from "framer-motion";
import { AnimatedCTA } from "@/components/ui/animated-cta";

export function ContactCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] relative overflow-hidden"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px]" />
          
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Ready to Dominate Your Local Market?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Stop losing customers to competitors with inferior services but better SEO. Claim your consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedCTA text="Get a Free Proposal" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-slate-50" />
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-xl text-xs md:text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
