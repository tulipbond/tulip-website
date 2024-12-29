"use client";

import { useState,useEffect } from "react";
import Map from "@/components/navigation/Map";
import Contact from "./components/Contact";
import ContactBanner from "./components/ContactBanner";
import React from "react";
import Image from "next/image";

export default function ContactUshtmlForm() {

const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer); 
    }, []);
  return (
        <>
          {isLoading ? (
            
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <Image src="/warehouse.gif" height={100} width={100} alt="loader"/>
            </div>
          ) : (
    <>
    <ContactBanner/>
    <Contact />
    <Map/>
    </>
  )}
  </>
  );
}
