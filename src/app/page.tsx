import type { Metadata } from "next";
import Chamber from "@/components/Chamber";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import HeroBanner from "@/components/HeroBanner";
import { defaultDescription, seoKeywords, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tulip Custom Bonded Warehouse | SITE Karachi",
  description: defaultDescription,
  keywords: seoKeywords,
  openGraph: {
    title: `Tulip Custom Bonded Warehouse | ${SITE_NAME}`,
    description: defaultDescription,
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Features />
      <Chamber />
      <FAQ />
    </>
  );
}
