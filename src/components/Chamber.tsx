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
  }, []);
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div
          data-aos="flip-right"
          className="w-2/3 sm:w-1/2 lg:w-full p-10 mx-auto text-start shadow-md bg-gradient-to-r from-red-600 to-orange-500 rounded-lg mb-6"
        >
          <h1 className=" text-xl md:text-3xl font-bold  text-white  ">
            Tulip Warehouse is a member of the Site Association of Industry and
            the Karachi Chamber of Commerce and Industry.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Clients;
