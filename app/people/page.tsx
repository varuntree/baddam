
"use client";

import React from 'react';
import Navbar from '../components/Navbar';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'James Dunn',
    role: 'Head of Conversion',
    image: '/test.png'
  },
  {
    name: 'Ayesha Dune',
    role: 'Head of Sales',
    image: '/test.png'
  },
  {
    name: 'Joshua Brown',
    role: 'Social Media Executive',
    image: '/test.png'
  },
  {
    name: 'Sarah Chen',
    role: 'Product Designer',
    image: '/test.png'
  }
];

export default function People() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <div className="text-white/60 text-sm font-medium mb-2">Team</div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
            Meet the <span className="italic">incredible</span> team.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We pride ourselves of being the best of the best and our team encapsulates that.
          </p>
          <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
            Book a 15-min call →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-white/60">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
