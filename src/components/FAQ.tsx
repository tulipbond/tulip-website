"use client";

import { useState } from "react";
import Link from "next/link";
import { business } from "@/lib/seo";

const faqs = [
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
    question: "How long can goods be stored in your bonded warehouse?",
    answer:
      "Goods can typically be stored in our bonded warehouse for up to 6 months, depending on customs regulations. During this period, you can re-export, process, or release them after paying the required duties.",
  },
  {
    question: "What security measures are in place at Tulip Bonds warehouse?",
    answer:
      "Our warehouse is equipped with 24/7 surveillance, controlled access, and fire suppression systems to ensure the safety and integrity of your goods.",
  },
  {
    question: "How can I track my inventory and manage my stored goods?",
    answer:
      "Tulip Bond offers a realtime updates on stock levels, storage duration, and customs clearance status via whatsapp and email.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-[#F7F7F8]">
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 lead max-w-sm">
            Answers to the questions importers ask us most about bonded storage
            in Karachi.
          </p>

          <div className="mt-8 rounded-2xl border border-line bg-white p-6">
            <p className="font-display text-lg font-semibold text-ink">
              Still have questions?
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              Speak to our team about your cargo, timelines and customs
              requirements.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-primary !px-5 !py-2.5">
                Contact us
              </Link>
              <a
                href={`tel:${business.phone}`}
                className="text-sm font-semibold text-ink transition hover:text-red-600"
              >
                {business.telephoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="font-display text-base font-medium leading-snug text-ink sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                      isOpen
                        ? "rotate-45 border-red-200 bg-red-50 text-red-600"
                        : "border-line text-muted"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  role="region"
                >
                  <p className="pr-12 text-sm leading-relaxed text-muted sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
