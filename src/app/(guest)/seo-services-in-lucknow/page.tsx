import { Metadata } from "next";
import { SeoServicesInLucknowClient } from "@/components/services/custom/SeoServicesInLucknowClient";

export const metadata: Metadata = {
  title: {
    absolute: "Best SEO Services in Lucknow | Rank #1 on Google - TopRank"
  },
  description: "Looking for top-rated SEO services in Lucknow? TopRank helps businesses rank #1 on Google, drive targeted organic traffic, dominate local map pack & get 5X leads.",
  keywords: [
    "SEO Services in Lucknow",
    "Best SEO Agency in Lucknow",
    "SEO Company in Lucknow",
    "Local SEO in Lucknow",
    "SEO Expert Lucknow",
    "Google Maps GMB Ranking Lucknow",
    "Ecommerce SEO Services Lucknow",
    "Affordable SEO Packages Lucknow",
    "TopRank Digital Service Lucknow"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/seo-services-in-lucknow",
  },
  openGraph: {
    title: "SEO Services in Lucknow | TopRank Digital Service",
    description: "Looking for SEO services in Lucknow? TopRank Digital Service helps businesses improve Google rankings, organic traffic, local visibility and leads with result-focused SEO.",
    url: "https://www.toprankindia.com/seo-services-in-lucknow",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services in Lucknow | TopRank Digital Service",
    description: "Looking for SEO services in Lucknow? TopRank Digital Service helps businesses improve Google rankings, organic traffic, local visibility and leads with result-focused SEO.",
  }
};

export default function SeoServicesInLucknowPage() {
  return <SeoServicesInLucknowClient />;
}
