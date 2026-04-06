'use client';
import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="py-24 px-8 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
          <span className="text-white">FLYING MOVEMENTS:</span><br />
          <span className="text-orange-500">EMPOWERING</span><br />
          <span className="text-transparent [-webkit-text-stroke:1px_white]">MUMBAI</span>
        </h1>
        <p className="text-xl text-neutral-400 mb-8 max-w-lg">
          Direct support for middle-class societies and citizens. We simplify government scheme access through organized camps, documentation guidance, and follow-up support.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors">Book Free Camp</a>
          <a href="#" className="border border-neutral-700 text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-800 transition-colors">WhatsApp Us</a>
        </div>
      </motion.div>
      <div className="relative h-96 bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-neutral-700">
          [Premium Abstract Visual]
        </div>
      </div>
    </section>
  );
}
