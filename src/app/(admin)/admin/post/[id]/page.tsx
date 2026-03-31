import PostForm from "@/components/PostForm";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await prisma.post.findUnique({
    where: { id },
    // @ts-ignore
    include: { categories: true, tags: true }
  });

  if (!post) {
    notFound();
  }

  const postData = {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || "",
    featuredImage: post.featuredImage || "",
    content: post.content,
    status: post.status as "Draft" | "Published",
    // @ts-ignore
    categories: post.categories?.map((c: any) => c.name).join(", ") || "",
    // @ts-ignore
    tags: post.tags?.map((t: any) => t.name).join(", ") || "",
  };

  return <PostForm initialData={postData} />;
}
