import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Brand Identity Design & Creative Marketing Services | TopRank",
  description: "Magnetic logo design, corporate branding, social media creative kits, and high-CTR marketing assets that position your business as a premium market choice.",
  keywords: [
    "Branding Services",
    "Logo Design Agency",
    "Brand Identity Design",
    "Ad Creative Design",
    "Corporate Stationery Design"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/branding",
  },
  openGraph: {
    title: "Brand Identity Design & Creative Marketing Services | TopRank",
    description: "Command premium pricing with unforgettable brand visual identities engineered by TopRank.",
    url: "https://www.toprankindia.com/services/branding",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Identity & Creative Services | TopRank",
    description: "Custom vector logos, luxury brand style guidelines, and high-CTR performance ad assets.",
  }
};

export default function BrandingPage() {
  return <ServiceTemplate serviceId="branding" />;
}
