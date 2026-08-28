import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { SAMPLE_BLOG_POSTS } from "@/data/blogData";
import slugify from "slugify";

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("API GET /api/blogs Supabase error:", error);
      // Return sample fallback if table not yet seeded or error
      return NextResponse.json({
        data: SAMPLE_BLOG_POSTS.map((p) => ({
          id: p.id,
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt,
          content: p.content,
          cover_image: p.featuredImage,
          category: p.categories?.[0]?.name || "Digital Marketing",
          read_time: "5 min read",
          published: p.status === "Published",
          created_at: p.createdAt,
        })),
        isFallback: true,
      });
    }

    if (!data || data.length === 0) {
      return NextResponse.json({
        data: SAMPLE_BLOG_POSTS.map((p) => ({
          id: p.id,
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt,
          content: p.content,
          cover_image: p.featuredImage,
          category: p.categories?.[0]?.name || "Digital Marketing",
          read_time: "5 min read",
          published: p.status === "Published",
          created_at: p.createdAt,
        })),
        isFallback: true,
      });
    }

    return NextResponse.json({ data, isFallback: false });
  } catch (err: any) {
    console.error("Unexpected error in /api/blogs GET:", err);
    return NextResponse.json({
      data: SAMPLE_BLOG_POSTS.map((p) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        content: p.content,
        cover_image: p.featuredImage,
        category: p.categories?.[0]?.name || "Digital Marketing",
        read_time: "5 min read",
        published: p.status === "Published",
        created_at: p.createdAt,
      })),
      isFallback: true,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if this is a request to seed default sample data
    if (body.action === "seed_sample") {
      const seedItems = SAMPLE_BLOG_POSTS.map((p) => ({
        title: p.title,
        slug: p.slug || slugify(p.title, { lower: true, strict: true }),
        excerpt: p.excerpt || "",
        content: p.content || "",
        cover_image: p.featuredImage || "",
        category: p.categories?.[0]?.name || "Digital Marketing",
        read_time: "5 min read",
        published: p.status === "Published",
      }));

      const { data, error } = await supabaseAdmin
        .from("blogs")
        .upsert(seedItems, { onConflict: "slug" })
        .select();

      if (error) {
        console.error("Error seeding blogs:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, count: data?.length || 0, data });
    }

    // Normal blog insert
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

    if (!title) {
      return NextResponse.json(
        { error: "Blog Title is required." },
        { status: 400 }
      );
    }

    const finalSlug = slug || slugify(title, { lower: true, strict: true });

    const { data, error } = await supabaseAdmin
      .from("blogs")
      .insert([
        {
          title,
          slug: finalSlug,
          excerpt: excerpt || "",
          content: content || "",
          cover_image: cover_image || "",
          category: category || "Digital Marketing",
          read_time: read_time || "5 min read",
          published: published !== false,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("API POST /api/blogs error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Unexpected error in /api/blogs POST:", err);
    return NextResponse.json(
      { error: err.message || "Failed to create blog post" },
      { status: 500 }
    );
  }
}
