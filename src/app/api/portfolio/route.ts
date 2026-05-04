import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import slugify from "slugify";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  const { title, excerpt, content, featuredImage, status, slug, category, clientName, liveUrl, results, technologies, createdAt } = body;

  const resolvedSlug = slug 
    ? slugify(slug, { lower: true, strict: true }) 
    : slugify(title, { lower: true, strict: true });

  try {
    const project = await prisma.portfolioProject.create({
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
    console.error("Failed to create portfolio project", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const status = searchParams.get("status") || "Published";
  const skip = (page - 1) * limit;

  const whereClause = status === "all" ? {} : { status };

  const projects = await prisma.portfolioProject.findMany({
    where: whereClause,
    orderBy: { createdAt: "desc" },
    skip,
    take: limit,
  });

  const total = await prisma.portfolioProject.count({ where: whereClause });

  return NextResponse.json({
    projects,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }
  });
}
