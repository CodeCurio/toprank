"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus, ThumbsUp, ThumbsDown, ArrowRight, TrendingUp, CheckCircle2, Star, HelpCircle, ShieldCheck, Clock, PhoneCall, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getFaqs = (location?: string) => {
  const isLucknow = location?.toLowerCase() === "lucknow";
  
  return [
    {
      id: 1,
      q: "Kitne din me mere paas actual phone calls aur enquiries aana shuru hongi?",
      a: "Instant leads ke liye hum Day 1 se high-intent Google Search & Paid Ads setup karte hain jisse pehle 48-72 ghante me phone calls aana shuru ho jati hain. Meanwhile, Local SEO aur Google Maps (GMB 3-Pack) ranking 30 se 60 din me permanent organic lead flow build kar deti hai.",
      microProof: "Paid Ads = Instant leads in 48 hrs | Local SEO = Long-term #1 Google Maps ranking.",
      badge: "TIMELINE & SPEED",
      icon: Clock,
      related: 2,
    },
    {
      id: 2,
      q: "Mera business pehle se online hai (website/GMB) par leads zero hain — aap kya change karoge?",
      a: "90% local websites design me achhi hoti hain par conversion architecture zero hota hai. Hum sabse pehle aapka lead funnel audit karte hain: page load speed (sub-second Next.js), WhatsApp 1-click booking bot, local GMB keyword citations, aur high-intent call buttons lagate hain jisse aane wala har visitor client bane.",
      microProof: "Conversion audit ke baad humare active clients ka lead conversion rate 3x badha hai.",
      badge: "AUDIT & FIX",
      icon: ShieldCheck,
      related: 3,
    },
    {
      id: 3,
      q: "Kya TopRank Diagnostics Centers, Pathology Labs & Medical Clinics ke liye special strategy chalta hai?",
      a: "Haan! Diagnostics & Healthcare humari primary core domain hai. Hum Pathlabs aur Diagnostic Centers ke liye specialized 'Home Collection Booking Funnels', Local Pathology GMB SEO, aur Doctor/Patient Trust Systems engineer karte hain jisse daily lab test inquiries milti hain.",
      microProof: "Agilus & Atulaya Healthcare franchises ke liye 180+ monthly lab test leads generated.",
      badge: "HEALTHCARE SPECIALTY",
      icon: TrendingUp,
      related: 4,
    },
    {
      id: 4,
      q: "Kya hum TopRank ki team se Lucknow, Chandigarh ya Mohali office me face-to-face mil sakte hain?",
      a: "Bilkul! Humara Main Headquarter Lucknow (Hazratganj/Gomti Nagar) me hai, aur Regional Offices Chandigarh & Mohali me hain. Aap directly office aakar humare SEO engineers aur performance marketers se milkar apni business growth strategy discuss kar sakte hain.",
      microProof: "Physical offices in Lucknow (HQ), Chandigarh & Mohali for direct face-to-face meetings.",
      badge: "OFFICE MEETINGS",
      icon: Building2,
      related: 5,
    },
    {
      id: 5,
      q: "Hum non-technical hain — hume kaise pata chalega ki mera marketing budget sahi jagah lag raha hai?",
      a: "Hum aapko complex reports ke bajaye aasan Live WhatsApp & Dashboard updates dete hain. Aapko daily dikhta hai ki kitne logon ne call kiya, kitne WhatsApp messages aaye, aur kitna budget spend hua. Sab kuch 100% transparent hota hai.",
      microProof: "Zero technical jargon. Pure daily calls, WhatsApp inquiries & ROAS tracking.",
      badge: "TRANSPARENCY",
      icon: PhoneCall,
      related: 6,
    },
    {
      id: 6,
      q: "Kya koi long-term lock-in contract hota hai ya hum month-to-month chal sakte hain?",
      a: "Hum kisi business owner ko kisi rigid yearly contract me force nahi karte. Hum month-to-month performance basis par kaam karte hain. Humara focus hota hai ki pehle 30 din me hi aapko itna ROI dikhe ki aap khud long-term partner bano.",
      microProof: "No forced lock-in. Flexible performance-driven monthly retainers.",
      badge: "FLEXIBLE CONTRACT",
      icon: CheckCircle2,
      related: 1,
    },
  ];
};

