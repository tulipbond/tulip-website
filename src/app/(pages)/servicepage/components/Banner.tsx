"use client";
import { useEffect } from "react"
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
      className="bg-[url('https://www.writermoversgroup.com/images/services/warehouse-banner-img.jpg')] bg-cover bg-center bg-no-repeat max-w-[100rem] w-full mx-auto h-[50rem] flex items-center justify-center overflow-hidden"
    >

<div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>

      {/* Hero Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center transform transition-all duration-1000 ease-out">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-7xl leading-tight">
          Services Of{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-orange-500">
            Tulip
          </span>
        </h1>
       
    
      </div>

      
    </section>
  )
}

export default Banner