'use client';

import React from 'react';
import Head from 'next/head';

const steps = [
  {
    id: '1',
    title: 'Share your problem',
    description:
      'Briefly describe your legal issue so we can guide you to the right lawyer.',
  },
  {
    id: '2',
    title: 'Categorize with AI',
    description:
      'Our AI will help categorize your case for a better match with specialized lawyers.',
  },
  {
    id: '3',
    title: 'Connect & Consult',
    description:
      'Schedule consultations and discuss your case or take legal consultancy.',
  },
  {
    id: '4',
    title: 'Hire & Get Started',
    description:
      'Choose the right lawyer and begin your legal journey with confidence.',
  },
];

export default function Home() {
  return (
    <div className="bg-black text-white min-h-fit py-16 px-6">
      <Head>
        <title>Legal Tech Startup</title>
      </Head>

      <main className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">How It Works</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Follow these steps to get started with ease.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map(step => (
            <div
              key={step.id}
              className="p-8 rounded-xl bg-gray-900 shadow-lg transform hover:scale-105 transition duration-300"
            >
              <span className="text-4xl font-bold text-gray-400">
                {step.id}
              </span>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-400 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
