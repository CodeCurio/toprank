import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | TopRank Digital Service",
    default: "TopRank Digital Service - Best SEO & Digital Marketing Agency",
  },
  description: "TopRank Digital Service specializes in SEO, Web Development, Google Business Profile scaling, and performance marketing to dominate local and national search engines. Located in Lucknow & Chandigarh.",
  metadataBase: new URL("https://toprankindia.com"), 
  openGraph: {
    title: "TopRank Digital Service - Dominate Your Market",
    description: "Scale your revenue with high-velocity SEO, Google Ads, and Custom Website Development tailored for growth.",
    url: "https://toprankindia.com",
    siteName: "TopRank Digital Service",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "TopRank Digital Service",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TopRank Digital Service",
    description: "Best Digital Marketing Company in Lucknow & Chandigarh",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
