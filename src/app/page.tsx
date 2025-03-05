import Hero from '../components/ui/hero';
import About from '../components/ui/about';
import WhyBraidery from '../components/ui/whyBraidery';
import Features from '../components/ui/features';
import Download from '../components/ui/download';
import Contact from '../components/ui/contact';
import FAQ from '@/components/ui/faq';
import Testimonials from '@/components/ui/testimonials';
import Blog from '@/components/ui/blog';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <WhyBraidery />
      <Testimonials />
      <Blog />
      <Download />
      <FAQ />
      <Contact />
    </div>
  );
}
