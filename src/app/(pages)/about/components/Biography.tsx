"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
      once: true, // Whether animation should happen only once
    });
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 40) {
          clearInterval(interval);
          return 40;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-5 md:px-20 max-w-[100rem] mx-auto">
      <h1 data-aos="fade-down" className="text-center mb-10 font-extrabold text-5xl">Know About Tulip Industries </h1>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div data-aos="fade-right" className="space-y-6">
          <h1 className="text-center text-4xl font-semibolc tracking-tighter">
            Owned and operated by Tulip Industries Pvt. Ltd., with its parent
            company headquartered in SITE, Karachi.{" "}
          </h1>
          <p className="text-gray-600 text-justify tracking-tighter text-lg md:text-3xl">
            At Tulip Custom Bonded Warehouse, we are more than just a
            warehousing solution. We understand the complexities of a dynamic
            and growing market and are equipped to manage a wide range of
            products, from large, bulky goods to small, delicate items, all
            within a secure and efficient environment.
          </p>

          <div className="text-5xl font-bold text-red-600">
            {progress}{" "}
            <span className="text-2xl text-gray-600">YEARS OF EXPERIENCE</span>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="space-y-10">
          <div
            data-aos="fade-up"
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="/tire.jpg"
              alt="TechWave Solutions Team"
              className="w-full h-72 object-cover"
            />
          </div>
          <div
            data-aos="fade-up"
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="/wareinner.jpg"
              alt="TechWave Solutions Team"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
