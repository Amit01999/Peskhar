'use client'; // Only if using Next.js App Router, you can remove this in Pages Router

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can use Lucide or any other icon set

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className=" flex items-center h-[50px]">
          <Image
            src="/logo.png"
            className="h-full w-auto object-contain"
            alt="Peshkar"
            width={150}
            height={150}
          />
        </Link>

        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 items-center">
            <li>
              <Link href="/find-lawyer" className="hover:underline">
                Find a Lawyer
              </Link>
            </li>
            <li>
              <Link href="/ResourcesPage" className="hover:underline">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/AboutPage" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/ContactPage" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Buttons (hidden on mobile) */}
        <div className="hidden md:flex space-x-2">
          <Button asChild variant="outline">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Icon (visible only on small screens) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu (visible when menuOpen is true) */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/find-lawyer"
                  className="block hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Find a Lawyer
                </Link>
              </li>
              <li>
                <Link
                  href="/ResourcesPage"
                  className="block hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/AboutPage"
                  className="block hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/ContactPage"
                  className="block hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="mt-4 flex flex-col space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/login" onClick={() => setMenuOpen(false)}>
                    Log In
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/signup" onClick={() => setMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
