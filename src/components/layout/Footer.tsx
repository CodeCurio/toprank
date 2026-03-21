"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Send
} from "lucide-react";
import LogoImg from "../images/TopRank logo.webp";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as const
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-[60%] -left-[10%] w-[30%] h-[50%] rounded-full bg-indigo-900/20 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <Link href="/" className="inline-block bg-white p-3 rounded-2xl shadow-xl shadow-blue-900/10 border border-white/20">
              <Image 
                src={LogoImg}
                alt="TopRank Digital Service" 
                className="h-10 w-auto object-contain" 
              />
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium">
              The premier digital growth agency in Lucknow & Chandigarh, dedicated to helping businesses skyrocket their online presence via engineered performance marketing.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/p/TopRank-Digital-Service-61578286186245/", color: "hover:bg-[#1877F2]" },
                { icon: Twitter, href: "https://twitter.com/TopRank_Digital", color: "hover:bg-sky-500" },
                { icon: Instagram, href: "https://www.instagram.com/p/DOQuwGsEn0P/", color: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500" },
                { icon: Linkedin, href: "https://in.linkedin.com/company/toprank-digital-service", color: "hover:bg-[#0A66C2]" }
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.href} 
                  target="_blank"
                  className={`h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 ${social.color} hover:text-white transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl`}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h3 className="text-xl font-black text-white relative inline-block tracking-tight">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="flex items-center text-slate-400 hover:text-blue-400 transition-colors group font-bold"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/0 group-hover:bg-blue-500 transition-all mr-0 group-hover:mr-3" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h3 className="text-xl font-black text-white relative inline-block tracking-tight">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {['SEO Optimization', 'Social Media Marketing', 'PPC Advertising', 'Web Development', 'GMB Optimization', 'Growth Audits'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="flex items-center text-slate-400 hover:text-pink-400 transition-colors group font-bold"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500/0 group-hover:bg-pink-500 transition-all mr-0 group-hover:mr-3" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h3 className="text-xl font-black text-white relative inline-block tracking-tight">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
            </h3>
            <ul className="space-y-5 mb-8">
              <li className="flex items-start text-slate-400 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mr-4 shrink-0 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                  <MapPin size={18} className="text-blue-500" />
                </div>
                <span className="font-medium pt-1">Lucknow & Chandigarh, India</span>
              </li>
              <li className="flex items-center text-slate-400 group">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mr-4 shrink-0 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                  <Phone size={18} className="text-orange-500" />
                </div>
                <a href="tel:+919305030523" className="hover:text-white transition-colors font-black tracking-tight">+91 93050 30523</a>
              </li>
              <li className="flex items-center text-slate-400 group">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center mr-4 shrink-0 border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors">
                  <Mail size={18} className="text-pink-500" />
                </div>
                <a href="mailto:connect@toprankindia.com" className="hover:text-white transition-colors font-black tracking-tight">connect@toprankindia.com</a>
              </li>
            </ul>

            <div className="pt-6 border-t border-slate-800/50">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Subscribe Updates</h4>
              <form className="flex relative" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-slate-900/50 border border-slate-800 text-white px-5 py-3.5 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all placeholder:text-slate-600 font-medium text-sm"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-blue-600 hover:bg-blue-500 text-white px-4 rounded-lg flex items-center justify-center transition-all shadow-lg active:scale-95 group/newsletter"
                >
                  <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <p className="text-slate-500 text-xs font-bold tracking-wide text-center md:text-left">
            © {new Date().getFullYear()} TopRank Digital Service. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-xs font-black uppercase tracking-widest text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
