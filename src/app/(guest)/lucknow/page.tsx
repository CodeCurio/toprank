import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhatMakesUsDifferent } from "@/components/sections/WhatMakesUsDifferent";
import { ServingAreas } from "@/components/sections/ServingAreas";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowWeGrow } from "@/components/sections/HowWeGrow";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Target, TrendingUp, ShieldCheck, Palette, Code, Search, MapPin, Layout, Zap, Rocket } from "lucide-react";

import { SimpleAboutSection } from "@/components/sections/SimpleAboutSection";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Lucknow | TopRank Digital",
  description: "Looking for the best digital marketing agency in Lucknow? TopRank provides expert SEO, Google Ads, and Web Development to grow your local business.",
  alternates: {
    canonical: "https://www.toprankindia.com/lucknow"
  }
};

export default function LucknowHome() {
  const lucknowHeroContent = {
    headline: (
      <span key="headline">
        Professional Website Designer in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">Lucknow</span> That Actually Brings You Clients
      </span>
    ),
    subheadline: (
      <div key="subheadline" className="space-y-3 text-[15px] sm:text-base pr-4">
        <p>Looking for a website designer in Lucknow who doesn’t just create good-looking websites—but builds websites that generate leads and sales?</p>
        <p>At TopRank Digital Service, we design high-converting, fast, and SEO-optimized websites tailored for businesses that want real growth—not just an online presence.</p>
        <p>Whether you’re a startup, local shop, clinic, or established brand, our expert team ensures your website doesn’t just exist… it performs.</p>
        <p className="font-bold text-slate-800 pt-2">👉 Get a website that works for you 24/7.</p>
      </div>
    ),
    ctaText: "Get Free Consultation",
    tags: ["Affordable Pricing", "On-Time Delivery", "Conversion-Focused Design"]
  };

  const lucknowAboutContent = {
    smallTitle: "Who We Are",
    headline: (
      <h2 key="headline" className="text-3xl md:text-4xl lg:text-[2.8rem] font-black text-slate-900 leading-[1.15] tracking-tight shadow-sm relative z-20 mb-6">
        We Don’t Build Websites. <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">We Build Business Growth Systems.</span>
      </h2>
    ),
    paragraph: (
      <div key="paragraph" className="text-slate-600 text-base font-medium leading-relaxed space-y-4 pr-0 md:pr-4">
        <p>At TopRank Digital Service, we are more than just a typical website designer in Lucknow. We are a team of strategists, designers, and developers focused on one thing—helping businesses generate real results online.</p>
        <p>In a market full of agencies delivering attractive designs with zero performance, we take a different approach. Every website we create is built with a clear goal: traffic, leads, and conversions.</p>
        <p>From startups to established businesses, we partner with brands that are serious about growth—not just online presence.</p>
      </div>
    ),
    cards: [
      {
        title: "Result-Driven Approach",
        content: "We don’t believe in “just design.” Every website is planned with a strategy that focuses on user behavior, conversion flow, and lead generation.",
        icon: <Target key="target" className="w-6 h-6 text-blue-600" />,
        badge: "Built for Conversions",
      },
      {
        title: "Affordable & Scalable",
        content: "Get premium-quality website designing in Lucknow without overpaying. Our solutions are cost-effective and designed to grow with your business.",
        icon: <TrendingUp key="trending-up" className="w-6 h-6 text-indigo-600" />,
        badge: "Value That Grows",
      },
      {
        title: "On-Time. Every Time.",
        content: "We respect your time and business goals. Our streamlined process ensures fast delivery without compromising on quality or performance.",
        icon: <ShieldCheck key="shield-check" className="w-6 h-6 text-blue-600" />,
        badge: "Deadline Guaranteed",
        hasCTA: true
      }
    ]
  };

  const lucknowServicesContent = {
    tag: "Growth Systems",
    headline: (
      <h2 key="headline" className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
        Solutions Built for <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
          Market Dominance in Lucknow.
        </span>
      </h2>
    ),
    paragraph: (
      <p key="paragraph" className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto border-t border-blue-600/10 pt-6">
        Don’t settle for average digital presence. At TopRank Digital Service, we build complete growth systems that help businesses attract, engage, and convert customers consistently.
      </p>
    ),
    services: [
      {
        id: "web-design",
        title: "Website Designing in Lucknow",
        category: "Design System",
        description: "Modern, mobile-first, and conversion-focused designs that make your business stand out and turn visitors into paying customers.",
        icon: "Palette",
        isSpeciality: true,
        specialityText: "+ High Converting",
        link: "/services/web-design"
      },
      {
        id: "web-dev",
        title: "Web Development in Lucknow",
        category: "Development",
        description: "Fast, secure, and scalable websites built with clean code and performance optimization for long-term business growth.",
        icon: "Code",
        isSpeciality: true,
        specialityText: "+ Performance Driven",
        link: "/services/web-development"
      },
      {
        id: "seo",
        title: "SEO Services in Lucknow",
        category: "Search Engineering",
        description: "Rank higher on Google with data-driven SEO strategies focused on high-intent keywords and long-term visibility.",
        icon: "Search",
        isSpeciality: true,
        specialityText: "+ Organic Growth",
        link: "/services/seo"
      },
      {
        id: "local-seo",
        title: "Local SEO & GMB Optimization",
        category: "Local Dominance",
        description: "Dominate local search results and Google Maps with optimized profiles, citations, and location-based strategies.",
        icon: "MapPin",
        isSpeciality: true,
        specialityText: "+ Map Ranking",
        link: "/services/local-seo"
      },
      {
        id: "ecommerce",
        title: "E-Commerce Website Development",
        category: "E-Commerce",
        description: "Launch high-converting online stores with seamless user experience, secure payments, and optimized product journeys.",
        icon: "Layout",
        isSpeciality: true,
        specialityText: "+ Sales Focused",
        link: "/services/ecommerce"
      },
      {
        id: "landing-page",
        title: "Landing Page Design",
        category: "Conversion System",
        description: "Conversion-optimized landing pages designed to maximize leads, clicks, and campaign performance.",
        icon: "Target",
        isSpeciality: true,
        specialityText: "+ Lead Booster",
        link: "/services/landing-page"
      },
      {
        id: "redesign",
        title: "Website Redesign & Speed Optimization",
        category: "Optimization",
        description: "Turn slow, outdated websites into high-performing assets with better UX, speed, and SEO structure.",
        icon: "Zap",
        isSpeciality: true,
        specialityText: "+ Performance Upgrade",
        link: "/services/web-redesign"
      },
      {
        id: "website-builder",
        title: "Website Builder Solutions",
        category: "Quick Launch",
        description: "Affordable and scalable website builder in Lucknow solutions for startups and small businesses looking to launch quickly.",
        icon: "Rocket",
        isSpeciality: true,
        specialityText: "+ Budget Friendly",
        link: "/services/website-builder"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <Hero location="Lucknow" content={lucknowHeroContent} />
        <TrustBar />
        <SimpleAboutSection location="Lucknow" content={lucknowAboutContent} />
        <ServicesSection location="Lucknow" content={lucknowServicesContent} />
        <ServingAreas />
        <WhatMakesUsDifferent />
        <HowWeGrow />
        <ReviewsSection location="Lucknow" />
        <FAQSection location="Lucknow" />
        <ContactSection />
      </main>
    </div>
  );
}
