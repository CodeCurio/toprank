"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import slugify from "slugify";
import {
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  Star,
  Globe,
  CheckCircle2,
  TrendingUp,
  Building,
  Eye,
  Lock,
  Unlock,
  Copy,
  Check,
  Code2,
  PlusCircle,
  X,
  Sparkles,
  ExternalLink,
  MessageSquare,
  FileText,
  AlertCircle,
  Sliders,
} from "lucide-react";
import { ImageUploader } from "@/components/admin/ImageUploader";
import { BulletListEditor } from "@/components/admin/BulletListEditor";
import { RichStoryEditor } from "@/components/admin/RichStoryEditor";
import { useAdminTheme } from "@/components/admin/AdminThemeContext";

const POPULAR_INDUSTRIES = [
  "Healthcare & Diagnostics",
  "Real Estate & Architecture",
  "Retail & E-commerce",
  "Hospitality & Dining",
  "Technology & SaaS",
  "Education & Coaching",
  "Automotive & Local Services",
  "Manufacturing & B2B",
  "Financial & Legal",
  "Other",
];

const COMMON_TECH_TAGS = [
  "SEO & Local Search",
  "Google Maps 3-Pack",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Google Ads (PPC)",
  "Meta Ads (FB/IG)",
  "WhatsApp Automation",
  "UI/UX Design",
  "Shopify",
  "WordPress",
  "Lead Generation Funnel",
  "Schema Markup",
  "Performance Optimization",
];

const METRIC_PRESETS = [
  { label: "Lead Growth", value: "+320%" },
  { label: "Google Maps 3-Pack", value: "#1 Spot" },
  { label: "Organic Traffic", value: "+450%" },
  { label: "Cost Per Lead", value: "-48%" },
  { label: "Conversion Rate", value: "4.8%" },
  { label: "Page Load Speed", value: "0.7s" },
];

const CHALLENGE_PRESETS = [
  "Sluggish page load speed causing high visitor drop-offs",
  "Zero organic visibility in Google Maps 3-Pack for local keywords",
  "High cost per acquisition on un-optimized ad campaigns",
  "Lack of automated lead capture and WhatsApp appointment routing",
  "Outdated UI/UX failing to build trust with high-intent prospects",
];

const SOLUTION_PRESETS = [
  "Re-engineered high-speed responsive web portal with Next.js",
  "Hyper-local SEO schema and multi-branch Google Maps optimization",
  "Automated WhatsApp lead booking and instant inquiry routing",
  "Laser-targeted search advertising reducing cost per lead by 50%",
  "Conversion-first UI revamp with verified trust proof points",
];

interface PortfolioFormProps {
  initialData?: any;
  isEdit?: boolean;
  portfolioId?: string;
}

