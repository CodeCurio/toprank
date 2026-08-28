import { Metadata } from "next";
import { SeoServicesInGondaClient } from "@/components/services/custom/SeoServicesInGondaClient";

export const metadata: Metadata = {
  title: {
    absolute: "Best SEO Services in Gonda | Rank #1 on Google - TopRank"
  },
  description: "Looking for top-rated SEO services in Gonda? TopRank helps businesses rank #1 on Google, dominate local map pack & capture high-intent leads across Gonda & Eastern UP.",
  keywords: [
    "SEO Services in Gonda",
    "Best SEO Agency in Gonda",
    "SEO Company in Gonda",
    "Local SEO in Gonda",
    "SEO Expert Gonda",
    "Google Maps GMB Ranking Gonda",
    "Ecommerce SEO Services Gonda",
    "Affordable SEO Packages Gonda",
    "TopRank Digital Service Gonda"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/seo-services-in-gonda",
  },
  openGraph: {
    title: "Best SEO Services in Gonda | Rank #1 on Google - TopRank",
    description: "Looking for top-rated SEO services in Gonda? TopRank helps businesses rank #1 on Google, dominate local map pack & capture high-intent leads across Gonda & Eastern UP.",
    url: "https://www.toprankindia.com/seo-services-in-gonda",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Services in Gonda | Rank #1 on Google - TopRank",
    description: "Looking for top-rated SEO services in Gonda? TopRank helps businesses rank #1 on Google, dominate local map pack & capture high-intent leads across Gonda & Eastern UP.",
  }
};

export default function SeoServicesInGondaPage() {
  return <SeoServicesInGondaClient />;
}
