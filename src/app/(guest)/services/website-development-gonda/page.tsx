import { Metadata } from "next";
import { WebsiteDevelopmentGondaClient } from "@/components/services/custom/WebsiteDevelopmentGondaClient";

export const metadata: Metadata = {
  title: {
    absolute: "Best Website Development Company in Gonda | Fast, Modern & Affordable - TopRank"
  },
  description: "Looking for the best website development company in Gonda? TopRank builds high-speed, mobile-friendly Next.js, React & WordPress business websites engineered for #1 Google rankings & customer calls in Civil Lines, Station Road & Devipatan region.",
  keywords: [
    "Website Development Company in Gonda",
    "Best Web Development Services Gonda",
    "Web Designer in Gonda UP",
    "Website Designing Civil Lines Gonda",
    "Affordable Website Packages Gonda",
    "Ecommerce Website Development Gonda",
    "WordPress Website Development Gonda",
    "School Website Designer in Gonda",
    "Doctor Clinic Website Gonda",
    "TopRank Digital Service Gonda"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/website-development-gonda",
  },
  openGraph: {
    title: "Best Website Development Company in Gonda | Fast, Modern & Affordable - TopRank",
    description: "Looking for the best website development company in Gonda? TopRank builds high-speed, mobile-friendly Next.js, React & WordPress business websites engineered for #1 Google rankings & customer calls in Civil Lines, Station Road & Devipatan region.",
    url: "https://www.toprankindia.com/services/website-development-gonda",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Development Company in Gonda | Fast, Modern & Affordable - TopRank",
    description: "Looking for the best website development company in Gonda? TopRank builds high-speed, mobile-friendly Next.js, React & WordPress business websites engineered for #1 Google rankings & customer calls in Civil Lines, Station Road & Devipatan region.",
  }
};

export default function WebsiteDevelopmentGondaPage() {
  return <WebsiteDevelopmentGondaClient />;
}
