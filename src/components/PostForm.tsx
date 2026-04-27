"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TipTapEditor, { MenuBar } from "@/components/TipTapEditor";
import { UploadButton } from "@/utils/uploadthing";
import { 
  Globe, ChevronRight, Settings2, Plus, ChevronLeft, ArrowLeft,
  FileText, Star, MessageSquare, History, Cloud
} from "lucide-react";

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
  const [isEditingSlug, setIsEditingSlug] = useState(false);

  const defaultDate = initialData?.createdAt 
    ? new Date(initialData.createdAt).toISOString().slice(0, 16)
    : "";

  const [formData, setFormData] = useState<PostData>({
    title: initialData?.title || "Untitled document",
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
    <div className={`border-b border-slate-200 transition-all duration-300 ${openSections[id] ? 'pb-4' : ''}`}>
      <button 
        type="button"
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between py-4 group"
      >
        <span className="text-[13px] font-bold text-slate-800">{title}</span>
        <ChevronRight size={16} className={`text-slate-400 transition-transform duration-300 ${openSections[id] ? 'rotate-90' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${openSections[id] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-1 pb-2">
           {children}
        </div>
      </div>
    </div>
  );

  const [focusKeyword, setFocusKeyword] = useState("");
  const [editor, setEditor] = useState<any>(null);

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

  useEffect(() => {
    setFormData(prev => ({ ...prev, categories: selectedCats.join(", "), tags: selectedTags.join(", ") }));
  }, [selectedCats, selectedTags]);

  useEffect(() => {
    if (initialData?.id) {
       setHasUnsavedChanges(true);
    }
  }, [formData, selectedCats, selectedTags]);

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
    }, 30000);
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
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      
      {/* Header - Google Docs Style */}
      <header className="bg-white border-b border-[#c7c7c7] sticky top-0 z-50 flex flex-col">
        {/* Top Row: Title, Menus, Actions */}
        <div className="flex items-center justify-between px-4 py-2">
          
          <div className="flex items-start gap-2">
             {/* Back Button / Logo Area */}
             <button onClick={() => router.back()} className="mt-1 p-2 hover:bg-[#f0f4f9] rounded-full text-[#444746]" title="Back to Admin">
                <FileText size={24} className="text-[#1a73e8]" fill="#e8f0fe" />
             </button>
             
             {/* Title & Menus */}
             <div className="flex flex-col">
                <div className="flex items-center gap-2">
                   <input
                     type="text"
                     value={formData.title}
                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                     className="text-[18px] text-[#1f1f1f] border border-transparent hover:border-[#c7c7c7] focus:border-[#1a73e8] focus:bg-white bg-transparent rounded-sm px-1 py-0.5 outline-none w-[300px] truncate transition-all"
                   />
                   <button className="text-[#444746] hover:bg-[#f0f4f9] p-1 rounded-full"><Star size={18} /></button>
                   {isSaving ? (
                     <div className="flex items-center gap-1 text-[13px] text-[#444746] ml-2 opacity-70">
                        <Cloud size={16} /> Saving...
                     </div>
                   ) : lastSaved ? (
                     <div className="flex items-center gap-1 text-[13px] text-[#444746] ml-2 hover:underline cursor-pointer opacity-70">
                        <Cloud size={16} /> Saved to database
                     </div>
                   ) : null}
                </div>

                {/* Mock Menus */}
                <div className="flex items-center gap-1 -ml-1 mt-0.5 text-[14px] text-[#444746]">
                   {['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Extensions', 'Help'].map(menu => (
                      <button key={menu} className="px-2 py-1 hover:bg-[#f0f4f9] rounded-sm cursor-pointer">{menu}</button>
                   ))}
                </div>
             </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
             <button className="p-2 hover:bg-[#f0f4f9] rounded-full text-[#444746]" title="Version history">
                <History size={20} />
             </button>
             <button className="p-2 hover:bg-[#f0f4f9] rounded-full text-[#444746]" title="Open comments">
                <MessageSquare size={20} />
             </button>
             
             {/* WordPress Specific Save/Publish */}
             <div className="flex items-center bg-[#c2e7ff] rounded-full overflow-hidden">
                <button 
                  onClick={(e) => {
                     setFormData({...formData, status: "Draft"});
                     handleSubmit(e, "Draft");
                  }}
                  className="px-6 py-2.5 text-[14px] font-medium text-[#001d35] hover:bg-[#b3d4eb] transition-colors border-r border-[#a0c2d9]"
                >
                  Save Draft
                </button>
                <button 
                  onClick={(e) => {
                     setFormData({...formData, status: "Published"});
                     handleSubmit(e, "Published");
                  }}
                  className="px-6 py-2.5 text-[14px] font-medium text-[#001d35] hover:bg-[#b3d4eb] transition-colors"
                >
                  {isEditing ? "Update" : "Publish"}
                </button>
             </div>
             
             {/* Toggle WP Sidebar */}
             <button 
               onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
               className={`ml-2 p-2.5 rounded-full transition-colors ${isSidebarOpen ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'hover:bg-[#f0f4f9] text-[#444746]'}`}
               title="WordPress Settings"
             >
               <Settings2 size={20} />
             </button>
          </div>
        </div>

        {/* Bottom Row: Toolbars */}
        <div className="py-2 flex items-center justify-center border-t border-[#f0f4f9]">
           <MenuBar editor={editor} />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Editor Canvas Container (Gray Background) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar flex justify-center py-8">
           {/* A4 Sheet */}
           <div className="bg-white border border-[#c7c7c7] shadow-sm w-[816px] min-h-[1056px] mx-4 mb-20">
              <div className="px-[96px] py-[96px] h-full flex flex-col">
                 <TipTapEditor 
                    content={formData.content} 
                    onChange={(content) => setFormData({ ...formData, content })}
                    onEditorReady={setEditor}
                 />
              </div>
           </div>
        </div>

        {/* WordPress Settings Sidebar */}
        {isSidebarOpen && (
           <aside className="w-[340px] bg-white border-l border-[#c7c7c7] flex flex-col h-[calc(100vh-130px)] shadow-[-5px_0_15px_rgba(0,0,0,0.03)] z-40">
              {/* Sidebar Tabs */}
              <div className="flex border-b border-[#c7c7c7]">
                 <button 
                   onClick={() => setSidebarTab("post")}
                   className={`flex-1 py-3.5 text-[14px] font-medium transition-colors border-b-[3px] ${sidebarTab === "post" ? 'border-[#1a73e8] text-[#1a73e8]' : 'border-transparent text-[#444746] hover:bg-[#f0f4f9]'}`}
                 >
                   Post Settings
                 </button>
                 <button 
                   onClick={() => setSidebarTab("seo")}
                   className={`flex-1 py-3.5 text-[14px] font-medium transition-colors border-b-[3px] ${sidebarTab === "seo" ? 'border-[#1a73e8] text-[#1a73e8]' : 'border-transparent text-[#444746] hover:bg-[#f0f4f9]'}`}
                 >
                   SEO Analyzer
                 </button>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                 {sidebarTab === "post" ? (
                   <div className="space-y-2">
                     <AccordionSection title="Summary" id="summary">
                        <div className="space-y-4 pt-2">
                           <div className="flex items-center justify-between text-[13px]">
                              <span className="text-[#444746]">Visibility</span>
                              <span className="font-medium text-[#1a73e8] flex items-center gap-1"><Globe size={14} /> Public</span>
                           </div>

                           <div className="flex items-center justify-between text-[13px]">
                              <span className="text-[#444746]">Publish</span>
                              <div className="relative font-medium text-[#1a73e8]">
                                 <input 
                                    type="datetime-local" 
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    value={formData.createdAt}
                                    onChange={(e) => setFormData({...formData, createdAt: e.target.value})}
                                 />
                                 {formData.createdAt ? "Scheduled" : "Immediately"}
                              </div>
                           </div>

                           <div className="flex items-center justify-between text-[13px]">
                              <span className="text-[#444746]">URL Slug</span>
                              <span className="font-medium text-[#1f1f1f] truncate max-w-[150px]">{formData.slug || "auto-generated"}</span>
                           </div>
                           
                           <input
                             type="text"
                             value={formData.slug}
                             onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                             placeholder="custom-slug-here"
                             className="w-full px-3 py-2 border border-[#c7c7c7] rounded-[4px] text-[13px] outline-none focus:border-[#1a73e8]"
                           />
                        </div>
                     </AccordionSection>

                     <AccordionSection title="Featured Image" id="featuredImage">
                        <div className="pt-2">
                           {formData.featuredImage ? (
                              <div className="relative group rounded-[4px] overflow-hidden aspect-video border border-[#c7c7c7]">
                                 <img src={formData.featuredImage} alt="Featured" className="w-full h-full object-cover" />
                                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button onClick={() => setFormData({...formData, featuredImage: ""})} className="text-[13px] font-medium text-white border border-white px-4 py-2 rounded-[4px] hover:bg-white/20">Remove Image</button>
                                 </div>
                              </div>
                           ) : (
                              <div className="border border-dashed border-[#c7c7c7] rounded-[4px] p-6 bg-[#f8f9fa] flex flex-col items-center justify-center">
                                 <UploadButton
                                    endpoint="imageUploader"
                                    onClientUploadComplete={(res) => {
                                       if (res && res.length > 0) {
                                          setFormData({ ...formData, featuredImage: res[0].url });
                                       }
                                    }}
                                    appearance={{ 
                                      button: { background: "#1a73e8", fontSize: "13px", fontWeight: "500", borderRadius: "4px", padding: "8px 16px", color: "white" },
                                      allowedContent: { display: "none" }
                                    }}
                                 />
                                 <p className="mt-3 text-[11px] text-[#444746] text-center">Recommended: 1200x630px</p>
                              </div>
                           )}
                        </div>
                     </AccordionSection>

                     <AccordionSection title="Excerpt" id="excerpt">
                        <div className="pt-2">
                           <textarea 
                              value={formData.excerpt}
                              onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                              className="w-full border border-[#c7c7c7] rounded-[4px] p-3 text-[13px] text-[#1f1f1f] outline-none focus:border-[#1a73e8] resize-y min-h-[100px]"
                              placeholder="Write a brief excerpt..."
                           />
                        </div>
                     </AccordionSection>

                     <AccordionSection title="Categories" id="taxonomy">
                        <div className="pt-2 space-y-4">
                           <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar border border-[#c7c7c7] rounded-[4px] p-2 bg-[#f8f9fa]">
                              {dbCategories.map(cat => (
                                 <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                                    <input 
                                       type="checkbox" 
                                       checked={selectedCats.includes(cat.name)}
                                       onChange={() => toggleCategory(cat.name)}
                                       className="w-4 h-4 rounded-sm border-[#c7c7c7] text-[#1a73e8] focus:ring-0"
                                    />
                                    <span className="text-[13px] text-[#1f1f1f]">{cat.name}</span>
                                 </label>
                              ))}
                              {dbCategories.length === 0 && <span className="text-[12px] text-[#444746]">No categories found.</span>}
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
                                 className="flex-1 px-3 py-2 border border-[#c7c7c7] rounded-[4px] text-[13px] outline-none focus:border-[#1a73e8]"
                                 placeholder="New category..."
                              />
                              <button onClick={addNewCategory} className="px-3 border border-[#c7c7c7] rounded-[4px] hover:bg-[#f8f9fa]"><Plus size={16} /></button>
                           </div>
                        </div>
                     </AccordionSection>

                     <AccordionSection title="Tags" id="tags">
                        <div className="pt-2 space-y-3">
                           <div className="flex flex-wrap gap-1.5">
                              {selectedTags.map(tag => (
                                 <span key={tag} className="px-2 py-1 bg-[#f0f4f9] border border-[#c7c7c7] rounded-full text-[12px] text-[#444746] flex items-center gap-1">
                                    {tag}
                                    <button onClick={() => removeTag(tag)} className="hover:text-red-500 font-bold">&times;</button>
                                 </span>
                              ))}
                           </div>
                           <input 
                              type="text" 
                              value={tagInput}
                              onChange={(e) => setTagInput(e.target.value)}
                              onKeyDown={addTag}
                              className="w-full px-3 py-2 border border-[#c7c7c7] rounded-[4px] text-[13px] outline-none focus:border-[#1a73e8]"
                              placeholder="Add tags (press Enter)"
                           />
                        </div>
                     </AccordionSection>

                     <AccordionSection title="Discussion" id="discussion">
                        <div className="pt-2">
                           <label className="flex items-center gap-2 cursor-pointer">
                              <input 
                                 type="checkbox" 
                                 checked={formData.allowComments}
                                 onChange={(e) => setFormData({...formData, allowComments: e.target.checked})}
                                 className="w-4 h-4 rounded-sm border-[#c7c7c7] text-[#1a73e8] focus:ring-0"
                              />
                              <span className="text-[13px] text-[#1f1f1f]">Allow Comments</span>
                           </label>
                        </div>
                     </AccordionSection>
                   </div>
                 ) : (
                   <div className="space-y-6">
                      <div className="p-6 bg-[#f0f4f9] rounded-[8px] flex flex-col items-center">
                         <div className="text-[48px] font-bold text-[#1a73e8] leading-none mb-2">{seoScore}</div>
                         <div className="text-[13px] font-medium text-[#444746]">SEO Score / 100</div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-[13px] font-bold text-[#1f1f1f]">Focus Keyword</label>
                         <input 
                           type="text" 
                           value={focusKeyword}
                           onChange={(e) => setFocusKeyword(e.target.value)}
                           className="w-full border border-[#c7c7c7] rounded-[4px] p-2.5 text-[13px] outline-none focus:border-[#1a73e8]"
                           placeholder="Enter focus keyword"
                         />
                      </div>

                      <div className="space-y-3 pt-4 border-t border-[#c7c7c7]">
                         {[
                           { label: "Keyword in Title", met: keywordInTitle },
                           { label: "Keyword in Excerpt", met: keywordInExcerpt },
                           { label: "Keyword in Content", met: contentHasKeyword },
                           { label: "Minimum 300 words", met: isGoodLength }
                         ].map((item, i) => (
                           <div key={i} className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${item.met ? 'bg-[#188038]' : 'bg-[#c7c7c7]'}`}>
                                 {item.met ? "✓" : "!"}
                              </div>
                              <span className={`text-[13px] ${item.met ? 'text-[#1f1f1f]' : 'text-[#444746]'}`}>{item.label}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                 )}
              </div>
           </aside>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c7c7c7;
          border-radius: 4px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a0a0a0;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        
        .editor-container .ProseMirror p.is-editor-empty:first-child::before {
          color: #adb5bd;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
