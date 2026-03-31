"use client";

import { SERVICES_DATA } from "@/lib/services-data";
import { RelatedServices } from "./RelatedServices";
import { ArrowRight, CheckCircle2, ChevronRight, Zap, Target } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

interface ServiceTemplateProps {
  serviceId: string;
}

export function ServiceTemplate({ serviceId }: ServiceTemplateProps) {
  const service = SERVICES_DATA[serviceId];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Premium Hero */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        
        {/* Dynamic Glow based on service color */}
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${service.bgColor}`} />
        <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 ${service.bgColor}`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2 px-3 py-1 ${service.bgColor} border border-slate-100 rounded-full ${service.color} text-[10px] font-black uppercase tracking-widest mb-6`}
            >
              <service.icon className="w-3.5 h-3.5" />
              Premium Service
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-8"
            >
              {service.name.split(" ")[0]} <br />
              <span className={service.color}>{service.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed mb-10 max-w-2xl"
            >
              {service.description} We design aggressive strategies that seize market share and transform your digital presence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/20 active:scale-95 inline-flex items-center gap-2">
                Start Scaling Now <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Features & Outcomes */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-6 flex items-center gap-3">
                  <Zap className={`w-8 h-8 ${service.color}`} />
                  Core Capabilities
                </h2>
                <div className="space-y-4">
                  {service.features?.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${service.bgColor}`}>
                        <CheckCircle2 className={`w-4 h-4 ${service.color}`} />
                      </div>
                      <span className="text-base font-bold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-6 flex items-center gap-3">
                  <Target className={`w-8 h-8 ${service.color}`} />
                  Expected Outcomes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.outcomes?.map((outcome, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm border-l-4" style={{ borderLeftColor: 'currentColor' }}>
                      <p className="font-black text-slate-800">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sub-Services Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-2">Specialized Solutions</h3>
              <p className="text-slate-500 font-medium mb-8">Deep-dive services under the {service.name} umbrella.</p>
              
              <div className="grid grid-cols-1 gap-4">
                {service.subServices.map((sub, i) => (
                  <Link 
                    key={i} 
                    href={sub.href}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-2 sm:mb-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform ${service.color}`}>
                        <sub.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{sub.name}</h4>
                        <p className="text-xs text-slate-500 font-medium">{sub.desc}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors text-slate-400 self-end sm:self-auto shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,theme(colors.blue.500)_0%,transparent_100%)]`} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to dominate your market?</h2>
          <p className="text-xl text-slate-400 mb-10">Our {service.name.toLowerCase()} experts are ready to build your custom growth strategy.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95 shadow-xl shadow-white/10">
            Book Your Free Strategy Call
          </Link>
        </div>
      </section>

      <RelatedServices currentServiceId={service.id} />
    </main>
  );
}
