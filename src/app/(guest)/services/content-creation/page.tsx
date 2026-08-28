import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "High-Retention Video Editing & Content Creation Services | TopRank",
  description: "Viral short-form reels, professional video editing, SEO blog writing, and persuasive copywriting engineered to capture attention and convert audiences.",
  keywords: [
    "Content Creation Services",
    "Video Editing Agency",
    "Short Form Video Production",
    "Reels Editing Services",
    "SEO Blog Writing Services"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/content-creation",
  },
  openGraph: {
    title: "High-Retention Video Editing & Content Creation Services | TopRank",
    description: "Capture attention and dominate organic feeds with TopRank's viral video and copywriting production.",
    url: "https://www.toprankindia.com/services/content-creation",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Creation & Video Editing | TopRank",
    description: "High-retention video editing and SEO copywriting engineered to scale organic reach.",
  }
};

export default function ContentCreationPage() {
  return <ServiceTemplate serviceId="content" />;
}
