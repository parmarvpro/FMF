import React from 'react';
import { Shield, FileText, Heart, Users } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: Heart, title: 'Ayushman Bharat', description: 'Health coverage and registration support for eligible families.' },
    { icon: FileText, title: 'Aadhaar + PAN', description: 'Updates, linking, and support for identity-related work.' },
    { icon: Shield, title: 'Senior Support', description: 'Specialized help for senior citizen benefits and documentation.' },
    { icon: Users, title: 'Society Camps', description: 'End-to-end camp setup, resident assistance, verification, and follow-up.' },
  ];

  return (
    <section id="services" className="py-24 px-8 bg-neutral-950">
      <h2 className="text-sm uppercase tracking-widest text-orange-500 mb-4">Core Services</h2>
      <h3 className="text-4xl font-black text-white mb-12">Essential documentation and welfare support</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-orange-500 transition-colors">
            <service.icon className="w-10 h-10 text-orange-500 mb-6" />
            <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
            <p className="text-neutral-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
