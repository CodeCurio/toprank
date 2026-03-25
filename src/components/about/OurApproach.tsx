"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, Activity, BarChart3 } from "lucide-react";
import Image from "next/image";

const STEPS = [
  {
    icon: <Search className="w-6 h-6 text-blue-600" />,
    title: "Deep Discovery & Audit",
    desc: "We don't guess. We tear down your existing digital footprint, locate technical bottlenecks, and map out exactly where your competitors are bleeding revenue. Our audits go far beyond automated tools; they are strategic masterclasses.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <PenTool className="w-6 h-6 text-indigo-600" />,
    title: "Precision Strategy",
    desc: "No cookie-cutter templates. Based on the audit, we craft a bespoke roadmap focused entirely on high-intent customer acquisition. This blueprint acts as our north star for SEO, design, and paid media.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Rocket className="w-6 h-6 text-blue-600" />,
    title: "Ruthless Execution",
    desc: "Strategy means nothing without execution. Our team of specialists deploys your campaign across all channels using sprint-based frameworks. Fast implementation, flawless code, and aggressive content optimization.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Activity className="w-6 h-6 text-orange-600" />,
    title: "Continuous Optimization",
    desc: "The digital landscape shifts daily. We conduct rigorous A/B testing on landing pages, optimize load speeds down to the millisecond, and continually refine your conversion pathways to ensure maximum ROI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-rose-600" />,
    title: "Transparent Reporting",
    desc: "You will never wonder what we are doing. We provide crystal-clear metrics, real-time ROI tracking dashboards, and monthly strategy-alignment calls. You always know exactly how your money is multiplying.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
  }
];

export function OurApproach() {
  return (
    <section className="py-24 lg:py-40 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Sticky Intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 font-bold text-[10px] uppercase tracking-[0.2em] rounded-md mb-6">
                  Methodology
                </div>
                <h2 className="text-4xl lg:text-[3.5rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
                  The Engineering of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Growth.</span>
                </h2>
                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
                  We reject the chaotic "spaghetti on the wall" approach. Every campaign follows a rigorous, data-backed 5-step framework designed to dominate search engines and maximize conversions.
                </p>
                
                {/* Optional aesthetic element to fill space below text */}
                <div className="hidden lg:flex w-full h-32 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.1)_0%,transparent_70%)] mt-12 rounded-xl border border-blue-500/10 items-center px-8">
                   <p className="font-bold text-slate-500 text-sm tracking-widest uppercase">Driven By Data. Scaled By Code.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Scrolling Vertical Cards */}
          <div className="lg:col-span-7 space-y-8 lg:space-y-24">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-[2rem] border border-slate-200/60 shadow-xl overflow-hidden group"
              >
                <div className="relative h-[250px] md:h-[350px] w-full overflow-hidden">
                  <Image 
                    src={step.image} 
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
                  
                  {/* Step Number Overlay */}
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex gap-4 items-center">
                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-2xl group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-500">
                       0{idx + 1}
                     </div>
                     <h3 className="text-2xl md:text-3xl font-black text-white">{step.title}</h3>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex gap-6 items-start">
                   <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 items-center justify-center shrink-0">
                     {step.icon}
                   </div>
                   <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                     {step.desc}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
