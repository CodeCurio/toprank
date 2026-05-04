import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminPortfolioPage() {
  const projects = await prisma.portfolioProject.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Portfolio Projects</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Manage your agency's work showcase.</p>
        </div>
        <Link
          href="/admin/portfolio/new"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95 flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" /> New Project
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Project Name</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Category</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Client</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {projects.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                  No portfolio projects found. Create your first one!
                </td>
              </tr>
            )}
            {projects.map((project: any) => (
              <tr key={project.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {project.featuredImage ? (
                      <img src={project.featuredImage} alt="" className="w-10 h-10 rounded-lg object-cover bg-slate-100" />
                    ) : (
                      <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold">Img</div>
                    )}
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</p>
                      <p className="text-xs text-slate-500 truncate max-w-[200px]">{project.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                    {project.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                  {project.clientName || "-"}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                    project.status === "Published" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {project.status === "Published" && (
                      <Link href={`/portfolio/${project.slug}`} target="_blank" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View Live">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                    <Link href={`/admin/portfolio/${project.id}/edit`} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Edit">
                      <Edit className="w-4 h-4" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
