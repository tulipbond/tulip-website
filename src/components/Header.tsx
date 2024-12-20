"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClasses = (path: string): string => {
    return pathname === path
      ? 'text-red-500 border-b-2 border-red-500'
      : 'text-gray-200 hover:text-red-500 hover:border-b-2 hover:border-red-500';
  };

  return (
    <nav className="w-full bg-transparent max-w-[100rem] mx-auto fixed top-0 z-50">
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
            className="md:hidden text-gray-200 hover:text-red-500 focus:outline-none"
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
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-75 shadow-md">
          <div className="px-4 py-2 space-y-2 flex flex-col text-center">
            <Link href="/" className={getLinkClasses('/')} onClick={handleToggle}>Home</Link>
            <Link href="/about" className={getLinkClasses('/about')} onClick={handleToggle}>About</Link>
            <Link href="/servicepage" className={getLinkClasses('/servicepage')} onClick={handleToggle}>Services</Link>
            <Link href="/contactus" className={getLinkClasses('/contactus')} onClick={handleToggle}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
