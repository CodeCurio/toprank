"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  featuredImage: string | null;
  createdAt: Date;
  categories: { id: string; name: string }[];
}

export default function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-pink-50 rounded-bl-full pointer-events-none opacity-50"></div>
      
      <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-100 pb-4 relative z-10 flex items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
        Read Next
      </h4>
      
      <div className="space-y-6 relative z-10">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
            <article className="flex gap-4 items-start">
              {post.featuredImage && (
                 <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden border border-slate-100 relative shadow-sm">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <Image 
                      src={post.featuredImage} 
                      alt={post.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                 </div>
              )}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                {post.categories && post.categories.length > 0 && (
                   <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1.5 block truncate">
                     {post.categories[0].name}
                   </span>
                )}
                <h5 className="font-bold text-slate-800 text-sm leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors mb-2">
                  {post.title}
                </h5>
                <span className="text-[11px] font-medium text-slate-400 truncate block">
                  {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(post.createdAt))}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
      
      <Link href="/blog" className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 hover:text-blue-600 group transition-colors uppercase tracking-widest relative z-10">
        View All 
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
