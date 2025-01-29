'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { db } from '@/utils/firebase';
import { addDoc, collection } from 'firebase/firestore';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes('#')) {
      const hash = pathname.split('#')[1];
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [pathname]);

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (!email || !message) {
        throw new Error('All fields are required.');
      }

      // Add data to Firestore
      await addDoc(collection(db, 'contact_messages'), {
        email,
        message,
        timestamp: new Date()
      });

      setSuccess('Your message has been sent successfully!');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Failed to send message. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 md:pt-20">
        <div className="flex gap-[10rem] md:mt-12">
          {/* Left Section */}
          <div className="space-y-6">
            <h1 className="text-[40px] md:text-[64px] font-extrabold text-[#E6A97D]">
              Quickly Get Updates
            </h1>
            <p className="text-lg font-light text-brown-600">
              Any question or remarks? Just write us a <br></br>
              message!
            </p>

            {/* Display Success or Error Messages */}
            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
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

              {/* Message Field */}
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
                  placeholder="Write your message..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  rows={4}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-full font-light hover:bg-gray-800 transition-all duration-300"
              >
                {loading ? 'Sending...' : 'Ask the question'}
              </button>
            </form>
          </div>

          {/* Right Section: Phone Mockup */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-[20rem] h-[520px]">
              <Image
                src="/dashboard.png"
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
