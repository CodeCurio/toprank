"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Target, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import aboutThumbnail from "@/components/images/About-section-thumbnail.webp";

export interface AboutCardContent {
  title: string;
  content: string;
  icon?: React.ReactNode;
  bgZ?: string;
  badge?: string;
  trust?: string;
  hasCTA?: boolean;
}

export interface AboutContent {
  smallTitle?: string;
  headline?: React.ReactNode;
  paragraph?: React.ReactNode;
  cards?: AboutCardContent[];
}

interface SimpleAboutSectionProps {
  location?: string;
  content?: AboutContent;
}

export function SimpleAboutSection({ location, content }: SimpleAboutSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const defaultCards: AboutCardContent[] = [
    {
      title: "The Reality of SEO in 2024",
      content: "Most marketing agencies sell vanity metrics—likes, generic traffic, or beautiful designs that never actually convert. TopRank was built to solve the real problem: engineering predictable lead generation that moves the needle.",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      badge: "ROI-Focused",
    },
    {
      title: "Our Transparent Philosophy",
      content: "We believe in ruthless transparency and data-driven performance. No guesswork. Every backlink, every piece of content, and every UI tweak is calculated with a strict focus on maximizing your Return on Investment.",
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      badge: "Ruthless Transparency",
    },
    {
      title: "Scalable Acquisition Systems",
      content: "Our methodology is built for scale. We don't just 'do SEO'—we build a predictable customer acquisition machine that grows with your business ambitions.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      badge: "Industry Leader",
      hasCTA: true
    }
  ];

  const cardsToUse = content?.cards || defaultCards;

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split: Text and Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 lg:mb-24">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-center md:text-left"
          >
            <div className="inline-flex mx-auto md:mx-0 items-center justify-center md:justify-start gap-2 px-4 py-2 bg-blue-50 border border-blue-100/50 rounded-full w-max text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
              {content?.smallTitle || "Who we are"}
            </div>
            
            {content?.headline ? (
              content.headline
            ) : (
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight shadow-sm relative z-20">
                Beyond Traffic. <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">True Growth.</span>
              </h2>
            )}

            {content?.paragraph ? (
              content.paragraph
            ) : (
              <div className="mt-6 text-slate-600 text-base md:text-lg font-medium leading-relaxed relative z-20 mb-8 space-y-4">
                <p>We bridge the gap between aesthetics and actual revenue generation for ambitious brands{location ? ` in ${location}` : ""}.</p>
                <p>Most marketing agencies sell vanity metrics—likes, generic traffic, or beautiful designs that never actually convert. TopRank was built to solve the real problem: engineering predictable lead generation that moves the needle.</p>
              </div>
            )}

            <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
              <Link href="/about" className="px-8 py-4 bg-slate-900 hover:bg-blue-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-slate-900/10 active:scale-95 flex items-center gap-2 group">
                Learn More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Video Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 bg-slate-900 group"
          >
            {isPlaying ? (
              <video 
                src="/videos/showreel.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <Image
                  src={aboutThumbnail}
                  alt="TopRank Digital Service Showreel"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <motion.button 
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 backdrop-blur-md text-blue-600 flex items-center justify-center shadow-[0_10px_40px_rgba(59,130,246,0.3)] cursor-pointer border border-blue-100"
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1.5" />
                  </motion.button>
                  <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mt-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    Watch Showreel
                  </span>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* Bottom: 3 Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cardsToUse.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-white border border-slate-200/60 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                  {card.icon}
                </div>
                {card.badge && (
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 text-[9px] font-black uppercase tracking-widest rounded-full">
                    {card.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {card.content}
              </p>
              
              {card.hasCTA && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link href="#contact" className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold hover:text-blue-700 transition-colors">
                    Build My Strategy <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
