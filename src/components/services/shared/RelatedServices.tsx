"use client";

import { motion } from "framer-motion";
import { 
  Megaphone, Search, MapPin, Code, Target, Share2, 
  MessageCircle, Palette, Video, ShieldCheck, ArrowRight 
} from "lucide-react";
import Link from "next/link";

const OTHER_SERVICES = [
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: Megaphone,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    href: "/services/digital-marketing",
    desc: "Scale your brand with multi-channel growth."
  },
  {
    id: "seo",
    name: "SEO Services",
    icon: Search,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    href: "/services/seo",
    desc: "Dominate search rankings organically."
  },
  {
    id: "local-seo",
    name: "Local SEO & GMB",
    icon: MapPin,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    href: "/services/local-seo",
    desc: "Own your local neighborhood search."
  },
  {
    id: "web-dev",
    name: "Web Development",
    icon: Code,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    href: "/services/web-development",
    desc: "High-performance Next.js websites."
  },
  {
    id: "google-ads",
    name: "Google Ads / PPC",
    icon: Target,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    href: "/services/google-ads",
    desc: "Instant traffic with ROI-focused ads."
  },
  {
    id: "meta-ads",
    name: "Meta Ads (FB & IG)",
    icon: Share2,
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    href: "/services/meta-ads",
    desc: "Social advertising that converts."
  },
  {
    id: "whatsapp",
    name: "WhatsApp & AI",
    icon: MessageCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    href: "/services/whatsapp-automation",
    desc: "Automated customer handling at scale."
  },
  {
    id: "branding",
    name: "Branding & Design",
    icon: Palette,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    href: "/services/branding",
    desc: "Creative visuals that define icons."
  },
  {
    id: "content",
    name: "Content Creation",
    icon: Video,
    color: "text-red-500",
    bgColor: "bg-red-50",
    href: "/services/content-creation",
    desc: "Engaging video and written stories."
  },
  {
    id: "hosting",
    name: "Hosting & Support",
    icon: ShieldCheck,
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    href: "/services/hosting",
    desc: "Reliable infrastructure for your site."
  }
];

interface RelatedServicesProps {
  currentServiceId: string;
}

export function RelatedServices({ currentServiceId }: RelatedServicesProps) {
  const filteredServices = OTHER_SERVICES.filter(s => s.id !== currentServiceId);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Explore Our <span className="text-blue-600">Other Services</span>.
            </h2>
            <p className="text-slate-500 font-bold">
              Combine multiple growth channels to create a high-velocity digital ecosystem for your business.
            </p>
          </div>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-slate-900 font-black uppercase text-xs tracking-widest border-b-2 border-slate-900 pb-1 hover:gap-3 transition-all"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={service.href}
                className="group block p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 h-full"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${service.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-snug">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
