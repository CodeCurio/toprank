"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trash2, MessageSquare, ExternalLink } from "lucide-react";

export default function CommentTable({ initialComments }: { initialComments: any[] }) {
  const [comments, setComments] = useState(initialComments);
  const [loading, setLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/comments/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete comment");
      
      setComments(comments.filter(c => c.id !== id));
      setDeleteConfirm(null);
      router.refresh();
    } catch (error) {
      alert("Error deleting comment.");
    } finally {
      setLoading(false);
    }
  };

  if (comments.length === 0) {
    return (
      <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
        <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-slate-900 mb-1">No comments found</h3>
        <p className="text-sm font-medium text-slate-500">Your readers haven't left any comments yet.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-100">
        <thead>
          <tr className="text-left text-[11px] font-black uppercase tracking-widest text-slate-400">
            <th className="px-6 py-4">Author</th>
            <th className="px-6 py-4">Message Preview</th>
            <th className="px-6 py-4">Article</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50 bg-white">
          {comments.map((comment) => (
            <tr key={comment.id} className="hover:bg-slate-50/50 transition-colors group">
              <td className="px-6 py-5 whitespace-nowrap">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold border border-blue-200 shrink-0">
                     {comment.name.charAt(0).toUpperCase()}
                   </div>
                   <div className="flex flex-col">
                     <span className="text-sm font-bold text-slate-900">{comment.name}</span>
                     <span className="text-[11px] text-slate-500 font-medium">{comment.email}</span>
                   </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed max-w-sm">
                  {comment.content}
                </p>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2 block">
                  {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric" }).format(new Date(comment.createdAt))}
                </span>
              </td>
              <td className="px-6 py-5">
                {comment.post ? (
                  <Link href={`/blog/${comment.post.slug}`} target="_blank" className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group/link p-2 bg-blue-50 rounded-lg hover:bg-blue-100 max-w-xs truncate">
                    <span className="truncate">{comment.post.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-50 group-hover/link:opacity-100 shrink-0" />
                  </Link>
                ) : (
                  <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-lg border border-red-100">Post Deleted</span>
                )}
              </td>
              <td className="px-6 py-5 text-right whitespace-nowrap">
                {deleteConfirm === comment.id ? (
                  <div className="flex justify-end items-center gap-2 animate-in slide-in-from-right-2 duration-300">
                    <span className="text-xs font-bold text-red-600 mr-2">Sure?</span>
                    <button disabled={loading} onClick={() => handleDelete(comment.id)} className="px-3 py-1.5 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-red-700 disabled:opacity-50">Confirm</button>
                    <button disabled={loading} onClick={() => setDeleteConfirm(null)} className="px-3 py-1.5 bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-slate-300 disabled:opacity-50">Cancel</button>
                  </div>
                ) : (
                  <button onClick={() => setDeleteConfirm(comment.id)} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
