import { Metadata } from "next";
import { WebsiteDevelopmentLucknowClient } from "@/components/services/custom/WebsiteDevelopmentLucknowClient";

export const metadata: Metadata = {
  title: "Website Development Company in Lucknow | TopRank Digital Service",
  description: "Top-rated website development company in Lucknow. We build custom Next.js, React & WordPress websites designed for speed, SEO ranking, and lead generation in Gomti Nagar, Hazratganj, Aliganj, & across Lucknow.",
  keywords: [
    "Website Development Company in Lucknow",
    "Web Designer in Lucknow",
    "Web Development Services Lucknow",
    "Next.js Developer Lucknow",
    "WordPress Developer Lucknow",
    "Ecommerce Website Development Lucknow",
    "Best Website Designer Gomti Nagar Lucknow",
    "TopRank Digital Service Lucknow"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/website-development-lucknow",
  },
  openGraph: {
    title: "Website Development Company in Lucknow | TopRank Digital Service",
    description: "Build a high-converting, lightning-fast website in Lucknow. Next.js, React & WordPress web development engineered for real business growth.",
    url: "https://www.toprankindia.com/services/website-development-lucknow",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
};

export default function WebsiteDevelopmentLucknowPage() {
  return <WebsiteDevelopmentLucknowClient />;
}
