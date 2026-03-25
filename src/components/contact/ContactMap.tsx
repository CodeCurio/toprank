"use client";

import { motion } from "framer-motion";
import { Navigation, Building, Clock, MapPin, Phone, Mail } from "lucide-react";

const locations = [
  {
    id: "lucknow",
    city: "Lucknow, UP",
    type: "Headquarters",
    address: "A42/32, Sulabh Awas, Sector 01, Gomti Nagar, Lucknow, UP 226010",
    phone: "+91 93050 30523",
    email: "connect@toprankindia.com",
    hours: "Monday - Sunday, 24x7",
    embedParams: "https://maps.google.com/maps?q=TopRank%20Digital%20Service,%20Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directionLink: "https://maps.google.com/?q=TopRank+Digital+Service+Lucknow"
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    type: "Branch Office",
    address: "SHOP NO 8, Sector 34B, Chandigarh, 160034",
    phone: "+91 93050 30523",
    email: "connect@toprankindia.com",
    hours: "Monday - Sunday, 24x7",
    embedParams: "https://maps.google.com/maps?q=Sector%2034B,%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed",
    directionLink: "https://maps.google.com/?q=TopRank+Digital+Service+Chandigarh"
  }
];

export function ContactMap() {
  return (
    <section className="py-20 lg:py-32 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Our Strategic <span className="text-rose-600">Locations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 font-medium leading-relaxed"
          >
            We operate from multiple strategic locations to ensure nationwide coverage and localized expertise. Drop by to discuss your growth trajectory.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden flex flex-col"
            >
              {/* Top Map Embed */}
              <div className="h-[300px] w-full relative bg-slate-200 group">
                <iframe 
                  src={loc.embedParams}
                  className="w-full h-full border-0 absolute inset-0 z-0 transition-all duration-700 opacity-90 group-hover:opacity-100 filter grayscale-[0.2] group-hover:grayscale-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2">
                   <MapPin className="w-4 h-4 text-rose-500" />
                   <span className="text-xs font-bold text-slate-900">{loc.city}</span>
                </div>
                <div className="absolute inset-0 pointer-events-none border-[6px] border-white/20 z-10" />
              </div>

              {/* Bottom Details */}
              <div className="p-8 lg:p-10 flex flex-col flex-grow">
                 <div className="mb-6">
                   <p className="text-[10px] font-black uppercase tracking-widest text-rose-500 mb-2">{loc.type}</p>
                   <h3 className="text-2xl font-black text-slate-900 tracking-tight">{loc.city}</h3>
                 </div>

                 <div className="space-y-6 mb-8 flex-grow">
                   <div className="flex gap-4">
                     <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                       <Building className="w-5 h-5 text-slate-600" />
                     </div>
                     <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Address</p>
                       <p className="font-bold text-slate-900 leading-snug">{loc.address}</p>
                     </div>
                   </div>

                   <div className="flex gap-4">
                     <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0">
                       <Phone className="w-5 h-5 text-slate-600" />
                     </div>
                     <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Contact</p>
                       <p className="font-bold text-slate-900">{loc.phone}</p>
                       <p className="text-sm font-medium text-slate-500">{loc.email}</p>
                     </div>
                   </div>
                 </div>

                 <a 
                   href={loc.directionLink} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="w-full py-4 bg-slate-900 hover:bg-black text-white rounded-[1rem] text-sm font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
                 >
                   <Navigation className="w-4 h-4" /> Get Directions
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
