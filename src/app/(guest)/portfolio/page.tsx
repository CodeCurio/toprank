import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Our Portfolio | TopRank Digital",
  description: "Explore our portfolio of high-converting websites, successful SEO campaigns, and digital marketing case studies.",
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
  const serializedProjects = projects.map(p => ({
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
        <ContactSection />
      </main>
    </div>
  );
}
