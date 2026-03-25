import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormBlock } from "@/components/contact/ContactFormBlock";
import { ContactMap } from "@/components/contact/ContactMap";
import { ContactFAQs } from "@/components/contact/ContactFAQs";
import { ContactCTA } from "@/components/about/ContactCTA";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Contact TopRank Digital Service – Digital Marketing Agency in Lucknow",
  description: "Get in touch with TopRank Digital Service today. Schedule a free consultation for SEO, Web Design, and Local Growth strategies.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <ContactHero />
        <ContactFormBlock />
        <ContactMap />
        <ContactFAQs />
        <ContactCTA />
      </main>
      
      <Footer />
    </div>
  );
}
