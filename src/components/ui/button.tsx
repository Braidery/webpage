// src/components/ui/button.tsx

"use client";
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`px-6 py-3 bg-peach-300 text-white font-semibold rounded-full shadow-md hover:bg-peach-400 dark:bg-darkButton dark:hover:bg-gray-700 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};