
"use client";

import { useEffect, useState } from 'react';

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "/team1.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "/team2.jpg"
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    image: "/team3.jpg"
  },
  {
    name: "Emily Davis",
    role: "Product Manager",
    image: "/team4.jpg"
  },
  {
    name: "David Wilson",
    role: "Design Lead",
    image: "/team5.jpg"
  }
];

export default function AboutUs() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (teamMembers.length * 100));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We are a team of passionate individuals dedicated to revolutionizing the way
            businesses interact with AI technology. Our mission is to make AI accessible,
            efficient, and impactful for enterprises of all sizes.
          </p>
        </div>

        <div className="relative overflow-hidden py-8">
          <div 
            className="flex gap-8 transition-transform duration-500"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              width: `${teamMembers.length * 400}px`
            }}
          >
            {/* Duplicate the array twice for seamless infinite scroll */}
            {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] bg-neutral-900 rounded-3xl overflow-hidden"
              >
                <div className="h-[400px] relative bg-neutral-800">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-white/70">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
