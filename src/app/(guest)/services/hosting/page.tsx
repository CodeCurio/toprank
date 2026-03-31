import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Cloud Hosting & Website Maintenance | TopRank Digital",
  description: "Enterprise-grade cloud hosting and maintenance services to ensure your high-performing assets have 99.9% uptime, rapid speed, and top-tier security.",
};

export default function HostingPage() {
  return <ServiceTemplate serviceId="hosting" />;
}
