import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import slugify from "slugify";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;
  const { name } = await req.json();

  if (!name) return new NextResponse("Name is required", { status: 400 });

  const slug = slugify(name, { lower: true, strict: true });

  try {
    const category = await prisma.category.update({
      where: { id },
      data: { name, slug }
    });
    return NextResponse.json(category);
  } catch (error: any) {
    if (error.code === 'P2002') return new NextResponse("Category already exists", { status: 409 });
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });

  const { id } = await params;

  try {
    await prisma.category.delete({ where: { id } });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
