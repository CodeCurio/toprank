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
  ArrowRight,
  Sparkles,
  Building2,
  Globe2,
  ExternalLink
} from "lucide-react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { usePhone } from "@/hooks/usePhone";
import { supabase } from "@/lib/supabase/client";

const locations = [
  {
    id: "lucknow",
    city: "Lucknow",
    state: "UP",
    type: "HEADQUARTERS & MAIN HUB",
    isHQ: true,
    address: "A42/32, Sulabh Awas, Sector 01, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    embedParams: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.40266407933288!2d80.9997749234823!3d26.83717480352987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3e41920850b%3A0x46d2900944856043!2sTopRank%20Digital%20Service%20%7C%20Website%20Designer%20%26%20SEO%20Company!5e1!3m2!1sen!2sin!4v1774077241204!5m2!1sen!2sin",
    directionLink: "https://share.google/585sAqmLbXxpCuos9"
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    state: "UT",
    type: "REGIONAL GROWTH HUB",
    isHQ: false,
    address: "SHOP NO 8, Sector 34B, Chandigarh, 160034",
    embedParams: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.36906273567996!2d76.77083449988736!3d30.72107089597058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed78f284b3ff%3A0x6914cb2c221efc85!2sTopRank%20Digital%20Service%20-%20Website%20Designer%20%26%20SEO%20Company!5e0!3m2!1sen!2sin!4v1776942376382!5m2!1sen!2sin",
    directionLink: "https://share.google/Ti1FOWyQxmiGoWbOE"
  },
  {
    id: "mohali",
    city: "Mohali",
    state: "PB",
    type: "TECH OPERATIONS",
    isHQ: false,
    address: "Shop no 12, Sector 69, Mohali, Punjab 160069",
    embedParams: "https://maps.google.com/maps?q=Shop%20no%2012%2C%20sector%2069%2C%20mohali%2C%20160069&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directionLink: "https://www.google.com/maps/search/?api=1&query=Shop+no+12,+sector+69,+mohali,+160069"
  },
  {
    id: "gonda",
    city: "Gonda",
    state: "UP",
    type: "REGIONAL OFFICE",
    isHQ: false,
    address: "Shop No A6, Zila Panchayat Market, Ambedkar Chauraha, Housing Colony, Gonda, Uttar Pradesh 271001",
    embedParams: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1775.4129477835843!2d81.9408255815506!3d27.13029324754563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999f3f944b9113f%3A0xdf48fbededaeab98!2sTopRank%20Digital%20Service!5e0!3m2!1sen!2sin!4v1776942238764!5m2!1sen!2sin",
    directionLink: "https://share.google/REZPedp69CgytyOHR"
  }
];

