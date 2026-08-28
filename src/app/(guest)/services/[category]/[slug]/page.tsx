import { SERVICES_DATA } from "@/lib/services-data";
import { RelatedServices } from "@/components/services/shared/RelatedServices";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Zap, ShieldCheck } from "lucide-react";
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

  const title = `${subService.name} Services | ${service.name} | TopRank`;
  const description = `Professional ${subService.name.toLowerCase()} solutions. ${subService.desc}. High-ROI growth strategies engineered by TopRank Digital Service.`;
  const canonicalUrl = `https://www.toprankindia.com/services/${category}/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "TopRank Digital Service",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    }
  };
}

export default async function SubServicePage({ params }: SubServicePageProps) {
  const { category, slug } = await params;
  
  const service = Object.values(SERVICES_DATA).find(s => s.href.includes(`/${category}`));
  const subService = service?.subServices.find(s => s.href.includes(`/${slug}`));

  if (!service || !subService) {
    notFound();
  }

  const faqs = [
    {
      q: `What is the typical deployment timeline for ${subService.name}?`,
      a: `Setting up and deploying ${subService.name.toLowerCase()} typically takes between 5 to 10 business days. This includes auditing your existing assets, configuring tracking endpoints, and engineering initial creative and copy assets before officially launching.`
    },
    {
      q: `How does ${subService.name} integrate with other marketing channels?`,
      a: `No growth channel works in a silo. We design ${subService.name.toLowerCase()} to interface directly with your core web development framework, CRM pipelines, and general digital marketing strategy. Inquiries captured here are automatically segmented and routed for instant sales qualification.`
    },
    {
      q: `How do you measure success and ROI for ${subService.name}?`,
      a: `We track concrete business outcomes, not vanity metrics. We measure cost-per-acquisition (CPA), conversion rates, pipeline velocity, and return on ad spend (ROAS). Everything is mapped using precision tracking scripts so you can trace every rupee spent directly to revenue.`
    }
  ];

  // Schema Markup
  const subServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": subService.name,
    "description": subService.desc,
    "url": `https://www.toprankindia.com/services/${category}/${slug}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "TopRank Digital Service",
      "telephone": "+91 9115439115",
      "url": "https://www.toprankindia.com"
    },
    "serviceType": subService.name,
    "areaServed": ["Lucknow", "Chandigarh", "Mohali", "Gonda", "India"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.toprankindia.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.toprankindia.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.name,
        "item": `https://www.toprankindia.com${service.href}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": subService.name,
        "item": `https://www.toprankindia.com/services/${category}/${slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />
        
        {/* Glow */}
        <div className={`absolute top-0 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-[100px] sm:blur-[140px] opacity-15 pointer-events-none ${service.bgColor}`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <Link href={service.href} className="hover:text-slate-900 transition-colors">{service.name}</Link>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <span className={service.color}>{subService.name}</span>
            </nav>

            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 ${service.bgColor} border border-slate-200/60 rounded-full ${service.color} text-[10px] font-black uppercase tracking-wider sm:tracking-widest mb-6 shadow-sm`}>
              <subService.icon className="w-3.5 h-3.5" />
              Specialized Solution
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8 break-words">
              {subService.name}. <br />
              <span className={service.color}>Engineered for Measurable ROI.</span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              Precision execution in {subService.name.toLowerCase()} that translates directly into scalable revenue and market authority. {subService.desc}.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-slate-900 hover:bg-black text-white rounded-xl sm:rounded-2xl font-black uppercase text-xs tracking-wider sm:tracking-widest transition-all shadow-xl shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-2 text-center"
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={service.href}
                className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 rounded-xl sm:rounded-2xl font-black uppercase text-xs tracking-wider sm:tracking-widest transition-all shadow-sm flex items-center justify-center gap-2 text-center"
              >
                View All {service.name} Modules
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Focus Areas & Why Us */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3 mb-4">
                  <subService.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${service.color}`} />
                  Why We Dominate in {subService.name}
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed text-sm sm:text-base">
                  Most vendors treat {subService.name.toLowerCase()} as an afterthought. We engineer it as a primary conversion engine. By combining data-driven insights with persuasive creative execution, we ensure you outrank and outconvert competitors in your industry.
                </p>
              </div>

              <div className="space-y-3.5">
                {[
                  "Laser-Focused Strategic Execution",
                  "Data-Driven Performance Metrics & Attribution",
                  "Industry-Specific Optimization Workflows",
                  "Iterative A/B Testing for Maximum ROAS"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3.5 bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200/70">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${service.bgColor}`}>
                      <CheckCircle2 className={`w-4 h-4 ${service.color}`} />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-800">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl sm:rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-40 h-40 opacity-10 rounded-full blur-3xl ${service.bgColor}`} />
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Don't let competitors steal your market share.
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-8">
                Our growth team is ready to analyze your current {subService.name.toLowerCase()} efforts and show you exactly where the massive untapped revenue opportunities are.
              </p>
              <Link 
                href="#contact" 
                className="w-full py-4 text-center block bg-slate-900 hover:bg-black text-white transition-all rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-slate-900/20 active:scale-95"
              >
                Claim Free Strategy Proposal
              </Link>
            </div>

          </div>
        </div>
      </section>
 
      {/* 3-Stage Process Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className={`text-[10px] font-black uppercase tracking-widest ${service.color} block mb-2`}>
              Systematic Blueprint
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Our {subService.name} <span className={service.color}>Process</span>
            </h2>
            <p className="text-slate-500 font-medium text-xs sm:text-base">
              A streamlined, three-stage optimization framework engineered to deploy, scale, and secure high-intent conversions.
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
              <div key={i} className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/70 hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
                <div className={`text-[11px] font-black uppercase tracking-wider mb-3 ${service.color}`}>
                  {node.step}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{node.title}</h3>
                <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Sub-Service FAQs */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className={`text-[10px] font-black uppercase tracking-widest ${service.color} block mb-2`}>
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4 flex items-center justify-center gap-2">
              <HelpCircle className={`w-6 h-6 ${service.color}`} />
              {subService.name} FAQs
            </h2>
            <p className="text-slate-500 font-bold text-xs sm:text-base">
              Facts about turnaround timelines, integration standards, and business ROI.
            </p>
          </div>
 
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2 leading-snug">{faq.q}</h3>
                <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Direct Contact Section */}
      <ContactSection />

      <RelatedServices currentServiceId={service.id} />
    </main>
  );
}
