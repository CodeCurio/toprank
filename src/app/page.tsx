import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ImmersiveAboutSection } from "@/components/sections/ImmersiveAboutSection";
import { WhatMakesUsDifferent } from "@/components/sections/WhatMakesUsDifferent";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowWeGrow } from "@/components/sections/HowWeGrow";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <ImmersiveAboutSection />
        <ServicesSection />
        <WhatMakesUsDifferent />
        <HowWeGrow />
        <ReviewsSection />
        
        <FAQSection />
        <ContactSection />
      </main>
      
      {/* Interactive Footer */}
      <Footer />
    </div>
  );
}
