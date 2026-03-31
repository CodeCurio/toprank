"use client";

import { useState } from "react";
import { MessageSquare, Send, User } from "lucide-react";

export interface Comment {
  id: string;
  name: string;
  content: string;
  createdAt: Date;
}

export default function CommentsSection({ postId, initialComments }: { postId: string, initialComments: Comment[] }) {
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, content, postId })
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();
      setComments([ { ...data, createdAt: new Date(data.createdAt) }, ...comments]);
      setName("");
      setEmail("");
      setContent("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || "Failed to post comment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-16 pt-12 border-t border-slate-200/50">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2.5 rounded-xl shadow-md border-2 border-blue-100">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight">Discussion</h3>
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-black tracking-widest border border-blue-200 shadow-sm ml-2">
            {comments.length}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {/* Elite Comment Form */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-bl-full pointer-events-none opacity-60"></div>
          
          <h4 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2 relative z-10">
            Join the conversation
          </h4>
          
          {success && (
            <div className="mb-6 bg-emerald-50 text-emerald-700 border border-emerald-200 p-4 rounded-xl text-sm font-bold flex items-center gap-2 relative z-10 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Insight posted successfully!
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-50 text-red-700 border border-red-200 p-4 rounded-xl text-sm font-bold relative z-10 shadow-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2.5">Display Name</label>
                <input required value={name} onChange={e => setName(e.target.value)} type="text" placeholder="John Doe" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2.5">Email (Private)</label>
                <input required value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="john@example.com" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-[15px] font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-2.5">Your Perspective</label>
              <textarea required value={content} onChange={e => setContent(e.target.value)} rows={4} placeholder="Share your insights..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-[15px] font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all resize-none shadow-inner" />
            </div>
            <div className="flex justify-end pt-2">
              <button disabled={loading} type="submit" className="w-full md:w-auto bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 disabled:opacity-50">
                {loading ? "Publishing..." : <><Send className="w-4 h-4" /> Publish Comment</>}
              </button>
            </div>
          </form>
        </div>

        {/* Comments List Stacked */}
        <div className="space-y-6">
          {comments.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
               <p className="text-slate-500 font-bold text-lg">No comments yet. Be the first!</p>
            </div>
          ) : (
             comments.map((comment) => (
               <div key={comment.id} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-5 hover:border-blue-200 transition-colors">
                 <div className="shrink-0 flex items-start">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white shadow-md text-slate-400 font-black text-lg">
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                 </div>
                 <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                       <h5 className="font-bold text-slate-900 text-base">{comment.name}</h5>
                       <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-md border border-slate-100 whitespace-nowrap">
                         {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(comment.createdAt)}
                       </span>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed whitespace-pre-wrap">
                      {comment.content}
                    </p>
                 </div>
               </div>
             ))
          )}
        </div>
      </div>
    </div>
  );
}
