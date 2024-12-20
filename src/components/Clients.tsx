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
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div data-aos="fade-up" className="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mb-6">
          <h1 className=" text-xl md:text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 ">Our Clients</h1>
          <h2 className="text-zinc-900 className:text-neutral-400 sm:text-lg md:text-xl ">
          Trusted by logistics professionals, businesses, and more than 99,000 warehouse operators worldwide.
          </h2>
        </div>

        <div data-aos="flip-right" className="grid grid-cols-3 md:grid-cols-6 gap-x-6">
          <img
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 className:text-neutral-500"
            src="https://cdn.brandfetch.io/idv0ZbfQqf/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
          />
           
         

          <img
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 className:text-neutral-500"
            src="https://cdn.brandfetch.io/id6C1TEJxN/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
          />
           
          

          <img
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 className:text-neutral-500"
            src="https://cdn.brandfetch.io/id-ny4dYLQ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
          />
            

          <img
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 className:text-neutral-500"
            src="https://cdn.brandfetch.io/idkccMhoPZ/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
          />
          
          

          <img
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 className:text-neutral-500"
           src="https://cdn.brandfetch.io/idVIIZH-LB/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
          />
            
          
         

          <img
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 className:text-neutral-500"
           src="https://cdn.brandfetch.io/id6v7qnJfo/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
          />
           
        </div>

        <div data-aos="flip-left" className="grid grid-cols-3 md:grid-cols-5 gap-x-6 sm:gap-x-6">
          <img
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 className:text-neutral-500"
            src="https://cdn.brandfetch.io/idvUUwP3ul/w/1900/h/447/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
          />
            
         

          <img
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 className:text-neutral-500"
            src="https://cdn.brandfetch.io/id38VKxYqy/w/518/h/192/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
          />
        

          <img
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 className:text-neutral-500"
            src="https://cdn.brandfetch.io/idWK5t6PG_/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
          />
         

          <img
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 className:text-neutral-500"
           src="https://cdn.brandfetch.io/idUYOLMr8D/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
          />
        

          <img
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-500 className:text-neutral-500"
            src="https://cdn.brandfetch.io/idUL5d1fhA/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
          />
          
        </div>
      </div>
    </>
  );
}

export default Clients;
