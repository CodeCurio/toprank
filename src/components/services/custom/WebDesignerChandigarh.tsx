"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Monitor, Zap, Search, Layout, HelpCircle, Star, Phone } from "lucide-react";
import Link from "next/link";
import { usePhone } from "@/hooks/usePhone";
import { ContactSection } from "@/components/sections/ContactSection";

export function WebDesignerChandigarh() {
  const phone = usePhone();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-40 pointer-events-none" />
        
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-[10px] font-black uppercase tracking-[0.25em] mb-6 shadow-sm"
            >
              <Star className="w-3.5 h-3.5 fill-blue-100 text-blue-700" />
              Award-Winning Web Design
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8"
            >
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600">Web Designer</span> <br className="hidden sm:block" />
              in Chandigarh.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-600 font-medium leading-relaxed mb-10 max-w-3xl"
            >
              We design zero-latency, high-converting websites engineered on Next.js. Whether you are in Sector 17, Mohali, Panchkula, or Zirakpur, our custom UI/UX solutions turn your visitors into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="px-8 py-4 bg-slate-900 hover:bg-black text-white text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-slate-900/20 active:scale-95 flex items-center justify-center gap-2">
                Launch My Website <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:+91${phone.raw}`} className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2">
                Call Our Designer
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            <div className="lg:col-span-2 space-y-10">
              <div className="prose prose-slate max-w-none space-y-6">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  Expert Web Design Services Engineered for Business Growth
                </h2>
                <p className="text-slate-600 font-medium text-base leading-relaxed">
                  As the leading <strong>web designer in Chandigarh</strong>, we bridge the gap between creative visual designs and logical frontend engineering. Most web agencies build websites on slow WordPress builders that take 5+ seconds to load and have terrible Core Web Vitals. We construct custom digital assets using <strong>Next.js and React</strong>, giving you a site that loads in milliseconds, ranks highly on Google search results, and keeps users engaged.
                </p>
                <p className="text-slate-600 font-medium text-base leading-relaxed">
                  Our comprehensive approach ensures that your website is not just a digital brochure, but a primary lead generation engine. We optimize the user journey with strategic call-to-actions, intuitive typography, and smooth micro-animations. From local retail outlets in <strong>Chandigarh Sector 17</strong> to corporate tech giants in <strong>Mohali Phase 8</strong>, we deliver customized layouts that represent your brand authority.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Monitor className="w-6 h-6 text-blue-600" />,
                    title: "Custom UI/UX Architecture",
                    desc: "Handcrafted layout designs in Figma optimized for conversion rate optimization (CRO) and user engagement."
                  },
                  {
                    icon: <Zap className="w-6 h-6 text-pink-600" />,
                    title: "Lightning-Fast Performance",
                    desc: "Built on Next.js with server-side rendering (SSR) to ensure maximum speed and a perfect 100% Core Web Vitals score."
                  },
                  {
                    icon: <Search className="w-6 h-6 text-indigo-600" />,
                    title: "SEO-Ready Structures",
                    desc: "Programmatic schema setups, semantic HTML5, and built-in local sitemaps to index easily on Google."
                  },
                  {
                    icon: <Layout className="w-6 h-6 text-orange-600" />,
                    title: "E-Commerce Solutions",
                    desc: "Scalable stores with secure checkout pipelines, custom product grids, and rapid search filtering features."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Card / Trust Block */}
            <div className="lg:col-span-1 bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4">Why TopRank is the Top Choice</h3>
              <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-8">
                We have engineered over 100+ digital assets for high-growth startups, professional clinics, and local enterprises in Chandigarh.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "100% Custom layouts, no pre-built templates",
                  "Mobile-first design principles guaranteed",
                  "Free SSL certificate & Cloudflare CDN setup",
                  "Dedicated ongoing support & maintenance"
                ].map((val, idx) => (
                  <li key={idx} className="flex gap-3 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="block w-full py-4 text-center bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-[10px] rounded-2xl transition-colors shadow-lg shadow-blue-600/20">
                Get a Free Quote
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* The Web Design Process */}
      <section className="py-24 bg-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Our Design & <span className="text-blue-600">Dev Process</span>
            </h2>
            <p className="text-slate-500 font-medium">
              We execute a systematic, 4-stage deployment methodology to deliver unmatched visual aesthetics and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Visual Figma Draft", desc: "We design high-fidelity visual mockups mapping your brand aesthetic and get your approval." },
              { step: "02", title: "Next.js Coding", desc: "We convert the Figma layout into semantic, zero-latency React components and Next.js static pages." },
              { step: "03", title: "SEO Integration", desc: "We deploy structural schemas, optimize image files with modern formats, and setup local GMB anchors." },
              { step: "04", title: "Launch & Support", desc: "We deploy the asset on fast cloud hosting platforms and deliver weekly analytical metrics." }
            ].map((node, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative group hover:border-blue-200 transition-all shadow-sm">
                <div className="text-3xl font-black text-blue-600 opacity-40 mb-6 group-hover:opacity-100 transition-opacity">
                  {node.step}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{node.title}</h3>
                <p className="text-slate-500 font-medium text-xs leading-relaxed">{node.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-blue-600" />
              FAQs
            </h2>
            <p className="text-slate-500 font-bold">
              Everything you need to know about hiring a web designer in Chandigarh.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is the cost of hiring a web designer in Chandigarh?",
                a: "The cost depends entirely on your project scope, custom design requirements, and functionality. A standard premium business website starts from INR 25,000, whereas dynamic custom e-commerce stores or Next.js React web apps are quoted based on specific modules. Contact us to get an exact custom quote for your requirements."
              },
              {
                q: "How long does it take to design and launch a website?",
                a: "A standard 5-to-10 page custom business website takes 2 to 3 weeks from wireframing to official launch. Complex e-commerce layouts or custom booking platforms can take 4 to 6 weeks. We prioritize quality checks and speed optimizations at every stage."
              },
              {
                q: "Do you build websites on WordPress or Next.js?",
                a: "While we can build custom WordPress websites if requested, we highly recommend Next.js. WordPress builders often produce bloated source code, which leads to slow page loads. Next.js produces static, fast-loading HTML pages, which Google ranks higher due to better performance and UX."
              },
              {
                q: "Will my website rank on Google search results?",
                a: "Yes. Every website designed by us includes foundational SEO configuration. We set up meta tags, sitemaps, clean semantic heading hierarchies, and schema structures. For competitive industries, we recommend enrolling in our monthly local and national SEO packages to dominate the SERPs."
              }
            ].map((faq, idx) => (
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
