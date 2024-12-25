
"use client";

import React from 'react';

const services = [
  {
    id: 1,
    title: "In-Person Events",
    description: "Immersive experiences to grow your leadership and your team in a collaborative way",
    category: "01",
    imagePath: "/conversational.png"
  },
  {
    id: 2,
    title: "Training Programs",
    description: "Leadership training, business mentoring, and masterclasses",
    category: "02",
    imagePath: "/workflow.png"
  },
  {
    id: 3,
    title: "Executive Coaching",
    description: "1:1 coaching from Ryan and his executive team helps employees to drive growth",
    category: "03",
    imagePath: "/reputational.png"
  },
  {
    id: 4,
    title: "AI-powered Coaching",
    description: "Scaling the coaching industry globally with groundbreaking AI solutions",
    category: "04",
    imagePath: "/robo.jpg"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="w-full px-6 md:px-12">
        <div className="text-center mb-20">
          <p className="text-orange-500 mb-4">WAYS</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We Can Work Together
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            We are creating a world where everyone has the coach and mentor they need
            to unlock their potential and fulfill their purpose
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-6 rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${service.imagePath})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black to-neutral-900 opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-orange-600/30 backdrop-blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <span className="text-orange-500 text-sm">{service.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-4">{service.title}</h3>
                <p className="text-white/70 text-sm">{service.description}</p>
                <div className="mt-8">
                  <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-orange-500 transition-all duration-300">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
