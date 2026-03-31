import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Premium Branding & Design Services | TopRank Digital",
  description: "Magnetic brand identities, custom visual assets, and high-conversion ad creatives that position your business as a premium choice in the market.",
};

export default function BrandingPage() {
  return <ServiceTemplate serviceId="branding" />;
}
