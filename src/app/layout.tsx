import { ReactNode } from 'react';
import '../styles/globals.css'; // Correct path to your global CSS
import NavBar from '@/components/header/Topnavigation';
import { Poppins } from '@/styles/font';
import { Toaster } from 'sonner';
import { Link } from 'react-router-dom';

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
      </head>
      <head>
        <link rel="icon" href="/braiderylogo-removebg-preview.png" />
        {/* You can also add multiple sizes for different devices */}
        {/* <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        <title>Braidery</title>
        <meta
          name="description"
          content="Your Hair Care Companion, Tailored to Every Texture."
        />
      </head>
      <body
        className={`${Poppins.variable} min-h-screen text-brown-600 dark:text-brown-800`}
      >
        <header className="">
          <NavBar />
        </header>
        <Toaster richColors />
        <main className={`${Poppins.variable} flex-grow`}>{children}</main>
        <footer className="border-t py-8 text-center bg-peach-300 dark:bg-darkButton text-[#18181B]">
          &copy; {new Date().getFullYear()} BRAIDERY. All rights reserved.{' '}
          <p>
            <a
              href="mailto:cgamman@braidery.com"
              className="text-blue-500 hover:underline"
            >
              cgamman@braidery.com
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
