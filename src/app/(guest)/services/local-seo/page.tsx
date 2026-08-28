import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Local SEO & Google Business Profile (GMB) Optimization | TopRank",
  description: "Dominate the Google Maps 3-Pack and local search. Hyper-local citation building, GMB profile ranking, review automation, and geo-targeted optimization.",
  keywords: [
    "Local SEO Services",
    "Google My Business Optimization",
    "GMB Ranking Agency",
    "Google Maps 3-Pack SEO",
    "Local Citation Building",
    "TopRank Local SEO"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/local-seo",
  },
  openGraph: {
    title: "Local SEO & Google Business Profile (GMB) Optimization | TopRank",
    description: "Own local search and drive high-intent nearby customers straight to your phone and storefront.",
    url: "https://www.toprankindia.com/services/local-seo",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO & GMB Optimization | TopRank Digital Service",
    description: "Dominate Google Maps 3-Pack rankings and capture nearby high-intent buyers.",
  }
};

export default function LocalSeoPage() {
  return <ServiceTemplate serviceId="local-seo" />;
}
