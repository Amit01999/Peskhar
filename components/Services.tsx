import React from 'react';

const Services = () => {
  const services = [
    { id: 1, title: 'Business Setup', icon: '🚀' },
    { id: 2, title: 'Intellectual Property', icon: '🌐' },
    { id: 3, title: 'Litigation', icon: '📜' },
    { id: 4, title: 'Contract Drafting', icon: '🤝' },
    { id: 5, title: 'Family Law', icon: '👨‍👩‍👧' },
    { id: 6, title: 'Real Estate', icon: '🏡' },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Our Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We provide expert legal solutions tailored to your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.id}
              className="p-8 rounded-xl bg-gray-900 shadow-lg transform hover:scale-105 transition duration-300"
            >
              <span className="text-5xl mb-6 block">{service.icon}</span>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
