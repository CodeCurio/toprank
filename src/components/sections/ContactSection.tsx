"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  CheckCircle2,
  Send,
  ArrowRight
} from "lucide-react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/p/TopRank-Digital-Service-61578286186245/", color: "hover:bg-[#1877F2] hover:text-white" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/p/DOQuwGsEn0P/", color: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-white border-transparent" },
  { name: "LinkedIn", icon: Linkedin, href: "https://in.linkedin.com/company/toprank-digital-service", color: "hover:bg-[#0A66C2] hover:text-white" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/TopRank_Digital", color: "hover:bg-black hover:text-white" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/+919305030523", color: "hover:bg-[#25D366] hover:text-white" },
];

const locations = [
  {
    id: "lucknow",
    city: "Lucknow, UP",
    type: "Headquarters",
    address: "A42/32, Sulabh Awas, Sector 01, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    embedParams: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.40266407933288!2d80.9997749234823!3d26.83717480352987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3e41920850b%3A0x46d2900944856043!2sTopRank%20Digital%20Service%20%7C%20Website%20Designer%20%26%20SEO%20Company!5e1!3m2!1sen!2sin!4v1774077241204!5m2!1sen!2sin",
    directionLink: "https://maps.google.com/?q=TopRank+Digital+Service+Lucknow"
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    type: "Branch Office",
    address: "SHOP NO 8, Sector 34B, Chandigarh, 160034",
    embedParams: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4669.558857324111!2d76.76764949103416!3d30.721047037352985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed78f284b3ff%3A0x6914cb2c221efc85!2sTopRank%20Digital%20Service%20-%20Website%20Designer%20%26%20SEO%20Company!5e1!3m2!1sen!2sin!4v1774077289489!5m2!1sen!2sin",
    directionLink: "https://maps.google.com/?q=TopRank+Digital+Service+Chandigarh"
  }
];



export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", service: "Search Engine Optimization (SEO)", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("connect@toprankindia.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const text = `Hi TopRank Team, I'm ${formData.name}.\n\n🔹 *Interested in:* ${formData.service}\n\n📝 *Message:* ${formData.message}\n\nPlease let me know how we can proceed!`;
    const encodedText = encodeURIComponent(text);
    setTimeout(() => {
      window.open(`https://wa.me/919305030523?text=${encodedText}`, "_blank");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section className="relative w-full py-24 md:py-36 bg-slate-950 overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-20">
          
          {/* Left: Form */}
          <div className="xl:w-5/12">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Your Growth Partner
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.1] tracking-tight mb-4">
                  Let's scale <br/>your business.
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                  Skip the waiting lines. Fill the form below to instantly connect with our strategy team via WhatsApp for a priority review.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                 <div className="space-y-5 mb-6">
                    <div>
                      <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Your Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe" 
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">What do you need help with?</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer"
                      >
                        <option value="Search Engine Optimization (SEO)" className="bg-slate-900">SEO & Local Ranking</option>
                        <option value="Website Development" className="bg-slate-900">Premium Website Development</option>
                        <option value="Google Business Profile Optimization" className="bg-slate-900">Google Business Profile (GMB)</option>
                        <option value="Social Media Marketing" className="bg-slate-900">Social Media Marketing</option>
                        <option value="Comprehensive Digital Growth" className="bg-slate-900">Comprehensive Digital Growth</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Message (Optional)</label>
                      <textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us a little about your goals..." 
                        rows={3}
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                      />
                    </div>
                 </div>
                 <button 
                   type="submit" 
                   disabled={isSubmitting}
                   className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-4 rounded-xl transition-all shadow-lg disabled:opacity-70 group/btn"
                 >
                   {isSubmitting ? (
                     <span className="animate-pulse">Connecting...</span>
                   ) : (
                     <>
                       <MessageCircle className="w-5 h-5" /> Send to WhatsApp <Send className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                     </>
                   )}
                 </button>
              </form>
            </motion.div>
          </div>

          {/* Right: Maps & Contact Card */}
          <div className="xl:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 h-full">
              {locations.map((loc, index) => (
                <motion.div
                  key={loc.id}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0f172a] border border-[#1e293b] rounded-[2rem] overflow-hidden hover:border-slate-700 transition-all flex flex-col group"
                >
                  <div className="h-48 sm:h-56 relative w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                    <iframe 
                      src={loc.embedParams}
                      title={`Map of TopRank ${loc.city}`}
                      className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 grow flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">{loc.type}</p>
                      <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{loc.city}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {loc.address}
                      </p>
                    </div>
                    <a 
                      href={loc.directionLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-between w-full py-3.5 px-5 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold text-white transition-all group/btn"
                    >
                      Open in Maps 
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-all" />
                    </a>
                  </div>
                </motion.div>
              ))}

              {/* Contact Card Spanning 2 Cols */}
              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:col-span-2 bg-[#0f172a] border border-[#1e293b] rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-10 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] group-hover:bg-blue-600/10 transition-all duration-1000" />
                
                <div className="relative z-10 space-y-8 flex-grow">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-6">Direct Avenues</p>
                    <div className="flex flex-col md:flex-row flex-wrap gap-6 sm:gap-8 lg:gap-10">
                      <a href="tel:+919305030523" className="flex items-center gap-4 text-white hover:text-blue-400 truncate transition-all group/link">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover/link:bg-blue-500 group-hover/link:text-white transition-all shrink-0">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-lg sm:text-xl font-black tracking-tight whitespace-nowrap">+91 93050 30523</span>
                      </a>
                      <button onClick={handleCopyEmail} className="flex items-center gap-4 text-white hover:text-pink-400 truncate transition-all group/link text-left">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all shrink-0 ${copied ? 'bg-green-500 text-white' : 'bg-pink-500/10 group-hover/link:bg-pink-500 group-hover/link:text-white'}`}>
                          {copied ? <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" /> : <Mail className="w-5 h-5 sm:w-6 sm:h-6" />}
                        </div>
                        <span className="text-lg sm:text-xl font-black tracking-tight break-all sm:break-normal">connect@toprankindia.com</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 xl:pl-10 xl:border-l border-white/10 w-full xl:w-auto pt-6 xl:pt-0 border-t xl:border-t-0 mt-2 xl:mt-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Connect on Social</p>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {socials.filter(s => s.name !== "WhatsApp").map((social) => (
                      <a 
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 transition-all hover:-translate-y-1.5 ${social.color} shrink-0`}
                      >
                        <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
