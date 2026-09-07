import type { Metadata } from "next";
import { seoKeywords, SITE_NAME } from "@/lib/seo";
import ContactView from "./ContactView";

export const metadata: Metadata = {
  title: "Contact Tulip Bond Warehouse",
  description:
    "Contact Tulip Bond for custom bonded warehouse storage in SITE, Karachi. Call +92 331 26159 50 or visit PWL 1/84, F-237, S.I.T.E, Karachi 75700.",
  keywords: [
    ...seoKeywords,
    "contact bonded warehouse Karachi",
    "warehouse quote Karachi",
  ],
  openGraph: {
    title: `Contact Tulip Bond Warehouse | ${SITE_NAME}`,
    description:
      "Get a quote for bonded or private warehouse storage in SITE, Karachi.",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactView />;
}
