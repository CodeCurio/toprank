"use client";
 
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { 
  Building2, 
  ShoppingBag, 
  GraduationCap, 
  Stethoscope, 
  Home, 
  Utensils, 
  Briefcase,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  HeartPulse,
  Activity,
  Globe2,
  Zap,
  Target
} from "lucide-react";
import Link from "next/link";

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
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50/20"
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
  },
  {
    name: "Custom Verticals",
    description: "Don't see your industry? We build custom growth engines for any high-stakes sector.",
    icon: <Target className="w-6 h-6" />,
    metrics: { label: "Success Rate", value: "100%" },
    color: "from-slate-800 to-slate-950",
    bg: "bg-slate-50/10"
  }
];

export function ServingAreas() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 bg-white overflow-hidden" id="serving-areas">
      
      {/* 1. IMMERSIVE BACKGROUND: SCANNING MESH */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Adaptive Digital Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
         
         {/* Animated Scanning Radar Lines */}
         <motion.div 
            style={{ y: y1, opacity }}
            className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50/25 to-transparent"
         />
         
         {/* Floating Decorative Orbs */}
         <motion.div 
            style={{ y: y2 }}
            className="absolute top-1/4 -right-24 w-[30rem] h-[30rem] bg-blue-100/20 rounded-full blur-[120px]" 
         />
         <motion.div 
            style={{ y: y1 }}
            className="absolute bottom-1/4 -left-24 w-[28rem] h-[28rem] bg-rose-100/10 rounded-full blur-[120px]" 
         />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2. KINETIC HEADER: AUTHORITY TITLE */}
        <div className="flex flex-col mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-slate-900 rounded-full text-white text-[10px] font-black uppercase tracking-[0.4em] mb-12 shadow-2xl shadow-slate-950/20 w-fit"
          >
            <Globe2 className="w-3.5 h-3.5 text-blue-400" /> GLOBAL INFRASTRUCTURE
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-slate-900 tracking-tighter leading-[0.8] mb-4">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="block"
              >
                Scalable.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-500 block"
              >
                Zero Borders.
              </motion.span>
            </h2>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="max-w-sm lg:pb-6 border-l-2 border-slate-100 pl-8 ml-4"
            >
               <p className="text-slate-500 text-lg md:text-xl font-bold leading-relaxed mb-8 italic">
                  Digital dominance across every major city and high-stakes industry.
               </p>
               <div className="flex items-center gap-8">
                  <div className="flex flex-col">
                     <span className="text-3xl font-black text-slate-900 leading-none">10+</span>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Active Hubs</span>
                  </div>
                  <div className="w-px h-10 bg-slate-100" />
                  <div className="flex flex-col">
                     <span className="text-3xl font-black text-slate-900 leading-none">100%</span>
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Sector Ready</span>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>

        {/* 3. CITY GROWTH TICKER (Animated) */}
        <div className="relative mb-32 overflow-hidden py-10 opacity-70 border-y border-slate-50">
           <motion.div 
              animate={{ x: [0, -1800] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex gap-4 items-center whitespace-nowrap"
           >
              {[...cities, ...cities, ...cities].map((city, idx) => (
                <div 
                  key={idx}
                  className="px-8 py-4 bg-white border border-slate-100 rounded-[2rem] text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {city}
                </div>
              ))}
           </motion.div>
        </div>

        {/* 4. SYMMETRICAL ZERO-GAP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* COLUMN 1, ROW 1-2: HEALTHCARE HERO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:row-span-2 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-600 rounded-[3rem] blur opacity-20 group-hover:opacity-35 transition duration-1000" />
            <div className="relative h-full bg-white border border-rose-100 rounded-[3rem] p-8 md:p-10 overflow-hidden flex flex-col shadow-2xl shadow-rose-500/5">
               {/* Background Ghost Accent */}
               <HeartPulse className="absolute -bottom-10 -right-10 w-64 h-64 text-rose-500/5 rotate-12 pointer-events-none group-hover:text-rose-500/10 transition-colors" />
               
               {/* Scan Overlay Effect */}
               <motion.div 
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-rose-500/10 to-transparent skew-y-12 pointer-events-none"
               />

               <div className="flex justify-between items-start mb-14 relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-rose-500/30 group-hover:rotate-12 transition-transform duration-700">
                     <HeartPulse className="w-10 h-10" />
                  </div>
                  <div className="flex flex-col items-end">
                     <div className="px-4 py-1.5 bg-rose-500 text-white text-[9px] font-black uppercase tracking-[0.4em] rounded-full shadow-lg shadow-rose-500/20 mb-3">
                        Vertical Hero
                     </div>
                     <div className="flex items-center gap-2 text-rose-500 text-[9px] font-black uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-lg border border-rose-100">
                        <Activity className="w-3 h-3 animate-pulse" /> Live Pulse
                     </div>
                  </div>
               </div>

               <div className="flex-grow relative z-10">
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                     Healthcare & <br />
                     <span className="text-rose-500">Practice.</span>
                  </h3>
                  
                  <div className="space-y-3 mb-10">
                     {industries[0].services?.map((s) => (
                        <div key={s} className="flex items-center gap-3">
                           <CheckCircle2 className="w-4 h-4 text-rose-500" />
                           <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">{s}</span>
                        </div>
                     ))}
                  </div>

                  <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 mb-10 text-center">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">{industries[0].metrics?.label}</span>
                      <span className="text-4xl font-black text-rose-500 leading-none tracking-tighter">{industries[0].metrics?.value}</span>
                  </div>
               </div>

               <Link href="#contact" className="w-full py-5 bg-slate-950 hover:bg-rose-600 text-white rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-slate-900/20 group/btn">
                  Scale Practice <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
               </Link>
            </div>
          </motion.div>

          {/* DENSE SECONDARY CARDS (Filling Row 1 & 2 after Hero) */}
          {industries.filter(i => !i.isSpecialty).slice(0, 4).map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-8 ${industry.bg} border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group relative overflow-hidden flex flex-col`}
            >
              <div className="absolute -bottom-4 -right-4 text-slate-900/5 group-hover:text-blue-600/10 transition-colors duration-500 scale-150 rotate-6">
                {industry.icon}
              </div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                 <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-md text-slate-900 group-hover:text-blue-600">
                    {industry.icon}
                 </div>
                 <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-100 text-right">
                    <span className="text-[12px] font-black text-slate-900 leading-none block">{industry.metrics?.value}</span>
                    <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">{industry.metrics?.label}</span>
                 </div>
              </div>
              
              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors relative z-10">
                {industry.name}
              </h3>
              <p className="text-slate-500 text-[12px] font-bold leading-relaxed mb-8 relative z-10 flex-grow pr-2">
                {industry.description}
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-slate-950/5 relative z-10">
                 <div className="flex items-center gap-2 text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover:text-blue-600 transition-colors">
                    <TrendingUp className="w-3.5 h-3.5" /> High Precision
                 </div>
                 <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center text-white scale-90 group-hover:scale-100 group-hover:bg-blue-600 transition-all shadow-lg group-hover:shadow-blue-500/30">
                    <ArrowRight className="w-4 h-4" />
                 </div>
              </div>
            </motion.div>
          ))}

          {/* ROW 3: LAST INDUSTRY + SPANNING CTA */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`p-8 ${industries[5].bg} border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group relative overflow-hidden flex flex-col`}
          >
              <div className="absolute -bottom-4 -right-4 text-slate-900/5 group-hover:text-blue-600/10 transition-colors duration-500 scale-150 rotate-6">
                {industries[5].icon}
              </div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                 <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-md text-slate-900 group-hover:text-blue-600">
                    {industries[5].icon}
                 </div>
                 <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-100 text-right">
                    <span className="text-[12px] font-black text-slate-900 leading-none block">{industries[5].metrics?.value}</span>
                    <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">{industries[5].metrics?.label}</span>
                 </div>
              </div>
              
              <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-blue-600 transition-colors relative z-10">
                {industries[5].name}
              </h3>
              <p className="text-slate-500 text-[12px] font-bold leading-relaxed mb-8 relative z-10 flex-grow pr-2">
                {industries[5].description}
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-slate-950/5 relative z-10">
                 <div className="flex items-center gap-2 text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] group-hover:text-blue-600 transition-colors">
                    <TrendingUp className="w-3.5 h-3.5" /> High Precision
                 </div>
                 <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center text-white scale-90 group-hover:scale-100 group-hover:bg-blue-600 transition-all shadow-lg group-hover:shadow-blue-500/30">
                    <ArrowRight className="w-4 h-4" />
                 </div>
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-10 bg-slate-950 rounded-[2.5rem] relative overflow-hidden group flex flex-col justify-center"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/10 rounded-full blur-[80px]" />
             
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-8">
                   <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center animate-spin-slow grow-0 shrink-0">
                      <Globe2 className="w-10 h-10 text-white" />
                   </div>
                   <div className="text-left">
                      <h3 className="text-3xl font-black text-white tracking-tighter leading-none mb-3 uppercase">
                         Zero Borders.
                      </h3>
                      <p className="text-slate-400 text-[11px] font-bold leading-relaxed max-w-[240px]">
                         Regardless of your sector, we build the digital infrastructure that captures authority.
                      </p>
                   </div>
                </div>
                <Link href="#contact" className="inline-flex items-center gap-4 px-10 py-5 bg-white hover:bg-blue-400 text-slate-950 hover:text-white font-black text-[12px] uppercase tracking-widest rounded-2xl transition-all active:scale-95 group/btn shadow-[0_20px_40px_-5px_rgba(255,255,255,0.15)] shrink-0">
                   Start Dominance <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


