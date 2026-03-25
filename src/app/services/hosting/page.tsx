import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";
import { RelatedServices } from "@/components/services/shared/RelatedServices";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hosting & Technical Support | Secure Infrastructure | TopRank Digital",
  description: "Enterprise-grade hosting and technical maintenance to keep your business running smoothly 24/7. zero downtime infrastructure.",
};

export default function HostingSupportPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-slate-600 text-[10px] font-black uppercase tracking-widest mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secure Infrastructure
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
              Secure & Scalable <br />
              <span className="text-slate-600">Hosting.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10">
              Enterprise-grade hosting and technical maintenance to keep your business running smoothly 24/7. Eliminate downtime and security risks entirely.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/20 active:scale-95 inline-flex items-center gap-2">
              Setup Secure Hosting <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Zero-Downtime Infrastructure</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Your website is your 24/7 salesperson. We provide managed cloud hosting and proactive maintenance to ensure it's always fast, secure, and available for your customers.
              </p>
              <div className="space-y-4">
                {[
                  "Managed High-Speed Cloud Hosting",
                  "Daily Automated Backup Systems",
                  "Proactive Security & Malware Protection",
                  "24/7 Technical Support Access",
                  "Regular Plugin & Core Updates"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[400px] bg-white rounded-[3rem] border-2 border-slate-200 border-dashed flex items-center justify-center text-slate-400 font-black uppercase text-xs tracking-widest">
              Infrastructure Metrics coming soon
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentServiceId="hosting" />
      <Footer />
    </main>
  );
}
