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
import Banner from "../servicepage/components/Banner";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const services: Service[] = [
  {
    id: "acre-land",
    title: "2 Acre Bonded Warehouse Land in SITE, Karachi",
    description:
      "This 2-acre custom bonded warehouse property in SITE, Karachi offers indoor and outdoor storage, parking, and space to grow your import or industrial operations.",
    icon: <FaLandmark size={22} />,
  },
  {
    id: "rcc-shed",
    title: "70,000 SQ FT RCC Warehouse Shed",
    description:
      "Our 70,000 sq ft RCC A class shed is built for industrial warehousing and logistics in Karachi, with the infrastructure to scale bonded or private storage.",
    icon: <FaWarehouse size={22} />,
  },
  {
    id: "open-area",
    title: "35,000 SQ FT Open Yard Storage",
    description:
      "35,000 sq ft of open yard storage in SITE Karachi for outdoor cargo, containers, and logistics, inside a secure bonded warehouse environment.",
    icon: <FaMapMarkerAlt size={22} />,
  },
  {
    id: "security",
    title: "24/7 Armed & Unarmed Security",
    description:
      "Professional 24/7 armed and unarmed security protects your cargo at our bonded warehouse in Karachi, with a trained on-site team.",
    icon: <FaUserShield size={22} />,
  },
  {
    id: "cctv",
    title: "CCTV Surveillance",
    description:
      "CCTV cameras cover key areas of the warehouse so you can monitor stored goods and facility activity around the clock.",
    icon: <GiCctvCamera size={22} />,
  },
  {
    id: "fire-safety",
    title: "Fire Safety Infrastructure",
    description:
      "The facility includes fire extinguishers and emergency protocols to protect inventory stored in our custom bonded warehouse.",
    icon: <FaFireExtinguisher size={22} />,
  },
  {
    id: "loading-facility",
    title: "Loading & Unloading Facility",
    description:
      "Ramps and heavy-duty equipment support efficient loading and unloading for trucks serving our Karachi warehouse.",
    icon: <FaTruckLoading size={22} />,
  },
  {
    id: "lifter-facility",
    title: "On-Site Lifter Facility",
    description:
      "On-site lifters handle heavy materials and equipment so your warehouse operations stay in one secure location.",
    icon: <MdForklift size={22} />,
  },
];

export default function ServicesView() {
  return (
    <>
      <Banner
        eyebrow="Our services"
        title="Bonded warehouse services in"
        highlight="Karachi"
        subtitle="Secure storage, open yard space and on-site logistics for importers and industrial clients in SITE, Karachi."
      />

      <section className="section bg-white">
        <div className="shell">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              Facilities
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
              Bonded warehouse facilities in SITE, Karachi
            </h2>
            <p className="mt-4 lead">
              Tulip Bond offers custom bonded and private warehouse services for
              importers and industrial clients in Karachi, including secure
              storage, open yard space, and on-site logistics.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="group relative scroll-mt-28 rounded-2xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition duration-300 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-orange-500 group-hover:text-white">
                    {service.icon}
                  </span>
                  <span className="font-display text-sm font-semibold text-zinc-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-[#F7F7F8] px-6 py-10 sm:px-10 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Need storage for your next shipment?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                Share your cargo details and we will confirm availability,
                handling and customs requirements.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Request a quote
              </Link>
              <Link href="/about" className="btn-outline">
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
