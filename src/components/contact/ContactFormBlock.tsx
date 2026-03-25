"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

export function ContactFormBlock() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] rounded-md mb-6">
              Skip The Queue
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Let's Engineer Your <span className="text-blue-600">Growth Plan</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
              Fill out the form to request a strategy session. We'll analyze your current digital presence and provide an actionable, no-obligation roadmap.
            </p>

            <div className="space-y-6">
               <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs border-b border-slate-200 pb-2 mb-4">Why Contact Us?</h3>
               {[
                 { title: "Rapid Strategy Development", desc: "Get a comprehensive growth plan within 48 hours." },
                 { title: "Free Initial Consultation", desc: "Speak with a senior strategist, not a sales rep." },
                 { title: "Transparent ROI Projections", desc: "Know exactly what to expect before you spend a dime." }
               ].map((point, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-0.5">{point.title}</p>
                      <p className="text-sm font-medium text-slate-500">{point.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl"
          >
             {success ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-20">
                 <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-blue-600/10">
                   <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-2">Request Received!</h3>
                 <p className="text-slate-600 font-medium max-w-sm">We'll analyze your details and get back to you within 24 hours to schedule your strategy session.</p>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                     <div className="relative">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                         <User className="h-5 w-5" />
                       </div>
                       <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="John Doe" />
                     </div>
                   </div>

                   <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone Number *</label>
                     <div className="relative">
                       <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                         <Phone className="h-5 w-5" />
                       </div>
                       <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="+91 XXXXX XXXXX" />
                     </div>
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                   <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                       <Mail className="h-5 w-5" />
                     </div>
                     <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="john@company.com" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Service Required</label>
                   <div className="relative">
                     <select required defaultValue="" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-4 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow appearance-none">
                       <option value="" disabled>Select an objective...</option>
                       <option value="local-seo">Dominate Local Search (GMB/Local SEO)</option>
                       <option value="national-seo">Scale Nationally (Ecommerce/B2B SEO)</option>
                       <option value="web-dev">Build a High-Converting Website</option>
                       <option value="ppc">Generate Immediate Leads (PPC/Ads)</option>
                       <option value="full-stack">Full-Stack Digital Growth Partner</option>
                     </select>
                     <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400">
                       <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                     </div>
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Project Details</label>
                   <div className="relative">
                     <div className="absolute top-4 left-0 pl-4 pointer-events-none text-slate-400">
                       <MessageSquare className="h-5 w-5" />
                     </div>
                     <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none" placeholder="Tell us about your current digital performance and where you want to be in 6 months..."></textarea>
                   </div>
                 </div>

                 <button 
                   type="submit" 
                   disabled={loading}
                   className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/30 active:scale-95 flex items-center justify-center gap-2"
                 >
                   {loading ? (
                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                   ) : (
                     <><Send className="w-5 h-5" /> Submit Request</>
                   )}
                 </button>
               </form>
             )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
