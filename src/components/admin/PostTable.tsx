"use client";
// Force rebuild cache
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function PostTable({ initialPosts }: { initialPosts: any[] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<{id: string, title: string} | null>(null);
  const [editForm, setEditForm] = useState({ title: "", slug: "", status: "Draft" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const executeDelete = async () => {
    if (!deleteConfirm) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/posts/${deleteConfirm.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setPosts(posts.filter(p => p.id !== deleteConfirm.id));
      setDeleteConfirm(null);
      router.refresh();
    } catch (error) {
      alert("Error deleting post");
    } finally {
      setLoading(false);
    }
  };

  const executeDuplicate = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/posts/${id}/duplicate`, { method: "POST" });
      if (!res.ok) throw new Error("Failed to duplicate");
      const duplicatedPost = await res.json();
      setPosts([duplicatedPost, ...posts]);
      router.refresh();
    } catch (error) {
      alert("Error duplicating post: " + (error as any).message);
    } finally {
      setLoading(false);
    }
  };

  const startQuickEdit = (post: any) => {
    setEditingId(post.id);
    setEditForm({ title: post.title, slug: post.slug, status: post.status });
  };

  const handleQuickEditSave = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      if (!res.ok) throw new Error("Failed to update");
      
      const updatedPost = await res.json();
      setPosts(posts.map(p => p.id === id ? { ...p, ...updatedPost } : p));
      setEditingId(null);
      router.refresh();
    } catch (error) {
      alert("Error saving quick edit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {posts.map((post) => {
              const isEditing = editingId === post.id;
              
              if (isEditing) {
                return (
                  <tr key={`edit-${post.id}`} className="bg-blue-50/50">
                    <td className="px-6 py-4" colSpan={4}>
                      <div className="space-y-4">
                        <div className="font-bold text-sm text-gray-700 mb-2">Quick Edit</div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           <div>
                             <label className="block text-xs font-semibold text-gray-500 mb-1">Title</label>
                             <input type="text" value={editForm.title} onChange={e => setEditForm({...editForm, title: e.target.value})} className="w-full border-gray-300 rounded-md shadow-sm p-1.5 text-sm bg-white text-gray-900 border" />
                           </div>
                           <div>
                             <label className="block text-xs font-semibold text-gray-500 mb-1">Slug</label>
                             <input type="text" value={editForm.slug} onChange={e => setEditForm({...editForm, slug: e.target.value})} className="w-full border-gray-300 rounded-md shadow-sm p-1.5 text-sm bg-white text-gray-900 border" />
                           </div>
                           <div>
                             <label className="block text-xs font-semibold text-gray-500 mb-1">Status</label>
                             <select value={editForm.status} onChange={e => setEditForm({...editForm, status: e.target.value})} className="w-full border-gray-300 rounded-md shadow-sm p-1.5 text-sm bg-white text-gray-900 border">
                               <option value="Draft">Draft</option>
                               <option value="Published">Published</option>
                             </select>
                           </div>
                        </div>
                        <div className="flex items-center gap-2 pt-2">
                           <button onClick={() => setEditingId(null)} className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
                           <button onClick={() => handleQuickEditSave(post.id)} disabled={loading} className="px-4 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50">
                             {loading ? "Saving..." : "Update"}
                           </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              }

              return (
                <tr key={post.id} className="hover:bg-gray-50 transition group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {post.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">/{post.slug}</div>
                    
                    {/* Inline Actions (visible on hover) */}
                    <div className="flex items-center gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium">
                      <Link href={`/admin/post/${post.id}`} className="text-blue-600 hover:text-blue-800">Edit Full</Link>
                      <button onClick={() => startQuickEdit(post)} className="text-slate-600 hover:text-slate-900">Quick Edit</button>
                      <button onClick={() => executeDuplicate(post.id)} disabled={loading} className="text-emerald-500 hover:text-emerald-700">Duplicate</button>
                      <button onClick={(e) => { e.preventDefault(); setDeleteConfirm({id: post.id, title: post.title}); }} className="text-red-500 hover:text-red-700">Trash</button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                        post.status === "Published"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-amber-100 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="font-semibold text-gray-700">
                      {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(post.createdAt))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      href={`/admin/post/${post.id}`}
                      className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-sm text-gray-500 border-t border-gray-100">
                  <p className="mb-4">No posts found.</p>
                  <Link href="/admin/post/new" className="text-blue-600 font-bold hover:underline">
                    Create your first blog post
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Custom Delete Confirmation Modal */}
        {deleteConfirm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-sm animate-in zoom-in-95 duration-200">
              <div className="p-6">
                <h3 className="text-lg font-black text-slate-900 mb-2">Delete Post?</h3>
                <p className="text-sm text-slate-500 font-medium">
                  Are you sure you want to delete <span className="font-bold text-slate-700">"{deleteConfirm.title}"</span>? This action cannot be undone.
                </p>
              </div>
              <div className="bg-slate-50 px-6 py-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button 
                  onClick={() => setDeleteConfirm(null)} 
                  disabled={loading}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={executeDelete} 
                  disabled={loading}
                  className="px-4 py-2 text-xs font-bold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors disabled:opacity-50 shadow-sm shadow-red-500/20"
                >
                  {loading ? "Deleting..." : "Yes, delete post"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
