import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Our Portfolio | TopRank Digital",
  description: "Explore our portfolio of high-converting websites, successful SEO campaigns, and digital marketing case studies.",
  alternates: {
    canonical: "https://www.toprankindia.com/portfolio",
  },
};

export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
  const projects = await prisma.portfolioProject.findMany({
    where: { status: "Published" },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      featuredImage: true,
      category: true,
      clientName: true,
      results: true,
    }
  });

  // We map nulls to empty strings so it can be passed to the client component
  const serializedProjects = projects.map((p: any) => ({
    ...p,
    excerpt: p.excerpt || "",
    featuredImage: p.featuredImage || "",
    clientName: p.clientName || "",
    results: p.results || "",
  }));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <PortfolioHero />
        <PortfolioGrid initialProjects={serializedProjects} />
        
        {/* Case Study Methodology Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                Our Case Study <span className="text-blue-600">Methodology</span>
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                We believe in complete transparency. Every success story featured in our portfolio is backed by raw performance logs, analytics dashboard screenshots, and verified client testimonials. Here is how we measure results.
              </p>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-lg font-black text-slate-900">Baseline Audit</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  Before launching any campaign, we record the historical baseline of our client's traffic, search visibility, conversion rates, and client acquisition costs.
                </p>
              </div>
              <div className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-lg font-black text-slate-900">Attribution Setup</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  We install custom tags, server-side tracking, and direct CRM connections to ensure that only true conversion actions are credited to our setups.
                </p>
              </div>
              <div className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-lg font-black text-slate-900">Verified Growth</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  We compare the post-launch metrics against the original baseline on a rolling 30, 90, and 180-day cycle to calculate exact ROI and performance.
                </p>
              </div>
            </div>
          </div>
        </section>
 
        <ContactSection />
      </main>
    </div>
  );
}
