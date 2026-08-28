import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { SAMPLE_PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import slugify from "slugify";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("portfolios")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("API GET /api/portfolios error:", error);
      return NextResponse.json(
        { 
          error: error.message || "Failed to fetch portfolios", 
          details: error.details,
          hint: error.hint,
          code: error.code 
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ data: data || [] });
  } catch (err: any) {
    console.error("Unexpected error in /api/portfolios GET:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error fetching portfolios" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if this is a request to seed default sample data
    if (body.action === "seed_sample") {
      const seedItems = SAMPLE_PORTFOLIO_PROJECTS.map((proj) => ({
        title: proj.title,
        slug: proj.slug || slugify(proj.title, { lower: true, strict: true }),
        client_name: proj.clientName,
        industry: proj.category,
        location: "Lucknow, UP",
        summary: proj.excerpt,
        challenge: proj.challenge || "Low search rankings and poor user conversion.",
        solution: proj.solution || "Custom Next.js architecture, fast local SEO, and conversion optimization.",
        content: proj.content,
        cover_image: proj.featuredImage,
        live_url: proj.liveUrl || "https://example.com",
        technologies: proj.technologies,
        results_metrics: [{ label: "Growth", value: proj.results }],
        featured: true,
        published: proj.status === "Published",
      }));

      const { data, error } = await supabaseAdmin
        .from("portfolios")
        .upsert(seedItems, { onConflict: "slug" })
        .select();

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, count: data?.length || 0, data });
    }

    // Normal portfolio insert
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

    if (!title || !client_name) {
      return NextResponse.json(
        { error: "Title and Client Name are required." },
        { status: 400 }
      );
    }

    const finalSlug = slug || slugify(title, { lower: true, strict: true });

    const { data, error } = await supabaseAdmin
      .from("portfolios")
      .insert([
        {
          title,
          slug: finalSlug,
          client_name,
          industry: industry || "General",
          location: location || "Lucknow, UP",
          summary: summary || "",
          challenge: challenge || "",
          solution: solution || "",
          content: content || "",
          results_metrics: results_metrics || [],
          cover_image: cover_image || "",
          live_url: live_url || "",
          technologies: technologies || "Next.js, React, SEO",
          featured: Boolean(featured),
          published: published !== false,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("API POST /api/portfolios error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Unexpected error in /api/portfolios POST:", err);
    return NextResponse.json(
      { error: err.message || "Failed to create portfolio item" },
      { status: 500 }
    );
  }
}
