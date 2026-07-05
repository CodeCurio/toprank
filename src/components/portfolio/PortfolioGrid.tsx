"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  clientName: string;
  results: string;
}

export function PortfolioGrid({ initialProjects }: { initialProjects: PortfolioItem[] }) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(initialProjects.map(p => p.category)))];

  const filteredProjects = filter === "All" 
    ? initialProjects 
    : initialProjects.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container px-4 mx-auto">
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-sm border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  {project.featuredImage ? (
                    <img 
                      src={project.featuredImage} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={600}
                      height={450}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-xl">TopRank</div>
                  )}
                  
                  {/* Overlay Link */}
                  <Link href={`/portfolio/${project.slug}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View {project.title}</span>
                  </Link>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Arrow Icon Reveal */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 transform translate-x-4 -translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {project.clientName && (
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                      Client: {project.clientName}
                    </p>
                  )}
                  <h3 className="text-xl font-black text-slate-900 mb-3 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium line-clamp-2 mb-6">
                    {project.excerpt}
                  </p>
                  
                  {project.results && (
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg inline-block">
                        <span className="text-emerald-700">Result:</span> {project.results}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No projects found</h3>
            <p className="text-slate-500">We are currently updating our portfolio. Check back soon!</p>
          </div>
        )}

      </div>
    </section>
  );
}
