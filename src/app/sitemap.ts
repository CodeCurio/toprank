import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { locations } from '@/data/locationData';
import { SERVICES_DATA } from '@/lib/services-data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://toprankindia.com';

  // 1. Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/contact',
    '/services',
    '/blog'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Location Routes
  const locationRoutes: MetadataRoute.Sitemap = Object.values(locations).flatMap((loc) => {
    const locBase = {
      url: `${baseUrl}/${loc.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
    
    const locServices = Object.keys(loc.services).map((serviceSlug) => ({
      url: `${baseUrl}/${loc.slug}/${serviceSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
    
    return [locBase, ...locServices];
  });

  // 3. Service & Sub-Service Routes
  const serviceRoutes: MetadataRoute.Sitemap = Object.values(SERVICES_DATA).flatMap((service) => {
    const srvBase = {
      url: `${baseUrl}${service.href}`, // service.href comes mapped
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    };

    const srvSub = service.subServices.map((sub) => ({
      url: `${baseUrl}${sub.href}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }));

    return [srvBase, ...srvSub];
  });

  // 4. Dynamic Blog & Taxonomies from Prisma
  let postRoutes: MetadataRoute.Sitemap = [];
  let categoryRoutes: MetadataRoute.Sitemap = [];
  let tagRoutes: MetadataRoute.Sitemap = [];

  try {
    const [posts, categories, tags] = await Promise.all([
      prisma.post.findMany({ 
        where: { status: 'Published' }, 
        select: { slug: true, updatedAt: true } 
      }),
      prisma.category.findMany({ select: { slug: true } }),
      prisma.tag.findMany({ select: { slug: true } })
    ]);

    postRoutes = posts.map((post: { slug: string, updatedAt: Date }) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    categoryRoutes = categories.map((cat: { slug: string }) => ({
      url: `${baseUrl}/category/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    }));

    tagRoutes = tags.map((tag: { slug: string }) => ({
      url: `${baseUrl}/tag/${tag.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }));
  } catch (error) {
    console.warn("Failed to generate dynamic Prisma sitemap nodes:", error);
  }

  return [
    ...staticRoutes,
    ...locationRoutes,
    ...serviceRoutes,
    ...postRoutes,
    ...categoryRoutes,
    ...tagRoutes,
  ];
}
