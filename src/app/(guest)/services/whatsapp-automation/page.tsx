import { Metadata } from "next";
import { ServiceTemplate } from "@/components/services/shared/ServiceTemplate";

export const metadata: Metadata = {
  title: "WhatsApp Automation & AI Chatbots | TopRank Digital",
  description: "Automated customer handling through WhatsApp Business API and AI-driven chatbots. Handle thousands of customer queries 24/7 without manual effort.",
};

export default function WhatsAppPage() {
  return <ServiceTemplate serviceId="whatsapp" />;
}
