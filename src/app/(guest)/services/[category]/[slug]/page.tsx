import { SERVICES_DATA } from "@/lib/services-data";
import { RelatedServices } from "@/components/services/shared/RelatedServices";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface SubServicePageProps {
  params: {
    category: string;
    slug: string;
  };
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
export function generateMetadata({ params }: SubServicePageProps): Metadata {
  const { category, slug } = params;
  const service = Object.values(SERVICES_DATA).find(s => s.href.includes(`/${category}`));
  const subService = service?.subServices.find(s => s.href.includes(`/${slug}`));

  if (!service || !subService) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${subService.name} Services | ${service.name} | TopRank Digital`,
    description: `Professional ${subService.name.toLowerCase()} tailored for market dominance. ${subService.desc}.`,
  };
}

export default function SubServicePage({ params }: SubServicePageProps) {
  const { category, slug } = params;
  
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

      <RelatedServices currentServiceId={service.id} />
    </main>
  );
}
