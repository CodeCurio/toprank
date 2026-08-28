"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import slugify from "slugify";
import {
  ArrowLeft,
  Save,
  Briefcase,
  Plus,
  Trash2,
  Star,
  ExternalLink,
  Globe,
  Image as ImageIcon,
  CheckCircle2,
  Layers,
  TrendingUp,
  Tag,
  Building,
  List,
  Eye,
  Lock,
  Unlock,
  Copy,
  Check,
  Zap,
  Code2,
  X,
} from "lucide-react";

// Rich Tech Stack Options with Visual Icons
const TECH_STACK_CATALOG = [
  { id: "Next.js", label: "Next.js", icon: "⚡", category: "Frontend" },
  { id: "React", label: "React", icon: "⚛️", category: "Frontend" },
  { id: "Tailwind CSS", label: "Tailwind CSS", icon: "🎨", category: "Frontend" },
  { id: "TypeScript", label: "TypeScript", icon: "🟦", category: "Frontend" },
  { id: "Local SEO", label: "Local SEO", icon: "📍", category: "Marketing" },
  { id: "Google Maps 3-Pack", label: "Google Maps 3-Pack", icon: "🗺️", category: "Marketing" },
  { id: "Google Ads", label: "Google Ads", icon: "📈", category: "Marketing" },
  { id: "Meta Ads", label: "Meta Ads", icon: "🎯", category: "Marketing" },
  { id: "WhatsApp Automation", label: "WhatsApp API", icon: "💬", category: "Automation" },
  { id: "SEO Schema", label: "SEO Schema", icon: "🔍", category: "Marketing" },
  { id: "Shopify", label: "Shopify", icon: "🛍️", category: "E-Commerce" },
  { id: "WordPress", label: "WordPress", icon: "📰", category: "CMS" },
  { id: "Supabase", label: "Supabase", icon: "⚡", category: "Backend" },
  { id: "Node.js", label: "Node.js", icon: "🟢", category: "Backend" },
  { id: "GA4 Tracking", label: "GA4 Tracking", icon: "📊", category: "Analytics" },
  { id: "Figma UI/UX", label: "Figma UI/UX", icon: "✨", category: "Design" },
];

