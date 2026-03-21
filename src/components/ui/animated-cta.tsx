"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { PhoneCall, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedCTAProps extends HTMLMotionProps<"button"> {
  text: string;
  tooltipText?: string;
  variant?: "gradient" | "default";
  icon?: React.ReactNode | null;
}

export function AnimatedCTA({ 
  text, 
  tooltipText = "Zero cost, total clarity.", 
  variant = "gradient",
  icon = <PhoneCall className="w-5 h-5 fill-white drop-shadow-md" />,
  className, 
  ...props 
}: AnimatedCTAProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const letters = text.split("");

  const baseStyles = "relative inline-flex h-12 lg:h-14 items-center justify-center rounded-full px-8 text-base lg:text-lg font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden";
  const variantStyles = {
    gradient: "bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 hover:opacity-90 shadow-orange-500/25",
    default: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/25"
  };

  // The portal tooltip — rendered directly into document.body, 
  // bypassing all parent CSS transforms (the root cause of the scroll bug)
  const tooltipPortal = mounted && typeof document !== "undefined"
    ? createPortal(
        <AnimatePresence>
          {isHovered && tooltipText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              // position:fixed here IS relative to viewport (correct) because
              // this element is a direct child of document.body — no transformed ancestors
              style={{
                position: "fixed",
                left: mousePos.x + 14,
                top: mousePos.y + 14,
                zIndex: 9999,
                pointerEvents: "none",
              }}
            >
              <div className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 p-[2px] shadow-2xl">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center animate-pulse">
                    <span className="text-orange-600 text-[10px] font-black">✔</span>
                  </div>
                  <span className="text-sm font-bold text-slate-800 tracking-tight whitespace-nowrap">{tooltipText}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <>
      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onPointerEnter={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
        onPointerMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        <div className="flex items-center justify-center relative z-10 w-full transition-all duration-300">
          <div className="flex whitespace-pre z-20 items-center justify-center">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                animate={isHovered ? { x: -2 } : { x: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: isHovered ? i * 0.015 : 0, 
                  type: "spring", stiffness: 300, damping: 25 
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <AnimatePresence>
            {isHovered && icon !== null && (
              <motion.div
                initial={{ width: 0, opacity: 0, scale: 0.5, marginLeft: 0 }}
                animate={{ width: "auto", opacity: 1, scale: 1, marginLeft: 6 }}
                exit={{ width: 0, opacity: 0, scale: 0.5, marginLeft: 0 }}
                transition={{ duration: 0.35, type: "spring", stiffness: 350, damping: 25 }}
                className="flex items-center justify-center overflow-hidden z-10"
              >
                <motion.div
                  animate={
                    React.isValidElement(icon) && (icon as any).type?.name === "PhoneCall"
                      ? { rotate: [0, -15, 15, -15, 15, 0] }
                      : {}
                  }
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.2 }}
                >
                  {icon}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.button>

      {tooltipPortal}
    </>
  );
}
