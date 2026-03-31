import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Web Development Services | Custom Next.js & React Apps | TopRank Digital",
  description: "High-performance websites built for conversion. We specialize in zero-latency Next.js corporate sites and e-commerce platforms that turn visitors into buyers.",
};

export default function WebDevPage() {
  return <ServiceTemplate serviceId="web-dev" />;
}
