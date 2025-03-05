'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { sectionVariants } from '@/utils/animation';
import { useLanguage } from '@/utils/LanguageContext';

export default function Download() {
  const { t } = useLanguage();

  return (
    <motion.section
      id="approach"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      className="py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('download.title')}{' '}
            <span className="text-[#ECAB88]">
              {t('download.titleHighlight')}
            </span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {t('download.description')}
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            {t('download.stayTuned')}
          </h3>
          <p className="text-white mb-8">{t('download.notification')}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Image src="/lo.png" alt="Google Play" width={200} height={60} />
            <Image src="/lo1.png" alt="App Store" width={200} height={60} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
