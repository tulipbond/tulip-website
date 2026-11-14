import React from "react";

const Map: React.FC = () => {
  return (
    <section className="pb-20">
      <div className="shell">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              Location
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Find us in SITE, Karachi
            </h2>
          </div>
          <a
            href="https://maps.app.goo.gl/8ALkhriZuCCmWNzn6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !px-5 !py-2.5"
          >
            Open in Google Maps
          </a>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-line">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7781893737006!2d66.98059337393681!3d24.905546543454612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315c226748237%3A0x4125d93da8f89e59!2sTulip%20bond!5e0!3m2!1sen!2s!4v1733585803066!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tulip Bond warehouse location in SITE, Karachi"
            className="h-[420px] w-full grayscale-[0.2]"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
