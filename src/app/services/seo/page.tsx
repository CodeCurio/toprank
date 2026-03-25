import { ServiceHero } from "@/components/services/seo/ServiceHero";
import { ServiceDetails } from "@/components/services/seo/ServiceDetails";
import { ServiceProof } from "@/components/services/seo/ServiceProof";
import { ServiceConversion } from "@/components/services/seo/ServiceConversion";
import { RelatedServices } from "@/components/services/shared/RelatedServices";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best SEO Services in Lucknow | TopRank Digital",
  description: "Rank higher on Google and get high-quality leads with the #1 SEO Company in Lucknow. We specialize in local, technical, and organic SEO to dominate your market.",
  alternates: {
    canonical: "https://www.toprankindia.com/services/seo"
  }
};

export default function SeoServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <ServiceHero />
      <ServiceDetails />
      <ServiceProof />
      <ServiceConversion />
      <RelatedServices currentServiceId="seo" />
      <Footer />
    </main>
  );
}
