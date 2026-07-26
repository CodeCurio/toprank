"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, CheckCircle2, ArrowRight, Sparkles, MessageSquareQuote } from "lucide-react";
import Image from "next/image";

// Authentic Google G Logo SVG
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

// Authentic Trustpilot Logo SVG
const TrustpilotLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path fill="#00B67A" d="M24 8.75L14.86 8.5 12 0 9.14 8.5 0 8.75l7.36 5.56-2.58 8.84L12 18.05l7.22 5.1-2.58-8.84L24 8.75z" />
    <path fill="#005128" d="M12 0v18.05l7.22 5.1-2.58-8.84L24 8.75L14.86 8.5 12 0z" />
  </svg>
);

const getReviews = (location?: string) => {
  const isLucknow = location?.toLowerCase() === "lucknow";

  return [
    {
      name: "Sanjay Dubey",
      role: "Franchise Owner, Agilus Diagnostics",
      image: "https://i.pravatar.cc/150?u=8",
      isInitial: false,
      platform: "Google",
      rating: 5,
      badge: "DIAGNOSTICS HERO",
      title: "Ab daily kuch na kuch appointment aa hi jata hai.",
      content: "Pehle kaafi slow tha, kabhi enquiry aayi kabhi nahi. TopRank ne landing page aur GMB pe kaam kiya. Ab daily calls aate hain for home collection. System set ho gaya basically.",
      attachedImage: "/reviews/media__1774074432121.png",
    },
    {
      name: "Anil Singh",
      role: "Founder, Maa Jagrani Infra",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      isInitial: false,
      platform: "Google",
      rating: 5,
      badge: "REAL ESTATE",
      title: "Pehle Google se koi kaam hi nahi aa raha tha…",
      content: isLucknow 
        ? "Sach bolu to hume lagta tha SEO bas naam ka hota hai. Website bani hui thi but enquiries almost zero thi. TopRank is genuinely the best digital marketing agency in Lucknow. Ab har week Lucknow local area se kuch na kuch genuine enquiry aa hi jati hai."
        : "Sach bolu to hume lagta tha SEO bas naam ka hota hai. Website bani hui thi but enquiries almost zero thi. TopRank ne kaam start kiya, thoda time laga but ab Google se genuine leads aane lage hain. Ab har week kuch na kuch enquiry aa hi jati hai.",
      attachedImage: "/reviews/media__1774074432274.png",
    },
    {
      name: "Neha Gupta",
      role: "Marketing Head, Remac World",
      image: "https://i.pravatar.cc/150?u=123",
      isInitial: false,
      platform: "Trustpilot",
      rating: 5,
      badge: "E-COMMERCE",
      title: "Not crazy growth… but finally stable.",
      content: isLucknow 
        ? "Earlier, sales were very up and down in the Lucknow region. Some days good, some days nothing. TopRank's local SEO strategies stabilized our lead flow. They truly understand the UP market."
        : "Earlier, sales were very up and down. Some days good, some days nothing. Now things are more consistent. Website + targeting improvements actually made a difference.",
      attachedImage: "/reviews/media__1774074431890.png",
    },
    {
      name: "Sachin Kumar",
      role: "Franchise Owner, Atulaya Healthcare",
      image: "S",
      isInitial: true,
      initialBg: "bg-purple-600",
      platform: "Google",
      rating: 5,
      badge: "HEALTHCARE",
      title: "We just wanted more calls. That’s it.",
      content: "Didn’t care about traffic or fancy reports. We just needed our phone to ring more. After working with TopRank, calls have definitely increased. Not overnight, but steadily — which is what matters.",
      attachedImage: "/reviews/media__1774074432021.png",
    },
    {
      name: "Vikram Singh",
      role: "Owner, Bharat Fragrances",
      image: "V",
      isInitial: true,
      initialBg: "bg-orange-500",
      platform: "Google",
      rating: 5,
      badge: "D2C BRAND",
      title: "Website acchi lag rahi thi, par convert nahi kar rahi thi.",
      content: "Design theek tha but log aake ja rahe the, enquiry nahi aa rahi thi. TopRank ne redesign + flow improve kiya. Ab log form fill karte hain, WhatsApp pe bhi ping aata hai. Clear difference hai.",
      attachedImage: "/reviews/media__1774074432183.png",
    },
    {
      name: "Ananya Patel",
      role: "VP Sales, CloudServe",
      image: "https://i.pravatar.cc/150?u=44",
      isInitial: false,
      platform: "Google",
      rating: 5,
      badge: "SAAS / TECH",
      title: "Traffic pehle bhi tha, par kaam ka nahi tha.",
      content: "TopRank changed the targeting and SEO strategy. Now fewer visitors maybe, but better ones. Conversions improved. That’s what we needed.",
      attachedImage: "/reviews/analytics.png",
    }
  ];
};

