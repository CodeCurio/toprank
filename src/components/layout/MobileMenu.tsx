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
  { name: "Case Studies", href: "/case-studies" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact Us", href: "/contact" },
];

const SERVICES_CATEGORIES = [
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    items: [
      { name: "Social Media Marketing", href: "/services/digital-marketing/social-media" },
      { name: "Social Media Management", href: "/services/digital-marketing/management" },
      { name: "Content Marketing", href: "/services/digital-marketing/content" },
      { name: "Influencer Marketing", href: "/services/digital-marketing/influencer" },
      { name: "Online Reputation (ORM)", href: "/services/digital-marketing/orm" },
      { name: "Lead Generation", href: "/services/digital-marketing/leads" },
    ]
  },
  {
    id: "seo",
    name: "SEO Services",
    items: [
      { name: "On-Page SEO", href: "/services/seo/on-page" },
      { name: "Off-Page SEO", href: "/services/seo/off-page" },
      { name: "Technical SEO", href: "/services/seo/technical" },
      { name: "Keyword Research", href: "/services/seo/keywords" },
      { name: "Competitor Analysis", href: "/services/seo/competitor" },
      { name: "SEO Audit", href: "/services/seo/audit" },
      { name: "E-commerce SEO", href: "/services/seo/ecommerce" },
    ]
  },
  {
    id: "local-seo",
    name: "Local SEO & GMB",
    items: [
      { name: "GMB Setup", href: "/services/local-seo/gmb-setup" },
      { name: "GMB Optimization", href: "/services/local-seo/gmb-optimization" },
      { name: "GMB Ranking", href: "/services/local-seo/gmb-ranking" },
      { name: "Local Citation", href: "/services/local-seo/local-citation" },
      { name: "Map Ranking", href: "/services/local-seo/map-ranking" },
      { name: "Review Management", href: "/services/local-seo/reviews" },
      { name: "GMB Post Creation", href: "/services/local-seo/gmb-posts" },
    ]
  },
  {
    id: "web-dev",
    name: "Web Design & Dev",
    items: [
      { name: "Business Website", href: "/services/web-development/business" },
      { name: "E-commerce Dev", href: "/services/web-development/ecommerce" },
      { name: "Landing Page Design", href: "/services/web-development/landing-page" },
      { name: "WordPress Dev", href: "/services/web-development/wordpress" },
      { name: "Custom Website Dev", href: "/services/web-development/custom" },
      { name: "Website Redesign", href: "/services/web-development/redesign" },
      { name: "Speed Optimization", href: "/services/web-development/speed" },
    ]
  },
  {
    id: "google-ads",
    name: "Google Ads / Paid",
    items: [
      { name: "Search Ads", href: "/services/google-ads/search" },
      { name: "Display Ads", href: "/services/google-ads/display" },
      { name: "YouTube Ads", href: "/services/google-ads/youtube" },
      { name: "Remarketing Ads", href: "/services/google-ads/remarketing" },
      { name: "Conversion Tracking", href: "/services/google-ads/conversion" },
      { name: "PPC Management", href: "/services/google-ads/ppc" },
    ]
  },
  {
    id: "meta-ads",
    name: "Meta Ads (FB & IG)",
    items: [
      { name: "Facebook Ads", href: "/services/meta-ads/facebook" },
      { name: "Instagram Ads", href: "/services/meta-ads/instagram" },
      { name: "Lead Ads", href: "/services/meta-ads/leads" },
      { name: "Retargeting Ads", href: "/services/meta-ads/retargeting" },
      { name: "Creative Strategy", href: "/services/meta-ads/strategy" },
      { name: "Ads Optimization", href: "/services/meta-ads/optimization" },
    ]
  },
  {
    id: "whatsapp",
    name: "WhatsApp & AI",
    items: [
      { name: "WhatsApp API", href: "/services/whatsapp-automation/api" },
      { name: "Chatbot Automation", href: "/services/whatsapp-automation/chatbot" },
      { name: "Auto Reply System", href: "/services/whatsapp-automation/reply" },
      { name: "Bulk Messaging", href: "/services/whatsapp-automation/bulk" },
      { name: "CRM Integration", href: "/services/whatsapp-automation/crm" },
      { name: "AI Customer Handling", href: "/services/whatsapp-automation/ai" },
    ]
  },
  {
    id: "branding",
    name: "Branding & Creative",
    items: [
      { name: "Logo Design", href: "/services/branding/logo" },
      { name: "Brand Identity", href: "/services/branding/identity" },
      { name: "Social Creatives", href: "/services/branding/social-creatives" },
      { name: "Ad Creatives", href: "/services/branding/ad-creatives" },
      { name: "Banner & Poster", href: "/services/branding/banner-poster" },
      { name: "Stationery Design", href: "/services/branding/stationery" },
    ]
  },
  {
    id: "content",
    name: "Content Creation",
    items: [
      { name: "Reel / Short Video", href: "/services/content-creation/reels" },
      { name: "Video Editing", href: "/services/content-creation/editing" },
      { name: "Script Writing", href: "/services/content-creation/script" },
      { name: "Blog Writing", href: "/services/content-creation/blogs" },
      { name: "SEO Content", href: "/services/content-creation/seo-content" },
      { name: "Copywriting", href: "/services/content-creation/copywriting" },
    ]
  },
  {
    id: "hosting",
    name: "Hosting & Maintenance",
    items: [
      { name: "Website Hosting", href: "/services/hosting/cloud" },
      { name: "Domain Management", href: "/services/hosting/domains" },
      { name: "Website Maintenance", href: "/services/hosting/maintenance" },
      { name: "Security & Backup", href: "/services/hosting/security" },
      { name: "Technical Support", href: "/services/hosting/support" },
    ]
  }
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
                      {SERVICES_CATEGORIES.map((category) => (
                        <div key={category.id} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                          <h3 className="text-sm font-black tracking-widest text-slate-400 uppercase mb-3">
                            {category.name}
                          </h3>
                          <div className="space-y-1">
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={closeMenu}
                                className="block py-3 px-3 -mx-3 text-[16px] font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors"
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