export function FAQSection({ location }: { location?: string }) {
  const faqs = getFaqs(location);
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [feedbackState, setFeedbackState] = useState<Record<number, 'up' | 'down'>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Generate JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const handleToggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleFeedback = (id: number, type: 'up' | 'down', e: React.MouseEvent) => {
    e.stopPropagation();
    setFeedbackState((prev) => ({ ...prev, [id]: type }));
  };

  const activeFaq = faqs.find((f) => f.id === expandedId);
  const relatedFaq = activeFaq ? faqs.find((f) => f.id === activeFaq.related) : null;

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-slate-50 overflow-hidden" id="faq">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column - Sticky Header & Direct Audit Call */}
          <div className="lg:w-1/3 lg:sticky lg:top-28 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-slate-800 text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-sm">
                <HelpCircle className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                Real Business Answers
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
                Clear Answers For <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
                  Business Owners.
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-6 border-l-4 border-blue-500 pl-4 py-1">
                No textbook marketing jargon. Here are exact answers to what business owners ask before hiring TopRank.
              </p>

              {/* Trust Indicators */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-200">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Image key={i} src={`https://i.pravatar.cc/150?img=${i + 15}`} alt="Client" width={36} height={36} className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover" />
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-600">
                    +100
                  </div>
                </div>
                <div>
                  <div className="flex items-center text-amber-500 font-black text-xs gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500"/> 4.9 / 5 Google Rating
                  </div>
                  <span className="text-slate-500 font-semibold text-[11px]">Direct Client Transparency</span>
                </div>
              </div>
              
              {/* Audit Card */}
              <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                
                <h4 className="font-black text-white text-lg mb-2">Have A Specific Question?</h4>
                <p className="text-slate-300 text-xs leading-relaxed font-medium mb-5">
                  Talk directly with our growth strategists. Get a free digital audit for your business within 24 hours.
                </p>

                <Link 
                  href="#contact"
                  className="w-full py-3.5 px-5 bg-white hover:bg-slate-100 text-slate-900 font-black text-xs uppercase tracking-widest text-center rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group/btn active:scale-95"
                >
                  <span>Get Free Audit & Strategy Call</span> 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column - High-Intent Business Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isExpanded = expandedId === faq.id;
                const IconComp = faq.icon;
                
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 relative ${
                      isExpanded 
                        ? "border-blue-300 shadow-lg" 
                        : "border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    {/* Top Gradient Bar when expanded */}
                    {isExpanded && (
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600" />
                    )}

                    {/* Question Header */}
                    <button
                      onClick={() => handleToggle(faq.id)}
                      className="w-full text-left px-6 py-5 sm:px-7 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isExpanded ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h3 className={`text-base sm:text-lg font-black transition-colors duration-300 ${isExpanded ? "text-blue-600" : "text-slate-900"}`}>
                          {faq.q}
                        </h3>
                      </div>
                      <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors duration-300 ${isExpanded ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </motion.div>
                      </div>
                    </button>

                    {/* Answer & Expanded Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 sm:px-7 pt-1">
                            <div className="h-px w-full bg-slate-100 mb-4" />
                            
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-4">
                              {faq.a}
                            </p>

                            {/* Micro Proof Box */}
                            <div className="flex items-start gap-3 bg-blue-50/80 p-3.5 rounded-xl border-l-4 border-blue-600 mb-5">
                              <TrendingUp className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              <p className="text-xs font-bold text-slate-800">
                                <span className="text-blue-700 mr-1">Key Takeaway:</span> 
                                {faq.microProof}
                              </p>
                            </div>

                            {/* Bottom Interactive Area */}
                            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-slate-500">Was this helpful?</span>
                                <div className="flex items-center gap-1.5">
                                  <button 
                                    onClick={(e) => handleFeedback(faq.id, 'up', e)}
                                    className={`p-1.5 rounded-lg transition-all ${
                                      feedbackState[faq.id] === 'up' 
                                        ? 'bg-blue-100 text-blue-600' 
                                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                    }`}
                                  >
                                    <ThumbsUp className="w-3.5 h-3.5" />
                                  </button>
                                  <button 
                                    onClick={(e) => handleFeedback(faq.id, 'down', e)}
                                    className={`p-1.5 rounded-lg transition-all ${
                                      feedbackState[faq.id] === 'down' 
                                        ? 'bg-red-100 text-red-600' 
                                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                                    }`}
                                  >
                                    <ThumbsDown className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                                {feedbackState[faq.id] && (
                                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 ml-2">
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Feedback saved
                                  </span>
                                )}
                              </div>

                              {relatedFaq && (
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggle(relatedFaq.id);
                                  }}
                                  className="group flex items-center gap-2 text-xs text-left bg-slate-50 hover:bg-blue-50 border border-slate-200 px-3 py-1.5 rounded-full transition-all"
                                >
                                  <span className="font-bold text-slate-500 group-hover:text-blue-600">Next question:</span>
                                  <span className="truncate text-slate-700 font-bold group-hover:text-blue-600 max-w-[200px]">
                                    {relatedFaq.q}
                                  </span>
                                </button>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
