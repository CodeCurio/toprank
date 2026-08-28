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
  Layers,
  TrendingUp,
  Award,
  CircleCheck,
  Clock,
  Eye,
  FileText,
  Shield,
} from "lucide-react";

// ─────────────────────────────────────────────
// 1. SEO - Search Dominance Dashboard
// Enhanced with E-E-A-T signals: expertise metrics, 
// experience indicators, authority proof, trust badges
// ─────────────────────────────────────────────
export function SEOMicroVisual() {
  return (
    <div
      className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500"
      role="img"
      aria-label="SEO ranking dashboard showing #1 position achievement with 240% traffic growth"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Google Search Bar Simulation */}
      <div className="absolute inset-x-3 top-3 h-7 bg-slate-800 rounded-lg flex items-center px-2.5 gap-2 border border-slate-700/80">
        <Search className="w-3 h-3 text-blue-400" />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-1.5 bg-slate-600 rounded-full overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
          />
        </motion.div>
        {/* E-E-A-T: Authority Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
          className="ml-auto flex items-center gap-0.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-1.5 py-0.5 rounded text-[7px] font-black"
        >
          <Shield className="w-2 h-2" />
          SSL
        </motion.div>
      </div>

      {/* SERP Result Stack with ranking animation */}
      <div className="absolute inset-x-3 top-13 space-y-1.5">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.2, type: "spring", stiffness: 200 }}
            className={`h-6 rounded-md border flex items-center px-2 justify-between ${
              i === 1 ? "bg-blue-600/20 border-blue-500/50 shadow-[0_0_12px_rgba(59,130,246,0.15)]" : "bg-slate-800/50 border-slate-700/50"
            }`}
          >
            <div className="flex items-center gap-2">
              {/* Position number */}
              <span className={`text-[8px] font-black ${i === 1 ? "text-blue-400" : "text-slate-600"}`}>
                #{i}
              </span>
              <div className={`w-2 h-2 rounded-full ${i === 1 ? "bg-blue-400 shadow-[0_0_6px_#60a5fa]" : "bg-slate-700"}`} />
              <div className={`h-1 rounded-full ${i === 1 ? "w-16 bg-blue-400/60" : "w-10 bg-slate-700"}`} />
            </div>
            {i === 1 && (
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 400 }}
                className="flex items-center gap-0.5 bg-blue-600 text-[7px] font-black px-1.5 py-0.5 rounded text-white shadow-lg shadow-blue-500/30"
              >
                <TrendingUp className="w-2 h-2" />
                RANK #1
              </motion.div>
            )}
            {i === 2 && (
              <div className="text-[7px] text-slate-600 font-mono">—</div>
            )}
          </motion.div>
        ))}
      </div>

      {/* E-E-A-T Core Web Vitals Score Badge */}
      <motion.div
        initial={{ scale: 0, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="absolute top-3 right-3 flex flex-col items-center"
      >
        <div className="w-8 h-8 rounded-full border-2 border-emerald-400 flex items-center justify-center bg-emerald-500/10">
          <span className="text-[9px] font-black text-emerald-400">100</span>
        </div>
        <span className="text-[6px] font-bold text-emerald-400/70 mt-0.5">CWV</span>
      </motion.div>

      {/* Bottom Stats Bar with E-E-A-T metrics */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-2 inset-x-3 flex items-center justify-between"
      >
        <motion.div
          animate={{
            y: [0, -5, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex items-center gap-1.5 text-blue-400"
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span className="text-[9px] font-black tracking-tight">+240% TRAFFIC</span>
        </motion.div>

        {/* Trust signal: E-E-A-T Experience badge */}
        <div className="flex items-center gap-1 bg-amber-500/15 border border-amber-500/25 px-1.5 py-0.5 rounded">
          <Award className="w-2.5 h-2.5 text-amber-400" />
          <span className="text-[7px] font-black text-amber-400">7+ YRS</span>
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 2. GMB - Local Maps Authority Visual
// Enhanced with E-E-A-T: review count, verified badge,
// local authority signals, NAP consistency indicator
// ─────────────────────────────────────────────
export function GMBMicroVisual() {
  return (
    <div
      className="relative w-full h-40 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden mb-6 group-hover:border-orange-300 transition-all duration-500"
      role="img"
      aria-label="Google Maps Business Profile showing 5.0 star rating with 482 verified reviews and local dominance"
    >
      {/* Map dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* City Map Pins with pulse rings */}
      <div className="absolute inset-0 p-4">
        {[
          { t: 20, l: 25, delay: 0 },
          { t: 55, l: 72, delay: 0.2 },
          { t: 72, l: 18, delay: 0.4 },
          { t: 28, l: 82, delay: 0.6 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: pos.delay, type: "spring", stiffness: 250 }}
            className="absolute"
            style={{ top: `${pos.t}%`, left: `${pos.l}%` }}
          >
            <MapPin className="w-3 h-3 text-slate-300" />
          </motion.div>
        ))}

        {/* Central TopRank Pin — larger, animated, glowing */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Outer pulse ring */}
            <motion.div
              animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute inset-0 bg-orange-400 rounded-full"
            />
            {/* Inner pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="absolute inset-0 bg-orange-500 rounded-full"
            />
            {/* Center pin */}
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl shadow-orange-500/40 relative z-10 border-2 border-white/30">
              <MapPin className="w-6 h-6 text-white drop-shadow-sm" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* E-E-A-T Trust: Star Rating + Verified Review Count */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-xl shadow-md border border-slate-100 flex items-center gap-2"
      >
        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
        <span className="text-[10px] font-black text-slate-900">5.0</span>
        <span className="text-[9px] font-bold text-slate-500">(482 Reviews)</span>
        {/* Verified badge */}
        <CircleCheck className="w-3 h-3 text-blue-500" />
      </motion.div>

      {/* E-E-A-T: Google Verified badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
        className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full border border-slate-200 shadow-sm"
      >
        <CircleCheck className="w-3 h-3 text-blue-600" />
        <span className="text-[8px] font-black text-slate-700">VERIFIED</span>
      </motion.div>

      {/* Click-to-Call indicator */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-3 right-3 w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 border-2 border-blue-400/30"
      >
        <Phone className="w-4 h-4" />
      </motion.div>

      {/* E-E-A-T: NAP Consistency label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-3 right-3 flex items-center gap-1 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded text-[7px] font-bold text-emerald-700"
      >
        <Check className="w-2 h-2" />
        NAP ✓
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 3. Web Dev - The Code-to-UI Engine
// Enhanced with E-E-A-T: Core Web Vitals, performance score,
// security indicators, expertise signals
// ─────────────────────────────────────────────
export function WebDevMicroVisual() {
  return (
    <div
      className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden mb-6 group-hover:shadow-2xl group-hover:shadow-pink-500/10 transition-all duration-500"
      role="img"
      aria-label="Next.js web development showing code deployment with 100 performance score and sub-second load times"
    >
      <div className="grid grid-cols-2 h-full">
        {/* Code Side */}
        <div className="p-3 bg-slate-950 border-r border-slate-800">
           <div className="space-y-1.5">
             {/* Window controls */}
             <div className="flex gap-1.5 mb-3">
               <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
               <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
               <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
             </div>

             {/* Code lines with typing animation */}
             {[1, 2, 3, 4].map(i => (
               <motion.div
                 key={i}
                 initial={{ width: 0, opacity: 0 }}
                 animate={{ width: i % 2 === 0 ? '85%' : '65%', opacity: 1 }}
                 transition={{ duration: 0.8, delay: i * 0.3, ease: "easeOut" }}
                 className={`h-1 rounded-full ${
                   i === 1 ? 'bg-pink-500/60' :
                   i === 2 ? 'bg-sky-400/40' :
                   i === 3 ? 'bg-amber-400/30' :
                   'bg-pink-500'
                 }`}
               />
             ))}

             {/* Deploy status with progress */}
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.5 }}
               className="flex items-center gap-1.5 pt-2"
             >
               <Code className="w-3 h-3 text-pink-400" />
               <span className="text-[7px] text-pink-400 font-mono">deploying...</span>
             </motion.div>

             {/* Build success indicator */}
             <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 2.5, type: "spring" }}
               className="flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/25 px-1.5 py-0.5 rounded"
             >
               <Check className="w-2 h-2 text-emerald-400" />
               <span className="text-[6px] text-emerald-400 font-black">BUILD OK</span>
             </motion.div>
           </div>
        </div>
        
        {/* UI Preview Side */}
        <div className="p-3 flex flex-col items-center justify-center relative overflow-hidden">
          <motion.div
            animate={{ 
              rotateX: [0, 8, 0],
              rotateY: [0, -8, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-[72px] bg-white rounded-lg border border-slate-200 shadow-xl p-1.5 space-y-1.5 relative"
          >
            {/* Hero block */}
            <div className="w-full h-7 bg-pink-50 rounded border border-pink-100 overflow-hidden relative">
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />
            </div>
            {/* Content blocks */}
            <div className="grid grid-cols-2 gap-1">
              <div className="h-4 bg-slate-100 rounded" />
              <div className="h-4 bg-slate-100 rounded" />
            </div>
            {/* CTA */}
            <div className="h-3 w-full bg-pink-600 rounded flex items-center justify-center">
               <div className="w-1/2 h-0.5 bg-white/50 rounded-full" />
            </div>
          </motion.div>

          {/* E-E-A-T: Performance Score Ring */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            className="absolute top-1.5 right-1.5"
          >
            <div className="relative w-9 h-9">
              {/* Score ring */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="3" />
                <motion.circle
                  cx="18" cy="18" r="15"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="94.25"
                  initial={{ strokeDashoffset: 94.25 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[8px] font-black text-emerald-400">100</span>
              </div>
            </div>
          </motion.div>

          {/* E-E-A-T: Speed metric */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-slate-900/80 px-2 py-0.5 rounded-full"
          >
            <Zap className="w-2 h-2 text-amber-400 fill-amber-400" />
            <span className="text-[7px] font-black text-white">0.8s LCP</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 4. Ads - The Conversion Bullseye
// Enhanced with E-E-A-T: documented ROAS, conversion rate,
// transparent analytics, experience indicators
// ─────────────────────────────────────────────
export function AdsMicroVisual() {
  return (
    <div
      className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden mb-6 group-hover:shadow-2xl group-hover:shadow-rose-500/20 transition-all duration-500"
      role="img"
      aria-label="Paid advertising performance dashboard showing 5.4x ROAS and 12.8% conversion rate with real-time analytics"
    >
      {/* Background target rings */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-rose-500 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-rose-500 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-rose-500 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-rose-500 rounded-full" />
      </div>

      {/* Center Target with precision animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Rotating outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border-2 border-dashed border-rose-500/25 rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-2 border-rose-500/40 rounded-full border-dashed"
            />
          </motion.div>
          
          {/* Pulsing bullseye center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-500/50 border border-rose-400/30"
            >
              <Target className="w-5 h-5 drop-shadow-sm" />
            </motion.div>
          </div>

          {/* Conversion particles hitting target */}
          {[0, 1, 2, 3, 4].map(i => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1.2, 0], 
                x: [(i % 2 === 0 ? -1 : 1) * (15 + i * 8), 0], 
                y: [(i % 2 === 0 ? 1 : -1) * (10 + i * 5), 0],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-rose-400 rounded-full shadow-[0_0_8px_#fb7185]"
            />
          ))}
        </div>
      </div>

      {/* E-E-A-T: Expertise badge (top-left) */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-3 left-3 flex items-center gap-1 bg-rose-500/15 border border-rose-500/25 px-1.5 py-0.5 rounded"
      >
        <Award className="w-2.5 h-2.5 text-rose-400" />
        <span className="text-[7px] font-black text-rose-400">GOOGLE PARTNER</span>
      </motion.div>

      {/* E-E-A-T: Real-time badge (top-right) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute top-3 right-3 flex items-center gap-1 bg-emerald-500/15 border border-emerald-500/25 px-1.5 py-0.5 rounded"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[7px] font-black text-emerald-400">LIVE</span>
      </motion.div>

      {/* Bottom Performance Stats — documented metrics for E-E-A-T */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2.5 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-2xl border border-slate-700/80 shadow-lg"
      >
        <div className="text-center">
          <p className="text-[7px] text-slate-400 uppercase font-black tracking-wider">Current ROAS</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-xs font-black text-rose-400"
          >
            5.4x
          </motion.p>
        </div>
        <div className="w-px h-7 bg-slate-700" />
        <div className="text-center">
          <p className="text-[7px] text-slate-400 uppercase font-black tracking-wider">Conv. Rate</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-xs font-black text-blue-400"
          >
            12.8%
          </motion.p>
        </div>
        <div className="w-px h-7 bg-slate-700" />
        <div className="text-center">
          <p className="text-[7px] text-slate-400 uppercase font-black tracking-wider">CPA</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
            className="text-xs font-black text-emerald-400"
          >
            ₹182
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────
// 5. Social/Meta - The Engagement Feed
// ─────────────────────────────────────────────
export function SocialMicroVisual() {
  return (
    <div
      className="relative w-full h-40 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden mb-6 group-hover:bg-white transition-all duration-500"
      role="img"
      aria-label="Social media marketing feed showing sponsored content with engagement metrics"
    >
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

// ─────────────────────────────────────────────
// 6. Strategy - The Blueprint
// ─────────────────────────────────────────────
export function StrategyMicroVisual() {
  return (
    <div
      className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden mb-6"
      role="img"
      aria-label="AI-powered digital marketing strategy blueprint with data-driven market positioning"
    >
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

// ─────────────────────────────────────────────
// 7. Marketing - The Multi-Channel Hub
// ─────────────────────────────────────────────
export function MarketingMicroVisual() {
  return (
    <div
      className="relative w-full h-40 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden mb-6 group-hover:shadow-2xl transition-all duration-500"
      role="img"
      aria-label="Multi-channel digital marketing hub connecting SEO, social media, ads, and content strategies"
    >
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

// ─────────────────────────────────────────────
// 8. Automation - The Messaging Bot
// ─────────────────────────────────────────────
export function AutomationMicroVisual() {
  return (
    <div
      className="relative w-full h-40 bg-blue-600 rounded-2xl overflow-hidden mb-6 group-hover:shadow-2xl transition-all duration-500"
      role="img"
      aria-label="WhatsApp automation chatbot with instant 24/7 auto-response and AI-powered lead routing"
    >
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

// ─────────────────────────────────────────────
// 9. Branding - The Design Studio
// ─────────────────────────────────────────────
export function BrandingMicroVisual() {
  return (
    <div
      className="relative w-full h-40 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden mb-6 group-hover:border-purple-300 transition-all duration-500"
      role="img"
      aria-label="Brand identity design studio showing logo creation with color palette and SVG vector assets"
    >
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

// ─────────────────────────────────────────────
// 10. Content - The Video Timeline
// ─────────────────────────────────────────────
export function ContentMicroVisual() {
  return (
    <div
      className="relative w-full h-40 bg-slate-900 rounded-2xl overflow-hidden mb-6 group-hover:shadow-2xl transition-all duration-500"
      role="img"
      aria-label="Video content creation timeline with SEO-optimized content publishing and viral reel editing"
    >
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

// ─────────────────────────────────────────────
// 11. Hosting - The Server Status
// ─────────────────────────────────────────────
export function HostingMicroVisual() {
  return (
    <div
      className="relative w-full h-40 bg-slate-950 rounded-2xl overflow-hidden mb-6 border border-slate-800 group-hover:border-slate-700 transition-all duration-500"
      role="img"
      aria-label="Enterprise hosting infrastructure with 99.9% uptime SLA and SSL security"
    >
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
        <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest">UPTIME 99.9%</span>
      </div>
    </div>
  );
}
