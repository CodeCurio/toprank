import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Google Ads & PPC Campaign Management Services | TopRank",
  description: "High-ROAS Google Ads management. Search, Display, Shopping, and YouTube Ads engineered with negative keyword shields and conversion tracking to maximize ROI.",
  keywords: [
    "Google Ads Management",
    "PPC Services India",
    "Pay Per Click Agency",
    "Google Search Ads Expert",
    "YouTube Ads Agency",
    "Google Ads Freelancer Agency"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/google-ads",
  },
  openGraph: {
    title: "Google Ads & PPC Campaign Management Services | TopRank",
    description: "Instant traffic, negative keyword shields, and high conversion rates with TopRank's Google Ads management.",
    url: "https://www.toprankindia.com/services/google-ads",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads & PPC Management | TopRank Digital Service",
    description: "High-intent Google Ads campaigns engineered for positive ROAS and low Cost-Per-Lead.",
  }
};

export default function GoogleAdsPage() {
  return <ServiceTemplate serviceId="google-ads" />;
}
