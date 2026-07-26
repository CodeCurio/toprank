"use client";

import { motion } from "framer-motion";
import {
  Activity,
  HeartPulse,
  Home,
  ShoppingBag,
  GraduationCap,
  Utensils,
  Briefcase,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  ShieldCheck,
  Stethoscope,
  Building2,
} from "lucide-react";
import Link from "next/link";

const otherIndustries = [
  {
    id: "real-estate",
    name: "Real Estate & Developers",
    description: "High-intent lead generation funnels for luxury residential projects, commercial developers, and property brokers.",
    icon: Home,
    stat: "-28% Cost Per Lead",
    color: "text-blue-600",
    bgLight: "bg-blue-50 border-blue-200",
    link: "/services/digital-marketing",
  },
  {
    id: "ecommerce",
    name: "E-Commerce & D2C Brands",
    description: "Scaling online retail stores through Meta/Google ad funnels, conversion UX optimization, and customer retention systems.",
    icon: ShoppingBag,
    stat: "4.6x Avg ROAS",
    color: "text-pink-600",
    bgLight: "bg-pink-50 border-pink-200",
    link: "/services/web-development",
  },
  {
    id: "education",
    name: "Education & Academies",
    description: "Driving student admissions and course enrollments for coaching institutes, universities, and EdTech platforms.",
    icon: GraduationCap,
    stat: "+65% Student Inquiries",
    color: "text-amber-600",
    bgLight: "bg-amber-50 border-amber-200",
    link: "/services/seo",
  },
  {
    id: "hospitality",
    name: "Hospitality & Resorts",
    description: "Direct booking engines, local GMB dominance, and social media campaigns for hotels, resorts, and premium restaurants.",
    icon: Utensils,
    stat: "+42% Direct Bookings",
    color: "text-indigo-600",
    bgLight: "bg-indigo-50 border-indigo-200",
    link: "/services/local-seo",
  },
  {
    id: "pro-services",
    name: "Professional Services",
    description: "Authority positioning and qualified lead flow for law firms, accounting practices, and corporate consultants.",
    icon: Briefcase,
    stat: "3x Qualified Leads",
    color: "text-slate-700",
    bgLight: "bg-slate-100 border-slate-200",
    link: "/services/google-ads",
  },
];

export function IndustriesWeServeSection() {
  return (
    <section className="relative py-20 md:py-28 bg-slate-50 overflow-hidden" id="industries">
      {/* Ambient background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,#cbd5e1,transparent)] opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-slate-200 rounded-full text-slate-800 text-[11px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm"
          >
            <Building2 className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            Industries We Serve
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Tailored Growth Systems For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-600">
              High-Stakes Sectors.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
          >
            While we engineer digital success for businesses across multiple sectors, our primary core expertise lies in **Diagnostics Centers, Pathology Labs & Healthcare**.
          </motion.p>
        </div>

        {/* ----------------------------------------------------
            PRIMARY SPECIALTY HERO CARD: DIAGNOSTICS & HEALTHCARE
           ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative bg-gradient-to-br from-slate-900 via-slate-950 to-rose-950 text-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-rose-500/30 shadow-2xl overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-full shadow-lg shadow-rose-500/30">
                  ★ PRIMARY CORE SPECIALTY
                </span>
                <span className="px-3 py-1 bg-white/10 text-rose-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10 flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-rose-400 animate-pulse" /> Live Healthcare Engine
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6">
                Diagnostics Centers & <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300">
                  Healthcare Growth Dominance.
                </span>
              </h3>

              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed mb-8">
                TopRank specializes in patient acquisition engines for **Diagnostic Centers, Pathology Labs, Radiology Hubs & Hospitals**. We engineer high-trust local search rankings, automated lab booking funnels, and verified patient review systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Local GMB #1 for Pathology & Diagnostic Searches",
                  "Automated WhatsApp Home Collection Booking Bot",
                  "High-Converting Test Package Landing Pages",
                  "Verified Patient Review & Reputation Scaling",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:opacity-90 text-white font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-rose-500/30 active:scale-95"
              >
                Book Diagnostic Growth Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Metric Box */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-7 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-rose-500 text-white flex items-center justify-center shadow-lg">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white">Diagnostics Impact</h4>
                    <span className="text-[10px] text-rose-300 uppercase tracking-widest font-bold">Proven Case Study</span>
                  </div>
                </div>
                <Stethoscope className="w-6 h-6 text-rose-400" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <span className="text-2xl sm:text-3xl font-black text-rose-400 block leading-tight">+340%</span>
                  <span className="text-[10px] font-bold uppercase text-slate-300 tracking-wider">Patient Bookings</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <span className="text-2xl sm:text-3xl font-black text-amber-400 block leading-tight">180+</span>
                  <span className="text-[10px] font-bold uppercase text-slate-300 tracking-wider">Monthly Lab Leads</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-medium italic">
                "TopRank scaled our diagnostic center's Google Maps inquiries by 3x within 90 days. Their medical search expertise is unmatched."
              </p>
            </div>

          </div>
        </motion.div>

        {/* ----------------------------------------------------
            OTHER KEY INDUSTRIES GRID
           ---------------------------------------------------- */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 block mb-1">
              Diverse Industry Capabilities
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Other Core Industries We Serve
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherIndustries.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl ${item.bgLight} ${item.color} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                        {item.stat}
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h4>

                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    href={item.link}
                    className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-200 text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-between group/btn"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
