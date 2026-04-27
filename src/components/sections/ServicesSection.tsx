"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  MonitorSmartphone,
  MapPin,
  Target,
  Share2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Zap,
  Sparkles,
  Users,
  ChevronRight,
  HelpCircle,
  Clock,
  ShieldCheck,
  TrendingUp,
  Megaphone,
  Code,
  MessageCircle,
  Palette,
  Video,
  Database,
  Globe,
  Layout,
  Layers,
  Monitor,
  Phone,
  BarChart,
  ClipboardCheck
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface Service {
  id: string;
  title: string;
  category: string;
  outcome?: string;
  description: string;
  features?: string[];
  icon: any;
  colorClass?: string;
  gradient?: string;
  isFeatured?: boolean;
  isSpeciality?: boolean;
  specialityText?: string;
  link?: string;
  visual?: React.ReactNode;
}

export interface ServicesSectionContent {
  tag?: string;
  headline?: React.ReactNode;
  paragraph?: React.ReactNode;
  services?: Service[];
}

// MicroVisual components moved here to be available for the services array
import {
  SEOMicroVisual,
  GMBMicroVisual,
  WebDevMicroVisual,
  AdsMicroVisual,
  SocialMicroVisual,
  StrategyMicroVisual,
  MarketingMicroVisual,
  AutomationMicroVisual,
  BrandingMicroVisual,
  ContentMicroVisual,
  HostingMicroVisual
} from "@/components/services/shared/ServiceVisuals";

// Map for dynamic icon rendering from Server Components
const iconMap: Record<string, any> = {
  Search,
  MonitorSmartphone,
  MapPin,
  Target,
  Share2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Zap,
  Sparkles,
  Users,
  ChevronRight,
  HelpCircle,
  Clock,
  ShieldCheck,
  TrendingUp,
  Megaphone,
  Code,
  MessageCircle,
  Palette,
  Video,
  Database,
  Globe,
  Layout,
  Layers,
  Monitor,
  Phone,
  BarChart,
  ClipboardCheck
};


