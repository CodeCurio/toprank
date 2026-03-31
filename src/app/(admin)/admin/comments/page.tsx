import { prisma } from "@/lib/prisma";
import CommentTable from "@/components/admin/CommentTable";
import { MessageSquare } from "lucide-react";

export const revalidate = 0; // Ensures fresh data load on admin dashboard visit

export default async function AdminCommentsPage() {
  const comments = await prisma.comment.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      post: {
        select: { title: true, slug: true }
      }
    }
  });

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-blue-600" /> User Comments
        </h1>
        <p className="text-sm font-medium text-slate-500 mt-2">
          Manage, moderate, and remove user discussion inputs across all published content.
        </p>
      </div>

      <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
         {/* @ts-ignore */}
        <CommentTable initialComments={comments} />
      </div>
    </div>
  );
}
