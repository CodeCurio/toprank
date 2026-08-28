import { 
  Code, Megaphone, Search, PenTool, MapPin, 
  BarChart, Smartphone, Users, Globe, ShoppingCart, Video, 
  LayoutTemplate, Palette, Workflow, MessageSquare,
  Monitor, Layout, Database, TrendingUp,
  Navigation, Target, ShieldCheck,
  FileText, MessageCircle, Sparkles, Share2, Zap, ClipboardCheck,
  LucideIcon
} from "lucide-react";

export interface SubService {
  name: string;
  desc: string;
  icon: LucideIcon;
  href: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  desc: string;
  features: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ComparisonPoint {
  feature: string;
  topRank: string;
  others: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface ServiceImageShowcase {
  heroImage?: string;
  secondaryImage?: string;
  speedImage?: string;
  heroAlt?: string;
  speedAlt?: string;
}

export interface ServiceData {
  id: string;
  name: string;
  icon: LucideIcon;
  bgColor: string;
  color: string;
  badge?: string;
  description: string;
  longDescription?: string;
  href: string;
  images?: ServiceImageShowcase;
  subServices: SubService[];
  features?: string[];
  outcomes?: string[];
  stats?: ServiceStat[];
  pricingPackages?: PricingPackage[];
  faqs?: FaqItem[];
  comparison?: ComparisonPoint[];
  testimonials?: Testimonial[];
  deliverables?: string[];
}

// Rich Service Data Structure with Sub-Services & Deep CRO Metadata
export const SERVICES_DATA: Record<string, ServiceData> = {
  "digital-marketing": {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: Megaphone,
    bgColor: "bg-blue-50",
    color: "text-blue-600",
    badge: "Full-Funnel Growth",
    description: "Multi-channel growth strategies to scale your brand authority and capture predictable market share.",
    longDescription: "We engineer revenue-focused digital marketing engines. From hyper-targeted paid acquisition to organic community building and automated lead qualification funnels, our strategies turn casual browsers into loyal, high-paying clients.",
    href: "/services/digital-marketing",
    images: {
      heroImage: "/images/services/digital-marketing-hero.jpg",
      heroAlt: "Full-Funnel Digital Marketing and ROAS Command Center",
    },
    stats: [
      { value: "340%", label: "Average Traffic Growth" },
      { value: "4.8x", label: "Average Return On Ad Spend" },
      { value: "1.2M+", label: "Qualified Leads Captured" },
      { value: "98%", label: "Client Retention Rate" },
    ],
    subServices: [
      { name: "Social Media Marketing", desc: "Build brand awareness & viral reach", icon: Share2, href: "/services/digital-marketing/social-media" },
      { name: "Social Media Management", desc: "Professional profile & community handling", icon: Users, href: "/services/digital-marketing/management" },
      { name: "Content Marketing", desc: "Value-driven editorial & video strategy", icon: FileText, href: "/services/digital-marketing/content" },
      { name: "Influencer Marketing", desc: "Leverage verified industry authority", icon: Sparkles, href: "/services/digital-marketing/influencer" },
      { name: "Online Reputation (ORM)", desc: "Maintain a pristine 5-star digital image", icon: ShieldCheck, href: "/services/digital-marketing/orm" },
      { name: "Lead Generation", desc: "High-intent automated lead capture funnels", icon: Target, href: "/services/digital-marketing/leads" },
    ],
    features: [
      "Omni-Channel Acquisition Architecture",
      "Full-Funnel Paid Ads (Google + Meta)",
      "High-Converting Landing Page Optimization",
      "Real-Time Attribution & CRM Tracking",
      "Weekly Conversion Optimization Cycles",
      "Dedicated Senior Growth Strategist"
    ],
    outcomes: [
      "Dominant Market Authority",
      "Predictable Monthly Inbound Leads",
      "Significantly Lower Cost Per Acquisition",
      "Compounding Brand Trust & Loyalty"
    ],
    deliverables: [
      "Comprehensive Multi-Channel Audit & Roadmap",
      "Custom Creative Strategy (Static + Video Ads)",
      "Landing Page Funnel Copywriting & Wireframes",
      "Full Meta Pixel & Google Tag Manager Tracking",
      "Live 24/7 Real-Time Performance Dashboard",
      "Bi-Weekly Strategic Growth Reviews"
    ],
    pricingPackages: [
      {
        name: "Starter Growth",
        price: "₹25,000",
        period: "per month",
        desc: "Ideal for emerging local businesses looking to establish a consistent inbound lead stream.",
        features: [
          "2 Active Marketing Channels (Meta + Local SEO)",
          "12 Custom Social & Ad Creatives / Month",
          "Basic Lead Capture Funnel Setup",
          "Ad Spend Management up to ₹50,000",
          "Monthly Performance Reporting",
          "Standard Email Support"
        ]
      },
      {
        name: "Scale Engine",
        price: "₹45,000",
        period: "per month",
        popular: true,
        desc: "Designed for established companies looking to aggressively seize market share and scale revenue.",
        features: [
          "Omni-Channel Strategy (Meta + Google + SEO)",
          "24 Custom Creatives & 4 Short-Form Reels",
          "Custom Conversion Landing Page Build",
          "WhatsApp CRM & Auto-Reply Integration",
          "Ad Spend Management up to ₹1,50,000",
          "Real-Time Live Dashboard & Weekly Reviews",
          "Dedicated Growth Account Manager"
        ]
      },
      {
        name: "Enterprise Dominance",
        price: "₹85,000+",
        period: "per month",
        desc: "Full-scale marketing department takeover for national brands and multi-location enterprises.",
        features: [
          "Complete Omni-Channel Growth Engine",
          "Unlimited High-CTR Ad Creatives & Video Ads",
          "Multi-Variant Funnel A/B Testing",
          "Advanced Programmatic ORM & Influencer Outreach",
          "Unlimited Ad Spend Management",
          "Priority 24/7 Phone & WhatsApp Hotline",
          "Executive Boardroom Strategy Deliverables"
        ]
      }
    ],
    comparison: [
      { feature: "Growth Strategy", topRank: "Scientific data-driven full-funnel model", others: "Random social posts & boosted vanity ads" },
      { feature: "Attribution Tracking", topRank: "Real-time CRM & Server-Side Pixel Tracking", others: "Basic Google Analytics with unverified clicks" },
      { feature: "Creative Production", topRank: "Custom high-CTR static, carousel & short video ads", others: "Generic Canva templates used for multiple clients" },
      { feature: "Reporting Transparency", topRank: "Live 24/7 revenue dashboard & weekly reviews", others: "Vague monthly PDF reports sent after delay" },
      { feature: "Lead Qualification", topRank: "Automated WhatsApp & CRM instant qualification", others: "Manual spreadsheet dumps with cold leads" }
    ],
    faqs: [
      {
        q: "How quickly will we see measurable results from digital marketing?",
        a: "Paid acquisition campaigns (Google Ads and Meta Ads) begin generating verified inquiries within 48 to 72 hours of going live. Organic channels, including SEO and content marketing, compound significantly over 60 to 90 days, leading to decreasing customer acquisition costs over time."
      },
      {
        q: "What makes TopRank's digital marketing different from other agencies?",
        a: "We focus on revenue and verified pipeline growth rather than vanity metrics like impressions and arbitrary likes. Every campaign is built around high-converting landing pages, strict conversion tracking, and continuous multivariate testing to ensure positive ROAS."
      },
      {
        q: "Do you provide creative assets, copywriting, and video editing?",
        a: "Yes, we are a 100% full-service growth agency. Our in-house team handles market research, persuasive ad copywriting, high-CTR graphic design, video editing for Reels/Shorts, and high-speed Next.js landing page development."
      },
      {
        q: "How do you track and verify that leads are genuine?",
        a: "We install server-side conversion APIs, anti-spam CAPTCHA filters, and direct WhatsApp / CRM integrations. Every lead is tracked with exact UTM attribution, allowing you to trace every rupee of ad spend directly to closed deals."
      },
      {
        q: "Is there a long-term lock-in contract?",
        a: "No. We operate on transparent monthly retainers with a minimum 3-month recommended initial sprint for optimal algorithmic learning. You stay with us because of tangible ROI, not restrictive contractual lock-ins."
      }
    ],
    testimonials: [
      {
        name: "Dr. Vikram Sethi",
        role: "Managing Director",
        company: "Apex Healthcare Network",
        quote: "TopRank transformed our patient acquisition. Within 60 days of deploying their full-funnel digital marketing campaign, our monthly consultations surged by 240% while reducing cost per lead by half.",
        rating: 5
      },
      {
        name: "Rohit Agarwal",
        role: "Founder & CEO",
        company: "UrbanNest Properties",
        quote: "Their data-driven Meta and Google Ads strategy generated over 1,200 qualified real estate buyers in just one quarter. The level of reporting and execution is world-class.",
        rating: 5
      }
    ]
  },
  "web-dev": {
    id: "web-dev",
    name: "Web Development",
    icon: Code,
    bgColor: "bg-pink-50",
    color: "text-pink-600",
    badge: "Next.js & React",
    description: "High-performance websites engineered for sub-second speed, top SEO ranking, and aggressive lead conversions.",
    longDescription: "We build modern, zero-latency web applications using Next.js, React, Tailwind CSS, and headless architectures. Say goodbye to slow, bloated WordPress templates and hello to enterprise-grade web experiences.",
    href: "/services/web-development",
    images: {
      heroImage: "/images/services/webdev-hero.jpg",
      secondaryImage: "/images/services/webdev-devices.jpg",
      speedImage: "/images/services/webdev-speed.jpg",
      heroAlt: "High-Performance Next.js & React Web Development Showcase",
      speedAlt: "100 Google Core Web Vitals Performance Dashboard",
    },
    stats: [
      { value: "< 800ms", label: "Average Page Load Speed" },
      { value: "100%", label: "Google Core Web Vitals" },
      { value: "+180%", label: "Average Conversion Uplift" },
      { value: "250+", label: "Websites Engineered" },
    ],
    subServices: [
      { name: "Business Website", desc: "Lead-focused corporate sites", icon: Monitor, href: "/services/web-development/business" },
      { name: "E-commerce Development", desc: "High-converting online stores", icon: ShoppingCart, href: "/services/web-development/ecommerce" },
      { name: "WordPress Development", desc: "Custom, secured & optimized CMS", icon: Layout, href: "/services/web-development/wordpress" },
      { name: "Website Speed & SEO", desc: "Sub-second performance tuning", icon: Zap, href: "/services/web-development/speed" },
    ],
    features: [
      "Custom Next.js & React Architecture",
      "Mobile-First Fluid UI/UX Design",
      "100% Core Web Vitals Performance",
      "Built-in Technical SEO & Schema Markup",
      "Direct WhatsApp & CRM Lead Integrations",
      "Enterprise Cloudflare Security & SSL"
    ],
    outcomes: [
      "Sub-Second Page Load Times",
      "Significantly Higher Conversion Rates",
      "First-Page Google Search Visibility",
      "Un-hackable, Scalable Infrastructure"
    ],
    deliverables: [
      "High-Fidelity Figma UI/UX Prototypes",
      "Full Next.js / React Frontend & API Backend",
      "Mobile-Responsive Dynamic Layouts",
      "JSON-LD Schema & XML Sitemaps Setup",
      "1 Year Cloudflare Enterprise CDN & Hosting",
      "Full Codebase & Admin Dashboard Ownership"
    ],
    pricingPackages: [
      {
        name: "Corporate Standard",
        price: "₹24,999",
        period: "one-time",
        desc: "Ideal for local companies requiring a lightning-fast, high-converting professional web presence.",
        features: [
          "5 to 8 Custom Responsive Pages",
          "Next.js / React Modern Architecture",
          "Mobile-First UI/UX Design in Figma",
          "Basic Technical SEO & Schema Setup",
          "Direct WhatsApp & Call Lead Routing",
          "Free 1st Year Cloudflare SSL & Setup",
          "2 Weeks Turnaround Time"
        ]
      },
      {
        name: "Growth Dynamic",
        price: "₹44,999",
        period: "one-time",
        popular: true,
        desc: "High-impact lead generation platform with dynamic CMS, blog, and multi-service funnels.",
        features: [
          "Up to 15 Custom Pages + Dynamic Blog Engine",
          "100% Google Core Web Vitals Optimization",
          "Advanced Schema Markup & City Landing Pages",
          "Headless CMS for Easy Content Management",
          "Lead Capture Form with Supabase & WhatsApp",
          "Speed Guarantee (Sub-800ms load time)",
          "3 Weeks Turnaround Time"
        ]
      },
      {
        name: "Custom E-Commerce / App",
        price: "₹79,999+",
        period: "one-time",
        desc: "Custom e-commerce store or complex web application with custom database, payment gateways, and user accounts.",
        features: [
          "Full Custom E-Commerce / Web Application",
          "Razorpay / Stripe Payment Gateway Sync",
          "Real-Time Inventory & Order Tracking",
          "Custom API Integrations & Admin Dashboard",
          "Enterprise Scalability & Database Setup",
          "Dedicated Senior Engineer & 60-Day Support",
          "4 to 6 Weeks Turnaround Time"
        ]
      }
    ],
    comparison: [
      { feature: "Architecture", topRank: "Handcrafted Next.js & React code", others: "Heavy, bloated WordPress templates with 30+ plugins" },
      { feature: "Load Speed", topRank: "Under 800ms globally on Cloudflare Edge", others: "4 to 7 seconds on cheap shared hosting" },
      { feature: "Security", topRank: "Serverless, static generation (Cannot be hacked)", others: "Vulnerable to SQL injections & malicious plugins" },
      { feature: "SEO Indexing", topRank: "Automated JSON-LD schemas & clean semantic HTML", others: "Generic themes with broken heading tags and no schema" },
      { feature: "Ownership", topRank: "100% complete source code & assets ownership", others: "Locked into proprietary builders with monthly fees" }
    ],
    faqs: [
      {
        q: "Why do you recommend Next.js and React over standard WordPress?",
        a: "WordPress themes are notoriously heavy, bloated with unused JavaScript, and susceptible to malware attacks. Next.js delivers pre-rendered static pages that load in under 800ms, score 100% on Google PageSpeed Insights, and offer superior search engine indexation."
      },
      {
        q: "How long does it take to design and develop a website?",
        a: "A standard 5-to-10 page corporate website takes 2 to 3 weeks from visual Figma draft to live deployment. Complex e-commerce platforms or custom portals typically require 4 to 6 weeks."
      },
      {
        q: "Will my website be mobile-responsive and SEO-friendly?",
        a: "Yes. Every single site we engineer is built mobile-first. We implement semantic HTML5, clean URL structures, Google Rich Snippets (Schema.org JSON-LD), and optimized metadata for maximum SEO visibility."
      },
      {
        q: "Do you provide hosting and maintenance after launch?",
        a: "Yes. We offer complete cloud hosting, Cloudflare enterprise CDN configuration, automated daily backups, and ongoing technical maintenance packages."
      }
    ],
    testimonials: [
      {
        name: "Ankit Mathur",
        role: "Co-Founder",
        company: "Nexus Logistics",
        quote: "TopRank built our corporate platform on Next.js. Our site loads instantly, our Google rankings improved across all target keywords, and our inbound inquiries doubled in 3 weeks.",
        rating: 5
      }
    ]
  },
  "google-ads": {
    id: "google-ads",
    name: "Google Ads & PPC",
    icon: Target,
    bgColor: "bg-rose-50",
    color: "text-rose-600",
    badge: "High-Intent Traffic",
    description: "High-ROAS Google Ads campaigns designed to capture buyers at the exact moment they search for your services.",
    longDescription: "Stop wasting ad spend on irrelevant clicks. We design hyper-targeted Google Search, Display, Shopping, and YouTube Ads campaigns with negative keyword shields, conversion-focused copy, and real-time bid optimization.",
    href: "/services/google-ads",
    stats: [
      { value: "4.2x", label: "Average Client ROAS" },
      { value: "-45%", label: "Reduction in Cost Per Lead" },
      { value: "92%", label: "Google Impression Share" },
      { value: "₹5Cr+", label: "Managed Ad Spend" },
    ],
    subServices: [
      { name: "Google Search Ads", desc: "Appear #1 for high-intent search terms", icon: Search, href: "/services/google-ads/search" },
      { name: "Display & Banner Ads", desc: "Visual branding across millions of sites", icon: Monitor, href: "/services/google-ads/display" },
      { name: "YouTube Video Ads", desc: "Engaging video ads that drive direct action", icon: Video, href: "/services/google-ads/youtube" },
      { name: "PPC Remarketing", desc: "Recapture previous visitors & abandoned carts", icon: Workflow, href: "/services/google-ads/remarketing" },
    ],
    features: [
      "Precision Intent Keyword Research",
      "Negative Keyword Shields (Zero Waste)",
      "High-Converting Landing Page Design",
      "Smart Bidding & Target CPA Strategies",
      "Click-Fraud Protection Software",
      "Full Server-Side Conversion Attribution"
    ],
    outcomes: [
      "Immediate Inbound Phone Calls & Leads",
      "Predictable Cost-Per-Acquisition (CPA)",
      "Maximum Top-of-Page Impression Share",
      "Transparent Positive Return on Ad Spend"
    ],
    deliverables: [
      "Targeted Keyword Architecture & Competitor Ad Analysis",
      "High-CTR Persuasive Ad Copy & Extension Assets",
      "Conversion Tracking Setup via Google Tag Manager",
      "Click-Fraud & Competitor Block Setup",
      "Bi-Weekly A/B Testing of Ad Copies & Headings",
      "Real-Time Dashboard & Dedicated Account Lead"
    ],
    pricingPackages: [
      {
        name: "Starter PPC",
        price: "₹18,000",
        period: "per month",
        desc: "For local service businesses targeting high-intent inquiries in specific geographic zones.",
        features: [
          "Google Search Ads Setup & Management",
          "Ad Spend Management up to ₹40,000",
          "Negative Keyword List Setup",
          "Conversion Tracking & Call Tracking",
          "Bi-Weekly Optimization & Review",
          "Standard Email Support"
        ]
      },
      {
        name: "Growth ROAS Engine",
        price: "₹35,000",
        period: "per month",
        popular: true,
        desc: "For growing businesses wanting aggressive search dominance, YouTube video ads, and remarketing.",
        features: [
          "Google Search + Display + Remarketing Ads",
          "Ad Spend Management up to ₹1,20,000",
          "Custom High-Converting Landing Page",
          "Click-Fraud Protection Included",
          "Target CPA & Smart Bidding Tuning",
          "Live 24/7 Performance Dashboard",
          "Dedicated PPC Strategist"
        ]
      },
      {
        name: "Enterprise Multi-Region",
        price: "₹65,000+",
        period: "per month",
        desc: "For national brands and e-commerce companies scaling multi-city campaigns.",
        features: [
          "Search, Performance Max, Shopping & YouTube Ads",
          "Unlimited Ad Spend Management",
          "Multivariate Landing Page A/B Testing",
          "Custom CRM Offline Conversion Sync",
          "Weekly Senior PPC Strategy Calls",
          "Direct WhatsApp Emergency Hotline"
        ]
      }
    ],
    comparison: [
      { feature: "Keyword Strategy", topRank: "Strict exact/phrase match with negative keyword shields", others: "Broad match keywords resulting in 40%+ wasted spend" },
      { feature: "Landing Page", topRank: "Custom sub-second Next.js conversion landing pages", others: "Sending paid traffic directly to generic homepages" },
      { feature: "Tracking", topRank: "Verified phone calls, forms & WhatsApp tracking", others: "Tracking vanity button clicks without lead verification" },
      { feature: "Optimization", topRank: "Daily bid management & weekly search term pruning", others: "Set-and-forget campaigns checked once a month" }
    ],
    faqs: [
      {
        q: "How soon do Google Ads start delivering leads?",
        a: "Google Ads can begin driving qualified traffic and phone calls within 24 to 48 hours of campaign launch. Once tracking is configured, high-intent buyers searching for your service see your ads immediately."
      },
      {
        q: "How do you prevent competitors from clicking on our ads?",
        a: "We deploy enterprise click-fraud protection software, IP exclusions, and strict geo-fencing to ensure that malicious bots and competitors cannot drain your daily advertising budget."
      },
      {
        q: "What is the recommended starting ad budget for Google Ads?",
        a: "For local service businesses, we recommend starting with a minimum monthly ad spend of ₹15,000 to ₹30,000. For state-wide or national campaigns, budgets typically range from ₹50,000 to ₹2,00,000+."
      }
    ]
  },
  "meta-ads": {
    id: "meta-ads",
    name: "Meta Ads (FB & IG)",
    icon: Share2,
    bgColor: "bg-sky-50",
    color: "text-sky-600",
    badge: "Social ROI",
    description: "High-converting Facebook and Instagram advertising systems engineered to capture demand and scale ROAS.",
    longDescription: "We craft scroll-stopping creatives, strategic retargeting funnels, and precision audience segmentation across Facebook and Instagram to turn attention into measurable revenue.",
    href: "/services/meta-ads",
    stats: [
      { value: "5.1x", label: "Top-Tier Campaign ROAS" },
      { value: "3.2M+", label: "Target Audience Reached" },
      { value: "₹24", label: "Average Cost Per Lead" },
      { value: "99.2%", label: "Pixel Accuracy" },
    ],
    subServices: [
      { name: "Facebook Ads", desc: "Target hyper-specific demographics & interests", icon: Users, href: "/services/meta-ads/facebook" },
      { name: "Instagram Ads", desc: "Visual storytelling & high-retention Reels ads", icon: Smartphone, href: "/services/meta-ads/instagram" },
      { name: "Instant Lead Ads", desc: "Direct in-app customer acquisition funnels", icon: Target, href: "/services/meta-ads/leads" },
      { name: "Ad Creative Strategy", desc: "High-CTR static, carousel & video assets", icon: Palette, href: "/services/meta-ads/strategy" },
    ],
    features: [
      "Custom Lookalike & Retargeting Funnels",
      "Scroll-Stopping High-CTR Creatives",
      "Meta Conversions API (CAPI) Setup",
      "Instant WhatsApp Direct-to-Chat Funnels",
      "Multivariate Ad Copy & Angle Testing",
      "Weekly Creative Refresh Cycles"
    ],
    outcomes: [
      "Lowest Cost Per Customer Acquisition",
      "Predictable Monthly Lead Volume",
      "Massive Local & National Brand Exposure",
      "High Return On Ad Spend (ROAS)"
    ],
    deliverables: [
      "Comprehensive Audience Persona Architecture",
      "16 to 30 Custom Static & Motion Video Creatives / Month",
      "Conversions API & Server-Side Pixel Tracking Setup",
      "Instant Lead Form & CRM Automation",
      "Weekly Ad Creative Fatigue Monitoring",
      "Dedicated Meta Ads Account Strategist"
    ],
    pricingPackages: [
      {
        name: "Starter Social Ads",
        price: "₹18,000",
        period: "per month",
        desc: "Ideal for local businesses and professionals seeking immediate customer inquiries from FB & IG.",
        features: [
          "Meta Ads Management on FB & Instagram",
          "Ad Spend Management up to ₹40,000",
          "12 Custom Designed Ad Creatives",
          "Direct WhatsApp & Lead Form Setup",
          "Bi-Weekly Reporting",
          "Standard Email Support"
        ]
      },
      {
        name: "Growth Funnel Pro",
        price: "₹35,000",
        period: "per month",
        popular: true,
        desc: "Full-funnel customer acquisition with custom landing pages, dynamic retargeting, and video ads.",
        features: [
          "Full Top, Middle & Bottom of Funnel Meta Strategy",
          "Ad Spend Management up to ₹1,20,000",
          "24 Custom Static + 4 Motion Video Creatives",
          "Server-Side Meta Conversions API (CAPI)",
          "Dynamic Product Catalog / Retargeting",
          "Weekly Creative Refreshes",
          "Dedicated Account Lead"
        ]
      },
      {
        name: "Scale Brand Dominance",
        price: "₹65,000+",
        period: "per month",
        desc: "High-volume ad scaling for D2C brands, educational institutions, and real estate developers.",
        features: [
          "Omni-Angle Video & Influencer Whitelisting Ads",
          "Unlimited Ad Spend Management",
          "Daily Creative & Hook Iterations",
          "Advanced CRM & WhatsApp Bot Integration",
          "Live 24/7 Attribution Dashboard",
          "Direct Strategy Hotline"
        ]
      }
    ],
    comparison: [
      { feature: "Creative Quality", topRank: "Custom psychological hooks & high-CTR motion graphics", others: "Repurposed social media posts boosted with no hook" },
      { feature: "Tracking Accuracy", topRank: "Server-Side Conversions API bypassing iOS restrictions", others: "Client-side pixel losing 35%+ of conversion data" },
      { feature: "Funnel Structure", topRank: "Segmented cold, warm & hot retargeting sequences", others: "Single broad ad blasted to everyone repeatedly" }
    ],
    faqs: [
      {
        q: "Why are my Meta Ads currently not converting?",
        a: "Most failed Meta campaigns suffer from weak creative hooks, ad fatigue, broad targeting with no retargeting layer, or sending traffic to slow, non-optimized landing pages. We fix the entire creative-to-conversion pipeline."
      },
      {
        q: "Do you create the images and video ads for us?",
        a: "Yes. We write persuasive ad copy, design scroll-stopping static graphics, and edit high-retention vertical video reels with captions, callouts, and motion effects."
      }
    ]
  },
  "local-seo": {
    id: "local-seo",
    name: "Local SEO & GMB",
    icon: MapPin,
    bgColor: "bg-orange-50",
    color: "text-orange-600",
    badge: "Google 3-Pack",
    description: "Dominate Google Maps and local search results to capture nearby customers ready to buy.",
    longDescription: "Over 68% of local searches end with a direct phone call or direction request. We optimize your Google Business Profile, build localized citations, and engineer review velocity to put your business at #1 in the Google Maps 3-Pack.",
    href: "/services/local-seo",
    stats: [
      { value: "#1", label: "Rank in Target Local Pack" },
      { value: "+380%", label: "Increase in Direct Calls" },
      { value: "4.9★", label: "Average Review Rating" },
      { value: "100%", label: "Geo-Citation Accuracy" },
    ],
    subServices: [
      { name: "GMB Setup & Verification", desc: "Official verified business profile", icon: MapPin, href: "/services/local-seo/gmb-setup" },
      { name: "GMB Optimization", desc: "Category, photos & service tuning", icon: Zap, href: "/services/local-seo/gmb-optimization" },
      { name: "Google Map Ranking", desc: "Rank in the 3-Pack across all sectors", icon: Navigation, href: "/services/local-seo/map-ranking" },
      { name: "Review Management", desc: "Automated 5-star customer reviews", icon: MessageSquare, href: "/services/local-seo/reviews" },
    ],
    features: [
      "Hyper-Local Keyword Optimization",
      "Google Business Profile (GMB) Mastery",
      "100+ Geo-Relevant Local Citations",
      "Automated 5-Star Review Generation",
      "Geo-Tagged Photo & Post Strategy",
      "Local Map Spam & Competitor Audits"
    ],
    outcomes: [
      "Google Maps 3-Pack Dominance",
      "Massive Increase in Direct Phone Calls",
      "Dominant Foot Traffic & Local Inquiries",
      "5-Star Verified Local Reputation"
    ],
    deliverables: [
      "Full Local SEO & Citation Audit",
      "Google Business Profile Architecture & Category Overhaul",
      "75+ Cleaned & Verified High-Authority Citations",
      "Local Schema.org Structured Data Implementation",
      "Review QR Code & Automated WhatsApp Review Flow",
      "Monthly Local Search Grid Heatmap Reports"
    ],
    pricingPackages: [
      {
        name: "Local Visibility",
        price: "₹15,000",
        period: "per month",
        desc: "For single-location businesses aiming to rank on Google Maps in their immediate neighborhood.",
        features: [
          "Google Business Profile Complete Optimization",
          "25 Local Directory Citations / Month",
          "Weekly Geo-Tagged GMB Posts & Photos",
          "Basic Review Generation Strategy",
          "Monthly Local Rank Tracking",
          "Email Support"
        ]
      },
      {
        name: "Local Pack Dominance",
        price: "₹28,000",
        period: "per month",
        popular: true,
        desc: "For competitive local businesses wanting city-wide dominance across multiple sectors and zip codes.",
        features: [
          "Complete City-Wide Map 3-Pack Strategy",
          "60+ Premium Local Citations & NAP Cleanup",
          "Automated Review Capture System via WhatsApp",
          "Local On-Page SEO & Schema for Website",
          "Local Search Grid Heatmap Ranking Reports",
          "Competitor Map Spam Cleanup & Removal",
          "Dedicated Local SEO Specialist"
        ]
      },
      {
        name: "Multi-Location Enterprise",
        price: "₹50,000+",
        period: "per month",
        desc: "For franchises, hospital chains, and multi-branch companies across several cities.",
        features: [
          "Multi-Location GMB Management (3+ Locations)",
          "Centralized Review Management Dashboard",
          "Massive Citation Building Across All Locations",
          "Location Landing Pages Development on Website",
          "Priority 24/7 Hotline Support"
        ]
      }
    ],
    comparison: [
      { feature: "Map Optimization", topRank: "Geo-grid coordinate tuning with local landmark citations", others: "Basic profile creation with incomplete services" },
      { feature: "Review Engine", topRank: "Automated QR code & WhatsApp review generation funnel", others: "Hoping customers leave reviews organically" },
      { feature: "Reporting", topRank: "Visual Geo-Grid Heatmaps showing exact radius ranking", others: "Simple list of keywords without geographic context" }
    ],
    faqs: [
      {
        q: "How long does it take to rank in the Google Maps 3-Pack?",
        a: "Initial improvements in rankings and call volumes typically appear within 30 to 45 days. Full 3-pack dominance across a competitive city radius generally takes 60 to 90 days of consistent citation building and review acquisition."
      },
      {
        q: "Can you fix suspended Google Business Profiles?",
        a: "Yes. We handle official Google Business Profile appeals, address reinstatement verifications, and duplicate listing removals to get your profile restored quickly."
      }
    ]
  },
  "whatsapp": {
    id: "whatsapp",
    name: "WhatsApp & AI Automation",
    icon: MessageCircle,
    bgColor: "bg-emerald-50",
    color: "text-emerald-600",
    badge: "24/7 AI Sales",
    description: "Official WhatsApp Business API and AI chatbot automation to qualify leads and handle customers 24/7.",
    longDescription: "Turn WhatsApp into your #1 automated sales channel. We deploy official WhatsApp Green Tick API setups, custom AI customer service bots, broadcast campaigns, and direct CRM integrations.",
    href: "/services/whatsapp-automation",
    stats: [
      { value: "< 5 sec", label: "Average Response Time" },
      { value: "98%", label: "WhatsApp Message Open Rate" },
      { value: "3.4x", label: "Lead Qualification Speed" },
      { value: "24/7", label: "Zero-Downtime Operation" },
    ],
    subServices: [
      { name: "WhatsApp Business API", desc: "Official Meta API & Green Tick verification", icon: MessageCircle, href: "/services/whatsapp-automation/api" },
      { name: "Chatbot Automation", desc: "Interactive conversational sales flows", icon: Workflow, href: "/services/whatsapp-automation/chatbot" },
      { name: "Auto Reply Systems", desc: "Instant response triggers & lead capture", icon: MessageSquare, href: "/services/whatsapp-automation/reply" },
      { name: "AI Customer Handling", desc: "Intelligent GPT-powered support bots", icon: Monitor, href: "/services/whatsapp-automation/ai" },
    ],
    features: [
      "Official Meta WhatsApp Cloud API Setup",
      "Intelligent Conversational AI Chatbots",
      "Instant Lead Qualification & Routing",
      "Automated Broadcast & Drip Campaigns",
      "Seamless CRM & Payment Gateway Sync",
      "Multi-Agent Shared Team Inbox"
    ],
    outcomes: [
      "Zero Customer Waiting Time",
      "Automated 24/7 Sales Lead Booking",
      "Massive Drop in Customer Support Costs",
      "98%+ Read Rates on Marketing Messages"
    ],
    pricingPackages: [
      {
        name: "WhatsApp Starter",
        price: "₹18,000",
        period: "per month",
        desc: "Essential API and automated chat flow for local businesses.",
        features: [
          "Official WhatsApp Business API Setup",
          "Automated Welcome & FAQ Chatbot Flow",
          "Lead Capture to Google Sheets / Email",
          "Up to 2,000 Monthly Active Conversations",
          "Standard Support"
        ]
      },
      {
        name: "AI Growth Engine",
        price: "₹34,000",
        period: "per month",
        popular: true,
        desc: "Complete conversational AI bot with multi-agent inbox, CRM sync, and broadcast tools.",
        features: [
          "Custom GPT-Powered AI Support & Sales Bot",
          "Green Tick Verification Assistance",
          "Multi-Agent Team Inbox Setup (Up to 5 Agents)",
          "CRM Sync (HubSpot / Zoho / Custom Database)",
          "Automated Review & Re-Engagement Drips",
          "Priority Technical Support"
        ]
      }
    ],
    faqs: [
      {
        q: "What is the difference between WhatsApp Business App and WhatsApp API?",
        a: "The standard WhatsApp Business app is limited to one phone with manual responses. The official WhatsApp API enables multiple agents to log in simultaneously, integrates AI chatbots, triggers automated notifications, and allows compliant broadcast messaging at scale."
      }
    ]
  },
  "branding": {
    id: "branding",
    name: "Branding & Design",
    icon: Palette,
    bgColor: "bg-purple-50",
    color: "text-purple-600",
    badge: "Identity Engineering",
    description: "Magnetic visual identities, luxury brand guidelines, and high-CTR marketing assets that position you as the market leader.",
    longDescription: "We build unforgettable visual identities that command premium pricing. From iconic logo designs and complete brand guidelines to high-converting ad creatives and marketing collateral, we ensure your brand looks world-class.",
    href: "/services/branding",
    stats: [
      { value: "100%", label: "Custom Handcrafted Vector" },
      { value: "250+", label: "Identities Created" },
      { value: "3.2x", label: "Perceived Value Increase" },
      { value: "100%", label: "Full Trademark Clearance" },
    ],
    subServices: [
      { name: "Logo & Brand Identity", desc: "Iconic logo & typography design", icon: Palette, href: "/services/branding/logo" },
      { name: "Social Media Creatives", desc: "High-engagement aesthetic post kits", icon: LayoutTemplate, href: "/services/branding/social-posts" },
      { name: "Ad Creative Design", desc: "High-CTR static & motion ad graphics", icon: TrendingUp, href: "/services/branding/ads" },
      { name: "Marketing Collateral", desc: "Brochures, pitch decks & packaging", icon: Layout, href: "/services/branding/marketing-docs" },
    ],
    features: [
      "Psychology-Driven Visual Branding",
      "Comprehensive Brand Style Guidelines",
      "Vector Typography & Color Harmony",
      "High-CTR Performance Ad Assets",
      "Corporate Stationery & Print Kits",
      "Full Copyright & Source File Handoff"
    ],
    outcomes: [
      "Command Premium Market Pricing",
      "Instant Brand Recall & Recognition",
      "Cohesive Visual Experience Across Touchpoints",
      "Unshakable Customer Trust & Loyalty"
    ],
    pricingPackages: [
      {
        name: "Essential Brand Kit",
        price: "₹19,999",
        period: "one-time",
        desc: "For startups seeking a clean, memorable visual identity.",
        features: [
          "3 Unique Custom Logo Concepts",
          "Color Palette & Typography Guidelines",
          "Business Card & Letterhead Stationery",
          "Social Media Profile & Cover Kit",
          "Full Vector Source Files (AI, SVG, PNG)",
          "100% Commercial Ownership"
        ]
      },
      {
        name: "Full Brand Dominance",
        price: "₹39,999",
        period: "one-time",
        popular: true,
        desc: "Complete corporate identity overhaul with 30-page brand guidelines and marketing collateral.",
        features: [
          "5 High-Concept Logo Directions",
          "Comprehensive 30-Page Brand Identity Manual",
          "Complete Corporate Stationery & Pitch Deck Template",
          "15 Custom Social Media Post & Reel Cover Templates",
          "Product Packaging / Signage Mockups",
          "Dedicated Senior Art Director"
        ]
      }
    ],
    faqs: [
      {
        q: "Do I get full copyright and ownership of the designs?",
        a: "Yes. Upon project completion, full intellectual property rights, vector master files (AI, EPS, SVG), and typography guidelines are handed over to you with 100% commercial ownership."
      }
    ]
  },
  "content": {
    id: "content",
    name: "Content Creation",
    icon: Video,
    bgColor: "bg-red-50",
    color: "text-red-500",
    badge: "High-Retention Media",
    description: "High-retention video production, viral short-form reels, and SEO copywriting engineered to capture attention.",
    longDescription: "Attention is the new currency. We script, edit, and produce viral short-form video reels, persuasive landing page sales copy, and high-ranking SEO blog articles that turn views into paying customers.",
    href: "/services/content-creation",
    stats: [
      { value: "10M+", label: "Organic Reel Views" },
      { value: "4.8x", label: "Average Audience Retention" },
      { value: "100%", label: "Original Scripting & Copy" },
      { value: "48 hrs", label: "Fast Video Turnaround" },
    ],
    subServices: [
      { name: "Reels & Short Videos", desc: "Viral vertical video content for IG & YT", icon: Video, href: "/services/content-creation/reels" },
      { name: "Professional Video Editing", desc: "Post-production with dynamic captions & SFX", icon: Monitor, href: "/services/content-creation/editing" },
      { name: "SEO Blog Writing", desc: "Topical authority articles that rank", icon: FileText, href: "/services/content-creation/blogs" },
      { name: "Persuasive Copywriting", desc: "High-converting sales & landing page copy", icon: PenTool, href: "/services/content-creation/copywriting" },
    ],
    features: [
      "Trend-Jacking & Hook Architecture",
      "Dynamic Captions, SFX & B-Roll Editing",
      "Semantic SEO Keyword Integration",
      "Psychology-Driven Direct Sales Copy",
      "Omni-Platform Formatting (IG, YT, TikTok)",
      "Dedicated Creative Content Strategist"
    ],
    outcomes: [
      "Viral Organic Reach & Brand Recall",
      "Deep Topical Search Engine Authority",
      "Higher Video Watch Time & Engagement",
      "Effortless Inbound Lead Conversions"
    ],
    pricingPackages: [
      {
        name: "Viral Reels Starter",
        price: "₹18,000",
        period: "per month",
        desc: "For founders and creators wanting 8 professionally edited short-form reels per month.",
        features: [
          "8 Professionally Edited Reels / Shorts",
          "Dynamic Viral Captions, Sound Effects & B-Roll",
          "Scriptwriting & Hook Optimization",
          "Fast 48-Hour Turnaround",
          "Monthly Performance Review"
        ]
      },
      {
        name: "Omni-Content Growth",
        price: "₹38,000",
        period: "per month",
        popular: true,
        desc: "Complete video and written content engine to build unstoppable brand authority.",
        features: [
          "16 High-Retention Reels / Shorts",
          "4 In-Depth SEO Blog Articles (1,500+ Words Each)",
          "Custom Reel Thumbnails & YouTube Cover Assets",
          "Persuasive Newsletter & Ad Copywriting",
          "Content Calendar Planning & Trend Tracking",
          "Dedicated Content Producer"
        ]
      }
    ],
    faqs: [
      {
        q: "Do you provide raw footage recording or only editing?",
        a: "We provide complete end-to-end guidance. We supply proven hook scripts and recording instructions so you can shoot on your phone in minutes, and our post-production team handles all dynamic editing, animations, sound design, and color grading."
      }
    ]
  },
  "hosting": {
    id: "hosting",
    name: "Hosting & Support",
    icon: ShieldCheck,
    bgColor: "bg-slate-50",
    color: "text-slate-600",
    badge: "99.9% Uptime",
    description: "Enterprise-grade cloud infrastructure, Cloudflare enterprise security, and 24/7 dedicated website maintenance.",
    longDescription: "Protect your digital assets with enterprise-grade cloud hosting. We deliver 99.9% guaranteed uptime, daily automated cloud backups, malware protection, and priority technical support.",
    href: "/services/hosting",
    stats: [
      { value: "99.99%", label: "Guaranteed Uptime" },
      { value: "< 50ms", label: "Edge Server TTFB" },
      { value: "24/7", label: "Live System Monitoring" },
      { value: "Daily", label: "Automated Cloud Backups" },
    ],
    subServices: [
      { name: "Cloud Web Hosting", desc: "High-speed NVMe SSD cloud servers", icon: Globe, href: "/services/hosting/cloud" },
      { name: "Domain & DNS Setup", desc: "Enterprise Cloudflare DNS routing", icon: Search, href: "/services/hosting/domains" },
      { name: "Website Maintenance", desc: "Plugin updates, speed tuning & patches", icon: Workflow, href: "/services/hosting/maintenance" },
      { name: "Security & Malware Shield", desc: "Daily backups & firewall protection", icon: ShieldCheck, href: "/services/hosting/security" },
    ],
    features: [
      "Global Cloudflare Enterprise Edge CDN",
      "Daily Automated Off-Site Cloud Backups",
      "Free SSL Certificates & DDoS Mitigation",
      "Real-Time 24/7 Uptime Monitoring",
      "WordPress & Server Security Hardening",
      "Priority 1-Hour Emergency Response"
    ],
    outcomes: [
      "Zero Costly Website Downtime",
      "Ultra-Fast Global TTFB (Time to First Byte)",
      "Total Peace of Mind Against Cyber Threats",
      "Immediate Professional Tech Support"
    ],
    pricingPackages: [
      {
        name: "Standard Cloud Care",
        price: "₹4,999",
        period: "per month",
        desc: "Essential cloud hosting, daily backups, and security monitoring for corporate websites.",
        features: [
          "Enterprise Cloud Hosting & SSL",
          "Daily Automated Cloud Backups",
          "Cloudflare CDN & Firewall Setup",
          "Monthly Plugin & Software Updates",
          "99.9% Uptime SLA",
          "Standard Email Support"
        ]
      },
      {
        name: "Premium Dedicated Care",
        price: "₹9,999",
        period: "per month",
        popular: true,
        desc: "For high-traffic e-commerce stores and mission-critical business web applications.",
        features: [
          "Dedicated Cloud Server Allocation",
          "Real-Time 24/7 Uptime & Malware Scans",
          "Hourly Automated Backups with 1-Click Restore",
          "Monthly Speed & Core Web Vitals Audits",
          "4 Hours of Free Development Changes / Month",
          "Priority 1-Hour WhatsApp Emergency Hotline"
        ]
      }
    ],
    faqs: [
      {
        q: "What happens if our website goes down?",
        a: "Our monitoring systems ping your website every 60 seconds. If an outage is detected, our engineers are instantly alerted to restore service, diagnose errors, and verify SSL/DNS integrity immediately."
      }
    ]
  },
  "seo": {
    id: "seo",
    name: "SEO Services",
    icon: Search,
    bgColor: "bg-indigo-50",
    color: "text-indigo-600",
    badge: "Organic Monopoly",
    description: "Dominate search rankings and drive high-intent organic traffic that compounds month over month.",
    href: "/services/seo",
    subServices: [
      { name: "On-Page SEO", desc: "Content & Keyword tuning", icon: LayoutTemplate, href: "/services/seo/on-page" },
      { name: "Off-Page SEO", desc: "Authority & Link building", icon: Globe, href: "/services/seo/off-page" },
      { name: "Technical SEO", desc: "Site speed & architecture", icon: Database, href: "/services/seo/technical" },
      { name: "Keyword Research", desc: "High-intent search terms", icon: Search, href: "/services/seo/keywords" },
      { name: "Competitor Analysis", desc: "Outrank your rivals", icon: BarChart, href: "/services/seo/competitor" },
      { name: "SEO Audit", desc: "Complete health check-up", icon: ClipboardCheck, href: "/services/seo/audit" },
    ],
    features: [
      "Topical Authority & Semantic Hub Building",
      "Core Web Vitals & Technical SEO Fixes",
      "High-Authority Editorial Link Building",
      "Local Map Pack & Citation Dominance"
    ],
    outcomes: [
      "First-Page Google Rankings",
      "Sustainable Inbound Lead Flow",
      "Zero Dependence on Paid Ad Billing"
    ]
  }
};
