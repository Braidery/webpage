'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionVariants } from '@/utils/animation';
import { useLanguage } from '@/utils/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      questionKey: 'faq.q1',
      answerKey: 'faq.a1'
    },
    {
      id: 2,
      questionKey: 'faq.q2',
      answerKey: 'faq.a2'
    },
    {
      id: 3,
      questionKey: 'faq.q3',
      answerKey: 'faq.a3'
    },
    {
      id: 4,
      questionKey: 'faq.q4',
      answerKey: 'faq.a4'
    },
    {
      id: 5,
      questionKey: 'faq.q5',
      answerKey: 'faq.a5'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('faq.title')}{' '}
            <span className="text-[#ECAB88]">{t('faq.titleHighlight')}</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">{t('faq.description')}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full py-4 px-6 bg-white/10 backdrop-blur-sm rounded-lg text-white font-medium text-left"
                >
                  <span>{t(faq.questionKey)}</span>
                  <span>
                    {activeIndex === index ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`px-6 py-4 text-white/90 ${
                        activeIndex === index ? 'block' : 'hidden'
                      }`}
                    >
                      <p className="text-white">{t(faq.answerKey)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
