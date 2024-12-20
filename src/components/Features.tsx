"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
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
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const features = [
  {
    title: "2 Acre Land",
    description: "Our facility is spread over 2 acres of secure and well-maintained land.",
    icon: <FaLandmark size={36} className="text-red-600" />,
    link: "#acre-land",
  },
  {
    title: "70,000 SQ FT RCC A class Shed",
    description: "We offer a spacious 70,000 sq ft RCC A class shed for industrial or storage needs.",
    icon: <FaWarehouse size={36} className="text-red-600" />,
    link: "#rcc-shed",
  },
  {
    title: "35,000 SQ FT Open Area",
    description: "Ample open space available for outdoor activities, parking, or logistics.",
    icon: <FaMapMarkerAlt size={36} className="text-red-600" />,
    link: "#open-area",
  },
  {
    title: "24/7 Armed & Unarmed Security",
    description: "Our premises are protected round the clock by armed and unarmed security guards.",
    icon: <FaUserShield size={36} className="text-red-600" />,
    link: "#security",
  },
  {
    title: "CCTV Facility",
    description: "State-of-the-art CCTV surveillance systems cover the entire premises.",
    icon: <GiCctvCamera size={36} className="text-red-600" />,
    link: "#cctv",
  },
  {
    title: "Fire Extinguisher Available",
    description: "Our facility is equipped with fire extinguishers to ensure safety.",
    icon: <FaFireExtinguisher size={36} className="text-red-600" />,
    link: "#fire-extinguisher",
  },
  {
    title: "Loading & Unloading Facility",
    description: "We provide efficient loading and unloading facilities for all types of vehicles.",
    icon: <FaTruckLoading size={36} className="text-red-600" />,
    link: "#loading-facility",
  },
  {
    title: "Lifter Facility",
    description: "On-site lifters are available to assist with heavy equipment and materials.",
    icon: <MdForklift size={36} className="text-red-600" />,
    link: "#lifter-facility",
  },
];

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  },[])
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/servicepage${link}`);
  };

  return (
    <div
      onClick={handleRedirect}
      className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 cursor-pointer transform transition-transform hover:scale-105"
    >
      <div data-aos="flip-right" className="h-full flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-red-50">
        <div className="mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-red-100">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-800 text-center">{title}</h3>
        <p className="text-center text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <section className="w-full max-w-[100rem] mx-auto px-4 md:px-8 lg:px-16 py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2  className="text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
          What We Offer
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Explore our wide range of facilities designed to meet your business needs.
        </p>
        <div  className="mt-10 flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <ServiceCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
