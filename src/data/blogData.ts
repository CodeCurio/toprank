export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  status: "Published" | "Draft";
  createdAt: string;
  categories: Category[];
  tags: Tag[];
}

export const SAMPLE_CATEGORIES: Category[] = [
  { id: "cat-1", name: "Search Engine Optimization", slug: "seo" },
  { id: "cat-2", name: "Digital Marketing", slug: "digital-marketing" },
  { id: "cat-3", name: "Web Development", slug: "web-development" },
  { id: "cat-4", name: "Local Growth", slug: "local-growth" },
];

export const SAMPLE_TAGS: Tag[] = [
  { id: "tag-1", name: "Google Maps", slug: "google-maps" },
  { id: "tag-2", name: "Conversion Rate", slug: "conversion-rate" },
  { id: "tag-3", name: "Content Strategy", slug: "content-strategy" },
  { id: "tag-4", name: "Next.js", slug: "next-js" },
  { id: "tag-5", name: "Local SEO", slug: "local-seo" },
];

export const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "10 Proven Local SEO Strategies to Dominate Search Rankings in 2026",
    slug: "local-seo-strategies-2026",
    excerpt: "Discover the exact blueprint TopRank uses to land local businesses in the Google 3-Pack within 90 days.",
    content: `
      <h2>Why Local SEO Is More Competitive Than Ever</h2>
      <p>In today's digital ecosystem, winning local search visibility requires more than just claiming a Google Business Profile. Search engines utilize contextual signals, proximity algorithms, and user behavior metrics to decide who ranks at the top.</p>
      
      <h2>1. Optimize Your Google Business Profile for High Intent</h2>
      <p>Ensure your business name, address, and phone number (NAP) are 100% consistent across every local directory. Upload high-resolution photos weekly and generate geotagged reviews regularly.</p>
      
      <h2>2. Build Hyper-Local Landing Pages</h2>
      <p>Target specific suburb and city pages with dedicated localized copy, custom schema markup (LocalBusiness schema), and embedded Google Maps.</p>
      
      <h2>3. Master Technical Site Speed</h2>
      <p>Google prioritizes mobile experience and Core Web Vitals. Fast-loading Next.js sites outrank legacy, bloated CMS platforms every time.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    status: "Published",
    createdAt: "2026-07-15T10:00:00.000Z",
    categories: [{ id: "cat-1", name: "Search Engine Optimization", slug: "seo" }],
    tags: [
      { id: "tag-1", name: "Google Maps", slug: "google-maps" },
      { id: "tag-5", name: "Local SEO", slug: "local-seo" },
    ],
  },
  {
    id: "post-2",
    title: "How to Double Your Website's Conversion Rate Without Extra Ad Spend",
    slug: "double-website-conversion-rate",
    excerpt: "Learn how UX micro-interactions, clear visual hierarchy, and strategic trust badges turn traffic into qualified leads.",
    content: `
      <h2>The Conversion Rate Optimization (CRO) Equation</h2>
      <p>Driving traffic to a website is only half the battle. If your conversion rate is below 3%, you are burning valuable ad budget and organic opportunities.</p>
      
      <h2>Focus on Above-The-Fold Clarity</h2>
      <p>Within 3 seconds, a visitor should know: What you offer, why you are the best choice, and how to get started immediately.</p>
      
      <h2>Frictionless Contact Forms</h2>
      <p>Reduce required input fields to the bare essentials. Short, focused lead forms convert up to 40% higher than multi-step complex forms.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    status: "Published",
    createdAt: "2026-07-10T14:30:00.000Z",
    categories: [{ id: "cat-2", name: "Digital Marketing", slug: "digital-marketing" }],
    tags: [{ id: "tag-2", name: "Conversion Rate", slug: "conversion-rate" }],
  },
  {
    id: "post-3",
    title: "Building Modern High-Speed Web Applications with Next.js 16",
    slug: "building-modern-high-speed-web-apps",
    excerpt: "A deep dive into static site generation, server components, and modern UI practices for scalable business websites.",
    content: `
      <h2>The Shift to Server-First Web Architecture</h2>
      <p>Modern web engineering emphasizes fast initial load times and optimized client bundles. Next.js delivers sub-second page transition speeds and seamless user experiences.</p>
      
      <h2>Why Custom CSS Outperforms Framework Overhead</h2>
      <p>Curated design systems with optimized CSS variables yield cleaner, more maintainable codebases with minimal render-blocking resources.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    status: "Published",
    createdAt: "2026-07-02T09:15:00.000Z",
    categories: [{ id: "cat-3", name: "Web Development", slug: "web-development" }],
    tags: [{ id: "tag-4", name: "Next.js", slug: "next-js" }],
  },
];
