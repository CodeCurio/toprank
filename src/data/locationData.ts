export const locations = {
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
  }
};

export type LocationSlug = keyof typeof locations;
export type ServiceSlug = keyof typeof locations['lucknow']['services'];
