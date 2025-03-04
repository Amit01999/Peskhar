'use client';
import React, { useEffect, useRef } from 'react';

const successStories = [
  {
    quote:
      'পেশকার আমাকে আমার ব্যবসার জন্য উপযুক্ত আইনজীবী খুঁজতে সাহায্য করেছে। প্রক্রিয়াটি ছিল সহজ ও কার্যকর।',
    author: '- জন দে., ছোট ব্যবসার মালিক',
  },
  {
    quote:
      'একজন আইনজীবী হিসেবে, এই প্ল্যাটফর্মটি আমাকে এমন ক্লায়েন্টদের সাথে সংযুক্ত করেছে যাদের কাছে আমি অন্যথায় পৌঁছাতে পারতাম না। এটি আমার পেশা বৃদ্ধির জন্য দারুণ সহায়ক হয়েছে।',
    author: '- সারাহ লু., পারিবারিক আইন বিশেষজ্ঞ',
  },
  {
    quote:
      'আমি একটি আইনি সমস্যায় পড়েছিলাম, কিন্তু এই প্ল্যাটফর্মের মাধ্যমে আমি একজন বিশেষজ্ঞ আইনজীবী পেয়েছি যিনি দ্রুত আমার কেস সমাধান করেছেন।',
    author: '- আহমেদ করিম, ফ্রিল্যান্সার',
  },
  {
    quote:
      'এই সেবার মাধ্যমে সহজেই আমি আইনি পরামর্শ পেয়েছি, অবিরাম খোঁজার ঝামেলা ছাড়াই। অত্যন্ত সুপারিশযোগ্য!',
    author: '- মারিয়া রহমান, স্টার্টআপ প্রতিষ্ঠাতা',
  },
  {
    quote:
      'একজন কর্পোরেট আইনজীবী হিসেবে, আমি এই প্ল্যাটফর্মের মাধ্যমে নতুন ক্লায়েন্ট পেয়েছি এবং আমার নেটওয়ার্ক ব্যাপকভাবে বৃদ্ধি পেয়েছে।',
    author: '- দাউদ তাসনিম, কর্পোরেট আইনজীবী',
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
