import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";
import { RelatedServices } from "@/components/services/shared/RelatedServices";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local SEO & GMB Services | Dominate Local Search | TopRank Digital",
  description: "Hyper-local GMB optimization to ensure your business is the #1 choice in your immediate area. Rank in the Local Map Pack.",
};

export default function LocalSEOPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-orange-600 text-[10px] font-black uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Local Search Dominance
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
              Own Your <br />
              <span className="text-orange-600">Local Market.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10">
              Hyper-local GMB optimization to ensure your business is the #1 choice in your immediate area and dominates Google Maps.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/20 active:scale-95 inline-flex items-center gap-2">
              Dominate Local Search <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">GMB Mastery & Optimization</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                Visibility on Google Maps is critical for physical businesses. We optimize every aspect of your GMB profile to drive foot traffic and calls directly from search results.
              </p>
              <div className="space-y-4">
                {[
                  "Google Map Pack Ranking",
                  "Verified GMB Profile Scaling",
                  "Local Citation Architecture",
                  "Review Management Strategy",
                  "Hyper-local Hyper-targeted Content"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[400px] bg-white rounded-[3rem] border-2 border-slate-200 border-dashed flex items-center justify-center text-slate-400 font-black uppercase text-xs tracking-widest">
              GMB Results Case Studies
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentServiceId="local-seo" />
      <Footer />
    </main>
  );
}
