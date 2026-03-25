"use client";
  
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Building2, 
  ShoppingBag, 
  GraduationCap, 
  Home, 
  Utensils, 
  Briefcase,
  MapPin,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  HeartPulse,
  Activity,
  Globe2,
  Target,
  Zap
} from "lucide-react";
import Link from "next/link";
import { GrowthEngine } from "@/components/ui/GrowthEngine";

const cities = [
  "Lucknow", "Delhi NCR", "Mumbai", "Bangalore", "Kanpur", "Hyderabad", "Pune", "Chandigarh", "Jaipur", "Ahmedabad"
];

const industries = [
  {
    name: "Healthcare",
    description: "Specialized patient acquisition systems for hospitals and clinics where trust is the primary driver.",
    icon: <HeartPulse className="w-12 h-12" />,
    isSpecialty: true,
    metrics: { label: "Patient ROI", value: "+340%", trend: "up" },
    services: ["Medical SEO", "HIPAA Ready", "Lead Flow Fix"],
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50/20"
  },
  {
    name: "Real Estate",
    description: "High-intent lead generation for luxury developers and elite brokers.",
    icon: <Home className="w-6 h-6" />,
    metrics: { label: "Cost Per Lead", value: "-22%" },
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50/20"
  },
  {
    name: "E-commerce",
    description: "Scaling D2C brands via automated sales engines and high-ROAS targeting.",
    icon: <ShoppingBag className="w-6 h-6" />,
    metrics: { label: "ROAS Growth", value: "4.8x" },
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50/20"
  },
  {
    name: "Education",
    description: "Driving enrollments for schools, universities, and platforms globally.",
    icon: <GraduationCap className="w-6 h-6" />,
    metrics: { label: "Enrollment +", value: "65%" },
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50/20"
  },
  {
    name: "Hospitality",
    description: "Direct booking maximization for premium hotels and restaurant chains.",
    icon: <Utensils className="w-6 h-6" />,
    metrics: { label: "Direct Bookings", value: "+40%" },
    color: "from-indigo-500 to-violet-600",
    bg: "bg-indigo-50/20"
  },
  {
    name: "Pro Services",
    description: "Authority building for lawyers, accountants and Tier-1 consultants.",
    icon: <Briefcase className="w-6 h-6" />,
    metrics: { label: "Qualified Leads", value: "3x" },
    color: "from-slate-600 to-slate-800",
    bg: "bg-slate-50/20"
  }
];

