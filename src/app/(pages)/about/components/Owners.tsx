import Image from "next/image";

const OwnerDetail = () => {
  const pictureUrl = "/afzal.jpg";
  const name = "Mr. Muhammad Afzal Munif";
  const details = `Tulip Industries Pvt. Ltd. was established in 1976 under the visionary leadership of its founder, the late Mr. Muhammad Afzal Munif. A pioneer in the industry, Mr. Munif held numerous distinguished positions, including President of the Institute of Chartered Accountants Pakistan, Chairman of Muniff Ziauddin & Company, and Provincial Minister of Planning and Development Government of Sindh, among others. His legacy of excellence continues to inspire our commitment to quality and innovation.`;

  return (
    <section className="section bg-[#F7F7F8]">
      <div className="shell">
        <div className="grid overflow-hidden rounded-3xl border border-line bg-white md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="relative min-h-[320px] bg-zinc-100 md:min-h-full">
            <Image
              src={pictureUrl}
              alt="Muhammad Afzal Munif, founder of Tulip Industries bonded warehouse"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top"
            />
          </div>

          <div className="p-8 sm:p-12">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              Founder
            </span>
            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
              {name}
            </h2>
            <p className="mt-1 text-sm uppercase tracking-[0.16em] text-muted">
              Founder, Tulip Industries Pvt. Ltd.
            </p>

            <div className="mt-6 border-l-2 border-red-600 pl-5">
              <p className="text-base leading-relaxed text-muted">{details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerDetail;
