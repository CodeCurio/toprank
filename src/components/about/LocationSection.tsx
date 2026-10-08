"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building,
  Navigation,
  Phone,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface OfficeLocation {
  id: string;
  city: string;
  state: string;
  type: string;
  isHQ: boolean;
  name: string;
  address: string;
  phone: string;
  hours: string;
  embedUrl: string;
  directionLink: string;
  accentColor: string;
}

const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: "lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    type: "HEADQUARTERS & MAIN HUB",
    isHQ: true,
    name: "TopRank HQ — Lucknow",
    address: "A42/32, Sulabh Awas, Sector 01, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    phone: "+91 93050 30523",
    hours: "Mon - Sat: 9:30 AM - 7:30 PM",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.40266407933288!2d80.9997749234823!3d26.83717480352987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3e41920850b%3A0x46d2900944856043!2sTopRank%20Digital%20Service%20%7C%20Website%20Designer%20%26%20SEO%20Company!5e1!3m2!1sen!2sin!4v1774077241204!5m2!1sen!2sin",
    directionLink: "https://share.google/585sAqmLbXxpCuos9",
    accentColor: "rose",
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    state: "UT / Tricity",
    type: "REGIONAL GROWTH HUB",
    isHQ: false,
    name: "Branch Office — Chandigarh",
    address: "Shop No 8, Sector 34B, Chandigarh, 160034",
    phone: "+91 93050 30523",
    hours: "Mon - Sat: 9:30 AM - 7:00 PM",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.36906273567996!2d76.77083449988736!3d30.72107089597058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed78f284b3ff%3A0x6914cb2c221efc85!2sTopRank%20Digital%20Service%20-%20Website%20Designer%20%26%20SEO%20Company!5e0!3m2!1sen!2sin!4v1776942376382!5m2!1sen!2sin",
    directionLink: "https://share.google/Ti1FOWyQxmiGoWbOE",
    accentColor: "blue",
  },
  {
    id: "mohali",
    city: "Mohali",
    state: "Punjab",
    type: "TECH & DEV OPERATIONS",
    isHQ: false,
    name: "Tech Operations — Mohali",
    address: "Shop No 12, Sector 69, Mohali, Punjab 160069",
    phone: "+91 91154 39115",
    hours: "Mon - Sat: 9:30 AM - 7:00 PM",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13100.18795423636!2d76.70796437277613!3d30.68211679471311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefc0dd7854f7%3A0xb6fd51bb2dcd4f3a!2sTopRank%20Digital%20Service%20-%20Best%20Website%20Designing%2FSEO%2FDigital%20Marketing%20Company%20in%20Mohali!5e0!3m2!1sen!2sin!4v1787931538019!5m2!1sen!2sin",
    directionLink: "https://www.google.com/maps/search/?api=1&query=Shop+no+12,+sector+69,+mohali,+160069",
    accentColor: "indigo",
  },
  {
    id: "gonda",
    city: "Gonda",
    state: "Uttar Pradesh",
    type: "REGIONAL OFFICE",
    isHQ: false,
    name: "Regional Office — Gonda",
    address: "Shop No A6, Zila Panchayat Market, Ambedkar Chauraha, Housing Colony, Gonda, Uttar Pradesh 271001",
    phone: "+91 91154 39115",
    hours: "Mon - Sat: 10:00 AM - 6:30 PM",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1775.4129477835843!2d81.9408255815506!3d27.13029324754563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999f3f944b9113f%3A0xdf48fbededaeab98!2sTopRank%20Digital%20Service!5e0!3m2!1sen!2sin!4v1776942238764!5m2!1sen!2sin",
    directionLink: "https://www.google.com/maps/search/?api=1&query=TopRank+Digital+Service+Gonda",
    accentColor: "emerald",
  },
];

const NEARBY_AREAS = [
  "Gomti Nagar",
  "Hazratganj",
  "Aliganj",
  "Indira Nagar",
  "Sector 17 Chandigarh",
  "Sector 34 Chandigarh",
  "Mohali Phase 8",
  "Panchkula",
  "Zirakpur",
  "Kanpur",
  "Varanasi",
  "Prayagraj",
  "Noida",
  "Delhi NCR",
];

