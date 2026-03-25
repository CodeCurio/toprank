"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { PhoneCall, MessageSquare, Calendar, X, Sparkles, Send, Bot } from "lucide-react";
import Image from "next/image";

// Custom WhatsApp SVG
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Magnetic Spotlight Action Item
function ActionItem({ 
  icon: Icon, 
  title, 
  subtitle, 
  href, 
  colorClass, 
  delay,
  isMobile
}: { 
  icon: any, 
  title: string, 
  subtitle: string, 
  href: string, 
  colorClass: string,
  delay: number,
  isMobile: boolean
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 200 }}
      onMouseMove={handleMouseMove}
      className="group relative flex items-center p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors overflow-hidden"
    >
      {!isMobile && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 80%)`,
          }}
        />
      )}
      
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 ${colorClass} transition-transform duration-500 group-hover:scale-110 shadow-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <div className="ml-4 flex-grow">
        <h4 className="text-white font-bold text-sm tracking-wide">{title}</h4>
        <p className="text-slate-400 text-xs mt-0.5 group-hover:text-slate-300 transition-colors">{subtitle}</p>
      </div>

      <div className="shrink-0 mr-2 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all">
        <Send className="w-4 h-4" />
      </div>
    </motion.a>
  );
}

export function FloatingContact() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // To handle the greeting typing effect
  const [greetingText, setGreetingText] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const fullGreeting = "👋 Need help growing your business?";

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      let i = 0;
      setGreetingText("");
      const timer = setInterval(() => {
        setGreetingText(fullGreeting.slice(0, i));
        i++;
        if (i > fullGreeting.length) clearInterval(timer);
      }, 30);
      return () => clearInterval(timer);
    } else {
      setGreetingText("");
    }
  }, [isOpen]);


  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-[4px] pointer-events-none z-[-1]"
          />
        )}
      </AnimatePresence>

      {/* The main widget container using layout morphing */}
      <div
        className="relative overflow-visible pointer-events-auto"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="button"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-16 h-16 rounded-full flex items-center justify-center focus:outline-none z-10 shadow-2xl bg-slate-950 border border-slate-800"
            >
              {/* Spinning glowing gradient ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-blue-600 via-pink-500 to-orange-500 z-[-1] opacity-80 blur-[3px]" 
              />
              
              <div className="absolute inset-0 bg-slate-950 rounded-full" />
              
              <motion.div 
                className="relative z-10 text-white flex items-center justify-center"
              >
                <Bot className="w-8 h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              </motion.div>
              
              {/* Notification dot */}
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-slate-950 rounded-full animate-pulse" />
            </motion.button>
          ) : (
            <motion.div
              key="widget"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-[calc(100vw-3rem)] sm:w-[360px] max-w-[400px] origin-bottom-right bg-slate-950/90 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] p-5 overflow-hidden flex flex-col"
            >
              {/* Top ambient glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-20 bg-blue-500/20 blur-[50px] pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-pink-600 p-0.5 relative">
                    <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-blue-500 border-2 border-slate-950 rounded-full" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-blue-500 border-2 border-slate-950 rounded-full animate-ping opacity-50" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm tracking-wide">TopRank Assistant</h3>
                    <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Online Now</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Greeting Bubble */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-slate-800/80 rounded-2xl rounded-tl-sm p-4 mb-5 border border-slate-700/50 relative z-10 shadow-inner"
              >
                <p className="text-slate-200 text-sm leading-relaxed font-medium min-h-[40px]">
                  {greetingText}
                  <motion.span 
                    animate={{ opacity: [0, 1, 0] }} 
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-1.5 h-3.5 bg-blue-500 ml-1 translate-y-0.5"
                  />
                </p>
              </motion.div>

              {/* Action Stack */}
              <div className="flex flex-col gap-2.5 relative z-10">
                <ActionItem 
                  icon={WhatsAppIcon}
                  title="Chat on WhatsApp"
                  subtitle="Instantly connect"
                  href="https://wa.me/919305030523"
                  colorClass="bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_4px_15px_rgba(37,99,235,0.4)]"
                  delay={0.3}
                  isMobile={isMobile}
                />
                <ActionItem 
                  icon={PhoneCall}
                  title="Call an Expert"
                  subtitle="+91 93050 30523"
                  href="tel:+919305030523"
                  colorClass="bg-gradient-to-br from-blue-500 to-indigo-600"
                  delay={0.4}
                  isMobile={isMobile}
                />
                <ActionItem 
                  icon={Calendar}
                  title="Book Free Audit"
                  subtitle="Get your strategy"
                  href="#"
                  colorClass="bg-gradient-to-br from-orange-400 to-pink-500"
                  delay={0.5}
                  isMobile={isMobile}
                />
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
