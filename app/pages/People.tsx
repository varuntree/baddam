
"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const teamMembers = [
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
    name: "Sarah Miller",
    role: "AI Solutions Architect",
    image: "/test.png"
  },
  {
    name: "David Chen",
    role: "Technical Lead",
    image: "/test.png"
  },
  {
    name: "Emma Wilson",
    role: "Customer Success Manager",
    image: "/test.png"
  }
];

export default function People() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cardsRef.current) return;

    // Clone cards for seamless infinite scroll
    const cards = cardsRef.current.children;
    [...cards].forEach(card => {
      const clone = card.cloneNode(true);
      cardsRef.current?.appendChild(clone);
    });

    // Set initial position
    gsap.set(cardsRef.current, { x: 0 });

    // Create infinite scroll animation
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" }
    });

    const totalWidth = cards[0].clientWidth * cards.length;

    tl.to(cardsRef.current, {
      x: -totalWidth,
      duration: 20,
      ease: "linear"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-orange-500 text-sm tracking-widest">Team</p>
          <h2 className="text-5xl md:text-7xl font-bold mt-2">
            Meet the <span className="italic">incredible</span> team.
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            We pride ourselves of being the best of the best and our team encapsulates that.
          </p>
          <button className="mt-8 px-8 py-3 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition-colors duration-300">
            Book a 15-min call →
          </button>
        </div>

        <div ref={containerRef} className="overflow-hidden">
          <div ref={cardsRef} className="flex gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="relative min-w-[300px] group overflow-hidden rounded-3xl"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
