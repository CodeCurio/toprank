import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Calendar, Hash } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const tag = await prisma.tag.findUnique({ where: { slug } });
  if (!tag) return { title: "Tag Not Found" };
  return {
    title: `${tag.name} Archives | TopRank Digital Service`,
    description: `Browse all articles tagged with ${tag.name}.`,
  };
}

export const revalidate = 60;

export default async function TagArchivePage(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 9;
  const skip = (page - 1) * limit;

  const tag = await prisma.tag.findUnique({ where: { slug } });
  if (!tag) notFound();

  const [posts, totalPosts] = await Promise.all([
    prisma.post.findMany({
      where: { 
        status: "Published",
        tags: { some: { id: tag.id } }
      },
      orderBy: { createdAt: "desc" },
      include: { categories: true },
      skip,
      take: limit,
    }),
    prisma.post.count({ 
      where: { 
        status: "Published",
        tags: { some: { id: tag.id } }
      } 
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalPosts / limit));

  return (
    <>
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200/60 shadow-sm mb-6">
             <Hash className="w-3.5 h-3.5 text-emerald-500" />
             <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Tag</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-emerald-600">#{tag.name}</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Articles, guides, and insights tagged with {tag.name}.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-slate-500 py-32 bg-white rounded-3xl border border-slate-200/60 shadow-sm">
            <p className="text-2xl font-bold text-slate-900 mb-2">No posts available.</p>
            <p className="text-slate-500">There are currently no published articles with this tag.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts.map((post: any) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full">
                <article className="h-full bg-white rounded-2xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] border border-slate-200/60 hover:border-emerald-200 overflow-hidden hover:-translate-y-1 transition-all duration-300 flex flex-col relative z-20">
                  
                  {post.featuredImage && (
                    <div className="aspect-[16/10] w-full overflow-hidden relative border-b border-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-out"
                      />
                    </div>
                  )}

                  <div className="p-6 sm:p-8 flex-1 flex flex-col relative">
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-4">
                       <time className="text-slate-400 flex items-center gap-1.5" dateTime={post.createdAt.toISOString()}>
                         <Calendar className="w-3.5 h-3.5" />
                         {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(post.createdAt))}
                       </time>
                    </div>

                    <h2 className="text-2xl font-black text-slate-900 mb-3 line-clamp-2 leading-tight group-hover:text-emerald-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-600 line-clamp-3 mb-6 leading-relaxed flex-1 text-[15px]">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-[14px] font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      Read Article
                      <div className="bg-slate-50 group-hover:bg-emerald-50 p-2 rounded-full transition-colors">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            {page > 1 ? (
              <Link
                href={`/tag/${tag.slug}?page=${page - 1}`}
                className="px-6 py-3 bg-white border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-200 rounded-xl shadow-sm transition-all font-bold text-sm"
              >
                Previous
              </Link>
            ) : (
              <span className="px-6 py-3 bg-slate-50 border border-slate-200 text-slate-400 rounded-xl font-bold text-sm cursor-not-allowed">
                Previous
              </span>
            )}
            
            <div className="px-6 py-3 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl shadow-sm text-sm">
              Page {page} <span className="text-slate-400 mx-1">of</span> {totalPages}
            </div>

            {page < totalPages ? (
              <Link
                href={`/tag/${tag.slug}?page=${page + 1}`}
                className="px-6 py-3 bg-white border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-200 rounded-xl shadow-sm transition-all font-bold text-sm flex items-center"
              >
                Next
              </Link>
            ) : (
               <span className="px-6 py-3 bg-slate-50 border border-slate-200 text-slate-400 rounded-xl font-bold text-sm cursor-not-allowed bg-opacity-50">
                Next
              </span>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
