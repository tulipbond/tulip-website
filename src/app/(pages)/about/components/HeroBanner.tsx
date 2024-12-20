"use client"
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const HeroBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
      once: true, // Whether animation should happen only once
    });
  },[])
  return (
    <section
    data-aos="fade-left" className="bg-banner bg-cover bg-center bg-no-repeat h-[50rem] w-full max-w-[100rem] mx-auto flex items-center justify-center overflow-hidden"
  >

    

    {/* Hero Content */}
    <div
      className="max-w-7xl bg-white rounded-3xl py-10 bg-opacity-50 mx-auto px-6 sm:px-12 lg:px-16 text-center transform transition-all duration-1000 ease-out">
      <h1 className=" inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-orange-500 text-3xl font-extrabold  sm:text-4xl md:text-8xl ">
      About Us
      </h1>
      <h1 className="text-4xl font-bold text-black">
            Dedicated to service since 1984
          </h1>
  
    </div>

    
  </section>
  )
}

export default HeroBanner