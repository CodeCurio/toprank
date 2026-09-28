"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Briefcase,
  Inbox,
  Plus,
  ArrowRight,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { useAdminTheme } from "@/components/admin/AdminThemeContext";
import { ThemeToggle } from "@/components/admin/ThemeToggle";

export default function AdminDashboardPage() {
  const { isLight } = useAdminTheme();
  const [stats, setStats] = useState({
    blogsCount: 0,
    portfoliosCount: 0,
    leadsCount: 0,
    newLeadsCount: 0,
  });
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [blogsRes, portfoliosRes, leadsRes] = await Promise.allSettled([
        fetch("/api/blogs").then((r) => r.json()),
        fetch("/api/portfolios").then((r) => r.json()),
        fetch("/api/leads").then((r) => r.json()),
      ]);

      const blogsData = blogsRes.status === "fulfilled" ? blogsRes.value?.data || [] : [];
      const portfoliosData = portfoliosRes.status === "fulfilled" ? portfoliosRes.value?.data || [] : [];
      const leadsData = leadsRes.status === "fulfilled" ? leadsRes.value?.data || [] : [];

      const newLeads = leadsData.filter((l: any) => l.status === "New");

      setStats({
        blogsCount: blogsData.length,
        portfoliosCount: portfoliosData.length,
        leadsCount: leadsData.length,
        newLeadsCount: newLeads.length,
      });

      setRecentLeads(leadsData.slice(0, 5));
    } catch (err) {
      console.error("Error loading admin stats:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Welcome Banner */}
      <div className={`border rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl transition-colors ${
        isLight
          ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border-blue-500/30 text-white shadow-blue-500/10"
          : "bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 border-slate-800 text-white"
      }`}>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 fill-white" /> TopRank Control Center
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Welcome to TopRank Admin
          </h1>
          <p className="text-white/80 text-xs sm:text-sm mt-1 font-medium max-w-xl leading-relaxed">
            Manage live blog publications, case studies, verified metrics, and inbound lead enquiries in real-time.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <Link
            href="/admin/blogs/new"
            className="px-4 py-2.5 rounded-xl bg-white text-blue-600 hover:bg-white/90 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
          >
            <Plus className="w-4 h-4" /> New Blog Post
          </Link>

          <Link
            href="/admin/portfolios/new"
            className="px-4 py-2.5 rounded-xl bg-slate-950/40 hover:bg-slate-950/60 text-white border border-white/20 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all"
          >
            <Plus className="w-4 h-4" /> New Case Study
          </Link>
        </div>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Total Leads */}
        <div className={`p-6 rounded-2xl border transition-all ${
          isLight
            ? "bg-white border-slate-200/90 shadow-sm hover:shadow-md"
            : "bg-slate-900/90 border-slate-800"
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${
              isLight ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            }`}>
              <Inbox className="w-6 h-6" />
            </div>
            {stats.newLeadsCount > 0 && (
              <span className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full animate-pulse shadow-xs">
                {stats.newLeadsCount} New
              </span>
            )}
          </div>
          <p className={`text-3xl font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            {loading ? "..." : stats.leadsCount}
          </p>
          <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            Total Enquiries Received
          </p>
        </div>

        {/* Metric 2: Published Blogs */}
        <div className={`p-6 rounded-2xl border transition-all ${
          isLight
            ? "bg-white border-slate-200/90 shadow-sm hover:shadow-md"
            : "bg-slate-900/90 border-slate-800"
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${
              isLight ? "bg-blue-50 text-blue-600 border border-blue-100" : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
            }`}>
              <FileText className="w-6 h-6" />
            </div>
            <Link href="/admin/blogs" className="text-[11px] font-bold text-blue-600 hover:underline">
              Manage →
            </Link>
          </div>
          <p className={`text-3xl font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            {loading ? "..." : stats.blogsCount}
          </p>
          <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            Published Blog Posts
          </p>
        </div>

        {/* Metric 3: Portfolio Case Studies */}
        <div className={`p-6 rounded-2xl border transition-all ${
          isLight
            ? "bg-white border-slate-200/90 shadow-sm hover:shadow-md"
            : "bg-slate-900/90 border-slate-800"
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${
              isLight ? "bg-purple-50 text-purple-600 border border-purple-100" : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
            }`}>
              <Briefcase className="w-6 h-6" />
            </div>
            <Link href="/admin/portfolios" className="text-[11px] font-bold text-purple-600 hover:underline">
              Manage →
            </Link>
          </div>
          <p className={`text-3xl font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            {loading ? "..." : stats.portfoliosCount}
          </p>
          <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            Portfolio Case Studies
          </p>
        </div>

        {/* Metric 4: System Engine */}
        <div className={`p-6 rounded-2xl border transition-all ${
          isLight
            ? "bg-white border-slate-200/90 shadow-sm hover:shadow-md"
            : "bg-slate-900/90 border-slate-800"
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${
              isLight ? "bg-amber-50 text-amber-600 border border-amber-100" : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
            }`}>
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
              Live
            </span>
          </div>
          <p className={`text-3xl font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            Active
          </p>
          <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            Real-Time Cloud Engine
          </p>
        </div>

      </div>

      {/* Recent Contact Enquiries Table */}
      <div className={`border rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm transition-all ${
        isLight ? "bg-white border-slate-200/90" : "bg-slate-900/90 border-slate-800"
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`text-lg font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
              Recent Client Enquiries
            </h3>
            <p className={`text-xs font-medium ${isLight ? "text-slate-500" : "text-slate-400"}`}>
              Submissions from contact form &amp; lead funnels
            </p>
          </div>

          <Link
            href="/admin/leads"
            className="flex items-center text-xs font-black text-blue-600 hover:text-blue-700 gap-1"
          >
            <span>View All Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentLeads.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className={`border-b text-[10px] font-black uppercase tracking-wider ${
                  isLight ? "border-slate-200 text-slate-500 bg-slate-50/50" : "border-slate-800 text-slate-400"
                }`}>
                  <th className="py-3 px-3">Date</th>
                  <th className="py-3 px-3">Client Name</th>
                  <th className="py-3 px-3">Phone</th>
                  <th className="py-3 px-3">Service Requested</th>
                  <th className="py-3 px-3">City</th>
                  <th className="py-3 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className={`divide-y font-semibold ${isLight ? "divide-slate-100" : "divide-slate-800/60"}`}>
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className={`transition-colors ${isLight ? "hover:bg-slate-50" : "hover:bg-slate-800/40"}`}>
                    <td className={`py-3.5 px-3 whitespace-nowrap ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                      {new Date(lead.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className={`py-3.5 px-3 font-bold ${isLight ? "text-slate-900" : "text-white"}`}>{lead.name}</td>
                    <td className="py-3.5 px-3 text-blue-600 font-bold">{lead.phone}</td>
                    <td className={`py-3.5 px-3 ${isLight ? "text-slate-700" : "text-slate-300"}`}>{lead.service_requested || "General Enquiry"}</td>
                    <td className={`py-3.5 px-3 ${isLight ? "text-slate-500" : "text-slate-400"}`}>{lead.city || "Lucknow"}</td>
                    <td className="py-3.5 px-3 text-right">
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                        lead.status === "New"
                          ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 font-black"
                          : isLight
                          ? "bg-slate-100 text-slate-600 border border-slate-200"
                          : "bg-slate-800 text-slate-400 border border-slate-700"
                      }`}>
                        {lead.status || "New"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className={`p-8 text-center rounded-2xl border ${
            isLight ? "bg-slate-50 border-slate-200" : "bg-slate-950/50 border-slate-800/80"
          }`}>
            <Inbox className={`w-8 h-8 mx-auto mb-2 ${isLight ? "text-slate-400" : "text-slate-600"}`} />
            <p className={`text-xs font-bold ${isLight ? "text-slate-700" : "text-slate-400"}`}>No leads submitted yet</p>
            <p className={`text-[11px] mt-0.5 ${isLight ? "text-slate-500" : "text-slate-600"}`}>
              Enquiries submitted via website contact form will appear here live
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
