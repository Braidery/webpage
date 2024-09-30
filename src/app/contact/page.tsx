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
    <div className="hero min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:pt-24  ">
        <div className="flex gap-[10rem] md:mt-20">
          {/* Left Section: Form and Text */}
          <div className="space-y-6">
            <h1 className="text-[40px] md:text-[64px] font-extrabold text-[#E6A97D]">
              Quickly Get Updates
            </h1>
            <p className="text-lg font-light text-brown-600">
              Any question or remarks? Just write us a <br></br>
              message!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#8D8D8D]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full border-b border-gray-300 focus:outline-none bg-none focus:border-[#E6A97D] py-2 px-4 hero"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#8D8D8D]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 w-full border-b border-gray-300 focus:outline-none focus:border-[#E6A97D] py-2 px-4 hero"
                  placeholder="Write your message.."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-full font-light hover:bg-gray-800 transition-all duration-300"
              >
                Ask the question
              </button>
            </form>
          </div>

          {/* Right Section: Phone Mockup */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-[20rem] h-[520px]">
              {/* Insert the phone mockup image here */}
              <Image
                src="/dashboard.png" // Update the path to your image
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
