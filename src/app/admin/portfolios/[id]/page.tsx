"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import slugify from "slugify";
import {
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  Star,
  ExternalLink,
  Globe,
  CheckCircle2,
  Layers,
  TrendingUp,
  Building,
  List,
  Eye,
  Lock,
  Unlock,
  Copy,
  Check,
  Code2,
  X,
} from "lucide-react";
import { ImageUploader } from "@/components/admin/ImageUploader";

const POPULAR_INDUSTRIES = [
  "Healthcare & Diagnostics",
  "Real Estate & Architecture",
  "Retail & E-commerce",
  "Hospitality & Dining",
  "Technology & SaaS",
  "Education & Coaching",
  "Automotive & Local Services",
  "Manufacturing & B2B",
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
  const [customIndustry, setCustomIndustry] = useState("");
  const [location, setLocation] = useState("Lucknow, UP");
  const [summary, setSummary] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  
  // Selected Tech Stack Array
  const [selectedTech, setSelectedTech] = useState<string[]>([
    "SEO & Local Search",
    "Next.js",
  ]);
  const [customTechInput, setCustomTechInput] = useState("");

  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(true);

  // Dynamic Growth Metrics
  const [metrics, setMetrics] = useState<{ label: string; value: string }[]>([
    { label: "Growth Result", value: "+300%" },
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
        
        if (POPULAR_INDUSTRIES.includes(data.industry)) {
          setIndustry(data.industry);
        } else {
          setIndustry("Other");
          setCustomIndustry(data.industry || "");
        }

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
        if (data.results_metrics && Array.isArray(data.results_metrics) && data.results_metrics.length > 0) {
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

  const addMetric = () => {
    if (metrics.length >= 4) return;
    setMetrics([...metrics, { label: "Metric Label", value: "+100%" }]);
  };

  const removeMetric = (index: number) => {
    setMetrics(metrics.filter((_, i) => i !== index));
  };

  const updateMetric = (index: number, field: "label" | "value", val: string) => {
    const updated = [...metrics];
    updated[index][field] = val;
    setMetrics(updated);
  };

  const insertBullet = (setter: React.Dispatch<React.SetStateAction<string>>) => {
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
      setError("Please provide both Project Title and Client Name.");
      return;
    }

    setSaving(true);
    setError(null);

    const finalIndustry = industry === "Other" && customIndustry.trim() ? customIndustry.trim() : industry;

    const payload = {
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
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          Loading Project Details...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <Link
            href="/admin/portfolios"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolios
          </Link>
          <h1 className="text-2xl font-black text-white tracking-tight">Edit Portfolio Project</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Modify client metrics, screenshots, and live deliverables.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/portfolio/${slug}`}
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold border border-slate-700 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" /> View Live
          </Link>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={saving}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{saving ? "Saving Changes..." : "Save Changes"}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left Form (7 Cols) & Right Sidebar Preview (5 Cols) */}
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

            {/* 1. Core Project Information */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-5 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-800/80 pb-4">
                <Building className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-black text-white uppercase tracking-wider">
                  1. Project &amp; Client Info
                </h3>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                  Project Title <span className="text-orange-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. Scaling Atulaya Healthcare to #1 on Google Maps"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
                />
              </div>

              {/* Slug */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                    URL Slug
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsSlugCustom(!isSlugCustom)}
                    className="text-[11px] font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    {isSlugCustom ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                    <span>{isSlugCustom ? "Custom slug active" : "Auto-generated"}</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
                  <span className="text-xs text-slate-500 font-mono">/portfolio/</span>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => {
                      setIsSlugCustom(true);
                      setSlug(e.target.value);
                    }}
                    placeholder="project-slug-name"
                    className="w-full bg-transparent text-sm font-mono text-blue-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleCopySlug}
                    className="p-1 text-slate-500 hover:text-white transition-colors"
                    title="Copy URL"
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
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Lucknow, UP"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Industry & Live URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                    Industry / Category
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm font-bold text-white focus:outline-none transition-colors"
                  >
                    {POPULAR_INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind} className="bg-slate-900 text-white">
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
                      className="w-full mt-2 px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-xs font-bold text-white placeholder-slate-600 focus:outline-none"
                    />
                  )}
                </div>

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
                      className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Cover Image Upload */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
              <ImageUploader
                value={coverImage}
                onChange={(url) => setCoverImage(url)}
                label="2. Featured Cover Image"
                helperText="Upload a high-quality mockup, banner, or screenshot of the client project (PNG, JPG, WebP)"
              />
            </div>

            {/* 3. Tech Stack & Deliverables */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">
                    3. Tech Stack &amp; Deliverables
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-blue-400 font-mono">
                  {selectedTech.length} selected
                </span>
              </div>

              {/* Quick Tag Chips */}
              <div>
                <p className="text-xs text-slate-400 mb-3">
                  Click tags to toggle them on or off:
                </p>
                <div className="flex flex-wrap gap-2">
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
                            : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                        }`}
                      >
                        <span>{tag}</span>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom Tag Input */}
              <div className="pt-2">
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  + Add Custom Tag:
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
                    placeholder="e.g. Supabase, GA4, Custom CRM"
                    className="flex-1 px-4 py-2.5 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-xs font-bold text-white placeholder-slate-600 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={addCustomTech}
                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors border border-slate-700 flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                </div>

                {/* Custom tags list */}
                {selectedTech.filter((t) => !COMMON_TECH_TAGS.includes(t)).length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {selectedTech
                      .filter((t) => !COMMON_TECH_TAGS.includes(t))
                      .map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-950/60 border border-blue-700 text-blue-300 rounded-lg text-xs font-bold"
                        >
                          {t}
                          <button
                            type="button"
                            onClick={() => toggleTech(t)}
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

            {/* 4. Growth Metrics & Proof Points */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">
                    4. Results &amp; Key Metrics
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={addMetric}
                  disabled={metrics.length >= 4}
                  className="px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-all disabled:opacity-40"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Metric
                </button>
              </div>

              <div className="space-y-3">
                {metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-slate-950 border border-slate-800 rounded-2xl"
                  >
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                        Metric Name #{idx + 1}
                      </span>
                      <input
                        type="text"
                        placeholder="e.g. Inquiries Growth"
                        value={m.label}
                        onChange={(e) => updateMetric(idx, "label", e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="w-36">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">
                        Result / Value
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

            {/* 5. Case Study Story & Content */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-6 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-800/80 pb-4">
                <Layers className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-black text-white uppercase tracking-wider">
                  5. Case Study Details &amp; Narrative
                </h3>
              </div>

              {/* Summary */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                  Short Summary / Excerpt <span className="text-orange-400">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Brief 1-2 sentence overview of the transformation and outcome..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-2xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none transition-colors leading-relaxed"
                />
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    placeholder="• Low rankings on Google&#10;• High cost per lead&#10;• Slow website speed"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-2xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none transition-colors leading-relaxed"
                  />
                </div>

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
                    placeholder="• Built fast responsive Next.js web portal&#10;• Local citation SEO campaign&#10;• Automated WhatsApp lead capture"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-2xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none transition-colors leading-relaxed"
                  />
                </div>
              </div>

              {/* Full Content */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                  Full Case Study Story (Optional / HTML supported)
                </label>
                <textarea
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Detailed breakdown of the strategy, month-by-month results, and client quote..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-2xl text-xs font-mono text-white placeholder-slate-600 focus:outline-none transition-colors leading-relaxed"
                />
              </div>
            </div>

            {/* Mobile Submit Button */}
            <div className="block lg:hidden">
              <button
                id="edit-portfolio-submit-btn"
                type="submit"
                disabled={saving}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{saving ? "Saving Changes..." : "Save Changes"}</span>
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: Sticky Real-time Card Preview & Publish Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl sticky top-6 space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-blue-400" />
                <h3 className="text-xs font-black text-white uppercase tracking-wider">
                  Live Card Preview
                </h3>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Real-Time
              </span>
            </div>

            {/* Simulated Live Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl group transition-all">
              {/* Cover Image */}
              <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                {coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={coverImage}
                    alt={title || "Preview"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-center p-6">
                    <p className="text-xs font-bold text-slate-500">No Image Uploaded Yet</p>
                    <p className="text-[10px] text-slate-600 mt-1">Upload a cover image above</p>
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
                <p className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                  {clientName || "Client Name"} · {location || "City"}
                </p>
                <h4 className="text-sm font-black text-white line-clamp-2 leading-snug">
                  {title || "Your Project Title Will Appear Here"}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {summary || "Your short summary and outcome highlights will appear here..."}
                </p>

                {/* Tags */}
                {selectedTech.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {selectedTech.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-md text-[10px] font-bold text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                    {selectedTech.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[9px] font-bold text-slate-500">
                        +{selectedTech.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Publish & Featured Toggles */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-slate-700 transition-colors">
                <span className="text-xs font-black text-white flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-amber-400" /> Feature on Homepage
                </span>
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700 accent-blue-600"
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
                  className="w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700 accent-blue-600"
                />
              </label>
            </div>

            {/* Desktop Action Button */}
            <div className="hidden lg:block pt-2">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={saving}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{saving ? "Saving Changes..." : "Save Changes"}</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
