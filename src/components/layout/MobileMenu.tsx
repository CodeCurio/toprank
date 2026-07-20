"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { SERVICES_DATA } from "@/lib/services-data";

const MAIN_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
];

const SECONDARY_LINKS = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Reviews", href: "https://maps.app.goo.gl/TopRank" },
  { name: "Contact Us", href: "/contact" },
];

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
  },
  { 
    name: "Mohali", 
    address: "Shop no 12, Sector 69", 
    href: "/mohali" 
  },
  { 
    name: "Gonda", 
    address: "Ambedkar Chauraha, Housing Colony", 
    href: "/gonda" 
  }
];

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
  // Reset expanded section when menu closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setExpandedSection(null), 300);
    }
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] xl:hidden"
            onClick={closeMenu}
          />

          {/* Menu Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-[70] xl:hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
               <span className="text-xl font-black text-slate-900">Menu</span>
               <button 
                 onClick={closeMenu}
                 className="p-2 -mr-2 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
               >
                 <X className="h-5 w-5" />
               </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
              <div className="flex flex-col space-y-2">
                {MAIN_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="py-3 px-4 text-xl font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-2xl transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Services Accordion */}
                <div className="rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleSection("services")}
                    className={`w-full flex items-center justify-between py-3 px-4 text-xl font-bold transition-colors ${
                      expandedSection === "services" ? "text-blue-600 bg-blue-50/50" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    Services
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${expandedSection === "services" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {expandedSection === "services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50/50"
                      >
                        <div className="p-4 space-y-4">
                          <Link 
                            href="/services" 
                            onClick={closeMenu}
                            className="block w-full py-3 px-4 bg-blue-600 text-white text-center font-bold rounded-xl shadow-md shadow-blue-500/20 active:scale-[0.98] transition-transform"
                          >
                            Explore All Services
                          </Link>
                          
                          <div className="space-y-4 pt-2">
                            {Object.values(SERVICES_DATA).map((category) => (
                              <div key={category.id} className="space-y-2">
                                <Link 
                                  href={category.href} 
                                  onClick={closeMenu}
                                  className={`flex items-center gap-2 font-bold ${category.color}`}
                                >
                                  <div className={`p-1.5 rounded-md ${category.bgColor}`}>
                                    <category.icon className="w-4 h-4" />
                                  </div>
                                  {category.name}
                                </Link>
                                <div className="pl-6 space-y-1 border-l-2 border-slate-200 ml-3.5 mt-2">
                                  {category.subServices.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={closeMenu}
                                      className="block py-1.5 text-[15px] font-medium text-slate-600 hover:text-blue-600 transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Locations Accordion */}
                <div className="rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleSection("locations")}
                    className={`w-full flex items-center justify-between py-3 px-4 text-xl font-bold transition-colors ${
                      expandedSection === "locations" ? "text-blue-600 bg-blue-50/50" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    Serving Locations
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${expandedSection === "locations" ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {expandedSection === "locations" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50/50"
                      >
                        <div className="p-4 space-y-2">
                          {LOCATIONS.map((loc) => (
                            <Link 
                              key={loc.name} 
                              href={loc.href} 
                              onClick={closeMenu} 
                              className="block p-3 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
                            >
                              <div className="font-bold text-slate-900 flex items-center justify-between">
                                {loc.name}
                                <ChevronRight className="w-4 h-4 text-slate-300" />
                              </div>
                              <div className="text-sm font-medium text-slate-500 mt-0.5">{loc.address}</div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {SECONDARY_LINKS.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  const LinkComponent = isExternal ? "a" : Link;
                  const extraProps = isExternal 
                    ? { target: "_blank", rel: "noopener noreferrer" } 
                    : { onClick: closeMenu };
                  return (
                    <LinkComponent
                      key={link.name}
                      href={link.href}
                      className="py-3 px-4 text-xl font-bold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-2xl transition-colors"
                      {...extraProps}
                    >
                      {link.name}
                    </LinkComponent>
                  );
                })}
              </div>
            </div>

            {/* Sticky Bottom CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-slate-100 z-20">
               <Button variant="gradient" className="w-full rounded-2xl shadow-xl shadow-blue-500/20 font-black tracking-wide py-6 text-[17px]" onClick={closeMenu}>
                Book a Strategy Call
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
