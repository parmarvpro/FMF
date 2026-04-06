import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-8 border-b border-neutral-800">
      <div className="text-xl font-bold tracking-tighter">Flying Movements Foundation</div>
      <div className="flex gap-6 text-sm font-medium text-neutral-400">
        <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
        <a href="#societies" className="hover:text-orange-500 transition-colors">Societies</a>
        <a href="#about" className="hover:text-orange-500 transition-colors">About Us</a>
      </div>
      <a href="#contact" className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition-colors">Get Support</a>
    </nav>
  );
}
