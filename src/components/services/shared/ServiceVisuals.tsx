"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  MessageCircle, 
  Palette, 
  Video, 
  ShieldCheck, 
  Rocket,
  Search,
  Code,
  Share2,
  Smartphone,
  MousePointer2,
  Star,
  Phone,
  Target,
  BarChart3,
  Globe,
  Zap,
  Check,
  Cpu,
  Layers
} from "lucide-react";

// 1. SEO - The Ranking Ladder
export function SEOMicroVisual() {
  return (
    <div className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      <div className="absolute inset-x-4 top-4 h-6 bg-slate-800 rounded-lg flex items-center px-3 gap-2 border border-slate-700">
        <Search className="w-3 h-3 text-blue-400" />
        <div className="w-24 h-1 bg-slate-700 rounded-full" />
      </div>

      <div className="absolute inset-x-4 top-14 space-y-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className={`h-6 rounded-md border flex items-center px-2 justify-between ${
              i === 1 ? 'bg-blue-600/20 border-blue-500/50' : 'bg-slate-800/50 border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-blue-400' : 'bg-slate-600'}`} />
              <div className={`h-1 rounded-full ${i === 1 ? 'w-16 bg-blue-400/50' : 'w-12 bg-slate-700'}`} />
            </div>
            {i === 1 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-blue-600 text-[8px] font-black px-1.5 py-0.5 rounded text-white"
              >
                RANK #1
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-2 right-4 flex items-center gap-2 text-blue-400"
      >
        <BarChart3 className="w-4 h-4" />
        <span className="text-[10px] font-black tracking-tighter text-blue-400">+240% TRAFFIC</span>
      </motion.div>
    </div>
  );
}

// 2. GMB - The Local Grid
export function GMBMicroVisual() {
  return (
    <div className="relative w-full h-40 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden mb-6 group-hover:border-orange-300 transition-all duration-500">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />
      
      {/* City Map Pins */}
      <div className="absolute inset-0 p-4">
        {[
          { t: 20, l: 30 }, { t: 50, l: 70 }, { t: 70, l: 20 }, { t: 30, l: 80 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="absolute"
            style={{ top: `${pos.t}%`, left: `${pos.l}%` }}
          >
            <MapPin className="w-3 h-3 text-slate-300" />
          </motion.div>
        ))}

        {/* Central TopRank Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40 relative z-10">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-orange-400 rounded-full"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-2"
      >
        <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
        <span className="text-[10px] font-black text-slate-900">5.0 (482 Reviews)</span>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute top-3 right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        <Phone className="w-4 h-4" />
      </motion.div>
    </div>
  );
}

// 3. Web Dev - The Code-to-UI Engine
export function WebDevMicroVisual() {
  return (
    <div className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden mb-6 group-hover:shadow-2xl group-hover:shadow-pink-500/10 transition-all duration-500">
      <div className="grid grid-cols-2 h-full">
        {/* Code Side */}
        <div className="p-4 bg-slate-950 border-r border-slate-800">
           <div className="space-y-2">
             <div className="flex gap-1.5 mb-4">
               <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
               <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
               <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
             </div>
             {[1, 2, 3, 4].map(i => (
               <motion.div
                 key={i}
                 initial={{ width: 0 }}
                 animate={{ width: i % 2 === 0 ? '80%' : '60%' }}
                 transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                 className={`h-1 rounded-full ${i === 4 ? 'bg-pink-500' : 'bg-pink-500/30'}`}
               />
             ))}
             <div className="flex items-center gap-2 pt-2">
               <Code className="w-3 h-3 text-pink-400" />
               <span className="text-[7px] text-pink-400 font-mono">deploying...</span>
             </div>
           </div>
        </div>
        
        {/* UI Side */}
        <div className="p-4 flex flex-col items-center justify-center relative overflow-hidden">
          <motion.div
            animate={{ 
              rotateX: [0, 10, 0],
              rotateY: [0, -10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-full h-24 bg-white rounded-lg border border-slate-200 shadow-xl p-2 space-y-2 relative"
          >
            <div className="w-full h-8 bg-pink-50 rounded-md border border-pink-100 overflow-hidden relative">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-6 bg-slate-100 rounded" />
              <div className="h-6 bg-slate-100 rounded" />
            </div>
            <div className="h-4 w-full bg-pink-600 rounded flex items-center justify-center">
               <div className="w-1/2 h-1 bg-white/50 rounded-full" />
            </div>
          </motion.div>

          {/* Performance Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-2 right-2 flex items-center gap-1 bg-green-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full shadow-lg"
          >
            <Zap className="w-2 h-2 fill-white" />
            100
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// 4. Ads - The Conversion Bullseye
export function AdsMicroVisual() {
  return (
    <div className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden mb-6 group-hover:shadow-2xl group-hover:shadow-rose-500/20 transition-all duration-500">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-rose-500 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-rose-500 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-rose-500 rounded-full" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Target */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border-2 border-dashed border-rose-500/30 rounded-full flex items-center justify-center"
          >
            <div className="w-16 h-16 border-2 border-rose-500/50 rounded-full border-dashed" />
          </motion.div>
          
          {/* Center Target Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-500/50"
            >
              <Target className="w-6 h-6" />
            </motion.div>
          </div>

          {/* Clicks (Particles hitting the target) */}
          {[1, 2, 3, 4].map(i => (
            <motion.div
              key={i}
              initial={{ scale: 0, x: -100, y: -20, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0.5], 
                x: [i*-20, 0], 
                y: [i*10, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
              className="absolute w-2 h-2 bg-rose-400 rounded-full shadow-[0_0_8px_#fb7185]"
            />
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-2xl border border-slate-700"
      >
        <div className="text-center">
          <p className="text-[8px] text-slate-400 uppercase font-bold">Current ROAS</p>
          <p className="text-xs font-black text-rose-400">5.4x</p>
        </div>
        <div className="w-px h-6 bg-slate-700" />
        <div className="text-center">
          <p className="text-[8px] text-slate-400 uppercase font-bold">Conv. Rate</p>
          <p className="text-xs font-black text-blue-400">12.8%</p>
        </div>
      </motion.div>
    </div>
  );
}

// 5. Social/Meta - The Engagement Feed
export function SocialMicroVisual() {
  return (
    <div className="relative w-full h-40 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden mb-6 group-hover:bg-white transition-all duration-500">
      <div className="absolute inset-0 p-4">
        {/* Ad Box */}
        <motion.div
          animate={{ y: [0, -60, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full space-y-4"
        >
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
               <div className="p-3 flex items-center gap-2 border-b border-slate-50">
                 <div className="w-6 h-6 rounded-full bg-sky-500/20" />
                 <div className="w-20 h-2 bg-slate-100 rounded-full" />
                 <div className="ml-auto flex items-center gap-1">
                   <div className="w-1 h-1 rounded-full bg-slate-200" />
                   <div className="w-1 h-1 rounded-full bg-slate-200" />
                   <div className="w-1 h-1 rounded-full bg-slate-200" />
                 </div>
               </div>
               <div className="h-20 bg-slate-100 flex items-center justify-center relative">
                 <Share2 className="w-8 h-8 text-sky-500/30" />
                 {i === 1 && (
                   <div className="absolute bottom-2 left-2 flex gap-1">
                     <motion.div animate={{ scale:[1,1.2,1] }} transition={{ repeat:Infinity }} className="w-4 h-4 bg-sky-500 flex items-center justify-center rounded-full text-[8px] text-white">👍</motion.div>
                     <motion.div animate={{ scale:[1,1.2,1] }} transition={{ repeat:Infinity, delay:0.2 }} className="w-4 h-4 bg-red-500 flex items-center justify-center rounded-full text-[8px] text-white">❤️</motion.div>
                   </div>
                 )}
               </div>
               <div className="p-3">
                 <div className="w-full h-2 bg-slate-100 rounded-full mb-2" />
                 <div className="w-2/3 h-2 bg-slate-100 rounded-full" />
               </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-sky-600 text-white px-3 py-1 rounded-full text-[10px] font-black shadow-lg">
        <Rocket className="w-3 h-3" />
        SPONSORED
      </div>
    </div>
  );
}

// 6. Strategy - The Blueprint
export function StrategyMicroVisual() {
  return (
    <div className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden mb-6">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px]" />
      </div>
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
        <motion.path
          d="M 20 80 Q 50 80 70 50 T 180 20"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 4"
        />
        <motion.path
          d="M 20 80 Q 50 80 70 50 T 180 20"
          stroke="#3b82f6"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
        {[20, 70, 180].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={i === 0 ? 80 : i === 1 ? 50 : 20}
            r="4"
            fill={i === 2 ? "#3b82f6" : "#1e293b"}
            stroke="#3b82f6"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.5 }}
          />
        ))}
      </svg>

      <div className="absolute top-4 right-4 flex items-center gap-2 bg-blue-600/20 px-3 py-1 rounded-full border border-blue-500/30">
        <Cpu className="w-3 h-3 text-blue-400" />
        <span className="text-[10px] font-black text-blue-400">AI-POWERED</span>
      </div>

      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-4"
      >
        <div className="flex items-center gap-2">
           <MousePointer2 className="w-4 h-4 text-white" />
           <span className="text-[10px] text-white font-black">MARKET POSITIONED</span>
        </div>
      </motion.div>
    </div>
  );
}

// 7. Marketing - The Multi-Channel Hub
export function MarketingMicroVisual() {
  return (
    <div className="relative w-full h-40 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden mb-6 group-hover:shadow-2xl transition-all duration-500">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Central Hub */}
          <motion.div
            animate={{ 
              boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.3)", "0 0 0px rgba(59, 130, 246, 0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white z-10 relative shadow-xl"
          >
            <Globe className="w-8 h-8" />
          </motion.div>

          {/* Connected Channels */}
          {[
            { Icon: MessageCircle, color: "text-blue-500", x: -40, y: -40 },
            { Icon: Target, color: "text-rose-500", x: 40, y: -40 },
            { Icon: Share2, color: "text-sky-500", x: -40, y: 40 },
            { Icon: Search, color: "text-indigo-500", x: 40, y: 40 }
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ 
                x: [0, item.x], 
                y: [0, item.y],
                scale: [0.5, 1],
                opacity: [0, 1]
              }}
              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatDelay: 2 }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-lg shadow-md border border-slate-100 flex items-center justify-center ${item.color}`}
            >
              <item.Icon className="w-4 h-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 8. Automation - The Messaging Bot
