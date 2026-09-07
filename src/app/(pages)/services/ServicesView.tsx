"use client";
import { useState } from "react";
import Banner from "../servicepage/components/Banner";

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "acre-land",
    title: "2 Acre Bonded Warehouse Land in SITE, Karachi",
    description:
      "This 2-acre custom bonded warehouse property in SITE, Karachi offers indoor and outdoor storage, parking, and space to grow your import or industrial operations.",
  },
  {
    id: "rcc-shed",
    title: "70,000 SQ FT RCC Warehouse Shed",
    description:
      "Our 70,000 sq ft RCC A class shed is built for industrial warehousing and logistics in Karachi, with the infrastructure to scale bonded or private storage.",
  },
  {
    id: "open-area",
    title: "35,000 SQ FT Open Yard Storage",
    description:
      "35,000 sq ft of open yard storage in SITE Karachi for outdoor cargo, containers, and logistics, inside a secure bonded warehouse environment.",
  },
  {
    id: "security",
    title: "24/7 Armed & Unarmed Security",
    description:
      "Professional 24/7 armed and unarmed security protects your cargo at our bonded warehouse in Karachi, with a trained on-site team.",
  },
  {
    id: "cctv",
    title: "CCTV Surveillance",
    description:
      "CCTV cameras cover key areas of the warehouse so you can monitor stored goods and facility activity around the clock.",
  },
  {
    id: "fire-safety",
    title: "Fire Safety Infrastructure",
    description:
      "The facility includes fire extinguishers and emergency protocols to protect inventory stored in our custom bonded warehouse.",
  },
  {
    id: "loading-facility",
    title: "Loading & Unloading Facility",
    description:
      "Ramps and heavy-duty equipment support efficient loading and unloading for trucks serving our Karachi warehouse.",
  },
  {
    id: "lifter-facility",
    title: "On-Site Lifter Facility",
    description:
      "On-site lifters handle heavy materials and equipment so your warehouse operations stay in one secure location.",
  },
];

export default function ServicesView() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <>
      <Banner />
      <section className="py-20 px-5 md:px-20 max-w-[100rem] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Bonded warehouse facilities in SITE, Karachi
        </h2>
        <p className="text-lg text-gray-700 mb-10 max-w-4xl">
          Tulip Bond offers custom bonded and private warehouse services for
          importers and industrial clients in Karachi, including secure storage,
          open yard space, and on-site logistics.
        </p>
        <div className="grid gap-10 md:grid-cols-1 sm:grid-cols-3 ">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              onClick={() => setSelectedCard(service.id)}
              className={`service-card p-6 transition-all duration-300 bg-gradient-to-bl from-red-600 via-transparent text-black rounded-lg shadow-md cursor-pointer transform hover:scale-105 ${
                selectedCard === service.id
                  ? "text-white bg-black"
                  : "bg-white text-gray-900"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
