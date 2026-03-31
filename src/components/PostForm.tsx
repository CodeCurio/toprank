"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TipTapEditor, { MenuBar } from "@/components/TipTapEditor";
import { UploadButton } from "@/utils/uploadthing";
import { 
  Globe, 
  FileText, 
  Type, 
  PenSquare, 
  Settings, 
  LayoutDashboard, 
  ChevronRight,
  Layout,
  Search,
  FileCheck,
  ListTree,
  Clock,
  User,
  ExternalLink,
  Lock,
  Eye,
  Calendar,
  Hash,
  Settings2,
  BarChart3,
  Edit2,
  Save,
  Plus,
  X,
  ChevronDown,
  ArrowRight,
  ChevronLeft
} from "lucide-react";
import Link from "next/link";

export interface PostData {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  content: string;
  status: "Draft" | "Published";
  categories: string;
  tags: string;
  createdAt?: string;
  allowComments?: boolean;
}

interface Taxonomy {
  id: string;
  name: string;
  slug: string;
}

export default function PostForm({ initialData }: { initialData?: PostData }) {
  const router = useRouter();
  
  // States
  const [sidebarTab, setSidebarTab] = useState<"post" | "seo">("post");
  const [showOutline, setShowOutline] = useState(false);
  const [isEditingSlug, setIsEditingSlug] = useState(false);
  const [tempSlug, setTempSlug] = useState(initialData?.slug || "");

  // Format initial date for datetime-local input
  const defaultDate = initialData?.createdAt 
    ? new Date(initialData.createdAt).toISOString().slice(0, 16)
    : "";

  const [formData, setFormData] = useState<PostData>({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    featuredImage: initialData?.featuredImage || "",
    content: initialData?.content || "",
    status: initialData?.status || "Draft",
    categories: initialData?.categories || "",
    tags: initialData?.tags || "",
    createdAt: defaultDate,
    allowComments: initialData?.allowComments ?? true,
  });

  const [loading, setLoading] = useState(false);
  
  // Taxonomies State
  const [dbCategories, setDbCategories] = useState<Taxonomy[]>([]);
  const [dbTags, setDbTags] = useState<Taxonomy[]>([]);
  
  // Array structures for UI
  const [selectedCats, setSelectedCats] = useState<string[]>(
    initialData?.categories ? initialData.categories.split(",").map(c => c.trim()).filter(Boolean) : []
  );
  
  const [tagInput, setTagInput] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>(
    initialData?.tags ? initialData.tags.split(",").map(t => t.trim()).filter(Boolean) : []
  );
  
  const [newCatInput, setNewCatInput] = useState("");
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Accordion State
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    summary: true,
    featuredImage: true,
    excerpt: false,
    taxonomy: true,
    tags: true,
    discussion: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const AccordionSection = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <div className={`mb-4 bg-white rounded-2xl border border-slate-200/50 shadow-sm transition-all duration-300 ${openSections[id] ? 'p-6' : 'px-6 py-1 hover:bg-slate-50'}`}>
      <button 
        type="button"
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between py-3 group"
      >
        <span className="text-[11px] font-black text-slate-500 group-hover:text-slate-900 uppercase tracking-[0.15em] transition-colors">{title}</span>
        <ChevronRight size={14} className={`text-slate-300 transition-transform duration-300 ${openSections[id] ? 'rotate-90' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${openSections[id] ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );

  // Next-Level CMS States
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [focusKeyword, setFocusKeyword] = useState("");

  // Extract headings for Outline
  const headings = formData.content.match(/<h([2-3])(.*?)>(.*?)<\/h\1>/gi)?.map(h => {
    const level = h.includes('<h2') ? 2 : 3;
    const text = h.replace(/<[^>]*>?/gm, '');
    return { level, text };
  }) || [];

  const [editor, setEditor] = useState<any>(null);

  // SEO Calculation
  const wordCount = formData.content.replace(/<[^>]*>?/gm, '').split(/\s+/).filter(w => w.length > 0).length;

  const keywordInTitle = focusKeyword && formData.title.toLowerCase().includes(focusKeyword.toLowerCase());
  const keywordInExcerpt = focusKeyword && formData.excerpt.toLowerCase().includes(focusKeyword.toLowerCase());
  const contentHasKeyword = focusKeyword && formData.content.toLowerCase().includes(focusKeyword.toLowerCase());
  const isGoodLength = wordCount >= 300;

  const isEditing = !!initialData?.id;

  let seoScore = 0;
  if (focusKeyword) {
    if (keywordInTitle) seoScore += 30;
    if (keywordInExcerpt) seoScore += 20;
    if (contentHasKeyword) seoScore += 20;
    if (isGoodLength) seoScore += 30;
  }

  useEffect(() => {
    fetch("/api/taxonomies")
      .then(res => res.json())
      .then(data => {
        setDbCategories(data.categories || []);
        setDbTags(data.tags || []);
      })
      .catch(console.error);
  }, []);

  // Update formData strings whenever array state changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, categories: selectedCats.join(", "), tags: selectedTags.join(", ") }));
  }, [selectedCats, selectedTags]);

  const toggleCategory = (catName: string) => {
    setSelectedCats(prev => 
      prev.includes(catName) ? prev.filter(c => c !== catName) : [...prev, catName]
    );
  };

  // Track changes for auto-save
  useEffect(() => {
    if (initialData?.id) {
       setHasUnsavedChanges(true);
    }
  }, [formData, selectedCats, selectedTags]);

  // Auto-save logic
  useEffect(() => {
    if (!hasUnsavedChanges || loading || isSaving || !initialData?.id) return;

    const autoSaveTimer = setTimeout(async () => {
      setIsSaving(true);
      try {
        const payload = {
          ...formData,
          categories: selectedCats,
          tags: selectedTags,
          createdAt: formData.createdAt ? new Date(formData.createdAt).toISOString() : undefined,
        };

        const res = await fetch(`/api/posts/${initialData.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          setLastSaved(new Date());
          setHasUnsavedChanges(false);
        }
      } catch (error) {
        console.error("Auto-save failed:", error);
      } finally {
        setIsSaving(false);
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(autoSaveTimer);
  }, [formData, selectedCats, selectedTags, hasUnsavedChanges, initialData, loading, isSaving]);

  const addNewCategory = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (!newCatInput.trim()) return;
    if (!selectedCats.includes(newCatInput.trim())) {
      setSelectedCats([...selectedCats, newCatInput.trim()]);
    }
    setNewCatInput("");
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = tagInput.replace(/,/g, "").trim();
      if (newTag && !selectedTags.includes(newTag)) {
         setSelectedTags([...selectedTags, newTag]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent, overrideStatus?: "Draft" | "Published") => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const isEditing = !!initialData?.id;
      const endpoint = isEditing ? `/api/posts/${initialData.id}` : "/api/posts";
      const method = isEditing ? "PUT" : "POST";

      const finalStatus = overrideStatus || formData.status;

      const payload = {
        ...formData,
        status: finalStatus,
        categories: selectedCats,
        tags: selectedTags,
        createdAt: formData.createdAt ? new Date(formData.createdAt).toISOString() : undefined,
      };

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save post");

      setLastSaved(new Date());
      setHasUnsavedChanges(false);
      alert(isEditing ? "Post updated successfully!" : "Post published successfully!");
      
      if (!isEditing) {
        const newPost = await res.json();
        router.push(`/admin/post/${newPost.id}`);
      } else {
        router.refresh();
      }
    } catch (err) {
      console.error(err);
      alert("Error saving post");
    } finally {
      setLoading(false);
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Top Bar (Professional CMS Header) */}
      <header className="h-[60px] bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-[60] px-4 flex items-center justify-between">
        <div className="flex items-center flex-1 min-w-0">
          <button 
            type="button"
            onClick={() => router.back()}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-md transition-colors mr-2"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="w-[1px] h-6 bg-slate-100 mx-2" />
          
          <div className="hidden xl:flex items-center justify-center flex-1">
             <MenuBar editor={editor} isFullscreen={isFullscreen} toggleFullscreen={() => setIsFullscreen(!isFullscreen)} />
          </div>

          <div className="flex items-center gap-3">
            {lastSaved && (
               <span className="hidden sm:inline text-[9px] font-black text-slate-300 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-full">
                 Saved {lastSaved.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
               </span>
            )}
            
            <button 
              type="button"
              className="px-4 py-2 text-[11px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 rounded-lg transition-all"
            >
              Preview
            </button>
            <button 
              type="button"
              onClick={(e) => {
                 setFormData({...formData, status: "Draft"});
                 handleSubmit(e, "Draft");
              }}
              disabled={loading}
              className="px-6 py-2 bg-slate-100 text-slate-600 text-[11px] font-black uppercase tracking-widest rounded-lg hover:bg-slate-200 transition-all disabled:opacity-50"
            >
              Save Draft
            </button>
            <button 
              type="button"
              onClick={(e) => {
                 setFormData({...formData, status: "Published"});
                 handleSubmit(e, "Published");
              }}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all disabled:opacity-50"
            >
              {loading ? "..." : isEditing ? "Update" : "Publish"}
            </button>

            <div className="w-[1px] h-6 bg-slate-100 mx-2" />

            <button 
              type="button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-2 rounded-lg transition-all ${isSidebarOpen ? 'bg-blue-50 text-blue-600 shadow-inner' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
            >
              <Settings2 size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Document Outline Popover */}
      {showOutline && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowOutline(false)}></div>
          <div className="fixed top-16 left-6 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 p-6 z-50 animate-in slide-in-from-left-4 duration-300 max-h-[80vh] overflow-y-auto custom-scrollbar">
             <div className="flex items-center justify-between mb-6">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Document Outline</h4>
             </div>
             <div className="space-y-4">
                {headings.length > 0 ? headings.map((h, i) => (
                  <div key={i} className={`flex items-start gap-2 ${h.level === 3 ? 'ml-4 opacity-70' : ''}`}>
                     <span className="text-[9px] font-black text-blue-500/40 mt-1 uppercase">H{h.level}</span>
                     <p className="text-xs font-bold text-slate-600 leading-tight hover:text-blue-600 transition-colors cursor-pointer">{h.text}</p>
                  </div>
                )) : (
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center py-10 border border-dashed border-slate-100 rounded-2xl">No headings yet</p>
                )}
             </div>
          </div>
        </>
      )}

      {/* Main Content Grid */}
      <div className={`grid grid-cols-1 transition-all duration-300 ${isSidebarOpen ? 'lg:grid-cols-[1fr_360px]' : 'grid-cols-1'} min-h-[calc(100vh-60px)] bg-slate-50`}>
        {/* Editor Canvas Container */}
        <div className="overflow-y-auto custom-scrollbar flex flex-col items-center py-12 px-6">
          <div className={`w-full transition-all duration-500 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-200/50 flex flex-col p-12 lg:p-24 ${isSidebarOpen ? 'max-w-4xl' : 'max-w-5xl'}`}>
             
             {/* Title Field (Perfect Alignment) */}
             <textarea
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="The Ultimate Branding Guide"
                className="w-full text-3xl lg:text-[40px] font-semibold text-slate-800 placeholder:text-slate-100 border-none focus:ring-0 resize-none bg-transparent p-0 leading-snug outline-none tracking-tight mb-6"
                rows={2}
              />

             {/* Metadata Info (Subtle) */}
              <div suppressHydrationWarning className="flex items-center gap-4 mb-10 text-[10px] font-bold text-slate-400/80 uppercase tracking-[0.2em] select-none">
                <span className="flex items-center gap-1.5 hover:text-slate-600 transition-colors cursor-default"><User size={10} strokeWidth={3} className="opacity-40" /> Sam Oktavianus</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                <span className="hover:text-slate-600 transition-colors cursor-default">{formData.createdAt ? new Date(String(formData.createdAt)).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' }) : "March 30, 2026"}</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full ml-auto" />
                {isSaving ? (
                  <span className="text-blue-500/60 animate-pulse font-black px-2 py-0.5 bg-blue-50 rounded-md">Saving...</span>
                ) : (
                  <span className="text-green-600 font-black px-2 py-0.5 bg-green-50 rounded-md">Changes Saved</span>
                )}
              </div>
 
              {/* TipTap Editor (Perfect Alignment) */}
              <div className="editor-container">
                 <TipTapEditor 
                    content={formData.content} 
                    onChange={(content) => setFormData({ ...formData, content })}
                    isFullscreen={isFullscreen}
                    toggleFullscreen={() => setIsFullscreen(!isFullscreen)}
                    isSidebarOpen={isSidebarOpen}
                    onEditorReady={setEditor}
                 />
              </div>
          </div>
          <div className="py-20 text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] select-none scale-75 opacity-50">
             - TopRank Creative Engine Pro 5.0 -
          </div>
        </div>

        {/* Sidebar Settings */}
        {isSidebarOpen && (
          <aside className="bg-slate-50 border-l border-slate-200/60 h-[calc(100vh-60px)] sticky top-[60px] overflow-y-auto custom-scrollbar animate-in slide-in-from-right duration-500 shadow-[-20px_0_40px_rgba(0,0,0,0.02)]">
             {/* Sidebar Tabs */}
             <div className="flex border-b border-slate-100 sticky top-0 bg-white/90 backdrop-blur-md z-10">
                <button 
                  onClick={() => setSidebarTab("post")}
                  className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all border-b-2 ${sidebarTab === "post" ? 'border-blue-600 text-slate-900 bg-slate-50/50' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                >
                  Post Settings
                </button>
                <button 
                  onClick={() => setSidebarTab("seo")}
                  className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all border-b-2 ${sidebarTab === "seo" ? 'border-blue-600 text-slate-900 bg-slate-50/50' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
                >
                  SEO Analyzer
                </button>
             </div>

             <div className="p-6 pb-20 space-y-0">
                {sidebarTab === "post" ? (
                  <div className="animate-in fade-in slide-in-from-right-1 duration-300">
                    <AccordionSection title="Summary" id="summary">
                       <div className="space-y-4">
                          <div className="flex items-center justify-between group border-b border-slate-50/50 pb-4">
                             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Visibility</span>
                             <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-1.5 cursor-help">
                                <Globe size={12} />
                                Public
                             </span>
                          </div>

                          <div className="flex items-center justify-between group border-b border-slate-50/50 pb-4">
                             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Publish</span>
                             <div className="relative">
                                <input 
                                   type="datetime-local" 
                                   className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                                <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest">
                                  {formData.createdAt ? "Scheduled" : "Immediately"}
                                </span>
                             </div>
                          </div>

                          <div className="flex items-center justify-between group border-b border-dashed border-slate-100 pb-4">
                             <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Post Format</span>
                             <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">Standard</span>
                          </div>

                          <button 
                            onClick={() => setFormData({...formData, status: formData.status === 'Published' ? 'Draft' : 'Published'})}
                            className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-[10px] font-black text-slate-600 uppercase tracking-widest transition-all active:scale-[0.98]"
                          >
                            Switch to {formData.status === 'Published' ? 'Draft' : 'Publish'}
                          </button>
                       </div>
                    </AccordionSection>

                    <AccordionSection title="Permalink & Slug" id="permalink">
                       <div className="space-y-3">
                          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                             <Globe size={14} className="text-slate-300" />
                             <span className="font-medium">/blog/</span>
                             {isEditingSlug ? (
                               <input
                                 type="text"
                                 value={formData.slug}
                                 onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                 onBlur={() => setIsEditingSlug(false)}
                                 className="bg-transparent border-none focus:ring-0 p-0 text-[11px] font-black text-blue-600 outline-none flex-1"
                                 autoFocus
                               />
                             ) : (
                               <span className="font-black text-slate-700 truncate flex-1">{formData.slug}</span>
                             )}
                             <button 
                               type="button"
                               onClick={() => setIsEditingSlug(!isEditingSlug)}
                               className="ml-auto text-[9px] font-black uppercase text-blue-600"
                             >
                               {isEditingSlug ? "Save" : "Edit"}
                             </button>
                          </div>
                          <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">The slug is part of the URL</p>
                       </div>
                    </AccordionSection>

                    <AccordionSection title="Featured Image" id="featuredImage">
                       {formData.featuredImage ? (
                          <div className="relative group rounded-xl overflow-hidden aspect-video border border-slate-100 shadow-sm">
                             <img src={formData.featuredImage} alt="Featured" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                             <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button onClick={() => setFormData({...formData, featuredImage: ""})} className="text-[10px] font-black text-white uppercase tracking-widest border border-white/40 px-4 py-2 rounded-lg hover:bg-white/10">Remove</button>
                             </div>
                          </div>
                       ) : (
                          <div className="border-2 border-dashed border-slate-100 rounded-xl p-8 bg-slate-50/50 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors">
                             <UploadButton
                                endpoint="imageUploader"
                              onClientUploadComplete={(res) => {
                                 if (res && res.length > 0) {
                                    setFormData({ ...formData, featuredImage: res[0].url });
                                 }
                              }}
                                appearance={{ 
                                  button: { background: "#1e293b", fontSize: "10px", fontWeight: "900", borderRadius: "8px", padding: "8px 16px" },
                                  allowedContent: { display: "none" }
                                }}
                             />
                             <p className="mt-3 text-[9px] font-bold text-slate-300 uppercase tracking-widest text-center">Recommended size:<br/>1200 x 630 px</p>
                          </div>
                       )}
                    </AccordionSection>

                    <AccordionSection title="Excerpt" id="excerpt">
                       <textarea 
                          value={formData.excerpt}
                          onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                          className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-4 text-[11px] font-medium text-slate-600 outline-none focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-slate-300"
                          placeholder="Write an excerpt (optional)"
                          rows={5}
                       />
                       <p className="mt-2 text-[9px] text-slate-400 font-bold uppercase tracking-widest ml-1">Manual excerpts are used in summaries</p>
                    </AccordionSection>

                    <AccordionSection title="Categories" id="taxonomy">
                       <div className="space-y-4">
                          <div className="space-y-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                             {dbCategories.map(cat => (
                                <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                                   <input 
                                      type="checkbox" 
                                      checked={selectedCats.includes(cat.name)}
                                      onChange={() => toggleCategory(cat.name)}
                                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-0"
                                   />
                                   <span className="text-[11px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-wide">{cat.name}</span>
                                </label>
                             ))}
                          </div>
                          <div className="flex gap-2">
                             <input 
                                type="text" 
                                value={newCatInput}
                                onChange={(e) => setNewCatInput(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                     e.preventDefault();
                                     addNewCategory(e as any);
                                  }
                                }}
                                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 outline-none focus:ring-1 focus:ring-blue-500"
                                placeholder="Add Category"
                             />
                             <button onClick={addNewCategory} className="p-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"><Plus size={14} /></button>
                          </div>
                       </div>
                    </AccordionSection>

                    <AccordionSection title="Tags" id="tags">
                       <div className="space-y-4">
                          <div className="flex flex-wrap gap-1.5">
                             {selectedTags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-blue-50 border border-blue-100 rounded text-[9px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-1.5">
                                   {tag}
                                   <button onClick={() => removeTag(tag)} className="hover:text-red-500 transition-colors">&times;</button>
                                </span>
                             ))}
                          </div>
                          <input 
                             type="text" 
                             value={tagInput}
                             onChange={(e) => setTagInput(e.target.value)}
                             onKeyDown={addTag}
                             className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 outline-none"
                             placeholder="Add Tag (comma separated)"
                          />
                       </div>
                    </AccordionSection>

                    <AccordionSection title="Discussion" id="discussion">
                       <label className="flex items-center gap-3 cursor-pointer group">
                          <input 
                             type="checkbox" 
                             checked={formData.allowComments}
                             onChange={(e) => setFormData({...formData, allowComments: e.target.checked})}
                             className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-0"
                          />
                          <span className="text-[11px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-wide">Allow Comments</span>
                       </label>
                    </AccordionSection>
                  </div>
                ) : (
                  <div className="animate-in fade-in slide-in-from-left-1 duration-300 py-6">
                     {/* SEO Score Circle */}
                     <div className="flex flex-col items-center py-6">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                           <svg className="w-full h-full -rotate-90">
                              <circle cx="64" cy="64" r="58" fill="transparent" stroke="#f1f5f9" strokeWidth="6" />
                              <circle 
                                cx="64" cy="64" r="58" 
                                fill="transparent" 
                                stroke={seoScore > 80 ? "#22c55e" : seoScore > 50 ? "#f97316" : "#ef4444"} 
                                strokeWidth="6" 
                                strokeDasharray={364}
                                strokeDashoffset={364 - (364 * seoScore) / 100}
                                strokeLinecap="round"
                                className="transition-all duration-1000"
                              />
                           </svg>
                           <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-4xl font-black italic tracking-tighter text-slate-900">{seoScore}</span>
                              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest -mt-1">SEO Score</span>
                           </div>
                        </div>
                     </div>

                     <div className="space-y-6">
                        <div className="space-y-3">
                           <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Focus Keyword</h4>
                           <input 
                             type="text" 
                             value={focusKeyword}
                             onChange={(e) => setFocusKeyword(e.target.value)}
                             className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-[11px] font-bold text-slate-700 outline-none focus:ring-1 focus:ring-blue-500/20"
                             placeholder="e.g. Content Strategy"
                           />
                        </div>

                        <div className="space-y-3 pt-6 border-t border-slate-100">
                           {[
                             { label: "Keyword in Title", met: keywordInTitle },
                             { label: "Keyword in Excerpt", met: keywordInExcerpt },
                             { label: "Keyword in Content", met: contentHasKeyword },
                             { label: "Minimum 300 words", met: isGoodLength }
                           ].map((item, i) => (
                             <div key={i} className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</span>
                                <span className={item.met ? 'text-green-500 font-black' : 'text-slate-300 font-black'}>{item.met ? "✓" : "✗"}</span>
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>
                )}
             </div>
          </aside>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(226, 232, 240, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(203, 213, 225, 1);
        }
      `}</style>
    </div>
  );
}
