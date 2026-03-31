import { prisma } from "@/lib/prisma";
import { TaxonomyManager } from "@/components/admin/TaxonomyManager";

export const metadata = {
  title: "Categories & Tags Management | TopRank Admin",
  description: "Manage categories and tags for blog posts"
};

export default async function TaxonomyPage() {
  const [categories, tags] = await Promise.all([
    prisma.category.findMany({
      include: { _count: { select: { posts: true } } },
      orderBy: { name: 'asc' }
    }),
    prisma.tag.findMany({
      include: { _count: { select: { posts: true } } },
      orderBy: { name: 'asc' }
    })
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Taxonomies</h1>
        <p className="text-sm font-medium text-slate-500 mt-2">Create and organize groupings and keywords across your content inventory.</p>
        <div className="mt-8 border-t border-slate-100 pt-8">
           <TaxonomyManager initialCategories={categories} initialTags={tags} />
        </div>
      </div>
    </div>
  );
}
