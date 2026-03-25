"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Target, TrendingUp, Building2, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function CompanyOverview() {
  const coreExpertise = [
    { icon: <Target className="w-5 h-5 text-blue-600" />, title: "Precision Local SEO", desc: "Dominating map packs and local intent searches." },
    { icon: <TrendingUp className="w-5 h-5 text-indigo-600" />, title: "Conversion-Led Web Design", desc: "Building sites optimized for lead capture." },
    { icon: <Building2 className="w-5 h-5 text-blue-600" />, title: "Enterprise Scalability", desc: "Systems that grow safely alongside your revenue." },
    { icon: <MapPin className="w-5 h-5 text-rose-600" />, title: "Hyper-Local Advantage", desc: "Deep understanding of regional markets across India." }
  ];

  return (
    <section id="company-overview" className="py-24 lg:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: The "Entity" Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
            className="order-2 lg:order-1"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 40, filter: 'blur(10px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } }} transition={{ duration: 0.7, ease: "easeOut" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-md text-slate-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
                Our Genesis
              </div>
            </motion.div>

            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 50, filter: 'blur(10px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)' } }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-8"
            >
              We don't deliver reports.<br/>
              <span className="text-blue-600">We deliver revenue.</span>
            </motion.h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium mb-12">
              <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7 }}>
                TopRank Digital Service was born out of frustration with the industry standard. Too many agencies hide behind vanity metrics—impressions, clicks, and vague awareness stats—while ignoring the only metric that matters: <strong>your bottom line</strong>.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7 }}>
                Operating primarily out of Lucknow and Chandigarh, we’ve bridged the gap between hyper-local domination for brick-and-mortar stores and aggressive national scaling capabilities for B2B and e-commerce brands. 
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7 }}>
                We operate as an extension of your business. If it involves capturing high-intent attention and engineering it into predictable revenue, it's encoded in our DNA.
              </motion.p>
            </div>

            <motion.div 
               variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
               transition={{ duration: 0.8 }}
               className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8"
            >
              {coreExpertise.map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                     {item.icon}
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                     <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Rich Visual Grid Configuration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] lg:h-[750px] order-1 lg:order-2 w-full max-w-[500px] lg:max-w-none mx-auto"
          >
             {/* Main Tall Image */}
             <div className="absolute right-0 top-0 w-[80%] h-[85%] rounded-[2.5rem] overflow-hidden shadow-2xl group">
               <Image 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                 alt="TopRank Team Collaboration"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
               />
               <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
             </div>

             {/* Overlapping Square Image */}
             <div className="absolute left-0 bottom-[5%] w-[60%] aspect-square rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[8px] border-white group z-20">
               <Image 
                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                 alt="Data Analytics Review"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
               />
             </div>

             {/* Floating Authority Badge */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[-5%] z-30 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
             >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-black text-slate-900">E-E-A-T Verified</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Industry Authority</p>
                </div>
             </motion.div>
             
             {/* Small visual dot grid pattern behind */}
             <div className="absolute -z-10 bottom-[-5%] right-[10%] w-64 h-64 bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:24px_24px] opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
