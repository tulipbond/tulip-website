"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Biography = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 40) {
          clearInterval(interval);
          return 40;
        }
        return prev + 1;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-white">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
            Our story
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            Know about Tulip Industries
          </h2>

          <p className="mt-6 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
            Owned and operated by Tulip Industries Pvt. Ltd., with its parent
            company headquartered in SITE, Karachi.
          </p>

          <p className="mt-5 text-base leading-relaxed text-muted">
            At Tulip Custom Bonded Warehouse, we are more than just a
            warehousing solution. We understand the complexities of a dynamic
            and growing market and are equipped to manage a wide range of
            products, from large, bulky goods to small, delicate items, all
            within a secure and efficient environment.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            <div>
              <dd className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                {progress}
                <span className="text-red-600">+</span>
              </dd>
              <dt className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                Years of experience
              </dt>
            </div>
            <div>
              <dd className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                2
                <span className="text-red-600"> acres</span>
              </dd>
              <dt className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                Facility land
              </dt>
            </div>
            <div>
              <dd className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                70k
              </dd>
              <dt className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                Sq ft RCC shed
              </dt>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/1.jpg"
              alt="Industrial cargo stored at Tulip Bond custom bonded warehouse in SITE Karachi"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="relative -mt-16 ml-auto aspect-[4/3] w-3/5 overflow-hidden rounded-2xl border-4 border-white shadow-soft sm:-mt-20 sm:w-1/2">
            <Image
              src="/wareinner.jpg"
              alt="Interior of the Tulip Bond warehouse facility in SITE Karachi"
              fill
              sizes="(max-width: 1024px) 60vw, 25vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -left-2 top-6 hidden rounded-2xl bg-white p-5 shadow-soft sm:block">
            <p className="font-display text-2xl font-semibold text-ink">1984</p>
            <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-muted">
              Serving since
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
