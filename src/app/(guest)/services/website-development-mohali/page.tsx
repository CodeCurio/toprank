import { Metadata } from "next";
import { WebsiteDevelopmentMohaliClient } from "@/components/services/custom/WebsiteDevelopmentMohaliClient";

export const metadata: Metadata = {
  title: {
    absolute: "Best Website Development Company in Mohali | Fast, Modern & SEO-Ready - TopRank"
  },
  description: "Looking for the best website development company in Mohali? TopRank builds high-speed Next.js, React & WordPress business websites engineered for 99+ PageSpeed, #1 Google rankings & 5X leads in Phase 8B, QuarkCity & SAS Nagar.",
  keywords: [
    "Website Development Company in Mohali",
    "Best Web Development Services Mohali",
    "Web Designer in Mohali SAS Nagar",
    "Phase 8B Mohali Web Design Agency",
    "Custom Next.js Web Development Mohali",
    "Ecommerce Website Development Mohali",
    "WordPress Website Development Mohali",
    "QuarkCity Mohali IT Company",
    "Website Developer in IT City Mohali",
    "TopRank Digital Service Mohali"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/website-development-mohali",
  },
  openGraph: {
    title: "Best Website Development Company in Mohali | Fast, Modern & SEO-Ready - TopRank",
    description: "Looking for the best website development company in Mohali? TopRank builds high-speed Next.js, React & WordPress business websites engineered for 99+ PageSpeed, #1 Google rankings & 5X leads in Phase 8B, QuarkCity & SAS Nagar.",
    url: "https://www.toprankindia.com/services/website-development-mohali",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Development Company in Mohali | Fast, Modern & SEO-Ready - TopRank",
    description: "Looking for the best website development company in Mohali? TopRank builds high-speed Next.js, React & WordPress business websites engineered for 99+ PageSpeed, #1 Google rankings & 5X leads in Phase 8B, QuarkCity & SAS Nagar.",
  }
};

export default function WebsiteDevelopmentMohaliPage() {
  return <WebsiteDevelopmentMohaliClient />;
}
