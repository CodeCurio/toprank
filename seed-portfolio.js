const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const dummyProjects = [
  {
    title: "EcoStore Redesign & Optimization",
    slug: "ecostore-redesign",
    content: "<h2>The Challenge</h2><p>EcoStore was facing high bounce rates and low conversion rates on their previous Shopify store...</p><h2>The Solution</h2><p>We migrated them to a custom Next.js headless storefront for blazing fast speeds and better SEO...</p>",
    excerpt: "A complete overhaul of an eco-friendly e-commerce store resulting in a 3x boost in conversions.",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Web Development",
    clientName: "EcoStore Inc.",
    liveUrl: "https://example.com",
    results: "+210% Conversion Rate",
    technologies: "Next.js, Tailwind CSS, Shopify",
    status: "Published",
  },
  {
    title: "Local Plumber SEO Dominance",
    slug: "local-plumber-seo",
    content: "<h2>The Challenge</h2><p>A local plumbing business was struggling to get leads from Google Maps...</p><h2>The Strategy</h2><p>We optimized their Google Business Profile, built local citations, and created city-specific landing pages...</p>",
    excerpt: "Dominating local search results in a highly competitive market within 3 months.",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Local SEO",
    clientName: "Elite Plumbing",
    results: "#1 Ranking in 5 Cities",
    technologies: "SEO, Local SEO, WordPress",
    status: "Published",
  },
  {
    title: "SaaS Platform Brand Identity",
    slug: "saas-brand-identity",
    content: "<h2>The Vision</h2><p>A new AI startup needed a brand identity that stood out from the typical tech crowd...</p>",
    excerpt: "Crafting a memorable brand identity and marketing site for an innovative AI SaaS product.",
    featuredImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Branding",
    clientName: "Nexus AI",
    liveUrl: "https://nexus-ai.example",
    results: "Award-winning Design",
    technologies: "Figma, React, Tailwind CSS",
    status: "Published",
  },
  {
    title: "Real Estate Lead Gen Campaign",
    slug: "real-estate-lead-gen",
    content: "<h2>The Objective</h2><p>Generate high-quality leads for luxury apartments in a saturated market...</p>",
    excerpt: "A data-driven Google Ads campaign that drastically reduced the Cost Per Acquisition (CPA).",
    featuredImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    category: "Performance Marketing",
    clientName: "Skyline Realty",
    results: "-65% Cost Per Lead",
    technologies: "Google Ads, Local SEO",
    status: "Published",
  }
];

async function main() {
  console.log("Seeding dummy portfolio projects...");
  for (const project of dummyProjects) {
    await prisma.portfolioProject.upsert({
      where: { slug: project.slug },
      update: {},
      create: project,
    });
  }
  console.log("Seeding complete.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
