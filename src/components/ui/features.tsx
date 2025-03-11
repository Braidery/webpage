'use client';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/utils/animation';
import Image from 'next/image';
import { useLanguage } from '@/utils/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      id: 1,
      titleKey: 'features.ai.title',
      descriptionKey: 'features.ai.description'
    },
    {
      id: 2,
      titleKey: 'features.find.title',
      descriptionKey: 'features.find.description'
    },
    {
      id: 3,
      titleKey: 'features.track.title',
      descriptionKey: 'features.track.description'
    },
    {
      id: 4,
      titleKey: 'features.style.title',
      descriptionKey: 'features.style.description'
    }
  ];

  return (
    <motion.section
      id="features"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('features.title')}{' '}
            <span className="text-[#ECAB88]">
              {t('features.titleHighlight')}
            </span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => (
            <div
              key={feature.id}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/30 flex flex-col items-center text-center h-full transition-all duration-300 hover:border-[#ECAB88]/50"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6 bg-[#ECAB88]/20 rounded-full border border-[#ECAB88]/30">
                <div className="text-[#ECAB88] font-bold">
                  {feature.id === 1 && 'AI'}
                  {feature.id === 2 && 'PRO'}
                  {feature.id === 3 && 'TRACK'}
                  {feature.id === 4 && 'STYLE'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-white">{t(feature.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
