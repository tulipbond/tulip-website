import type { Metadata } from "next";
import { seoKeywords, SITE_NAME } from "@/lib/seo";
import ServicesView from "./ServicesView";

export const metadata: Metadata = {
  title: "Warehouse Services in Karachi",
  description:
    "Bonded warehouse services in SITE, Karachi: 70,000 sq ft RCC shed, open yard storage, 24/7 security, CCTV, fire safety, and loading facilities at Tulip Bond.",
  keywords: [
    ...seoKeywords,
    "warehouse services Karachi",
    "RCC warehouse shed Karachi",
    "open yard storage Karachi",
  ],
  openGraph: {
    title: `Warehouse Services in Karachi | ${SITE_NAME}`,
    description:
      "Custom bonded warehouse facilities in SITE Karachi including secure storage, CCTV, and logistics support.",
  },
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesView />;
}
