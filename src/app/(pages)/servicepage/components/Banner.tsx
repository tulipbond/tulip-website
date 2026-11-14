import Image from "next/image";

interface BannerProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  image?: string;
  alt?: string;
}

export default function Banner({
  eyebrow = "Services",
  title,
  highlight,
  subtitle,
  image = "/services-banner.jpg",
  alt = "Pallet racking and a forklift inside the Tulip Bond warehouse",
}: BannerProps) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-center overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-[#0B0B12]/95"
        aria-hidden="true"
      />

      <div className="shell relative z-10 pb-14 pt-32 md:pb-20 md:pt-40">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            {eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}{" "}
            {highlight && (
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
