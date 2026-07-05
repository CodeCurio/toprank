import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Meta Ads (FB & IG) Marketing",
  description: "Viral social growth and retargeting systems through strategic Facebook and Instagram ads designed to predictably generate ROAS.",
  alternates: {
    canonical: "https://www.toprankindia.com/services/meta-ads",
  },
};

export default function MetaAdsPage() {
  return <ServiceTemplate serviceId="meta-ads" />;
}