const services: Service[] = [
  {
    id: "digital-marketing",
    category: "Full-Stack Marketing",
    title: "Scale Your Brand Globally",
    description: "Omni-channel marketing strategies designed to build authority and drive massive user acquisition.",
    outcome: "Reach millions of potential customers and establish your brand as a market leader in your industry.",
    features: ["Social Media Dominance", "Influencer Partnerships", "Lead Gen Systems"],
    icon: Megaphone,
    colorClass: "blue",
    gradient: "from-blue-600 to-indigo-600",
    link: "/services/digital-marketing",
    visual: <MarketingMicroVisual />
  },
  {
    id: "seo",
    category: "Search Engineering",
    title: "Rank #1 for High-Intent Keywords",
    description: "Data-driven SEO strategies to capture organic search volume and crush your digital competition.",
    outcome: "Show up at the top of Google when customers are ready to buy, ensuring a steady flow of organic leads.",
    features: ["Technical SEO Mastery", "Authority Link Building", "ROI-Focused Keywords"],
    icon: Search,
    colorClass: "indigo",
    gradient: "from-indigo-600 to-violet-600",
    isFeatured: true,
    isSpeciality: true,
    link: "/services/seo",
    visual: <SEOMicroVisual />
  },
  {
    id: "local-seo",
    category: "Local Dominance",
    title: "Own the Local Search Market",
    description: "Hyper-local GMB optimization to ensure your business is the #1 choice in your immediate area.",
    outcome: "Dominate the 'Near Me' search results and drive foot traffic/calls directly from Google Maps.",
    features: ["Map Pack Ranking", "GMB Profile Scaling", "Review Management"],
    icon: MapPin,
    colorClass: "orange",
    gradient: "from-orange-500 to-amber-500",
    isFeatured: true,
    isSpeciality: true,
    link: "/services/local-seo",
    visual: <GMBMicroVisual />
  },
  {
    id: "web-dev",
    category: "High-Performance Dev",
    title: "Modern Web Experiences",
    description: "Zero-latency, conversion-optimized websites built on Next.js for maximum performance and speed.",
    outcome: "A stunning, lightning-fast digital storefront that turns casual visitors into high-paying customers.",
    features: ["Next.js & React Apps", "E-commerce Architecture", "Core Web Vitals Focus"],
    icon: Code,
    colorClass: "pink",
    gradient: "from-pink-600 to-rose-600",
    isFeatured: true,
    isSpeciality: true,
    link: "/services/web-development",
    visual: <WebDevMicroVisual />
  },
  {
    id: "google-ads",
    category: "Performance Ads",
    title: "Instant Lead Velocity",
    description: "Precision-targeted Google Ads campaigns to capture high-intent buyers exactly when they search.",
    outcome: "Generate immediate revenue and high-quality leads with a positive ROAS from day one.",
    features: ["Search & Display Ads", "YouTube Growth Ads", "Conversion Tracking"],
    icon: Target,
    colorClass: "rose",
    gradient: "from-rose-500 to-red-600",
    link: "/services/google-ads",
    visual: <AdsMicroVisual />
  },
  {
    id: "meta-ads",
    category: "Social Advertising",
    title: "Viral Social Growth",
    description: "Strategic Facebook and Instagram ad funnels to reach your ideal audience and build trust.",
    outcome: "Transform social media into a predictable revenue stream with high-converting ad creatives.",
    features: ["Retargeting Funnels", "Creative Direction", "Audience Scaling"],
    icon: Share2,
    colorClass: "sky",
    gradient: "from-sky-500 to-blue-600",
    link: "/services/meta-ads",
    visual: <SocialMicroVisual />
  },
  {
    id: "whatsapp",
    category: "AI & Automation",
    title: "Automate Your Sales",
    description: "WhatsApp API and AI-driven chatbots to handle customer enquiries 24/7 without manual effort.",
    outcome: "Reduce response time to seconds and scale your customer support without increasing overhead.",
    features: ["WhatsApp API Setup", "AI Chatbot Integration", "CRM Automation"],
    icon: MessageCircle,
    colorClass: "blue",
    gradient: "from-blue-500 to-teal-500",
    link: "/services/whatsapp-automation",
    visual: <AutomationMicroVisual />
  },
  {
    id: "branding",
    category: "Creative Identity",
    title: "Build a Magnetic Brand",
    description: "Iconic brand identity and creative design that makes your business unforgettable in the market.",
    outcome: "Stand out from competitors with a premium visual identity that commands higher prices.",
    features: ["Logo & Visual ID", "Ad Creative Suite", "Brand Guidelines"],
    icon: Palette,
    colorClass: "purple",
    gradient: "from-purple-600 to-violet-600",
    link: "/services/branding",
    visual: <BrandingMicroVisual />
  },
  {
    id: "content",
    category: "Content Engine",
    title: "Engage Through Storytelling",
    description: "High-impact reel creation, video editing, and SEO-optimized blogs to engage your audience.",
    outcome: "Create a loyal following and establish industry authority through consistent, high-value content.",
    features: ["Reel/Video Creation", "SEO Content Writing", "Script & Copywriting"],
    icon: Video,
    colorClass: "red",
    gradient: "from-red-500 to-rose-600",
    link: "/services/content-creation",
    visual: <ContentMicroVisual />
  },
  {
    id: "hosting",
    category: "Infrastructure",
    title: "Secure & Scalable Hosting",
    description: "Enterprise-grade hosting and technical maintenance to keep your business running smoothly 24/7.",
    outcome: "Eliminate downtime and security risks with managed hosting and proactive technical support.",
    features: ["Managed Cloud Hosting", "Security & Backups", "Technical Support"],
    icon: ShieldCheck,
    colorClass: "slate",
    gradient: "from-slate-600 to-slate-800",
    link: "/services/hosting",
    visual: <HostingMicroVisual />
  }
];


