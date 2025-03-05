'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '@/utils/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'no', name: 'Norsk' },
    { code: 'fr', name: 'Français' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative z-50">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-200 transition-all duration-300"
        aria-label="Select language"
      >
        <span className="md:inline">{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-gray-300 shadow-lg overflow-hidden"
          >
            <div className="py-1">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code as Language)}
                  className={`w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 ${
                    language === lang.code ? 'bg-gray-100' : ''
                  }`}
                >
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
