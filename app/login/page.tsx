'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (e.g., API call for login)
  };

  return (
    <section className="min-h-screen bg-black flex justify-center items-center py-12">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-4 bg-gray-700 text-white rounded-md border border-gray-600"
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-4 bg-gray-700 text-white rounded-md border border-gray-600"
            />
          </div>
          <Button type="submit" className="w-full  text-white py-3 rounded-md">
            Login
          </Button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-400 hover:text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
