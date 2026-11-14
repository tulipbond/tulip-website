import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const stats = [
  { value: "2 acres", label: "Facility land" },
  { value: "70,000", label: "Sq ft RCC shed" },
  { value: "35,000", label: "Sq ft open yard" },
  { value: "24/7", label: "Security & CCTV" },
];

export default function HeroBanner() {
  return (
    <section className="relative isolate flex min-h-[88vh] w-full items-center overflow-hidden">
      <Image
        src="/hero-port.jpg"
        alt="Shipping containers and port cranes near the bonded warehouse terminal in Karachi"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-[#0B0B12]/95"
        aria-hidden="true"
      />

      <div className="shell relative z-10 pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            Customs bonded · Since 1976
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Custom bonded warehouse{" "}
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
              in SITE, Karachi
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Private bonded storage, security and logistics for importers and
            industrial clients from bulky industrial cargo to small, high-value
            goods, all in one secure facility.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get a quote
            </Link>
            <Link href="/services" className="btn-ghost">
              Explore services
            </Link>
            <div className="ml-1 flex items-center gap-2 sm:ml-3">
              <a
                href="https://www.facebook.com/profile.php?id=61571041137335"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/45 hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/tulip-bond/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/45 hover:text-white"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black/20 px-5 py-5">
              <dd className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-white/50">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
