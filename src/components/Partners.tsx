"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Clients() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  },[])
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 bg-red-500 mx-auto">
        <div data-aos="fade-up" className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
          <h1 className=" text-3xl md:text-5xl font-bold  text-transparent bg-clip-text bg-white ">Our Partners</h1>
        </div>
<div className="flex flex-col md:flex-row gap-x-4 p-2">
<div
      className=" sm:w-1/2 lg:w-1/2 px-2 mb-8 cursor-pointer transform transition-transform hover:scale-105"
    >
      <div data-aos="flip-right" className="h-full flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-red-50">
        
        <h3 className="mb-2 text-lg font-bold text-gray-800 text-center">Ajmal International</h3>
        <p className="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, ipsam.</p>
      </div>
    </div>

    <div
      className="sm:w-1/2 lg:w-1/2 px-2 mb-8 cursor-pointer transform transition-transform hover:scale-105"
    >
      <div data-aos="flip-right" className="h-full flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:bg-red-50">
        
        <h3 className="mb-2 text-lg font-bold text-gray-800 text-center">Ibrahim International</h3>
        <p className="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, ipsam.</p>
      </div>
    </div>
</div>
      </div>
    </>
  );
}

export default Clients;
