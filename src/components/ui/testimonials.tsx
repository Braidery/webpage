'use client';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/utils/animation';
import { useLanguage } from '@/utils/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      nameKey: 'testimonials.person1.name',
      roleKey: 'testimonials.person1.role',
      quoteKey: 'testimonials.person1.quote',
      initials: 'SJ'
    },
    {
      id: 2,
      nameKey: 'testimonials.person2.name',
      roleKey: 'testimonials.person2.role',
      quoteKey: 'testimonials.person2.quote',
      initials: 'MT'
    },
    {
      id: 3,
      nameKey: 'testimonials.person3.name',
      roleKey: 'testimonials.person3.role',
      quoteKey: 'testimonials.person3.quote',
      initials: 'AW'
    }
  ];

  return (
    <motion.section
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-24"
    >
      <div className="md:max-w-[1350px] mx-auto px-6 md:px-12">
        <h2 className="text-[32px] md:text-[70px] font-bold mb-12 text-center text-white">
          {t('testimonials.title')}{' '}
          <span className="text-[#ECAB88]">
            {t('testimonials.titleHighlight')}
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/30 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#ECAB88] flex items-center justify-center bg-[#ECAB88]/20">
                <span className="text-[#ECAB88] font-bold text-xl">
                  {testimonial.initials}
                </span>
              </div>
              <p className="text-white text-lg italic mb-4">
                &quot;{t(testimonial.quoteKey)}&quot;
              </p>
              <h4 className="text-[#ECAB88] font-semibold text-xl">
                {t(testimonial.nameKey)}
              </h4>
              <p className="text-white text-sm">{t(testimonial.roleKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
