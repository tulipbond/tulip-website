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
      className={`relative bg-[url('https://cdn.pixabay.com/photo/2016/11/21/13/20/port-1845350_960_720.jpg')] bg-cover bg-center bg-no-repeat h-[50rem] w-full max-w-[100rem] mx-auto flex items-center justify-center overflow-hidden transform transition-all duration-500 ease-out ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>

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
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed text-xl md:text-3xl">
          Custom Bonded & Private Warehouse
        </p>

        <div className="mt-6 flex flex-col items-center">
          <Link
            href="/contactus"
            className="bg-gradient-to-r from-red-500 to-orange-600 hover:text-black hover:bg-white text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out"
          >
            Get a quote
          </Link>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61571041137335"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition transform hover:scale-105"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.129V8.412c0-3.1 1.892-4.785 4.655-4.785 1.324 0 2.463.098 2.793.142v3.24h-1.916c-1.5 0-1.793.713-1.793 1.76v2.31h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/tulip-bond/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-600 transition transform hover:scale-105"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M22.23 0H1.77C.791 0 0 .774 0 1.732v20.536C0 23.226.792 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.732V1.732C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.042h3.56v11.41zM5.34 7.555c-1.136 0-2.059-.932-2.059-2.08 0-1.15.923-2.08 2.059-2.08s2.059.932 2.059 2.08c0 1.148-.922 2.08-2.059 2.08zm15.11 12.897h-3.56v-5.624c0-1.341-.025-3.067-1.872-3.067-1.872 0-2.16 1.462-2.16 2.973v5.718h-3.56V9.042h3.42v1.558h.05c.477-.902 1.64-1.852 3.374-1.852 3.608 0 4.274 2.375 4.274 5.462v6.242z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
