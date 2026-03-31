import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Google Ads & PPC Services | High ROI Campaigns | TopRank Digital",
  description: "Instant traffic and ROI-focused search ads. We manage your PPC campaigns to ensure you appear at the top of Google exactly when high-intent buyers search for you.",
};

export default function GoogleAdsPage() {
  return <ServiceTemplate serviceId="google-ads" />;
}
