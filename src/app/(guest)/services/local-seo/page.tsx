import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Local SEO & GMB Optimization Services | Dominate Local Search | TopRank Digital",
  description: "Hyper-local Google My Business (GMB) optimization ensuring your business dominates local search results, map packs, and drives massive foot traffic.",
};

export default function LocalSeoPage() {
  return <ServiceTemplate serviceId="local-seo" />;
}
