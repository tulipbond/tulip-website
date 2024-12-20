"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FAQ() {
  // State to keep track of which accordion is open
  const [open, setOpen] = useState<number | null>(null);

  // Toggle function to open/close the accordion
  const toggleAccordion = (index: number) => {
    setOpen(open === index ? null : index); // Close the accordion if it's already open, otherwise open it
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="max-w-[100rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gradient-to-bl from-red-600 via-transparent"
    >
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight :text-white  text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Frequently
              <br />
              asked questions
            </h2>
            <p className="mt-1 hidden md:block text-black :text-neutral-400">
              Answers to the most frequently asked questions.
            </p>
            <img
              src="https://static.vecteezy.com/system/resources/previews/047/492/151/non_2x/a-man-thinking-about-a-question-3d-photo-free-png.png"
              alt=""
              className="hidden sm:block"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-black">
            {/* Each accordion section */}
            {[
              {
                question:
                  "What is a custom bonded warehouse, and how does it benefit my business?",
                answer:
                  "A custom bonded warehouse is a secure facility where imported goods can be stored without paying duties and taxes until released for local consumption. This helps manage cash flow, store goods securely, and defer customs payments.",
              },
              {
                question:
                  "What types of goods can be stored in Tulip Bonds custom warehouse?",
                answer:
                  "Tulip Bonds warehouse accommodates a wide range of goods, including perishable items, electronics, industrial equipment, and raw materials, and offering you secure storage options.",
              },
              {
                question:
                  "How long can goods be stored in your bonded warehouse?",
                answer:
                  "Goods can typically be stored in our bonded warehouse for up to 6 months, depending on customs regulations. During this period, you can re-export, process, or release them after paying the required duties.",
              },
              {
                question:
                  "What security measures are in place at Tulip Bonds warehouse?",
                answer:
                  "Our warehouse is equipped with 24/7 surveillance, controlled access, and fire suppression systems to ensure the safety and integrity of your goods.",
              },
              {
                question:
                  "How can I track my inventory and manage my stored goods?",
                answer:
                  "Tulip Bond offers a realtime updates on stock levels, storage duration, and customs clearance status via whatsapp and email.",
              },
            ].map((item, index) => (
              <div key={index} className="hs-accordion pt-6 pb-3">
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  onClick={() => toggleAccordion(index)} // Toggle open/close on click
                  aria-expanded={open === index ? "true" : "false"} // Update aria-expanded based on open state
                >
                  {item.question}
                  <svg
                    className={`hs-accordion-active:hidden block shrink-0 size-5 text-zinc-900 group-hover:text-gray-500 ${
                      open === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className={`hs-accordion-active:block hidden shrink-0 size-5 text-zinc-900 group-hover:text-gray-500 ${
                      open === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                    open === index ? "block" : "hidden"
                  }`}
                  role="region"
                  aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
