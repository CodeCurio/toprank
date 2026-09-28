"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Plus,
  Search,
  Trash2,
  ExternalLink,
  Sparkles,
  RefreshCw,
  Pencil,
} from "lucide-react";
import { useAdminTheme } from "@/components/admin/AdminThemeContext";

export default function AdminBlogsPage() {
  const { isLight } = useAdminTheme();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs");
      const json = await res.json();
      setBlogs(json.data || []);
      setIsFallback(Boolean(json.isFallback));
    } catch (err) {
      console.error("Error fetching blogs from API:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSeedSample = async () => {
    if (!confirm("Do you want to seed default high-quality blog posts into the database?")) return;
    setSeeding(true);
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "seed_sample" }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Failed to seed sample blogs");
      alert("Sample blog posts seeded successfully!");
      fetchBlogs();
    } catch (err: any) {
      alert(err.message || "Failed to seed blogs");
    } finally {
      setSeeding(false);
    }
  };

  const togglePublishStatus = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !currentStatus }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to update publish status");
      }

      setBlogs(blogs.map((b) => (b.id === id ? { ...b, published: !currentStatus } : b)));
    } catch (err: any) {
      alert("Failed to update status: " + err.message);
    }
  };

  const deleteBlog = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to delete blog post");
      }

      setBlogs(blogs.filter((b) => b.id !== id));
    } catch (err: any) {
      alert("Failed to delete blog: " + err.message);
    }
  };

  const filteredBlogs = blogs.filter((b) =>
    b.title?.toLowerCase().includes(search.toLowerCase()) ||
    b.category?.toLowerCase().includes(search.toLowerCase()) ||
    b.excerpt?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header Bar */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl border shadow-sm transition-all ${
        isLight ? "bg-white border-slate-200/90 text-slate-900" : "bg-slate-900 border-slate-800 text-white shadow-xl"
      }`}>
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-xs font-black uppercase tracking-widest mb-2">
            <FileText className="w-3.5 h-3.5" /> Editorial Engine
          </div>
          <h1 className={`text-2xl font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            Blog Posts Manager
          </h1>
          <p className={`text-xs font-medium ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            Create and publish SEO-optimized articles, strategies &amp; industry guides
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchBlogs}
            disabled={loading}
            className={`p-3 rounded-xl border transition-all ${
              isLight
                ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                : "bg-slate-800 text-slate-300 hover:text-white border-slate-700"
            }`}
            title="Refresh list"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
          
          <Link
            href="/admin/blogs/new"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4" /> New Article
          </Link>
        </div>
      </div>

      {/* Fallback Notice */}
      {isFallback && (
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-700 flex items-center justify-between gap-4 text-xs font-bold">
          <span>Viewing local fallback articles. Import them to database for live management:</span>
          <button
            onClick={handleSeedSample}
            disabled={seeding}
            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-black transition-colors flex items-center gap-1 shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{seeding ? "Importing..." : "Seed to Database"}</span>
          </button>
        </div>
      )}

      {/* Search Bar */}
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? "text-slate-400" : "text-slate-500"}`} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title, category, or keyword..."
          className={`w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm font-bold focus:outline-none transition-colors border ${
            isLight
              ? "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 shadow-xs"
              : "bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-blue-500"
          }`}
        />
      </div>

      {/* Blogs Table */}
      <div className={`border rounded-3xl p-6 overflow-hidden shadow-sm transition-all ${
        isLight ? "bg-white border-slate-200/90 text-slate-900" : "bg-slate-900/90 border-slate-800 text-white shadow-xl"
      }`}>
        {loading ? (
          <div className="py-12 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
            Loading Articles...
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className={`border-b text-[10px] font-black uppercase tracking-wider ${
                  isLight ? "border-slate-200 text-slate-500 bg-slate-50/50" : "border-slate-800 text-slate-400"
                }`}>
                  <th className="pb-4 px-3">Article Title</th>
                  <th className="pb-4 px-3">Category</th>
                  <th className="pb-4 px-3">Read Time</th>
                  <th className="pb-4 px-3">Status</th>
                  <th className="pb-4 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y font-semibold ${isLight ? "divide-slate-100" : "divide-slate-800/60"}`}>
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className={`transition-colors group ${isLight ? "hover:bg-slate-50" : "hover:bg-slate-800/40"}`}>
                    <td className="py-4 px-3">
                      <div className="flex items-center gap-3">
                        {blog.cover_image && (
                          <div className={`w-10 h-10 rounded-xl overflow-hidden shrink-0 border ${
                            isLight ? "bg-slate-100 border-slate-200" : "bg-slate-800 border-slate-700"
                          }`}>
                            <img src={blog.cover_image} alt={blog.title} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div>
                          <p className={`font-bold text-sm line-clamp-1 transition-colors ${
                            isLight ? "text-slate-900 group-hover:text-blue-600" : "text-white group-hover:text-blue-300"
                          }`}>
                            {blog.title}
                          </p>
                          <span className={`text-[11px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                            /blog/{blog.slug}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-3">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${
                        isLight ? "bg-slate-100 border-slate-200 text-slate-700" : "bg-slate-800 border-slate-700 text-slate-300"
                      }`}>
                        {blog.category}
                      </span>
                    </td>
                    <td className={`py-4 px-3 ${isLight ? "text-slate-600" : "text-slate-400"}`}>{blog.read_time || "5 min read"}</td>
                    <td className="py-4 px-3">
                      <button
                        onClick={() => togglePublishStatus(blog.id, blog.published)}
                        className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider transition-all ${
                          blog.published
                            ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                            : isLight
                            ? "bg-slate-100 text-slate-500 border border-slate-200"
                            : "bg-slate-800 text-slate-500 border border-slate-700"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </button>
                    </td>
                    <td className="py-4 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/blogs/${blog.id}`}
                          className={`p-2 rounded-xl border transition-colors ${
                            isLight
                              ? "bg-slate-100 text-slate-600 hover:text-blue-600 hover:bg-blue-50 border-slate-200"
                              : "bg-slate-800 text-slate-400 hover:text-blue-400 border-slate-700"
                          }`}
                          title="Edit Article"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className={`p-2 rounded-xl border transition-colors ${
                            isLight
                              ? "bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200"
                              : "bg-slate-800 text-slate-400 hover:text-white border-slate-700"
                          }`}
                          title="View Live Article"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => deleteBlog(blog.id, blog.title)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                          title="Delete Article"
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
          <div className="py-12 text-center text-slate-500 space-y-2">
            <FileText className="w-8 h-8 mx-auto opacity-50" />
            <p className="text-xs font-bold">No articles found</p>
          </div>
        )}
      </div>

    </div>
  );
}
