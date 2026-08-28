"use client";

import { ServiceHero } from "@/components/services/seo/ServiceHero";
import { ServiceDetails } from "@/components/services/seo/ServiceDetails";
import { ServiceProof } from "@/components/services/seo/ServiceProof";
import { ServiceConversion } from "@/components/services/seo/ServiceConversion";
import { usePhone } from "@/hooks/usePhone";

interface LocationSEOProps {
  locationName: string;
  locationSlug: string;
  regions: string[];
}

export function LocationSEO({ locationName, locationSlug, regions }: LocationSEOProps) {
  const phone = usePhone();

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Schema Markup for Local SEO Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `Search Engine Optimization (SEO) Services in ${locationName}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "TopRank Digital Service",
              "telephone": `+91 ${phone.raw}`,
              "url": `https://www.toprankindia.com/${locationSlug}/seo-services`,
              "areaServed": regions
            },
            "description": `Rank #1 on Google for high-intent keywords in ${locationName}. Technical SEO, local citations, high-authority backlink outreach, and keyword optimization across ${regions.join(", ")}.`,
            "serviceType": "Search Engine Optimization"
          })
        }}
      />

      <ServiceHero locationName={locationName} serviceTitle={`SEO Services in ${locationName}`} />
      <ServiceDetails locationName={locationName} />
      <ServiceProof locationName={locationName} />
      <ServiceConversion locationName={locationName} />
    </main>
  );
}
