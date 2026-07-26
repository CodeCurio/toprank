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
  CheckCircle2,
  XCircle,
  ExternalLink,
  Star,
} from "lucide-react";

export default function AdminPortfoliosPage() {
  const [portfolios, setPortfolios] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("portfolios")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPortfolios(data || []);
    } catch (err) {
      console.error("Error fetching portfolios:", err);
    } finally {
      setLoading(false);
    }
  };

  const deletePortfolio = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete portfolio "${title}"?`)) return;

    try {
      const { error } = await supabase.from("portfolios").delete().eq("id", id);
      if (error) throw error;
      setPortfolios(portfolios.filter((p) => p.id !== id));
    } catch (err: any) {
      alert("Failed to delete portfolio: " + err.message);
    }
  };

  const filteredPortfolios = portfolios.filter((p) =>
    p.title?.toLowerCase().includes(search.toLowerCase()) ||
    p.client_name?.toLowerCase().includes(search.toLowerCase()) ||
    p.industry?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest mb-2">
            <Briefcase className="w-3.5 h-3.5" /> Case Studies &amp; Growth Proof
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Portfolio Manager</h1>
          <p className="text-xs text-slate-400 font-medium">Manage client success stories, growth metrics &amp; industry case studies</p>
        </div>

        <Link
          href="/admin/portfolios/new"
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all"
        >
          <Plus className="w-4 h-4" /> Add Case Study
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by client name, industry, or title..."
          className="w-full pl-11 pr-4 py-3.5 bg-slate-900 border border-slate-800 focus:border-purple-500 rounded-2xl text-sm font-bold text-white placeholder-slate-500 focus:outline-none transition-colors"
        />
      </div>

      {/* Portfolios Grid / List */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 overflow-hidden">
        {loading ? (
          <div className="py-12 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
            Loading Portfolios...
          </div>
        ) : filteredPortfolios.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px] font-black">
                  <th className="pb-4 px-3">Title &amp; Client</th>
                  <th className="pb-4 px-3">Industry</th>
                  <th className="pb-4 px-3">Location</th>
                  <th className="pb-4 px-3">Featured</th>
                  <th className="pb-4 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-semibold">
                {filteredPortfolios.map((portfolio) => (
                  <tr key={portfolio.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-3">
                      <p className="text-white font-bold text-sm leading-snug line-clamp-1">{portfolio.title}</p>
                      <span className="text-[11px] text-purple-400 font-bold">{portfolio.client_name}</span>
                    </td>
                    <td className="py-4 px-3">
                      <span className="bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-lg text-[10px] font-bold">
                        {portfolio.industry}
                      </span>
                    </td>
                    <td className="py-4 px-3 text-slate-400">{portfolio.location}</td>
                    <td className="py-4 px-3">
                      {portfolio.featured ? (
                        <span className="inline-flex items-center gap-1 bg-orange-500/10 text-orange-400 border border-orange-500/30 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
                          <Star className="w-3 h-3 fill-orange-400" /> Featured
                        </span>
                      ) : (
                        <span className="text-slate-600 text-[10px]">Standard</span>
                      )}
                    </td>
                    <td className="py-4 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/portfolio/${portfolio.slug}`}
                          target="_blank"
                          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                          title="View Live Case Study"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => deletePortfolio(portfolio.id, portfolio.title)}
                          className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                          title="Delete Case Study"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-12 text-center space-y-3">
            <Briefcase className="w-10 h-10 text-slate-700 mx-auto" />
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">No portfolio case studies found</p>
            <Link
              href="/admin/portfolios/new"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500 text-white font-bold text-xs"
            >
              <Plus className="w-4 h-4" /> Add First Case Study
            </Link>
          </div>
        )}
      </div>

    </div>
  );
}
