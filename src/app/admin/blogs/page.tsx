"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Sparkles,
  RefreshCw,
  Database,
} from "lucide-react";

export default function AdminBlogsPage() {
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

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title?.toLowerCase().includes(search.toLowerCase()) ||
      b.category?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-2">
            <FileText className="w-3.5 h-3.5" /> Content Management
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Blog Posts Manager</h1>
          <p className="text-xs text-slate-400 font-medium">Create, publish, edit and delete articles for your website</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {isFallback && (
            <button
              onClick={handleSeedSample}
              disabled={seeding}
              className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-slate-700 transition-colors disabled:opacity-50"
              title="Save default blog articles into database"
            >
              <Database className="w-4 h-4 text-blue-400" />
              <span>{seeding ? "Seeding..." : "Seed Database"}</span>
            </button>
          )}

          <Link
            href="/admin/blogs/new"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4" /> Add New Blog Post
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title or category..."
          className="w-full pl-11 pr-4 py-3.5 bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-2xl text-sm font-bold text-white placeholder-slate-500 focus:outline-none transition-colors"
        />
      </div>

      {/* Blogs List Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 overflow-hidden">
        {loading ? (
          <div className="py-12 text-center text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-blue-400" />
            <span>Loading Blog Posts...</span>
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px] font-black">
                  <th className="pb-4 px-3">Title &amp; Slug</th>
                  <th className="pb-4 px-3">Category</th>
                  <th className="pb-4 px-3">Read Time</th>
                  <th className="pb-4 px-3">Status</th>
                  <th className="pb-4 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-semibold">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-3">
                      <p className="text-white font-bold text-sm leading-snug line-clamp-1">{blog.title}</p>
                      <span className="text-[11px] text-slate-500 font-mono">/blog/{blog.slug}</span>
                    </td>
                    <td className="py-4 px-3">
                      <span className="bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-1 rounded-lg text-[10px] font-bold">
                        {blog.category || "General"}
                      </span>
                    </td>
                    <td className="py-4 px-3 text-slate-400">{blog.read_time || "5 min read"}</td>
                    <td className="py-4 px-3">
                      <button
                        onClick={() => togglePublishStatus(blog.id, blog.published)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider transition-colors ${
                          blog.published
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20"
                        }`}
                      >
                        {blog.published ? (
                          <>
                            <CheckCircle2 className="w-3 h-3" /> Published
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3 h-3" /> Draft
                          </>
                        )}
                      </button>
                    </td>
                    <td className="py-4 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${blog.slug}`}
                          target="_blank"
                          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                          title="View on Live Site"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => deleteBlog(blog.id, blog.title)}
                          className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                          title="Delete Post"
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
            <FileText className="w-10 h-10 text-slate-700 mx-auto" />
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">No blog posts found</p>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleSeedSample}
                disabled={seeding}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
              >
                <Database className="w-4 h-4 text-blue-400" />
                <span>Seed Sample Posts</span>
              </button>
              <Link
                href="/admin/blogs/new"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs"
              >
                <Plus className="w-4 h-4" /> Create First Blog Post
              </Link>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
