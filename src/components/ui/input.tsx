// src/components/ui/input.tsx

"use client";

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-4 py-2 border border-gray-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
    />
  );
};
