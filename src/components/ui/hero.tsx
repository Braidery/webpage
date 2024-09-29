'use client'; // Ensures the component runs as a Client Component

import Image from 'next/image';
import { useState, FormEvent, useEffect } from 'react';
import { db } from '@/utils/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { analytics } from '@/utils/firebase'; // Import Firebase analytics
import { toast } from 'sonner';
const Hero: React.FC = () => {
  // Firebase Analytics initialization inside useEffect
  useEffect(() => {
    if (typeof window !== 'undefined' && analytics) {
    }
  }, []);

  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (!validateEmail(email)) {
        setMessage('Please enter a valid email address.');
        return;
      }
      // Add the email to Firestore collection
      const docFile = await addDoc(collection(db, 'emails'), { email: email });
      toast.success('Email submitted successfully!', {
        position: 'top-center'
      });
      setLoading(false);
      setEmail('');
      // setEmail('');
    } catch (error) {
      toast.error('Error submitting email. Please try again.', {
        position: 'top-center'
      });
      setLoading(false);
    }
  };

  // Email validation function
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section className="hero">
      <div className="flex flex-col max-w-[1350px] md:mx-auto md:flex-row items-center md:gap-8 py-24 md:py-12 px-8 md:px-12">
        <div className="mb-8 md:mb-0 z-10">
          <h1 className="text-4xl md:text-[90px] mb-6 text-[#17151D] leading-tight">
            Get notified <br /> When we launch
          </h1>
          <div className="mx-auto md:mx-0 mb-6">
            <div className="flex items-center justify-between md:max-w-[32rem] mb-8 p-2 border-[1px] border-black rounded-full shadow-lg">
              {/* Email form */}
              <form
                onSubmit={handleSubmit}
                className="flex w-full items-center"
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email to be notified"
                  required
                  className="flex-grow bg-transparent outline-none px-6 py-2 md:py-4 text-lg font-light placeholder-gray-600 border-none focus:ring-0"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#ECAB88] text-white px-4 md:px-6  py-2 md:py-4 text-xs md:text-lg font-semibold rounded-full hover:bg-[#d5906a] transition-all duration-300"
                >
                  {loading ? 'Loading' : 'Notify Me'}
                </button>
              </form>
            </div>
            {/* Display success or error message */}

            <p className="text-[24px] text-[#17151D] font-light mt-2 ml-2">
              Don`t worry, we will not send spam :{')'}
            </p>
          </div>
        </div>
        <div className="z-10">
          <Image
            src="/12.png" // Update with the correct image path
            alt="App mockup"
            width={530.01}
            height={50.58}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
