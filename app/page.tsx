import HeroSection from '@/components/HeroSection';
import HomePage from '@/components/HomePage';
import Services from '@/components/Services';
import SimplifyWithAI from '@/components/SimplifyWithAI';
import SuccessStories from '@/components/SuccessStories';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className=" mx-auto">
      <HeroSection />
      <HomePage />
      <SimplifyWithAI />
      <Services />
      <SuccessStories />
    </div>
  );
}
