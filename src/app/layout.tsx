// src/app/layout.tsx

import { ReactNode } from 'react';
import '../styles/globals.css'; // Correct path to your global CSS
import NavBar from '@/components/header/Topnavigation';
import { Poppins } from '@/styles/font';
import { Toaster } from 'sonner';

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
      <body
        className={`${Poppins.variable} min-h-screen text-brown-600 dark:text-brown-800`}
      >
        <header className="">
          <NavBar />
        </header>
        <Toaster richColors />
        <main className={`${Poppins.variable}flex-grow`}>{children}</main>
        <footer className="border-t py-8 text-center bg-peach-300 dark:bg-darkButton text-[#18181B]">
          &copy; {new Date().getFullYear()} BRAIDERY. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
