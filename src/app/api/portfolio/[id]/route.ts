import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const project = await prisma.portfolioProject.findUnique({
      where: { id }
    });
    if (!project) return new NextResponse("Not Found", { status: 404 });
    return NextResponse.json(project);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const { id } = await params;
    const body = await req.json();
    const { title, excerpt, content, featuredImage, status, slug, category, clientName, liveUrl, results, technologies, createdAt } = body;

    const resolvedSlug = slug 
      ? slugify(slug, { lower: true, strict: true }) 
      : slugify(title, { lower: true, strict: true });

    const project = await prisma.portfolioProject.update({
      where: { id },
      data: {
        title,
        slug: resolvedSlug,
        excerpt,
        content,
        featuredImage,
        status,
        category,
        clientName,
        liveUrl,
        results,
        technologies,
        ...(createdAt && { createdAt: new Date(createdAt) }),
      }
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Update failed", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  try {
    const { id } = await params;
    await prisma.portfolioProject.delete({
      where: { id }
    });
    return new NextResponse("Deleted successfully", { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
