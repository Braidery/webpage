'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import clsx from 'clsx';
const faqData = [
  {
    question: 'What is Braidery?',
    answer:
      'BRAIDERY is a comprehensive hair care platform designed to connect individuals with expert braiders and hair care professionals.'
  },
  {
    question: 'What are the offer about that?',
    answer:
      'We offer a variety of services tailored to your hair care needs, including braiding, styling, and more.'
  },
  {
    question: 'Which services?',
    answer:
      'We provide braiding, hair styling, and other hair care services from professional braiders.'
  },
  {
    question: 'What is a wireframe?',
    answer:
      'A wireframe is a visual guide that represents the skeletal framework of a website.'
  },
  {
    question: 'What is user testing?',
    answer:
      'User testing is the process of evaluating a product by testing it with real users.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the currently opened FAQ
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-[64px] px-2 font-extrabold mb-14">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="bg-[#FFF6E5] my-4  p-8 rounded cursor-pointer "
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex px-1 md:px-8 justify-between items-center ">
            <h3
              className={`text-lg font-light ${
                openIndex === index ? 'text-[#E6A97D]' : 'text-[#E6A97D]'
              }`}
            >
              {faq.question}
            </h3>
            <div
              className={clsx(
                'transition-transform duration-300',
                openIndex === index ? 'rotate-180' : 'rotate-0'
              )}
            >
              <FiChevronDown className="w-6 h-6" />
            </div>
          </div>

          {/* Animated Answer Section */}
          <div
            className={clsx(
              'overflow-hidden transition-all duration-500 bg-[#FFF6E5] px-8',
              openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <p className="mt-4 text-brown-600 font-light transition-opacity duration-500">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
