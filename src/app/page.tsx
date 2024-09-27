import Head from 'next/head';
import Header from '../components/ui/header';
import Hero from '../components/ui/hero';
import About from '../components/ui/about';
import WhyBraidery from '../components/ui/whyBraidery';
import Download from '../components/ui/download';
import Footer from '../components/ui/footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FDF6E9]">
      <Hero />
      <About />
      <WhyBraidery />
      <Download />
    </div>
  );
}
