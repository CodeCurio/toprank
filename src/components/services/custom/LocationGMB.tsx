"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, MapPin, Navigation, Star, 
  HelpCircle, Phone, Sparkles, MessageSquare, ShieldCheck, Eye 
} from "lucide-react";
import Link from "next/link";
import { usePhone } from "@/hooks/usePhone";
import { ContactSection } from "@/components/sections/ContactSection";

interface LocationGMBProps {
  locationName: string;
  locationSlug: string;
  regions: string[];
}

export function LocationGMB({ locationName, locationSlug, regions }: LocationGMBProps) {
  const phone = usePhone();

  const faqs = [
    {
      q: `How long does it take to rank in Google Maps 3-Pack in ${locationName}?`,
      a: `Depending on the local competition in your category, GMB ranking improvements typically appear within 30 to 60 days of implementing citation cleanups, geo-tagged image uploads, category tuning, and local review velocity.`
    },
    {
      q: `Why is my Google Business Profile suspended in ${locationName}?`,
      a: `Suspensions usually happen due to deceptive address patterns, duplicate listings, or unverified naming conventions. Our team specializes in Google Business Profile appeals and official reinstatement to get your profile back online fast.`
    },
    {
      q: `How do reviews impact my GMB ranking in ${locationName}?`,
      a: `Review count, keyword-rich reviews, review ratings (4.8+ stars), and owner response rates are among the top 3 ranking factors for Google's local algorithm in ${locationName}.`
    },
    {
      q: `Will GMB optimization generate direct phone calls?`,
      a: `Yes! Over 68% of local searches end with a direct phone call or direction request from the Google Maps 3-Pack without the user even clicking through to a website.`
    }
  ];

  return (
    <>
      {/* Schema Markup for Local GMB Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Google My Business & Map Optimization in ${locationName}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "TopRank Digital Service",
              "telephone": `+91 ${phone.raw}`,
              "url": `https://www.toprankindia.com/${locationSlug}/gmb-services`,
              "areaServed": regions
            },
            "description": `Dominate Google Maps 3-Pack in ${locationName}. Proven GMB optimization, review building, and local citation management to flood your business with inbound customer calls.`,
            "serviceType": "Local SEO & GMB Optimization"
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
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:48px_48px] opacity-40 pointer-events-none" />
        
        {/* Glows */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-amber-500/10 rounded-full blur-[90px] sm:blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-50 border border-orange-100 rounded-full text-orange-700 text-[10px] font-black uppercase tracking-wider sm:tracking-[0.25em] mb-4 sm:mb-6 shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 fill-orange-200 text-orange-600" />
              #1 Local SEO & GMB Agency in {locationName}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.05] mb-5 sm:mb-8"
            >
              Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-rose-600">Google Maps 3-Pack</span> <br className="hidden sm:block" />
              in {locationName}.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-lg md:text-2xl text-slate-600 font-medium leading-relaxed mb-8 sm:mb-10 max-w-3xl"
            >
              When customers search "near me" in {locationName}, does your business show up at #1? We optimize your Google Business Profile to capture maximum local phone calls, direction requests, and walk-in clients across {regions.join(", ")}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link href="#contact" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-900 hover:bg-black text-white text-xs font-black uppercase tracking-wider sm:tracking-widest rounded-xl sm:rounded-2xl transition-all shadow-xl shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-2">
                Audit My GMB Ranking <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:+91${phone.raw}`} className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 text-xs font-black uppercase tracking-wider sm:tracking-widest rounded-xl sm:rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-orange-600" /> Talk to GMB Expert
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-2 space-y-8 sm:space-y-10">
              <div className="prose prose-slate max-w-none space-y-4 sm:space-y-6">
                <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  More than 70% of high-intent consumers looking for local services click directly on the top 3 results displayed in the <strong>Google Local 3-Pack</strong>. If your profile is buried on page 2 or not showing up for key areas in <strong>{locationName} ({regions.slice(0, 4).join(", ")})</strong>, your competitors are capturing all your high-margin revenue.
                </p>
                <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  At <strong>TopRank Digital Service</strong>, we use a systematic local ranking algorithm: NAP consistency, high-authority local citations, geotagged real-world photography, and keyword-rich customer review funnels.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />,
                    title: "Google Map Pack 3-Pack Dominance",
                    desc: "Systematically push your listing into the top 3 spots across all major sectors in your city."
                  },
                  {
                    icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
                    title: "GMB Reinstatement & Verification",
                    desc: "Fix suspensions, remove duplicate competitor listings, and get your profile fully reinstated."
                  },
                  {
                    icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 fill-amber-400" />,
                    title: "5-Star Review Acceleration",
                    desc: "Automated review request funnels to collect authentic, keyword-rich testimonials from satisfied clients."
                  },
                  {
                    icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
                    title: "Geotagged Photo Uploads & Citations",
                    desc: "EXIF geotagged metadata and citations on top directories (JustDial, Sulekha, IndiaMart, Bing Places)."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-orange-50 flex items-center justify-center mb-4 sm:mb-6">
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">The TopRank GMB Advantage</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed mb-6 sm:mb-8">
                We have helped over 300+ local businesses rank #1 on Google Maps in {locationName}.
              </p>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Complete 100% profile optimization",
                  "Weekly GMB posts & product listings",
                  "Local keyword density engineering",
                  "Spam competitor removal audits",
                  "Monthly call tracking & insight analytics"
                ].map((val, idx) => (
                  <li key={idx} className="flex gap-2.5 sm:gap-3 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>

              <Link href="#contact" className="block w-full py-3.5 sm:py-4 text-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black uppercase tracking-widest text-[10px] rounded-xl sm:rounded-2xl transition-all shadow-lg shadow-orange-500/20 active:scale-95">
                Claim Free Map Audit
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* The 4-Stage GMB Ranking Method */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">
              Our 4-Stage <span className="text-orange-500">Map Ranking</span> Method
            </h2>
            <p className="text-slate-500 font-medium text-xs sm:text-sm sm:text-base px-2">
              How we push your Google Business Profile to the #1 spot in {locationName}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { step: "01", title: "Local Presence Audit", desc: `We scan your Google Business Profile against top 3 competitors in ${locationName} to identify category gaps.` },
              { step: "02", title: "NAP Cleanup & Citations", desc: "We ensure Name, Address, and Phone number are identical across 50+ local Indian directories." },
              { step: "03", title: "Geotagging & Media", desc: "We upload optimized photos embedded with latitude/longitude coordinates matching your target city." },
              { step: "04", title: "Review Velocity & Rank", desc: "We deploy automated review request pipelines to build ongoing local authority and secure top 3 rankings." }
            ].map((node, idx) => (
              <div key={idx} className="bg-slate-50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 relative group hover:border-orange-200 transition-all shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-orange-500 opacity-40 mb-3 sm:mb-6 group-hover:opacity-100 transition-opacity">
                  {node.step}
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 sm:mb-3">{node.title}</h3>
                <p className="text-slate-500 font-medium text-xs leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
              <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 font-bold text-xs sm:text-sm sm:text-base px-2">
              Common questions about Google Maps & Local SEO ranking in {locationName}.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-slate-200/60 shadow-sm">
                <h3 className="font-bold text-sm sm:text-lg text-slate-900 mb-2 leading-snug">{faq.q}</h3>
                <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
