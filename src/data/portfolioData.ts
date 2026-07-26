export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  clientName: string;
  liveUrl?: string;
  results: string;
  technologies: string;
  status: "Published" | "Draft";
  createdAt: string;
}

export const SAMPLE_PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "Chandigarh Dental Clinic — Local Organic Dominance",
    slug: "chandigarh-dental-clinic-local-seo",
    excerpt: "Scaled organic patient bookings by 320% in 6 months using hyper-local SEO and custom landing pages.",
    content: `
      <h2>Client Challenge</h2>
      <p>The clinic faced intense competition in central Chandigarh and was struggling to rank for primary high-value keywords like 'Best Dentist Chandigarh' and 'Invisalign Specialist'.</p>

      <h2>Our Growth Blueprint</h2>
      <ul>
        <li>Redesigned site architecture for sub-second mobile performance.</li>
        <li>Implemented localized schema markup for multi-branch listings.</li>
        <li>Launched a high-converting patient review generation campaign.</li>
      </ul>

      <h2>Key Results</h2>
      <p>Ranked #1 in Google 3-Pack for 14 primary search terms, driving over 180 new appointment inquiries per month.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    category: "SEO & Local Marketing",
    clientName: "Chandigarh Dental Care",
    liveUrl: "https://example.com",
    results: "+320% Patient Leads",
    technologies: "Next.js, Tailwind CSS, Google Business Profile",
    status: "Published",
    createdAt: "2026-06-20T00:00:00.000Z",
  },
  {
    id: "proj-2",
    title: "Nexus E-Commerce Platform — Conversion Re-Engineering",
    slug: "nexus-ecommerce-conversion-growth",
    excerpt: "Re-engineered modern storefront UI and checkout workflow, increasing store sales by $450k.",
    content: `
      <h2>The Challenge</h2>
      <p>Cart abandonment rate was high at 78% due to slow mobile page speeds and cluttered product pages.</p>

      <h2>Our Solution</h2>
      <p>We rebuilt the storefront with clean, progressive image loading, instant search filtering, and single-click checkout options.</p>

      <h2>Final Outcome</h2>
      <p>Cart abandonment dropped to 42%, boosting total monthly revenue by over 85% within 90 days.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1556742049-0a67ef86e963?auto=format&fit=crop&w=1200&q=80",
    category: "Web Development",
    clientName: "Nexus Retail Group",
    liveUrl: "https://example.com",
    results: "+85% Monthly Revenue",
    technologies: "React, Next.js, Stripe, Custom CSS",
    status: "Published",
    createdAt: "2026-05-15T00:00:00.000Z",
  },
  {
    id: "proj-3",
    title: "Apex Real Estate — National Lead Engine",
    slug: "apex-real-estate-lead-engine",
    excerpt: "Generated 1,200+ qualified property buyer leads via targeted Google Search and Meta Ads campaigns.",
    content: `
      <h2>Strategic Approach</h2>
      <p>We designed hyper-segmented funnel campaigns targeting high-net-worth real estate investors in tier-1 markets.</p>

      <h2>Key Takeaway</h2>
      <p>Cost-per-lead (CPL) decreased by 54% while lead conversion rate increased by 2.4x.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    category: "PPC & Lead Generation",
    clientName: "Apex Properties",
    liveUrl: "https://example.com",
    results: "1,200+ Qualified Leads",
    technologies: "Google Ads, Meta Ads, Conversion Tracking",
    status: "Published",
    createdAt: "2026-04-10T00:00:00.000Z",
  },
];
