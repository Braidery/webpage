// src/app/layout.tsx

import { ReactNode } from 'react';
import '../styles/globals.css'; // Correct path to your global CSS
import NavBar from '@/components/header/Topnavigation';

export const metadata = {
  title: 'Braidery',
  description: 'Find the perfect hairdresser with BRAIDERY',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-brown-600 dark:text-brown-800">
        <header className="">
        <NavBar />
        </header>
        <main className="flex-grow">
          {children}
          </main>
        <footer className="border-t py-8 text-center bg-peach-300 dark:bg-darkButton text-[#18181B]">
          &copy; {new Date().getFullYear()} BRAIDERY. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
