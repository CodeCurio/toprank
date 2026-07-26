"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import slugify from "slugify";
import { ArrowLeft, Save, Sparkles, Image as ImageIcon, Tag, CheckCircle2 } from "lucide-react";

export default function NewBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("Digital Marketing");
  const [readTime, setReadTime] = useState("5 min read");
  const [published, setPublished] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    setSlug(slugify(val, { lower: true, strict: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: insertError } = await supabase
        .from("blogs")
        .insert([
          {
            title,
            slug: slug || slugify(title, { lower: true, strict: true }),
            excerpt,
            content,
            cover_image: coverImage,
            category,
            read_time: readTime,
            published,
          },
        ])
        .select();

      if (insertError) throw insertError;

      router.push("/admin/blogs");
    } catch (err: any) {
      setError(err.message || "Failed to create blog post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin/blogs"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blogs List
        </Link>
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">New Article</span>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <h1 className="text-2xl font-black text-white tracking-tight mb-6">Create New Blog Post</h1>

        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
              Post Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={handleTitleChange}
              placeholder="e.g., 10 Proven SEO Strategies for Local Lucknow Businesses in 2026"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
              URL Slug
            </label>
            <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
              <span className="text-xs text-slate-500 font-mono">/blog/</span>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="local-seo-strategies-2026"
                className="w-full bg-transparent text-sm font-mono text-blue-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Category & Read Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm font-bold text-white focus:outline-none transition-colors"
              >
                <option value="SEO & Rankings">SEO &amp; Rankings</option>
                <option value="Local SEO & GMB">Local SEO &amp; GMB</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Web Development">Web Development</option>
                <option value="Paid Advertising">Paid Advertising</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                Read Time
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="5 min read"
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
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
              placeholder="https://images.unsplash.com/... or /images/blog-cover.jpg"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm font-bold text-white placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
              Short Summary / Excerpt
            </label>
            <textarea
              rows={3}
              required
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Provide a concise 2-sentence hook for search engine previews..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm font-medium text-white placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Full Article Content (HTML / Markdown) */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
              Article Content (HTML supported)
            </label>
            <textarea
              rows={12}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="<p>Write your detailed blog post content here...</p> <h3>Key Takeaways</h3> <p>...</p>"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl text-sm font-mono text-slate-200 placeholder-slate-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Publish Toggle */}
          <div className="flex items-center gap-3 p-4 bg-slate-950 border border-slate-800 rounded-xl">
            <input
              type="checkbox"
              id="published"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700"
            />
            <label htmlFor="published" className="text-xs font-black text-white cursor-pointer select-none">
              Publish Immediately to Website
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              <span>{loading ? "Saving..." : "Save & Publish Post"}</span>
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}