export function AutomationMicroVisual() {
  return (
    <div className="relative w-full h-40 bg-blue-600 rounded-2xl overflow-hidden mb-6 group-hover:shadow-2xl transition-all duration-500">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="absolute inset-x-4 top-4 bottom-4 flex flex-col gap-3">
        {/* User Message */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-100 self-start p-2 rounded-lg rounded-tl-none shadow-sm max-w-[80%] flex flex-col gap-1"
        >
          <div className="w-16 h-1 bg-slate-400/20 rounded-full" />
          <div className="w-10 h-1 bg-slate-400/20 rounded-full" />
        </motion.div>

        {/* Bot Response */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="bg-white self-end p-2 rounded-lg rounded-tr-none shadow-sm max-w-[80%] flex items-center gap-2"
        >
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <Cpu className="w-3 h-3" />
          </div>
          <div className="space-y-1">
             <div className="w-20 h-1 bg-blue-100 rounded-full" />
             <div className="w-14 h-1 bg-blue-100 rounded-full" />
          </div>
          <Check className="w-3 h-3 text-blue-500" />
        </motion.div>

        {/* Typing Indicator */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="bg-white/10 self-start p-2 rounded-full px-4 flex gap-1"
        >
          <div className="w-1 h-1 bg-white rounded-full" />
          <div className="w-1 h-1 bg-white rounded-full" />
          <div className="w-1 h-1 bg-white rounded-full" />
        </motion.div>
      </div>

      <div className="absolute bottom-2 right-4 flex items-center gap-2">
        <MessageCircle className="w-4 h-4 text-white" />
        <span className="text-[10px] font-black text-white px-2 py-0.5 bg-white/10 rounded-full">ACTIVE BOT</span>
      </div>
    </div>
  );
}

// 9. Branding - The Design Studio
export function BrandingMicroVisual() {
  return (
    <div className="relative w-full h-40 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden mb-6 group-hover:border-purple-300 transition-all duration-500">
      <div className="absolute inset-0 bg-white opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        {/* Central Graphic */}
        <div className="relative">
          <motion.div
            animate={{ 
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["20% 20%", "50% 50%", "20% 20%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-2 border-purple-500 border-dashed flex items-center justify-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg flex items-center justify-center text-white">
              <Palette className="w-6 h-6" />
            </div>
          </motion.div>

          {/* Guidelines */}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-4 border border-blue-500/20 rounded-full pointer-events-none"
          />
        </div>

        {/* Color Palette Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {['#3b82f6', '#ec4899', '#f59e0b', '#10b981', '#6366f1'].map(color => (
            <div key={color} className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>

      <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-slate-900 text-white rounded-full px-3 py-1 text-[10px] font-black tracking-widest uppercase">
        <Layers className="w-3 h-3" />
        SVG
      </div>
    </div>
  );
}

// 10. Content - The Video Timeline
export function ContentMicroVisual() {
  return (
    <div className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden mb-6 group-hover:shadow-2xl transition-all duration-500">
      {/* Main Preview */}
      <div className="absolute inset-x-2 top-2 h-24 bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex items-center justify-center group">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center"
        >
          <Video className="w-8 h-8 text-white/20 group-hover:text-red-500/50 transition-colors" />
        </motion.div>
        
        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            whileHover={{ scale: 1.2 }}
            className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg"
          >
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-900">
          <motion.div
            animate={{ width: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="h-full bg-red-600 shadow-[0_0_8px_#dc2626]"
          />
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="absolute bottom-2 inset-x-2 h-10 flex gap-1">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`flex-1 rounded border overflow-hidden ${i === 1 ? 'border-red-500/50 flex-[1.5]' : 'border-slate-800'}`}>
            <div className="h-full bg-slate-800/50 relative overflow-hidden">
               <div className="absolute top-1 left-1 bg-white/10 w-4 h-1 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 11. Hosting - The Server Status
export function HostingMicroVisual() {
  return (
    <div className="relative w-full h-40 bg-slate-950 rounded-2xl overflow-hidden mb-6 border border-slate-800 group-hover:border-slate-700 transition-all duration-500">
      <div className="p-4 space-y-3 lg:space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className={`relative flex items-center justify-between p-2 rounded-lg border ${i === 1 ? 'bg-blue-600/5 border-blue-500/20' : 'bg-slate-900 border-slate-800'}`}>
             <div className="flex items-center gap-3">
               <ShieldCheck className={`w-4 h-4 ${i === 1 ? 'text-blue-400' : 'text-slate-600'}`} />
               <div className="space-y-1">
                  <div className={`w-12 h-1 rounded-full ${i === 1 ? 'bg-blue-400/50' : 'bg-slate-700'}`} />
                  <div className="w-8 h-1 bg-slate-800 rounded-full" />
               </div>
             </div>
             
             <div className="flex gap-1">
                {[1, 2, 3].map(dot => (
                  <motion.div
                    key={dot}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, delay: dot * 0.2, repeat: Infinity }}
                    className={`w-1 h-1 rounded-full ${i === 1 ? 'bg-blue-400' : 'bg-slate-600'}`}
                  />
                ))}
             </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-2 right-4 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest text-blue-400">UPTIME 99.9%</span>
      </div>
    </div>
  );
}
