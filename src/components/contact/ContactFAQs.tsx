"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How soon do you respond to inquiries?",
    a: "We review and respond to all inquiries within 2 hours during standard business hours. For urgent requests, please contact us via WhatsApp."
  },
  {
    q: "Do you offer a free initial consultation?",
    a: "Yes. We offer a no-obligation 30-minute strategy call. We'll audit your current digital presence and offer immediate, actionable insights."
  },
  {
    q: "Which locations do you serve?",
    a: "While our physical headquarters is in Lucknow (UP), we work with clients nationwide across India and internationally, managing high-performance remote campaigns."
  },
  {
    q: "Will I deal with an intern or a senior strategist?",
    a: "At TopRank, we don't believe in the 'bait and switch'. From the first sales call to the monthly reporting, you communicate directly with the senior strategist managing your account."
  },
  {
    q: "How does your pricing work?",
    a: "We offer customized quotes based on your specific growth goals. We emphasize transparent, ROI-focused pricing without hidden fees or surprise retainer hikes."
  }
];

export function ContactFAQs() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] rounded-md mb-6">
              Clear Answers
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-500 shadow-md bg-blue-50/10' : 'border-slate-200 bg-white hover:border-blue-200'}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-slate-600 font-medium leading-relaxed border-t border-slate-100/50 mt-2">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
