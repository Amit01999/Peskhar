import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

function HeroSection() {
  return (
    <div>
      <section
        className="lg:h-[90vh] flex justify-center items-center text-center bg-cover bg-center relative py-12 md:py-16 px-4 md:px-8"
        style={{
          backgroundImage: `
      url('https://media.istockphoto.com/id/1330033671/photo/focus-on-hammer-group-of-files-on-judge-table-covered-with-dust-concept-of-pending-old-cases.jpg?s=612x612&w=0&k=20&c=4uSq3Yg1yhYHVOdw6xxW-twxLkjD5qcfC80hU01gif8=')
    `,
          backgroundPosition: 'center top',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          {/* Title */}
          <h1 className="text-2xl md:text-5xl font-extrabold mb-3 md:mb-4 leading-tight">
            Connecting You with the Right Legal Help
          </h1>

          {/* Subtitle */}
          <p className="text-xs md:text-lg text-gray-300 mb-4 md:mb-6">
            Find experienced lawyers tailored to your legal needs quickly and
            securely.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row items-center w-full max-w-lg mx-auto space-y-3 md:space-y-0 md:space-x-3">
            <input
              type="text"
              placeholder="Search by specialization or location"
              className="w-full p-2 md:p-3 text-gray-800 rounded-md text-xs md:text-base focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-1 w-auto md:w-auto px-3 py-2 md:px-5 md:py-3 bg-primary text-white rounded-md text-xs md:text-sm"
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-3 mt-5">
            <Link href="/find-lawyer" passHref>
              <button className="w-auto md:w-auto px-4 py-2 md:px-5 md:py-3 bg-primary text-white rounded-md text-xs md:text-sm">
                Find a Lawyer
              </button>
            </Link>

            <Link href="/join" passHref>
              <button className="w-auto md:w-auto px-4 py-2 md:px-5 md:py-3 border border-white text-white rounded-md hover:bg-white hover:text-black text-xs md:text-sm">
                Join Our Platform
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
{
  /* <section
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
      </section> */
}
