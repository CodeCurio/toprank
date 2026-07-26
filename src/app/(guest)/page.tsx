import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { WhatMakesUsDifferent } from "@/components/sections/WhatMakesUsDifferent";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ServingAreasSection } from "@/components/sections/ServingAreasSection";
import { IndustriesWeServeSection } from "@/components/sections/IndustriesWeServeSection";
import { HowWeGrow } from "@/components/sections/HowWeGrow";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <WhoWeAreSection />
        <ServicesSection />
        <ServingAreasSection />
        <IndustriesWeServeSection />
        <WhatMakesUsDifferent />
        <HowWeGrow />
        <ReviewsSection />
        
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
}
