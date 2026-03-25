import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";
import { RelatedServices } from "@/components/services/shared/RelatedServices";
import { Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Scale Your Brand | TopRank Digital",
  description: "Comprehensive multi-channel digital marketing strategies to build brand authority and capture massive market share.",
};

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Basic Hero */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">
              <Megaphone className="w-3.5 h-3.5" />
              Omni-Channel Growth
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
              Scale Your Brand <br />
              <span className="text-blue-600">Globally.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10">
              We design aggressive marketing ecosystems that seize market share simultaneously across organic and paid channels.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/20 active:scale-95 inline-flex items-center gap-2">
              Start Scaling Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder Details */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Full-Stack Digital Strategy</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Generic marketing doesn't work. We build tailored funnels that combine social media, content, and lead generation into a single revenue-generating machine.
              </p>
              <div className="space-y-4">
                {[
                  "Social Media Dominance Strategy",
                  "Influencer Partnership Management",
                  "Content Engine for Authority",
                  "ROI-Focused Lead Generation",
                  "Omni-channel Retargeting"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[400px] bg-white rounded-[3rem] border-2 border-slate-200 border-dashed flex items-center justify-center text-slate-400 font-black uppercase text-xs tracking-widest">
              Detailed Case Studies Coming Soon
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentServiceId="digital-marketing" />
      <Footer />
    </main>
  );
}
