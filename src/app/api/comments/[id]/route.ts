import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession();
  
  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { id } = await params;

  try {
    const comment = await prisma.comment.delete({
      where: { id },
    });

    return NextResponse.json(comment, { status: 200 });
  } catch (error) {
    console.error("[COMMENT_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