export function ContactSection() {
  const phone = usePhone();
  const [activeLocationId, setActiveLocationId] = useState("lucknow");
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "Search Engine Optimization (SEO)", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const activeLoc = locations.find((l) => l.id === activeLocationId) || locations[0];

  const socials = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/p/TopRank-Digital-Service-61578286186245/", color: "hover:bg-[#1877F2] hover:text-white" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/p/DOQuwGsEn0P/", color: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:text-white" },
    { name: "LinkedIn", icon: Linkedin, href: "https://in.linkedin.com/company/toprank-digital-service", color: "hover:bg-[#0A66C2] hover:text-white" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/TopRank_Digital", color: "hover:bg-black hover:text-white" },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("connect@toprankindia.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await supabase.from("leads").insert([
        {
          name: formData.name,
          phone: formData.phone || phone.raw,
          service_requested: formData.service,
          message: formData.message,
          city: activeLoc.city,
          status: "New",
        },
      ]);
    } catch (err) {
      console.error("Supabase lead insertion error:", err);
    }

    const text = `Hi TopRank Team, I'm ${formData.name}.\n\nPhone: ${formData.phone}\n🔹 *Interested in:* ${formData.service}\n\n📝 *Message:* ${formData.message}\n\nPlease let me know how we can proceed!`;
    const encodedText = encodeURIComponent(text);
    setTimeout(() => {
      window.open(`https://wa.me/91${phone.raw}?text=${encodedText}`, "_blank");
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <section className="relative w-full py-12 md:py-16 bg-slate-950 text-white overflow-hidden" id="contact" ref={sectionRef}>
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Compact Header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
            Connect With Growth Engineers
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Let’s Scale Your Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400">
              Online.
            </span>
          </motion.h2>
        </div>

        {/* Single Viewport 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column (5 Cols): Fast WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">Priority Inquiry</h3>
                <p className="text-slate-400 text-xs font-medium">Instantly connects to our WhatsApp team</p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/30">
                <MessageCircle className="w-5 h-5" />
              </div>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1.5">Your Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1.5">Service Required</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="Search Engine Optimization (SEO)" className="bg-slate-900">Search Engine Optimization (SEO)</option>
                  <option value="Local SEO & Google Maps" className="bg-slate-900">Local SEO & Google Maps (GMB)</option>
                  <option value="Website Development" className="bg-slate-900">Website & Web App Development</option>
                  <option value="Paid Ads (Google & Meta)" className="bg-slate-900">Paid Ads (Google & Meta Ads)</option>
                  <option value="Full Digital Growth Package" className="bg-slate-900">Full-Stack Digital Marketing</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1.5">Message (Optional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your goals or budget..."
                  rows={2}
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg active:scale-95 disabled:opacity-70 group/btn"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Connecting...</span>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4" /> Send Instant WhatsApp <Send className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column (7 Cols): Interactive Office Tab Switcher & Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Interactive Location Selector Tabs */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Office Locations
                </span>
                <span className="text-xs text-slate-400 font-medium">Click city to view map</span>
              </div>

              {/* City Tabs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                {locations.map((loc) => {
                  const isActive = loc.id === activeLocationId;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setActiveLocationId(loc.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-black transition-all duration-300 flex items-center justify-between border ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white border-transparent shadow-lg"
                          : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/30"
                      }`}
                    >
                      <span>{loc.city}</span>
                      {loc.isHQ && <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded font-bold">HQ</span>}
                    </button>
                  );
                })}
              </div>

              {/* Active Location Display Box */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-slate-900/90 border border-white/10 rounded-2xl p-4">
                
                {/* Map Iframe Frame */}
                <div className="md:col-span-6 h-40 rounded-xl overflow-hidden relative border border-white/10 shadow-inner">
                  <iframe
                    src={activeLoc.embedParams}
                    title={`TopRank ${activeLoc.city} Office`}
                    className="w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>

                {/* Details */}
                <div className="md:col-span-6 space-y-3">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-blue-400 block mb-1">
                      {activeLoc.type}
                    </span>
                    <h4 className="text-lg font-black text-white tracking-tight">
                      {activeLoc.city}, {activeLoc.state}
                    </h4>
                    <p className="text-slate-400 text-xs font-medium leading-relaxed mt-1">
                      {activeLoc.address}
                    </p>
                  </div>

                  <a
                    href={activeLoc.directionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-3 bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg text-xs font-bold text-white transition-all group"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            </div>

            {/* Direct Phone & Email Channels Bar */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Phone Numbers */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">Call Us Directly</span>
                  <div className="flex items-center gap-3">
                    <a href={`tel:+91${phone.raw}`} className="text-sm font-black text-white hover:text-blue-400 transition-colors">
                      {phone.display}
                    </a>
                    <span className="text-slate-600">|</span>
                    <a href={`tel:+91${phone.secondaryRaw}`} className="text-sm font-black text-white hover:text-blue-400 transition-colors">
                      {phone.secondaryDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Copy Email & Socials */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-xl text-xs font-bold text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-pink-400" />
                  <span>{copied ? "Copied!" : "connect@toprankindia.com"}</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 transition-all ${s.color}`}
                    >
                      <s.icon className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
