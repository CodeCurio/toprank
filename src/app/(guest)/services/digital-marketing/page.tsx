import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Scale Your Brand | TopRank Digital",
  description: "Comprehensive multi-channel digital marketing strategies to build brand authority and capture massive market share.",
};

export default function DigitalMarketingPage() {
  return <ServiceTemplate serviceId="digital-marketing" />;
}
