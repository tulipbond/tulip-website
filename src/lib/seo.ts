export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.tulipbond.com";

export const SITE_NAME = "Tulip Bond";
export const SITE_LEGAL_NAME = "Tulip Industries Pvt. Ltd.";

export const seoKeywords = [
  "warehouse in Karachi",
  "warehouse in SITE Karachi",
  "warehouse in Pakistan",
  "warehouse in Sindh",
  "bonded warehouse",
  "bonded warehouse Karachi",
  "custom bonded warehouse Karachi",
  "custom bonded warehouse SITE Karachi",
  "private warehouse Karachi",
  "warehouse for rent Karachi",
  "bonded warehouse SITE",
  "warehouse storage Karachi",
  "customs bonded warehouse Pakistan",
  "industrial warehouse Karachi",
  "warehousing services Karachi",
  "bonded warehouse Pakistan",
  "import warehouse Karachi",
  "duty free warehouse Karachi",
  "Tulip Bond",
  "Tulip Industries warehouse",
  "bonded service",
  "bonded service Karachi",
  "bonded service SITE Karachi",
  "bonded service Pakistan",
  "bonded service Sindh",
  "bonded service SITE Pakistan",
  "bonded service SITE Sindh",
  "bonded service SITE Karachi",
  "bonded service SITE Sindh",
  "bounded warehouse",
  "bounded warehouse Karachi",
  "bounded warehouse SITE Karachi",
  "bounded warehouse Pakistan",
  "bounded warehouse Sindh",
  "bounded warehouse SITE Pakistan",
  "bounded warehouse SITE Sindh",
  "bounded warehouse SITE Karachi",
  "bounded warehouse SITE Sindh",
  "bond",
  "3rd party warehouse near me",
  "warehouse near me",

];

export const defaultDescription =
  "Tulip Bond is a custom bonded and private warehouse in SITE, Karachi. Secure storage, 70,000 sq ft RCC shed, 24/7 security, CCTV, and loading facilities.";

export const business = {
  name: SITE_NAME,
  legalName: SITE_LEGAL_NAME,
  email: "tulipbond1984@gmail.com",
  phone: "+92-331-2615950",
  telephoneDisplay: "+92 331 26159 50",
  streetAddress: "PWL 1/84, F-237, S.I.T.E",
  addressLocality: "Karachi",
  addressRegion: "Sindh",
  postalCode: "75700",
  addressCountry: "PK",
  latitude: 24.9055465,
  longitude: 66.9805934,
  sameAs: [
    "https://www.facebook.com/profile.php?id=61571041137335",
    "https://www.linkedin.com/in/tulip-bond/",
  ],
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/Storage",
  name: business.name,
  legalName: business.legalName,
  description: defaultDescription,
  url: SITE_URL,
  image: `${SITE_URL}/logoFinal.png`,
  email: business.email,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.streetAddress,
    addressLocality: business.addressLocality,
    addressRegion: business.addressRegion,
    postalCode: business.postalCode,
    addressCountry: business.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.latitude,
    longitude: business.longitude,
  },
  areaServed: {
    "@type": "City",
    name: "Karachi",
  },
  sameAs: business.sameAs,
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a custom bonded warehouse, and how does it benefit my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A custom bonded warehouse is a secure facility where imported goods can be stored without paying duties and taxes until released for local consumption. This helps manage cash flow, store goods securely, and defer customs payments.",
      },
    },
    {
      "@type": "Question",
      name: "What types of goods can be stored in Tulip Bond's custom warehouse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tulip Bond's warehouse in SITE, Karachi accommodates a wide range of goods, including perishable items, electronics, industrial equipment, and raw materials.",
      },
    },
    {
      "@type": "Question",
      name: "How long can goods be stored in your bonded warehouse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Goods can typically be stored in our bonded warehouse for up to 6 months, depending on customs regulations. During this period, you can re-export, process, or release them after paying the required duties.",
      },
    },
    {
      "@type": "Question",
      name: "What security measures are in place at Tulip Bond's warehouse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our warehouse is equipped with 24/7 armed and unarmed security, CCTV surveillance, controlled access, and fire safety systems.",
      },
    },
  ],
};
