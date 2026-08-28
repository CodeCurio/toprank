import { Metadata } from "next";
import { SAMPLE_PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, User, Tag, Trophy, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";
import { supabase } from "@/lib/supabase/client";

// Revalidate every 60 seconds for dynamic CMS updates
export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  let title = "Portfolio Case Study | TopRank";
  let description = "Detailed client transformation, SEO results, and growth metrics.";
  let coverImage = "/images/og-image.png";

  try {
    const { data: project } = await supabase
      .from("portfolios")
      .select("*")
      .eq("slug", slug)
      .single();

    if (project) {
      title = `${project.title} | TopRank Case Study`;
      description = project.summary || description;
      coverImage = project.cover_image || coverImage;
    } else {
      const sample = SAMPLE_PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
      if (sample) {
        title = `${sample.title} | TopRank Case Study`;
        description = sample.excerpt || description;
        coverImage = sample.featuredImage || coverImage;
      }
    }
  } catch (e) {
    console.error("Metadata fetch error:", e);
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [coverImage],
    },
    alternates: {
      canonical: `https://www.toprankindia.com/portfolio/${slug}`,
    }
  };
}

export default async function PortfolioCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let project: any = null;

  try {
    const { data: dbProject, error } = await supabase
      .from("portfolios")
      .select("*")
      .eq("slug", slug)
      .single();

    if (!error && dbProject) {
      project = {
        title: dbProject.title,
        slug: dbProject.slug,
        category: dbProject.industry,
        clientName: dbProject.client_name,
        location: dbProject.location,
        excerpt: dbProject.summary,
        challenge: dbProject.challenge,
        solution: dbProject.solution,
        content: dbProject.content,
        featuredImage: dbProject.cover_image,
        liveUrl: dbProject.live_url,
        technologies: dbProject.technologies,
        metrics: dbProject.results_metrics,
        createdAt: dbProject.created_at,
      };
    }
  } catch (err) {
    console.error("Error fetching dynamic portfolio:", err);
  }

  // Fallback to static sample if not in database
  if (!project) {
    const sample = SAMPLE_PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
    if (sample) {
      project = {
        title: sample.title,
        slug: sample.slug,
        category: sample.category,
        clientName: sample.clientName,
        location: "India",
        excerpt: sample.excerpt,
        challenge: sample.challenge,
        solution: sample.solution,
        content: sample.content,
        featuredImage: sample.featuredImage,
        liveUrl: sample.liveUrl,
        technologies: sample.technologies,
        metrics: sample.results ? [{ label: "Growth Result", value: sample.results }] : [],
        createdAt: sample.createdAt,
      };
    }
  }

  if (!project) {
    notFound();
  }

  const technologiesList = project.technologies 
    ? (typeof project.technologies === "string" ? project.technologies.split(",") : project.technologies).map((t: string) => t.trim()) 
    : [];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-28 pb-20">
        <div className="container px-4 mx-auto max-w-5xl">

          {/* Back Button */}
          <Link href="/portfolio" className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Case Studies
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider rounded-full border border-blue-100">
                {project.category}
              </span>
              {project.clientName && (
                <span className="px-4 py-1.5 bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-full flex items-center">
                  <User className="w-3.5 h-3.5 mr-1.5 text-slate-500" /> {project.clientName}
                </span>
              )}
              {project.location && (
                <span className="px-4 py-1.5 bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-wider rounded-full">
                  📍 {project.location}
                </span>
              )}
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              {project.title}
            </h1>
            
            <p className="text-base sm:text-xl text-slate-600 font-medium max-w-3xl leading-relaxed">
              {project.excerpt}
            </p>
          </header>

          {/* Key Results Metrics Grid */}
          {project.metrics && Array.isArray(project.metrics) && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {project.metrics.map((m: any, idx: number) => (
                <div key={idx} className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-xl">
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cover Image Showcase */}
          {project.featuredImage && (
            <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50 border border-slate-100 bg-slate-950">
              <img 
                src={project.featuredImage} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}

          {/* Project Details & Case Study Story */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

            {/* Sidebar Meta */}
            <div className="col-span-1 space-y-8">
              <div className="p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200/80">
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wider mb-6">
                  Project Blueprint
                </h3>

                <ul className="space-y-6">
                  {project.liveUrl && (
                    <li>
                      <span className="flex items-center text-xs font-black uppercase tracking-wider text-blue-600 mb-1">
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Live Project
                      </span>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-bold text-slate-900 hover:text-blue-600 hover:underline break-all"
                      >
                        {project.liveUrl}
                      </a>
                    </li>
                  )}

                  <li>
                    <span className="flex items-center text-xs font-black uppercase tracking-wider text-slate-400 mb-1">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" /> Published
                    </span>
                    <p className="text-sm font-bold text-slate-800">
                      {new Date(project.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                    </p>
                  </li>
                </ul>

                {technologiesList.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <span className="flex items-center text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
                      <Tag className="w-3.5 h-3.5 mr-1.5" /> Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {technologiesList.map((tech: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Main Content & Challenge / Solution */}
            <div className="col-span-1 md:col-span-2 space-y-8">
              
              {project.challenge && (
                <div className="p-6 sm:p-8 bg-red-50/50 rounded-3xl border border-red-100">
                  <h3 className="text-lg font-black text-red-950 mb-3 flex items-center gap-2">
                    <span>⚠️ The Challenge</span>
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-6 sm:p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100">
                  <h3 className="text-lg font-black text-emerald-950 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>The Engineering Solution</span>
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* Rich Story Content */}
              {project.content && (
                <div 
                  className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-2xl"
                  dangerouslySetInnerHTML={{ __html: project.content }} 
                />
              )}
            </div>

          </div>

        </div>
      </main>

      <ContactSection />
    </div>
  );
}
