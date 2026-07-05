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

      {/* Execution Blueprint */}
      <section className="py-24 bg-white border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Our Deployment <span className={service.color}>Blueprint</span>
            </h2>
            <p className="text-slate-500 font-medium">
              We follow a scientific, results-oriented execution model to ensure your {service.name.toLowerCase()} campaign is deployed seamlessly and engineered to outcompete rivals.
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                desc: "We analyze your historic metrics, audit competitors, and map out missed opportunities in your niche market."
              },
              {
                step: "02",
                title: "Custom Engineering",
                desc: "Our team drafts conversion layouts, writes targeted ad scripts, and sets up advanced analytical pipelines."
              },
              {
                step: "03",
                title: "Aggressive Launch",
                desc: "We deploy the strategy across selected channels with precision attribution tracking and immediate feed velocity."
              },
              {
                step: "04",
                title: "Scale & Optimize",
                desc: "We run ongoing multivariate tests, prune low-performing segments, and scale budgets to maximize client ROI."
              }
            ].map((node, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all relative group shadow-sm hover:shadow-md">
                <div className={`text-4xl font-black mb-6 ${service.color} opacity-40 group-hover:opacity-100 transition-opacity`}>
                  {node.step}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{node.title}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Value & Tech Focus */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] border border-slate-200 p-8 md:p-12 shadow-xl shadow-slate-200/40 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full blur-3xl ${service.bgColor}`} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-6">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  High-Performance Tech Stack & Implementation Standards
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  We don't rely on cookie-cutter tools. Our team utilizes advanced tracking setups, modern development frameworks, and real-time CRM connectors. This guarantees that every lead, visitor, or transaction generated through our {service.name.toLowerCase()} campaigns is attributed correctly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Precision UTM parameter setups",
                    "Custom analytics dashboard reporting",
                    "Weekly conversion review cycles",
                    "Dedicated account manager communication"
                  ].map((val, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${service.color}`} />
                      <span className="text-sm font-bold text-slate-700">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`lg:col-span-1 p-8 rounded-3xl ${service.bgColor} border border-slate-100 flex flex-col justify-center`}>
                <div className={`text-5xl font-black tracking-tight mb-2 ${service.color}`}>
                  100%
                </div>
                <div className="text-slate-800 font-black text-sm uppercase tracking-wider mb-4">
                  Fully Managed Service
                </div>
                <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                  From coding landing pages and creating design creatives, to managing budgets and reporting success metrics—we do it all. You focus on running your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Frequently Asked Questions */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              FAQs Regarding <span className={service.color}>{service.name}</span>
            </h2>
            <p className="text-slate-500 font-bold">
              Frequently asked questions mapping exactly to timelines, budgets, and expectations.
            </p>
          </div>
 
          <div className="space-y-6">
            {[
              {
                q: `How long does it take to see tangible results with ${service.name}?`,
                a: `While initial configurations, technical optimization, and campaign setup take 1-2 weeks, seeing measurable revenue growth typically takes 30 to 90 days. For paid channels like Google and Meta Ads, lead velocity increases almost instantly, whereas organic channels like Local SEO and content building mature over 3 to 6 months of continuous optimization.`
              },
              {
                q: `What is the standard onboarding process for ${service.name} services?`,
                a: `Our onboarding begins with a comprehensive audit of your current assets and competition. Next, we align on target KPI benchmarks, design custom funnels or campaigns, configure real-time attribution tracking, and launch the strategy. You receive a dedicated account lead and weekly reports mapping directly to business conversions.`
              },
              {
                q: `Do we need to provide internal technical or creative resources?`,
                a: `No, we operate as a fully managed growth team. We handle all technical scripting, design layouts, copywriting, landing page development, and A/B testing internally. We work closely with your leadership team for brand alignment, approvals, and product knowledge, but the execution is entirely handled by us.`
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-3 leading-snug">{faq.q}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
