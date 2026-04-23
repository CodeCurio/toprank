import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Lucknow | TopRank Digital",
  description: "Looking for the best digital marketing agency in Lucknow? TopRank provides expert SEO, Google Ads, and Web Development to grow your local business.",
  alternates: {
    canonical: "https://www.toprankindia.com/lucknow"
  }
};

export default function LucknowHome() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <Hero location="Lucknow" />
        <TrustBar />
        <ImmersiveAboutSection location="Lucknow" />
        <ServicesSection location="Lucknow" />
        <ServingAreas />
        <WhatMakesUsDifferent />
        <HowWeGrow />
        <ReviewsSection location="Lucknow" />
        <FAQSection location="Lucknow" />
        <ContactSection />
      </main>
    </div>
  );
}
