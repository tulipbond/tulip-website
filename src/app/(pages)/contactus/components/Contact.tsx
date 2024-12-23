"use client";
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function ContactUshtmlForm() {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    description: '',
});

  useEffect(() => {
    setAnimate(true); // Trigger animation after the component has mounted
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
        if (result.text === 'OK') {
          toast.success("Form submitted successfully!");
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            description:''
          })
        }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
        setIsSubmitting(false);
    }
};
  return (
    // <!-- Hero -->
    <div
    className={` w-full bg-gradient-to-bl from-red-600 via-transparent max-w-[100rem] mx-auto ${
      animate ? 'animate-slide-down' : ''
        }`}
      
    >
      
      
      
      <div className="px-4 w-full  py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        {/* <!-- Grid --> */}
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl :text-neutral-200">
                Fully customizable rules to match your unique needs
              </h1>
              <p className="text-gray-600 :text-neutral-400">
                We understand the demands of a growing market and are equipped to handle everything from large,
                bulky items to small ,
                delicate products in a secure environment.
              </p>
            </div>

            <blockquote className="hidden md:block relative max-w-sm">
              <svg
                className="absolute top-0 start-0 transhtmlForm -translate-x-6 -translate-y-8 size-16 text-gray-200 :text-neutral-800"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>

              <div className="relative z-10">
                <p className="text-xl italic text-gray-800 :text-white">
                  Amazing people to work with. Very fast and professional
                  partner.
                </p>
              </div>

              <footer className="mt-3">
                <div className="flex items-center gap-x-4">
                 
                  <div className="grow">
                    <div className="font-semibold text-gray-800 :text-neutral-200">
                      Ahsan Ali
                    </div>
                   
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div>
            <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
              <form onSubmit={handleSubmit} className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg mt-1 sm:mt-40">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 :text-white mb-5">
                    Contact Us
                  </h1>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-hero-signup-htmlForm-floating-input-first-name"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none :bg-neutral-900 :border-neutral-700 :text-neutral-400 :focus:ring-neutral-600
                          focus:pt-6
                          focus:pb-2
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2 border"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        
                      />
                      <label
                        htmlFor="hs-hero-signup-htmlForm-floating-input-first-name"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:scale-90
                            peer-focus:translate-x-0.5
                            peer-focus:-translate-y-1.5
                            peer-focus:text-gray-500 :peer-focus:text-neutral-500
                            peer-[:not(:placeholder-shown)]:scale-90
                            peer-[:not(:placeholder-shown)]:translate-x-0.5
                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                            peer-[:not(:placeholder-shown)]:text-gray-500"
                      >
                        First name
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-hero-signup-htmlForm-floating-input-last-name"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none :bg-neutral-900 :border-neutral-700 :text-neutral-400 :focus:ring-neutral-600
                          focus:pt-6
                          focus:pb-2
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2 border"
                        placeholder="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        
                      />
                      <label
                        htmlFor="hs-hero-signup-htmlForm-floating-input-last-name"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:scale-90
                            peer-focus:translate-x-0.5
                            peer-focus:-translate-y-1.5
                            peer-focus:text-gray-500 :peer-focus:text-neutral-500
                            peer-[:not(:placeholder-shown)]:scale-90
                            peer-[:not(:placeholder-shown)]:translate-x-0.5
                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                            peer-[:not(:placeholder-shown)]:text-gray-500 :peer-[:not(:placeholder-shown)]:text-neutral-500 :text-neutral-500"
                      >
                        Last name
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        type="email"
                        id="hs-hero-signup-htmlForm-floating-input-email"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none :bg-neutral-900 :border-neutral-700 :text-neutral-400 :focus:ring-neutral-600
                          focus:pt-6
                          focus:pb-2
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2 border"
                        placeholder="you@email.com"
                        name="email"
                          value={formData.email}
                        onChange={handleChange}
                        required
                          
                      />
                      <label
                        htmlFor="hs-hero-signup-htmlForm-floating-input-email"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:scale-90
                            peer-focus:translate-x-0.5
                            peer-focus:-translate-y-1.5
                            peer-focus:text-gray-500 :peer-focus:text-neutral-500
                            peer-[:not(:placeholder-shown)]:scale-90
                            peer-[:not(:placeholder-shown)]:translate-x-0.5
                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                            peer-[:not(:placeholder-shown)]:text-gray-500 :peer-[:not(:placeholder-shown)]:text-neutral-500 :text-neutral-500"
                      >
                        Email
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="hs-hero-signup-htmlForm-floating-input-company-name"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none :bg-neutral-900 :border-neutral-700 :text-neutral-400 :focus:ring-neutral-600
                          focus:pt-6
                          focus:pb-2
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2 border"
                        placeholder="Company"
                        name="company"
                          value={formData.company}
                          onChange={handleChange}
                      />
                      <label
                        htmlFor="hs-hero-signup-htmlForm-floating-input-company-name"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:scale-90
                            peer-focus:translate-x-0.5
                            peer-focus:-translate-y-1.5
                            peer-focus:text-gray-500 :peer-focus:text-neutral-500
                            peer-[:not(:placeholder-shown)]:scale-90
                            peer-[:not(:placeholder-shown)]:translate-x-0.5
                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                            peer-[:not(:placeholder-shown)]:text-gray-500 :peer-[:not(:placeholder-shown)]:text-neutral-500 :text-neutral-500"
                      >
                        Company name
                      </label>
                    </div>
                  </div>

                  <div className="relative col-span-full">
                    <div className="relative">
                      <textarea
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none :bg-neutral-900 :border-neutral-700 :text-neutral-400 :focus:ring-neutral-600
                          focus:pt-6
                          focus:pb-2
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2 border"
                        placeholder="Description"
                        name="description"
                          value={formData.description}
                          onChange={handleChange}
                          
                      />
                      <label
                        htmlFor="hs-hero-signup-htmlForm-floating-input-new-password"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:scale-90
                            peer-focus:translate-x-0.5
                            peer-focus:-translate-y-1.5
                            peer-focus:text-gray-500 :peer-focus:text-neutral-500
                            peer-[:not(:placeholder-shown)]:scale-90
                            peer-[:not(:placeholder-shown)]:translate-x-0.5
                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                            peer-[:not(:placeholder-shown)]:text-gray-500 :peer-[:not(:placeholder-shown)]:text-neutral-500 :text-neutral-500"
                      >
                        Description
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex justify-center items-center gap-x-2 text-sm  bg-gradient-to-r from-red-600 to-orange-500 hover:text-black hover:bg-white text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out"
                  >
                   {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
