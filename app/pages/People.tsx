
"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function People() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const team = [
    {
      name: "James Dunn",
      role: "Head of Conversion",
      image: "/test.png"
    },
    {
      name: "Ayesha Dune",
      role: "Head of Sales",
      image: "/test.png"
    },
    {
      name: "Joshua Brown",
      role: "Social Media Executive",
      image: "/test.png"
    },
    {
      name: "Sarah Chen",
      role: "AI Specialist",
      image: "/test.png"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.children;
    const totalWidth = Array.from(cards).reduce((acc, card) => acc + (card as HTMLElement).offsetWidth + 24, 0);
    
    // Clone cards for seamless loop
    Array.from(cards).forEach(card => {
      const clone = card.cloneNode(true);
      container.appendChild(clone);
    });

    gsap.to(container, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      repeatDelay: 0,
    });

  }, []);

  return (
    <div className="min-h-screen bg-black py-32">
      <div className="text-center mb-16">
        <div className="bg-white/10 text-white px-4 py-1 rounded-full inline-block mb-4">
          Team
        </div>
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-4">
          Meet the <i className="font-serif">incredible</i> team.
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We pride ourselves of being the best of the best and our team encapsulates that.
        </p>
        <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
          Book a 15-min call →
        </button>
      </div>

      <div className="overflow-hidden relative">
        <div 
          ref={containerRef}
          className="flex gap-6 absolute"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[300px] h-[400px] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
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
