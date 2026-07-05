import { SERVICES_DATA } from "@/lib/services-data";
import { RelatedServices } from "@/components/services/shared/RelatedServices";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface SubServicePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate valid paths for static exporting/caching
export function generateStaticParams() {
  const paths: { category: string; slug: string }[] = [];
  
  Object.values(SERVICES_DATA).forEach((service) => {
    service.subServices.forEach((sub) => {
      // sub.href is like "/services/digital-marketing/social-media"
      const parts = sub.href.split("/");
      if (parts.length >= 4) {
        paths.push({ category: parts[2], slug: parts[3] });
      }
    });
  });

  return paths;
}

// Dynamic Metadata
export async function generateMetadata({ params }: SubServicePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const service = Object.values(SERVICES_DATA).find(s => s.href.includes(`/${category}`));
  const subService = service?.subServices.find(s => s.href.includes(`/${slug}`));

  if (!service || !subService) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${subService.name} | ${service.name}`,
    description: `Professional ${subService.name.toLowerCase()} tailored for market dominance. ${subService.desc}.`,
    alternates: {
      canonical: `https://www.toprankindia.com/services/${category}/${slug}`,
    },
  };
}

export default async function SubServicePage({ params }: SubServicePageProps) {
  const { category, slug } = await params;
  
  const service = Object.values(SERVICES_DATA).find(s => s.href.includes(`/${category}`));
  const subService = service?.subServices.find(s => s.href.includes(`/${slug}`));

  if (!service || !subService) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        
        {/* Breadcrumb Glow */}
        <div className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 ${service.bgColor}`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 mb-8">
              <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={service.href} className="hover:text-slate-900 transition-colors">{service.name}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className={service.color}>{subService.name}</span>
            </nav>

            <div className={`inline-flex items-center gap-2 px-3 py-1 ${service.bgColor} border border-slate-100 rounded-full ${service.color} text-[10px] font-black uppercase tracking-widest mb-6`}>
              <subService.icon className="w-3.5 h-3.5" />
              Specialized Solution
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
              {subService.name}. <br />
              <span className={service.color}>Engineered for Growth.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-2xl">
              Precision execution in {subService.name.toLowerCase()} that translates directly into measurable ROI and brand authority. {subService.desc}.
            </p>
            
            <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/20 active:scale-95 inline-flex items-center gap-2">
              Book A Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas & Why Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                <subService.icon className={`w-8 h-8 ${service.color}`} />
                Why We Dominate Here
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed text-lg">
                Most agencies treat {subService.name.toLowerCase()} as an afterthought. We treat it as a primary revenue engine. By combining data-driven insights with creative execution, we ensure you outcompete top players in your vertical.
              </p>
              <div className="space-y-4">
                {[
                  "Laser-Focused Strategic Execution",
                  "Data-Driven Performance Metrics",
                  "Industry-Specific Optimization",
                  "Iterative Testing for Max ROI"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${service.bgColor}`}>
                      <CheckCircle2 className={`w-3 h-3 ${service.color}`} />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className={`bg-white p-10 md:p-12 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-3xl ${service.bgColor}`} />
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-4">
                Don't let competitors steal your market share.
              </h3>
              <p className="text-slate-500 font-medium mb-8">
                Our team is ready to analyze your current {subService.name.toLowerCase()} efforts and show you exactly where the massive opportunities are.
              </p>
              <Link href="/contact" className={`w-full py-4 text-center block ${service.color.replace('text-', 'bg-')} bg-opacity-10 hover:bg-opacity-20 transition-colors border ${service.color.replace('text-', 'border-')} border-opacity-30 rounded-2xl font-black uppercase tracking-widest text-xs ${service.color}`}>
                Get Expert Advice
              </Link>
            </div>

          </div>
        </div>
      </section>
 
      {/* Dynamic Sub-Service Process Section */}
      <section className="py-24 bg-white border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Our {subService.name} <span className={service.color}>Process</span>
            </h2>
            <p className="text-slate-500 font-medium">
              A streamlined, three-stage optimization framework engineered to deploy, scale, and secure high-intent conversions for your brand.
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Stage 01",
                title: "Tactical Configuration",
                desc: `We establish baseline tracking systems, install necessary API integrations, and examine your existing customer data to structure the optimal campaign architecture.`
              },
              {
                step: "Stage 02",
                title: "High-Impact Launch",
                desc: `We execute the customized ${subService.name.toLowerCase()} plan. This includes crafting persuasive copy, designing targeted assets, and deploying high-retention frameworks.`
              },
              {
                step: "Stage 03",
                title: "Analytics & Scaling",
                desc: "We perform rigorous A/B testing on creatives and triggers. Low-converting layers are systematically pruned while high-impact channels receive increased budgets to scale."
              }
            ].map((node, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all relative group shadow-sm hover:shadow-md">
                <div className={`text-[12px] font-black uppercase tracking-wider mb-4 ${service.color}`}>
                  {node.step}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{node.title}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Dynamic Sub-Service FAQs */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              {subService.name} <span className={service.color}>FAQs</span>
            </h2>
            <p className="text-slate-500 font-bold">
              Got questions about {subService.name.toLowerCase()}? Here are the facts about pricing, timelines, and deliverables.
            </p>
          </div>
 
          <div className="space-y-6">
            {[
              {
                q: `What is the typical timeline to deploy ${subService.name}?`,
                a: `Setting up and deploying ${subService.name.toLowerCase()} takes between 5 to 10 business days. This includes auditing your current assets, configuring tracking endpoints, and engineering initial creative and copy assets before officially going live.`
              },
              {
                q: `How does ${subService.name} integrate with other marketing channels?`,
                a: `No marketing channel works in a silo. We design ${subService.name.toLowerCase()} to interface directly with your core web development framework, CRM pipelines, and general digital marketing strategy. Leads captured here are automatically segmented and routed for instant sales qualification.`
              },
              {
                q: `How do you measure success and ROI for ${subService.name}?`,
                a: `We track business outcomes, not vanity metrics. We measure cost-per-acquisition (CPA), conversion rates, pipeline velocity, and return on ad spend (ROAS). Everything is mapped using precision tracking scripts so you can trace every rupee spent directly to revenue.`
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-150 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-3 leading-snug">{faq.q}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      <RelatedServices currentServiceId={service.id} />
    </main>
  );
}
