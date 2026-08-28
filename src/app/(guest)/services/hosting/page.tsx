import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Cloud Hosting, DNS & 24/7 Website Maintenance | TopRank",
  description: "Enterprise-grade cloud infrastructure, Cloudflare edge security, 99.9% uptime SLA, daily off-site cloud backups, and dedicated 24/7 technical support.",
  keywords: [
    "Cloud Hosting Services",
    "Website Maintenance Services",
    "Cloudflare Setup Agency",
    "WordPress Maintenance Package",
    "24/7 Website Support"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/hosting",
  },
  openGraph: {
    title: "Cloud Hosting, DNS & 24/7 Website Maintenance | TopRank",
    description: "Keep your mission-critical websites lightning fast, secure, and always online with TopRank's managed cloud hosting.",
    url: "https://www.toprankindia.com/services/hosting",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Hosting & Website Maintenance | TopRank",
    description: "Enterprise cloud hosting, daily backups, and 24/7 technical support for your digital assets.",
  }
};

export default function HostingPage() {
  return <ServiceTemplate serviceId="hosting" />;
}
