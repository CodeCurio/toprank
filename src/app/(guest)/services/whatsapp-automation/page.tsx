import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "WhatsApp Business API & AI Chatbot Automation | TopRank",
  description: "Automate sales and support with official WhatsApp Business API, AI chatbots, instant auto-replies, and seamless CRM integrations for 24/7 lead qualification.",
  keywords: [
    "WhatsApp Business API",
    "WhatsApp Automation",
    "AI Chatbot Agency",
    "WhatsApp Marketing India",
    "Automated Lead Qualification"
  ],
  alternates: {
    canonical: "https://www.toprankindia.com/services/whatsapp-automation",
  },
  openGraph: {
    title: "WhatsApp Business API & AI Chatbot Automation | TopRank",
    description: "Handle thousands of customer queries 24/7 with zero waiting time using TopRank's WhatsApp & AI systems.",
    url: "https://www.toprankindia.com/services/whatsapp-automation",
    siteName: "TopRank Digital Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp API & AI Chatbot Solutions | TopRank",
    description: "Official WhatsApp Cloud API, AI chatbots, and automated broadcast systems.",
  }
};

export default function WhatsAppPage() {
  return <ServiceTemplate serviceId="whatsapp" />;
}
