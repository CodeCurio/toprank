import { locations, LocationSlug } from "@/data/locationData";
import { MasterHero } from "@/components/services/master/MasterHero";
import { MasterCategories } from "@/components/services/master/MasterCategories";
import { MasterPsychology } from "@/components/services/master/MasterPsychology";
import { MasterProof } from "@/components/services/master/MasterProof";
import { MasterBottom } from "@/components/services/master/MasterBottom";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface LocationPageProps {
  params: {
    location: string;
  };
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = locations[params.location as LocationSlug];
  
  if (!location) {
    return {};
  }

  return {
    title: `Best Digital Marketing Agency in ${location.name} | TopRank`,
    description: `Dominate your local market in ${location.name}. #1 rated agency for SEO, Google Maps (GMB), and high-performance lead generation in ${location.regions.join(", ")}.`,
    alternates: {
      canonical: `https://www.toprankindia.com/${location.slug}`
    }
  };
}

export default function LocationLandingPage({ params }: LocationPageProps) {
  const location = locations[params.location as LocationSlug];

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
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(locations).map((location) => ({
    location,
  }));
}
