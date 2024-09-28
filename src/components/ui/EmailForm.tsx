// src/components/ui/EmailForm.tsx
"use client"; 

import { useState, FormEvent } from 'react';
import { db } from '@/utils/firebase';
import { addDoc, collection } from 'firebase/firestore';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      if (!validateEmail(email)) {
        setMessage('Please enter a valid email address.');
        return;
      }

      // Add the email to Firestore
      await addDoc(collection(db, 'emails'), { email });

      setMessage('Email submitted successfully!');
      setEmail('');
    } catch (error) {
      console.error('Error storing email:', error);
      setMessage('Error submitting email. Please try again.');
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label htmlFor="email" className="font-medium">
        Enter your email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border px-4 py-2 rounded"
        placeholder="Enter your email to be notified"
      />
      <button type="submit" className="bg-[#ECAB88] text-white px-4 py-2 rounded">
        Submit
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default EmailForm;
