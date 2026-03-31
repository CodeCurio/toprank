import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import slugify from "slugify";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tags = await prisma.tag.findMany({
      include: { _count: { select: { posts: true } } },
      orderBy: { name: 'asc' }
    });
    return NextResponse.json(tags);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { name } = await req.json();
  if (!name) return new NextResponse("Name is required", { status: 400 });

  const slug = slugify(name, { lower: true, strict: true });

  try {
    const tag = await prisma.tag.create({
      data: { name, slug }
    });
    return NextResponse.json(tag, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') return new NextResponse("Tag already exists", { status: 409 });
    return new NextResponse("Internal Error", { status: 500 });
  }
}
