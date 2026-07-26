"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { TopBar } from "./TopBar";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import LogoImg from "../images/TopRank logo.webp";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 25);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[60]">
        {/* Animated TopBar - Collapses on scroll */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ height: "auto", opacity: 1 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <TopBar />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300 ${
            isScrolled ? "shadow-[0_4px_25px_-5px_rgba(0,0,0,0.08)] py-2.5" : "py-3"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              
              {/* Brand Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="group flex items-center gap-2">
                  <Image 
                    src={LogoImg}
                    alt="TopRank Digital Service" 
                    className="h-11 sm:h-12 lg:h-[50px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    priority 
                  />
                </Link>
              </div>

              {/* Desktop Navigation Links & Mega Menus */}
              <div className="hidden md:flex md:items-center md:space-x-6 xl:space-x-8">
                <DesktopMenu />
              </div>

              {/* Premium Header CTA */}
              <div className="hidden md:flex items-center">
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white font-black text-xs uppercase tracking-widest transition-all shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-white" />
                  <span>Get Free Audit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Mobile Menu Toggle Button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:text-blue-600 hover:bg-slate-100 focus:outline-none transition-colors"
                  aria-label="Toggle Navigation Menu"
                >
                  {mobileMenuOpen ? (
                    <X className="block h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>

            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />
    </>
  );
}
