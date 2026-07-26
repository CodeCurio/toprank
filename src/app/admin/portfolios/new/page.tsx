"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import slugify from "slugify";
import { ArrowLeft, Save, Briefcase, Plus, Trash2, Star } from "lucide-react";

export default function NewPortfolioPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [clientName, setClientName] = useState("");
  const [industry, setIndustry] = useState("Healthcare & Diagnostics");
  const [location, setLocation] = useState("Lucknow, UP");
  const [summary, setSummary] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(true);

  // Dynamic Growth Metrics JSON array
  const [metrics, setMetrics] = useState<{ label: string; value: string }[]>([
    { label: "Google GMB Leads", value: "+314%" },
    { label: "Search Keyword Rankings", value: "#1 Spot" },
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    setSlug(slugify(val, { lower: true, strict: true }));
  };

  const addMetric = () => {
    setMetrics([...metrics, { label: "Growth Metric", value: "+100%" }]);
  };

  const removeMetric = (index: number) => {
    setMetrics(metrics.filter((_, i) => i !== index));
  };

  const updateMetric = (index: number, field: "label" | "value", val: string) => {
    const updated = [...metrics];
    updated[index][field] = val;
    setMetrics(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: insertError } = await supabase.from("portfolios").insert([
        {
          title,
          slug: slug || slugify(title, { lower: true, strict: true }),
          client_name: clientName,
          industry,
          location,
          summary,
          challenge,
          solution,
          results_metrics: metrics,
          cover_image: coverImage,
          featured,
          published,
        },
      ]);

      if (insertError) throw insertError;

      router.push("/admin/portfolios");
    } catch (err: any) {
      setError(err.message || "Failed to create portfolio case study");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin/portfolios"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolios List
        </Link>
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">New Case Study</span>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <h1 className="text-2xl font-black text-white tracking-tight mb-6">Create Portfolio Case Study</h1>

        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
              Case Study Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={handleTitleChange}
              placeholder="e.g., How We Scaled Atulaya Healthcare's Local GMB Patient Leads by 314%"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
              URL Slug
            </label>
            <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
              <span className="text-xs text-slate-500 font-mono">/portfolio/</span>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="atulaya-healthcare-growth"
                className="w-full bg-transparent text-sm font-mono text-purple-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Client Name & Location & Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                Client Name
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Atulaya Healthcare"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl text-sm font-bold text-white focus:outline-none transition-colors"
              >
                <option value="Healthcare & Diagnostics">Healthcare &amp; Diagnostics</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Retail & E-commerce">Retail &amp; E-commerce</option>
                <option value="Hospitality & Dining">Hospitality &amp; Dining</option>
                <option value="Education & Coaching">Education &amp; Coaching</option>
                <option value="Legal & Professional">Legal &amp; Professional</option>
              </select>
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
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Results Metrics Section */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase tracking-wider text-orange-400">
                Key Performance Growth Metrics
              </label>
              <button
                type="button"
                onClick={addMetric}
                className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Add Metric
              </button>
            </div>

            {metrics.map((m, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Metric Label (e.g. Monthly Inquiries)"
                  value={m.label}
                  onChange={(e) => updateMetric(idx, "label", e.target.value)}
                  className="flex-1 px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-white"
                />
                <input
                  type="text"
                  placeholder="Value (e.g. +314%)"
                  value={m.value}
                  onChange={(e) => updateMetric(idx, "value", e.target.value)}
                  className="w-32 px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-black text-emerald-400"
                />
                <button
                  type="button"
                  onClick={() => removeMetric(idx)}
                  className="p-2 text-slate-500 hover:text-red-400"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
              Case Study Summary
            </label>
            <textarea
              rows={3}
              required
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="High-level overview of the client transformation and outcomes achieved..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl text-sm font-medium text-white placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                Initial Challenge / Problem
              </label>
              <textarea
                rows={4}
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                placeholder="Low local map visibility, outdated website, poor lead conversion..."
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                Our Strategy &amp; Solution
              </label>
              <textarea
                rows={4}
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                placeholder="Full Google Business Profile optimization, Next.js high-speed website, local schema markup..."
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl text-xs font-medium text-white placeholder-slate-600 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Cover Image URL */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
              Cover Image URL
            </label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="https://images.unsplash.com/... or /images/portfolio-1.jpg"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col sm:flex-row gap-4 p-4 bg-slate-950 border border-slate-800 rounded-xl">
            <label className="flex items-center gap-2 text-xs font-black text-white cursor-pointer">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-4 h-4 rounded text-orange-500 bg-slate-900 border-slate-700"
              />
              <span>Feature on Homepage / Portfolio Highlights</span>
            </label>

            <label className="flex items-center gap-2 text-xs font-black text-white cursor-pointer">
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="w-4 h-4 rounded text-blue-500 bg-slate-900 border-slate-700"
              />
              <span>Publish Live Immediately</span>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? "Saving..." : "Save Case Study"}</span>
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
