import { Metadata } from "next";
import { SeoServicesInChandigarhClient } from "@/components/services/custom/SeoServicesInChandigarhClient";

export const metadata: Metadata = {
  title: {
    absolute: "Best SEO Services in Chandigarh | Rank #1 on Google - TopRank"
  },
  description: "Looking for top-rated SEO services in Chandigarh, Mohali & Panchkula? TopRank helps businesses rank #1 on Google, dominate Tricity local search & get 5X leads.",
  keywords: [
    "SEO Services in Chandigarh",
    "Best SEO Agency in Chandigarh",
    "SEO Company in Chandigarh",
    "SEO Services in Mohali",
    "SEO Services in Panchkula",
    "Local SEO in Chandigarh",
    "SEO Expert Chandigarh",
    "Google Maps GMB Ranking Chandigarh",
    "Ecommerce SEO Services Chandigarh",
    "Affordable SEO Packages Chandigarh",
    "TopRank Digital Service Chandigarh"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/seo-services-in-chandigarh",
  },
  openGraph: {
    title: "Best SEO Services in Chandigarh | Rank #1 on Google - TopRank",
    description: "Looking for top-rated SEO services in Chandigarh, Mohali & Panchkula? TopRank helps businesses rank #1 on Google, dominate Tricity local search & get 5X leads.",
    url: "https://www.toprankindia.com/seo-services-in-chandigarh",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Services in Chandigarh | Rank #1 on Google - TopRank",
    description: "Looking for top-rated SEO services in Chandigarh, Mohali & Panchkula? TopRank helps businesses rank #1 on Google, dominate Tricity local search & get 5X leads.",
  }
};

export default function SeoServicesInChandigarhPage() {
  return <SeoServicesInChandigarhClient />;
}
