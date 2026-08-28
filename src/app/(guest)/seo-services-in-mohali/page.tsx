import { Metadata } from "next";
import { SeoServicesInMohaliClient } from "@/components/services/custom/SeoServicesInMohaliClient";

export const metadata: Metadata = {
  title: {
    absolute: "Best SEO Services in Mohali | Rank #1 on Google - TopRank"
  },
  description: "Looking for top-rated SEO services in Mohali? TopRank helps businesses rank #1 on Google, dominate local map pack & capture high-intent leads in Phase 7, 8 & Aerocity.",
  keywords: [
    "SEO Services in Mohali",
    "Best SEO Agency in Mohali",
    "SEO Company in Mohali",
    "Local SEO in Mohali",
    "SEO Expert Mohali",
    "Google Maps GMB Ranking Mohali",
    "Ecommerce SEO Services Mohali",
    "Affordable SEO Packages Mohali",
    "TopRank Digital Service Mohali"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/seo-services-in-mohali",
  },
  openGraph: {
    title: "Best SEO Services in Mohali | Rank #1 on Google - TopRank",
    description: "Looking for top-rated SEO services in Mohali? TopRank helps businesses rank #1 on Google, dominate local map pack & capture high-intent leads in Phase 7, 8 & Aerocity.",
    url: "https://www.toprankindia.com/seo-services-in-mohali",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Services in Mohali | Rank #1 on Google - TopRank",
    description: "Looking for top-rated SEO services in Mohali? TopRank helps businesses rank #1 on Google, dominate local map pack & capture high-intent leads in Phase 7, 8 & Aerocity.",
  }
};

export default function SeoServicesInMohaliPage() {
  return <SeoServicesInMohaliClient />;
}
