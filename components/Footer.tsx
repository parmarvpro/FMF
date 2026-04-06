import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-8 bg-neutral-950 border-t border-neutral-800 text-neutral-500 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-bold text-white">Flying Movements Foundation</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-orange-500">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
