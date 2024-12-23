"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [sliderStyle, setSliderStyle] = useState({});
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const updateSliderPosition = (index: number) => {
    if (index === -1) {
      setSliderStyle({
        opacity: 0,
        transform: 'translateX(0)',
        transition: 'all 0.3s ease'
      });
      return;
    }

    const currentNav = navRefs.current[index];
    if (currentNav) {
      const parentLeft = currentNav.offsetLeft;
      
      setSliderStyle({
        opacity: 1,
        transform: `translateX(${parentLeft}px)`,
        width: `${currentNav.offsetWidth}px`
      });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-sm px-6 md:px-8 lg:px-12"> {/* Added padding here */}
      <div className="max-w-7xl mx-auto"> {/* Removed unnecessary px-4 sm:px-6 lg:px-8 */}
        <div className="flex items-center justify-between h-16">
          {/* Company Name */}
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl">Test It</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-1 relative">
              {/* Slider */}
              <div 
                className="absolute h-[calc(100%-16px)] bg-white/20 top-2 rounded-full -z-10 transition-all duration-300 ease-out"
                style={sliderStyle}
              />
              <div className="flex space-x-4 relative">
                {navItems.map((item, index) => (
                  <Link
                            key={item.name}
                            href={item.href}
                            ref={(el) => {
                              if (el) {
                              navRefs.current[index] = el;
                              }
                            }}
                            className="text-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium relative"
                            onMouseEnter={() => updateSliderPosition(index)}
                            onMouseLeave={() => updateSliderPosition(-1)}
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
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black/30 backdrop-blur-md px-6 md:px-8 lg:px-12`}> {/* Added padding here */}
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full text-left text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}