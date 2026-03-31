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

export interface ServiceData {
  id: string;
  name: string;
  icon: LucideIcon;
  bgColor: string;
  color: string;
  description: string;
  href: string;
  subServices: SubService[];
  features?: string[];
  outcomes?: string[];
}

// Rich Service Data Structure with Sub-Services
export const SERVICES_DATA: Record<string, ServiceData> = {
  "digital-marketing": {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: Megaphone,
    bgColor: "bg-blue-50",
    color: "text-blue-600",
    description: "Multi-channel growth strategies to scale your brand.",
    href: "/services/digital-marketing",
    subServices: [
      { name: "Social Media Marketing", desc: "Build brand awareness", icon: Share2, href: "/services/digital-marketing/social-media" },
      { name: "Social Media Management", desc: "Professional profile handling", icon: Users, href: "/services/digital-marketing/management" },
      { name: "Content Marketing", desc: "Value-driven content strategy", icon: FileText, href: "/services/digital-marketing/content" },
      { name: "Influencer Marketing", desc: "Leverage industry authority", icon: Sparkles, href: "/services/digital-marketing/influencer" },
      { name: "Online Reputation (ORM)", desc: "Maintain a positive image", icon: ShieldCheck, href: "/services/digital-marketing/orm" },
      { name: "Lead Generation", desc: "High-intent lead capture", icon: Target, href: "/services/digital-marketing/leads" },
    ],
    features: ["Omni-Channel Strategy", "Data-Driven Campaigns", "Brand Authority Building", "High-Converting Funnels"],
    outcomes: ["Dominant Market Position", "Consistent Lead Flow", "Increased Brand Loyalty"]
  },
  "seo": {
    id: "seo",
    name: "SEO Services",
    icon: Search,
    bgColor: "bg-indigo-50",
    color: "text-indigo-600",
    description: "Dominate search rankings and drive organic traffic.",
    href: "/services/seo",
    subServices: [
      { name: "On-Page SEO", desc: "Content & Keyword tuning", icon: LayoutTemplate, href: "/services/seo/on-page" },
      { name: "Off-Page SEO", desc: "Authority & Link building", icon: Globe, href: "/services/seo/off-page" },
      { name: "Technical SEO", desc: "Site speed & architecture", icon: Database, href: "/services/seo/technical" },
      { name: "Keyword Research", desc: "High-intent search terms", icon: Search, href: "/services/seo/keywords" },
      { name: "Competitor Analysis", desc: "Outrank your rivals", icon: BarChart, href: "/services/seo/competitor" },
      { name: "SEO Audit", desc: "Complete health check-up", icon: ClipboardCheck, href: "/services/seo/audit" },
    ]
  },
  "local-seo": {
    id: "local-seo",
    name: "Local SEO & GMB",
    icon: MapPin,
    bgColor: "bg-orange-50",
    color: "text-orange-600",
    description: "Dominate the local 'near me' search market.",
    href: "/services/local-seo",
    subServices: [
      { name: "GMB Setup", desc: "Official business profile", icon: MapPin, href: "/services/local-seo/gmb-setup" },
      { name: "GMB Optimization", desc: "Rank in the Local Pack", icon: Zap, href: "/services/local-seo/gmb-optimization" },
      { name: "Map Ranking", desc: "Top visibility on Maps", icon: Navigation, href: "/services/local-seo/map-ranking" },
      { name: "Review Management", desc: "Build customer trust", icon: MessageSquare, href: "/services/local-seo/reviews" },
    ],
    features: ["Hyper-Local Targeting", "Map Pack Dominance", "Review Generation", "Citation Building"],
    outcomes: ["Increased Foot Traffic", "Higher Local Authority", "More Inbound Calls"]
  },
  "web-dev": {
    id: "web-dev",
    name: "Web Development",
    icon: Code,
    bgColor: "bg-pink-50",
    color: "text-pink-600",
    description: "High-performance websites built for conversion.",
    href: "/services/web-development",
    subServices: [
      { name: "Business Website", desc: "Lead-focused corporate sites", icon: Monitor, href: "/services/web-development/business" },
      { name: "E-commerce Development", desc: "Online stores that sell", icon: ShoppingCart, href: "/services/web-development/ecommerce" },
      { name: "WordPress Development", desc: "Flexible & scalable sites", icon: Layout, href: "/services/web-development/wordpress" },
      { name: "Website Speed", desc: "Lightning fast performance", icon: Zap, href: "/services/web-development/speed" },
    ],
    features: ["Next.js Architecture", "Mobile-First Design", "Lightning Fast Load Times", "Conversion Optimized Layouts"],
    outcomes: ["Higher Conversion Rates", "Better User Experience", "Improved Search Rankings"]
  },
  "google-ads": {
    id: "google-ads",
    name: "Google Ads / PPC",
    icon: Target,
    bgColor: "bg-rose-50",
    color: "text-rose-600",
    description: "Instant traffic and ROI-focused search ads.",
    href: "/services/google-ads",
    subServices: [
      { name: "Search Ads", desc: "Appear at the top of Google", icon: Search, href: "/services/google-ads/search" },
      { name: "Display Ads", desc: "Visual ads across the web", icon: Monitor, href: "/services/google-ads/display" },
      { name: "YouTube Ads", desc: "Video ads that engage", icon: Video, href: "/services/google-ads/youtube" },
      { name: "Remarketing", desc: "Target previous visitors", icon: Workflow, href: "/services/google-ads/remarketing" },
    ],
    features: ["Precision Keyword Targeting", "High-Converting Ad Copy", "Advanced Bidding Strategies", "Continuous A/B Testing"],
    outcomes: ["Immediate Lead Generation", "Positive ROAS", "Scalable Customer Acquisition"]
  },
  "meta-ads": {
    id: "meta-ads",
    name: "Meta Ads (FB & IG)",
    icon: Share2,
    bgColor: "bg-blue-50",
    color: "text-blue-500",
    description: "Powerful social advertising that converts.",
    href: "/services/meta-ads",
    subServices: [
      { name: "Facebook Ads", desc: "Target specific demographics", icon: Users, href: "/services/meta-ads/facebook" },
      { name: "Instagram Ads", desc: "Visual storytelling for ROI", icon: Smartphone, href: "/services/meta-ads/instagram" },
      { name: "Lead Ads", desc: "Direct customer acquisition", icon: Target, href: "/services/meta-ads/leads" },
      { name: "Ad Creative Strategy", desc: "Winning ad designs", icon: Palette, href: "/services/meta-ads/strategy" },
    ],
    features: ["Audience Segmentation", "Scroll-Stopping Creatives", "Retargeting Funnels", "Pixel Conversion Tracking"],
    outcomes: ["Lower Cost Per Acquisition", "Viral Brand Exposure", "Predictable Revenue Source"]
  },
  "whatsapp": {
    id: "whatsapp",
    name: "WhatsApp & AI",
    icon: MessageCircle,
    bgColor: "bg-blue-50",
    color: "text-blue-600",
    description: "Automated customer handling and support.",
    href: "/services/whatsapp-automation",
    subServices: [
      { name: "WhatsApp API", desc: "Official Business API setup", icon: MessageCircle, href: "/services/whatsapp-automation/api" },
      { name: "Chatbot Automation", desc: "24/7 automated support", icon: Workflow, href: "/services/whatsapp-automation/chatbot" },
      { name: "Auto Reply System", desc: "Instant response triggers", icon: MessageSquare, href: "/services/whatsapp-automation/reply" },
      { name: "AI Customer Handling", desc: "Smarter automated chats", icon: Monitor, href: "/services/whatsapp-automation/ai" },
    ],
    features: ["24/7 AI Availability", "Seamless CRM Integration", "Broadcast Campaigns", "Automated Lead Qualification"],
    outcomes: ["Zero Response Time", "Higher Sales Conversion", "Reduced Support Operations Cost"]
  },
  "branding": {
    id: "branding",
    name: "Branding & Design",
    icon: Palette,
    bgColor: "bg-purple-50",
    color: "text-purple-600",
    description: "Creative visuals that define your brand.",
    href: "/services/branding",
    subServices: [
      { name: "Logo Design", desc: "Iconic brand identity", icon: Palette, href: "/services/branding/logo" },
      { name: "Social Media Creatives", desc: "Engaging post designs", icon: LayoutTemplate, href: "/services/branding/social-posts" },
      { name: "Ad Creatives", desc: "High-CTR static & motion ads", icon: TrendingUp, href: "/services/branding/ads" },
      { name: "Banner & Poster", desc: "Marketing collateral design", icon: Layout, href: "/services/branding/marketing-docs" },
    ],
    features: ["Premium Visual Identity", "Consistent Brand Voice", "Custom Graphics", "Psychology-Driven Design"],
    outcomes: ["Market Differentiation", "Increased Trust", "Premium Perceived Value"]
  },
  "content": {
    id: "content",
    name: "Content Creation",
    icon: Video,
    bgColor: "bg-red-50",
    color: "text-red-500",
    description: "Engaging video and written content.",
    href: "/services/content-creation",
    subServices: [
      { name: "Reel / Short Video", desc: "Viral vertical video content", icon: Video, href: "/services/content-creation/reels" },
      { name: "Video Editing", desc: "Professional post-production", icon: Monitor, href: "/services/content-creation/editing" },
      { name: "Blog Writing", desc: "SEO-optimized articles", icon: FileText, href: "/services/content-creation/blogs" },
      { name: "Copywriting", desc: "Persuasive sales copy", icon: PenTool, href: "/services/content-creation/copywriting" },
    ],
    features: ["High-Retention Formats", "SEO-Optimized Copy", "Trend-Jacking Strategies", "Professional Storytelling"],
    outcomes: ["Engaged Audience", "Industry Authority", "Organic Viral Reach"]
  },
  "hosting": {
    id: "hosting",
    name: "Hosting & Support",
    icon: ShieldCheck,
    bgColor: "bg-slate-50",
    color: "text-slate-600",
    description: "Reliable infrastructure for your site.",
    href: "/services/hosting",
    subServices: [
      { name: "Website Hosting", desc: "Cloud-based fast hosting", icon: Globe, href: "/services/hosting/cloud" },
      { name: "Domain Management", desc: "DNS & Domain registration", icon: Search, href: "/services/hosting/domains" },
      { name: "Website Maintenance", desc: "Software & plugin updates", icon: Workflow, href: "/services/hosting/maintenance" },
      { name: "Security & Backup", desc: "Peace of mind for your data", icon: ShieldCheck, href: "/services/hosting/security" },
    ],
    features: ["99.9% Uptime Guarantee", "Daily Cloud Backups", "Advanced Malware Protection", "24/7 Technical Support"],
    outcomes: ["Zero Downtime", "Data Peace of Mind", "Lightning Fast Server Speeds"]
  }
};
