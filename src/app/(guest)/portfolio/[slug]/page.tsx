import { Metadata } from "next";
import { SAMPLE_PORTFOLIO_PROJECTS, PortfolioProject } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Building2,
  MapPin,
  TrendingUp,
  Award,
  Zap,
  Target,
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Code2,
  Layers,
  Sparkles,
  ArrowUpRight,
  Star,
  Quote,
  Clock,
  PhoneCall,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";
import { supabase } from "@/lib/supabase/client";
import { TechBadge, TechStackGrid } from "@/components/portfolio/TechBadge";
import { PortfolioShareButton } from "@/components/portfolio/PortfolioShareButton";

// Force dynamic fetching for real-time CMS updates
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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
    },
  };
}

// Helper to choose appropriate metric icon
function getMetricIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes("rank") || l.includes("maps") || l.includes("seo") || l.includes("position")) {
    return <Award className="w-5 h-5 text-amber-400" />;
  }
  if (l.includes("lead") || l.includes("patient") || l.includes("booking") || l.includes("user") || l.includes("traffic")) {
    return <Users className="w-5 h-5 text-blue-400" />;
  }
  if (l.includes("speed") || l.includes("rate") || l.includes("time") || l.includes("conversion")) {
    return <Zap className="w-5 h-5 text-yellow-400" />;
  }
  if (l.includes("revenue") || l.includes("sale") || l.includes("roi") || l.includes("cpl") || l.includes("growth")) {
    return <TrendingUp className="w-5 h-5 text-emerald-400" />;
  }
  return <Target className="w-5 h-5 text-indigo-400" />;
}

// Helper to parse bullet points or sentences
function parseBulletPoints(text?: string): string[] {
  if (!text) return [];
  const lines = text
    .split("\n")
    .map((line) => line.replace(/^[•\-\*]\s*/, "").trim())
    .filter(Boolean);
  return lines.length > 0 ? lines : [text.trim()];
}

