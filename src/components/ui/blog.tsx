'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/utils/animation';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/utils/LanguageContext';

interface BlogPost {
  id: number;
  titleKey: string;
  excerptKey: string;
  dateKey: string;
  image: string;
  link: string;
}

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      titleKey: 'blog.post1.title',
      excerptKey: 'blog.post1.excerpt',
      dateKey: 'blog.post1.date',
      image: '/1.png', // Using existing image from public directory
      link: '#'
    },
    {
      id: 2,
      titleKey: 'blog.post2.title',
      excerptKey: 'blog.post2.excerpt',
      dateKey: 'blog.post2.date',
      image: '/2.png', // Using existing image from public directory
      link: '#'
    },
    {
      id: 3,
      titleKey: 'blog.post3.title',
      excerptKey: 'blog.post3.excerpt',
      dateKey: 'blog.post3.date',
      image: '/3.png', // Using existing image from public directory
      link: '#'
    }
  ];

  return (
    <motion.section
      id="blog"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('blog.title')}{' '}
            <span className="text-[#ECAB88]">{t('blog.titleHighlight')}</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            {t('blog.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div
              key={post.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={t(post.titleKey)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                  onError={e => {
                    // Fallback if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = '/app.png'; // Fallback image
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-white/70 mb-2">{t(post.dateKey)}</p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t(post.titleKey)}
                </h3>
                <p className="text-white/80 mb-4">{t(post.excerptKey)}</p>
                <Link
                  href={post.link}
                  className="text-[#ECAB88] font-medium hover:underline"
                >
                  {t('blog.readMore')} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-[#ECAB88] text-white font-medium rounded-lg hover:bg-[#e09a73] transition-colors duration-300"
          >
            {t('blog.viewAll')}
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Blog;
