'use client';
import Image from 'next/image';
import { useState } from 'react';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#FFF6E5] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section: Form and Text */}
          <div className="space-y-6">
            <h1 className="text-[40px] md:text-[64px] font-extrabold text-[#E6A97D]">
              Quickly Get Updates
            </h1>
            <p className="text-lg font-light text-brown-600">
              Any question or remarks? Just write us a message!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brown-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#E6A97D] py-2 px-4"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-brown-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#E6A97D] py-2 px-4"
                  placeholder="Write your message.."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Ask the question
              </button>
            </form>
          </div>

          {/* Right Section: Phone Mockup */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-60 h-[420px]">
              {/* Insert the phone mockup image here */}
              <Image
                src="/images/phone-dashboard.png" // Update the path to your image
                alt="Mobile Dashboard"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
