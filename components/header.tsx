import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/Peshkar1.png" alt="Peshkar" width={120} height={85} />
        </Link>
        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <Link href="/find-lawyer" className="hover:underline">
                Find a Lawyer
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:underline">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Button asChild variant="outline">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