const PRESET_COVERS = [
  { label: "Healthcare", url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80" },
  { label: "Real Estate", url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80" },
  { label: "E-Commerce", url: "https://images.unsplash.com/photo-1556742049-0a67ef86e963?auto=format&fit=crop&w=1200&q=80" },
  { label: "Hospitality", url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" },
  { label: "Tech & SaaS", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" },
  { label: "Education", url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80" },
];

const POPULAR_INDUSTRIES = [
  "Healthcare & Diagnostics",
  "Real Estate",
  "Retail & E-commerce",
  "Hospitality & Dining",
  "Education & Coaching",
  "Technology & SaaS",
  "Legal & Professional",
  "Manufacturing & B2B",
];

const POPULAR_CITIES = ["Lucknow, UP", "Delhi NCR", "Mumbai, MH", "Bangalore, KA", "Kanpur, UP", "Pan-India"];

const PRESET_METRICS = [
  { label: "Inquiries Growth", value: "+314%" },
  { label: "Google Maps Rank", value: "#1 Spot" },
  { label: "Return on Ad Spend", value: "4.8x ROI" },
  { label: "Page Load Speed", value: "0.6s" },
  { label: "Organic Traffic", value: "+280%" },
  { label: "Qualified Leads", value: "1,200+" },
];

export default function EditPortfolioPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const portfolioId = resolvedParams.id;

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [isSlugCustom, setIsSlugCustom] = useState(true);
  const [clientName, setClientName] = useState("");
  const [industry, setIndustry] = useState("Healthcare & Diagnostics");
  const [location, setLocation] = useState("Lucknow, UP");
  const [summary, setSummary] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  
  // Selected Tech Stack Array
  const [selectedTech, setSelectedTech] = useState<string[]>([
    "Next.js",
    "Tailwind CSS",
    "Local SEO",
  ]);
  const [customTechInput, setCustomTechInput] = useState("");

  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(true);

  // Dynamic Growth Metrics
  const [metrics, setMetrics] = useState<{ label: string; value: string }[]>([
    { label: "Google GMB Leads", value: "+314%" },
    { label: "Search Keyword Rankings", value: "#1 Spot" },
  ]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedSlug, setCopiedSlug] = useState(false);

  useEffect(() => {
    fetchPortfolio();
  }, [portfolioId]);

  // Keyboard shortcut Ctrl+S
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        const submitBtn = document.getElementById("edit-portfolio-submit-btn");
        if (submitBtn) submitBtn.click();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`/api/portfolios/${portfolioId}`);
      if (!res.ok) {
        throw new Error("Failed to load portfolio details from database.");
      }
      const json = await res.json();
      const data = json.data;

      if (data) {
        setTitle(data.title || "");
        setSlug(data.slug || "");
        setClientName(data.client_name || "");
        setIndustry(data.industry || "Healthcare & Diagnostics");
        setLocation(data.location || "Lucknow, UP");
        setSummary(data.summary || "");
        setChallenge(data.challenge || "");
        setSolution(data.solution || "");
        setContent(data.content || "");
        setCoverImage(data.cover_image || "");
        setLiveUrl(data.live_url || "");
        
        if (data.technologies) {
          const parsed = typeof data.technologies === "string"
            ? data.technologies.split(",").map((t: string) => t.trim()).filter(Boolean)
            : Array.isArray(data.technologies) ? data.technologies : [];
          setSelectedTech(parsed);
        }

        setFeatured(Boolean(data.featured));
        setPublished(data.published !== false);
        if (data.results_metrics && Array.isArray(data.results_metrics)) {
          setMetrics(data.results_metrics);
        }
      }
    } catch (err: any) {
      console.error("Error fetching portfolio:", err);
      setError(err.message || "Failed to load portfolio item");
    } finally {
      setLoading(false);
    }
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isSlugCustom) {
      setSlug(slugify(val, { lower: true, strict: true }));
    }
  };

  const toggleTech = (techName: string) => {
    if (selectedTech.includes(techName)) {
      setSelectedTech(selectedTech.filter((t) => t !== techName));
    } else {
      setSelectedTech([...selectedTech, techName]);
    }
  };

  const addCustomTech = () => {
    if (!customTechInput.trim()) return;
    const trimmed = customTechInput.trim();
    if (!selectedTech.includes(trimmed)) {
      setSelectedTech([...selectedTech, trimmed]);
    }
    setCustomTechInput("");
  };

  const addMetric = (label = "Growth Metric", value = "+100%") => {
    if (metrics.length >= 4) return;
    setMetrics([...metrics, { label, value }]);
  };

  const removeMetric = (index: number) => {
    setMetrics(metrics.filter((_, i) => i !== index));
  };

  const updateMetric = (index: number, field: "label" | "value", val: string) => {
    const updated = [...metrics];
    updated[index][field] = val;
    setMetrics(updated);
  };

  const insertBullet = (setter: (fn: (prev: string) => string) => void) => {
    setter((prev) => (prev ? `${prev}\n• ` : "• "));
  };

  const handleCopySlug = () => {
    if (!slug) return;
    navigator.clipboard.writeText(`/portfolio/${slug}`);
    setCopiedSlug(true);
    setTimeout(() => setCopiedSlug(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !clientName.trim()) {
      setError("Please fill in both Case Study Title and Client Name.");
      return;
    }

    setSaving(true);
    setError(null);

    const payload = {
      title,
      slug: slug || slugify(title, { lower: true, strict: true }),
      client_name: clientName,
      industry,
      location,
      summary,
      challenge,
      solution,
      content,
      results_metrics: metrics,
      cover_image: coverImage,
      live_url: liveUrl,
      technologies: selectedTech.join(", "),
      featured,
      published,
    };

    try {
      const res = await fetch(`/api/portfolios/${portfolioId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const resData = await res.json();
      if (!res.ok || resData.error) {
        throw new Error(resData.error || "Failed to update portfolio in database.");
      }

      router.push("/admin/portfolios");
    } catch (err: any) {
      console.error("Update portfolio error:", err);
      setError(err.message || "Failed to update case study.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-24 text-center space-y-3">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          Loading Case Study Details...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link
          href="/admin/portfolios"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolios
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href={`/portfolio/${slug}`}
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold border border-slate-700 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" /> View Live Page
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-black uppercase tracking-wider">
            <Zap className="w-3 h-3" /> Database Sync Active
          </span>
        </div>
      </div>

      {/* Main Grid: Form Left (7 Cols), Live Preview & Publish Sidebar Right (5 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Form Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
                {error}
              </div>
            )}

            {/* SECTION 1: Core Details */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-5 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-800/80 pb-4">
                <Building className="w-4 h-4 text-orange-400" />
                <h3 className="text-sm font-black text-white uppercase tracking-wider">1. Project &amp; Client Overview</h3>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                  Case Study Title <span className="text-orange-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. Scaling Atulaya Healthcare to #1 on Google Maps in Lucknow"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-2xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Slug with Unlock Toggle & Copy */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                    URL Slug
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsSlugCustom(!isSlugCustom)}
                    className="text-[11px] font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1"
                  >
                    {isSlugCustom ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                    <span>{isSlugCustom ? "Custom slug active" : "Auto-generated"}</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3">
                  <span className="text-xs text-slate-500 font-mono">/portfolio/</span>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => {
                      setIsSlugCustom(true);
                      setSlug(e.target.value);
                    }}
                    placeholder="atulaya-healthcare-growth"
                    className="w-full bg-transparent text-sm font-mono text-purple-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleCopySlug}
                    className="p-1 text-slate-500 hover:text-white transition-colors"
                    title="Copy relative URL"
                  >
                    {copiedSlug ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Client Name & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                    Client Name <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Atulaya Diagnostics"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-2xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                    City / Region
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Lucknow, UP"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-2xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Quick City Chips */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Quick City:</span>
                {POPULAR_CITIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setLocation(c)}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-colors ${
                      location === c
                        ? "bg-purple-600 text-white"
                        : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Industry Select & Chips */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                  Industry / Category
                </label>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  {POPULAR_INDUSTRIES.map((ind) => (
                    <button
                      key={ind}
                      type="button"
                      onClick={() => setIndustry(ind)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        industry === ind
                          ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md shadow-orange-500/20"
                          : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live URL */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                  Live Client URL (Optional)
                </label>
                <div className="relative">
                  <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="url"
                    value={liveUrl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    placeholder="https://clientwebsite.com"
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-2xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: Visual Tech Stack Selector (Clickable Badges + Custom) */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">
                    2. Tech Stack &amp; Deliverables
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-purple-400 font-mono">
                  {selectedTech.length} selected
                </span>
              </div>

              {/* Visual Tech Chips Grid */}
              <div>
                <p className="text-xs text-slate-400 mb-3">
                  Click on technologies/services below to toggle them on or off:
                </p>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK_CATALOG.map((item) => {
                    const isSelected = selectedTech.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleTech(item.id)}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                          isSelected
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20 scale-105"
                            : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                        }`}
                      >
                        <span className="text-sm">{item.icon}</span>
                        <span>{item.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-emerald-300" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Tech Stack Tag Input */}
              <div className="pt-2">
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  + Add Custom Tech / Service Tag:
                </label>
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
                    placeholder="e.g., Python, PostgreSQL, HubSpot CRM"
                    className="flex-1 px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl text-xs font-bold text-white placeholder-slate-600 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={addCustomTech}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors border border-slate-700 flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                </div>

                {/* Selected Custom Tags */}
                {selectedTech.filter((t) => !TECH_STACK_CATALOG.some((c) => c.id === t)).length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {selectedTech
                      .filter((t) => !TECH_STACK_CATALOG.some((c) => c.id === t))
                      .map((customT) => (
                        <span
                          key={customT}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-950/60 border border-purple-700 text-purple-300 rounded-lg text-xs font-bold"
                        >
                          🏷️ {customT}
                          <button
                            type="button"
                            onClick={() => toggleTech(customT)}
                            className="hover:text-red-400"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                  </div>
                )}
              </div>
            </div>

            {/* SECTION 3: Dynamic Growth Metrics */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">
                    3. Growth Metrics &amp; Proof Points
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => addMetric()}
                  disabled={metrics.length >= 4}
                  className="px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-all disabled:opacity-40"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Metric
                </button>
              </div>

              {/* Quick Presets */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Quick Presets:</span>
                {PRESET_METRICS.map((pm, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => addMetric(pm.label, pm.value)}
                    className="px-2.5 py-1 rounded-xl bg-slate-950 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-300 border border-slate-800 text-[11px] font-bold transition-all"
                  >
                    + {pm.value} ({pm.label})
                  </button>
                ))}
              </div>

              {/* Metric Row Inputs */}
              <div className="space-y-3 pt-1">
                {metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-slate-950 border border-slate-800 rounded-2xl"
                  >
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                        Metric Label #{idx + 1}
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. Monthly Inquiries"
                        value={m.label}
                        onChange={(e) => updateMetric(idx, "label", e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div className="w-36">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">
                        Value / Result
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. +314%"
                        value={m.value}
                        onChange={(e) => updateMetric(idx, "value", e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-emerald-500/40 rounded-xl text-xs font-black text-emerald-400 focus:outline-none focus:border-emerald-400 text-center"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => removeMetric(idx)}
                      className="p-2.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all self-end"
                      title="Remove metric"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 4: Case Study Narrative (Summary, Challenge, Solution) */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-6 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-800/80 pb-4">
                <Layers className="w-4 h-4 text-purple-400" />
                <h3 className="text-sm font-black text-white uppercase tracking-wider">
                  4. Case Study Story &amp; Results
                </h3>
              </div>

              {/* Summary */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                    High-Level Summary <span className="text-orange-400">*</span>
                  </label>
                  <span className="text-[10px] text-slate-500 font-mono">{summary.length} chars</span>
                </div>
                <textarea
                  rows={2}
                  required
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Engineered a complete local SEO and high-speed web infrastructure resulting in 314% surge in patient bookings."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-2xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              {/* Challenge & Solution Side by Side with Toolbar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Challenge */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                      The Challenge / Problem
                    </label>
                    <button
                      type="button"
                      onClick={() => insertBullet(setChallenge)}
                      className="px-2 py-0.5 rounded-lg bg-slate-950 text-[10px] font-bold text-slate-400 hover:text-white border border-slate-800 flex items-center gap-1"
                    >
                      <List className="w-3 h-3" /> + Bullet
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    placeholder="• Low visibility on Google Maps 3-Pack&#10;• Slow legacy website taking 6+ seconds&#10;• Poor mobile conversion"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-2xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none transition-colors leading-relaxed"
                  />
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                      Our Strategy &amp; Solution
                    </label>
                    <button
                      type="button"
                      onClick={() => insertBullet(setSolution)}
                      className="px-2 py-0.5 rounded-lg bg-slate-950 text-[10px] font-bold text-slate-400 hover:text-white border border-slate-800 flex items-center gap-1"
                    >
                      <List className="w-3 h-3" /> + Bullet
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    placeholder="• Built custom sub-second Next.js web portal&#10;• Optimized Google Business Profile with 100+ citations&#10;• Integrated automated WhatsApp confirmations"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-2xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none transition-colors leading-relaxed"
                  />
                </div>
              </div>

              {/* Detailed Breakdown / HTML */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                    Detailed Breakdown &amp; Client Story (HTML / Paragraphs)
                  </label>
                  <span className="text-[10px] text-purple-400 font-mono">Supports HTML tags</span>
                </div>
                <textarea
                  rows={5}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="<h2>Execution Highlights</h2>&#10;<p>Comprehensive breakdown of strategy, month-by-month results, and client satisfaction...</p>"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-2xl text-xs font-mono text-white placeholder-slate-600 focus:outline-none transition-colors leading-relaxed"
                />
              </div>
            </div>

            {/* Mobile Submit Button */}
            <div className="block lg:hidden space-y-3">
              <button
                id="edit-portfolio-submit-btn"
                type="submit"
                disabled={saving}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{saving ? "Saving Changes..." : "Update Case Study"}</span>
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: Sticky Real-time Preview & Settings */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Live Card Preview Box */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl sticky top-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-purple-400" />
                <h3 className="text-xs font-black text-white uppercase tracking-wider">
                  Live Website Card Preview
                </h3>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Real-Time
              </span>
            </div>

            {/* Simulated Frontend Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl group transition-all">
              {/* Cover Image with Badges */}
              <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                {coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={coverImage}
                    alt={title || "Preview"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-600">
                    <ImageIcon className="w-8 h-8" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-slate-900/90 backdrop-blur-md border border-slate-700 text-purple-300 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                    {industry || "Industry"}
                  </span>
                  {featured && (
                    <span className="inline-flex items-center gap-1 bg-orange-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-md shadow-orange-500/40">
                      <Star className="w-2.5 h-2.5 fill-white" /> Featured
                    </span>
                  )}
                </div>

                {/* Growth Metric Badge */}
                {metrics[0] && (
                  <div className="absolute bottom-3 right-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-xl text-xs font-black shadow-lg">
                    {metrics[0].value} {metrics[0].label}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-2.5">
                <p className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">
                  {clientName || "Client Name"} · {location || "City"}
                </p>
                <h4 className="text-sm font-black text-white line-clamp-2 leading-snug">
                  {title || "Your High-Impact Case Study Title Will Appear Here"}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {summary || "Your case study summary and outcome highlights will appear here..."}
                </p>

                {/* Visual Tech Stack Tags in Preview */}
                {selectedTech.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {selectedTech.slice(0, 4).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-md text-[10px] font-bold text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                    {selectedTech.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[9px] font-bold text-slate-500">
                        +{selectedTech.length - 4} more
                      </span>
                    )}
                  </div>
                )}

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-bold">
                  <span>View Full Case Study</span>
                  <span className="text-purple-400">➔</span>
                </div>
              </div>
            </div>

            {/* Cover Image Selector */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-300">
                Cover Image URL
              </label>
              
              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://images.unsplash.com/... or /images/case.webp"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-purple-500"
              />

              {/* 1-Click Preset Cover Images */}
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">
                  1-Click Unsplash Stock Images:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_COVERS.map((preset, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCoverImage(preset.url)}
                      className={`px-2 py-1.5 rounded-xl text-[10px] font-bold border text-center truncate transition-all ${
                        coverImage === preset.url
                          ? "bg-purple-600 border-purple-500 text-white"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Status & Featured Toggles */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <span className="text-xs font-black text-white flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-orange-400" /> Feature on Homepage
                </span>
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-4 h-4 rounded text-orange-500 bg-slate-900 border-slate-700 accent-orange-500"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <span className="text-xs font-black text-white flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Publish Live Immediately
                </span>
                <input
                  type="checkbox"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-500 bg-slate-900 border-slate-700 accent-blue-500"
                />
              </label>
            </div>

            {/* Desktop Action Save Button */}
            <div className="hidden lg:block pt-2">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={saving}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{saving ? "Saving to Database..." : "Update Case Study"}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
