import { MasterHero } from "@/components/services/master/MasterHero";
import { MasterCategories } from "@/components/services/master/MasterCategories";
import { MasterPsychology } from "@/components/services/master/MasterPsychology";
import { MasterProof } from "@/components/services/master/MasterProof";
import { MasterBottom } from "@/components/services/master/MasterBottom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Rank Higher & Get Leads | TopRank",
  description: "Comprehensive digital growth solutions including SEO, Web Design, Performance Marketing, and Conversion Rate Optimization. Book a free audit today.",
  alternates: {
    canonical: "https://www.toprankindia.com/services"
  }
};

export default function ServicesIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-10">
      <MasterHero locationName="Lucknow & Chandigarh" />
      <MasterCategories locationName="Lucknow & Chandigarh" />
      <MasterPsychology locationName="Lucknow & Chandigarh" />
      <MasterProof locationName="Lucknow & Chandigarh" />
      <MasterBottom locationName="Lucknow & Chandigarh" />
    </main>
  );
}
