
import React, { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Company Name */}
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl">BADDAM AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-1">
              <div className="flex space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-gray-300 px-3 py-2 rounded-full text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <button className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base"
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all mt-2">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
