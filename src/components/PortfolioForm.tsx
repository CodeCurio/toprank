"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TipTapEditor, { MenuBar } from "@/components/TipTapEditor";
import { UploadButton } from "@/utils/uploadthing";
import { 
  Globe, ChevronRight, Plus, History, Cloud, FileText, Star, Settings2
} from "lucide-react";

export interface PortfolioData {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  content: string;
  status: "Draft" | "Published";
  category: string;
  clientName: string;
  liveUrl: string;
  results: string;
  technologies: string;
  createdAt?: string;
}

const COMMON_TECH = [
  "React", "Next.js", "Tailwind CSS", "Node.js", "WordPress", 
  "Shopify", "SEO", "Local SEO", "Google Ads", "Figma"
];

export default function PortfolioForm({ initialData }: { initialData?: PortfolioData }) {
  const router = useRouter();
  
  const [sidebarTab, setSidebarTab] = useState<"post" | "seo">("post");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const defaultDate = initialData?.createdAt 
    ? new Date(initialData.createdAt).toISOString().slice(0, 16)
    : "";

  const [formData, setFormData] = useState<PortfolioData>({
    title: initialData?.title || "New Portfolio Project",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    featuredImage: initialData?.featuredImage || "",
    content: initialData?.content || "",
    status: initialData?.status || "Draft",
    category: initialData?.category || "Web Design",
    clientName: initialData?.clientName || "",
    liveUrl: initialData?.liveUrl || "",
    results: initialData?.results || "",
    technologies: initialData?.technologies || "",
    createdAt: defaultDate,
  });

  const [loading, setLoading] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    summary: true,
    featuredImage: true,
    excerpt: false,
    projectDetails: true,
    technologies: true
  });

  const [editor, setEditor] = useState<any>(null);

  // Manage Technologies Checkboxes
  const [selectedTech, setSelectedTech] = useState<string[]>(
    initialData?.technologies ? initialData.technologies.split(",").map(t => t.trim()).filter(Boolean) : []
  );

  useEffect(() => {
    setFormData(prev => ({ ...prev, technologies: selectedTech.join(", ") }));
  }, [selectedTech]);

  const toggleTech = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

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

  const handleSubmit = async (e: React.FormEvent, overrideStatus?: "Draft" | "Published") => {
    if (e) e.preventDefault();
    setLoading(true);
    setIsSaving(true);

    try {
      const isEditing = !!initialData?.id;
      const endpoint = isEditing ? `/api/portfolio/${initialData.id}` : "/api/portfolio";
      const method = isEditing ? "PUT" : "POST";
      const finalStatus = overrideStatus || formData.status;

      const payload = {
        ...formData,
        status: finalStatus,
        createdAt: formData.createdAt ? new Date(formData.createdAt).toISOString() : undefined,
      };

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save project");

      setLastSaved(new Date());
      alert(isEditing ? "Project updated successfully!" : "Project published successfully!");
      
      if (!isEditing) {
        const newProject = await res.json();
        router.push(`/admin/portfolio/${newProject.id}`);
      } else {
        router.refresh();
      }
    } catch (err) {
      console.error(err);
      alert("Error saving project");
    } finally {
      setLoading(false);
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      
      {/* Header */}
      <header className="bg-white border-b border-[#c7c7c7] sticky top-0 z-50 flex flex-col">
        <div className="flex items-center justify-between px-4 py-2">
          
          <div className="flex items-start gap-2">
             <button onClick={() => router.back()} className="mt-1 p-2 hover:bg-[#f0f4f9] rounded-full text-[#444746]" title="Back to Admin">
                <FileText size={24} className="text-[#1a73e8]" fill="#e8f0fe" />
             </button>
             
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
                <div className="flex items-center gap-1 -ml-1 mt-0.5 text-[14px] text-[#444746]">
                   <span className="px-2 py-1 text-xs uppercase font-bold tracking-widest text-[#1a73e8]">Portfolio Editor</span>
                </div>
             </div>
          </div>

          <div className="flex items-center gap-4">
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
                  {!!initialData?.id ? "Update" : "Publish"}
                </button>
             </div>
             
             <button 
               onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
               className={`ml-2 p-2.5 rounded-full transition-colors ${isSidebarOpen ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'hover:bg-[#f0f4f9] text-[#444746]'}`}
             >
               <Settings2 size={20} />
             </button>
          </div>
        </div>

        <div className="py-2 flex items-center justify-center border-t border-[#f0f4f9]">
           <MenuBar editor={editor} />
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Editor */}
        <div className="flex-1 overflow-y-auto custom-scrollbar flex justify-center py-8">
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

        {/* Sidebar */}
        {isSidebarOpen && (
           <aside className="w-[340px] bg-white border-l border-[#c7c7c7] flex flex-col h-[calc(100vh-130px)] shadow-[-5px_0_15px_rgba(0,0,0,0.03)] z-40">
              <div className="flex border-b border-[#c7c7c7]">
                 <button className={`flex-1 py-3.5 text-[14px] font-medium transition-colors border-b-[3px] border-[#1a73e8] text-[#1a73e8]`}>
                   Project Settings
                 </button>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-2">
                 
                 <AccordionSection title="Summary" id="summary">
                    <div className="space-y-4 pt-2">
                       <div className="flex items-center justify-between text-[13px]">
                          <span className="text-[#444746]">Visibility</span>
                          <span className="font-medium text-[#1a73e8] flex items-center gap-1"><Globe size={14} /> Public</span>
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
                          </div>
                       )}
                    </div>
                 </AccordionSection>

                 <AccordionSection title="Project Details" id="projectDetails">
                    <div className="pt-2 space-y-4">
                       <div>
                          <label className="block text-[12px] font-bold text-[#444746] mb-1">Category</label>
                          <select 
                            value={formData.category} 
                            onChange={(e) => setFormData({...formData, category: e.target.value})}
                            className="w-full px-3 py-2 border border-[#c7c7c7] rounded-[4px] text-[13px] outline-none focus:border-[#1a73e8]"
                          >
                            <option value="Web Design">Web Design</option>
                            <option value="Web Development">Web Development</option>
                            <option value="SEO">SEO</option>
                            <option value="Local SEO">Local SEO</option>
                            <option value="Performance Marketing">Performance Marketing</option>
                            <option value="Branding">Branding</option>
                          </select>
                       </div>
                       <div>
                          <label className="block text-[12px] font-bold text-[#444746] mb-1">Client Name</label>
                          <input 
                             type="text" 
                             value={formData.clientName}
                             onChange={(e) => setFormData({...formData, clientName: e.target.value})}
                             className="w-full px-3 py-2 border border-[#c7c7c7] rounded-[4px] text-[13px] outline-none focus:border-[#1a73e8]"
                          />
                       </div>
                       <div>
                          <label className="block text-[12px] font-bold text-[#444746] mb-1">Live URL (Optional)</label>
                          <input 
                             type="url" 
                             value={formData.liveUrl}
                             onChange={(e) => setFormData({...formData, liveUrl: e.target.value})}
                             placeholder="https://..."
                             className="w-full px-3 py-2 border border-[#c7c7c7] rounded-[4px] text-[13px] outline-none focus:border-[#1a73e8]"
                          />
                       </div>
                       <div>
                          <label className="block text-[12px] font-bold text-[#444746] mb-1">Key Result/Stat</label>
                          <input 
                             type="text" 
                             value={formData.results}
                             onChange={(e) => setFormData({...formData, results: e.target.value})}
                             placeholder="e.g. +150% Traffic"
                             className="w-full px-3 py-2 border border-[#c7c7c7] rounded-[4px] text-[13px] outline-none focus:border-[#1a73e8]"
                          />
                       </div>
                    </div>
                 </AccordionSection>

                 <AccordionSection title="Technologies Used" id="technologies">
                    <div className="pt-2 space-y-2">
                       <div className="grid grid-cols-2 gap-2">
                          {COMMON_TECH.map(tech => (
                             <label key={tech} className="flex items-center gap-2 cursor-pointer bg-[#f8f9fa] p-2 border border-[#c7c7c7] rounded-[4px] hover:bg-[#f0f4f9]">
                                <input 
                                   type="checkbox" 
                                   checked={selectedTech.includes(tech)}
                                   onChange={() => toggleTech(tech)}
                                   className="w-3.5 h-3.5 rounded-sm border-[#c7c7c7] text-[#1a73e8] focus:ring-0"
                                />
                                <span className="text-[12px] text-[#1f1f1f]">{tech}</span>
                             </label>
                          ))}
                       </div>
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

              </div>
           </aside>
        )}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #c7c7c7; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #a0a0a0; }
        .editor-container .ProseMirror p.is-editor-empty:first-child::before {
          color: #adb5bd; content: attr(data-placeholder); float: left; height: 0; pointer-events: none;
        }
      `}</style>
    </div>
  );
}
