import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Meta Ads | Facebook & Instagram Marketing Services | TopRank Digital",
  description: "Viral social growth and retargeting systems through strategic Facebook and Instagram ads designed to predictably generate ROAS.",
};

export default function MetaAdsPage() {
  return <ServiceTemplate serviceId="meta-ads" />;
}
