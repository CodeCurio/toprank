"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, Star, TrendingUp, BarChart3, Users, CheckCircle, 
  ShoppingCart, HeartPulse, Calendar, Building, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCTA } from "@/components/ui/animated-cta";

// Import All Hero Images
import HeroSuccessRetail from "../images/hero_success_story.webp";
import HeroSuccessRestaurant from "../images/hero_success_restaurant.webp";
import HeroSuccessHealthcare from "../images/hero_success_healthcare.webp";
import HeroSuccessRealEstate from "../images/hero_success_realestate.webp";

const HERO_SLIDES = [
  {
    id: "retail",
    image: HeroSuccessRetail,
    alt: "Retail shop owner happy with sales",
    m1_label: "Google Rankings",
    m1_value: "#1",
    m1_sub: "Local Search",
    m1_icon: Star,
    m2_label: "Online Revenue",
    m2_value: "+215%",
    m2_sub: "Stunning New Website",
    m2_icon: TrendingUp
  },
  {
    id: "restaurant",
    image: HeroSuccessRestaurant,
    alt: "Restaurant owner happy with full bookings",
    m1_label: "Daily Orders",
    m1_value: "342",
    m1_sub: "Swiggy & Zomato",
    m1_icon: ShoppingCart,
    m2_label: "Table Bookings",
    m2_value: "100%",
    m2_sub: "Fully Booked Today",
    m2_icon: Users
  },
  {
    id: "healthcare",
    image: HeroSuccessHealthcare,
    alt: "Doctor happy with booked clinic",
    m1_label: "Patient Inquiries",
    m1_value: "150+",
    m1_sub: "Monthly Leads",
    m1_icon: HeartPulse,
    m2_label: "Appointments",
    m2_value: "Full",
    m2_sub: "Calendar Booked Out",
    m2_icon: Calendar
  },
  {
    id: "realestate",
    image: HeroSuccessRealEstate,
    alt: "Real estate agent happy with property sales",
    m1_label: "Website Traffic",
    m1_value: "12k+",
    m1_sub: "Qualified Buyers",
    m1_icon: BarChart3,
    m2_label: "Property Sales",
    m2_value: "+65%",
    m2_sub: "Year over Year Growth",
    m2_icon: Building
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const Slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[92vh] pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-slate-50 flex items-center">
      
      {/* Absolute Background Orbs for Premium Vibe */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.12)_0%,transparent_70%)] will-change-transform" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] will-change-transform" 
        />
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.12)_0%,transparent_70%)] will-change-transform" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="max-w-2xl">
            {/* Social Proof / Reviews snippet (Moved to Top) */}
            <motion.div
              initial={{ opacity: 1, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center space-x-4 bg-white/95 md:bg-white/60 md:backdrop-blur-md px-4 py-2.5 rounded-full border border-slate-200/60 shadow-sm mb-8"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                   <div key={i} style={{ zIndex: 5 - i }} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm flex items-center justify-center">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt={`Client ${i}`} className="w-full h-full object-cover" />
                   </div>
                ))}
              </div>
              <div className="flex flex-col pr-2">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900 text-sm">4.9/5</span>
                </div>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                  Top Rated on <span className="inline-flex items-center mx-1 gap-1"><svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#4285F4]" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg><span className="font-bold text-slate-700 capitalize relative top-[0.5px]">Google</span></span> &amp; <span className="inline-flex items-center mx-1 gap-1"><Star className="w-3 h-3 fill-[#00b67a] text-[#00b67a] relative top-[0.5px]" /><span className="font-bold text-slate-700 capitalize relative top-[0.5px]">Trustpilot</span></span>
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              Get Found on Google. {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
                Get Chosen
              </span>{' '}
              by Customers.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl"
            >
              TopRank Digital Service helps local businesses grow with high-converting websites, Google Business Profile (Local SEO), and performance-driven social media marketing — built to generate real enquiries, not just traffic.
            </motion.p>

            {/* CTAs */}
            <motion.div
           initial={false}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
           className="flex flex-col sm:flex-row gap-4 mb-12 relative z-20"
        >
              <AnimatedCTA text="Get Your Free Growth Audit" className="w-full sm:w-auto shadow-[0_8px_30px_rgb(249,115,22,0.3)]" />
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold bg-white/95 md:bg-white/50 md:backdrop-blur-sm border-slate-200 text-slate-700 hover:bg-white hover:text-blue-600">
                View Our Case Studies
              </Button>
            </motion.div>

            {/* Expertise Tags (Replaces Old Reviews Position) */}
            <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 mt-4 border-t border-slate-200/60"
          >
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4">Our Core Expertise</p>
              <div className="flex flex-wrap gap-2.5 max-w-xl">
                {['Website Development', 'Google My Business / Local SEO', 'National SEO', 'Ecommerce Development', 'Social Media Marketing'].map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white shadow-sm border border-slate-200 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-default">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Trust Canvas (Dynamic Slider) - Enabled on Mobile */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative block mt-12 lg:mt-0 perspective-1000"
          >
            <div className="relative rounded-3xl shadow-2xl border-[4px] sm:border-[6px] border-white bg-slate-100 aspect-[4/5] w-full max-w-[500px] ml-auto lg:rotate-1 lg:hover:rotate-0 transition-transform duration-700 ease-out z-10">
              <div className="relative w-full h-full overflow-hidden rounded-2xl sm:rounded-[1.25rem]">
                <motion.div 
                  className="absolute inset-0 z-30 touch-none cursor-grab active:cursor-grabbing"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset }) => {
                    const swipe = offset.x;
                    if (swipe < -40) {
                      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
                    } else if (swipe > 40) {
                      setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
                    }
                  }}
                />
                {HERO_SLIDES.map((slide, idx) => (
                  <motion.div
                    key={slide.id}
                    initial={false}
                    animate={{ 
                      opacity: currentSlide === idx ? 1 : 0,
                      scale: currentSlide === idx ? 1 : 1.05,
                      zIndex: currentSlide === idx ? 10 : 0
                    }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className="object-cover object-center"
                      priority={idx === 0}
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/10 via-transparent to-transparent mix-blend-multiply pointer-events-none" />

              {/* Progress Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
                {HERO_SLIDES.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-6 bg-white shadow-sm" : "w-2 bg-white/50 hover:bg-white/80"}`} 
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Dynamic Metric Card 1 (Top Left) */}
            {HERO_SLIDES.map((slide, idx) => (
              <motion.div
                key={`m1-${slide.id}`}
                initial={false}
                animate={{ 
                  opacity: currentSlide === idx ? 1 : 0,
                  y: currentSlide === idx ? 0 : 20,
                  pointerEvents: currentSlide === idx ? "auto" : "none"
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="absolute -top-6 -left-2 sm:top-[20%] lg:-left-12 bg-white/95 md:bg-white/90 md:backdrop-blur-xl p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white flex items-center gap-3 sm:gap-4 z-40 scale-90 sm:scale-100 origin-top-left will-change-transform"
              >
                <div className="bg-orange-100 text-orange-600 p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0">
                  {(() => {
                    const Icon = slide.m1_icon;
                    return <Icon className="w-6 h-6 fill-orange-500" />;
                  })()}
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{slide.m1_label}</p>
                  <p className="text-[22px] font-black text-slate-900 leading-none mt-1 flex items-center whitespace-nowrap">
                    {slide.m1_value} <span className="text-orange-600 text-[13px] ml-2 font-bold px-2 py-0.5 bg-orange-100 rounded-md truncate max-w-[120px] items-center">{slide.m1_sub}</span>
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Dynamic Metric Card 2 (Bottom Right) */}
            {HERO_SLIDES.map((slide, idx) => (
              <motion.div
                key={`m2-${slide.id}`}
                initial={false}
                animate={{ 
                  opacity: currentSlide === idx ? 1 : 0,
                  y: currentSlide === idx ? 0 : -20,
                  pointerEvents: currentSlide === idx ? "auto" : "none"
                }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                className="absolute -bottom-6 -right-2 sm:bottom-[15%] lg:-right-8 bg-white/95 md:bg-white/95 md:backdrop-blur-xl p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white z-40 scale-[0.85] sm:scale-100 origin-bottom-right will-change-transform"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="bg-green-100 text-green-600 p-2 sm:p-2.5 rounded-lg sm:rounded-xl shrink-0">
                    {(() => {
                      const Icon = slide.m2_icon;
                      return <Icon className="w-5 h-5 stroke-2" />;
                    })()}
                  </div>
                  <p className="font-bold text-slate-800 tracking-tight">{slide.m2_label}</p>
                </div>
                <p className="text-3xl font-black text-slate-900 flex items-end tracking-tight">
                  {slide.m2_value} <span className="text-sm font-black text-green-500 ml-1 mb-1">↑</span>
                </p>
                
                <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center gap-2 text-[13px] font-bold text-slate-600 whitespace-nowrap">
                  <CheckCircle className="w-4 h-4 text-green-500 fill-green-100" /> {slide.m2_sub}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
