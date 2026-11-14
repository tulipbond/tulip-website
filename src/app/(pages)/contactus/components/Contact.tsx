"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@/components/Modal";
import { business } from "@/lib/seo";

export default function ContactUshtmlForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      );
      if (result.text === "OK") {
        setModalMessage("Form submitted successfully!");
        setModalSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          description: "",
        });
      }
    } catch (error) {
      console.error(error);
      setModalMessage("Something went wrong. Please try again later.");
      setModalSuccess(false);
    } finally {
      setIsSubmitting(false);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="section bg-white">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
            Get in touch
          </span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
            Let&apos;s talk about your storage needs
          </h2>
          <p className="mt-5 lead">
            We understand the demands of a growing market and are equipped to
            handle everything from large, bulky items to small, delicate
            products in a secure environment.
          </p>

          <div className="mt-10 space-y-3">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                `${business.streetAddress}, ${business.addressLocality}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-red-100 hover:shadow-soft"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Warehouse
                </span>
                <span className="mt-1 block text-sm font-medium text-ink">
                  {business.streetAddress}, {business.addressLocality}{" "}
                  {business.postalCode}
                </span>
              </span>
            </a>

            <a
              href={`tel:${business.phone}`}
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-red-100 hover:shadow-soft"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                >
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.9 2.3Z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Phone
                </span>
                <span className="mt-1 block text-sm font-medium text-ink">
                  {business.telephoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${business.email}`}
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition hover:border-red-100 hover:shadow-soft"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Email
                </span>
                <span className="mt-1 block text-sm font-medium text-ink">
                  {business.email}
                </span>
              </span>
            </a>
          </div>

          <blockquote className="mt-10 rounded-2xl bg-[#F7F7F8] p-6">
            <p className="font-display text-lg leading-snug text-ink">
              &ldquo;Amazing people to work with. Very fast and professional
              partner.&rdquo;
            </p>
            <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Ahsan Ali
            </footer>
          </blockquote>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8"
          >
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Request a quote
            </h3>
            <p className="mt-1.5 text-sm text-muted">
              Tell us what you need to store and we will get back to you.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="field-label">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="field"
                  placeholder="Ali"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="field-label">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="field"
                  placeholder="Khan"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="field-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="field"
                  placeholder="you@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="field-label">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  className="field"
                  placeholder="Company name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="description" className="field-label">
                  What do you need stored?
                </label>
                <textarea
                  id="description"
                  className="field min-h-[132px] resize-y"
                  placeholder="Cargo type, volume, duration and any customs requirements"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit request"}
              </button>
              <p className="mt-3 text-center text-xs text-muted">
                Prefer to talk? Call{" "}
                <a
                  href={`tel:${business.phone}`}
                  className="font-semibold text-ink transition hover:text-red-600"
                >
                  {business.telephoneDisplay}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          modalMessage={modalMessage}
          modalSuccess={modalSuccess}
        />
      )}
    </section>
  );
}
