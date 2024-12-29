"use client"
import React, { useState, useEffect } from 'react';
import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import HeroBanner from '@/components/HeroBanner';
import Chamber from '@/components/Chamber';
import Image from 'next/image';
const Page = () => {
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
          <HeroBanner />
          <Features />
          <Chamber />
          <FAQ />
        </>
      )}
    </>
  );
};
export default Page;