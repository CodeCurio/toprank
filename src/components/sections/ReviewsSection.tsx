"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
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

const reviews = [
  {
    name: "Anil Singh",
    role: "Founder, Maa Jagrani Infra",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    isInitial: false,
    platform: "Google",
    rating: 5,
    title: "Pehle Google se koi kaam hi nahi aa raha tha…",
    content: "Sach bolu to hume lagta tha SEO bas naam ka hota hai. Website bani hui thi but enquiries almost zero thi. TopRank ne kaam start kiya, thoda time laga but ab Google se genuine leads aane lage hain. Ab har week kuch na kuch enquiry aa hi jati hai.",
    attachedImage: "/reviews/media__1774074432274.png",
  },
  {
    name: "Neha Gupta",
    role: "Marketing Head, Remac World",
    image: "https://i.pravatar.cc/150?u=123",
    isInitial: false,
    platform: "Trustpilot",
    rating: 5,
    title: "Not crazy growth… but finally stable.",
    content: "Earlier, sales were very up and down. Some days good, some days nothing. Now things are more consistent. Website + targeting improvements actually made a difference.",
    attachedImage: "/reviews/media__1774074431890.png",
  },
  {
    name: "Sachin Kumar",
    role: "Director, Atulaya Healthcare",
    image: "S",
    isInitial: true,
    initialBg: "bg-purple-600",
    platform: "Google",
    rating: 5,
    title: "We just wanted more calls. That’s it.",
    content: "Didn’t care about traffic or fancy reports. We just needed our phone to ring more. After working with TopRank, calls have definitely increased. Not overnight, but steadily — which is what matters.",
    attachedImage: "/reviews/media__1774074432021.png",
  },
  {
    name: "Sanjay Dubey",
    role: "Co-founder, Agilus Diagnostics",
    image: "https://i.pravatar.cc/150?u=8",
    isInitial: false,
    platform: "Google",
    rating: 5,
    title: "Ab daily kuch na kuch appointment aa hi jata hai.",
    content: "Pehle kaafi slow tha, kabhi enquiry aayi kabhi nahi. TopRank ne landing page aur GMB pe kaam kiya. Ab daily calls aate hain for home collection. System set ho gaya basically.",
    attachedImage: "/reviews/media__1774074432121.png",
  },
  {
    name: "Vikram Singh",
    role: "Owner, Bharat Fragrances",
    image: "V",
    isInitial: true,
    initialBg: "bg-orange-500",
    platform: "Google",
    rating: 5,
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
    title: "Traffic pehle bhi tha, par kaam ka nahi tha.",
    content: "TopRank changed the targeting and SEO strategy. Now fewer visitors maybe, but better ones. Conversions improved. That’s what we needed.",
    attachedImage: "/reviews/analytics.png",
  }
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-50 py-24 md:py-36 overflow-hidden"
    >
      {/* Background Soft Texture (Dots) */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 lg:mb-24">
          {/* Header Text */}
          <motion.div
            initial={false}
            animate={mounted && isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-blue-600 text-[11px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-blue-600" /> Rated 4.9/5
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Don’t Just Take Our <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-500">
                Word For It.
              </span>
            </h2>

            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              We've helped over 100+ businesses scale their revenue predictability. Here's what real founders and marketing heads have to say.
            </p>
          </motion.div>

          {/* Global Trust Badges */}
          <motion.div
            initial={false}
            animate={mounted && isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 shrink-0"
          >
            {/* Google Trust Card */}
            <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <GoogleLogo />
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-slate-900 font-bold text-xl leading-none">4.9</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
                <div className="text-slate-500 text-xs font-semibold">Over 100+ Verified Reviews</div>
              </div>
            </div>

            {/* Trustpilot Trust Card */}
            <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
              <TrustpilotLogo />
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-slate-900 font-bold text-xl leading-none">5.0</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />)}
                  </div>
                </div>
                <div className="text-slate-500 text-xs font-semibold">Excellent Rating</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Masonry / Columns Layout */}
        <motion.div
          variants={containerVariants}
          initial={false}
          animate={mounted && isInView ? "visible" : "visible"}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="break-inside-avoid bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 relative group"
            >
              {/* Visual Quote mark */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-blue-50 transition-colors duration-500 -z-0" />

              <div className="relative z-10">
                {/* Rating Line */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star key={index} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <h4 className="text-slate-900 font-bold text-lg lg:text-xl mb-3 leading-snug tracking-tight">"{review.title}"</h4>
                <p className="text-slate-600 leading-relaxed font-medium text-[14px] lg:text-[15px]">
                  {review.content}
                </p>

                {/* Attached Image Evidence (User Uploaded Look) */}
                {review.attachedImage && (
                  <div className="mt-6 mb-2 rounded-2xl overflow-hidden border-4 border-slate-50 shadow-md relative group/attachment cursor-pointer bg-slate-100 transition-transform duration-500 hover:scale-105">
                    <Image
                      src={review.attachedImage}
                      alt={`Evidence attachment for ${review.title}`}
                      width={400} height={200}
                      className="w-full h-auto object-cover max-h-[160px] md:max-h-[220px]"
                    />
                  </div>
                )}
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-7 mt-8 relative z-10">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  {review.isInitial ? (
                    <div className={`w-14 h-14 rounded-full ${review.initialBg} flex items-center justify-center text-white font-black text-xl shadow-sm border-[3px] border-white relative`}>
                      {review.image}
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                        {review.platform === "Google" ? <span className="w-4 h-4 rounded-full flex items-center justify-center bg-white"><GoogleLogo /></span> : <span className="w-4 h-4 rounded-full flex items-center justify-center bg-[#00B67A]"><TrustpilotLogo /></span>}
                      </div>
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full relative shadow-sm border-[3px] border-white">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={56} height={56}
                        className="w-full h-full rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm flex items-center justify-center">
                        {review.platform === "Google" ? <GoogleLogo /> : <TrustpilotLogo />}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h5 className="font-bold text-slate-900 text-base">{review.name}</h5>
                      <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-50" />
                    </div>
                    <div className="text-slate-500 font-semibold text-[11px] uppercase tracking-wider">{review.role}</div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Section Footer / Verification Link */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20 md:mt-24 mb-16"
        >
          <Link href="/reviews" className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-900 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-xl shadow-slate-200/10 active:scale-95 group">
             Read All Reviews (100+) <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-slate-500 font-semibold text-lg">
            100% verified customer reviews tracking tangible results. Read more on our <a href="https://maps.app.goo.gl/TopRank" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-black underline underline-offset-4 decoration-blue-200">Google Business Profile</a>.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
