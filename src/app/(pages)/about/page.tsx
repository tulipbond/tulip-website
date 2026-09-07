import type { Metadata } from "next";
import { seoKeywords, SITE_NAME } from "@/lib/seo";
import HeroBanner from "./components/HeroBanner";
import Biography from "./components/Biography";
import Owners from "./components/Owners";

export const metadata: Metadata = {
  title: "About Tulip Industries",
  description:
    "Tulip Industries Pvt. Ltd. operates a custom bonded warehouse in SITE, Karachi. Learn about our history since 1976 and our founder, Muhammad Afzal Munif.",
  keywords: [
    ...seoKeywords,
    "Tulip Industries Karachi",
    "warehouse company SITE Karachi",
  ],
  openGraph: {
    title: `About Tulip Industries | ${SITE_NAME}`,
    description:
      "Family-operated custom bonded warehouse in SITE, Karachi with decades of warehousing experience.",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <HeroBanner />
      <Biography />
      <Owners />
    </>
  );
}
