import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import slugify from "slugify";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { data, error } = await supabaseAdmin
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }

    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const {
      title,
      slug,
      excerpt,
      content,
      cover_image,
      category,
      read_time,
      published,
    } = body;

    const finalSlug = slug || (title ? slugify(title, { lower: true, strict: true }) : undefined);

    const updatePayload: any = {
      updated_at: new Date().toISOString(),
    };

    if (title !== undefined) updatePayload.title = title;
    if (finalSlug !== undefined) updatePayload.slug = finalSlug;
    if (excerpt !== undefined) updatePayload.excerpt = excerpt;
    if (content !== undefined) updatePayload.content = content;
    if (cover_image !== undefined) updatePayload.cover_image = cover_image;
    if (category !== undefined) updatePayload.category = category;
    if (read_time !== undefined) updatePayload.read_time = read_time;
    if (published !== undefined) updatePayload.published = Boolean(published);

    const { data, error } = await supabaseAdmin
      .from("blogs")
      .update(updatePayload)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("API PUT /api/blogs/[id] error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Unexpected error in /api/blogs/[id] PUT:", err);
    return NextResponse.json(
      { error: err.message || "Failed to update blog post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { error } = await supabaseAdmin
      .from("blogs")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("API DELETE /api/blogs/[id] error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Unexpected error in /api/blogs/[id] DELETE:", err);
    return NextResponse.json(
      { error: err.message || "Failed to delete blog post" },
      { status: 500 }
    );
  }
}
