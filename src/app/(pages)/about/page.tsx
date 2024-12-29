"use client"
import React from 'react'
import HeroBanner from './components/HeroBanner'
import Biography from './components/Biography'
import Owners from "./components/Owners"
import { useEffect, useState } from 'react'
import Image from 'next/image'


const page = () => {
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
        <Biography />
        <Owners/>
      </>
  )}
  </>
    );
  };
export default page