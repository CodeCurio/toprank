import { SeoHeroImmersive } from "@/components/services/seo/SeoHeroImmersive";
import { LighthouseRadar } from "@/components/services/seo/LighthouseRadar";
import { KeywordGalaxy } from "@/components/services/seo/KeywordGalaxy";
import { ServiceDetails } from "@/components/services/seo/ServiceDetails";
import { ServiceProof } from "@/components/services/seo/ServiceProof";
import { SeoAuditSimulator } from "@/components/services/seo/SeoAuditSimulator";
import { RelatedServices } from "@/components/services/shared/RelatedServices";
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
      <SeoHeroImmersive />
      
      {/* Introduction & Technical Depth */}
      <LighthouseRadar />
      
      {/* Service Breakdown (Enhanced with unique visuals) */}
      <div className="relative">
         <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />
         <ServiceDetails />
      </div>

      {/* Numerical Mastery & Global Reach */}
      <KeywordGalaxy />

      {/* Proof of Dominance */}
      <ServiceProof />

      {/* The Final Conversion Engine */}
      <SeoAuditSimulator />

      {/* Explore Other Growth Channels */}
      <RelatedServices currentServiceId="seo" />
    </main>
  );
}

