import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Meta Ads (Facebook & Instagram) Marketing Services | TopRank",
  description: "Scale your revenue with high-converting Facebook and Instagram Ads. Full-funnel creative strategy, lookalike targeting, Conversions API, and high-ROAS retargeting.",
  keywords: [
    "Meta Ads Management",
    "Facebook Ads Agency",
    "Instagram Advertising Agency",
    "Social Media Ads",
    "Direct Response Ads",
    "TopRank Meta Ads"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/meta-ads",
  },
  openGraph: {
    title: "Meta Ads (Facebook & Instagram) Marketing Services | TopRank",
    description: "Turn social attention into predictable revenue with TopRank's Meta advertising campaigns.",
    url: "https://www.toprankindia.com/services/meta-ads",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads (FB & IG) Marketing | TopRank Digital Service",
    description: "Scroll-stopping ad creatives and data-driven retargeting funnels on Facebook & Instagram.",
  }
};

export default function MetaAdsPage() {
  return <ServiceTemplate serviceId="meta-ads" />;
}
