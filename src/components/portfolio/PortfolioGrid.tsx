"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, MapPin, Sparkles, Star } from "lucide-react";

export interface PortfolioItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  clientName: string;
  location?: string;
  results: string;
  technologies?: string | string[];
  featured?: boolean;
}

export function PortfolioGrid({ initialProjects }: { initialProjects: PortfolioItem[] }) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(initialProjects.map((p) => p.category).filter(Boolean)))];

  const filteredProjects =
    filter === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === filter);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-sm border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const techList: string[] = project.technologies
                ? typeof project.technologies === "string"
                  ? project.technologies.split(",").map((t) => t.trim()).filter(Boolean)
                  : Array.isArray(project.technologies)
                  ? project.technologies
                  : []
                : [];

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:shadow-blue-600/10 hover:border-blue-500/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Showcase Container (Widescreen 16:10 for perfect Mockup & Screenshot fit) */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                      {project.featuredImage ? (
                        <img
                          src={project.featuredImage}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-black text-xl tracking-tight">
                          TopRank Digital
                        </div>
                      )}

                      {/* Ambient Gradient Overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent pointer-events-none" />

                      {/* Clickable Overlay Link */}
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="absolute inset-0 z-10"
                      >
                        <span className="sr-only">View Case Study: {project.title}</span>
                      </Link>

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-md text-blue-300 text-[11px] font-bold rounded-full shadow-md border border-white/10">
                          {project.category}
                        </span>

                        {project.featured && (
                          <span className="inline-flex items-center gap-1 bg-amber-500 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
                            <Star className="w-2.5 h-2.5 fill-white" /> Featured
                          </span>
                        )}
                      </div>

                      {/* Floating Action Arrow */}
                      <div className="absolute bottom-3.5 right-3.5 z-20">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-blue-500 group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 space-y-3">
                      {/* Client Name & Location */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest truncate">
                          {project.clientName || "Client Project"}
                        </span>
                        {project.location && (
                          <span className="text-[11px] text-slate-600 font-bold flex items-center gap-1 shrink-0">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            <span>{project.location}</span>
                          </span>
                        )}
                      </div>

                      {/* Case Study Title (2 lines allowed so no awkward cutoff) */}
                      <h3 className="text-base sm:text-lg font-black text-slate-900 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                        <Link href={`/portfolio/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>

                      {/* Excerpt / Summary (3 lines allowed for complete story context) */}
                      <p className="text-xs sm:text-sm text-slate-600 font-medium line-clamp-3 leading-relaxed">
                        {project.excerpt}
                      </p>

                      {/* Tech Stack Pills (if available) */}
                      {techList.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {techList.slice(0, 3).map((t, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-bold border border-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                          {techList.length > 3 && (
                            <span className="px-1.5 py-0.5 text-[9px] font-bold text-slate-400">
                              +{techList.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: Verified Growth Metric */}
                  {project.results && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-xl shadow-xs">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{project.results}</span>
                        </span>

                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="text-xs font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all flex items-center gap-0.5"
                        >
                          <span>Case Study</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">No projects found in this category</h3>
            <p className="text-slate-500 text-sm">Select "All" to browse all featured digital transformations.</p>
          </div>
        )}

      </div>
    </section>
  );
}
