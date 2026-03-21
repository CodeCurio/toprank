"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { Menu, X } from "lucide-react";
import { AnimatedCTA } from "@/components/ui/animated-cta";

import Image from "next/image";
import LogoImg from "../images/TopRank logo.webp";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const unsubscribe = scrollY.on("change", (latest) => {
      const shouldBeScrolled = latest > 50;
      setIsScrolled(shouldBeScrolled);
    });
    return () => unsubscribe();
  }, [scrollY]);
  return (
    <>
      <motion.nav
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 pointer-events-auto border-b border-slate-100 ${
          isScrolled || mobileMenuOpen
            ? "bg-white/80 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image 
                  src={LogoImg}
                  alt="TopRank Digital Service" 
                  className="h-14 lg:h-[60px] w-auto object-contain transition-transform hover:scale-105"
                  priority 
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <DesktopMenu />
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <AnimatedCTA text="Get a Free Audit" className="!h-10 !px-6 !text-sm" />
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />
    </>
  );
}
