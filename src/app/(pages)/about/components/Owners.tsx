"use client"
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const OwnerDetail = () => {
  const pictureUrl = '/afzal.jpg';
  const name = 'Mr. Muhammad Afzal Munif';
  const details = `Tulip Industries Pvt. Ltd. was established in 1976 under the visionary leadership of its founder, the late Mr. Muhammad Afzal Munif. A pioneer in the industry, Mr. Munif held numerous distinguished positions, including President of the Institute of Chartered Accountants Pakistan, Chairman of Muniff Ziauddin & Company, and Provincial Minister of Planning and Development Government of Sindh, among others. His legacy of excellence continues to inspire our commitment to quality and innovation.`;
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
      once: true,
    })
  },[])
  return (
    <div data-aos="fade-up" className="flex flex-col md:flex-row items-center p-6 border rounded-lg shadow-lg w-full max-w-[100rem] mx-auto mb-5">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 md:h-[500px]">
        <img
          src={pictureUrl}
          alt={`${name}'s picture`}
          className="w-48 h-48 md:w-96 md:h-[410px] object-cover rounded-lg border mx-auto"
        />
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold ">{name}<br/>(Founder)</h2>
        </div>
      </div>
      <div className=" md:text-justify text-justify">
        <p className="text-gray-700 text-lg md:text-3xl tracking-tighter">{details}</p>
      </div>
    </div>
  );
};

export default OwnerDetail;
