"use client";

import React, { useEffect, useState } from 'react';
import HeroBanner from './components/HeroBanner';
import Biography from './components/Biography';
import Owners from "./components/Owners";
import Image from 'next/image';

const Page: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer); // Clean up the timeout
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <Image src="/warehouse.gif" height={100} width={100} alt="loader" />
        </div>
      ) : (
        <>
          <HeroBanner />
          <Biography />
          <Owners />
        </>
      )}
    </>
  );
};

export default Page;
