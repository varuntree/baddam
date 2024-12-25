
"use client";

import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="relative group p-6 rounded-3xl border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-primary/30 hover:backdrop-blur-xl">
      <div className="text-[10px] uppercase tracking-wider text-white/70 mb-4">[ {title} ]</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
      <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "In-Person Events",
      description: "Immersive experiences to grow your leadership and your team's collaboration skills"
    },
    {
      title: "Training Programs",
      description: "Leadership training, business mentoring, and masterclasses"
    },
    {
      title: "Executive Coaching",
      description: "1:1 coaching from Ryan and his executive team helps employees develop skills"
    },
    {
      title: "AI-Powered Coaching",
      description: "Scaling the coaching industry globally with groundbreaking AI"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-24">
      <div className="w-full px-6 md:px-12">
        <div className="mb-12 md:mb-16 text-center">
          <div className="text-primary mb-4">[ MORE ]</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-primary">Ways</span> We Can Work Together
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We are creating a world where everyone has the coach and mentor they need
            to unlock their potential and fulfill their purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
