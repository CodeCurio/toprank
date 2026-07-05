import { locations, LocationSlug, ServiceSlug } from "@/data/locationData";
import { ServiceHero } from "@/components/services/seo/ServiceHero";
import { ServiceDetails } from "@/components/services/seo/ServiceDetails";
import { ServiceProof } from "@/components/services/seo/ServiceProof";
import { ServiceConversion } from "@/components/services/seo/ServiceConversion";
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

  return {
    title: `${service.title} | TopRank Digital ${location.name}`,
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

  if (!service) {
    notFound();
  }

  // Note: For now we use the SEO components for all services as a template, 
  // but we pass location context to them. Future scaling will involve 
  // specialized components for PPC, Web, etc.
  
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <ServiceHero locationName={location.name} serviceTitle={service.title} />
      <ServiceDetails locationName={location.name} />
      <ServiceProof locationName={location.name} />
      <ServiceConversion locationName={location.name} />
    </main>
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
