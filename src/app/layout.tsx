import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/navigation/WhatsappButton";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import {
  defaultDescription,
  faqJsonLd,
  localBusinessJsonLd,
  seoKeywords,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tulip Custom Bonded Warehouse | SITE Karachi",
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  keywords: seoKeywords,
  applicationName: SITE_NAME,
  authors: [{ name: "Tulip Industries Pvt. Ltd." }],
  creator: "Tulip Industries Pvt. Ltd.",
  publisher: "Tulip Industries Pvt. Ltd.",
  category: "Warehousing",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Tulip Custom Bonded Warehouse | SITE Karachi",
    description: defaultDescription,
    images: [
      {
        url: "/logoFinal.png",
        width: 400,
        height: 400,
        alt: "Tulip Bond custom bonded warehouse logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulip Custom Bonded Warehouse | SITE Karachi",
    description: defaultDescription,
    images: ["/logoFinal.png"],
  },
  verification: {
    google: "FjRKWRZpZFZpXULdJ7THlxEzTDFUqwlh0TKgzj81EAs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="FjRKWRZpZFZpXULdJ7THlxEzTDFUqwlh0TKgzj81EAs"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <ToastContainer />
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