function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
  const IconComponent = typeof service.icon === 'string' ? iconMap[service.icon] : service.icon;

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative h-full flex flex-col rounded-[2rem] bg-white transition-all duration-500 overflow-hidden hover:-translate-y-2
        ${service.isSpeciality
          ? 'border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] hover:border-blue-300'
          : 'border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300'
        }`}
    >
      {/* Soft gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-colors duration-700 pointer-events-none" />

      <div className="p-6 md:p-8 flex flex-col h-full relative z-10">

        <div className="flex justify-between items-start mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:shadow-md group-hover:-rotate-3
            ${service.isSpeciality 
              ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 text-blue-600'
              : 'bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-100 text-slate-700 group-hover:text-blue-600'
            }`}>
            {IconComponent && <IconComponent className={`w-7 h-7`} strokeWidth={1.5} />}
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className={`px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all duration-300
              ${service.isSpeciality
                ? 'bg-blue-600/10 border-blue-200 text-blue-700 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white shadow-sm'
                : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
            >
              {service.category}
            </div>
            {service.isSpeciality && (
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2.5 py-1 rounded-full shadow-md"
              >
                <Sparkles className="w-3 h-3 fill-white" />
                <span className="text-[8px] font-black uppercase tracking-widest">{service.specialityText || "Growth Engine"}</span>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mb-6 flex-grow">
          <h3 className="text-xl md:text-[22px] font-black text-slate-900 tracking-tight leading-[1.2] mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-slate-500 text-[14px] md:text-[15px] font-medium leading-relaxed group-hover:text-slate-600 transition-colors line-clamp-3">
            {service.description}
          </p>
        </div>

        {service.features && service.features.length > 0 && (
          <div className="space-y-2.5 mb-6 pt-5 border-t border-slate-100/80 flex-grow">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100/50">
                  <CheckCircle2 className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-[13px] font-bold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto pt-2">
          <Link
            href={service.link || "#"}
            className={`w-full py-3.5 px-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-between group/btn active:scale-95
               ${service.isSpeciality
                ? 'bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-100 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/25'
                : 'bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white border border-slate-200 hover:border-slate-900'
              }`}
          >
            <span>{service.isSpeciality ? 'Launch Project' : 'Book Strategy'}</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
              ${service.isSpeciality 
                ? 'bg-blue-200/50 group-hover/btn:bg-white/20 text-blue-700 group-hover/btn:text-white' 
                : 'bg-white group-hover/btn:bg-white/20 text-slate-700 group-hover/btn:text-white'
              }`}>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      {/* Decorative Glow */}
      {service.isSpeciality && (
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-400/20 transition-colors duration-500 pointer-events-none" />
      )}
    </motion.div>
  );
}

export function ServicesSection({ location, content }: { location?: string, content?: ServicesSectionContent }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  const helperItems = [
    { goal: "More Google Leads", action: "SEO & GMB" },
    { goal: "Instant Customers", action: "Ads Team" },
    { goal: "Better Conversion", action: "Web Team" },
    { goal: "Brand Authority", action: "Social Team" }
  ];

  const servicesToUse = content?.services || services;

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-slate-50 overflow-hidden" id="services">

      {/* Background Ambience matches Hero Style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,#e2e8f0,transparent)] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a08_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Centered Premium Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 flex flex-col items-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-800 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
              {content?.tag || "Growth Systems"}
            </div>

            {content?.headline ? (
              content.headline
            ) : (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                Solutions Built for <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
                  Market Dominance{location ? ` in ${location}` : ""}.
                </span>
              </h2>
            )}

            {content?.paragraph ? (
              content.paragraph
            ) : (
              <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto border-t border-blue-600/10 pt-6">
                Don’t settle for generic marketing. We engineer high-velocity digital ecosystems that capture attention and convert it into revenue.
              </p>
            )}
          </motion.div>
        </div>

        {/* Balanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 mb-16">
          {servicesToUse.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Redesigned & Refined Decision Support Box */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50 border border-blue-200 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-sm mb-16"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100/40 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-100/40 rounded-full blur-[100px]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="lg:max-w-md text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/5 border border-blue-600/10 rounded-full text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                <HelpCircle className="w-3 h-3" />
                Strategy Guide
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-tight mb-4">
                Not sure where <br className="hidden md:block" /> to start?
              </h3>
              <p className="text-slate-600 text-sm font-bold leading-relaxed mb-6">
                Choose the outcome you're looking for, and we'll handle the strategy to get you there.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Link href="#contact" className="px-8 py-4 bg-slate-900 hover:bg-black text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-slate-900/10 active:scale-95 flex items-center gap-2">
                  Claim My Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-xl">
              {helperItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 bg-white/95 md:bg-white/80 md:backdrop-blur-md p-5 rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.goal}</p>
                    <p className="text-slate-900 text-base font-black tracking-tight">{item.action}</p>
                  </div>
                </motion.div>
              ))}

              <div className="sm:col-span-2 mt-4 flex items-center justify-center lg:justify-start gap-3 text-slate-400">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Trusted by 100+ high-growth local brands</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Global Success Footer */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="flex -space-x-3 mb-2">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-50 overflow-hidden shadow-md">
                  <Image src={`https://i.pravatar.cc/150?img=${i + 20}`} alt="Client" width={48} height={48} className="object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-slate-50 bg-white flex items-center justify-center shadow-md text-[10px] font-black text-slate-900">
                +100
              </div>
            </div>
            <div>
              <p className="text-slate-900 text-xl font-black tracking-tight mb-2 uppercase">Your Success is Our Only Metric.</p>
              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <p suppressHydrationWarning className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Currently accepting 2 new clients for {currentMonth}</p>
              </div>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95 group">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
