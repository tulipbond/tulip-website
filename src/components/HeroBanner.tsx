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
      className={`relative bg-[url('https://cdn.pixabay.com/photo/2016/11/21/13/20/port-1845350_960_720.jpg')] bg-cover bg-center bg-no-repeat h-[50rem] w-full max-w-[100rem] mx-auto flex items-center justify-center overflow-hidden transform transition-all duration-500 ease-out ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      
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
          Welcome to{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
            Tulip
          </span>
        </h1>
        <p className="mt-4  text-gray-300 max-w-2xl mx-auto leading-relaxed text-xl md:text-3xl ">
          Custom Bonded & Private Warehouse
        </p>
       
        <div className="mt-6 flex justify-center">
          <Link
            href="/contactus"
            className="bg-gradient-to-r from-red-500 to-orange-600 hover:text-black hover:bg-white text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out"
          >
            Get a quote
          </Link>
        </div>
      </div>

      
    </section>
  );
}
