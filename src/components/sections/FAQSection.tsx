"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus, ThumbsUp, ThumbsDown, ArrowRight, TrendingUp, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  {
    id: 1,
    q: "What digital marketing services does TopRank Digital Service offer?",
    a: "We provide complete digital growth solutions including website development, SEO, Google Business Profile (local SEO), and social media marketing. Each service is designed to work together — so your business not only gets visibility but also consistent leads.",
    microProof: "Companies using our integrated approach see up to 3x more qualified leads.",
    related: 9,
  },
  {
    id: 2,
    q: "How does SEO help my local business grow?",
    a: "SEO helps your business appear when customers search for your services on Google. With the right strategy, you can rank higher in your area, attract high-intent visitors, and convert them into enquiries or calls.",
    microProof: "Example: A local business improved from page 3 to top 3 results in 60 days.",
    related: 4,
  },
  {
    id: 3,
    q: "What is Google Business Profile (GMB) optimization and why is it important?",
    a: "Google Business Profile optimization improves your visibility in local search results and Google Maps. It helps your business show up for “near me” searches, increases calls, and builds trust with reviews and accurate information.",
    microProof: "GMB optimization is directly responsible for 80% of local 'Near Me' map conversions.",
    related: 7,
  },
  {
    id: 4,
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term strategy. Most businesses start seeing noticeable improvements in 6–12 weeks, with stronger and more stable results over time as rankings improve and competition is outranked.",
    microProof: "Our clients often see a 40% drop in cost-per-acquisition by Month 6.",
    related: 2,
  },
  {
    id: 5,
    q: "Do I need a website if I already have social media pages?",
    a: "Yes. Social media builds awareness, but a website gives you full control, credibility, and a conversion-focused platform where visitors can learn, trust, and take action.",
    microProof: "84% of consumers believe a business with a website is more credible.",
    related: 1,
  },
  {
    id: 6,
    q: "How is TopRank different from other digital marketing agencies?",
    a: "We focus on outcomes, not just activity. Instead of chasing likes or traffic, we build systems that generate real enquiries, calls, and business growth using SEO, GMB, and conversion-focused design.",
    microProof: "We track 'Revenue' and 'Leads', not just 'Impressions'.",
    related: 10,
  },
  {
    id: 7,
    q: "Can you help my business rank in a specific city like Lucknow or Chandigarh?",
    a: "Yes. We specialize in local SEO strategies that target specific cities and areas, helping your business rank for location-based searches and attract nearby customers.",
    microProof: "We’ve successfully dominated competitive local keywords across Lucknow & Chandigarh.",
    related: 3,
  },
  {
    id: 8,
    q: "Is social media marketing really effective for lead generation?",
    a: "Yes, when done strategically. We create content and campaigns that not only engage users but also drive enquiries, build trust, and support your overall digital growth system.",
    microProof: "Strategic social targeting can reduce lead cost by up to 30%.",
    related: 1,
  },
  {
    id: 9,
    q: "Do you offer customized digital marketing plans?",
    a: "Absolutely. Every business is different, so we create custom strategies based on your goals, competition, and market — not one-size-fits-all packages.",
    microProof: "Tailored strategies historically deliver 50% better ROI than generic packages.",
    related: 6,
  },
  {
    id: 10,
    q: "How do I get started with TopRank Digital Service?",
    a: "You can start with a free growth audit, where we analyze your current online presence and show you exactly what needs to be improved to generate more leads.",
    microProof: "Our free audits have uncovered thousands in missed revenue for prospects.",
    related: 9,
  }
];

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [feedbackState, setFeedbackState] = useState<Record<number, 'up' | 'down'>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

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
    <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden" id="faq">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-100/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
               className="relative"
            >
              {/* Floating Trust Element */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-48 -left-4 lg:-left-12 bg-white p-5 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-100 hidden md:flex items-center gap-5 z-20 hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className="bg-blue-500 p-3 rounded-2xl text-white shadow-lg shadow-blue-500/30 group-hover:rotate-12 transition-transform">
                  <ThumbsUp className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] mb-1">Client Success</p>
                  <p className="text-lg font-black text-slate-900 leading-none">98% Satisfaction</p>
                </div>
              </motion.div>

              <div className="flex flex-col mb-12">
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-blue-600 font-black text-[11px] uppercase tracking-[0.4em] mb-5 flex items-center gap-4"
                >
                   <div className="w-12 h-px bg-blue-600/30" /> STRATEGIC ANSWERS
                </motion.div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter mb-10 relative z-10">
                  Got Questions? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-500">
                    We Have Strategy.
                  </span>
                </h2>
                <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed relative z-10 max-w-sm border-l-4 border-slate-100 pl-6 py-2">
                  Everything you need to know about how TopRank accelerates your business growth and dominates local search results.
                </p>
              </div>

              {/* Trust Indicators - Customer Avatars */}
              <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-200 relative z-10">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <Image key={i} src={`https://i.pravatar.cc/150?img=${i + 15}`} alt="Client" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white shadow-sm relative hover:z-10 transition-transform hover:scale-110 object-cover" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-slate-100 flex items-center justify-center text-[11px] font-black text-slate-600 relative hover:z-10 transition-transform hover:scale-110">
                    +100
                  </div>
                </div>
                <div className="text-sm">
                  <span className="flex items-center text-amber-500 font-black gap-1"><Star className="w-3.5 h-3.5 fill-amber-500"/> 4.9/5</span>
                  <span className="text-slate-500 font-semibold text-xs uppercase tracking-wider">Trusted by founders</span>
                </div>
              </div>
              
              {/* Premium Scarcity CTA Card */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 bg-slate-950 rounded-3xl border border-slate-800 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] overflow-hidden group"
              >
                {/* Abstract Glowing Orbs in Card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-[40px] group-hover:bg-blue-500/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-600/20 rounded-full blur-[40px] group-hover:bg-pink-500/30 transition-colors duration-500" />
                
                {/* Content */}
                <h4 className="font-bold text-white text-xl mb-3 relative z-10">Still have questions?</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed relative z-10">
                  Stop guessing. Let's build a personalized, highly-actionable growth roadmap perfectly mapped out for your specific market.
                </p>
                
                {/* Urgency Indicator */}
                <div className="flex items-center gap-2 mb-6 relative z-10 bg-white/5 py-2 px-3 rounded-lg border border-white/5 inline-flex w-max">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                  </span>
                  <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest">Only 2 audits left this week</span>
                </div>

                <Link 
                  href="#contact"
                  className="w-full py-4 px-6 bg-white hover:bg-slate-50 text-slate-900 font-black text-center rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 relative z-10 group/btn"
                >
                  Claim Free Audit 
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isExpanded = expandedId === faq.id;
                
                return (
                  <motion.div
                    key={faq.id}
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isExpanded 
                        ? "border-blue-200 shadow-xl shadow-blue-900/5" 
                        : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => handleToggle(faq.id)}
                      className="w-full text-left px-6 py-6 md:px-8 flex items-center justify-between gap-6 focus:outline-none"
                    >
                      <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isExpanded ? "text-blue-600" : "text-slate-900"}`}>
                        {faq.q}
                      </h3>
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isExpanded ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`}>
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
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-8 md:px-8 pt-2">
                             {/* Brand Divider */}
                             <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-8" />
                            
                            {/* Main Answer Text */}
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                              {faq.a}
                            </p>

                            {/* Micro Proof (Trust Signal) */}
                            <div className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-xl border-l-4 border-blue-500 mb-8">
                              <TrendingUp className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                              <p className="text-sm font-semibold text-slate-800">
                                <span className="text-blue-700 mr-1">Proof:</span> 
                                {faq.microProof}
                              </p>
                            </div>

                            {/* Bottom Interactive Area */}
                            <div className="pt-8 relative">
                               <div className="absolute top-0 left-0 w-full h-px bg-slate-100" />
                               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-2">
                              
                              {/* Engagement Feedback UX */}
                              <div className="flex items-center gap-3">
                                <span className="text-sm font-medium text-slate-500">Was this helpful?</span>
                                <div className="flex items-center gap-2">
                                  <button 
                                    onClick={(e) => handleFeedback(faq.id, 'up', e)}
                                    className={`p-2 rounded-full transition-all ${
                                      feedbackState[faq.id] === 'up' 
                                        ? 'bg-blue-100 text-blue-600' 
                                        : 'bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-blue-500'
                                    }`}
                                  >
                                    <ThumbsUp className="w-4 h-4" />
                                  </button>
                                  <button 
                                    onClick={(e) => handleFeedback(faq.id, 'down', e)}
                                    className={`p-2 rounded-full transition-all ${
                                      feedbackState[faq.id] === 'down' 
                                        ? 'bg-red-100 text-red-600' 
                                        : 'bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-red-500'
                                    }`}
                                  >
                                    <ThumbsDown className="w-4 h-4" />
                                  </button>
                                </div>
                                {feedbackState[faq.id] && (
                                  <motion.span 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-xs font-bold text-slate-700 flex items-center gap-1"
                                  >
                                    <CheckCircle2 className="w-3 h-3 text-blue-500" /> Feedback sent
                                  </motion.span>
                                )}
                              </div>

                              {/* Auto Related Suggestion */}
                              {relatedFaq && (
                                <button 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggle(relatedFaq.id);
                                    // Optional: Scroll to that element logic can go here.
                                  }}
                                  className="group flex items-center gap-2 text-sm text-left bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 pl-3 pr-4 py-2 rounded-full transition-all max-w-[280px]"
                                >
                                  <span className="shrink-0 w-5 h-5 rounded-full bg-slate-200 group-hover:bg-blue-200 flex items-center justify-center text-slate-500 group-hover:text-blue-600">
                                    <span className="text-[10px] font-black">?</span>
                                  </span>
                                  <span className="truncate text-slate-600 group-hover:text-blue-700 font-medium">
                                    {relatedFaq.q}
                                  </span>
                                </button>
                              )}

                             </div>
                           </div>
                          </div> {/* Added missing closing div for the "px-6 pb-8 md:px-8 pt-2" div */}
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
