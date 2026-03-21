"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Play, Sparkles, Zap, Globe, Target, MousePointer2, ArrowRight } from "lucide-react";
import { AnimatedCTA } from "@/components/ui/animated-cta";
import Image from "next/image";
import aboutThumbnail from "@/components/images/About-section-thumbnail.webp";

// Stable Seeded Random
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

const BRAND_COLORS = ["#f97316", "#ec4899", "#3b82f6"];
const SPARK_COUNT = 16;

export function ImmersiveAboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const sparks = useMemo(() => {
    return Array.from({ length: SPARK_COUNT }).map((_, i) => ({
      id: i,
      x: (seededRandom(i + 1) - 0.5) * 140, 
      y: (seededRandom(i + 2) - 0.5) * 140,
      color: BRAND_COLORS[i % BRAND_COLORS.length],
      size: seededRandom(i + 3) * 6 + 4,
      delay: seededRandom(i + 4) * 0.1,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 35,
    mass: 0.1,
  });

  // --- 1. Header Logic ---
  const headerOpacity = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const headerY = useTransform(smoothProgress, [0, 0.15, 0.25], [0, 0, -20]);

  // --- 2. Narrative Logic ---
  const sentences = [
    "At TopRank, we don’t just follow digital trends—we turn them into growth opportunities.",
    "Our mission is to help local businesses dominate their market through high-impact SEO",
    "and conversion-focused digital experiences that don’t just stop the scroll,",
    "but turn attention into real customers and consistent business growth."
  ];
  
  const textOpacity = useTransform(smoothProgress, [0.3, 0.4, 0.45, 0.55], [0, 1, 1, 0]);
  const textY = useTransform(smoothProgress, [0.3, 0.4, 0.45, 0.55], [40, 0, 0, -60]);

  // --- 3. Linear Expansion Sequence (Box -> Full Immersion -> Persistent) ---
  const boxOpacity = useTransform(smoothProgress, [0.45, 0.55], [0, 1]);
  const boxScale = useTransform(smoothProgress, [0.45, 0.55], [0.9, 1]);
  
  // No shrinking back. Stay large for high-impact CTA reveal.
  const widthVal = isMobile ? "92vw" : "85vw";
  const heightVal = isMobile ? "35vh" : "55vh";
  const boxWidth = useTransform(smoothProgress, [0.55, 0.85], [isMobile ? "280px" : "400px", widthVal]);
  const boxHeight = useTransform(smoothProgress, [0.55, 0.85], [isMobile ? "180px" : "240px", heightVal]);
  
  // Slide it slightly up at the end to make room for the button
  const boxY = useTransform(smoothProgress, [0.55, 0.85, 0.95], [80, 0, -50]);

  const ctaOpacity = useTransform(smoothProgress, [0.88, 0.98], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.88, 0.98], [25, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-white z-0"
      id="about-immersive"
    >
      <div className="sticky top-20 h-[calc(100vh-80px)] w-full overflow-hidden z-20 px-4 md:px-0">
        <div className="relative w-full h-full max-w-7xl mx-auto px-6">
            
            {/* Header Slot */}
            <motion.div 
              style={{ opacity: headerOpacity, y: headerY }}
              className="absolute top-[8vh] left-0 right-0 flex flex-col items-center pointer-events-none z-30"
            >
              <div className="px-5 py-2 bg-slate-900 border border-slate-700 text-white rounded-full flex items-center gap-3 shadow-2xl mb-6">
                 <Sparkles className="w-4 h-4 text-orange-400 fill-orange-400" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">The Methodology</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-2">
                 Precision Digital <span className="text-blue-600">Acquisition</span>
              </h2>
            </motion.div>

            {/* Narrative Slot - Sentence-based for Performance */}
            <motion.div 
              style={{ 
                opacity: textOpacity, 
                y: textY, 
                top: "50%",
                translateY: "-50%"
              }}
              className="absolute left-0 right-0 flex justify-center text-center z-20 pointer-events-none px-4"
            >
              <h2 className="text-xl md:text-2xl lg:text-[42px] font-bold text-slate-800 leading-[1.4] md:leading-[1.6] tracking-tight max-w-5xl mt-[25px]">
                {sentences.map((sentence, i) => (
                  <Sentence key={i} text={sentence} index={i} total={sentences.length} progress={smoothProgress} isMobile={isMobile} mounted={mounted} />
                ))}
              </h2>
            </motion.div>

            {/* Video Visual Slot */}
            <motion.div 
              style={{ 
                opacity: boxOpacity, 
                top: "50%",
                translateY: "-50%",
                scale: boxScale,
                y: boxY
              }}
              className="absolute left-0 right-0 flex flex-col items-center justify-center z-10"
            >
                <div className="absolute inset-0 flex items-center justify-center -z-10 translate-y-[-20px]">
                  {sparks.slice(0, isMobile ? 4 : SPARK_COUNT).map((spark) => (
                    <SingleSpark key={spark.id} spark={spark} progress={smoothProgress} isMobile={isMobile} />
                  ))}
                </div>

                <motion.div
                  style={{ width: boxWidth, height: boxHeight }}
                  className="shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] rounded-[24px] relative overflow-hidden group border border-white/10 will-change-[width,height]"
                >
                  <Image
                    src={aboutThumbnail}
                    alt="TopRank Digital Service – Strategy Showreel"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 z-10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                     <motion.div 
                       whileHover={{ scale: 1.1 }}
                       className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm text-slate-950 flex items-center justify-center shadow-2xl cursor-pointer"
                     >
                        <Play className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1.5" />
                     </motion.div>
                     <div className="mt-8 text-center px-6">
                        <span className="text-white text-[10px] md:text-[12px] font-black tracking-[0.6em] uppercase opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap">Launch Strategy Showreel</span>
                     </div>
                  </div>
                </motion.div>

                <motion.div 
                  style={{ opacity: ctaOpacity, y: ctaY }}
                  className="mt-12 flex flex-col items-center gap-6"
                >
                  <AnimatedCTA 
                    text="Read More About Us" 
                    tooltipText="Behind the scenes"
                    icon={<ArrowRight className="w-5 h-5" />}
                    className="shadow-[0_8px_30px_rgb(249,115,22,0.3)]"
                  />
                </motion.div>
              </motion.div>

          </div>
        </div>
    </section>
  );
}

function SingleSpark({ spark, progress, isMobile }: { spark: any; progress: MotionValue<number>; isMobile: boolean }) {
  const start = 0.5 + spark.delay;
  const end = 0.85;
  return (
    <motion.div
      style={{
        x: useTransform(progress, [start, end], [`${spark.x}vw`, "0vw"]),
        y: useTransform(progress, [start, end], [`${spark.y}vh`, "0px"]),
        scale: useTransform(progress, [start, end], [3.5, 0]),
        opacity: useTransform(progress, [start, start + 0.1, end], [0, 0.8, 0]),
        backgroundColor: spark.color,
        width: spark.size,
        height: spark.size,
        boxShadow: isMobile ? "none" : `0 0 25px ${spark.color}`,
      }}
      className="absolute rounded-full pointer-events-none will-change-transform"
    />
  );
}

function Sentence({ text, index, total, progress, isMobile, mounted }: { text: string; index: number; total: number; progress: MotionValue<number>; isMobile: boolean; mounted: boolean }) {
  const start = (index / total) * 0.45;
  const end = start + (0.5 / total);
  
  // Create transforms but don't apply until mounted to avoid hydration blur mismatch
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [20, 0]);
  const blurVal = useTransform(progress, [start, end], ["blur(12px)", "blur(0px)"]);

  return (
    <motion.span 
      style={{ 
        opacity, 
        y, 
        filter: isMobile ? "none" : blurVal 
      }} 
      className="inline-block w-full mb-2 will-change-transform font-bold"
    >
      {text}
    </motion.span>
  );
}
