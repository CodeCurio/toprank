export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  clientName: string;
  location?: string;
  challenge?: string;
  solution?: string;
  liveUrl?: string;
  results: string;
  metrics?: { label: string; value: string }[];
  technologies: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  status: "Published" | "Draft";
  createdAt: string;
}

export const SAMPLE_PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "Chandigarh Dental Clinic — Local Organic Dominance",
    slug: "chandigarh-dental-clinic-local-seo",
    excerpt: "Scaled organic patient bookings by 320% in 6 months using hyper-local SEO, sub-second Next.js landing pages, and Google Maps 3-Pack optimization.",
    content: `
      <h2>Client Challenge & Background</h2>
      <p>The dental clinic faced intense local competition in central Chandigarh. Despite providing world-class orthodontic and cosmetic dentistry services, their website was sluggish, lacked local search relevance, and struggled to rank for high-intent keywords like 'Best Dentist Chandigarh' and 'Invisalign Specialist'.</p>

      <h2>Our Growth & Engineering Blueprint</h2>
      <ul>
        <li><strong>Sub-Second Web Architecture:</strong> Rebuilt the patient portal from the ground up using Next.js and Tailwind CSS, slashing page load times from 4.8s to 0.7s.</li>
        <li><strong>Hyper-Local Schema & Citations:</strong> Engineered localized medical clinic schema markup and synced multi-branch Google Business Profiles.</li>
        <li><strong>Automated Review Generation:</strong> Integrated an automated WhatsApp post-consultation review flow, multiplying 5-star Google reviews by 4.2x.</li>
      </ul>

      <h2>The Outcome & Business Impact</h2>
      <p>Within 90 days, the clinic captured the #1 spot in Google Maps 3-Pack for 14 high-value commercial keywords, leading to an influx of over 180 verified appointment inquiries every month.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    category: "Healthcare & Diagnostics",
    clientName: "Chandigarh Dental Care",
    location: "Chandigarh, India",
    challenge: "• Sluggish 4.8s website load time causing high mobile visitor drop-offs\n• Zero visibility in Google Maps 3-Pack for primary dental keywords\n• High cost per lead on un-optimized generic PPC ad campaigns\n• Lack of automated lead capture and WhatsApp appointment bookings",
    solution: "• Re-engineered responsive high-speed portal with Next.js & Tailwind CSS\n• Localized multi-branch SEO schema and Google 3-Pack dominance strategy\n• Automated WhatsApp appointment booking and review collection engine\n• Laser-targeted Google Search Ads reducing overall cost per booking by 48%",
    liveUrl: "https://example.com",
    results: "+320% Patient Leads",
    metrics: [
      { label: "Patient Bookings", value: "+320%" },
      { label: "Google Maps 3-Pack", value: "#1 Rank" },
      { label: "Page Load Speed", value: "0.7s" },
      { label: "Cost Per Lead", value: "-48%" },
    ],
    technologies: "Next.js, React, Tailwind CSS, Google Maps 3-Pack, SEO & Local Search, WhatsApp Automation",
    testimonial: {
      quote: "TopRank transformed our digital clinic presence. Within three months, our daily appointment calendar was completely booked from organic Google Maps inquiries alone!",
      author: "Dr. Vikram Sethi",
      role: "Chief Dental Surgeon & Founder",
    },
    status: "Published",
    createdAt: "2026-06-20T00:00:00.000Z",
  },
  {
    id: "proj-2",
    title: "Nexus E-Commerce Platform — Conversion Re-Engineering",
    slug: "nexus-ecommerce-conversion-growth",
    excerpt: "Re-engineered modern storefront UI and checkout workflow, increasing store sales by $450k and reducing cart abandonment from 78% to 42%.",
    content: `
      <h2>The Challenge</h2>
      <p>Nexus Retail had a catalog of 2,500+ SKU lifestyle products but suffered from a brutal 78% cart abandonment rate. Legacy monolithic code caused severe lag during peak mobile traffic, hindering checkout completions.</p>

      <h2>Our Solution</h2>
      <p>We built a headless e-commerce frontend with instant search indexing, progressive image loading, and a simplified 2-step frictionless checkout with native Stripe integration.</p>

      <h2>Final Outcome</h2>
      <p>Mobile conversion rate surged by 115%, resulting in over $450,000 in incremental revenue during the first 6 months following deployment.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1556742049-0a67ef86e963?auto=format&fit=crop&w=1200&q=80",
    category: "Retail & E-commerce",
    clientName: "Nexus Retail Group",
    location: "Mumbai, India",
    challenge: "• Severe checkout friction and 78% cart abandonment rate\n• Slow product filtering on mobile devices taking over 3 seconds\n• Low average order value (AOV) without personalized product bundles\n• Cluttered UI lacking modern product discovery animations",
    solution: "• Headless Next.js e-commerce architecture with edge-cached product catalogs\n• Instant instant-type search filtering with algorithmic recommendations\n• Streamlined 1-click checkout with Stripe and digital wallet support\n• Custom dynamic discount and bundle recommendation engine",
    liveUrl: "https://example.com",
    results: "+85% Monthly Revenue",
    metrics: [
      { label: "Revenue Surge", value: "+85%" },
      { label: "Cart Drop Rate", value: "-46%" },
      { label: "Mobile Conversion", value: "3.8%" },
      { label: "Gross Sales Added", value: "$450k+" },
    ],
    technologies: "Next.js, React, Tailwind CSS, Stripe, Shopify, UI/UX Design, Supabase",
    testimonial: {
      quote: "The speed and checkout smoothness TopRank delivered exceeded our highest expectations. Our sales numbers speak for themselves.",
      author: "Aman Singhania",
      role: "Head of Digital Commerce",
    },
    status: "Published",
    createdAt: "2026-05-15T00:00:00.000Z",
  },
  {
    id: "proj-3",
    title: "Apex Real Estate — High-Net-Worth Lead Engine",
    slug: "apex-real-estate-lead-engine",
    excerpt: "Generated 1,200+ qualified property buyer leads via targeted Google Search, Meta Ads, and automated interactive property visualizer funnels.",
    content: `
      <h2>Strategic Approach</h2>
      <p>We designed hyper-segmented funnel campaigns targeting high-net-worth real estate buyers and investors across tier-1 metro areas. Combined with high-converting virtual walkthrough landing pages, buyer inquiries surged rapidly.</p>

      <h2>Key Takeaway</h2>
      <p>Cost-per-lead (CPL) decreased by 54% while lead conversion rate increased by 2.4x compared to historical averages.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    category: "Real Estate & Architecture",
    clientName: "Apex Luxury Properties",
    location: "Delhi NCR, India",
    challenge: "• High customer acquisition cost ($110+ per lead) on broad advertising channels\n• Poor lead quality with low sales conversion by on-ground agents\n• Lack of interactive property previews for NRI and remote investors\n• Slow response time from lead submission to agent outreach",
    solution: "• High-converting interactive landing pages with virtual tour embeds\n• Hyper-targeted Meta & Google Ads funnels with verified income filters\n• Automated instant WhatsApp CRM dispatch to assigned property managers\n• Custom retargeting sequences highlighting limited-time floor plans",
    liveUrl: "https://example.com",
    results: "1,200+ Qualified Leads",
    metrics: [
      { label: "Qualified Buyer Leads", value: "1,200+" },
      { label: "Cost Per Lead (CPL)", value: "-54%" },
      { label: "Lead-to-Tour Rate", value: "32%" },
      { label: "Property Bookings", value: "₹42 Cr" },
    ],
    technologies: "Google Ads (PPC), Meta Ads (FB/IG), WhatsApp Automation, Lead Generation Funnel, Next.js",
    testimonial: {
      quote: "TopRank didn't just deliver clicks; they delivered genuine property buyers with real budgets. Our sales team closed 18 premium villas within 4 months.",
      author: "Rajesh Malhotra",
      role: "Managing Director",
    },
    status: "Published",
    createdAt: "2026-04-10T00:00:00.000Z",
  },
];
