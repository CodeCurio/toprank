import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Cloud Hosting & Maintenance",
  description: "Enterprise-grade cloud hosting and maintenance services to ensure your high-performing assets have 99.9% uptime, rapid speed, and top-tier security.",
  alternates: {
    canonical: "https://www.toprankindia.com/services/hosting",
  },
};

export default function HostingPage() {
  return <ServiceTemplate serviceId="hosting" />;
}
