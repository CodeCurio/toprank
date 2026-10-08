import { AboutHero } from "@/components/about/AboutHero";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { AboutServices } from "@/components/about/AboutServices";
import { OurApproach } from "@/components/about/OurApproach";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { TrustBar } from "@/components/sections/TrustBar";
import { TeamSection } from "@/components/about/TeamSection";
import { LocationSection } from "@/components/about/LocationSection";
import { ContactCTA } from "@/components/about/ContactCTA";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export const metadata = {
  title: "About Our Digital Agency",
  description: "Learn about TopRank Digital Service, a hyper-focused digital marketing agency in Lucknow specializing in SEO, Web Development, and Local ROI.",
  alternates: {
    canonical: "https://www.toprankindia.com/about",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "TopRank Digital Service",
      "url": "https://www.toprankindia.com",
      "logo": "https://www.toprankindia.com/icon.jpg",
      "telephone": ["+91 93050 30523", "+91 91154 39115"],
      "location": [
        {
          "@type": "Place",
          "name": "TopRank HQ — Lucknow",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "A42/32, Sulabh Awas, Sector 01, Gomti Nagar",
            "addressLocality": "Lucknow",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "226010",
            "addressCountry": "IN"
          },
          "telephone": "+91 93050 30523"
        },
        {
          "@type": "Place",
          "name": "Branch Office — Chandigarh",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No 8, Sector 34B",
            "addressLocality": "Chandigarh",
            "addressRegion": "UT / Tricity",
            "postalCode": "160034",
            "addressCountry": "IN"
          },
          "telephone": "+91 93050 30523"
        },
        {
          "@type": "Place",
          "name": "Tech Operations — Mohali",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No 12, Sector 69",
            "addressLocality": "Mohali",
            "addressRegion": "Punjab",
            "postalCode": "160069",
            "addressCountry": "IN"
          },
          "telephone": "+91 91154 39115"
        },
        {
          "@type": "Place",
          "name": "Regional Office — Gonda",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop No A6, Zila Panchayat Market, Ambedkar Chauraha, Housing Colony",
            "addressLocality": "Gonda",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "271001",
            "addressCountry": "IN"
          },
          "telephone": "+91 91154 39115"
        }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main className="flex-grow">
        <AboutHero />
        {/* We reuse the TrustBar from the homepage for the Stats/Creds below the fold */}
        <div className="relative z-20 -mt-10 mb-20 lg:-mt-20 lg:mb-32">
          {/* A simplified version of TrustBar is actually already within AboutHero, but we can keep the logo strip if needed */}
        </div>
        
        <CompanyOverview />
        <AboutServices />
        <OurApproach />
        <WhyChooseUs />
        {/* We reuse the ReviewsSection for Trust/Proof */}
        <ReviewsSection />
        <TeamSection />
        <LocationSection />
        <ContactCTA />
      </main>
    </div>
  );
}
