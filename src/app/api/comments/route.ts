import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, content, postId } = await req.json();

    if (!name || !email || !content || !postId) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Verify Post exists
    const post = await prisma.post.findUnique({ where: { id: postId } });
    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    const comment = await prisma.comment.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        content: content.trim(),
        postId,
        isApproved: true, // We auto-approve for now. This can be changed later for moderation.
      }
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error("[COMMENT_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