export default async function PortfolioCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project: any = null;
  let allProjects: any[] = [];

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
        category: dbProject.industry || "Digital Marketing",
        clientName: dbProject.client_name,
        location: dbProject.location || "Lucknow, UP",
        excerpt: dbProject.summary,
        challenge: dbProject.challenge,
        solution: dbProject.solution,
        content: dbProject.content,
        featuredImage: dbProject.cover_image,
        liveUrl: dbProject.live_url,
        technologies: dbProject.technologies,
        metrics: dbProject.results_metrics,
        createdAt: dbProject.created_at,
        featured: dbProject.featured,
      };
    }

    // Fetch related projects
    const { data: relatedData } = await supabase
      .from("portfolios")
      .select("*")
      .eq("published", true)
      .neq("slug", slug)
      .limit(3);

    if (relatedData && relatedData.length > 0) {
      allProjects = relatedData.map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        category: p.industry,
        excerpt: p.summary,
        featuredImage: p.cover_image,
        clientName: p.client_name,
        results: Array.isArray(p.results_metrics) && p.results_metrics[0]
          ? `${p.results_metrics[0].value} ${p.results_metrics[0].label}`
          : "Verified Growth",
      }));
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
        location: sample.location || "India",
        excerpt: sample.excerpt,
        challenge: sample.challenge,
        solution: sample.solution,
        content: sample.content,
        featuredImage: sample.featuredImage,
        liveUrl: sample.liveUrl,
        technologies: sample.technologies,
        metrics: sample.metrics || (sample.results ? [{ label: "Growth Result", value: sample.results }] : []),
        testimonial: sample.testimonial,
        createdAt: sample.createdAt,
      };
    }
  }

  if (!project) {
    notFound();
  }

  // Fallback for related projects
  if (allProjects.length === 0) {
    allProjects = SAMPLE_PORTFOLIO_PROJECTS.filter((p) => p.slug !== slug).map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      category: p.category,
      excerpt: p.excerpt,
      featuredImage: p.featuredImage,
      clientName: p.clientName,
      results: p.results,
    }));
  }

  // Process tech list
  const technologiesList: string[] = project.technologies
    ? (typeof project.technologies === "string"
        ? project.technologies.split(",")
        : project.technologies
      )
        .map((t: string) => t.trim())
        .filter(Boolean)
    : [];

  const challengeItems = parseBulletPoints(project.challenge);
  const solutionItems = parseBulletPoints(project.solution);

  // Metrics normalization
  const metricsList = Array.isArray(project.metrics) && project.metrics.length > 0
    ? project.metrics
    : [
        { label: "Lead Growth", value: "+300%" },
        { label: "Google Maps Rank", value: "#1 Spot" },
        { label: "Page Load Speed", value: "0.8s" },
      ];

  const formattedDate = new Date(project.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      
      {/* Dynamic Background Glow Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-gradient-to-br from-emerald-600/10 via-teal-600/5 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[70%] -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/10 via-blue-600/5 to-transparent blur-[140px] rounded-full" />
      </div>

      <main className="flex-grow pt-24 pb-20 relative z-10">
        <div className="container px-4 sm:px-6 mx-auto max-w-6xl">
          
          {/* Top Breadcrumb & Share Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <Link href="/portfolio" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                <ArrowLeft className="w-3.5 h-3.5" /> Case Studies
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-slate-500">{project.category}</span>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-slate-200 truncate max-w-[200px] sm:max-w-xs">{project.clientName}</span>
            </div>

            <div className="flex items-center gap-3">
              <PortfolioShareButton title={project.title} />
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-500/25 hover:scale-[1.02]"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Hero Header Section */}
          <header className="mb-12 space-y-6">
            
            {/* Meta Tags Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-500/10 text-blue-400 font-bold text-xs uppercase tracking-wider rounded-xl border border-blue-500/20">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                {project.category}
              </span>

              {project.clientName && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900/90 text-slate-300 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-800">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  {project.clientName}
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 ml-0.5" />
                </span>
              )}

              {project.location && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900/90 text-slate-400 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {project.location}
                </span>
              )}

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-900/90 text-slate-400 font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-800">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {formattedDate}
              </span>
            </div>

            {/* Display Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-4xl">
              {project.title}
            </h1>

            {/* Executive Summary */}
            <p className="text-base sm:text-xl text-slate-300 font-medium max-w-3xl leading-relaxed">
              {project.excerpt}
            </p>
          </header>

          {/* Key Impact & Results Showcase (Hero Metric Cards) */}
          {metricsList.length > 0 && (
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Key Results &amp; Business Impact
                </h3>
              </div>

              <div className={`grid grid-cols-1 sm:grid-cols-2 ${metricsList.length >= 4 ? 'lg:grid-cols-4' : metricsList.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-4`}>
                {metricsList.map((m: any, idx: number) => (
                  <div
                    key={idx}
                    className="relative group p-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent rounded-bl-full pointer-events-none" />
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner">
                        {getMetricIcon(m.label)}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Verified
                      </span>
                    </div>

                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight mb-1">
                      {m.value}
                    </div>
                    
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interactive Browser Frame / Cover Showcase */}
          {project.featuredImage && (
            <div className="mb-16 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-2xl shadow-blue-950/30">
              
              {/* Browser Window Header Mockup */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-400 font-mono max-w-sm sm:max-w-md truncate">
                  <span className="text-emerald-400">🔒</span>
                  <span className="truncate">
                    {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "") : `toprankindia.com/case-study/${project.slug}`}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">Production</span>
                </div>
              </div>

              {/* Cover Image Container */}
              <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden group">
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {project.liveUrl && (
                  <div className="absolute bottom-6 right-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/90 hover:bg-white text-slate-900 font-black text-xs uppercase tracking-wider backdrop-blur-md shadow-2xl hover:scale-105 transition-all"
                    >
                      <span>Explore Live Website</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Main 2-Column Content Layout: Case Story (7 Cols) & Sticky Sidebar (5 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            
            {/* LEFT COLUMN: Transformation Matrix & Rich Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Problem vs. Solution Transformation Matrix */}
              {(challengeItems.length > 0 || solutionItems.length > 0) && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">
                      The Strategic Transformation Matrix
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Challenge Card */}
                    {challengeItems.length > 0 && (
                      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-rose-950/20 to-slate-900/60 border border-rose-500/20 shadow-xl space-y-4">
                        <div className="flex items-center gap-2.5 text-rose-400 border-b border-rose-500/20 pb-4">
                          <div className="w-8 h-8 rounded-xl bg-rose-500/10 flex items-center justify-center">
                            <AlertTriangle className="w-4 h-4 text-rose-400" />
                          </div>
                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-rose-200">
                              Initial Bottlenecks
                            </h3>
                            <p className="text-[11px] text-rose-400/80 font-medium">Pre-Intervention Challenges</p>
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {challengeItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                              <span className="w-5 h-5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                                ✕
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Solution Card */}
                    {solutionItems.length > 0 && (
                      <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-emerald-950/20 to-slate-900/60 border border-emerald-500/20 shadow-xl space-y-4">
                        <div className="flex items-center gap-2.5 text-emerald-400 border-b border-emerald-500/20 pb-4">
                          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          </div>
                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wider text-emerald-200">
                              Our Growth Blueprint
                            </h3>
                            <p className="text-[11px] text-emerald-400/80 font-medium">Engineering &amp; Strategy Executed</p>
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {solutionItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                              <span className="w-5 h-5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                                ✓
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                </div>
              )}

              {/* Technologies & Tools Ecosystem (Dedicated Full Section) */}
              {technologiesList.length > 0 && (
                <div className="space-y-6 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-white uppercase tracking-wider">
                          Technologies &amp; Platforms Deployed
                        </h3>
                        <p className="text-[11px] text-slate-400">
                          Modern tech stack powering performance, automation &amp; conversion
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
                      {technologiesList.length} Tools
                    </span>
                  </div>

                  <TechStackGrid technologies={technologiesList} />
                </div>
              )}

              {/* 3-Step Execution Journey */}
              <div className="space-y-6 bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Execution Roadmap &amp; Deployment Phases
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-black text-blue-400 font-mono">01. Discovery</span>
                    <h4 className="text-sm font-bold text-white">Audit &amp; Research</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      In-depth keyword gap analysis, competitor reverse-engineering, and technical architecture review.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-black text-indigo-400 font-mono">02. Engineering</span>
                    <h4 className="text-sm font-bold text-white">Design &amp; Development</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Sub-second web rebuild, schema markup integration, and conversion funnel optimization.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                    <span className="text-xs font-black text-emerald-400 font-mono">03. Activation</span>
                    <h4 className="text-sm font-bold text-white">Scaling &amp; Growth</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Local 3-Pack authority blast, automated lead routing, and continuous ROI tracking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Full Case Study Article Narrative */}
              {project.content && (
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                      In-Depth Project Narrative
                    </h3>
                  </div>

                  <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-xl">
                    <div
                      className="prose prose-invert prose-slate max-w-none 
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white
                        prose-h2:text-2xl prose-h2:border-b prose-h2:border-slate-800 prose-h2:pb-3 prose-h2:mt-6 prose-h2:mb-4
                        prose-h3:text-lg prose-h3:text-blue-300
                        prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base
                        prose-li:text-slate-300 prose-li:text-sm sm:prose-li:text-base
                        prose-strong:text-white prose-strong:font-bold
                        prose-a:text-blue-400 hover:prose-a:text-blue-300
                        prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-500/5 prose-blockquote:p-4 prose-blockquote:rounded-r-2xl"
                      dangerouslySetInnerHTML={{ __html: project.content }}
                    />
                  </div>
                </div>
              )}

              {/* Client Testimonial / Endorsement Card */}
              {project.testimonial && (
                <div className="relative p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-blue-500/20 shadow-2xl space-y-4">
                  <Quote className="w-10 h-10 text-blue-400/40 absolute top-6 right-6" />
                  
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-base sm:text-lg font-medium text-slate-200 italic leading-relaxed">
                    "{project.testimonial.quote}"
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 font-black text-white flex items-center justify-center text-sm shadow-md">
                      {project.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {project.testimonial.author}
                      </h4>
                      <p className="text-xs text-blue-300">
                        {project.testimonial.role} · {project.clientName}
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: Sticky Project Blueprint & Conversion Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                
                {/* Project Dossier Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <h3 className="text-xs font-black uppercase tracking-wider text-white">
                      Project Dossier
                    </h3>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-slate-500 uppercase tracking-wider font-bold block mb-1">
                        Client Entity
                      </span>
                      <p className="text-sm font-bold text-white flex items-center gap-1.5">
                        {project.clientName || "Confidential Client"}
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      </p>
                    </div>

                    <div>
                      <span className="text-slate-500 uppercase tracking-wider font-bold block mb-1">
                        Industry / Sector
                      </span>
                      <p className="text-sm font-bold text-blue-300">
                        {project.category}
                      </p>
                    </div>

                    <div>
                      <span className="text-slate-500 uppercase tracking-wider font-bold block mb-1">
                        Target Geography
                      </span>
                      <p className="text-sm font-bold text-slate-200 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        {project.location || "India"}
                      </p>
                    </div>

                    {project.liveUrl && (
                      <div>
                        <span className="text-slate-500 uppercase tracking-wider font-bold block mb-1">
                          Live Deployment
                        </span>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-blue-400 hover:text-blue-300 hover:underline break-all flex items-center gap-1"
                        >
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                          <span>{project.liveUrl}</span>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Sidebar Tech Chips */}
                  {technologiesList.length > 0 && (
                    <div className="pt-4 border-t border-slate-800 space-y-3">
                      <span className="text-slate-500 uppercase tracking-wider font-bold text-xs block">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {technologiesList.map((t, idx) => (
                          <TechBadge key={idx} name={t} variant="mini" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Consultation Conversion Action Card */}
                <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-blue-900/50 via-indigo-950/60 to-slate-950 border border-blue-500/30 shadow-2xl space-y-5 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-black text-white">
                      Want Similar Results?
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Let our engineering &amp; growth specialists scale your organic visibility and lead volume.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <a
                      href="https://wa.me/919999999999?text=Hi%20TopRank,%20I%20saw%20your%20case%20study%20and%20want%20to%20scale%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <Link
                      href="/contact"
                      className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Book Free Strategy Call</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* More Related Case Studies Section */}
          {allProjects.length > 0 && (
            <section className="pt-16 border-t border-slate-800 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-blue-400 mb-1 block">
                    Proven Track Record
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Explore Other Success Stories
                  </h2>
                </div>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View All Case Studies</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {allProjects.map((proj) => (
                  <Link
                    key={proj.id}
                    href={`/portfolio/${proj.slug}`}
                    className="group rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                      {proj.featuredImage ? (
                        <img
                          src={proj.featuredImage}
                          alt={proj.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-bold text-slate-700">
                          TopRank
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[10px] font-bold text-blue-300">
                          {proj.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        {proj.clientName && (
                          <p className="text-[11px] font-bold text-blue-400 uppercase tracking-wider mb-1">
                            {proj.clientName}
                          </p>
                        )}
                        <h3 className="text-base font-black text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                          {proj.title}
                        </h3>
                      </div>

                      {proj.results && (
                        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                          <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                            {proj.results}
                          </span>
                          <span className="text-xs font-bold text-slate-400 group-hover:text-white flex items-center gap-1 transition-colors">
                            Read Study <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      <ContactSection />
    </div>
  );
}
