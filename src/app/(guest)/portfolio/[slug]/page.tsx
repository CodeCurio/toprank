import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, User, Tag, Trophy } from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  let project: any = null;
  try {
    project = await prisma.portfolioProject.findUnique({
      where: { slug, status: "Published" }
    });
  } catch (error) {
    console.error("Runtime database error in generateMetadata:", error);
  }

  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.excerpt || `Case study for ${project.title}`,
    openGraph: {
      images: project.featuredImage ? [project.featuredImage] : [],
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
    project = await prisma.portfolioProject.findUnique({
      where: { slug, status: "Published" }
    });
  } catch (error) {
    console.error("Runtime database error in PortfolioCaseStudyPage:", error);
  }

  if (!project) {
    notFound();
  }

  const technologies = project.technologies ? project.technologies.split(",").map((t: string) => t.trim()) : [];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow pt-28 pb-20">
        <div className="container px-4 mx-auto max-w-5xl">

          {/* Back Button */}
          <Link href="/portfolio" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-700 font-bold text-sm rounded-full">
                {project.category}
              </span>
              {project.clientName && (
                <span className="px-4 py-1.5 bg-slate-100 text-slate-700 font-bold text-sm rounded-full flex items-center">
                  <User className="w-4 h-4 mr-2" /> {project.clientName}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-slate-600 font-medium max-w-3xl leading-relaxed">
              {project.excerpt}
            </p>
          </header>

          {project.featuredImage && (
            <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/50 border border-slate-100">
              <img src={project.featuredImage} alt={project.title} className="w-full h-full object-cover" width={1200} height={630} />
            </div>
          )}

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

            {/* Sidebar Meta */}
            <div className="col-span-1 space-y-8">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h3 className="text-lg font-black text-slate-900 mb-6">Project Details</h3>

                <ul className="space-y-6">
                  {project.results && (
                    <li>
                      <span className="flex items-center text-sm font-bold text-emerald-600 mb-1">
                        <Trophy className="w-4 h-4 mr-2" /> Key Result
                      </span>
                      <p className="text-base font-bold text-slate-900">{project.results}</p>
                    </li>
                  )}

                  {project.liveUrl && (
                    <li>
                      <span className="flex items-center text-sm font-bold text-blue-600 mb-1">
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Project
                      </span>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-slate-900 hover:text-blue-600 hover:underline transition-all">
                        View Website
                      </a>
                    </li>
                  )}

                  <li>
                    <span className="flex items-center text-sm font-bold text-slate-500 mb-1">
                      <Calendar className="w-4 h-4 mr-2" /> Completed
                    </span>
                    <p className="text-base font-bold text-slate-900">
                      {new Date(project.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                    </p>
                  </li>
                </ul>

                {technologies.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <span className="flex items-center text-sm font-bold text-slate-500 mb-4">
                      <Tag className="w-4 h-4 mr-2" /> Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech: string) => (
                        <span key={tech} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Main Content (Rich Text) */}
            <div className="col-span-1 md:col-span-2">
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-2xl prose-img:shadow-lg"
                dangerouslySetInnerHTML={{ __html: project.content }} />
            </div>

          </div>

        </div>
      </main>

      <ContactSection />
    </div>
  );
}
