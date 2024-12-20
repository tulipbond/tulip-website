"use client";
import React from "react";
import Image from "next/image";


const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const phoneNumber = "+923212423610"; // Replace with your phone number
    const message = encodeURIComponent("Want to reserve warehouse?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 z-40 right-4 md:bottom-6 md:right-6 transform transition duration-300 ease-in-out hover:scale-105 hover:animate-wiggle rounded-full shadow-lg focus:outline-none"
      aria-label="WhatsApp"
      
    >
       <Image
       src="/whatsapp.png"
       alt="whatsapp"
       height={50}
       width={50}

       />
    </button>
  );
};

export default WhatsAppButton;