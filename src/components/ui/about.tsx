'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { sectionVariants } from '@/utils/animation';

export default function About() {
  return (
    <motion.section
      id="about"
      className="md:py-20"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className=" md:max-w-[1350px] mx-auto px-6 md:px-8 flex flex-col-reverse md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="/1.png" // Add your image here
            alt="Braidery app interface"
            width={340}
            height={100}
            className="rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 mb-8 md:mb-0 md:pl-12">
          <h2 className=" text-[32px] md:text-[70px] mb-6">
            What`s <span className="text-[#E6A97D]">BRAIDERY</span> ?
          </h2>
          <p className="text-[#18181B] md:text-[28px] font-extralight mb-4">
            BRAIDERY is a comprehensive hair care platform designed to connect
            individuals with expert braiders and hair care professionals, while
            also providing personalized hair care recommendations and tools. It
            is a one-stop solution for everything hair-related.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
