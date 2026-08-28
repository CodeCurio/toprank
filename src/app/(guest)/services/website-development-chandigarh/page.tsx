import { Metadata } from "next";
import { WebsiteDevelopmentChandigarhClient } from "@/components/services/custom/WebsiteDevelopmentChandigarhClient";

export const metadata: Metadata = {
  title: {
    absolute: "Best Website Development Company in Chandigarh | Fast, Modern & SEO-Ready - TopRank"
  },
  description: "Looking for the best website development company in Chandigarh? TopRank builds high-speed Next.js, React & WordPress business websites engineered for 99+ PageSpeed, #1 Google rankings & 5X leads in Chandigarh, Mohali & Panchkula.",
  keywords: [
    "Website Development Company in Chandigarh",
    "Best Web Development Services Chandigarh",
    "Web Designer in Chandigarh",
    "Website Designing Sector 17 Chandigarh",
    "Custom Next.js Web Development Chandigarh",
    "Ecommerce Website Development Chandigarh",
    "WordPress Website Development Chandigarh",
    "IT Park Chandigarh Web Design Company",
    "Website Development Mohali Tricity",
    "TopRank Digital Service Chandigarh"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/website-development-chandigarh",
  },
  openGraph: {
    title: "Best Website Development Company in Chandigarh | Fast, Modern & SEO-Ready - TopRank",
    description: "Looking for the best website development company in Chandigarh? TopRank builds high-speed Next.js, React & WordPress business websites engineered for 99+ PageSpeed, #1 Google rankings & 5X leads in Chandigarh, Mohali & Panchkula.",
    url: "https://www.toprankindia.com/services/website-development-chandigarh",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Website Development Company in Chandigarh | Fast, Modern & SEO-Ready - TopRank",
    description: "Looking for the best website development company in Chandigarh? TopRank builds high-speed Next.js, React & WordPress business websites engineered for 99+ PageSpeed, #1 Google rankings & 5X leads in Chandigarh, Mohali & Panchkula.",
  }
};

export default function WebsiteDevelopmentChandigarhPage() {
  return <WebsiteDevelopmentChandigarhClient />;
}
