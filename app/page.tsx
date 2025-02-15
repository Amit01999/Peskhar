import HomePage from '@/components/HomePage';
import Services from '@/components/Services';
import SuccessStories from '@/components/SuccessStories';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto">
      <section
        className="h-[80vh] flex justify-center items-center text-center bg-cover bg-center relative py-20"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1330033671/photo/focus-on-hammer-group-of-files-on-judge-table-covered-with-dust-concept-of-pending-old-cases.jpg?s=612x612&w=0&k=20&c=4uSq3Yg1yhYHVOdw6xxW-twxLkjD5qcfC80hU01gif8=')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 text-white leading-tight">
            Connecting You with the Right Legal Help
          </h1>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Find experienced lawyers tailored to your legal needs quickly and
            securely.
          </p>
          <div className="flex flex-col md:flex-row items-center max-w-md mx-auto mb-8">
            <Input
              type="text"
              placeholder="Search by specialization or location"
              className="rounded-md mb-4 md:mb-0 md:mr-4 p-4 text-gray-800"
            />
            <Button
              type="submit"
              className="w-full md:w-auto p-4 text-white rounded-md"
            >
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              className="w-full md:w-auto p-4 text-white rounded-md"
            >
              <Link href="/find-lawyer">Find a Lawyer</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full md:w-auto p-4 border-2rounded-md hover:text-white"
            >
              <Link href="/join">Join Our Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      <HomePage />
      <Services />
      <SuccessStories />
    </div>
  );
}
