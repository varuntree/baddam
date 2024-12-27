
"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const teamMembers = [
  {
    name: "James Dunn",
    role: "Head of Conversion",
    image: "/team1.jpg"
  },
  {
    name: "Ayesha Dune",
    role: "Head of Sales",
    image: "/team2.jpg"
  },
  {
    name: "Joshua Brown",
    role: "Social Media Executive",
    image: "/team3.jpg"
  },
  {
    name: "Sarah Connor",
    role: "AI Specialist",
    image: "/team4.jpg"
  },
  {
    name: "Mike Chen",
    role: "Lead Developer",
    image: "/team5.jpg"
  }
];

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 20;
    const cards = containerRef.current?.querySelectorAll('.team-card');
    
    if (cards) {
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 3),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });
    }
  }, []);

  return (
    <div className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gray-400 text-sm uppercase tracking-wider">Team</span>
          <h2 className="text-6xl font-bold mb-4">
            Meet the <span className="italic text-orange-500">incredible</span> team.
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We pride ourselves of being the best of the best and our team encapsulates that.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Book a 15-min call →
          </button>
        </div>

        <div ref={containerRef} className="overflow-hidden">
          <div className="flex gap-6">
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <div key={index} className="team-card flex-shrink-0 w-[400px] bg-zinc-900 rounded-3xl overflow-hidden">
                <div className="h-[400px] relative bg-gradient-to-b from-zinc-800 to-zinc-900">
                  <div className="absolute inset-0 opacity-50" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
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
