'use client'; // Ensures the component runs as a Client Component

import Image from 'next/image';
import { useState, FormEvent, useEffect } from 'react';
import { db } from '@/utils/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { analytics } from '@/utils/firebase';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/utils/animation';
import { validateEmail } from '@/utils/function';

const Hero: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && analytics) {
      // You can add analytics code here if needed
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
        setLoading(false);
        return;
      }
      const docFile = await addDoc(collection(db, 'emails'), { email: email });
      toast.success('Email submitted successfully!', {
        position: 'top-center'
      });
      setLoading(false);
      setEmail('');
    } catch (error) {
      toast.error('Error submitting email. Please try again.', {
        position: 'top-center'
      });
      setLoading(false);
    }
  };

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.3 }}
        className="hero"
      >
        <div className="flex flex-col md:max-w-[1350px] md:mx-auto md:flex-row items-center md:gap-8 pt-2 md:py-12 px-8 md:px-12">
          <div className="mb-8 md:mb-0 z-10">
            <h1 className="text-6xl md:text-[90px] mb-6 text-[#17151D] leading-tight px-6 md:px-0">
              Get notified <br /> When we launch
            </h1>
            <div className="mx-auto mb-6">
              <div className="relative w-full flex flex-col sm:flex-row items-center justify-between max-w-full sm:max-w-[30rem] mb-8 md:p-10 p-8 border-[1px] border-black rounded-full">
                {/* Email form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full justify-center items-center"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email to be notified"
                    required
                    className="absolute left-0 bg-transparent outline-none px-4 py-2 sm:py-3 md:px-2 lg:py-2 text-sm sm:text-base lg:text-lg font-light lg:placeholder:text-lg placeholder:text-sm placeholder-gray-600 border-none focus:ring-0"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#ECAB88] absolute right-0 px-4 text-white md:mr-2 mr-2 sm:px-6 py-4 sm:py-3 lg:py-5 text-xs sm:text-sm lg:text-lg font-semibold rounded-full hover:bg-[#d5906a] transition-all duration-300"
                  >
                    {loading ? 'Loading' : 'Notify Me'}
                  </button>
                </form>
              </div>
              {/* Display success or error message */}

              <p className="text-[24px] text-[#17151D] font-light mt-2 ml-2 md:px-0 px-6">
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
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
