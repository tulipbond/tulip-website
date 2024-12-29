"use client";
import { useEffect, useState, useRef } from "react";
import Banner from "./components/Banner";
import Image from "next/image";

// Define the type for a service item
interface Service {
  id: string;
  title: string;
  description: string;
}

const ServicesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  // State to track the selected card
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // State to track which cards are visible on scroll
  const [visibleCards, setVisibleCards] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Refs to store references to each card div element
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer); 
    
  }, []);


  const handleCardClick = (id: string) => {
    setSelectedCard(id);
  };



  const services: Service[] = [


    {
      id: "acre-land",
      title: "2 Acre Land",
      description:
        "This expansive 2-acre property offers the perfect space for various business operations. Indoor and outdoor storage, parking facilities, well-maintained space is designed to support your growth and provide the room you need for your endeavors.",
    },
    {
      id: "rcc-shed",
      title: "70,000 SQ FT RCC A class Shed",
      description:
        "Our 70,000 sq ft RCC A class shed is built with industrial-grade materials to accommodate a variety of business needs. From warehousing to logistics, this space provides the infrastructure and flexibility to scale your operations.",
    },
    {
      id: "open-area",
      title: "35,000 SQ FT Open Area",
      description:
        "This open space of 35,000 sq ft is perfect for outdoor storage need and managing logistics. It offers a flexible solution that adapts to your unique business requirements, all within a safe and secure environment.",
    },
    {
      id: "security",
      title: "24/7 Armed & Unarmed Security",
      description:
        "Your peace of mind is our top priority. With professional, 24/7 security services, both armed and unarmed, we ensure the safety of your property, assets, and personnel at all times. Our security team is well-trained and highly responsive to any situation.",
    },
    {
      id: "cctv",
      title: "CCTV Surveillance",
      description:
        "Our advanced CCTV surveillance system is strategically placed throughout the facility to monitor all key areas. This provides additional security and allows us to keep an eye on your property from anywhere, anytime.",
    },
    {
      id: "fire-safety",
      title: "Fire Safety Infrastructure",
      description:
        "The facility is equipped with state-of-the-art fire safety systems, including fire extinguishers and emergency protocols, to ensure that we're always prepared in case of an emergency. Your safety is always our top priority.",
    },
    {
      id: "loading-facility",
      title: "Loading & Unloading Facility",
      description:
        "Our loading and unloading facilities are equipped with ramps and heavy-duty equipment to make your logistics process smoother. This enables efficient handling of goods and ensures that your operations run without delays.",
    },
    {
      id: "lifter-facility",
      title: "On-Site Lifter Facility",
      description:
        "Our on-site lifter facility is designed to assist with heavy lifting of materials, goods, and equipment. This ensures that our team can safely and efficiently handle any large items without additional outsourcing.",
    },
  ];
  useEffect(() => {


    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
            observer.unobserve(entry.target); // Stop observing once the card is visible
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    // Observe each card
    Object.values(cardRefs.current).forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [isLoading,services]);


  return (
    <>
          {isLoading ? (
            
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <Image src="/warehouse.gif" height={100} width={100} alt="loader"/>
            </div>
          ) : (
    <>
      <Banner />
      <section className="py-20 px-5 md:px-20 max-w-[100rem] mx-auto">
        <div className="grid gap-10 md:grid-cols-1 sm:grid-cols-3 ">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[service.id] = el;
              }}
              onClick={() => handleCardClick(service.id)}
              className={`service-card p-6 transition-all duration-300 bg-gradient-to-bl from-red-600 via-transparent text-black rounded-lg shadow-md cursor-pointer transform hover:scale-105 ${
                selectedCard === service.id
                  ? "text-white bg-black"
                  : "bg-white text-gray-900"
              } ${
                visibleCards[service.id]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      
    </>
)};
    </>
  );
};




export default ServicesPage;
