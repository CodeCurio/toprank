"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, CheckCircle2, Megaphone, Share2, Users, 
  HelpCircle, Star, Phone, Video, Sparkles, TrendingUp, Instagram,
  Film, MessageSquare
} from "lucide-react";
import Link from "next/link";
import { usePhone } from "@/hooks/usePhone";
import { ContactSection } from "@/components/sections/ContactSection";

interface LocationSocialMediaProps {
  locationName: string;
  locationSlug: string;
  regions: string[];
}

export function LocationSocialMedia({ locationName, locationSlug, regions }: LocationSocialMediaProps) {
  const phone = usePhone();

  const faqs = [
    {
      q: `What is included in your Social Media Marketing package for ${locationName}?`,
      a: `Our full-service packages include content strategy, viral Instagram Reels production & editing, custom graphic design, caption copywriting with local hashtags, daily community engagement, and targeted Meta lead generation ads.`
    },
    {
      q: `How do Instagram Reels help my local business in ${locationName}?`,
      a: `Instagram algorithm prioritizes short-form vertical videos with local audio and location tagging. A single viral Reel can reach 50,000+ local buyers across ${regions.slice(0, 3).join(", ")}, creating massive brand recall and direct DM inquiries.`
    },
    {
      q: `Do you manage social media advertising as well?`,
      a: `Yes! We combine organic organic community growth with laser-targeted Meta Lead Ads to capture high-intent inquiries from customers in ${locationName} with direct WhatsApp routing.`
    },
    {
      q: `How many posts and reels will you create per month?`,
      a: `Depending on the selected growth tier, we deliver between 12 to 24 high-definition creatives and 8 to 16 professionally edited Reels per month, backed by weekly analytics and performance tracking.`
    }
  ];

  return (
    <>
      {/* Schema Markup for Local Social Media Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Social Media Marketing & Management in ${locationName}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "TopRank Digital Service",
              "telephone": `+91 ${phone.raw}`,
              "url": `https://www.toprankindia.com/${locationSlug}/social-media-marketing`,
              "areaServed": regions
            },
            "description": `Viral Instagram Reels, Meta Ads, and full-stack social media management in ${locationName}. Scale your local brand visibility and engage high-intent customers.`,
            "serviceType": "Social Media Marketing"
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
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-pink-500/10 rounded-full blur-[90px] sm:blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-50 border border-purple-100 rounded-full text-purple-700 text-[10px] font-black uppercase tracking-wider sm:tracking-[0.25em] mb-4 sm:mb-6 shadow-sm"
            >
              <Instagram className="w-3.5 h-3.5 fill-purple-100 text-purple-600" />
              #1 Social Media Agency in {locationName}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] sm:leading-[1.05] mb-5 sm:mb-8"
            >
              Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">Viral Engagement</span> Into <br className="hidden sm:block" />
              Real Customers in {locationName}.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-lg md:text-2xl text-slate-600 font-medium leading-relaxed mb-8 sm:mb-10 max-w-3xl"
            >
              We craft scroll-stopping Instagram Reels, high-converting Meta Ads, and automated lead capture pipelines that establish your brand as the dominant authority across {regions.slice(0, 4).join(", ")}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link href="#contact" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-slate-900 hover:bg-black text-white text-xs font-black uppercase tracking-wider sm:tracking-widest rounded-xl sm:rounded-2xl transition-all shadow-xl shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-2">
                Grow My Brand Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:+91${phone.raw}`} className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 text-xs font-black uppercase tracking-wider sm:tracking-widest rounded-xl sm:rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-purple-600" /> Talk to Social Strategist
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
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  Stop Posting Random Graphics. Build an Inbound Engine in {locationName}.
                </h2>
                <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  Generic template posts don't generate inquiries. In <strong>{locationName}</strong>, winning brands produce original short-form video reels, educational carousel decks, and targeted paid Meta campaigns that direct prospects straight into WhatsApp chats.
                </p>
                <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  At <strong>TopRank Digital Service</strong>, we handle your complete social workflow: scriptwriting, professional video shooting/editing, hashtag ranking, and DM automation across <strong>{regions.slice(0, 4).join(", ")}</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    icon: <Film className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
                    title: "Viral Reels Production",
                    desc: "Scripting, dynamic subtitle editing, and high-retention storytelling optimized for Instagram & YouTube Shorts algorithms."
                  },
                  {
                    icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />,
                    title: "High-Converting Meta Ads",
                    desc: "Targeted lead generation ad sets on Instagram & Facebook designed to deliver direct phone calls and inquiries."
                  },
                  {
                    icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
                    title: "Automated DM & WhatsApp Funnels",
                    desc: "Instant automated keyword-triggered DM replies and WhatsApp lead capture ensuring no lead goes unanswered."
                  },
                  {
                    icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
                    title: "Community Growth & Influencers",
                    desc: "Local influencer partnerships and engagement strategies to build loyal, repeat customer communities."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-50 flex items-center justify-center mb-4 sm:mb-6">
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4">Why TopRank Social?</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed mb-6 sm:mb-8">
                We focus on metrics that matter: customer acquisition and sales revenue, not just vanity likes.
              </p>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  "Monthly content calendar & approval system",
                  "Dedicated creative director & video editor",
                  "Original on-brand graphics & typography",
                  "Direct lead handover to your sales team",
                  "Monthly analytics review and strategy calls"
                ].map((val, idx) => (
                  <li key={idx} className="flex gap-2.5 sm:gap-3 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>

              <Link href="#contact" className="block w-full py-3.5 sm:py-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black uppercase tracking-widest text-[10px] rounded-xl sm:rounded-2xl transition-all shadow-lg shadow-purple-600/20 active:scale-95">
                Request Social Media Audit
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* The 4-Stage Social Framework */}
      <section className="py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Our 4-Stage <span className="text-purple-600">Growth Blueprint</span>
            </h2>
            <p className="text-slate-500 font-medium">
              How we scale brand authority and customer inquiries in {locationName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audience & Competitor Audit", desc: `We identify top-performing content formats in ${locationName} and map your content pillars.` },
              { step: "02", title: "Production & Design", desc: "Our creative team shoots, edits, and designs premium Reels and feed graphics tailored to your niche." },
              { step: "03", title: "Omni-Channel Distribution", desc: "We schedule and broadcast optimized content across Instagram, Facebook, and LinkedIn." },
              { step: "04", title: "Paid Lead Amplification", desc: "We boost winning organic posts with targeted Meta Ads to flood your funnel with direct customer leads." }
            ].map((node, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative group hover:border-purple-200 transition-all shadow-sm">
                <div className="text-3xl font-black text-purple-600 opacity-40 mb-6 group-hover:opacity-100 transition-opacity">
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
              <HelpCircle className="w-8 h-8 text-purple-600" />
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 font-bold">
              Questions regarding social media marketing and reels in {locationName}.
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
