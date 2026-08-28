import { locations, LocationSlug, ServiceSlug } from "@/data/locationData";
import { LocationWebDev } from "@/components/services/custom/LocationWebDev";
import { LocationPPC } from "@/components/services/custom/LocationPPC";
import { LocationGMB } from "@/components/services/custom/LocationGMB";
import { LocationSocialMedia } from "@/components/services/custom/LocationSocialMedia";
import { LocationSEO } from "@/components/services/custom/LocationSEO";
import { WebDesignerChandigarh } from "@/components/services/custom/WebDesignerChandigarh";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{
    location: string;
    service: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { location: locationParam, service: serviceParam } = await params;
  const location = locations[locationParam as LocationSlug];
  const service = location?.services[serviceParam as ServiceSlug];
  
  if (!service) {
    return {};
  }

  const title = service.title.toLowerCase().includes(location.name.toLowerCase())
    ? service.title
    : `${service.title} in ${location.name}`;

  return {
    title: `${title} | TopRank Digital Service`,
    description: service.description,
    alternates: {
      canonical: `https://www.toprankindia.com/${location.slug}/${serviceParam}`
    }
  };
}

export default async function LocationServicePage({ params }: ServicePageProps) {
  const { location: locationParam, service: serviceParam } = await params;
  const location = locations[locationParam as LocationSlug];
  const service = location?.services[serviceParam as ServiceSlug];

  if (!location || !service) {
    notFound();
  }

  if (locationParam === "chandigarh" && serviceParam === "web-designer-in-chandigarh") {
    return <WebDesignerChandigarh />;
  }

  if (serviceParam === "website-development" || serviceParam.startsWith("web-designer-in-")) {
    return (
      <LocationWebDev 
        locationName={location.name} 
        locationSlug={location.slug} 
        regions={location.regions} 
      />
    );
  }

  if (serviceParam === "ppc-services" || serviceParam.includes("ppc") || serviceParam.includes("ads")) {
    return (
      <LocationPPC 
        locationName={location.name} 
        locationSlug={location.slug} 
        regions={location.regions} 
      />
    );
  }

  if (serviceParam === "gmb-services" || serviceParam.includes("gmb") || serviceParam.includes("map")) {
    return (
      <LocationGMB 
        locationName={location.name} 
        locationSlug={location.slug} 
        regions={location.regions} 
      />
    );
  }

  if (serviceParam === "social-media-marketing" || serviceParam.includes("social")) {
    return (
      <LocationSocialMedia 
        locationName={location.name} 
        locationSlug={location.slug} 
        regions={location.regions} 
      />
    );
  }

  // Default to LocationSEO layout
  return (
    <LocationSEO 
      locationName={location.name} 
      locationSlug={location.slug} 
      regions={location.regions} 
    />
  );
}

export async function generateStaticParams() {
  const paths: any[] = [];
  
  Object.keys(locations).forEach((loc) => {
    Object.keys(locations[loc as LocationSlug].services).forEach((ser) => {
      paths.push({
        location: loc,
        service: ser,
      });
    });
  });

  return paths;
}
