"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import slugify from "slugify";
import { ArrowLeft, Save, Loader2, Settings2, Image as ImageIcon, Type, Clock, Tag } from "lucide-react";
import { useAdminTheme } from "@/components/admin/AdminThemeContext";
import { ImageUploader } from "@/components/admin/ImageUploader";
import dynamic from "next/dynamic";

// Load TipTap editor client-side only (no SSR)
const BlogRichEditor = dynamic(
  () => import("@/components/admin/BlogRichEditor"),
  { ssr: false, loading: () => <div className="h-96 rounded-2xl border border-slate-200 animate-pulse bg-slate-50" /> }
);

export default function EditBlogPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const { isLight } = useAdminTheme();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("Digital Marketing");
  const [readTime, setReadTime] = useState("5 min read");
  const [published, setPublished] = useState(true);
  
  const [fetchLoading, setFetchLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mobile sidebar toggle
  const [showSidebar, setShowSidebar] = useState(false);

  // Load existing blog data
  useEffect(() => {
    if (!id) return;
    const load = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const json = await res.json();
        if (!res.ok || json.error) throw new Error(json.error || "Failed to load blog");
        const blog = json.data;
        setTitle(blog.title || "");
        setSlug(blog.slug || "");
        setExcerpt(blog.excerpt || "");
        setContent(blog.content || "");
        setCoverImage(blog.cover_image || "");
        setCategory(blog.category || "Digital Marketing");
        setReadTime(blog.read_time || "5 min read");
        setPublished(Boolean(blog.published));
      } catch (err: any) {
        setError(err.message || "Failed to load blog post");
      } finally {
        setFetchLoading(false);
      }
    };
    load();
  }, [id]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!slug) setSlug(slugify(val, { lower: true, strict: true }));
    
    // Auto-resize
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return setError("Title is required.");
    if (!content || content === "<p></p>") return setError("Article content cannot be empty.");
    
    setSaving(true);
    setError(null);

    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: slug || slugify(title, { lower: true, strict: true }),
          excerpt,
          content,
          cover_image: coverImage,
          category,
          read_time: readTime,
          published,
        }),
      });

      const resData = await res.json();
      if (!res.ok || resData.error) {
        throw new Error(resData.error || "Failed to update blog post");
      }

      router.push("/admin/blogs");
    } catch (err: any) {
      setError(err.message || "Failed to update blog post");
    } finally {
      setSaving(false);
    }
  };

  const inputCls = `w-full px-3 py-2.5 rounded-lg text-sm font-medium focus:outline-none transition-colors border ${
    isLight
      ? "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-500 shadow-sm"
      : "bg-slate-900/50 border-slate-800 text-white placeholder-slate-600 focus:border-blue-500"
  }`;

  const labelCls = `block text-[11px] font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5 ${
    isLight ? "text-slate-600" : "text-slate-400"
  }`;

  if (fetchLoading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] text-slate-400 gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        <span className="text-sm font-bold uppercase tracking-wider">Loading Article...</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto flex flex-col h-full min-h-[calc(100vh-100px)]">

      {/* Top Navigation Bar */}
      <div className={`flex items-center justify-between pb-4 mb-4 border-b ${isLight ? "border-slate-200" : "border-slate-800"}`}>
        <div className="flex items-center gap-4">
          <Link
            href="/admin/blogs"
            className={`p-2 rounded-lg transition-colors ${
              isLight ? "hover:bg-slate-100 text-slate-500 hover:text-slate-900" : "hover:bg-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className={`text-sm font-bold tracking-wide ${isLight ? "text-slate-900" : "text-white"}`}>
            Editing Post
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowSidebar(!showSidebar)}
            className={`lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors border ${
              isLight ? "bg-white border-slate-200 text-slate-700 hover:bg-slate-50" : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Settings2 className="w-4 h-4" /> Settings
          </button>

          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {saving ? (
              <><Loader2 className="w-4 h-4 animate-spin" /><span>Saving...</span></>
            ) : (
              <><Save className="w-4 h-4" /><span>Save Changes</span></>
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-sm font-bold flex items-center gap-2">
          {error}
        </div>
      )}

      {/* Main Layout: Editor & Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        
        {/* Left Area: WordPress-style Title & Editor */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          
          {/* Big Title Input */}
          <div className="px-2">
            <textarea
              required
              rows={1}
              value={title}
              onChange={handleTitleChange}
              placeholder="Add post title..."
              className={`w-full bg-transparent text-3xl sm:text-4xl font-black tracking-tight placeholder-opacity-40 border-none focus:outline-none focus:ring-0 resize-none overflow-hidden ${
                isLight ? "text-slate-900 placeholder-slate-400" : "text-white placeholder-slate-600"
              }`}
            />
          </div>

          {/* TipTap Rich Editor */}
          <div className="flex-1 bg-transparent">
            <BlogRichEditor
              value={content}
              onChange={setContent}
              placeholder="Start writing or paste your content here... All formatting will be preserved automatically."
            />
          </div>
        </div>

        {/* Right Area: Settings Sidebar */}
        <div className={`w-full lg:w-[340px] shrink-0 space-y-6 lg:block ${showSidebar ? "block" : "hidden"}`}>
          
          <div className={`p-5 rounded-2xl border shadow-sm ${
            isLight ? "bg-white border-slate-200" : "bg-slate-900 border-slate-800"
          }`}>
            <h3 className={`text-sm font-black mb-5 flex items-center gap-2 ${isLight ? "text-slate-800" : "text-slate-100"}`}>
              <Settings2 className="w-4 h-4" /> Post Settings
            </h3>
            
            <div className="space-y-5">
              
              {/* Category */}
              <div>
                <label className={labelCls}><Tag className="w-3.5 h-3.5" /> Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={inputCls}
                >
                  <option value="SEO & Rankings">SEO &amp; Rankings</option>
                  <option value="Local SEO & GMB">Local SEO &amp; GMB</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Paid Advertising">Paid Advertising</option>
                </select>
              </div>

              {/* URL Slug */}
              <div>
                <label className={labelCls}>URL Permalink</label>
                <div className={`flex items-center gap-1 border rounded-lg px-3 py-2.5 transition-colors focus-within:border-blue-500 ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-slate-900/50 border-slate-800"
                }`}>
                  <span className={`text-[11px] font-mono whitespace-nowrap ${isLight ? "text-slate-400" : "text-slate-500"}`}>/blog/</span>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="my-post-url"
                    className="w-full bg-transparent text-sm font-mono text-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Read Time */}
              <div>
                <label className={labelCls}><Clock className="w-3.5 h-3.5" /> Read Time</label>
                <input
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  placeholder="5 min read"
                  className={inputCls}
                />
              </div>

            </div>
          </div>

          <div className={`p-5 rounded-2xl border shadow-sm ${
            isLight ? "bg-white border-slate-200" : "bg-slate-900 border-slate-800"
          }`}>
             <h3 className={`text-sm font-black mb-5 flex items-center gap-2 ${isLight ? "text-slate-800" : "text-slate-100"}`}>
              <ImageIcon className="w-4 h-4" /> Media & SEO
            </h3>
            
            <div className="space-y-5">
              {/* Cover Image */}
              <div>
                <ImageUploader
                  value={coverImage}
                  onChange={setCoverImage}
                  label="Featured Thumbnail"
                  helperText="Appears on blog grid & social links"
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className={labelCls}><Type className="w-3.5 h-3.5" /> Short Excerpt</label>
                <textarea
                  rows={4}
                  required
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="A short hook for SEO description..."
                  className={`${inputCls} resize-none`}
                />
              </div>
            </div>
          </div>

          {/* Publish Settings */}
          <div className={`p-4 rounded-2xl border shadow-sm ${
            isLight ? "bg-slate-50 border-slate-200" : "bg-slate-900/50 border-slate-800"
          }`}>
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 bg-slate-100 border-slate-300 accent-blue-600"
              />
              <div className="flex flex-col">
                <span className={`text-sm font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Publish on Website</span>
                <span className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>Uncheck to save as Draft</span>
              </div>
            </label>
          </div>

        </div>
      </div>
    </form>
  );
}
