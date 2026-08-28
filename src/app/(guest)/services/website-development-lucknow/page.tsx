import { Metadata } from "next";
import { WebsiteDevelopmentLucknowClient } from "@/components/services/custom/WebsiteDevelopmentLucknowClient";

export const metadata: Metadata = {
  title: {
    absolute: "Best Website Development Company in Lucknow | Fast, Modern & SEO-Ready - TopRank"
  },
  description: "Looking for the best website development company in Lucknow? TopRank builds high-speed Next.js, React & WordPress business websites engineered for 99+ PageSpeed, #1 Google rankings & 5X leads.",
  keywords: [
    "Website Development Company in Lucknow",
    "Best Web Development Services Lucknow",
    "Web Designer in Lucknow",
    "Custom Next.js Web Development Lucknow",
    "Ecommerce Website Development in Lucknow",
    "WordPress Website Development Lucknow",
    "Website Designing Gomti Nagar Lucknow",
    "Website Developer in Hazratganj",
    "Affordable Website Packages Lucknow",
    "TopRank Digital Service Lucknow"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/website-development-lucknow",
  },
  openGraph: {
    title: "Best Website Development Company in Lucknow | Fast, Modern & SEO-Ready - TopRank",
    description: "Looking for the best website development company in Lucknow? TopRank builds high-speed Next.js, React & WordPress business websites engineered for 99+ PageSpeed, #1 Google rankings & 5X leads.",
    url: "https://www.toprankindia.com/services/website-development-lucknow",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Development Company in Lucknow | Fast, Modern & SEO-Ready - TopRank",
    description: "Looking for the best website development company in Lucknow? TopRank builds high-speed Next.js, React & WordPress business websites engineered for 99+ PageSpeed, #1 Google rankings & 5X leads.",
  }
};

export default function WebsiteDevelopmentLucknowPage() {
  return <WebsiteDevelopmentLucknowClient />;
}
