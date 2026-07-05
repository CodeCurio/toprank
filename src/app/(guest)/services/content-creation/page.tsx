import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Content Creation Services",
  description: "High-level content production including viral short-form videos, SEO-optimized blogs, and high-converting copywriting that captures attention instantly.",
  alternates: {
    canonical: "https://www.toprankindia.com/services/content-creation",
  },
};

export default function ContentCreationPage() {
  return <ServiceTemplate serviceId="content" />;
}
