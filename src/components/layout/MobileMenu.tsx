"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const MAIN_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
];

const SECONDARY_LINKS = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact Us", href: "/contact" },
];

import { SERVICES_DATA } from "@/lib/services-data";

const LOCATIONS = [
  { 
    name: "Lucknow (HQ)", 
    address: "A47/32, Sector 01, Gomti Nagar", 
    href: "/lucknow" 
  },
  { 
    name: "Chandigarh", 
    address: "Shop No. 8, Sector 34B", 
    href: "/chandigarh" 
  }
];

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

// Stack Navigation State Types
type ViewState = "main" | "services" | "locations" | string;

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const [currentView, setCurrentView] = useState<ViewState>("main");
  
  // Reset view when menu closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setCurrentView("main"), 300);
    }
  }, [isOpen]);

  // Framer Motion constraints to force GPU usage and smooth 60fps
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0
    })
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[60] xl:hidden transform-gpu"
            onClick={closeMenu}
          />

          {/* Stack Container */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 h-[85vh] bg-white rounded-t-3xl shadow-2xl z-[70] xl:hidden overflow-hidden flex flex-col transform-gpu"
          >
            {/* Header / Draggable Area */}
            <div className="flex-shrink-0 flex items-center justify-center pt-4 pb-2 border-b border-slate-100 relative">
               <div className="w-12 h-1.5 bg-slate-200 rounded-full mb-2" />
               {currentView !== "main" && (
                 <button 
                   onClick={() => setCurrentView("main")}
                   className="absolute left-4 top-4 p-2 text-slate-500 hover:text-slate-900 transition-colors"
                 >
                   <ArrowLeft className="h-5 w-5" />
                 </button>
               )}
            </div>

            <div className="flex-1 relative overflow-hidden">
              <AnimatePresence initial={false} custom={currentView !== "main" ? 1 : -1}>
                
                {currentView === "main" && (
                  <motion.div
                    key="main"
                    custom={-1}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 w-full h-full overflow-y-auto px-6 py-4 pb-48 transform-gpu"
                  >
                    <div className="space-y-1">
                      {MAIN_LINKS.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={closeMenu}
                          className="block py-4 text-2xl font-black tracking-tight text-slate-900 border-b border-slate-100"
                        >
                          {link.name}
                        </Link>
                      ))}

                      {/* Services Stack Trigger */}
                      <button
                        onClick={() => setCurrentView("services")}
                        className="w-full flex items-center justify-between py-4 text-left text-2xl font-black tracking-tight text-slate-900 border-b border-slate-100"
                      >
                        Services
                        <ChevronRight className="h-6 w-6 text-slate-400" />
                      </button>

                      {/* Locations Stack Trigger */}
                      <button
                        onClick={() => setCurrentView("locations")}
                        className="w-full flex items-center justify-between py-4 text-left text-h4 font-black tracking-tight text-slate-900 border-b border-slate-100"
                      >
                        <span className="text-2xl">Serving Locations</span>
                        <ChevronRight className="h-6 w-6 text-slate-400" />
                      </button>

                      {SECONDARY_LINKS.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={closeMenu}
                          className="block py-4 text-2xl font-black tracking-tight text-slate-900 border-b border-slate-100"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Sub-View: Services */}
                {currentView === "services" && (
                  <motion.div
                    key="services"
                    custom={1}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 w-full h-full overflow-y-auto px-6 py-4 pb-48 transform-gpu bg-slate-50/50"
                  >
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-6">Our Services</h2>
                    
                    <div className="space-y-6">
                      {Object.values(SERVICES_DATA).map((category) => (
                        <div key={category.id} className="bg-white rounded-[1.5rem] p-5 shadow-sm border border-slate-100 relative overflow-hidden">
                          <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-20 ${category.bgColor}`} />
                          
                          <Link href={category.href} onClick={closeMenu} className="group flex items-center justify-between pb-4 mb-3 border-b border-slate-100 relative z-10">
                            <h3 className={`text-lg font-black tracking-tight ${category.color} flex items-center gap-2.5`}>
                              <div className={`p-2 rounded-lg ${category.bgColor}`}>
                                <category.icon className="w-5 h-5" />
                              </div>
                              {category.name}
                            </h3>
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                              <ChevronRight className={`w-4 h-4 ${category.color}`} />
                            </div>
                          </Link>
                          
                          <div className="space-y-1 relative z-10">
                            {category.subServices.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={closeMenu}
                                className="block py-3 px-4 text-[15px] font-bold text-slate-700 bg-slate-50/50 hover:bg-slate-100 hover:text-blue-600 rounded-xl transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Sub-View: Locations */}
                {currentView === "locations" && (
                  <motion.div
                    key="locations"
                    custom={1}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 w-full h-full overflow-y-auto px-6 py-4 pb-48 transform-gpu bg-slate-50/50"
                  >
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-6">Our Locations</h2>
                    
                    <div className="space-y-4">
                      {LOCATIONS.map((loc) => (
                        <Link key={loc.name} href={loc.href} onClick={closeMenu} className="block bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                          <h3 className="text-xl font-black text-slate-900 mb-1">
                            {loc.name}
                          </h3>
                          <p className="text-[15px] font-medium text-slate-500">
                            {loc.address}
                          </p>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-blue-100 text-center">
                       <p className="text-[15px] font-bold text-slate-700 mb-3">Want to visit us?</p>
                       <Link href="/contact" onClick={closeMenu} className="inline-block font-black text-blue-600 underline underline-offset-4">
                         Get Directions
                       </Link>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Sticky Bottom CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pt-12 z-20 pointer-events-none">
               <Button variant="gradient" className="w-full rounded-2xl shadow-xl font-black tracking-wide py-6 text-[17px] pointer-events-auto" onClick={closeMenu}>
                Book a Strategy Call
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
