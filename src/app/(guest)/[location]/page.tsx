import { locations, LocationSlug } from "@/data/locationData";
import { MasterHero } from "@/components/services/master/MasterHero";
import { MasterCategories } from "@/components/services/master/MasterCategories";
import { MasterPsychology } from "@/components/services/master/MasterPsychology";
import { MasterProof } from "@/components/services/master/MasterProof";
import { MasterBottom } from "@/components/services/master/MasterBottom";
import { SeoServicesInLucknowClient } from "@/components/services/custom/SeoServicesInLucknowClient";
import { SeoServicesInChandigarhClient } from "@/components/services/custom/SeoServicesInChandigarhClient";
import { SeoServicesInMohaliClient } from "@/components/services/custom/SeoServicesInMohaliClient";
import { SeoServicesInGondaClient } from "@/components/services/custom/SeoServicesInGondaClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface LocationPageProps {
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { location: locationParam } = await params;

  if (locationParam === "seo-services-in-lucknow") {
    return {
      title: {
        absolute: "Best SEO Services in Lucknow | Rank #1 on Google - TopRank"
      },
      description: "Looking for top-rated SEO services in Lucknow? TopRank helps businesses rank #1 on Google, drive targeted organic traffic, dominate local map pack & get 5X leads.",
      alternates: {
        canonical: "https://www.toprankindia.com/seo-services-in-lucknow"
      }
    };
  }

  if (locationParam === "seo-services-in-chandigarh") {
    return {
      title: {
        absolute: "Best SEO Services in Chandigarh | Rank #1 on Google - TopRank"
      },
      description: "Looking for top-rated SEO services in Chandigarh, Mohali & Panchkula? TopRank helps businesses rank #1 on Google, dominate Tricity local search & get 5X leads.",
      alternates: {
        canonical: "https://www.toprankindia.com/seo-services-in-chandigarh"
      }
    };
  }

  if (locationParam === "seo-services-in-mohali") {
    return {
      title: {
        absolute: "Best SEO Services in Mohali | Rank #1 on Google - TopRank"
      },
      description: "Looking for top-rated SEO services in Mohali? TopRank helps businesses rank #1 on Google, dominate local map pack & capture high-intent leads in Phase 7, 8 & Aerocity.",
      alternates: {
        canonical: "https://www.toprankindia.com/seo-services-in-mohali"
      }
    };
  }

  if (locationParam === "seo-services-in-gonda") {
    return {
      title: {
        absolute: "Best SEO Services in Gonda | Rank #1 on Google - TopRank"
      },
      description: "Looking for top-rated SEO services in Gonda? TopRank helps businesses rank #1 on Google, dominate local map pack & capture high-intent leads across Gonda & Eastern UP.",
      alternates: {
        canonical: "https://www.toprankindia.com/seo-services-in-gonda"
      }
    };
  }

  const location = locations[locationParam as LocationSlug];
  
  if (!location) {
    return {};
  }

  return {
    title: `Best Digital Marketing Agency in ${location.name}`,
    description: `Dominate your local market in ${location.name}. #1 rated agency for SEO, Google Maps (GMB), and high-performance lead generation in ${location.regions.join(", ")}.`,
    alternates: {
      canonical: `https://www.toprankindia.com/${location.slug}`
    }
  };
}

export default async function LocationLandingPage({ params }: LocationPageProps) {
  const { location: locationParam } = await params;

  if (locationParam === "seo-services-in-lucknow") {
    return <SeoServicesInLucknowClient />;
  }

  if (locationParam === "seo-services-in-chandigarh") {
    return <SeoServicesInChandigarhClient />;
  }

  if (locationParam === "seo-services-in-mohali") {
    return <SeoServicesInMohaliClient />;
  }

  if (locationParam === "seo-services-in-gonda") {
    return <SeoServicesInGondaClient />;
  }

  const location = locations[locationParam as LocationSlug];

  if (!location) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-10">
      <MasterHero 
        locationName={location.name} 
        locationSlug={location.slug} 
      />
      <MasterCategories 
        locationName={location.name} 
        locationSlug={location.slug} 
      />
      <MasterPsychology 
        locationName={location.name} 
      />
      <MasterProof 
        locationName={location.name} 
      />
      <MasterBottom 
        locationName={location.name} 
        regions={location.regions} 
      />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(locations).map((location) => ({
    location,
  }));
}
