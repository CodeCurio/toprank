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
      .from("portfolios")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }

    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to fetch portfolio" },
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
      client_name,
      industry,
      location,
      summary,
      challenge,
      solution,
      content,
      results_metrics,
      cover_image,
      live_url,
      technologies,
      featured,
      published,
    } = body;

    const finalSlug = slug || (title ? slugify(title, { lower: true, strict: true }) : undefined);

    const updatePayload: any = {
      updated_at: new Date().toISOString(),
    };

    if (title !== undefined) updatePayload.title = title;
    if (finalSlug !== undefined) updatePayload.slug = finalSlug;
    if (client_name !== undefined) updatePayload.client_name = client_name;
    if (industry !== undefined) updatePayload.industry = industry;
    if (location !== undefined) updatePayload.location = location;
    if (summary !== undefined) updatePayload.summary = summary;
    if (challenge !== undefined) updatePayload.challenge = challenge;
    if (solution !== undefined) updatePayload.solution = solution;
    if (content !== undefined) updatePayload.content = content;
    if (results_metrics !== undefined) updatePayload.results_metrics = results_metrics;
    if (cover_image !== undefined) updatePayload.cover_image = cover_image;
    if (live_url !== undefined) updatePayload.live_url = live_url;
    if (technologies !== undefined) updatePayload.technologies = technologies;
    if (featured !== undefined) updatePayload.featured = Boolean(featured);
    if (published !== undefined) updatePayload.published = Boolean(published);

    const { data, error } = await supabaseAdmin
      .from("portfolios")
      .update(updatePayload)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("API PUT /api/portfolios/[id] error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Unexpected error in /api/portfolios/[id] PUT:", err);
    return NextResponse.json(
      { error: err.message || "Failed to update portfolio" },
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
      .from("portfolios")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("API DELETE /api/portfolios/[id] error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Unexpected error in /api/portfolios/[id] DELETE:", err);
    return NextResponse.json(
      { error: err.message || "Failed to delete portfolio" },
      { status: 500 }
    );
  }
}
