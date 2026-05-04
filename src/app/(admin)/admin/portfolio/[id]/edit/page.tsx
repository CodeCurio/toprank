import PortfolioForm from "@/components/PortfolioForm";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditPortfolioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await prisma.portfolioProject.findUnique({
    where: { id }
  });

  if (!project) {
    notFound();
  }

  // Need to safely cast or map it if Prisma types differ slightly from the form interface,
  // but they should match almost perfectly.
  const serializedProject = {
    ...project,
    createdAt: project.createdAt.toISOString(),
    updatedAt: project.updatedAt.toISOString(),
    excerpt: project.excerpt || "",
    featuredImage: project.featuredImage || "",
    clientName: project.clientName || "",
    liveUrl: project.liveUrl || "",
    results: project.results || "",
    technologies: project.technologies || "",
    status: project.status as "Draft" | "Published"
  };

  return <PortfolioForm initialData={serializedProject} />;
}
