'use client';
import React, { useEffect, useRef } from 'react';

const successStories = [
  {
    quote:
      'LegalConnect helped me find the perfect lawyer for my business needs. The process was smooth and efficient.',
    author: '- John D., Small Business Owner',
  },
  {
    quote:
      "As a lawyer, this platform has connected me with clients I wouldn't have reached otherwise. It's been great for growing my practice.",
    author: '- Sarah L., Family Law Attorney',
  },
  {
    quote:
      'I was struggling with a legal issue, but through this platform, I found an expert lawyer who resolved my case quickly.',
    author: '- Ahmed K., Freelancer',
  },
  {
    quote:
      'This service made it easy for me to get legal advice without the hassle of searching endlessly. Highly recommended!',
    author: '- Maria R., Startup Founder',
  },
  {
    quote:
      'As a corporate lawyer, I’ve gained new clients and expanded my network significantly through this platform.',
    author: '- David T., Corporate Lawyer',
  },
];

const SuccessStories = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
      }
    }, 40); // Adjust speed (lower = faster)

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className=" bg-black mx-auto text-center py-16">
      <h2 className="text-4xl font-bold mb-8 text-white">Success Stories</h2>

      {/* Auto-Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-hidden py-4"
        onMouseEnter={e =>
          (e.currentTarget.style.animationPlayState = 'paused')
        }
        onMouseLeave={e =>
          (e.currentTarget.style.animationPlayState = 'running')
        }
      >
        {successStories.map((story, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white p-8 rounded-xl shadow-lg min-w-[280px] sm:min-w-[350px] md:min-w-[400px] transform hover:scale-105 transition duration-300"
          >
            <p className="mb-4 text-lg italic text-gray-300">{story.quote}</p>
            <p className="font-semibold text-gray-400">{story.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
