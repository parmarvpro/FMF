import React from 'react';

export default function Partnership() {
  return (
    <section id="societies" className="py-24 px-8 bg-neutral-900 border-y border-neutral-800">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="h-96 bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-600">
          [Society Infrastructure Visual]
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-widest text-orange-500 mb-4">Building Societal Infrastructure</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">We help societies bring government benefits to residents.</h3>
          <ul className="text-neutral-400 space-y-4 mb-8">
            <li>• We handle setup</li>
            <li>• We manage resident flow</li>
            <li>• We assist with documents</li>
            <li>• We support the committee</li>
          </ul>
          <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors">Join as Society Partner</a>
        </div>
      </div>
    </section>
  );
}
