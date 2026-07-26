import { MetadataRoute } from 'next';
import { SAMPLE_BLOG_POSTS, SAMPLE_CATEGORIES, SAMPLE_TAGS } from '@/data/blogData';
import { SAMPLE_PORTFOLIO_PROJECTS } from '@/data/portfolioData';
import { locations } from '@/data/locationData';
import { SERVICES_DATA } from '@/lib/services-data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.toprankindia.com';

  // 1. Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/contact',
    '/services',
    '/blog',
    '/portfolio',
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
      url: `${baseUrl}${service.href}`,
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

  // 4. Dynamic Blog & Portfolio Routes from static data
  const postRoutes: MetadataRoute.Sitemap = SAMPLE_BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = SAMPLE_PORTFOLIO_PROJECTS.map((proj) => ({
    url: `${baseUrl}/portfolio/${proj.slug}`,
    lastModified: new Date(proj.createdAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = SAMPLE_CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const tagRoutes: MetadataRoute.Sitemap = SAMPLE_TAGS.map((tag) => ({
    url: `${baseUrl}/tag/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...locationRoutes,
    ...serviceRoutes,
    ...postRoutes,
    ...portfolioRoutes,
    ...categoryRoutes,
    ...tagRoutes,
  ];
}
