
"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const teamMembers = [
  {
    name: "James Dunn",
    role: "Head of Conversion",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Ayesha Dune",
    role: "Head of Sales",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Joshua Brown",
    role: "Social Media Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Sarah Wilson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function People() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollElement = scrollerRef.current;
    if (!scrollElement) return;

    // Clone the first few items and append them to create seamless loop
    const scrollContent = Array.from(scrollElement.children);
    scrollContent.forEach(item => {
      const clone = item.cloneNode(true);
      scrollElement.appendChild(clone);
    });

    gsap.to(scrollElement, {
      x: `-50%`,
      ease: "none",
      duration: 20,
      repeat: -1
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="text-center mb-20">
        <p className="text-orange-500 text-sm uppercase tracking-wider mb-4">Team</p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Meet the <span className="italic">incredible</span> team.
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We pride ourselves of being the best of the best and our team encapsulates that.
        </p>
        <button className="mt-8 px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
          Book a 15-min call →
        </button>
      </div>

      <div ref={sliderRef} className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div 
          ref={scrollerRef}
          className="flex gap-6 py-8 px-4"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-none w-72 h-96 rounded-3xl overflow-hidden relative group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
