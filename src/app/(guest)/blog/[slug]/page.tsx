import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, ArrowRight } from "lucide-react";
import slugify from "slugify";
import TableOfContents, { HeadingItem } from "@/components/blog/TableOfContents";
import RelatedPosts from "@/components/blog/RelatedPosts";
import CommentsSection from "@/components/blog/CommentsSection";

export const revalidate = 60; // ISR

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    where: { status: "Published" },
    select: { slug: true },
  });
  return posts.map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | TopRank Digital Service`,
    description: post.excerpt || "Read this article to master your digital growth.",
    openGraph: {
      title: post.title,
      description: post.excerpt || "Read this article to master your digital growth.",
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
  };
}

export default async function BlogPostPage({ 
  params,
  searchParams 
}: { 
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ preview?: string }>
}) {
  const { slug } = await params;
  const { preview } = await searchParams;
  const isPreview = preview === "true";

  const post = await prisma.post.findUnique({
    where: { slug },
    // @ts-ignore
    include: { categories: true, tags: true, comments: { where: { isApproved: true }, orderBy: { createdAt: 'desc' } } },
  });

  if (!post || (!isPreview && post.status !== "Published")) {
    notFound();
  }

  // Fetch Related Posts
  // @ts-ignore
  const relatedPosts = await prisma.post.findMany({
    where: { 
      status: "Published", 
      id: { not: post.id },
      // @ts-ignore
      ...(post.categories.length > 0 ? { categories: { some: { id: post.categories[0].id } } } : {})
    },
    take: 3,
    orderBy: { createdAt: "desc" },
    // @ts-ignore
    include: { categories: true }
  });

  // Generate Table of Contents
  const headings: HeadingItem[] = [];
  const slugCounts: Record<string, number> = {};

  const processedContent = post.content.replace(
    /<h([2-3])(.*?)>(.*?)<\/h\1>/gi,
    (match: string, level: string, attrs: string, text: string) => {
      const cleanText = text.replace(/<[^>]*>?/gm, '');
      let slug = slugify(cleanText, { lower: true, strict: true }) || `heading-${headings.length}`;
      if (slugCounts[slug]) {
        slugCounts[slug]++;
        slug = `${slug}-${slugCounts[slug]}`;
      } else {
        slugCounts[slug] = 1;
      }
      headings.push({ id: slug, text: cleanText, level: parseInt(level) });
      if (attrs.includes('id=')) return match;
      return `<h${level}${attrs} id="${slug}">${text}</h${level}>`;
    }
  );

  return (
    <>
    <article className="min-h-screen bg-slate-50 pt-24 pb-20 lg:pt-32 lg:pb-32 relative font-sans">
      {isPreview && (
        <div className="fixed top-20 inset-x-0 z-[100] px-4 animate-in fade-in slide-in-from-top-4 duration-500">
           <div className="max-w-xl mx-auto bg-blue-600/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-2xl border border-white/20 flex items-center justify-between">
              <div className="flex items-center gap-3 font-black text-[10px] uppercase tracking-widest">
                 <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                 Draft Preview Mode
              </div>
              <Link href="/admin" className="text-[10px] font-black uppercase tracking-widest bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-all">
                Close
              </Link>
           </div>
        </div>
      )}
      
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 lg:mb-24">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Link href="/blog" className="inline-flex items-center text-[12px] font-black text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest mb-10 px-5 py-2 rounded-full border border-slate-200/60 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 group">
            <ArrowLeft className="mr-2 w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>
          
          {/* @ts-ignore */}
          {post.categories && post.categories.length > 0 && (
             <div className="flex items-center gap-3 mb-6">
                {/* @ts-ignore */}
                {post.categories.map((cat: any) => (
                  <Link href={`/category/${cat.slug}`} key={cat.id} className="text-[10px] font-black bg-blue-100 text-blue-700 px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-blue-200 shadow-sm hover:bg-blue-600 hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                ))}
             </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-[1.05] mb-8">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 font-bold text-sm mb-12">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md border-2 border-white ring-2 ring-slate-100">TR</div>
                <div className="flex flex-col items-start leading-tight">
                   <span className="text-slate-900">TopRank Content Team</span>
                   <span className="text-[10px] uppercase tracking-wider text-slate-400">Editorial</span>
                </div>
             </div>
             
             <div className="h-6 w-px bg-slate-200"></div>
             
             <time dateTime={post.createdAt.toISOString()} className="flex items-center gap-2 text-slate-600 text-[13px] uppercase tracking-widest">
              <Calendar className="w-4 h-4 text-blue-500" />
              {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(post.createdAt))}
             </time>
          </div>
        </div>

        {post.featuredImage && (
          <div className="w-full max-w-6xl mx-auto rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-200/60 aspect-[16/9] lg:aspect-[21/9] relative z-10 bg-slate-100 isolate">
             <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply z-10 pointer-events-none"></div>
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover transform scale-100 transition-transform duration-[20s] ease-linear hover:scale-105"
            />
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* Main Content Column */}
          <div className="flex-1 w-full max-w-3xl mx-auto lg:mx-0 order-1 overflow-hidden min-w-0">
             <div className="bg-white/80 backdrop-blur-3xl rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-200/50 break-words mb-12">
                <div
                  className="blog-content relative max-w-none text-left"
                  dangerouslySetInnerHTML={{ __html: processedContent }}
                />
                
                {/* @ts-ignore */}
                {post.tags && post.tags.length > 0 && (
                   <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-3">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest mr-2">Tags:</span>
                      {/* @ts-ignore */}
                      {post.tags.map((tag: any) => (
                        <Link href={`/tag/${tag.slug}`} key={tag.id} className="text-[11px] font-bold px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 uppercase tracking-widest rounded-lg hover:bg-slate-100 transition-colors">
                          #{tag.name}
                        </Link>
                      ))}
                   </div>
                )}
             </div>

             {/* Dynamic Comments Module */}
             {/* @ts-ignore */}
             <CommentsSection postId={post.id} initialComments={post.comments} />
          </div>

          {/* Dynamic Sidebar */}
          <aside className="lg:w-80 shrink-0 space-y-8 order-2">
             <div className="sticky top-28 space-y-8">
               
               {/* Author Info Card */}
               <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-3xl text-white shadow-xl shadow-blue-900/10 border border-t-white/20 relative overflow-hidden hidden xl:block">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full blur-2xl"></div>
                 <h4 className="font-black text-[13px] uppercase tracking-widest text-blue-200 mb-4 flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                   About The Author
                 </h4>
                 <div className="text-3xl font-black tracking-tight mb-2">TopRank<br/>Agency</div>
                 <p className="text-blue-100 text-sm font-medium leading-relaxed mb-6 opacity-90">
                   We orchestrate high-performance SEO and digital marketing campaigns ensuring elite search dominance for dedicated brands.
                 </p>
                 <Link href="/contact" className="inline-flex items-center text-xs font-bold uppercase tracking-widest bg-white text-blue-700 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                   Consult With Us <ArrowRight className="w-3.5 h-3.5 ml-2" />
                 </Link>
               </div>

               {/* Sticky Table Of Contents Component */}
               {headings.length > 0 && <TableOfContents headings={headings} />}

               {/* Related Blogs Widget */}
               {/* @ts-ignore */}
               <RelatedPosts posts={relatedPosts} />
             </div>
          </aside>
          
        </div>
      </div>
    </article>
    </>
  );
}
