import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ImmersiveAboutSection } from "@/components/sections/ImmersiveAboutSection";
import { WhatMakesUsDifferent } from "@/components/sections/WhatMakesUsDifferent";
import { ServingAreas } from "@/components/sections/ServingAreas";
import { ServicesSection } from "@/components/sections/ServicesSection";
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
        <ImmersiveAboutSection />
        <ServicesSection />
        <ServingAreas />
        <WhatMakesUsDifferent />
        <HowWeGrow />
        <ReviewsSection />
        
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
}
