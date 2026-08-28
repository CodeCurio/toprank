import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Full-Stack Digital Marketing Services | TopRank Digital Service",
  description: "Scale your revenue with multi-channel digital marketing. Performance Meta & Google Ads, automated lead generation funnels, ORM, and high-converting marketing campaigns across India.",
  keywords: [
    "Digital Marketing Services",
    "Performance Marketing Agency",
    "Digital Marketing Company India",
    "Social Media Marketing",
    "Lead Generation Agency",
    "ROI-Driven Digital Marketing",
    "TopRank Digital Service"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/digital-marketing",
  },
  openGraph: {
    title: "Full-Stack Digital Marketing Services | TopRank Digital Service",
    description: "Scale your revenue with multi-channel digital marketing. High-ROAS Meta & Google Ads, lead generation funnels, and data-driven brand growth.",
    url: "https://www.toprankindia.com/services/digital-marketing",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Digital Marketing Services | TopRank Digital Service",
    description: "Data-driven digital marketing solutions designed to scale brand authority, capture leads, and maximize ROAS.",
  }
};

export default function DigitalMarketingPage() {
  return <ServiceTemplate serviceId="digital-marketing" />;
}
