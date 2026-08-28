"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Target, TrendingUp, BarChart3, 
  HelpCircle, Star, Phone, DollarSign, Sparkles, Zap, ShieldCheck, Search 
} from "lucide-react";
import Link from "next/link";
import { usePhone } from "@/hooks/usePhone";
import { ContactSection } from "@/components/sections/ContactSection";

interface LocationPPCProps {
  locationName: string;
  locationSlug: string;
  regions: string[];
}

export function LocationPPC({ locationName, locationSlug, regions }: LocationPPCProps) {
  const phone = usePhone();

  const faqs = [
    {
      q: `How quickly can we start getting leads from Google Ads in ${locationName}?`,
      a: `Google Ads campaigns go live within 48 to 72 hours after initial keyword research and landing page configuration. You can start receiving verified phone calls and WhatsApp inquiries from clients in ${locationName} within day 1 of the campaign launch.`
    },
    {
      q: `What is the recommended advertising budget for Google Ads in ${locationName}?`,
      a: `For local businesses in ${locationName}, we recommend starting with a minimum monthly ad spend of ₹15,000 to ₹35,000. This ensures sufficient daily impression share to capture high-intent searches in ${regions.slice(0, 3).join(", ")}.`
    },
    {
      q: `How do you prevent wasted ad spend and fake clicks?`,
      a: `We install strict negative keyword lists, geo-fence ads to only verified postal codes in ${locationName}, and apply IP click-fraud protection software to prevent competitors from depleting your daily budget.`
    },
    {
      q: `Do you manage Meta (Facebook & Instagram) ads as well?`,
      a: `Yes! We run integrated omni-channel campaigns combining Google Search Ads (for high-intent buyers) with Meta Ads & retargeting (for high brand visibility and lowest cost per lead).`
    }
  ];

  return (
    <>
      {/* Schema Markup for Local PPC Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `PPC & Google Ads Management in ${locationName}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "TopRank Digital Service",
              "telephone": `+91 ${phone.raw}`,
              "url": `https://www.toprankindia.com/${locationSlug}/ppc-services`,
              "areaServed": regions
            },
            "description": `High-ROAS Google Ads, Search PPC, and Meta advertising management in ${locationName}. Guaranteed qualified leads and low cost-per-acquisition.`,
            "serviceType": "Pay-Per-Click Advertising"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-40 pointer-events-none" />
        
        {/* Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-rose-50 border border-rose-100 rounded-full text-rose-700 text-[10px] font-black uppercase tracking-[0.25em] mb-6 shadow-sm"
            >
              <Target className="w-3.5 h-3.5 fill-rose-100 text-rose-600" />
              High-ROAS PPC Agency in {locationName}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8"
            >
              Capture High-Intent <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-500 to-amber-600">Leads Instantly</span> with <br className="hidden sm:block" />
              Google Ads in {locationName}.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed mb-10 max-w-3xl"
            >
              Stop wasting money on clicks that never convert. We engineer precision-targeted Google Search & Meta ad campaigns across {regions.slice(0, 4).join(", ")} that drive real customer phone calls and sales.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#contact" className="px-8 py-4 bg-slate-900 hover:bg-black text-white text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-2">
                Launch My PPC Campaign <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:+91${phone.raw}`} className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-rose-600" /> Talk to PPC Specialist
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            <div className="lg:col-span-2 space-y-10">
              <div className="prose prose-slate max-w-none space-y-6">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  Performance-Driven Paid Search & Meta Campaigns in {locationName}
                </h2>
                <p className="text-slate-600 font-medium text-base leading-relaxed">
                  While SEO builds long-term organic authority, <strong>Google & Meta Ads</strong> give your {locationName} business instantaneous market share. Whenever your customers search for high-intent queries, your business appears at the exact top of Google search results.
                </p>
                <p className="text-slate-600 font-medium text-base leading-relaxed">
                  Our Google-certified PPC strategists build hyper-local campaigns for <strong>{locationName} and surrounding regions ({regions.join(", ")})</strong>. We focus strictly on lowering your Cost-Per-Acquisition (CPA) and maximizing your Return on Ad Spend (ROAS).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Search className="w-6 h-6 text-rose-600" />,
                    title: "Google Search Ads",
                    desc: "Capture ready-to-buy customers searching for your exact services with laser-targeted keyword bidding."
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
                    title: "Retargeting & Remarketing",
                    desc: "Re-engage past website visitors across Facebook, Instagram, and YouTube to multiply conversion rates."
                  },
                  {
                    desc: `High-intent keyword bidding targeting customers actively looking for your services right now in ${locationName}.`
                  },
                  {
                    icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />,
                    title: "Meta Ads (IG & FB)",
                    desc: "Precision demographic, interest, and retargeting campaigns generating high-volume consumer inquiries."
                  },
                  {
                    icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />,
                    title: "Click-Fraud Shielding",
                    desc: "Automated IP blocking to prevent competitors and bots from draining your daily ad budget."
                  },
                  {
                    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
                    title: "Sub-Second Landing Pages",
                    desc: "Dedicated conversion funnels engineered to convert paid traffic at 15%+ conversion rates."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-rose-50 flex items-center justify-center mb-4 sm:mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Card */}
            <div className="lg:col-span-1 bg-white border border-slate-200 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">Our Paid Ads Guarantee</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed mb-6 sm:mb-8">
                We manage ad spends for companies across {locationName} with a singular focus: measurable Return on Ad Spend (ROAS).
              </p>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Complete conversion tracking setup",
                  "Daily negative keyword scrubbing",
                  "A/B split testing on ad creatives",
                  "Call tracking & CRM synchronization",
                  "Transparent weekly ROI reporting"
                ].map((val, idx) => (
                  <li key={idx} className="flex gap-2.5 sm:gap-3 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>

              <Link href="#contact" className="block w-full py-3.5 sm:py-4 text-center bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-500 hover:to-orange-500 text-white font-black uppercase tracking-widest text-[10px] rounded-xl sm:rounded-2xl transition-all shadow-lg shadow-rose-600/20 active:scale-95">
                Audit My Existing Ads Free
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* The 4-Stage PPC Framework */}
      <section className="py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Our 4-Stage <span className="text-rose-600">PPC Framework</span>
            </h2>
            <p className="text-slate-500 font-medium">
              How we scale profitable paid acquisition for businesses in {locationName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Competitor & Keyword Mining", desc: `We uncover the most lucrative search terms your competitors are bidding on in ${locationName}.` },
              { step: "02", title: "High-Converting Ad Copy", desc: "We craft persuasive headlines, extensions, and ad creatives designed for high Click-Through-Rates (CTR)." },
              { step: "03", title: "Bid & Placement Tuning", desc: "We optimize target CPA, target ROAS, and negative keywords to ensure you never pay for bad clicks." },
              { step: "04", title: "Scale & Retarget", desc: "We scale winning ad groups and retarget engaged users to drive the highest possible return on ad spend." }
            ].map((node, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative group hover:border-rose-200 transition-all shadow-sm">
                <div className="text-3xl font-black text-rose-600 opacity-40 mb-6 group-hover:opacity-100 transition-opacity">
                  {node.step}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{node.title}</h3>
                <p className="text-slate-500 font-medium text-xs leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-rose-600" />
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 font-bold">
              Questions regarding Google Ads and PPC campaigns in {locationName}.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-3 leading-snug">{faq.q}</h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
