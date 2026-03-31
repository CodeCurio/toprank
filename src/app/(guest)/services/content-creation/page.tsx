import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Content Creation Services | Videos, Blogs & Copy | TopRank Digital",
  description: "High-level content production including viral short-form videos, SEO-optimized blogs, and high-converting copywriting that captures attention instantly.",
};

export default function ContentCreationPage() {
  return <ServiceTemplate serviceId="content" />;
}
