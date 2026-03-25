"use client";

import { motion } from "framer-motion";
import { Search, Monitor, TrendingUp, Megaphone, ArrowRight, MapPin, Code, Share2, MessageCircle, Palette, Video, ShieldCheck } from "lucide-react";
import { 
  MarketingMicroVisual,
  SEOMicroVisual,
  GMBMicroVisual, 
  WebDevMicroVisual,
  AdsMicroVisual,
  SocialMicroVisual,
  AutomationMicroVisual,
  BrandingMicroVisual,
  ContentMicroVisual,
  HostingMicroVisual
} from "@/components/services/shared/ServiceVisuals";
import Link from "next/link";

interface MasterCategoriesProps {
  locationName?: string;
  locationSlug?: string;
}

export function MasterCategories({ locationName = "India", locationSlug }: MasterCategoriesProps) {
  const baseServicePath = locationSlug ? `/${locationSlug}` : "/services";

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              <span className="text-blue-600">Core Services</span> Catalog.
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Our structured divisions are designed to aggressively seize market share simultaneously across organic and paid channels.
            </p>
          </motion.div>
        </div>

        {/* 10 Services Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 transition-opacity duration-300">
          
          {/* 1. Digital Marketing */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
            <MarketingMicroVisual />
            <div className="w-14 h-14 bg-blue-50 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
               <Megaphone className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight leading-tight">Digital Marketing <br/>Services</h3>
            <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">Multi-channel growth strategies to scale your brand authority and capture market share.</p>
            <div className="space-y-2 mb-6 flex-grow text-xs font-bold text-slate-500">
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-blue-600"/> Social Media Marketing</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-blue-600"/> Content Marketing</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-blue-600"/> Lead Generation</div>
            </div>
            <Link href="/services/digital-marketing" className="inline-flex items-center gap-2 text-blue-600 font-black hover:gap-3 transition-all uppercase text-[10px] tracking-widest">Learn More <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>

          {/* 2. SEO Services (PRIMARY) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            className="bg-white rounded-[2.5rem] p-8 border-2 border-blue-500 shadow-2xl shadow-blue-500/10 relative group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full"
          >
            <div className="absolute -top-3 left-8 bg-blue-600 text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-full shadow-lg z-30">Primary Service</div>
            <div className="absolute top-0 right-8 bg-slate-900 text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-b-lg shadow-sm z-20">Rank #1</div>
            <SEOMicroVisual />
            <div className="w-14 h-14 bg-indigo-50 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
               <Search className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight leading-tight">SEO Services for <br/>Organic Growth</h3>
            <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">Dominate search rankings and drive consistent flow of high-intent organic traffic.</p>
            <div className="space-y-2 mb-6 flex-grow text-xs font-bold text-slate-500">
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-indigo-600"/> Technical SEO Audit</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-indigo-600"/> Authority Link Building</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-indigo-600"/> E-commerce SEO</div>
            </div>
            <Link href="/services/seo" className="inline-flex items-center gap-2 text-indigo-600 font-black hover:gap-3 transition-all uppercase text-[10px] tracking-widest">Learn More <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>

          {/* 3. Local SEO & GMB (PRIMARY) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="bg-white rounded-[2.5rem] p-8 border-2 border-orange-500 shadow-2xl shadow-orange-500/10 relative group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full"
          >
            <div className="absolute -top-3 left-8 bg-orange-600 text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-full shadow-lg z-30">Top Rated</div>
            <GMBMicroVisual />
            <div className="w-14 h-14 bg-orange-50 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
               <MapPin className="w-7 h-7 text-orange-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight leading-tight">Local SEO & <br/>GMB Optimization</h3>
            <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">Dominate the local 'near me' search market and Google Maps pack rankings.</p>
            <div className="space-y-2 mb-6 flex-grow text-xs font-bold text-slate-500">
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-orange-600"/> GMB Ranking Services</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-orange-600"/> Local Citation Building</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-orange-600"/> Review Management</div>
            </div>
            <Link href="/services/local-seo" className="inline-flex items-center gap-2 text-orange-600 font-black hover:gap-3 transition-all uppercase text-[10px] tracking-widest">Learn More <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>

          {/* 4. Web Development (PRIMARY) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="bg-white rounded-[2.5rem] p-8 border-2 border-pink-500 shadow-2xl shadow-pink-500/10 relative group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full"
          >
            <div className="absolute -top-3 left-8 bg-pink-600 text-white text-[10px] uppercase font-black px-4 py-1.5 rounded-full shadow-lg z-30">Enterprise Grade</div>
            <WebDevMicroVisual />
            <div className="w-14 h-14 bg-pink-50 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
               <Code className="w-7 h-7 text-pink-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight leading-tight">Web Design & <br/>Development</h3>
            <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">High-performance Next.js websites built for zero latency and high conversion.</p>
            <div className="space-y-2 mb-6 flex-grow text-xs font-bold text-slate-500">
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-pink-600"/> Business Websites</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-pink-600"/> E-commerce Dev</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-pink-600"/> Speed Optimization</div>
            </div>
            <Link href="/services/web-development" className="inline-flex items-center gap-2 text-pink-600 font-black hover:gap-3 transition-all uppercase text-[10px] tracking-widest">Learn More <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>

          {/* 5. Google Ads */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-slate-900 text-white rounded-[2.5rem] p-8 border border-slate-800 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
            <AdsMicroVisual />
            <div className="w-14 h-14 bg-blue-500/20 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
               <TrendingUp className="w-7 h-7 text-rose-400" />
            </div>
            <h3 className="text-xl font-black mb-3 uppercase tracking-tight leading-tight text-white/90">Google Ads & <br/>Paid Marketing</h3>
            <p className="text-slate-400 text-sm font-medium mb-6 leading-relaxed">Instant lead velocity with ROI-focused PPC campaigns on Search & Display.</p>
            <div className="space-y-2 mb-6 flex-grow text-xs font-bold text-slate-400">
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-rose-400"/> PPC Management</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-rose-400"/> Search & YouTube Ads</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-rose-400"/> Conversion Tracking</div>
            </div>
            <Link href="/services/google-ads" className="inline-flex items-center gap-2 text-rose-400 font-black hover:gap-3 transition-all uppercase text-[10px] tracking-widest">Learn More <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>

          {/* 6. Meta Ads */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
            <SocialMicroVisual />
            <div className="w-14 h-14 bg-sky-50 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
               <Share2 className="w-7 h-7 text-sky-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight leading-tight">Meta Ads <br/>(FB & IG)</h3>
            <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">Powerful social advertising funnels that convert cold traffic into loyal customers.</p>
            <div className="space-y-2 mb-6 flex-grow text-xs font-bold text-slate-500">
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-sky-600"/> Facebook & IG Ads</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-sky-600"/> Creative Strategy</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-sky-600"/> Lead Ads Scaling</div>
            </div>
            <Link href="/services/meta-ads" className="inline-flex items-center gap-2 text-sky-600 font-black hover:gap-3 transition-all uppercase text-[10px] tracking-widest">Learn More <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>

          {/* 7. WhatsApp Automation */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
            <AutomationMicroVisual />
            <div className="w-14 h-14 bg-blue-50 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
               <MessageCircle className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight leading-tight">WhatsApp <br/>Automation & AI</h3>
            <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">Automated customer engagement and support using WhatsApp API and AI tools.</p>
            <div className="space-y-2 mb-6 flex-grow text-xs font-bold text-slate-500">
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-blue-600"/> API Setup & Bot</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-blue-600"/> Bulk Messaging</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-blue-600"/> AI Support Bot</div>
            </div>
            <Link href="/services/whatsapp-automation" className="inline-flex items-center gap-2 text-blue-600 font-black hover:gap-3 transition-all uppercase text-[10px] tracking-widest">Learn More <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>

          {/* 8. Branding & Creative */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
            <BrandingMicroVisual />
            <div className="w-14 h-14 bg-purple-50 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
               <Palette className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight leading-tight">Branding & <br/>Creative Services</h3>
            <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">Iconic visual identity and high-impact creative designs for modern brands.</p>
            <div className="space-y-2 mb-6 flex-grow text-xs font-bold text-slate-500">
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-purple-600"/> Logo & Visual ID</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-purple-600"/> Ad Creatives</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-purple-600"/> Social Creatives</div>
            </div>
            <Link href="/services/branding" className="inline-flex items-center gap-2 text-purple-600 font-black hover:gap-3 transition-all uppercase text-[10px] tracking-widest">Learn More <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>

          {/* 9. Content Creation */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl relative group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
            <ContentMicroVisual />
            <div className="w-14 h-14 bg-red-50 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
               <Video className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight leading-tight">Content Creation <br/>Services</h3>
            <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">Engaging story-driven content across video, blog, and persuasive sales copywriting.</p>
            <div className="space-y-2 mb-6 flex-grow text-xs font-bold text-slate-500">
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600"/> Reels & Video Ads</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600"/> SEO Article Writing</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-red-600"/> Sales Copywriting</div>
            </div>
            <Link href="/services/content-creation" className="inline-flex items-center gap-2 text-red-600 font-black hover:gap-3 transition-all uppercase text-[10px] tracking-widest">Learn More <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>

          {/* 10. Hosting & Maintenance */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200 shadow-md relative group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full">
            <HostingMicroVisual />
            <div className="w-14 h-14 bg-slate-200 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
               <ShieldCheck className="w-7 h-7 text-slate-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight leading-tight">Hosting & <br/>Maintenance</h3>
            <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed">Managed infrastructure, domain handling, and 24/7 technical support for your site.</p>
            <div className="space-y-2 mb-6 flex-grow text-xs font-bold text-slate-500">
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-slate-600"/> Cloud Web Hosting</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-slate-600"/> Speed Optimization</div>
               <div className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-slate-600"/> Security & Backups</div>
            </div>
            <Link href="/services/hosting" className="inline-flex items-center gap-2 text-slate-600 font-black hover:gap-3 transition-all uppercase text-[10px] tracking-widest">Learn More <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>

        </div>

         {/* 5. Deep Content Add-on (Authority Layer for SEO word count) */}
         <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-16 shadow-lg shadow-slate-200/50">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight capitalize leading-tight">Complete Digital Marketing <br/>Solutions We Offer in <span className="text-blue-600">{locationName}</span></h2>
            <div className="prose prose-slate max-w-none text-slate-600 font-medium space-y-6 text-sm leading-relaxed">
              <p>
                In competitive markets like <strong>Lucknow (UP)</strong> and <strong>Chandigarh (Punjab/Haryana)</strong>, generic digital marketing is no longer enough. Your business needs an <strong>SEO agency</strong> that understands local search intent and <strong>Google Maps visibility</strong>. Whether it's ranking your medical clinic in Gomti Nagar or hazratganj, or scaling your startup in Chandigarh's IT park, our data-first <strong>digital marketing services</strong> ensure you dominate the search results.
              </p>
              <p>
                Our <strong>SEO strategies</strong> are built on three pillars: Technical Excellence, Semantic Content, and Authority Backlinks. We focus on <strong>local SEO optimization</strong> to ensure your business appears in the "Map Pack" for local queries. By optimizing your <strong>GMB profile</strong> and building local citations, we help you capture customers who are looking for services "near me" in Lucknow and Chandigarh.
              </p>
              <p>
                Beyond organic search, our <strong>performance marketing</strong> engines deliver instant ROAS. We manage <strong>Google Ads (PPC)</strong> and <strong>Meta Ads</strong> with a ruthless focus on cost-per-lead. We don't just chase clicks; we chase conversions that turn into revenue for your business.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
             <h3 className="text-xl font-black text-slate-900 mb-6">Why Our Strategies Dominate:</h3>
             <ul className="space-y-4">
                {[
                  "Hyper-Local Targeting for Lucknow & Chandigarh commercial hubs.",
                  "Zero-latency Web architecture built on Next.js for high LCP scores.",
                  "AI-assisted keyword research to find underserved search volume.",
                  "Advanced Remarketing funnels to capture BOF (Bottom of Funnel) leads.",
                  "Real-time Transparent ROI reporting with dedicated account managers."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm font-bold text-slate-700">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-lg shadow-blue-500/20">
                       <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
             </ul>
             <div className="mt-10 p-6 bg-blue-600 rounded-2xl text-white">
                <p className="text-sm font-bold opacity-80 mb-2 uppercase tracking-widest text-center">Free Strategy Consultation</p>
                <p className="text-lg font-black text-center mb-6">Dominate Your Category Today</p>
                <Link href="/contact" className="block w-full text-center py-4 bg-white text-blue-600 font-black rounded-xl hover:bg-slate-50 transition-colors shadow-xl">Get Started</Link>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
