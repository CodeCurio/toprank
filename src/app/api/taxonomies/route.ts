import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [categories, tags] = await Promise.all([
      // @ts-ignore
      prisma.category.findMany({ orderBy: { name: 'asc' } }),
      // @ts-ignore
      prisma.tag.findMany({ orderBy: { name: 'asc' } })
    ]);
    
    return NextResponse.json({ categories, tags });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