export function ServingAreas() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-white overflow-hidden" id="serving-areas">
      
      {/* Background Ambience (Consistent with Services/Hero) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,#e2e8f0,transparent)] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a08_1px,transparent_1px)] [background-size:48px_48px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* PREMIUM HEADER - REDESIGNED FOR CONSISTENCY */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24 lg:mb-32 relative">
          
          <div className="max-w-3xl flex-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-xl shadow-slate-950/20"
            >
              <Globe2 className="w-3.5 h-3.5 text-blue-400" /> Global Infrastructure
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
              Scalable Systems. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-500">
                Zero Borders.
              </span>
            </h2>

            <div className="max-w-xl lg:pt-4 border-l-4 border-blue-600 pl-6 lg:pl-8">
              <p className="text-slate-600 text-lg md:text-xl font-bold leading-relaxed mb-8 italic">
                Digital dominance across every major city and high-stakes industry, built to capture authority on a global scale.
              </p>
              <div className="flex items-center gap-12">
                 <div className="flex flex-col">
                    <span className="text-4xl font-black text-slate-900 leading-none">10+</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Active Hubs</span>
                 </div>
                 <div className="w-px h-10 bg-slate-200" />
                 <div className="flex flex-col">
                    <span className="text-4xl font-black text-slate-900 leading-none">100%</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Sector Ready</span>
                 </div>
              </div>
            </div>
          </div>

          {/* REAL-TIME GROWTH ENGINE - RELATABLE & CREATIVE */}
          <div className="hidden lg:block w-full max-w-[500px] relative z-0 mt-8 lg:mt-0">
             <GrowthEngine />
             {/* Decorative Label Connector */}
             <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex items-center gap-4 opacity-40">
                <div className="w-24 h-px bg-slate-300" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Success Engine</span>
             </div>
          </div>
        </div>

        {/* CITY GROWTH TICKER - REFINED FOR CONSISTENCY */}
        <div className="relative mb-24 overflow-hidden py-10 opacity-70 border-y border-slate-100/60 bg-white/40 backdrop-blur-sm">
           <motion.div 
              animate={{ x: [0, -1800] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 items-center whitespace-nowrap"
           >
              {[...cities, ...cities, ...cities].map((city, idx) => (
                <div 
                  key={idx}
                  className="px-8 py-4 bg-white border border-slate-100 rounded-full text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {city}
                </div>
              ))}
           </motion.div>
        </div>

        {/* BALANCED GRID - ALIGNED WITH SERVICES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          
          {/* HEALTHCARE HERO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:row-span-2 relative group flex flex-col h-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 to-pink-600/20 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative h-full bg-white border border-rose-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col shadow-2xl shadow-rose-500/5 overflow-hidden">
               {/* Background Accent */}
               <HeartPulse className="absolute -bottom-10 -right-10 w-64 h-64 text-rose-500/5 rotate-12 pointer-events-none group-hover:text-rose-500/10 transition-colors" />
               
               <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-rose-500/30 group-hover:scale-110 transition-transform duration-500">
                     <HeartPulse className="w-9 h-9" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                     <div className="px-4 py-1.5 bg-rose-500 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-rose-500/20">
                        Vertical Hero
                     </div>
                     <div className="flex items-center gap-1.5 text-rose-500 text-[10px] font-black uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-lg border border-rose-100">
                        <Activity className="w-3 h-3 animate-pulse" /> Live Pulse
                     </div>
                  </div>
               </div>

               <div className="flex-grow">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-none mb-6 italic">
                     Healthcare & <br />
                     <span className="text-rose-500">Dominance.</span>
                  </h3>
                  
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                     Specialized patient acquisition systems for hospitals and clinics where trust is the primary driver.
                  </p>

                  <div className="space-y-4 mb-10 pt-6 border-t border-slate-100">
                     {industries[0].services?.map((s) => (
                        <div key={s} className="flex items-center gap-3">
                           <CheckCircle2 className="w-4 h-4 text-rose-500/60" />
                           <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">{s}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="mt-auto">
                 <div className="p-6 bg-rose-50/50 rounded-2xl border border-rose-100 mb-8 text-center backdrop-blur-sm">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">{industries[0].metrics?.label}</span>
                     <span className="text-4xl font-black text-rose-600 leading-none tracking-tighter">{industries[0].metrics?.value}</span>
                 </div>

                 <Link href="#contact" className="w-full py-5 bg-slate-900 hover:bg-black text-white rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-slate-900/10 group/btn">
                    Scale Practice <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                 </Link>
               </div>
            </div>
          </motion.div>

          {/* SECONDARY INDUSTRY CARDS */}
          {industries.filter(i => !i.isSpecialty).map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 md:p-10 bg-white border border-slate-200/60 rounded-[2.5rem] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-500 group relative overflow-hidden flex flex-col shadow-sm"
            >
              <div className="absolute -bottom-4 -right-4 text-slate-200/40 group-hover:text-blue-500/10 transition-colors duration-500 scale-150 rotate-6">
                {industry.icon}
              </div>

              <div className="flex items-start justify-between mb-10">
                 <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                    {industry.icon}
                 </div>
                 <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-right group-hover:bg-white transition-colors">
                    <span className="text-sm font-black text-slate-900 leading-none block">{industry.metrics?.value}</span>
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1 block">{industry.metrics?.label}</span>
                 </div>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                {industry.name}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 pr-4">
                {industry.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                 <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                    <TrendingUp className="w-4 h-4" /> Global Systems
                 </div>
                 <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer">
                    <ArrowRight className="w-5 h-5" />
                 </div>
              </div>
            </motion.div>
          ))}

          {/* SPANNING CTA CARD - ALIGNED WITH STRATEGY BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-10 lg:p-14 bg-slate-950 rounded-[2.5rem] relative overflow-hidden group flex flex-col justify-center shadow-2xl shadow-slate-900/40"
          >
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] -mr-20 -mt-20" />
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-600/10 rounded-full blur-[100px] -ml-20 -mb-20" />
             
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="flex items-center gap-10">
                   <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center animate-spin-slow grow-0 shrink-0 shadow-2xl">
                      <Globe2 className="w-12 h-12 text-white" />
                   </div>
                   <div className="text-left">
                      <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight mb-4 uppercase italic">
                         Zero Borders. <br />
                         <span className="text-blue-500">Maximum Impact.</span>
                      </h3>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-sm">
                         Regardless of your sector, we build the digital infrastructure that captures authority and scales as you grow.
                      </p>
                   </div>
                </div>
                <Link href="#contact" className="inline-flex items-center gap-4 px-10 py-5 bg-white hover:bg-blue-600 text-slate-950 hover:text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all active:scale-95 group/btn shadow-xl shadow-white/5 shrink-0">
                   Capture Market Authority <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