export function ReviewsSection({ location }: { location?: string }) {
  const reviews = getReviews(location);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-50 py-16 md:py-24 overflow-hidden"
      id="reviews"
    >
      {/* Background Soft Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#0f172a08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-slate-200 rounded-full text-slate-800 text-[11px] font-black uppercase tracking-[0.3em] mb-4 shadow-sm">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              Rated 4.9/5 By Business Owners
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
              Don’t Just Take Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600">
                Word For It.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              We've helped over 100+ businesses {location ? `in ${location} and beyond ` : ""}scale their leads and revenue predictability. Here is what verified founders have to say.
            </p>
          </motion.div>

          {/* Global Trust Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 shrink-0"
          >
            <div className="flex items-center gap-4 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm">
              <GoogleLogo />
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-slate-900 font-black text-lg leading-none">4.9</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
                <div className="text-slate-500 text-[11px] font-bold">100+ Google Reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm">
              <TrustpilotLogo />
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-slate-900 font-black text-lg leading-none">5.0</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-[#00B67A] text-[#00B67A]" />)}
                  </div>
                </div>
                <div className="text-slate-500 text-[11px] font-bold">Trustpilot Excellent</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Cards Masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 opacity-90 group-hover:h-2 transition-all" />

              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none z-0" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {review.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                      {review.badge}
                    </span>
                  )}
                </div>

                <h4 className="text-slate-900 font-black text-lg sm:text-xl mb-3 leading-snug tracking-tight group-hover:text-blue-600 transition-colors">
                  "{review.title}"
                </h4>
                
                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                  {review.content}
                </p>

                {review.attachedImage && (
                  <div className="mt-5 mb-2 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm relative group/attachment bg-slate-100 transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src={review.attachedImage}
                      alt={`Verification proof for ${review.title}`}
                      width={400} height={200}
                      className="w-full h-auto object-cover max-h-[180px]"
                    />
                  </div>
                )}
              </div>

              {/* Author Footer */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-5 mt-6 relative z-10">
                <div className="flex items-center gap-3">
                  {review.isInitial ? (
                    <div className={`w-12 h-12 rounded-full ${review.initialBg} flex items-center justify-center text-white font-black text-lg shadow-sm border-2 border-white relative`}>
                      {review.image}
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                        {review.platform === "Google" ? <GoogleLogo /> : <TrustpilotLogo />}
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full relative shadow-sm border-2 border-white shrink-0">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={48} height={48}
                        className="w-full h-full rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                        {review.platform === "Google" ? <GoogleLogo /> : <TrustpilotLogo />}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h5 className="font-black text-slate-900 text-sm sm:text-base">{review.name}</h5>
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    </div>
                    <div className="text-slate-500 font-bold text-[11px] uppercase tracking-wider">{review.role}</div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Verification Link */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://www.google.com/search?q=toprank+digital+service&rlz=1C5GCEM_enIN1196IN1196&oq=toprank+digital+service&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABgKGBYYHjIKCAIQABgKGBYYHjIKCAMQABgKGBYYHjINCAQQABiGAxiABBiKBTINCAUQABiGAxiABBiKBTIHCAYQABjvBTIGCAcQRRg90gEINTUxN2owajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-900 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md active:scale-95 group"
          >
            <span>Read 100+ Verified Google Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
