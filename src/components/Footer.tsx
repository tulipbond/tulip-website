import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { business } from "@/lib/seo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="shell py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" aria-label="Tulip Bond home">
              <Image
                src="/logoFinal.png"
                width={120}
                height={56}
                alt="Tulip Bond warehouse logo"
                className="h-11 w-auto rounded-xl bg-white p-1.5"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Custom bonded and private warehousing in SITE, Karachi — secure
              storage, 24/7 protection and on-site logistics since 1976.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61571041137335"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <FaFacebookF className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tulip-bond/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
              >
                <FaLinkedinIn className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/40">
              Address
            </h2>
            <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-white/65">
              <p>{business.streetAddress}</p>
              <p>{business.addressLocality}</p>
              <p>Postal: {business.postalCode}</p>
              <p>NTN &amp; STN: 0712486-4</p>
            </div>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/40">
              Contact
            </h2>
            <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-white/65">
              <p>Tel: 32570409 , 32562367</p>
              <p>Phone: {business.telephoneDisplay}</p>
              <p>Fax: 92-21-32562366</p>
              <a
                href={`mailto:${business.email}`}
                className="inline-block text-white/80 underline decoration-white/20 underline-offset-4 transition hover:text-white"
              >
                {business.email}
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/40">
              Our partners
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/65">
              <div>
                <Link
                  href="https://maps.app.goo.gl/8ALkhriZuCCmWNzn6"
                  target="_blank"
                  className="font-display text-base font-semibold text-white transition hover:text-red-400"
                >
                  Ibrahim International
                </Link>
                <p>F-24-A S.I.T.E, Karachi. 75700</p>
                <p>ibrahiminternational2006@gmail.com</p>
                <p>Tel: 32593117 | Cell: 0331-2615949</p>
              </div>
              <div>
                <Link
                  href="https://maps.app.goo.gl/aeMNQuW4Xg2Jkw5x8"
                  target="_blank"
                  className="font-display text-base font-semibold text-white transition hover:text-red-400"
                >
                  Ajmal International
                </Link>
                <p>F-31 S.I.T.E, Karachi. 75700</p>
                <p>ajmalinternational2008@gmail.com</p>
                <p>Tel: 32593920 | Cell: 0331-2615946</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Tulip Industries Pvt. Ltd. All
            rights reserved.
          </p>
          <a
            href="https://www.synchro9.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-white/70"
          >
            <Image
              src="/synchro-9-logo.png"
              alt="synchro-9"
              width={18}
              height={18}
              className="rounded"
            />
            <span>
              Powered by{" "}
              <span className="font-semibold tracking-wide text-white/70">
                Synchro-9
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
