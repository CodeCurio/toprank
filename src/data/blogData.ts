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
    excerpt: "Discover the exact blueprint TopRank uses to land local businesses in the Google 3-Pack within 90 days across Lucknow, Chandigarh, Mohali, and Gonda.",
    content: `
      <h2>Why Local SEO Is More Competitive Than Ever</h2>
      <p>In today's digital ecosystem, winning local search visibility requires more than just claiming a Google Business Profile. Search engines utilize contextual proximity signals, user interaction metrics, and structured data according to <a href="https://developers.google.com/search/docs/essentials" target="_blank" rel="noopener noreferrer">Google Search Essentials</a> to decide who ranks at the top.</p>
      
      <h2>1. Optimize Your Google Business Profile for High Intent</h2>
      <p>Ensure your business name, address, and phone number (NAP) are 100% consistent across every regional directory. If you are operating in North India, explore our specialized <a href="/seo-services-in-lucknow">SEO services in Lucknow</a> and <a href="/seo-services-in-chandigarh">SEO services in Chandigarh</a> to see how we structure multi-location GMB signals.</p>
      
      <h2>2. Build Hyper-Local Pillar Landing Pages</h2>
      <p>Target specific city sectors with dedicated localized copy, custom <a href="https://schema.org/LocalBusiness" target="_blank" rel="noopener noreferrer">Schema.org LocalBusiness structured data</a>, and localized service silos. Businesses expanding across the Tricity can leverage our dedicated <a href="/seo-services-in-mohali">SEO services in Mohali</a> and regional UP enterprises can refer to our <a href="/seo-services-in-gonda">SEO services in Gonda</a>.</p>
      
      <h2>3. Master Technical Site Speed & Core Web Vitals</h2>
      <p>Google prioritizes mobile performance benchmarks defined on <a href="https://web.dev/vitals/" target="_blank" rel="noopener noreferrer">web.dev Core Web Vitals</a>. Fast-loading Next.js websites outrank bloated legacy platforms and convert visitors into paying clients faster.</p>

      <h2>4. Acquire Contextual High-DA Editorial Backlinks</h2>
      <p>Local citations alone are not enough for high-competition keywords. Earning editorial backlinks from reputable business portals and industry publications passes genuine authority to your core pillar pages.</p>
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
      <p>Driving traffic to a website is only half the battle. If your conversion rate is below 3%, you are burning valuable organic opportunities. Pairing high-ranking <a href="/services/seo">organic SEO strategies</a> with conversion-focused landing pages guarantees maximum return on investment.</p>
      
      <h2>Focus on Above-The-Fold Clarity</h2>
      <p>Within 3 seconds, a visitor should know: What you offer, why you are the best choice, and how to get started immediately. Our custom <a href="/services/website-development-lucknow">website development services</a> focus on speed, clarity, and instant WhatsApp/call conversion triggers.</p>
      
      <h2>Frictionless Contact Forms</h2>
      <p>Reduce required input fields to the bare essentials. Short, focused lead forms convert up to 40% higher than multi-step complex forms. Ensure your website complies with modern <a href="https://www.w3.org/WAI/standards-guidelines/" target="_blank" rel="noopener noreferrer">W3C Web Accessibility Guidelines</a>.</p>
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
      <p>Modern web engineering emphasizes fast initial load times and optimized client bundles. Next.js delivers sub-second page transition speeds and seamless user experiences that Google search spiders love.</p>
      
      <h2>Why Technical SEO Starts with Architecture</h2>
      <p>Clean semantic HTML5 structure, automated XML sitemaps, and dynamic OpenGraph meta tags allow search crawlers to index your pillar and cluster pages efficiently. Discover how we implement this for clients in our <a href="/seo-services-in-lucknow">Lucknow SEO</a> and <a href="/seo-services-in-chandigarh">Chandigarh SEO</a> campaigns.</p>

      <h2>Optimized Performance Meets Premium Aesthetics</h2>
      <p>Curated design systems with optimized CSS variables yield cleaner, more maintainable codebases with zero render-blocking bloat, achieving consistent 95+ PageSpeed Insights scores.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    status: "Published",
    createdAt: "2026-07-02T09:15:00.000Z",
    categories: [{ id: "cat-3", name: "Web Development", slug: "web-development" }],
    tags: [{ id: "tag-4", name: "Next.js", slug: "next-js" }],
  },
  {
    id: "post-4",
    title: "Complete Guide to SEO Pricing & Packages in India for 2026",
    slug: "seo-pricing-packages-guide-2026",
    excerpt: "Understand what professional SEO services should cost, key monthly deliverables, and how to choose the right agency for your business.",
    content: `
      <h2>Understanding SEO Pricing Models</h2>
      <p>Professional SEO pricing in India varies based on keyword competition, geographic targeting, and agency expertise. At TopRank Digital Service, transparent fixed packages start from ₹6,000/month for local growth up to ₹12,000/month for enterprise and e-commerce brands.</p>
      
      <h2>City-Specific Market Competitiveness</h2>
      <p>Ranking in competitive metropolitan hubs requires structured topic clusters. Check our transparent packages for <a href="/seo-services-in-lucknow">SEO in Lucknow</a>, <a href="/seo-services-in-chandigarh">SEO in Chandigarh</a>, <a href="/seo-services-in-mohali">SEO in Mohali</a>, and <a href="/seo-services-in-gonda">SEO in Gonda</a>.</p>
      
      <h2>What Every Legitimate SEO Package Must Include</h2>
      <p>Avoid agencies offering thousands of automated backlinks. Real ROI requires technical site audits, on-page optimization, <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer">Google-compliant structured data</a>, high-quality content creation, and live rank tracking.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80",
    status: "Published",
    createdAt: "2026-08-01T11:00:00.000Z",
    categories: [{ id: "cat-1", name: "Search Engine Optimization", slug: "seo" }],
    tags: [
      { id: "tag-5", name: "Local SEO", slug: "local-seo" },
      { id: "tag-3", name: "Content Strategy", slug: "content-strategy" }
    ],
  }
];
