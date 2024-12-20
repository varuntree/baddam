
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto backdrop-blur-lg bg-white/10 rounded-full border border-white/20 shadow-lg">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Company Name */}
          <Link href="/" className="text-2xl font-bold text-white">
            BADDAM AI
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="backdrop-blur-md bg-white/10 rounded-full px-6 py-2 border border-white/20">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white mx-4 hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button className="backdrop-blur-md bg-white/10 text-white px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all">
              Book Now
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            isOpen ? 'block' : 'hidden'
          } px-4 py-2 backdrop-blur-md bg-black/50 mt-2 rounded-2xl`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-white py-2 hover:text-gray-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button className="w-full text-center backdrop-blur-md bg-white/10 text-white px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all mt-2">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
