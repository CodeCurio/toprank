import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import slugify from "slugify";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const body = await req.json();
  const { title, excerpt, content, featuredImage, status, slug, categories, tags, createdAt } = body;

  const resolvedSlug = slug 
    ? slugify(slug, { lower: true, strict: true }) 
    : slugify(title, { lower: true, strict: true });

  try {
    const post = await prisma.post.create({
      data: {
        title,
        slug: resolvedSlug,
        excerpt,
        content,
        featuredImage,
        status,
        ...(createdAt && { createdAt: new Date(createdAt) }),
        ...(categories && {
          categories: {
            connectOrCreate: categories.map((c: string) => ({
              where: { name: c },
              create: { name: c, slug: slugify(c, { lower: true, strict: true }) }
            }))
          }
        }),
        ...(tags && {
          tags: {
            connectOrCreate: tags.map((t: string) => ({
              where: { name: t },
              create: { name: t, slug: slugify(t, { lower: true, strict: true }) }
            }))
          }
        }),
      }
    });
    return NextResponse.json(post);
  } catch (error) {
    console.error("Failed to create post", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const skip = (page - 1) * limit;

  const posts = await prisma.post.findMany({
    where: { status: "Published" },
    orderBy: { createdAt: "desc" },
    skip,
    take: limit,
  });

  const total = await prisma.post.count({ where: { status: "Published" } });

  return NextResponse.json({
    posts,
    meta: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }
  });
}
