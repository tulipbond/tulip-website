"use client";
import { useEffect } from "react"
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
      once: true, // Whether animation should happen only once
    });
   },[])
  return (
    <section
    data-aos="fade-up"
      className="relative max-w-[100rem] w-full mx-auto min-h-[34rem] sm:min-h-[42rem] lg:min-h-[50rem] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/services-banner.jpg"
        alt="Pallet racking and a forklift inside the Tulip Bond warehouse"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

<div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" aria-hidden="true"></div>

      {/* Hero Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:px-12 lg:px-16 text-center transform transition-all duration-1000 ease-out">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-7xl leading-tight">
          Bonded Warehouse Services in{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-orange-500">
            Karachi
          </span>
        </h1>
       
    
      </div>

      
    </section>
  )
}

export default Banner