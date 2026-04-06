import React from 'react';

export default function WhyUs() {
  const usps = [
    'End-to-end camp management',
    'No burden on the society committee',
    'Follow-up even after the camp',
    'Clear resident guidance',
    'Designed for middle-class housing societies',
    'Trusted, organized, and scalable',
  ];

  return (
    <section id="about" className="py-24 px-8 bg-neutral-950">
      <h2 className="text-4xl font-black text-white mb-12">Why Societies Choose Flying Movements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {usps.map((usp, index) => (
          <div key={index} className="border-l-4 border-orange-500 pl-6 py-2">
            <h4 className="text-xl font-bold text-white">{usp}</h4>
          </div>
        ))}
      </div>
      <p className="text-2xl text-neutral-300 mt-16 italic border-t border-neutral-800 pt-8">
        &ldquo;We do not stop after the camp. We stay with the family and the society until the benefit is actually used.&rdquo;
      </p>
    </section>
  );
}
