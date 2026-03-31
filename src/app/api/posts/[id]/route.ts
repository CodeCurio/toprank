import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import slugify from "slugify";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const { title, excerpt, content, featuredImage, status, slug, categories, tags, createdAt } = body;

  const resolvedSlug = slug 
    ? slugify(slug, { lower: true, strict: true }) 
    : slugify(title, { lower: true, strict: true });

  try {
    const post = await prisma.post.update({
      where: { id },
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
            set: [], // Clear existing
            connectOrCreate: categories.map((c: string) => ({
              where: { name: c },
              create: { name: c, slug: slugify(c, { lower: true, strict: true }) }
            }))
          }
        }),
        ...(tags && {
          tags: {
            set: [], // Clear existing
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
    console.error("Failed to update post", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });
  
  const { id } = await params;
  await prisma.post.delete({ where: { id } });
  
  return new NextResponse(null, { status: 204 });
}

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const post = await prisma.post.findFirst({
    where: {
      OR: [
        { id },
        { slug: id }
      ]
    }
  });

  if (!post) return new NextResponse("Not Found", { status: 404 });
  return NextResponse.json(post);
}
