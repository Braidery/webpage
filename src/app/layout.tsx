import { ReactNode } from 'react';
import '../styles/globals.css'; // Correct path to your global CSS
import NavBar from '@/components/header/Topnavigation';
import BackToTop from '@/components/ui/BackToTop';
import { Poppins } from '@/styles/font';
import { Toaster } from 'sonner';
import { LanguageProvider } from '@/utils/LanguageContext';
import Footer from '@/components/ui/footer';

export const metadata = {
  title: 'Braidery',
  description: 'The Ultimate Hair Care Companion'
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add the Google AdSense script here */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9490987391720050"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/braiderylogo-removebg-preview.png" />
        {/* You can also add multiple sizes for different devices */}
        {/* <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        <title>Braidery</title>
      </head>
      <body className={Poppins.className}>
        <LanguageProvider>
          <NavBar />
          <main className="min-h-screen bg-transparent pt-20">{children}</main>
          <Footer />
          <BackToTop />
          <Toaster position="top-center" />
        </LanguageProvider>
      </body>
    </html>
  );
}
