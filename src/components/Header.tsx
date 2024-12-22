"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);      
  const pathname = usePathname();
  const bannerHeight = 600;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > bannerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClasses = (path: string): string => {
    return pathname === path
    ? `border-b-2 ${isScrolled ? 'text-red-500 border-red-500' : 'text-red-500 border-red-500'}`
    : `${isScrolled ? 'text-gray-800 max-w-[100rem] mx-auto hover:text-red-500 hover:border-red-500' : 'text-gray-200 hover:text-red-500 hover:border-red-500'}`;
};

  return (
    <nav className={`w-full max-w-[100rem] fixed top-0 z-50 transition-colors duration-300 ${
      isScrolled ? 'bg-white' : ' bg-transparent'
    }`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logoFinal.png" alt="logo" width={100} height={50} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={getLinkClasses('/')}>Home</Link>
            <Link href="/about" className={getLinkClasses('/about')}>About</Link>
            <Link href="/servicepage" className={getLinkClasses('/servicepage')}>Services</Link>
            <Link href="/contactus" className={getLinkClasses('/contactus')}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-red-500 hover:text-red-500 focus:outline-none"
            onClick={handleToggle}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

       {/* Mobile Menu */}
       <div
        className={`fixed top-0 right-0 h-full backdrop-blur shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="px-10 py-10 gap-5 space-y-2 flex flex-col text-center relative">
          {/* Close Button */}
          <button
            type="button"
            className="absolute top-4 left-2 text-red-500 focus:outline-none"
            onClick={handleToggle}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
          <Link href="/" className={getLinkClasses('/')} onClick={handleToggle}>Home</Link>
          <Link href="/about" className={getLinkClasses('/about')} onClick={handleToggle}>About</Link>
          <Link href="/servicepage" className={getLinkClasses('/servicepage')} onClick={handleToggle}>Services</Link>
          <Link href="/contactus" className={getLinkClasses('/contactus')} onClick={handleToggle}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
