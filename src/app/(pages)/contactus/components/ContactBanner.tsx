"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [animate, setAnimate] = useState(false);
  

  useEffect(() => {
    setAnimate(true);

   
  }, []);

  return (
    
    <section
      className={`relative bg-contact bg-cover bg-center bg-no-repeat h-[50rem] w-full max-w-[100rem] mx-auto flex items-center justify-center overflow-hidden transform transition-all duration-500 ease-out ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>

      {/* Circular Progress */}
      

      {/* Hero Content */}
      <div
        className={`max-w-[100rem] mx-auto px-6 sm:px-12 lg:px-16 text-center transform transition-all duration-500 ease-out ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-7xl leading-tight">
          Contact{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
            Us
          </span>
        </h1>
        <p className="mt-4  text-gray-300 max-w-2xl mx-auto leading-relaxed text-xl md:text-3xl ">
          Freel free to ask
        </p>
       
      </div>

      
    </section>
  );
}
