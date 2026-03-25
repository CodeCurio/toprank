"use client";

import { motion } from "framer-motion";
import { Search, Globe, MapPin, MousePointerClick, BarChart, Smartphone } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "National & Commerce SEO",
    desc: "Data-driven organic strategies to capture high-intent search traffic nationwide.",
    href: "/services/seo", // Mapped to the new 15-point SEO architecture page
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "group-hover:border-blue-200"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Local SEO & GMB Optimization",
    desc: "Dominate the map pack and attract customers actively searching in your city.",
    href: "/services/local-seo",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "group-hover:border-rose-200"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Website Design & Development",
    desc: "Stunning, fast-loading, and conversion-optimized websites built for performance.",
    href: "/services/web-development",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "group-hover:border-blue-200"
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Performance Marketing (PPC)",
    desc: "Precision ad campaigns across Google and Meta designed for maximum ROAS.",
    href: "/services/ppc",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "group-hover:border-amber-200"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Social Media Identity",
    desc: "Engaging brand narratives and content that builds loyal community followings.",
    href: "/services/social-media",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "group-hover:border-purple-200"
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Conversion Rate Optimization",
    desc: "Scientific testing and UX improvements to get more leads from the same traffic.",
    href: "/services/cro",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "group-hover:border-blue-200"
  }
];

export function AboutServices() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Capabilities Engineered <br className="hidden sm:block" /> for <span className="text-blue-600">Enterprise Growth</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-medium"
          >
            We deploy specialized expertise across the digital spectrum. Every service we offer is interlinked, creating a compounding growth ecosystem for your brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Link href={service.href} className={`group block h-full bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 ${service.border}`}>
                 <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                   {service.icon}
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                 <p className="text-slate-600 mb-8 font-medium leading-relaxed">{service.desc}</p>
                 
                 <div className="flex items-center text-sm font-bold text-blue-600 uppercase tracking-widest mt-auto group-hover:translate-x-2 transition-transform">
                    Explore Service <ArrowRight className="w-4 h-4 ml-2" />
                 </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