export function LocationSection() {
  const [activeLocationId, setActiveLocationId] = useState("lucknow");

  const activeLocation =
    OFFICE_LOCATIONS.find((loc) => loc.id === activeLocationId) ||
    OFFICE_LOCATIONS[0];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white relative border-t border-slate-100 overflow-hidden">
      {/* Schema Markup for Physical Locations */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": OFFICE_LOCATIONS.map((loc) => ({
              "@type": "LocalBusiness",
              "@id": `https://www.toprankindia.com/about#${loc.id}`,
              "name": `TopRank Digital Service - ${loc.city}`,
              "description": `${loc.type} of TopRank Digital Service in ${loc.city}, ${loc.state}`,
              "url": "https://www.toprankindia.com/about",
              "telephone": loc.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": loc.address,
                "addressLocality": loc.city,
                "addressRegion": loc.state,
                "addressCountry": "IN",
              },
              "parentOrganization": {
                "@type": "Organization",
                "name": "TopRank Digital Service",
                "url": "https://www.toprankindia.com",
                "telephone": ["+91 93050 30523", "+91 91154 39115"]
              }
            }))
          })
        }}
      />
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-rose-50 border border-rose-200/60 text-rose-600 font-bold text-xs uppercase tracking-[0.2em] rounded-full mb-4">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>Our Base &amp; Physical Presence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
            Headquartered in <span className="text-rose-600">Lucknow</span>, Empowered by{" "}
            <span className="text-blue-600">Chandigarh</span>.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            We provide an unfair advantage to businesses across Uttar Pradesh and Punjab, while managing high-growth national campaigns from our multi-city hubs.
          </p>
        </div>

        {/* City Filter Tabs for Quick Switch */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          {OFFICE_LOCATIONS.map((loc) => {
            const isActive = loc.id === activeLocationId;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.02]"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                <Building className="w-3.5 h-3.5 shrink-0" />
                <span>{loc.city}</span>
                {loc.isHQ && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded-md">
                    HQ
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Grid: Left Office Cards & Right Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: Office Address Cards (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            {OFFICE_LOCATIONS.map((loc) => {
              const isSelected = loc.id === activeLocationId;

              return (
                <div
                  key={loc.id}
                  onClick={() => setActiveLocationId(loc.id)}
                  className={`p-5 sm:p-6 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? "bg-white border-blue-500/50 shadow-xl shadow-blue-500/5 ring-2 ring-blue-500/20"
                      : "bg-white/80 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  {/* Active Indicator Top Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                        loc.isHQ
                          ? "bg-rose-50 text-rose-700 border border-rose-200/60"
                          : "bg-blue-50 text-blue-700 border border-blue-200/60"
                      }`}
                    >
                      <ShieldCheck className="w-3 h-3" />
                      {loc.type}
                    </span>

                    {isSelected && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Showing on Map
                      </span>
                    )}
                  </div>

                  {/* Title & City */}
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                    <Building className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{loc.name}</span>
                  </h3>

                  {/* Accurate Street Address */}
                  <div className="flex items-start gap-2.5 mb-4">
                    <MapPin className="w-4 h-4 text-rose-500 mt-1 shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {loc.address}
                    </p>
                  </div>

                  {/* Phone & Working Hours */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center gap-1.5 font-bold text-slate-700">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <a
                        href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {loc.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-1.5 font-medium text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
                    <a
                      href={loc.directionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                    >
                      <Navigation className="w-3 h-3 text-blue-600" />
                      <span>Get Directions</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>

                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors border border-emerald-200/60"
                    >
                      <Phone className="w-3 h-3 text-emerald-600" />
                      <span>Call Office</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Live Google Maps Visualizer (6 Cols) */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 space-y-4">
            
            <div className="bg-slate-900 rounded-[2rem] p-2.5 sm:p-3 shadow-2xl border border-slate-800">
              
              {/* Map Window Top Bar */}
              <div className="px-4 py-2.5 bg-slate-950/80 rounded-2xl mb-2.5 flex items-center justify-between border border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-white truncate max-w-[200px] sm:max-w-none">
                    {activeLocation.name}
                  </span>
                </div>

                <a
                  href={activeLocation.directionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-bold text-xs flex items-center gap-1 transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Frame Container */}
              <div className="w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden bg-slate-950 relative">
                <iframe
                  key={activeLocation.id}
                  src={activeLocation.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title={`Map of ${activeLocation.name}`}
                />
              </div>

              {/* Map Footer Card */}
              <div className="p-3 bg-slate-950/60 rounded-2xl mt-2.5 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-slate-300">
                  <span className="font-bold text-white block">{activeLocation.city} Office:</span>
                  <span className="text-slate-400">{activeLocation.address}</span>
                </div>
                <a
                  href={activeLocation.directionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-center shrink-0 transition-colors"
                >
                  Directions ↗
                </a>
              </div>
            </div>

            {/* Serving Nearby Areas Instantly */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-2.5">
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span>Serving Nearby Key Commercial Hubs</span>
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {NEARBY_AREAS.map((city, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-colors"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
