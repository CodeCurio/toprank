"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, LineChart, Globe, Headset } from "lucide-react";

export function WhyChooseUs() {
  const points = [
    { icon: <Globe />, title: "Hyper-Local Expertise", desc: "We understand the nuances of the Lucknow market better than national agencies." },
    { icon: <Zap />, title: "AI-Powered Stack", desc: "Proprietary tools to predict trends and outperform competitors instantly." },
    { icon: <LineChart />, title: "ROI Over Vanity", desc: "Traffic is useless if it doesn't convert. We focus strictly on bottom-line revenue." },
    { icon: <ShieldCheck />, title: "Ruthless Transparency", desc: "No hidden fees. Full access to analytics, backlinks, and strategy documentation." },
    { icon: <CheckCircle2 />, title: "Senior Strategists Only", desc: "Your account is never handed off to an intern. You work directly with veterans." },
    { icon: <Headset />, title: "Proactive Support", desc: "Rapid response times. We become an extension of your internal team." }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6">
                Why Brands Trust <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">TopRank</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-8">
                The digital landscape is crowded with vendors selling identical packages. We differentiate through engineered precision, high-touch strategy, and a relentless focus on ROI.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                  <p className="text-slate-400 font-medium leading-relaxed">
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
