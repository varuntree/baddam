
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Company Name */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white">BADDAM AI</span>
          </div>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:block">
            <div className="relative flex items-center space-x-1 bg-white/10 rounded-full p-1 backdrop-blur-lg">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'text-black bg-white' 
                      : 'text-white hover:text-white/80'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          <button className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeIndex === index
                    ? 'text-white bg-white/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