export function PortfolioForm({ initialData, isEdit = false, portfolioId }: PortfolioFormProps) {
  const router = useRouter();
  const { isLight } = useAdminTheme();

  // Active step / tab
  const [activeTab, setActiveTab] = useState<"info" | "cover" | "metrics" | "story" | "settings">("info");

  // Form State
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [isSlugCustom, setIsSlugCustom] = useState(isEdit ? true : false);
  const [clientName, setClientName] = useState(initialData?.client_name || "");
  
  const [industry, setIndustry] = useState(() => {
    if (!initialData?.industry) return "Healthcare & Diagnostics";
    return POPULAR_INDUSTRIES.includes(initialData.industry) ? initialData.industry : "Other";
  });
  const [customIndustry, setCustomIndustry] = useState(() => {
    if (initialData?.industry && !POPULAR_INDUSTRIES.includes(initialData.industry)) {
      return initialData.industry;
    }
    return "";
  });

  const [location, setLocation] = useState(initialData?.location || "Lucknow, UP");
  const [liveUrl, setLiveUrl] = useState(initialData?.live_url || "");
  const [coverImage, setCoverImage] = useState(initialData?.cover_image || "");

  // Deliverables / Tech Stack
  const [selectedTech, setSelectedTech] = useState<string[]>(() => {
    if (initialData?.technologies) {
      return typeof initialData.technologies === "string"
        ? initialData.technologies.split(",").map((t: string) => t.trim()).filter(Boolean)
        : Array.isArray(initialData.technologies) ? initialData.technologies : [];
    }
    return ["SEO & Local Search", "Next.js", "Google Maps 3-Pack"];
  });
  const [customTechInput, setCustomTechInput] = useState("");

  // Results & Growth Metrics
  const [metrics, setMetrics] = useState<{ label: string; value: string }[]>(() => {
    if (initialData?.results_metrics && Array.isArray(initialData.results_metrics) && initialData.results_metrics.length > 0) {
      return initialData.results_metrics;
    }
    return [
      { label: "Lead Growth", value: "+310%" },
      { label: "Google Maps Rank", value: "#1 Spot" },
    ];
  });

  // Story & Narrative
  const [summary, setSummary] = useState(initialData?.summary || "");
  const [challenge, setChallenge] = useState(initialData?.challenge || "");
  const [solution, setSolution] = useState(initialData?.solution || "");
  const [content, setContent] = useState(initialData?.content || "");

  // Client Testimonial & Settings
  const [testimonialQuote, setTestimonialQuote] = useState(initialData?.testimonial?.quote || "");
  const [testimonialAuthor, setTestimonialAuthor] = useState(initialData?.testimonial?.author || "");
  const [testimonialRole, setTestimonialRole] = useState(initialData?.testimonial?.role || "");

  // Publishing flags
  const [featured, setFeatured] = useState(initialData ? Boolean(initialData.featured) : false);
  const [published, setPublished] = useState(initialData ? initialData.published !== false : true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedSlug, setCopiedSlug] = useState(false);
  const [showPreviewDrawer, setShowPreviewDrawer] = useState(false);

  // Sync state if initialData changes after load
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setSlug(initialData.slug || "");
      setClientName(initialData.client_name || "");
      if (POPULAR_INDUSTRIES.includes(initialData.industry)) {
        setIndustry(initialData.industry);
      } else if (initialData.industry) {
        setIndustry("Other");
        setCustomIndustry(initialData.industry);
      }
      setLocation(initialData.location || "Lucknow, UP");
      setLiveUrl(initialData.live_url || "");
      setCoverImage(initialData.cover_image || "");
      setSummary(initialData.summary || "");
      setChallenge(initialData.challenge || "");
      setSolution(initialData.solution || "");
      setContent(initialData.content || "");
      setFeatured(Boolean(initialData.featured));
      setPublished(initialData.published !== false);
      if (initialData.technologies) {
        const parsed = typeof initialData.technologies === "string"
          ? initialData.technologies.split(",").map((t: string) => t.trim()).filter(Boolean)
          : Array.isArray(initialData.technologies) ? initialData.technologies : [];
        setSelectedTech(parsed);
      }
      if (initialData.results_metrics && Array.isArray(initialData.results_metrics) && initialData.results_metrics.length > 0) {
        setMetrics(initialData.results_metrics);
      }
      if (initialData.testimonial) {
        setTestimonialQuote(initialData.testimonial.quote || "");
        setTestimonialAuthor(initialData.testimonial.author || "");
        setTestimonialRole(initialData.testimonial.role || "");
      }
    }
  }, [initialData]);

  // Keyboard shortcut Ctrl+S / Cmd+S
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        handleSave(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [title, slug, clientName, industry, customIndustry, location, summary, challenge, solution, content, metrics, coverImage, liveUrl, selectedTech, featured, published, testimonialQuote, testimonialAuthor, testimonialRole]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isSlugCustom) {
      setSlug(slugify(val, { lower: true, strict: true }));
    }
  };

  const toggleTech = (tag: string) => {
    if (selectedTech.includes(tag)) {
      setSelectedTech(selectedTech.filter((t) => t !== tag));
    } else {
      setSelectedTech([...selectedTech, tag]);
    }
  };

  const addCustomTech = () => {
    const trimmed = customTechInput.trim();
    if (!trimmed) return;
    if (!selectedTech.includes(trimmed)) {
      setSelectedTech([...selectedTech, trimmed]);
    }
    setCustomTechInput("");
  };

  const addMetric = (preset?: { label: string; value: string }) => {
    if (metrics.length >= 6) return;
    if (preset) {
      setMetrics([...metrics, preset]);
    } else {
      setMetrics([...metrics, { label: "Inquiries Growth", value: "+300%" }]);
    }
  };

  const removeMetric = (index: number) => {
    setMetrics(metrics.filter((_, i) => i !== index));
  };

  const updateMetric = (index: number, field: "label" | "value", val: string) => {
    const updated = [...metrics];
    updated[index][field] = val;
    setMetrics(updated);
  };

  const handleCopySlug = () => {
    if (!slug) return;
    navigator.clipboard.writeText(`/portfolio/${slug}`);
    setCopiedSlug(true);
    setTimeout(() => setCopiedSlug(false), 2000);
  };

  const handleSave = async (stayOnPage = false) => {
    if (!title.trim()) {
      setError("Please enter a Project / Case Study Title.");
      setActiveTab("info");
      return;
    }
    if (!clientName.trim()) {
      setError("Please enter the Client Name.");
      setActiveTab("info");
      return;
    }

    setLoading(true);
    setError(null);

    const finalIndustry =
      industry === "Other" && customIndustry.trim() ? customIndustry.trim() : industry;

    const payload: any = {
      title: title.trim(),
      slug: slug.trim() || slugify(title.trim(), { lower: true, strict: true }),
      client_name: clientName.trim(),
      industry: finalIndustry,
      location: location.trim(),
      summary: summary.trim(),
      challenge: challenge.trim(),
      solution: solution.trim(),
      content: content.trim(),
      results_metrics: metrics,
      cover_image: coverImage.trim(),
      live_url: liveUrl.trim(),
      technologies: selectedTech.join(", "),
      featured,
      published,
    };

    if (testimonialQuote.trim()) {
      payload.testimonial = {
        quote: testimonialQuote.trim(),
        author: testimonialAuthor.trim(),
        role: testimonialRole.trim(),
      };
    }

    try {
      const url = isEdit ? `/api/portfolios/${portfolioId}` : "/api/portfolios";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const resData = await res.json();
      if (!res.ok || resData.error) {
        throw new Error(resData.error || "Failed to save portfolio.");
      }

      if (stayOnPage) {
        if (!isEdit) {
          setTitle("");
          setSlug("");
          setClientName("");
          setCoverImage("");
          setSummary("");
          setChallenge("");
          setSolution("");
          setContent("");
          setTestimonialQuote("");
          setTestimonialAuthor("");
          setTestimonialRole("");
        }
        alert(isEdit ? "Project changes saved successfully!" : "New project created successfully!");
      } else {
        router.push("/admin/portfolios");
      }
    } catch (err: any) {
      console.error("Save portfolio error:", err);
      setError(err.message || "Failed to save portfolio to database.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-24">
      {/* TOP HEADER / ACTION BAR */}
      <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 sm:p-6 rounded-3xl border shadow-sm backdrop-blur-xl sticky top-4 z-40 transition-all ${
        isLight
          ? "bg-white/95 border-slate-200/90 text-slate-900 shadow-slate-200/50"
          : "bg-slate-900/95 border-slate-800 text-white shadow-2xl"
      }`}>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/portfolios"
            className={`p-2.5 rounded-2xl border transition-all ${
              isLight
                ? "bg-slate-100 hover:bg-slate-200 text-slate-600 border-slate-200"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
            }`}
            title="Back to portfolio list"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <div>
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                published
                  ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                  : isLight
                  ? "bg-slate-100 text-slate-600 border border-slate-200"
                  : "bg-slate-800 text-slate-400 border border-slate-700"
              }`}>
                {published ? "Live Website" : "Draft Mode"}
              </span>
              {featured && (
                <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-600 border border-amber-500/30 text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                  <Star className="w-2.5 h-2.5 fill-amber-500" /> Featured
                </span>
              )}
            </div>
            <h1 className={`text-xl sm:text-2xl font-black tracking-tight truncate max-w-lg mt-0.5 ${
              isLight ? "text-slate-900" : "text-white"
            }`}>
              {title || (isEdit ? "Edit Portfolio Case Study" : "Add New Case Study")}
            </h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {slug && (
            <Link
              href={`/portfolio/${slug}`}
              target="_blank"
              className={`p-2.5 sm:px-3 sm:py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                isLight
                  ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                  : "bg-slate-950 border-slate-800 text-slate-300 hover:text-white"
              }`}
              title="Open live page in new tab"
            >
              <ExternalLink className="w-4 h-4 text-blue-600" />
              <span className="hidden sm:inline">View Live</span>
            </Link>
          )}

          <button
            type="button"
            onClick={() => setShowPreviewDrawer(!showPreviewDrawer)}
            className={`p-2.5 sm:px-3 sm:py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 lg:hidden ${
              isLight
                ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                : "bg-slate-950 border-slate-800 text-slate-300 hover:text-white"
            }`}
          >
            <Eye className="w-4 h-4 text-purple-600" />
            <span className="hidden sm:inline">Live Preview</span>
          </button>

          {!isEdit && (
            <button
              type="button"
              onClick={() => handleSave(true)}
              disabled={loading}
              className={`hidden sm:flex px-4 py-2.5 rounded-xl font-bold text-xs border transition-all items-center gap-1.5 disabled:opacity-50 ${
                isLight
                  ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 shadow-2xs"
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700"
              }`}
            >
              <PlusCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Save &amp; Add More</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => handleSave(false)}
            disabled={loading}
            className="px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{loading ? "Saving..." : isEdit ? "Update Project" : "Publish Project"}</span>
          </button>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-bold flex items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
          <button onClick={() => setError(null)} className="text-red-500 hover:text-red-700">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP / SECTION TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: "info", label: "1. Core & Client", icon: Building },
          { id: "cover", label: "2. Cover & Tech Stack", icon: Code2 },
          { id: "metrics", label: "3. Results & Metrics", icon: TrendingUp },
          { id: "story", label: "4. Case Story & Narrative", icon: FileText },
          { id: "settings", label: "5. Review & Settings", icon: Sliders },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all shrink-0 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-[1.02]"
                  : isLight
                  ? "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 shadow-2xs"
                  : "bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* MAIN GRID: Form Body (7 Cols) & Sticky Real-Time Live Preview (5 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: ACTIVE SECTION FORM */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* TAB 1: CORE & CLIENT INFO */}
          {activeTab === "info" && (
            <div className={`border rounded-3xl p-6 sm:p-7 space-y-5 shadow-sm animate-in fade-in slide-in-from-left-2 ${
              isLight ? "bg-white border-slate-200/90 text-slate-900" : "bg-slate-900/90 border-slate-800 text-white"
            }`}>
              <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-slate-100" : "border-slate-800/80"}`}>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-600" />
                  <h3 className={`text-sm font-black uppercase tracking-wider ${isLight ? "text-slate-900" : "text-white"}`}>
                    Core Project &amp; Client Details
                  </h3>
                </div>
                <span className={`text-[10px] font-bold uppercase ${isLight ? "text-slate-400" : "text-slate-500"}`}>Step 1 of 5</span>
              </div>

              {/* Title */}
              <div>
                <label className={`block text-xs font-black uppercase tracking-wider mb-2 ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                  Case Study Title <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. Scaling Local Dental Clinic to #1 on Google Maps in 90 Days"
                  className={`w-full px-4 py-3 rounded-xl text-sm font-bold focus:outline-none transition-colors border ${
                    isLight
                      ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 shadow-2xs"
                      : "bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Slug */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className={`text-xs font-black uppercase tracking-wider ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                    URL Slug (Permanent Link)
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsSlugCustom(!isSlugCustom)}
                    className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    {isSlugCustom ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                    <span>{isSlugCustom ? "Custom slug active" : "Auto-generating from title"}</span>
                  </button>
                </div>
                <div className={`flex items-center gap-2 border rounded-xl px-4 py-3 ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950 border-slate-800"
                }`}>
                  <span className={`text-xs font-mono ${isLight ? "text-slate-400" : "text-slate-500"}`}>/portfolio/</span>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => {
                      setIsSlugCustom(true);
                      setSlug(e.target.value);
                    }}
                    placeholder="project-slug-name"
                    className="w-full bg-transparent text-sm font-mono text-blue-600 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleCopySlug}
                    className={`p-1 transition-colors ${isLight ? "text-slate-400 hover:text-slate-700" : "text-slate-500 hover:text-white"}`}
                    title="Copy URL"
                  >
                    {copiedSlug ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Client Name & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-black uppercase tracking-wider mb-2 ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                    Client / Brand Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Atulaya Healthcare"
                    className={`w-full px-4 py-3 rounded-xl text-sm font-bold focus:outline-none transition-colors border ${
                      isLight
                        ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 shadow-2xs"
                        : "bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-blue-500"
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-black uppercase tracking-wider mb-2 ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                    City / Target Region
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Lucknow, UP / Pan-India"
                    className={`w-full px-4 py-3 rounded-xl text-sm font-bold focus:outline-none transition-colors border ${
                      isLight
                        ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 shadow-2xs"
                        : "bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-blue-500"
                    }`}
                  />
                </div>
              </div>

              {/* Industry & Live URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-black uppercase tracking-wider mb-2 ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                    Industry / Vertical
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-bold focus:outline-none transition-colors border ${
                      isLight
                        ? "bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-blue-500 shadow-2xs"
                        : "bg-slate-950 border-slate-800 text-white focus:border-blue-500"
                    }`}
                  >
                    {POPULAR_INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind} className={isLight ? "bg-white text-slate-900" : "bg-slate-900 text-white"}>
                        {ind}
                      </option>
                    ))}
                  </select>

                  {industry === "Other" && (
                    <input
                      type="text"
                      value={customIndustry}
                      onChange={(e) => setCustomIndustry(e.target.value)}
                      placeholder="Type custom industry..."
                      className={`w-full mt-2 px-4 py-2.5 rounded-xl text-xs font-bold focus:outline-none border ${
                        isLight
                          ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500"
                          : "bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-blue-500"
                      }`}
                    />
                  )}
                </div>

                <div>
                  <label className={`block text-xs font-black uppercase tracking-wider mb-2 ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                    Live Client Website (Optional)
                  </label>
                  <div className="relative">
                    <Globe className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? "text-slate-400" : "text-slate-500"}`} />
                    <input
                      type="url"
                      value={liveUrl}
                      onChange={(e) => setLiveUrl(e.target.value)}
                      placeholder="https://clientwebsite.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm font-bold focus:outline-none transition-colors border ${
                        isLight
                          ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 shadow-2xs"
                          : "bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-blue-500"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Next Step Button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveTab("cover")}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                    isLight
                      ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 shadow-2xs"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  <span>Next: Cover &amp; Tech Stack</span> →
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: COVER IMAGE & TECH STACK */}
          {activeTab === "cover" && (
            <div className={`border rounded-3xl p-6 sm:p-7 space-y-6 shadow-sm animate-in fade-in slide-in-from-left-2 ${
              isLight ? "bg-white border-slate-200/90 text-slate-900" : "bg-slate-900/90 border-slate-800 text-white"
            }`}>
              <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-slate-100" : "border-slate-800/80"}`}>
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-600" />
                  <h3 className={`text-sm font-black uppercase tracking-wider ${isLight ? "text-slate-900" : "text-white"}`}>
                    Featured Media &amp; Deployed Tech Stack
                  </h3>
                </div>
                <span className={`text-[10px] font-bold uppercase ${isLight ? "text-slate-400" : "text-slate-500"}`}>Step 2 of 5</span>
              </div>

              {/* Cover Image */}
              <ImageUploader
                value={coverImage}
                onChange={(url) => setCoverImage(url)}
                label="Case Study Cover / Hero Visual"
                helperText="Upload a crisp screenshot, dashboard mockup, or project banner (PNG, JPG, WebP)"
              />

              {/* Tech Stack Multi-Picker */}
              <div className={`space-y-3 pt-2 border-t ${isLight ? "border-slate-100" : "border-slate-800/80"}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <label className={`block text-xs font-black uppercase tracking-wider ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                      Technologies &amp; Deliverables
                    </label>
                    <p className={`text-[11px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                      Select all platforms, tools, and growth systems deployed for this client
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                    {selectedTech.length} Active
                  </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {COMMON_TECH_TAGS.map((tag) => {
                    const isSelected = selectedTech.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTech(tag)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                            : isLight
                            ? "bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 shadow-2xs"
                            : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span>{tag}</span>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Tag Input */}
                <div className="pt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={customTechInput}
                      onChange={(e) => setCustomTechInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addCustomTech();
                        }
                      }}
                      placeholder="Add custom tool (e.g. Supabase, GA4, Semrush, Custom CRM)..."
                      className={`flex-1 px-4 py-2.5 rounded-xl text-xs font-bold focus:outline-none border ${
                        isLight
                          ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 shadow-2xs"
                          : "bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-blue-500"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={addCustomTech}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-colors border flex items-center gap-1.5 ${
                        isLight
                          ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200 shadow-2xs"
                          : "bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Tag
                    </button>
                  </div>

                  {/* Custom active tags list */}
                  {selectedTech.filter((t) => !COMMON_TECH_TAGS.includes(t)).length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {selectedTech
                        .filter((t) => !COMMON_TECH_TAGS.includes(t))
                        .map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg text-xs font-bold"
                          >
                            {t}
                            <button
                              type="button"
                              onClick={() => toggleTech(t)}
                              className="hover:text-red-500"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Nav Buttons */}
              <div className={`pt-4 flex items-center justify-between border-t ${isLight ? "border-slate-100" : "border-slate-800"}`}>
                <button
                  type="button"
                  onClick={() => setActiveTab("info")}
                  className={`text-xs font-bold ${isLight ? "text-slate-500 hover:text-slate-800" : "text-slate-400 hover:text-white"}`}
                >
                  ← Back to Core Info
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("metrics")}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                    isLight
                      ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 shadow-2xs"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  <span>Next: Results &amp; Metrics</span> →
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: RESULTS & GROWTH METRICS */}
          {activeTab === "metrics" && (
            <div className={`border rounded-3xl p-6 sm:p-7 space-y-6 shadow-sm animate-in fade-in slide-in-from-left-2 ${
              isLight ? "bg-white border-slate-200/90 text-slate-900" : "bg-slate-900/90 border-slate-800 text-white"
            }`}>
              <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-slate-100" : "border-slate-800/80"}`}>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <div>
                    <h3 className={`text-sm font-black uppercase tracking-wider ${isLight ? "text-slate-900" : "text-white"}`}>
                      Verified Growth &amp; Outcome Metrics
                    </h3>
                    <p className={`text-[11px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                      Showcase high-impact transformation numbers on the case study headline
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => addMetric()}
                  disabled={metrics.length >= 6}
                  className="px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-all border border-blue-200 disabled:opacity-40"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Metric
                </button>
              </div>

              {/* 1-Click Quick Presets */}
              <div className="space-y-2">
                <span className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                  <Sparkles className="w-3 h-3 text-amber-500" /> 1-Click Common Presets:
                </span>
                <div className="flex flex-wrap gap-2">
                  {METRIC_PRESETS.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => addMetric(p)}
                      disabled={metrics.length >= 6}
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 ${
                        isLight
                          ? "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 shadow-2xs"
                          : "bg-slate-950 border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400"
                      }`}
                    >
                      <span className="font-black text-emerald-600">{p.value}</span>
                      <span>{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Metric Item Inputs */}
              <div className="space-y-3 pt-2">
                {metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3.5 border rounded-2xl group transition-colors ${
                      isLight ? "bg-slate-50 border-slate-200 hover:border-slate-300" : "bg-slate-950 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg text-[10px] font-mono font-bold flex items-center justify-center shrink-0 border ${
                      isLight ? "bg-white border-slate-200 text-slate-600" : "bg-slate-900 text-slate-400 border-slate-800"
                    }`}>
                      #{idx + 1}
                    </span>

                    <div className="flex-1 w-full">
                      <span className={`text-[10px] font-bold uppercase block mb-1 ${isLight ? "text-slate-500" : "text-slate-500"}`}>
                        Metric Title / Parameter
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. Lead Volume / Inquiries"
                        value={m.label}
                        onChange={(e) => updateMetric(idx, "label", e.target.value)}
                        className={`w-full px-3 py-2 rounded-xl text-xs font-bold focus:outline-none border ${
                          isLight
                            ? "bg-white border-slate-200 text-slate-900 focus:border-blue-500 shadow-2xs"
                            : "bg-slate-900 border-slate-800 text-white focus:border-blue-500"
                        }`}
                      />
                    </div>

                    <div className="w-full sm:w-44">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase block mb-1">
                        Achieved Result / Value
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. +314% / #1 Spot"
                        value={m.value}
                        onChange={(e) => updateMetric(idx, "value", e.target.value)}
                        className={`w-full px-3 py-2 rounded-xl text-xs font-black text-emerald-600 focus:outline-none text-center border ${
                          isLight
                            ? "bg-white border-emerald-300 focus:border-emerald-500 shadow-2xs"
                            : "bg-slate-900 border-emerald-500/40 focus:border-emerald-400"
                        }`}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => removeMetric(idx)}
                      className={`p-2 rounded-xl transition-all self-end sm:self-center ${
                        isLight
                          ? "text-slate-400 hover:text-red-500 hover:bg-red-50"
                          : "text-slate-500 hover:text-red-400 hover:bg-red-500/10"
                      }`}
                      title="Remove metric"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Nav Buttons */}
              <div className={`pt-4 flex items-center justify-between border-t ${isLight ? "border-slate-100" : "border-slate-800"}`}>
                <button
                  type="button"
                  onClick={() => setActiveTab("cover")}
                  className={`text-xs font-bold ${isLight ? "text-slate-500 hover:text-slate-800" : "text-slate-400 hover:text-white"}`}
                >
                  ← Back to Cover &amp; Tech
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("story")}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                    isLight
                      ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 shadow-2xs"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  <span>Next: Case Story Narrative</span> →
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: CASE STUDY DETAILS & FULL STORY */}
          {activeTab === "story" && (
            <div className={`border rounded-3xl p-6 sm:p-7 space-y-7 shadow-sm animate-in fade-in slide-in-from-left-2 ${
              isLight ? "bg-white border-slate-200/90 text-slate-900" : "bg-slate-900/90 border-slate-800 text-white"
            }`}>
              <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-slate-100" : "border-slate-800/80"}`}>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <div>
                    <h3 className={`text-sm font-black uppercase tracking-wider ${isLight ? "text-slate-900" : "text-white"}`}>
                      Transformation Story &amp; Narrative
                    </h3>
                    <p className={`text-[11px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                      Problem breakdown, implemented strategy, and comprehensive case study article
                    </p>
                  </div>
                </div>
                <span className={`text-[10px] font-bold uppercase ${isLight ? "text-slate-400" : "text-slate-500"}`}>Step 4 of 5</span>
              </div>

              {/* 1. Short Summary / Excerpt */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className={`block text-xs font-black uppercase tracking-wider ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                    Executive Summary / Hook <span className="text-orange-500">*</span>
                  </label>
                  <span className={`text-[10px] font-mono ${isLight ? "text-slate-400" : "text-slate-500"}`}>
                    {summary.length} characters
                  </span>
                </div>
                <textarea
                  rows={3}
                  required
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Provide a compelling 1-2 sentence high-level summary of the client's problem and the breakthrough growth achieved..."
                  className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium focus:outline-none transition-colors leading-relaxed custom-scrollbar border ${
                    isLight
                      ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 shadow-2xs"
                      : "bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* 2. Challenge / Problem Bullet Points */}
              <BulletListEditor
                label="The Challenge / Pain Points"
                sublabel="Bullet points representing obstacles before partnering with TopRank"
                value={challenge}
                onChange={setChallenge}
                placeholder="e.g. Sluggish 4.8s page speed causing 65% mobile drop-offs"
                accentColor="rose"
                presetSuggestions={CHALLENGE_PRESETS}
              />

              {/* 3. Solution / Strategy Bullet Points */}
              <BulletListEditor
                label="Our Strategy &amp; Solution Blueprint"
                sublabel="Tactical execution, re-architecture, and growth systems deployed"
                value={solution}
                onChange={setSolution}
                placeholder="e.g. Rebuilt high-speed Next.js web application with 0.7s load time"
                accentColor="emerald"
                presetSuggestions={SOLUTION_PRESETS}
              />

              {/* 4. Full Rich Story Editor */}
              <div className={`pt-2 border-t ${isLight ? "border-slate-100" : "border-slate-800"}`}>
                <RichStoryEditor
                  value={content}
                  onChange={setContent}
                  label="In-Depth Case Study Article Narrative"
                  placeholder="Draft full multi-section case study with headings, deep-dive insights, and quotes..."
                />
              </div>

              {/* Nav Buttons */}
              <div className={`pt-4 flex items-center justify-between border-t ${isLight ? "border-slate-100" : "border-slate-800"}`}>
                <button
                  type="button"
                  onClick={() => setActiveTab("metrics")}
                  className={`text-xs font-bold ${isLight ? "text-slate-500 hover:text-slate-800" : "text-slate-400 hover:text-white"}`}
                >
                  ← Back to Metrics
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("settings")}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
                    isLight
                      ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 shadow-2xs"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  <span>Next: Client Quote &amp; Settings</span> →
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: TESTIMONIAL, VISIBILITY & PUBLISH CONTROLS */}
          {activeTab === "settings" && (
            <div className={`border rounded-3xl p-6 sm:p-7 space-y-6 shadow-sm animate-in fade-in slide-in-from-left-2 ${
              isLight ? "bg-white border-slate-200/90 text-slate-900" : "bg-slate-900/90 border-slate-800 text-white"
            }`}>
              <div className={`flex items-center justify-between border-b pb-4 ${isLight ? "border-slate-100" : "border-slate-800/80"}`}>
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-purple-600" />
                  <div>
                    <h3 className={`text-sm font-black uppercase tracking-wider ${isLight ? "text-slate-900" : "text-white"}`}>
                      Client Endorsement &amp; Publishing Controls
                    </h3>
                    <p className={`text-[11px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                      Add a direct quote from the client founder and configure website visibility
                    </p>
                  </div>
                </div>
                <span className={`text-[10px] font-bold uppercase ${isLight ? "text-slate-400" : "text-slate-500"}`}>Step 5 of 5</span>
              </div>

              {/* Testimonial Quote */}
              <div className={`space-y-4 p-5 border rounded-2xl ${
                isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950 border-slate-800"
              }`}>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-amber-500" />
                  <label className={`text-xs font-black uppercase tracking-wider ${isLight ? "text-slate-800" : "text-slate-200"}`}>
                    Client Testimonial &amp; Quote (Optional)
                  </label>
                </div>

                <textarea
                  rows={3}
                  value={testimonialQuote}
                  onChange={(e) => setTestimonialQuote(e.target.value)}
                  placeholder="&quot;TopRank completely transformed our clinic's local search presence. Within 90 days, we had more appointments than ever before...&quot;"
                  className={`w-full px-4 py-3 rounded-xl text-xs font-medium focus:outline-none transition-colors leading-relaxed custom-scrollbar border ${
                    isLight
                      ? "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-amber-500 shadow-2xs"
                      : "bg-slate-900 border-slate-800 text-white placeholder-slate-600 focus:border-amber-400"
                  }`}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className={`text-[10px] font-bold uppercase block mb-1 ${isLight ? "text-slate-500" : "text-slate-500"}`}>
                      Author / Founder Name
                    </span>
                    <input
                      type="text"
                      value={testimonialAuthor}
                      onChange={(e) => setTestimonialAuthor(e.target.value)}
                      placeholder="e.g. Dr. Vikram Sethi"
                      className={`w-full px-3 py-2 rounded-xl text-xs font-bold focus:outline-none border ${
                        isLight
                          ? "bg-white border-slate-200 text-slate-900 focus:border-amber-500 shadow-2xs"
                          : "bg-slate-900 border-slate-800 text-white focus:border-amber-400"
                      }`}
                    />
                  </div>

                  <div>
                    <span className={`text-[10px] font-bold uppercase block mb-1 ${isLight ? "text-slate-500" : "text-slate-500"}`}>
                      Author Role / Designation
                    </span>
                    <input
                      type="text"
                      value={testimonialRole}
                      onChange={(e) => setTestimonialRole(e.target.value)}
                      placeholder="e.g. Founder &amp; Chief Dental Surgeon"
                      className={`w-full px-3 py-2 rounded-xl text-xs font-bold focus:outline-none border ${
                        isLight
                          ? "bg-white border-slate-200 text-slate-900 focus:border-amber-500 shadow-2xs"
                          : "bg-slate-900 border-slate-800 text-white focus:border-amber-400"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Visibility & Featured Switches */}
              <div className="space-y-3 pt-2">
                <label className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-colors ${
                  isLight
                    ? "bg-slate-50 border-slate-200 hover:border-slate-300"
                    : "bg-slate-950 border-slate-800 hover:border-slate-700"
                }`}>
                  <div>
                    <span className={`text-xs font-black flex items-center gap-2 ${isLight ? "text-slate-900" : "text-white"}`}>
                      <Star className="w-4 h-4 text-amber-500" /> Feature on Homepage
                    </span>
                    <p className={`text-[11px] mt-0.5 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                      Highlights this project on the homepage featured case studies section
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="w-5 h-5 rounded text-blue-600 bg-slate-100 border-slate-300 accent-blue-600 cursor-pointer"
                  />
                </label>

                <label className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-colors ${
                  isLight
                    ? "bg-slate-50 border-slate-200 hover:border-slate-300"
                    : "bg-slate-950 border-slate-800 hover:border-slate-700"
                }`}>
                  <div>
                    <span className={`text-xs font-black flex items-center gap-2 ${isLight ? "text-slate-900" : "text-white"}`}>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Publish Immediately
                    </span>
                    <p className={`text-[11px] mt-0.5 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                      Makes this case study publicly accessible at /portfolio/{slug || "slug"}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                    className="w-5 h-5 rounded text-blue-600 bg-slate-100 border-slate-300 accent-blue-600 cursor-pointer"
                  />
                </label>
              </div>

              {/* Master Save Bar inside tab */}
              <div className={`pt-6 border-t space-y-3 ${isLight ? "border-slate-100" : "border-slate-800"}`}>
                <button
                  type="button"
                  onClick={() => handleSave(false)}
                  disabled={loading}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-blue-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  <span>{loading ? "Saving Project..." : isEdit ? "Update Case Study" : "Publish Case Study"}</span>
                </button>

                <div className={`flex items-center justify-between text-[11px] font-mono px-2 ${
                  isLight ? "text-slate-500" : "text-slate-500"
                }`}>
                  <span>Pro-tip: Press Ctrl+S or Cmd+S anywhere to quickly save</span>
                  <span className="text-blue-600 font-bold">TopRank CMS v2.0</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: STICKY REAL-TIME LIVE PREVIEW */}
        <div className={`lg:col-span-5 space-y-6 ${showPreviewDrawer ? "fixed inset-0 z-50 bg-white dark:bg-slate-950 p-6 overflow-y-auto" : "hidden lg:block sticky top-24"}`}>
          
          {showPreviewDrawer && (
            <div className={`flex items-center justify-between pb-4 mb-2 border-b lg:hidden ${isLight ? "border-slate-200" : "border-slate-800"}`}>
              <h3 className={`text-sm font-black uppercase ${isLight ? "text-slate-900" : "text-white"}`}>Live Preview</h3>
              <button
                type="button"
                onClick={() => setShowPreviewDrawer(false)}
                className={`p-2 rounded-xl ${isLight ? "bg-slate-100 text-slate-700" : "bg-slate-800 text-slate-300"}`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className={`border rounded-3xl p-6 shadow-sm space-y-5 backdrop-blur-xl transition-all ${
            isLight ? "bg-white border-slate-200/90" : "bg-slate-900/90 border-slate-800 shadow-2xl"
          }`}>
            {/* Header */}
            <div className={`flex items-center justify-between border-b pb-3 ${isLight ? "border-slate-100" : "border-slate-800/80"}`}>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-blue-600" />
                <h3 className={`text-xs font-black uppercase tracking-wider ${isLight ? "text-slate-900" : "text-white"}`}>
                  Live Card Appearance
                </h3>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Instant Render
              </span>
            </div>

            {/* Simulated Live Card */}
            <div className={`border rounded-2xl overflow-hidden shadow-sm group transition-all ${
              isLight ? "bg-white border-slate-200" : "bg-slate-950 border-slate-800 shadow-2xl"
            }`}>
              {/* Cover Image (Widescreen 16:10) */}
              <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                {coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={coverImage}
                    alt={title || "Preview"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-center p-6 space-y-1">
                    <p className="text-xs font-bold text-slate-400">No Image Uploaded Yet</p>
                    <p className="text-[10px] text-slate-500">Upload in Step 2 to preview mockup</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-slate-900/90 backdrop-blur-md border border-slate-700 text-blue-300 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                    {industry === "Other" && customIndustry ? customIndustry : industry}
                  </span>
                  {featured && (
                    <span className="inline-flex items-center gap-1 bg-amber-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-md">
                      <Star className="w-2.5 h-2.5 fill-white" /> Featured
                    </span>
                  )}
                </div>

                {/* Growth Metric Badge */}
                {metrics[0] && metrics[0].value && (
                  <div className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-xl text-xs font-black shadow-lg">
                    {metrics[0].value} {metrics[0].label}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-2.5">
                <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  {clientName || "Client Name"} · {location || "City"}
                </p>
                <h4 className={`text-sm font-black line-clamp-2 leading-snug ${isLight ? "text-slate-900" : "text-white"}`}>
                  {title || "Your Project Title Will Appear Here"}
                </h4>
                <p className={`text-xs line-clamp-3 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  {summary || "Your short summary and outcome highlights will appear here..."}
                </p>

                {/* Tags */}
                {selectedTech.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {selectedTech.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${
                          isLight ? "bg-slate-100 border-slate-200 text-slate-700" : "bg-slate-900 border-slate-800 text-slate-300"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                    {selectedTech.length > 3 && (
                      <span className={`px-1.5 py-0.5 text-[9px] font-bold ${isLight ? "text-slate-400" : "text-slate-500"}`}>
                        +{selectedTech.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Metrics Showcase Preview */}
            {metrics.length > 1 && (
              <div className={`space-y-2 pt-2 border-t ${isLight ? "border-slate-100" : "border-slate-800"}`}>
                <span className={`text-[10px] font-black uppercase tracking-wider ${isLight ? "text-slate-500" : "text-slate-500"}`}>
                  Headline Metric Stats ({metrics.length})
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {metrics.map((m, i) => (
                    <div key={i} className={`p-2.5 rounded-xl text-center border ${
                      isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950 border-slate-800"
                    }`}>
                      <div className="text-sm font-black text-emerald-600">{m.value}</div>
                      <div className={`text-[10px] font-bold truncate ${isLight ? "text-slate-600" : "text-slate-400"}`}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial Quote Preview */}
            {testimonialQuote && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                <span className="text-[9px] font-black uppercase text-amber-600">Client Endorsement</span>
                <p className={`text-[11px] italic line-clamp-3 ${isLight ? "text-slate-700" : "text-slate-300"}`}>"{testimonialQuote}"</p>
                {testimonialAuthor && (
                  <p className="text-[10px] font-bold text-amber-700 mt-1">
                    — {testimonialAuthor} {testimonialRole ? `(${testimonialRole})` : ""}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
