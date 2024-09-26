// src/app/layout.tsx

import { ReactNode } from 'react';
import '../styles/globals.css'; // Correct path to your global CSS

export const metadata = {
  title: 'Braidery',
  description: 'Find the perfect hairdresser with BRAIDERY',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream-100 dark:bg-darkBackground text-brown-600 dark:text-brown-800">
        <header className="flex justify-between items-center p-4 shadow-md bg-peach-300 dark:bg-darkButton">
          <h1 className="text-2xl font-bold">BRAIDERY</h1>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="border-t py-8 text-center bg-peach-300 dark:bg-darkButton text-white">
          &copy; {new Date().getFullYear()} BRAIDERY. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
