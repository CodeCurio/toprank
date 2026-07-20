export interface ServiceInfo {
  title: string;
  description: string;
  icon: string;
}

export interface LocationInfo {
  name: string;
  slug: string;
  regions: string[];
  services: Record<string, ServiceInfo>;
}

export const locations: Record<string, LocationInfo> = {
  lucknow: {
    name: "Lucknow",
    slug: "lucknow",
    regions: ["Gomti Nagar", "Hazratganj", "Indira Nagar", "Aliganj"],
    services: {
      "seo-services": {
        title: "SEO Services in Lucknow",
        description: "Rank #1 on Google for local keywords in Lucknow. Our SEO experts help you dominate search results and get qualified leads.",
        icon: "Search"
      },
      "gmb-services": {
        title: "GMB Optimization in Lucknow",
        description: "Dominate Google Maps in Lucknow. We optimize your GMB profile to appear in the top 3 results for local searches.",
        icon: "MapPin"
      },
      "ppc-services": {
        title: "PPC & Google Ads in Lucknow",
        description: "Get instant leads with ROI-driven PPC campaigns in Lucknow. We manage Google & Meta ads to scale your revenue.",
        icon: "TrendingUp"
      },
      "website-development": {
        title: "Website Development in Lucknow",
        description: "Custom Next.js websites built for conversion in Lucknow. We create fast, premium, and SEO-optimized web platforms.",
        icon: "Monitor"
      },
      "social-media-marketing": {
        title: "Social Media Marketing in Lucknow",
        description: "Scale your brand on Meta & Instagram in Lucknow. We build dominant social media architectures for your business.",
        icon: "Megaphone"
      }
    }
  },
  chandigarh: {
    name: "Chandigarh",
    slug: "chandigarh",
    regions: ["Sector 17", "Mohali", "Panchkula", "Zirakpur"],
    services: {
      "seo-services": {
        title: "SEO Services in Chandigarh",
        description: "Best SEO agency in Chandigarh for local and national ranking. We help Punjab & Haryana businesses dominate Google.",
        icon: "Search"
      },
      "gmb-services": {
        title: "GMB Optimization in Chandigarh",
        description: "Rank higher on Google Maps in Chandigarh. Capture local search volume in Mohali, Panchkula, and Zirakpur.",
        icon: "MapPin"
      },
      "ppc-services": {
        title: "PPC & Google Ads in Chandigarh",
        description: "High-ROAS paid advertising in Chandigarh. We manage performance marketing for scaling brands in the Tricity.",
        icon: "TrendingUp"
      },
      "website-development": {
        title: "Website Development in Chandigarh",
        description: "Premium web development services in Chandigarh. We build high-velocity Next.js sites that convert visitors to customers.",
        icon: "Monitor"
      },
      "social-media-marketing": {
        title: "Social Media Marketing in Chandigarh",
        description: "Social media management for Chandigarh startups and businesses. Engineered brand growth on Meta & Instagram.",
        icon: "Megaphone"
      },
      "web-designer-in-chandigarh": {
        title: "Web Designer in Chandigarh",
        description: "Looking for a professional web designer in Chandigarh? We build premium, custom Next.js websites that load instantly, rank on Google, and convert visitors into customers.",
        icon: "Monitor"
      }
    }
  },
  gonda: {
    name: "Gonda",
    slug: "gonda",
    regions: ["Gayatri Puram", "Awas Vikas Colony", "Vishnupuri Colony", "Ambedkar Chauraha", "Housing Colony", "Civil Lines", "Mankapur", "Tarabganj"],
    services: {
      "seo-services": {
        title: "SEO Services in Gonda",
        description: "Rank #1 on Google for local keywords in Gonda. Our local SEO agency helps you dominate Google Maps (GMB) and get qualified leads.",
        icon: "Search"
      },
      "gmb-services": {
        title: "GMB Optimization in Gonda",
        description: "Dominate Google Maps in Gonda. We optimize your GMB profile to appear in the top 3 maps pack for local search queries.",
        icon: "MapPin"
      },
      "ppc-services": {
        title: "PPC & Google Ads in Gonda",
        description: "Get instant leads with ROI-driven PPC and Facebook Ads in Gonda. We manage paid marketing to scale your local revenue.",
        icon: "TrendingUp"
      },
      "website-development": {
        title: "Website Development in Gonda",
        description: "Custom Next.js websites built for conversion in Gonda. We create fast, premium, and SEO-optimized web designs.",
        icon: "Monitor"
      },
      "social-media-marketing": {
        title: "Social Media Marketing in Gonda",
        description: "Scale your brand on Meta, Instagram & WhatsApp in Gonda. We build dominant social media strategies for your local business.",
        icon: "Megaphone"
      }
    }
  },
  mohali: {
    name: "Mohali",
    slug: "mohali",
    regions: ["Sector 69", "Sector 70", "Phase 7", "Phase 3B2", "Phase 8", "Aerocity", "JLPL Industrial Area", "Sector 82"],
    services: {
      "seo-services": {
        title: "SEO Services in Mohali",
        description: "Rank #1 on Google for local keywords in Mohali. Our SEO experts help you dominate search results and capture high-intent local leads.",
        icon: "Search"
      },
      "gmb-services": {
        title: "GMB Optimization in Mohali",
        description: "Dominate Google Maps in Mohali (Sector 69, Aerocity & Phase 7). We optimize your Google Business profile for maximum local visibility.",
        icon: "MapPin"
      },
      "ppc-services": {
        title: "PPC & Google Ads in Mohali",
        description: "High-ROAS paid advertising for businesses in Mohali. We manage targeted Google & Meta ad campaigns engineered for local conversion.",
        icon: "TrendingUp"
      },
      "website-development": {
        title: "Website Development in Mohali",
        description: "Custom Next.js websites built for fast loading and high conversion in Mohali. Premium web design engineered for business growth.",
        icon: "Monitor"
      },
      "social-media-marketing": {
        title: "Social Media Marketing in Mohali",
        description: "Scale your Mohali brand on Instagram & Meta. Engineered social media strategy and content design for high-impact engagement.",
        icon: "Megaphone"
      },
      "web-designer-in-mohali": {
        title: "Web Designer in Mohali",
        description: "Looking for a professional web designer in Mohali? We build custom, high-speed Next.js websites tailored for Mohali startups and local enterprises.",
        icon: "Monitor"
      }
    }
  }
};

export type LocationSlug = string;
export type ServiceSlug = string;
