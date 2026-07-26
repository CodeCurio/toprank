"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import {
  FileText,
  Briefcase,
  Inbox,
  Plus,
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function AdminDashboardPage() {
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
      // Fetch Blogs Count
      const { count: blogsCount } = await supabase
        .from("blogs")
        .select("*", { count: "exact", head: true });

      // Fetch Portfolios Count
      const { count: portfoliosCount } = await supabase
        .from("portfolios")
        .select("*", { count: "exact", head: true });

      // Fetch Total Leads Count
      const { count: leadsCount } = await supabase
        .from("leads")
        .select("*", { count: "exact", head: true });

      // Fetch New Leads Count
      const { count: newLeadsCount } = await supabase
        .from("leads")
        .select("*", { count: "exact", head: true })
        .eq("status", "New");

      // Fetch Recent 5 Leads
      const { data: leads } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);

      setStats({
        blogsCount: blogsCount || 0,
        portfoliosCount: portfoliosCount || 0,
        leadsCount: leadsCount || 0,
        newLeadsCount: newLeadsCount || 0,
      });

      setRecentLeads(leads || []);
    } catch (err) {
      console.error("Error loading admin stats:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 border border-slate-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-black uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 fill-orange-400" /> TopRank Portal
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400">Admin Control Center</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 font-medium max-w-xl">
            Manage your live blog publications, dynamic portfolio case studies, and client contact enquiries in real-time.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 relative z-10">
          <Link
            href="/admin/blogs/new"
            className="px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-md shadow-orange-500/20"
          >
            <Plus className="w-4 h-4" /> New Blog Post
          </Link>

          <Link
            href="/admin/portfolios/new"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
          >
            <Plus className="w-4 h-4" /> New Portfolio
          </Link>
        </div>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Total Leads */}
        <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
              <Inbox className="w-6 h-6" />
            </div>
            {stats.newLeadsCount > 0 && (
              <span className="bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full animate-pulse">
                {stats.newLeadsCount} New
              </span>
            )}
          </div>
          <p className="text-3xl font-black text-white tracking-tight">{loading ? "..." : stats.leadsCount}</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Total Enquiries Received</p>
        </div>

        {/* Metric 2: Published Blogs */}
        <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl">
              <FileText className="w-6 h-6" />
            </div>
            <Link href="/admin/blogs" className="text-[11px] font-bold text-blue-400 hover:underline">
              Manage →
            </Link>
          </div>
          <p className="text-3xl font-black text-white tracking-tight">{loading ? "..." : stats.blogsCount}</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Published Blog Posts</p>
        </div>

        {/* Metric 3: Portfolio Case Studies */}
        <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <Link href="/admin/portfolios" className="text-[11px] font-bold text-purple-400 hover:underline">
              Manage →
            </Link>
          </div>
          <p className="text-3xl font-black text-white tracking-tight">{loading ? "..." : stats.portfoliosCount}</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Portfolio Case Studies</p>
        </div>

        {/* Metric 4: System Status */}
        <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
              Live
            </span>
          </div>
          <p className="text-3xl font-black text-white tracking-tight">Active</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Supabase Real-Time Engine</p>
        </div>

      </div>

      {/* Recent Contact Enquiries Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-black text-white tracking-tight">Recent Client Enquiries</h3>
            <p className="text-xs text-slate-400 font-medium">Submissions from contact form &amp; lead funnels</p>
          </div>

          <Link
            href="/admin/leads"
            className="flex items-center text-xs font-black text-blue-400 hover:text-blue-300 gap-1"
          >
            <span>View All Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentLeads.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px] font-black">
                  <th className="pb-3 px-3">Date</th>
                  <th className="pb-3 px-3">Client Name</th>
                  <th className="pb-3 px-3">Phone</th>
                  <th className="pb-3 px-3">Service Requested</th>
                  <th className="pb-3 px-3">City</th>
                  <th className="pb-3 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-semibold">
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 text-slate-400 whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-3 px-3 text-white font-bold">{lead.name}</td>
                    <td className="py-3 px-3 text-blue-400 font-bold">{lead.phone}</td>
                    <td className="py-3 px-3 text-slate-300">{lead.service_requested || "General Enquiry"}</td>
                    <td className="py-3 px-3 text-slate-400">{lead.city || "Lucknow"}</td>
                    <td className="py-3 px-3 text-right">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                        lead.status === "New"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
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
          <div className="p-8 text-center bg-slate-950/50 rounded-2xl border border-slate-800/80">
            <Inbox className="w-8 h-8 text-slate-600 mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-400">No leads submitted yet</p>
            <p className="text-[11px] text-slate-600 mt-0.5">Enquiries submitted via website contact form will appear here live</p>
          </div>
        )}
      </div>

    </div>
  );
}
