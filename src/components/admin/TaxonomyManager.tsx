"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, X, Check } from "lucide-react";

type Taxonomy = { id: string; name: string; slug: string; _count?: { posts: number } };

export function TaxonomyManager({ initialCategories, initialTags }: { initialCategories: Taxonomy[], initialTags: Taxonomy[] }) {
  const [categories, setCategories] = useState(initialCategories);
  const [tags, setTags] = useState(initialTags);
  const [newCat, setNewCat] = useState("");
  const [newTag, setNewTag] = useState("");
  const [editingCat, setEditingCat] = useState<string | null>(null);
  const [editingTag, setEditingTag] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [loading, setLoading] = useState(false);

  // --- Categories ---
  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCat.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCat.trim() })
      });
      if (!res.ok) throw new Error(await res.text());
      const added = await res.json();
      setCategories([...categories, { ...added, _count: { posts: 0 } }]);
      setNewCat("");
    } catch (err: any) {
      alert(err.message || "Failed to add category");
    } finally {
      setLoading(false);
    }
  };

  const handleEditCategory = async (id: string) => {
    if (!editName.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/categories/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editName.trim() })
      });
      if (!res.ok) throw new Error(await res.text());
      const updated = await res.json();
      setCategories(categories.map(c => c.id === id ? { ...c, ...updated } : c));
      setEditingCat(null);
    } catch (err: any) {
      alert(err.message || "Failed to update category");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/categories/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete category");
      setCategories(categories.filter(c => c.id !== id));
    } catch (err: any) {
      alert(err.message || "Failed to delete category");
    } finally {
      setLoading(false);
    }
  };

  // --- Tags ---
  const handleAddTag = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTag.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newTag.trim() })
      });
      if (!res.ok) throw new Error(await res.text());
      const added = await res.json();
      setTags([...tags, { ...added, _count: { posts: 0 } }]);
      setNewTag("");
    } catch (err: any) {
      alert(err.message || "Failed to add tag");
    } finally {
      setLoading(false);
    }
  };

  const handleEditTag = async (id: string) => {
    if (!editName.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/tags/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editName.trim() })
      });
      if (!res.ok) throw new Error(await res.text());
      const updated = await res.json();
      setTags(tags.map(t => t.id === id ? { ...t, ...updated } : t));
      setEditingTag(null);
    } catch (err: any) {
      alert(err.message || "Failed to update tag");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTag = async (id: string) => {
    if (!confirm("Are you sure you want to delete this tag?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/tags/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete tag");
      setTags(tags.filter(t => t.id !== id));
    } catch (err: any) {
      alert(err.message || "Failed to delete tag");
    } finally {
      setLoading(false);
    }
  };

  const renderTable = (
    items: Taxonomy[], 
    type: 'category' | 'tag',
    editingId: string | null,
    setEditingId: (id: string | null) => void,
    handleEdit: (id: string) => void,
    handleDelete: (id: string) => void
  ) => (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 border-b border-slate-100">
          <tr>
            <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest w-1/2">Name & Slug</th>
            <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-center">Count</th>
            <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {items.map(item => (
            <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
              <td className="px-6 py-4">
                {editingId === item.id ? (
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      value={editName} 
                      onChange={e => setEditName(e.target.value)}
                      className="text-sm font-bold text-slate-700 px-3 py-1.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-full"
                      autoFocus
                    />
                  </div>
                ) : (
                  <div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</div>
                    <div className="text-[10px] font-medium text-slate-400 mt-1">/{item.slug}</div>
                  </div>
                )}
              </td>
              <td className="px-6 py-4 text-center">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-[10px] font-black text-slate-600">
                  {item._count?.posts || 0}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                {editingId === item.id ? (
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => setEditingId(null)} className="p-1.5 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"><X size={14} /></button>
                    <button onClick={() => handleEdit(item.id)} disabled={loading} className="p-1.5 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"><Check size={14} /></button>
                  </div>
                ) : (
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => { setEditingId(item.id); setEditName(item.name); }} 
                      className="p-1.5 text-slate-400 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)} 
                      disabled={loading}
                      className="p-1.5 text-slate-400 hover:text-red-600 bg-slate-50 hover:bg-red-50 rounded-md transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td colSpan={3} className="px-6 py-8 text-center text-sm font-medium text-slate-400">No active {type === 'category' ? 'categories' : 'tags'} found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {/* Categories Column */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Post Categories</h2>
        </div>
        
        <form onSubmit={handleAddCategory} className="flex gap-3">
          <input 
            type="text" 
            value={newCat} 
            onChange={(e) => setNewCat(e.target.value)} 
            placeholder="Add new category" 
            className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button type="submit" disabled={loading} className="px-5 bg-blue-600 text-white rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center min-w-[100px]">
            {loading && newCat ? "..." : <><Plus size={16} className="mr-1" /> Add</>}
          </button>
        </form>

        {renderTable(categories, 'category', editingCat, setEditingCat, handleEditCategory, handleDeleteCategory)}
      </div>

      {/* Tags Column */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Keywords & Tags</h2>
        </div>
        
        <form onSubmit={handleAddTag} className="flex gap-3">
          <input 
            type="text" 
            value={newTag} 
            onChange={(e) => setNewTag(e.target.value)} 
            placeholder="Add new tag" 
            className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
          />
          <button type="submit" disabled={loading} className="px-5 bg-emerald-600 text-white rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-xl transition-all disabled:opacity-50 flex items-center justify-center min-w-[100px]">
            {loading && newTag ? "..." : <><Plus size={16} className="mr-1" /> Add</>}
          </button>
        </form>

        {renderTable(tags, 'tag', editingTag, setEditingTag, handleEditTag, handleDeleteTag)}
      </div>
    </div>
  );
}
