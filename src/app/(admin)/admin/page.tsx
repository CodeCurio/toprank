import { prisma } from "@/lib/prisma";
import { PostTable } from "@/components/admin/PostTable";
import { FileText, Globe, PenTool, Hash } from "lucide-react";

export default async function AdminDashboard() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: { categories: true }
  });

  const totalWords = posts.reduce((acc: number, p: any) => acc + (p.content?.split(/\s+/).length || 0), 0);
  const publishedCount = posts.filter((p: any) => p.status === "Published").length;
  const draftCount = posts.filter((p: any) => p.status === "Draft").length;

  return (
    <div className="space-y-10">
      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Articles", value: posts.length, icon: <FileText size={20} className="text-blue-500" /> },
          { label: "Published", value: publishedCount, icon: <Globe size={20} className="text-emerald-500" /> },
          { label: "Drafts", value: draftCount, icon: <PenTool size={20} className="text-orange-500" /> },
          { label: "Total Words", value: totalWords.toLocaleString(), icon: <Hash size={20} className="text-purple-500" /> }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl group flex flex-col relative overflow-hidden">
             <div className="absolute -right-4 -top-4 w-24 h-24 bg-slate-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
             <div className="flex items-center justify-between mb-4 relative z-10">
               <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">{stat.label}</p>
               <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-white shadow-sm transition-colors">{stat.icon}</div>
             </div>
             <h3 className="text-5xl font-black italic tracking-tighter text-slate-900 relative z-10">
               {stat.value}
             </h3>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="px-10 py-8 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
          <div>
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Content Inventory</h2>
            <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">Manage and monitor your search performance</p>
          </div>
        </div>
        <div className="p-4">
          {/* @ts-ignore */}
          <PostTable initialPosts={posts} />
        </div>
      </div>
    </div>
  );
}
