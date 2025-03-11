'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/utils/animation';
import { useLanguage } from '@/utils/LanguageContext';

export default function WhyBraidery() {
  const { t } = useLanguage();

  const features = [
    { id: 1, key: 'why.feature1' },
    { id: 2, key: 'why.feature2' },
    { id: 3, key: 'why.feature3' },
    { id: 4, key: 'why.feature4' },
    { id: 5, key: 'why.feature5' },
    { id: 6, key: 'why.feature6' }
  ];

  return (
    <motion.section
      id="service"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('why.title')}{' '}
            <span className="text-[#ECAB88]">{t('why.titleHighlight')}</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">{t('why.description')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <div
              key={feature.id}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg flex items-start"
            >
              <div className="mr-4 text-[#ECAB88]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white">{t(feature.key)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
