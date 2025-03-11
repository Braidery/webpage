'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { sectionVariants } from '@/utils/animation';
import { useLanguage } from '@/utils/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="about"
      className="md:py-20"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="md:max-w-[1350px] mx-auto px-6 md:px-8 flex flex-col-reverse md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="/about.png"
            alt="about.png"
            width={340}
            height={400}
            className="rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 md:pl-12 mb-8 md:mb-0">
          <h2 className="text-[30px] md:text-[70px] font-bold mb-6 text-white">
            {t('about.title')}{' '}
            <span className="text-[#ECAB88]">{t('about.titleHighlight')}</span>?
          </h2>
          <p className="text-white md:text-[28px] font-extralight mb-4">
            {t('about.description')}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
