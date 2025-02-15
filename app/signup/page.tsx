'use client';
// pages/signup.tsx
import React, { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Signup: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();
    // Handle the signup logic here (e.g., API call)
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Signing up with', name, email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
