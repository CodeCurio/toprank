import { AboutHero } from "@/components/about/AboutHero";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { AboutServices } from "@/components/about/AboutServices";
import { OurApproach } from "@/components/about/OurApproach";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import { TrustBar } from "@/components/sections/TrustBar";
import { TeamSection } from "@/components/about/TeamSection";
import { LocationSection } from "@/components/about/LocationSection";
import { ContactCTA } from "@/components/about/ContactCTA";
import { Footer } from "@/components/layout/Footer";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export const metadata = {
  title: "About TopRank Digital Service – Digital Marketing Agency in Lucknow",
  description: "Learn about TopRank Digital Service, a hyper-focused digital marketing agency in Lucknow specializing in SEO, Web Development, and Local ROI.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
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
      
      <Footer />
    </div>
  );
}
