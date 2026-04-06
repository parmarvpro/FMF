'use client';
import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-8 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-3xl mx-auto bg-neutral-950 border border-neutral-800 p-12 rounded-3xl">
        <h2 className="text-4xl font-black text-white mb-12">Connect with the Foundation</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Full name" className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl text-white" />
          <input type="text" placeholder="Society name" className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl text-white" />
          <input type="text" placeholder="Area / locality" className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl text-white" />
          <input type="tel" placeholder="Phone number" className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl text-white" />
          <select className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl text-neutral-400 col-span-full">
            <option>Book Society Camp</option>
            <option>Citizen Support</option>
            <option>Hospital Partnership</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Message" className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl text-white col-span-full h-32" />
          <button type="submit" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors col-span-full">Submit Request</button>
        </form>
      </div>
    </section>
  );
}
