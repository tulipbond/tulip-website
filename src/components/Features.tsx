import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaLandmark,
  FaWarehouse,
  FaMapMarkerAlt,
  FaUserShield,
  FaFireExtinguisher,
  FaTruckLoading,
} from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { MdForklift } from "react-icons/md";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const features: ServiceCardProps[] = [
  {
    title: "2 Acre Land",
    description:
      "Our facility is spread over 2 acres of secure and well-maintained land.",
    icon: <FaLandmark size={20} />,
    link: "/services#acre-land",
  },
  {
    title: "70,000 SQ FT RCC A class Shed",
    description:
      "We offer a spacious 70,000 sq ft RCC A class shed for industrial or storage needs.",
    icon: <FaWarehouse size={20} />,
    link: "/services#rcc-shed",
  },
  {
    title: "35,000 SQ FT Open Area",
    description:
      "Ample open space available for outdoor activities, parking, or logistics.",
    icon: <FaMapMarkerAlt size={20} />,
    link: "/services#open-area",
  },
  {
    title: "24/7 Armed & Unarmed Security",
    description:
      "Our premises are protected round the clock by armed and unarmed security guards.",
    icon: <FaUserShield size={20} />,
    link: "/services#security",
  },
  {
    title: "CCTV Facility",
    description:
      "State-of-the-art CCTV surveillance systems cover the entire premises.",
    icon: <GiCctvCamera size={20} />,
    link: "/services#cctv",
  },
  {
    title: "Fire Extinguisher Available",
    description:
      "Our facility is equipped with fire extinguishers to ensure safety.",
    icon: <FaFireExtinguisher size={20} />,
    link: "/services#fire-safety",
  },
  {
    title: "Loading & Unloading Facility",
    description:
      "We provide efficient loading and unloading facilities for all types of vehicles.",
    icon: <FaTruckLoading size={20} />,
    link: "/services#loading-facility",
  },
  {
    title: "Lifter Facility",
    description:
      "On-site lifters are available to assist with heavy equipment and materials.",
    icon: <MdForklift size={20} />,
    link: "/services#lifter-facility",
  },
];

const Service = () => {
  return (
    <section id="facilities" className="section bg-white">
      <div className="shell">
        <div className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
            Facilities
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            Warehouse facilities in SITE, Karachi
          </h2>
          <p className="mt-4 lead">
            Custom bonded and private warehouse storage, security and logistics
            for importers and industrial clients in Karachi.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link
              key={feature.link}
              href={feature.link}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 transition duration-300 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-orange-500 group-hover:text-white">
                {feature.icon}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-red-600 opacity-0 transition duration-300 group-hover:opacity-100">
                Learn more
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
