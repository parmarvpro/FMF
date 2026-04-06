import React from 'react';

export default function Stats() {
  const stats = [
    { value: '450+', label: 'Societies reached' },
    { value: '12K+', label: 'Cards issued' },
    { value: '24/7', label: 'Field support' },
    { value: '0%', label: 'Bureaucracy friction' },
  ];

  return (
    <section className="py-12 border-y border-orange-500/30 bg-neutral-900">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
            <div className="text-sm uppercase tracking-widest text-neutral-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
