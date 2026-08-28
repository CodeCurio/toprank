import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "Custom Next.js & React Web Development Services | TopRank",
  description: "Zero-latency, high-converting websites built with Next.js, React, and Tailwind CSS. 100% Core Web Vitals, mobile-first UI/UX, and built-in SEO architecture.",
  keywords: [
    "Web Development Services",
    "Next.js Web Developer",
    "React Web Application",
    "Custom Website Design",
    "Ecommerce Web Development",
    "WordPress Speed Optimization",
    "TopRank Web Development"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/web-development",
  },
  openGraph: {
    title: "Custom Next.js & React Web Development Services | TopRank",
    description: "Sub-second load times and conversion-focused web architecture on Next.js & React. Build a website that turns visitors into paying clients.",
    url: "https://www.toprankindia.com/services/web-development",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Next.js & React Web Development Services | TopRank",
    description: "High-performance web applications built for conversion, speed, and top search rankings.",
  }
};

export default function WebDevPage() {
  return <ServiceTemplate serviceId="web-dev" />;
}
