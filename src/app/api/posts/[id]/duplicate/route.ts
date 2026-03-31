import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession();
  
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id } = await params;

  try {
    const postToDuplicate = await prisma.post.findUnique({
      where: { id },
      include: {
        categories: true,
        tags: true,
      }
    });

    if (!postToDuplicate) {
      return new NextResponse("Post not found", { status: 404 });
    }

    const uniqueId = Math.random().toString(36).substring(2, 7);

    const duplicatedPost = await prisma.post.create({
      data: {
        title: `${postToDuplicate.title} (Copy)`,
        slug: `${postToDuplicate.slug}-copy-${uniqueId}`,
        content: postToDuplicate.content,
        excerpt: postToDuplicate.excerpt,
        featuredImage: postToDuplicate.featuredImage,
        status: "Draft",
        authorId: postToDuplicate.authorId,
        categories: {
          connect: postToDuplicate.categories.map(c => ({ id: c.id }))
        },
        tags: {
          connect: postToDuplicate.tags.map(t => ({ id: t.id }))
        }
      }
    });

    return NextResponse.json(duplicatedPost, { status: 201 });
  } catch (error) {
    console.error("[POST_DUPLICATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
