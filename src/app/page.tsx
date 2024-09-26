// src/app/page.tsx
"use client"; // <-- Mark this as a client-side component

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
// In components/ui/button.tsx



import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-8">
        Coming Soon: <span className="text-peach-400">BRAIDERY!</span>
      </h1>
      <p className="text-2xl text-center mb-16">Your Ultimate Hair Care Companion.</p>

      <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <Image src="/image/logo.jpeg" alt="BRAIDERY Logo" width={300} height={300} className="rounded-full shadow-lg mx-auto" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">What's <span className="text-peach-400">BRAIDERY</span>?</h2>
          <p className="text-lg">
            BRAIDERY is a comprehensive hair care platform designed to connect individuals with expert braiders and hair care professionals, while also providing personalized hair care routines and recommendations tools. It's a one-stop solution for everything hair-related.
          </p>
        </div>
      </div>

      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Why <span className="text-peach-400">BRAIDERY</span>?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            BRAIDERY is a comprehensive hair care platform designed to connect individuals with expert braiders and hair care professionals, while also providing personalized hair care recommendations and tools. It's a one-stop solution for everything hair-related.
          </p>
          <ul className="list-disc space-y-2 ml-6 text-lg">
            <li>Find Braiders Nearby</li>
            <li>Try New Styles</li>
            <li>AI-Powered Recommendations</li>
            <li>Hair Routine Management</li>
            <li>Showcase for Braiders</li>
            <li>Small Business Integration</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Get Notified When We Launch</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Button type="submit" className="w-full">Register</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
