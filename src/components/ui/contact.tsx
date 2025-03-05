'use client';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/utils/animation';
import { toast } from 'sonner';
import { useLanguage } from '@/utils/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success(
        'Message sent successfully! We will get back to you soon.',
        {
          position: 'top-center'
        }
      );
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('contact.title')}{' '}
            <span className="text-[#ECAB88]">
              {t('contact.titleHighlight')}
            </span>
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-white">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-white">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-white">
                {t('contact.form.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-white">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-[#ECAB88] text-white font-medium rounded-lg hover:bg-[#d99b78] transition-colors"
            >
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
