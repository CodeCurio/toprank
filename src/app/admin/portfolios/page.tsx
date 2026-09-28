"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import {
  Briefcase,
  Plus,
  Search,
  Edit,
  Trash2,
  ExternalLink,
  Star,
  RefreshCw,
  AlertCircle,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  SlidersHorizontal,
  Building,
} from "lucide-react";
import { useAdminTheme } from "@/components/admin/AdminThemeContext";

export default function AdminPortfoliosPage() {
  const { isLight } = useAdminTheme();
  const [portfolios, setPortfolios] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/portfolios");
      if (res.ok) {
        const json = await res.json();
        setPortfolios(json.data || []);
        return;
      }

      const { data, error: clientErr } = await supabase
        .from("portfolios")
        .select("*")
        .order("created_at", { ascending: false });

      if (clientErr) {
        throw new Error(
          clientErr.message ||
            "Could not query portfolios. Ensure the 'portfolios' table exists in Supabase."
        );
      }
      setPortfolios(data || []);
    } catch (err: any) {
      console.error("Error fetching portfolios:", err?.message || err);
      setError(
        err?.message ||
          "Unable to load portfolios from database. Please verify the 'portfolios' table exists in your Supabase project."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSeedSampleData = async () => {
    setSeeding(true);
    setError(null);
    try {
      const res = await fetch("/api/portfolios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "seed_sample" }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to seed sample portfolios.");
      }
      setSuccessMessage("Sample case studies successfully imported to Supabase!");
      setTimeout(() => setSuccessMessage(null), 4000);
      await fetchPortfolios();
    } catch (err: any) {
      setError(err.message || "Failed to seed sample data.");
    } finally {
      setSeeding(false);
    }
  };

  const deletePortfolio = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete portfolio "${title}"?`)) return;

    try {
      const res = await fetch(`/api/portfolios/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const { error: clientErr } = await supabase.from("portfolios").delete().eq("id", id);
        if (clientErr) throw clientErr;
      }
      setPortfolios(portfolios.filter((p) => p.id !== id));
      setSuccessMessage("Case study deleted successfully.");
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err: any) {
      alert("Failed to delete portfolio: " + (err.message || err));
    }
  };

  const industries = ["All", ...Array.from(new Set(portfolios.map((p) => p.industry).filter(Boolean)))];

  const filteredPortfolios = portfolios.filter((p) => {
    const matchesSearch =
      p.title?.toLowerCase().includes(search.toLowerCase()) ||
      p.client_name?.toLowerCase().includes(search.toLowerCase()) ||
      p.industry?.toLowerCase().includes(search.toLowerCase()) ||
      p.location?.toLowerCase().includes(search.toLowerCase());

    const matchesIndustry = selectedIndustry === "All" || p.industry === selectedIndustry;

    return matchesSearch && matchesIndustry;
  });

  const publishedCount = portfolios.filter((p) => p.published !== false).length;
  const featuredCount = portfolios.filter((p) => p.featured).length;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header Bar */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl border shadow-sm transition-all ${
        isLight ? "bg-white border-slate-200/90 text-slate-900" : "bg-slate-900 border-slate-800 text-white shadow-xl"
      }`}>
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-black uppercase tracking-widest mb-2">
            <Briefcase className="w-3.5 h-3.5" /> Case Studies &amp; Growth Proof
          </div>
          <h1 className={`text-2xl sm:text-3xl font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            Portfolio Manager
          </h1>
          <p className={`text-xs font-medium mt-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            Manage client success stories, transformation narratives &amp; verified metrics
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchPortfolios}
            disabled={loading}
            className={`p-3 rounded-xl border transition-all ${
              isLight
                ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                : "bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border-slate-700"
            }`}
            title="Refresh list"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
          <Link
            href="/admin/portfolios/new"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4" /> Add Case Study
          </Link>
        </div>
      </div>

      {/* Quick Stat Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className={`p-4 rounded-2xl border transition-all ${
          isLight ? "bg-white border-slate-200 shadow-xs" : "bg-slate-900/90 border-slate-800"
        }`}>
          <span className={`text-[10px] font-black uppercase tracking-wider ${isLight ? "text-slate-500" : "text-slate-500"}`}>Total Projects</span>
          <div className={`text-2xl font-black mt-1 ${isLight ? "text-slate-900" : "text-white"}`}>{portfolios.length}</div>
        </div>
        <div className={`p-4 rounded-2xl border transition-all ${
          isLight ? "bg-white border-slate-200 shadow-xs" : "bg-slate-900/90 border-slate-800"
        }`}>
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600">Published Live</span>
          <div className="text-2xl font-black text-emerald-600 mt-1">{publishedCount}</div>
        </div>
        <div className={`p-4 rounded-2xl border transition-all ${
          isLight ? "bg-white border-slate-200 shadow-xs" : "bg-slate-900/90 border-slate-800"
        }`}>
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-600">Featured</span>
          <div className="text-2xl font-black text-amber-600 mt-1">{featuredCount}</div>
        </div>
        <div className={`p-4 rounded-2xl border transition-all ${
          isLight ? "bg-white border-slate-200 shadow-xs" : "bg-slate-900/90 border-slate-800"
        }`}>
          <span className="text-[10px] font-black uppercase tracking-wider text-blue-600">Industries</span>
          <div className="text-2xl font-black text-blue-600 mt-1">{Math.max(0, industries.length - 1)}</div>
        </div>
      </div>

      {/* Success Notification */}
      {successMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-bold flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Error Alert with One-Click Assist */}
      {error && (
        <div className="p-6 rounded-3xl bg-red-500/10 border border-red-500/30 text-red-600 space-y-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-sm font-black text-red-600">Database Connection Notice</h3>
              <p className="text-xs text-red-600 leading-relaxed">{error}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={fetchPortfolios}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-700 rounded-xl text-xs font-bold transition-colors"
            >
              Retry Connection
            </button>
            <button
              onClick={handleSeedSampleData}
              disabled={seeding}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black transition-colors flex items-center gap-1.5 shadow-md shadow-blue-500/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{seeding ? "Importing Samples..." : "Seed Sample Portfolios"}</span>
            </button>
          </div>
        </div>
      )}

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? "text-slate-400" : "text-slate-500"}`} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by client name, industry, title, or location..."
            className={`w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm font-bold focus:outline-none transition-colors border ${
              isLight
                ? "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 shadow-xs"
                : "bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-blue-500"
            }`}
          />
        </div>

        {industries.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <span className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shrink-0 px-2 ${isLight ? "text-slate-500" : "text-slate-500"}`}>
              <SlidersHorizontal className="w-3 h-3" /> Filter:
            </span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedIndustry === ind
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : isLight
                    ? "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Portfolios Table / List */}
      <div className={`border rounded-3xl p-6 overflow-hidden shadow-sm transition-all ${
        isLight ? "bg-white border-slate-200/90" : "bg-slate-900/90 border-slate-800 shadow-xl"
      }`}>
        {loading ? (
          <div className="py-16 text-center space-y-3">
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className={`text-xs font-bold uppercase tracking-widest ${isLight ? "text-slate-500" : "text-slate-400"}`}>
              Loading Portfolio Case Studies...
            </p>
          </div>
        ) : filteredPortfolios.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className={`border-b text-[10px] font-black uppercase tracking-wider ${
                  isLight ? "border-slate-200 text-slate-500 bg-slate-50/50" : "border-slate-800 text-slate-400"
                }`}>
                  <th className="pb-4 px-3">Case Study &amp; Client</th>
                  <th className="pb-4 px-3">Industry</th>
                  <th className="pb-4 px-3">Location</th>
                  <th className="pb-4 px-3">Growth Metric</th>
                  <th className="pb-4 px-3">Status</th>
                  <th className="pb-4 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y font-semibold ${isLight ? "divide-slate-100" : "divide-slate-800/60"}`}>
                {filteredPortfolios.map((portfolio) => {
                  const firstMetric =
                    Array.isArray(portfolio.results_metrics) && portfolio.results_metrics.length > 0
                      ? portfolio.results_metrics[0]
                      : null;

                  return (
                    <tr key={portfolio.id} className={`transition-colors group ${isLight ? "hover:bg-slate-50" : "hover:bg-slate-800/40"}`}>
                      <td className="py-4 px-3">
                        <div className="flex items-center gap-3">
                          {portfolio.cover_image ? (
                            <div className={`w-12 h-12 rounded-xl overflow-hidden shrink-0 border ${
                              isLight ? "bg-slate-100 border-slate-200" : "bg-slate-800 border-slate-700"
                            }`}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={portfolio.cover_image}
                                alt={portfolio.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${
                              isLight ? "bg-slate-100 border-slate-200 text-slate-400" : "bg-slate-800 border-slate-700 text-slate-500"
                            }`}>
                              <Building className="w-5 h-5" />
                            </div>
                          )}
                          <div>
                            <p className={`font-bold text-sm leading-snug line-clamp-1 transition-colors ${
                              isLight ? "text-slate-900 group-hover:text-blue-600" : "text-white group-hover:text-blue-300"
                            }`}>
                              {portfolio.title}
                            </p>
                            <span className="text-[11px] text-blue-600 font-bold">
                              {portfolio.client_name}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-3">
                        <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${
                          isLight ? "bg-slate-100 border-slate-200 text-slate-700" : "bg-slate-800 border-slate-700 text-slate-300"
                        }`}>
                          {portfolio.industry}
                        </span>
                      </td>

                      <td className={`py-4 px-3 ${isLight ? "text-slate-600" : "text-slate-400"}`}>{portfolio.location}</td>

                      <td className="py-4 px-3">
                        {firstMetric ? (
                          <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 px-2.5 py-1 rounded-lg text-[10px] font-black">
                            <TrendingUp className="w-3 h-3 text-emerald-600" /> {firstMetric.value}
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[10px]">—</span>
                        )}
                      </td>

                      <td className="py-4 px-3">
                        <div className="flex items-center gap-1.5">
                          {portfolio.featured && (
                            <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-600 border border-amber-500/30 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                              <Star className="w-2.5 h-2.5 fill-amber-500" /> Featured
                            </span>
                          )}
                          <span
                            className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                              portfolio.published !== false
                                ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                                : isLight
                                ? "bg-slate-100 text-slate-500 border border-slate-200"
                                : "bg-slate-800 text-slate-500 border border-slate-700"
                            }`}
                          >
                            {portfolio.published !== false ? "Live" : "Draft"}
                          </span>
                        </div>
                      </td>

                      <td className="py-4 px-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/portfolios/${portfolio.id}`}
                            className={`p-2 rounded-xl border transition-colors ${
                              isLight
                                ? "bg-slate-100 text-blue-600 hover:bg-blue-50 border-slate-200"
                                : "bg-slate-800 text-blue-400 hover:bg-blue-500/20 hover:text-white border-slate-700"
                            }`}
                            title="Edit Case Study"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            href={`/portfolio/${portfolio.slug}`}
                            target="_blank"
                            className={`p-2 rounded-xl border transition-colors ${
                              isLight
                                ? "bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200"
                                : "bg-slate-800 text-slate-400 hover:text-white border-slate-700"
                            }`}
                            title="View Live Case Study"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => deletePortfolio(portfolio.id, portfolio.title)}
                            className="p-2 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors border border-red-500/20"
                            title="Delete Case Study"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 text-center space-y-4">
            <div className={`w-14 h-14 rounded-3xl border flex items-center justify-center mx-auto ${
              isLight ? "bg-blue-50 border-blue-200 text-blue-600" : "bg-blue-500/10 border-blue-500/20 text-blue-400"
            }`}>
              <Briefcase className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <p className={`font-bold text-sm ${isLight ? "text-slate-900" : "text-white"}`}>No Case Studies Found</p>
              <p className={`text-xs max-w-sm mx-auto ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                Create your first client growth story or import sample case studies to get started.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <Link
                href="/admin/portfolios/new"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 hover:scale-105 transition-all"
              >
                <Plus className="w-4 h-4" /> Add Case Study
              </Link>
              <button
                onClick={handleSeedSampleData}
                disabled={seeding}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs border transition-all ${
                  isLight
                    ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                <span>{seeding ? "Importing..." : "Load Sample Case Studies"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
