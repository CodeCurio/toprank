import React from "react";
import {
  Code2,
  Search,
  MapPin,
  TrendingUp,
  Globe,
  Share2,
  Sparkles,
  Layers,
  Database,
  Smartphone,
  Cpu,
  Palette,
  Megaphone,
  Zap,
} from "lucide-react";

interface TechBadgeProps {
  name: string;
  variant?: "pill" | "card" | "mini";
  showCategory?: boolean;
}

interface TechDefinition {
  name: string;
  category: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
}

export function getTechInfo(techName: string): TechDefinition {
  const clean = techName.trim().toLowerCase();

  // Next.js
  if (clean.includes("next.js") || clean.includes("nextjs") || clean === "next") {
    return {
      name: "Next.js",
      category: "Full-Stack Framework",
      color: "text-slate-900 dark:text-white",
      bgColor: "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700",
      borderColor: "border-slate-300 dark:border-slate-700",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 180 180" fill="currentColor">
          <path d="M90 0a90 90 0 1 0 90 90A90 90 0 0 0 90 0ZM52.4 135.6V44.4h15.2v57.8l60.2-60.2c1.9 1.4 3.7 2.9 5.5 4.5L67.6 112.2v23.4Zm75.2-13.8L106.8 94.6l10.8-10.8 21.6 27.2c-3.6 3.9-7.5 7.5-11.6 10.8Z" />
        </svg>
      ),
    };
  }

  // React
  if (clean.includes("react") && !clean.includes("native")) {
    return {
      name: "React",
      category: "UI Component Library",
      color: "text-[#00D8FF]",
      bgColor: "bg-cyan-50/80 hover:bg-cyan-100/80 dark:bg-cyan-950/40",
      borderColor: "border-cyan-200 dark:border-cyan-800/60",
      icon: (
        <svg className="w-4 h-4 animate-[spin_10s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    };
  }

  // Tailwind CSS
  if (clean.includes("tailwind")) {
    return {
      name: "Tailwind CSS",
      category: "Design System & Styling",
      color: "text-sky-500",
      bgColor: "bg-sky-50/80 hover:bg-sky-100/80 dark:bg-sky-950/40",
      borderColor: "border-sky-200 dark:border-sky-800/60",
      icon: (
        <svg className="w-4 h-4 fill-sky-400" viewBox="0 0 24 24">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    };
  }

  // Google Maps / Local SEO / GMB
  if (clean.includes("maps") || clean.includes("gmb") || clean.includes("3-pack") || clean.includes("business profile")) {
    return {
      name: techName,
      category: "Local Search Optimization",
      color: "text-red-500",
      bgColor: "bg-red-50/80 hover:bg-red-100/80 dark:bg-red-950/40",
      borderColor: "border-red-200 dark:border-red-800/60",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
          <circle cx="12" cy="9" r="3" fill="#FFFFFF" />
          <circle cx="12" cy="9" r="1.5" fill="#4285F4" />
        </svg>
      ),
    };
  }

  // SEO & Organic Search
  if (clean.includes("seo") || clean.includes("search") || clean.includes("organic")) {
    return {
      name: techName,
      category: "Organic Visibility & Indexing",
      color: "text-blue-600",
      bgColor: "bg-blue-50/80 hover:bg-blue-100/80 dark:bg-blue-950/40",
      borderColor: "border-blue-200 dark:border-blue-800/60",
      icon: <Search className="w-4 h-4 text-blue-600" />,
    };
  }

  // Google Ads / PPC
  if (clean.includes("google ads") || clean.includes("ppc") || clean.includes("sem") || clean.includes("adwords")) {
    return {
      name: techName,
      category: "Paid Search & Performance",
      color: "text-amber-600",
      bgColor: "bg-amber-50/80 hover:bg-amber-100/80 dark:bg-amber-950/40",
      borderColor: "border-amber-200 dark:border-amber-800/60",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M4.5 13.5L12 3l7.5 10.5h-15z" fill="#FBBC04" />
          <circle cx="6" cy="18" r="3" fill="#4285F4" />
          <path d="M15.5 15.5l5 5.5-2.5 2.5-5-5.5z" fill="#34A853" />
        </svg>
      ),
    };
  }

  // Meta Ads / Facebook / Instagram
  if (clean.includes("meta") || clean.includes("facebook") || clean.includes("instagram") || clean.includes("fb/ig")) {
    return {
      name: techName,
      category: "Social Performance Ads",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50/80 hover:bg-indigo-100/80 dark:bg-indigo-950/40",
      borderColor: "border-indigo-200 dark:border-indigo-800/60",
      icon: (
        <svg className="w-4 h-4 fill-indigo-600" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    };
  }

  // WhatsApp Business / Automation
  if (clean.includes("whatsapp")) {
    return {
      name: techName,
      category: "Conversational Automation",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50/80 hover:bg-emerald-100/80 dark:bg-emerald-950/40",
      borderColor: "border-emerald-200 dark:border-emerald-800/60",
      icon: (
        <svg className="w-4 h-4 fill-emerald-600" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.201.3-.778.979-.954 1.18-.176.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.528-.075-.15-.678-1.634-.929-2.238-.244-.588-.493-.509-.678-.518l-.578-.01c-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.718.311 1.279.497 1.716.636.721.229 1.377.197 1.896.119.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.201-.577-.351zM12 2C6.486 2 2 6.486 2 12c0 1.996.589 3.86 1.615 5.432L2 22l4.698-1.583A9.957 9.957 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2z" />
        </svg>
      ),
    };
  }

  // Shopify
  if (clean.includes("shopify")) {
    return {
      name: "Shopify",
      category: "E-Commerce Engine",
      color: "text-emerald-700",
      bgColor: "bg-emerald-50/80 hover:bg-emerald-100/80 dark:bg-emerald-950/40",
      borderColor: "border-emerald-200 dark:border-emerald-800/60",
      icon: (
        <svg className="w-4 h-4 fill-emerald-600" viewBox="0 0 24 24">
          <path d="M19.782 5.093l-3.327-.923a1.458 1.458 0 0 0-1.127.135L12 6.096 8.672 4.305a1.458 1.458 0 0 0-1.127-.135L4.218 5.093A1.464 1.464 0 0 0 3.2 6.471l1.8 12.336A1.46 1.46 0 0 0 6.446 20h11.108a1.46 1.46 0 0 0 1.446-1.193l1.8-12.336a1.464 1.464 0 0 0-1.018-1.378z" />
        </svg>
      ),
    };
  }

  // WordPress
  if (clean.includes("wordpress")) {
    return {
      name: "WordPress",
      category: "Content Management System",
      color: "text-sky-700",
      bgColor: "bg-sky-50/80 hover:bg-sky-100/80 dark:bg-sky-950/40",
      borderColor: "border-sky-200 dark:border-sky-800/60",
      icon: (
        <svg className="w-4 h-4 fill-sky-700" viewBox="0 0 24 24">
          <path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10C22 6.486 17.514 2 12 2zm-8.17 10c0-1.78.533-3.437 1.45-4.825L9.673 18.9A8.188 8.188 0 0 1 3.83 12zm8.17 8.17c-1.312 0-2.537-.31-3.626-.86l3.96-11.492 4.053 11.11a8.134 8.134 0 0 1-4.387 1.242zm1.758-13.882c.706 0 1.282.062 1.282.062.56.031.625-.78.063-.842 0 0-.687-.063-1.469-.063-.78 0-1.5.063-1.5.063-.563.062-.5 0.874.062.842 0 0 .546-.062 1.157-.062l1.72 5.093-2.438 7.313L7.75 6.288c.61 0 1.156.062 1.156.062.563.031.625-.78.063-.842 0 0-.688-.063-1.469-.063-.312 0-.656.015-1.016.031A8.156 8.156 0 0 1 12 3.83c3.078 0 5.75 1.703 7.125 4.234l-5.344 14.156-1.999-5.932 1.976-5.906z" />
        </svg>
      ),
    };
  }

  // Supabase
  if (clean.includes("supabase")) {
    return {
      name: "Supabase",
      category: "Backend & Database",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50/80 hover:bg-emerald-100/80 dark:bg-emerald-950/40",
      borderColor: "border-emerald-200 dark:border-emerald-800/60",
      icon: (
        <svg className="w-4 h-4 fill-emerald-500" viewBox="0 0 24 24">
          <path d="M12.784 1.442a1.44 1.44 0 0 0-2.428.905v8.718H3.34a1.44 1.44 0 0 0-1.127 2.338l8.56 10.155a1.44 1.44 0 0 0 2.427-.905v-8.718h7.016a1.44 1.44 0 0 0 1.127-2.338L12.784 1.442z" />
        </svg>
      ),
    };
  }

  // Stripe
  if (clean.includes("stripe") || clean.includes("payment")) {
    return {
      name: techName,
      category: "Payment Gateway",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50/80 hover:bg-indigo-100/80 dark:bg-indigo-950/40",
      borderColor: "border-indigo-200 dark:border-indigo-800/60",
      icon: (
        <svg className="w-4 h-4 fill-indigo-600" viewBox="0 0 24 24">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.521.5 6.849.5 3.018 3.513 3.018 8.188c0 5.494 5.23 6.945 8.457 8.086 2.446.864 3.287 1.547 3.287 2.502 0 .979-.887 1.458-2.227 1.458-2.614 0-5.467-1.15-7.408-2.203L4.2 23.332c1.94 1.053 5.093 1.668 8.32 1.668 5.86 0 9.878-2.915 9.878-7.859 0-5.733-5.263-7.185-8.422-7.991z" />
        </svg>
      ),
    };
  }

  // UI/UX Design & Figma
  if (clean.includes("ui/ux") || clean.includes("figma") || clean.includes("design")) {
    return {
      name: techName,
      category: "UI/UX & Interactive Design",
      color: "text-purple-600",
      bgColor: "bg-purple-50/80 hover:bg-purple-100/80 dark:bg-purple-950/40",
      borderColor: "border-purple-200 dark:border-purple-800/60",
      icon: <Palette className="w-4 h-4 text-purple-600" />,
    };
  }

  // Lead Generation Funnel / Analytics
  if (clean.includes("lead") || clean.includes("funnel") || clean.includes("conversion") || clean.includes("analytics") || clean.includes("ga4")) {
    return {
      name: techName,
      category: "Conversion Funnel & Tracking",
      color: "text-blue-600",
      bgColor: "bg-blue-50/80 hover:bg-blue-100/80 dark:bg-blue-950/40",
      borderColor: "border-blue-200 dark:border-blue-800/60",
      icon: <TrendingUp className="w-4 h-4 text-blue-600" />,
    };
  }

  // Node.js
  if (clean.includes("node")) {
    return {
      name: "Node.js",
      category: "Backend Runtime",
      color: "text-green-600",
      bgColor: "bg-green-50/80 hover:bg-green-100/80 dark:bg-green-950/40",
      borderColor: "border-green-200 dark:border-green-800/60",
      icon: <Cpu className="w-4 h-4 text-green-600" />,
    };
  }

  // TypeScript / JavaScript
  if (clean.includes("typescript") || clean.includes("ts") || clean.includes("javascript") || clean.includes("js")) {
    return {
      name: techName,
      category: "Type-Safe Architecture",
      color: "text-blue-500",
      bgColor: "bg-blue-50/80 hover:bg-blue-100/80 dark:bg-blue-950/40",
      borderColor: "border-blue-200 dark:border-blue-800/60",
      icon: <Code2 className="w-4 h-4 text-blue-500" />,
    };
  }

  // Default Fallback
  return {
    name: techName,
    category: "Deliverable & Technology",
    color: "text-slate-700 dark:text-slate-300",
    bgColor: "bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60",
    borderColor: "border-slate-200 dark:border-slate-800",
    icon: <Sparkles className="w-4 h-4 text-blue-500" />,
  };
}

export function TechBadge({ name, variant = "pill", showCategory = false }: TechBadgeProps) {
  const tech = getTechInfo(name);

  if (variant === "mini") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border transition-all ${tech.bgColor} ${tech.borderColor} ${tech.color}`}
      >
        <span className="shrink-0">{tech.icon}</span>
        <span>{tech.name}</span>
      </span>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={`group p-4 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${tech.bgColor} ${tech.borderColor}`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800 shrink-0">
            {tech.icon}
          </div>
          <div>
            <h4 className={`text-sm font-black tracking-tight ${tech.color}`}>
              {tech.name}
            </h4>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              {tech.category}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Default Pill Variant
  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border shadow-sm transition-all duration-200 hover:scale-105 ${tech.bgColor} ${tech.borderColor} ${tech.color}`}
    >
      <span className="shrink-0">{tech.icon}</span>
      <span>{tech.name}</span>
      {showCategory && (
        <span className="text-[10px] text-slate-400 font-normal border-l border-slate-300 dark:border-slate-700 pl-2">
          {tech.category}
        </span>
      )}
    </span>
  );
}

export function TechStackGrid({ technologies }: { technologies: string[] }) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {technologies.map((tech, idx) => (
        <TechBadge key={idx} name={tech} variant="card" />
      ))}
    </div>
  );
}
