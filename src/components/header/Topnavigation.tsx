'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/utils/LanguageContext';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        // Determine if scrolled at all
        setScrolled(currentScrollY > 0);

        // Determine scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          // Scrolling down & past threshold
          setVisible(false);
        } else {
          // Scrolling up or at the top
          setVisible(true);
        }

        // Update last scroll position
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // Function to navigate and scroll correctly
  const handleNavigation = (hash: string) => {
    if (pathname === '/') {
      // If already on the landing page, scroll smoothly
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to landing page first, then scroll
      router.push(`/#${hash}`);
    }
  };

  return (
    <div
      className={`${scrolled ? 'bg-white/10 backdrop-blur-sm' : 'bg-transparent'} ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } w-full z-50 fixed transition-all duration-300`}
    >
      <nav className="flex flex-col md:flex-row max-w-[1350px] mx-auto justify-between items-center px-3 py-4 md:px-7 md:py-4">
        {/* Logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/braiderylogo-removebg-preview.png"
              alt="Braidery Logo"
              className="object-fill"
              width={90}
              height={50}
            />
          </Link>
          {/* Hamburger Icon for Mobile */}
          <button className="md:hidden block text-white" onClick={toggleMenu}>
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
          className={`${
            isOpen ? 'flex' : 'hidden'
          } z-50 bg-white/10 backdrop-blur-sm md:bg-transparent flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
        >
          <li>
            <button
              onClick={() => handleNavigation('about')}
              className="text-white hover:text-[#ECAB88]"
            >
              {t('nav.about')}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('features')}
              className="text-white hover:text-[#ECAB88]"
            >
              {t('nav.features')}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('service')}
              className="text-white hover:text-[#ECAB88]"
            >
              {t('nav.services')}
            </button>
          </li>
          {/* <li>
            <button
              onClick={() => handleNavigation('blog')}
              className="text-white hover:text-[#ECAB88]"
            >
              {t('nav.blog')}
            </button>
          </li> */}
          <li>
            <button
              onClick={() => handleNavigation('faq')}
              className="text-white hover:text-[#ECAB88]"
            >
              {t('nav.faq')}
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation('contact')}
              className="text-white hover:text-[#ECAB88]"
            >
              {t('nav.contact')}
            </button>
          </li>
        </ul>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <LanguageSwitcher />
          {/* Ask a Question navigates to /contact */}
          <button
            onClick={() => handleNavigation('contact')}
            className="hidden md:block bg-[#ECAB88] text-white px-6 py-2 rounded-full hover:bg-[#d5906a] transition-all duration-300"
          >
            {t('nav.askQuestion')}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
