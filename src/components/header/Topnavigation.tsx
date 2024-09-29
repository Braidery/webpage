'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${scrolled && 'hero bg-opacity-100'} ${!scrolled && 'bg-white bg-opacity-0 border-none'} w-full z-50 fixed`}
    >
      <nav className="flex flex-col md:flex-row max-w-[1350px] mx-auto justify-between items-center bg-cream px-3 py-4 md:px-10 md:py-6">
        {/* Logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Image
            src="/logo.png"
            alt="Braidery Logo"
            className="object-fill"
            width={90}
            height={50}
          />
          {/* Hamburger Icon for Mobile */}
          <button className="md:hidden block text-black" onClick={toggleMenu}>
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Left Side - Navigation Links */}
        <ul
          className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
        >
          <li>
            <a href="#" className="text-black hover:text-gray-700">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-700">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-700">
              Approach
            </a>
          </li>
        </ul>

        {/* Right Side - Call to Action Button */}
        <button className="mt-4 md:flex hidden  md:mt-0 bg-[#17151D] text-white px-6 py-2 rounded-full hover:bg-gray-800">
          Get now
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
