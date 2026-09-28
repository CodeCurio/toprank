/**
 * Shared Supabase query helpers for the blogs system.
 * Used by both public pages (server-side) and API routes.
 * All queries use supabaseAdmin (service role) for server-side access.
 */

import { supabaseAdmin } from "./admin";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image: string | null;
  category: string;
  read_time: string;
  author: string;
  tags: string[] | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

/** Columns fetched for the listing page (excludes heavy content field). */
const LIST_COLUMNS =
  "id, title, slug, excerpt, cover_image, category, read_time, published, created_at";

/** Fetch paginated published blog posts (no content body — optimised). */
export async function getPublishedBlogs(
  page = 1,
  limit = 6
): Promise<{ posts: Partial<BlogPost>[]; total: number; error: string | null }> {
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await supabaseAdmin
    .from("blogs")
    .select(LIST_COLUMNS, { count: "exact" })
    .eq("published", true)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("[blogs] getPublishedBlogs error:", error.message);
    return { posts: [], total: 0, error: error.message };
  }

  return { posts: data ?? [], total: count ?? 0, error: null };
}

/** Fetch a single published post by slug (full content). */
export async function getBlogBySlug(
  slug: string
): Promise<{ post: BlogPost | null; error: string | null }> {
  const { data, error } = await supabaseAdmin
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("[blogs] getBlogBySlug error:", error.message);
    return { post: null, error: error.message };
  }

  return { post: data as BlogPost, error: null };
}

/** Fetch slugs of all published posts (used for generateStaticParams). */
export async function getAllPublishedSlugs(): Promise<string[]> {
  const { data, error } = await supabaseAdmin
    .from("blogs")
    .select("slug")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[blogs] getAllPublishedSlugs error:", error.message);
    return [];
  }

  return (data ?? []).map((r: { slug: string }) => r.slug);
}

/** Fetch related posts by category (excludes current post). */
export async function getRelatedBlogs(
  category: string,
  excludeSlug: string,
  limit = 3
): Promise<Partial<BlogPost>[]> {
  const { data, error } = await supabaseAdmin
    .from("blogs")
    .select("id, title, slug, cover_image, category, created_at")
    .eq("published", true)
    .eq("category", category)
    .neq("slug", excludeSlug)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("[blogs] getRelatedBlogs error:", error.message);
    return [];
  }

  return data ?? [];
}
